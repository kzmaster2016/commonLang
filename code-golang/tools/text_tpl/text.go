package text_tpl

import (
	"fmt"
	"text/template"
	"log"
	"os"
	"strings"
	"text/scanner"
)

func ParseToken() {
	const src = `
// This is scanned code.
if a > 10 {{-}
	someParsable=text
	someParsable2 = bool
	someParsable3 = nil
someParsable4 = 12
someParsable5 = 12.231
someParsable6 = "sfgfdsf"
someParsable7 = []int{1,2}
}`

	var s scanner.Scanner
	s.Init(strings.NewReader(src))
	s.Filename = "example"
	for tok := s.Scan(); tok != scanner.EOF; tok = s.Scan() {
		fmt.Printf("%s: %s\n", s.Position, s.TokenText())
	}
	// todo d1
}

func RuneCalc()  {
	v1:='a'
	v2 := '0'

	fmt.Println(v1-v2,int(v1-v2),'a'-'0',int('a'),int('0'))
}

func ExampleTemplate() {
	// Define a template.
	const letter = `
Dear {{.Name}},
{{if .Attended}}
It was a pleasure to see you at the wedding.
{{- else}}
It is a shame you couldn't make it to the wedding.
{{- end}}
{{with .Gift -}}
Thank you for the lovely {{.}}.
{{end}}
Best wishes,
Josie
`

	// Prepare some data to insert into the template.
	type Recipient struct {
		Name, Gift string
		Attended   bool
	}
	var recipients = []Recipient{
		{"Aunt Mildred", "bone china tea set", true},
		{"Uncle John", "moleskin pants", false},
		{"Cousin Rodney", "", false},
	}

 
	// Create a new template and parse the letter into it.
	t := template.Must(template.New("letter").Parse(letter))

	// Execute the template for each recipient.
	for _, r := range recipients {
		err := t.Execute(os.Stdout, r)
		if err != nil {
			log.Println("executing template:", err)
		}
	}

	// Output:
	// Dear Aunt Mildred,
	//
	// It was a pleasure to see you at the wedding.
	// Thank you for the lovely bone china tea set.
	//
	// Best wishes,
	// Josie
	//
	// Dear Uncle John,
	//
	// It is a shame you couldn't make it to the wedding.
	// Thank you for the lovely moleskin pants.
	//
	// Best wishes,
	// Josie
	//
	// Dear Cousin Rodney,
	//
	// It is a shame you couldn't make it to the wedding.
	//
	// Best wishes,
	// Josie
}
