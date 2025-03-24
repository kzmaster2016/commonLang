<template>
    <div class="shape-selector">
      <h3>Select Shape</h3>
      <button v-for="shape in shapes" :key="shape" @click="selectShape(shape)">
        {{ shape }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShapeSelector",
    data() {
      return {
        shapes: ["Rectangle", "Circle", "Triangle"],
      };
    },
    methods: {
      selectShape(shape) {
        this.$emit("shape-selected", shape);
      },
    },
  };
  </script>
  
  <style scoped>
  .shape-selector {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  