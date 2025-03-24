<template>
    <div class="canvas-container">
      <div class="controls">
        <button @click="startAnimation('bouncingBalls')">Bouncing Balls</button>
        <button @click="startAnimation('starfield')">Starfield</button>
        <button @click="startAnimation('wave')">Wave</button>
        <button @click="stopAnimation">Stop Animation</button>
      </div>
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: "CanvasAnimations",
    data() {
      return {
        canvasWidth: 800,
        canvasHeight: 600,
        ctx: null,
        animationId: null, // Stores the current animation frame ID
        currentAnimation: null, // Current animation function
      };
    },
    mounted() {
      const canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
    },
    methods: {
      startAnimation(type) {
        this.stopAnimation(); // Stop any previous animation
        if (type === "bouncingBalls") {
          this.currentAnimation = this.animateBouncingBalls;
        } else if (type === "starfield") {
          this.currentAnimation = this.animateStarfield;
        } else if (type === "wave") {
          this.currentAnimation = this.animateWave;
        }
        this.currentAnimation();
      },
      stopAnimation() {
        if (this.animationId) {
          cancelAnimationFrame(this.animationId);
          this.animationId = null;
          this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // Clear canvas
        }
      },
      animateBouncingBalls() {
        const ctx = this.ctx;
        const balls = Array.from({ length: 20 }, () => ({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5,
          radius: Math.random() * 20 + 10,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        }));
  
        const animate = () => {
          ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  
          balls.forEach((ball) => {
            ball.x += ball.vx;
            ball.y += ball.vy;
  
            if (ball.x < ball.radius || ball.x > this.canvasWidth - ball.radius) {
              ball.vx *= -1;
            }
            if (ball.y < ball.radius || ball.y > this.canvasHeight - ball.radius) {
              ball.vy *= -1;
            }
  
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = ball.color;
            ctx.fill();
            ctx.closePath();
          });
  
          this.animationId = requestAnimationFrame(animate);
        };
  
        animate();
      },
      animateStarfield() {
        const ctx = this.ctx;
        const stars = Array.from({ length: 100 }, () => ({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          size: Math.random() * 2,
          speed: Math.random() * 2 + 0.5,
        }));
  
        const animate = () => {
          ctx.fillStyle = "black";
          ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  
          stars.forEach((star) => {
            star.y += star.speed;
            if (star.y > this.canvasHeight) {
              star.y = 0;
              star.x = Math.random() * this.canvasWidth;
            }
  
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
          });
  
          this.animationId = requestAnimationFrame(animate);
        };
  
        animate();
      },
      animateWave() {
        const ctx = this.ctx;
        const wave = {
          amplitude: 50,
          frequency: 0.02,
          phase: 0,
        };
  
        const animate = () => {
          ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  
          ctx.beginPath();
          ctx.moveTo(0, this.canvasHeight / 2);
  
          for (let x = 0; x < this.canvasWidth; x++) {
            const y =
              this.canvasHeight / 2 +
              wave.amplitude * Math.sin(wave.frequency * x + wave.phase);
            ctx.lineTo(x, y);
          }
  
          ctx.strokeStyle = "blue";
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.closePath();
  
          wave.phase += 0.1;
          this.animationId = requestAnimationFrame(animate);
        };
  
        animate();
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
    margin-bottom: 10px;
  }
  canvas {
    border: 1px solid #ccc;
  }
  button {
    padding: 10px 15px;
    cursor: pointer;
  }
  </style>
  