<template>
    <div class="shoe-panel">
      <div class="controls">
        <label>
          Choose Color:
          <input type="color" v-model="selectedColor" />
        </label>
        <label>
          Font Size:
          <input type="number" v-model="fontSize" min="10" max="100" />
        </label>
        <input type="file" @change="uploadImage" />
        <button @click="exportCanvas">Export Design</button>
      </div>
      <canvas
        ref="canvas"
        :width="canvasWidth"
        :height="canvasHeight"
        @mousedown="handleMouseDown"
      ></canvas>
      <div v-if="showInput" class="text-input" :style="inputStyle">
        <input
          ref="textInput"
          type="text"
          v-model="currentText"
          @keyup.enter="addText"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CanvasShoePanel",
    data() {
      return {
        canvasWidth: 800,
        canvasHeight: 600,
        ctx: null,
        selectedColor: "#000000",
        fontSize: 20,
        showInput: false,
        inputStyle: {},
        currentText: "",
        textPosition: { x: 0, y: 0 },
      };
    },
    mounted() {
      const canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
  
      // Initialize canvas with a basic shoe outline or design
      this.drawShoeOutline();
    },
    methods: {
      drawShoeOutline() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  
        // Example: Draw a simple shoe outline
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(200, 500);
        ctx.quadraticCurveTo(400, 100, 600, 500);
        ctx.closePath();
        ctx.stroke();
      },
      handleMouseDown(event) {
        const canvas = this.$refs.canvas;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
  
        this.showInput = true;
        this.textPosition = { x, y };
        this.inputStyle = {
          position: "absolute",
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        };
  
        this.$nextTick(() => {
          this.$refs.textInput.focus();
        });
      },
      addText() {
        if (!this.currentText) return;
  
        const ctx = this.ctx;
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = this.selectedColor;
        ctx.fillText(this.currentText, this.textPosition.x, this.textPosition.y);
  
        // Reset input
        this.currentText = "";
        this.showInput = false;
      },
      uploadImage(event) {
        const file = event.target.files[0];
        if (!file) return;
  
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.canvasWidth, this.canvasHeight);
          };
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      },
      exportCanvas() {
        const canvas = this.$refs.canvas;
        const link = document.createElement("a");
        link.download = "shoe-design.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      },
    },
  };
  </script>
  
  <style scoped>
  .shoe-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .controls {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  canvas {
    border: 1px solid #ccc;
    cursor: crosshair;
  }
  .text-input {
    position: absolute;
    z-index: 10;
  }
  .text-input input {
    font-size: 16px;
    padding: 5px;
  }
  </style>
  