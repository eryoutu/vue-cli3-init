<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <icon-svg name="show" className="show"></icon-svg>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
