<template>
  <div class="child">
    <h1>{{ childName }}</h1>
    <h2>{{ dan }}단</h2>
    <span v-for="i in 9" :key="i">
      {{ i * dan }}
    </span>
    <button @click="changeName">Change Name</button>
  </div>
</template>
<script>
export default {
  name: "Gugudan",
  props: {
    dan: Number,
  },
  data() {
    return {
      childName: "gugudan component",
    };
  },
  methods: {
    changeName() {
      this.$emit("onChangeName", this.dan, this);
    },
  },
};
</script>
<style scoped>
.child {
  border: 2px solid black;
  margin-bottom: 10px;
}
</style>
