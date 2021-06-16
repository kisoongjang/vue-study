<template>
  <div class="home">
    <h1>Hello World</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello KB" />
    <Test msg="This is Test Component" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Test,
  },
};
</script>

<style scoped></style>
