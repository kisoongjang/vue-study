<template>
  <div>
    <h1>Actions Test</h1>
    <h2>name : {{ n }}</h2>
    <h2>age :{{ a }}</h2>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
// mapState -> computed
// mapMutations, mapActions -> methods

export default {
  name: "Actions Test",

  computed: {
    // this.dan, this.name, this.age 이렇게 사용가능
    // ...mapState(["dan", "name", "age"]),
    ...mapState({ d: "dan", n: "name", a: "age" }),
  },
  methods: {
    ...mapActions(["testActions"]),
    ...mapMutations({ testMutationComponent: "testMutation" }),
  },
  mounted() {
    // this.$store.dispatch("testActions", { name: "kisoong", age: 12 });
    this.testActions({ name: "kisoong", age: 14 });

    let context = this;
    setTimeout(() => {
      context.testMutationComponent({ name: "test", age: "15" });
    }, 5000);
  },
};
</script>
<style scoped></style>
