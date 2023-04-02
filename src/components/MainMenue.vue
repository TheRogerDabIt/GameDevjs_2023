<template>
    <Transition>
      <div v-if="show">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>{{ title }}</h1>
        <button @click=startGame>Start Game</button>
        <button @click=quitGame>Quit</button>
      </div>
    </Transition>
  </template>


<script>
import { World } from '../World/World.js';
import {main, quit} from '../main.js';

export default {
  name: 'MainMenue',
  props: {
    title: String
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    startGame() {
      this.show = false;
      main();
    },
    quitGame() {
      quit();
    },
    ingameMenu() {
      console.log('Esc pressed');
      this.show = !this.show;
    }
  },
  mounted() {
    window.addEventListener("keyup", e => {
      this.ingameMenu();
    });
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active  {
  transition: opacity 0.5s ease
}

.v-enter-from,
.v-leave-to  {
  opacity: 0;
}
</style>
