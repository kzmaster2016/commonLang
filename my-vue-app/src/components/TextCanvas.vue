<template>
  <div class="canvas-container">
    <div class="controls">
      <label>
        Pen Color:
        <input type="color" v-model="penColor" />
      </label>
      <label>
        Pen Width:
        <input type="number" v-model="penWidth" min="1" max="20" />
      </label>
      <button @click="clearCanvas">Clear Canvas</button>
      <button @click="saveCanvas">Save Canvas</button>
    </div>
    <canvas
      ref="canvas"
      :width="canvasWidth"
      :height="canvasHeight"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "FreeDrawCanvas",
  data() {
    return {
      canvasWidth: 800,
      canvasHeight: 600,
      ctx: null,
      isDrawing: false,
      penColor: "#000000",
      penWidth: 5,
      lastPosition: { x: 0, y: 0 },
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.ctx = canvas.getContext("2d");
    this.initializeCanvas();
  },
  methods: {
    initializeCanvas() {
      const ctx = this.ctx;
      ctx.fillStyle = "#ffffff"; // Set white background
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
    startDrawing(event) {
      this.isDrawing = true;
      const { offsetX, offsetY } = event;
      this.lastPosition = { x: offsetX, y: offsetY };
    },
    draw(event) {
      if (!this.isDrawing) return;

      const { offsetX, offsetY } = event;
      const ctx = this.ctx;

      ctx.strokeStyle = this.penColor;
      ctx.lineWidth = this.penWidth;
      ctx.lineCap = "round"; // Makes the stroke rounded
      ctx.beginPath();
      ctx.moveTo(this.lastPosition.x, this.lastPosition.y);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      ctx.closePath();

      this.lastPosition = { x: offsetX, y: offsetY };
    },
    stopDrawing() {
      this.isDrawing = false;
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.initializeCanvas();
    },
    saveCanvas() {
      const canvas = this.$refs.canvas;
      const link = document.createElement("a");
      link.download = "canvas-drawing.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    },
  },
};
</script>

<style scoped>
.canvas-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
