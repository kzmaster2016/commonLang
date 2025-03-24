<template>
    <div class="canvas-board">
      <canvas
        ref="canvas"
        :width="canvasWidth"
        :height="canvasHeight"
        @mousedown="startDrawing"
        @mouseup="stopDrawing"
        @mousemove="draw"
      ></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: "CanvasBoard",
    props: ["selectedShape"],
    data() {
      return {
        canvasWidth: 800,
        canvasHeight: 600,
        isDrawing: false,
        startX: 0,
        startY: 0,
        ctx: null,
      };
    },
    mounted() {
      const canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
    },
    methods: {
      startDrawing(event) {
        this.isDrawing = true;
        this.startX = event.offsetX;
        this.startY = event.offsetY;
      },
      stopDrawing() {
        this.isDrawing = false;
        this.ctx.closePath();
      },
      draw(event) {
        if (!this.isDrawing) return;
  
        const currentX = event.offsetX;
        const currentY = event.offsetY;
  
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // Clear the canvas
  
        switch (this.selectedShape) {
          case "Rectangle":
            this.drawRectangle(this.startX, this.startY, currentX, currentY);
            break;
          case "Circle":
            this.drawCircle(this.startX, this.startY, currentX, currentY);
            break;
          case "Triangle":
            this.drawTriangle(this.startX, this.startY, currentX, currentY);
            break;
        }
      },
      drawRectangle(x1, y1, x2, y2) {
        const width = x2 - x1;
        const height = y2 - y1;
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(x1, y1, width, height);
      },
      drawCircle(x1, y1, x2, y2) {
        const radius = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) / 2;
        this.ctx.beginPath();
        this.ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
      },
      drawTriangle(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x1 - (x2 - x1), y2);
        this.ctx.closePath();
        this.ctx.stroke();
      },
    },
  };
  </script>
  
  <style scoped>
  .canvas-board {
    border: 1px solid #ccc;
    display: inline-block;
  }
  canvas {
    cursor: crosshair;
  }
  </style>
  