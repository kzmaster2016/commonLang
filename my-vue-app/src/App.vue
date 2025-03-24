<script>
import HelloWorld from './components/HelloWorld.vue'
import ShapeSelector from "./components/ShapeSelector.vue";
import CanvasBoard from "./components/CanvasBoard.vue";
import TextCanvas from "./components/TextCanvas.vue";
import CanvasAnimations from "./components/CanvasAnimations.vue";
import CanvasShoePanel from "./components/CanvasShoePanel.vue";


export default {
  name: "App",
  components: { ShapeSelector, CanvasBoard, TextCanvas, CanvasAnimations, CanvasShoePanel },
  data() {
    return {
      selectedShape: "Rectangle",
    };
  },
  methods: {
    setShape(shape) {
      this.selectedShape = shape;
    },
  },
};
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <!-- <ShapeSelector @shape-selected="setShape" />
  <CanvasBoard :selectedShape="selectedShape" /> -->

  <TextCanvas/>
  <CanvasAnimations/>

  <CanvasShoePanel/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app {
  /* display: flex; */
  gap: 20px;
  padding: 20px;
}
</style>
