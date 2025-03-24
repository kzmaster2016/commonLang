import argparse
import sys

# 创建命令行解析器
parser = argparse.ArgumentParser(description='Simple Calculator')
parser.add_argument('-o', '--operation', choices=['add', 'subtract'], required=True, help='Operation to perform: add or subtract')
parser.add_argument('-n1', '--num1', type=int, required=True, help='First number')
parser.add_argument('-n2', '--num2', type=int, required=True, help='Second number')

# 解析命令行参数
args = parser.parse_args()

# 执行操作
if args.operation == 'add':
    print(f"{args.num1} + {args.num2} = {args.num1 + args.num2}")
elif args.operation == 'subtract':
    print(f"{args.num1} - {args.num2} = {args.num1 - args.num2}")
else :
    print(f"Invalid operation: {args.operation}")
    

print(sys.argv)

# python .\code-python\cli\argv_test.py -o add -n1 10 -n2 5
