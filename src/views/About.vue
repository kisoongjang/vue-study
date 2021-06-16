<template>
  <div class="about">
    <h1>This is Gugudan Page</h1>

    <!-- ref를 사용한 Child Component Data Get/Set -->
    <Gugudan ref="childComp" :dan="$store.state.dan" />
    <button @click="getChildValue()">getChildValue</button>
    <button @click="setChildValue()">setChildValue</button>

    <!-- Event를 이용한 Child Component 이벤트발생시 접근 -->
    <template v-for="i in 9">
      <Gugudan @onChangeName="onChangeNameParent" :dan="i" :key="i" />
    </template>
  </div>
</template>
<script>
import Gugudan from "@/components/Gugudan.vue";

export default {
  name: "About",

  components: {
    Gugudan,
  },

  // Hook
  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("BeforeMount");
  },

  mounted() {
    console.log("mounted");
    // this.sayhi();
    let context = this;
    setTimeout(function () {
      console.log("settimeout");
      context.dan = 6; // this.dan
    }, 1000);
    setTimeout(function () {
      console.log("settimeout");
      context.dan = context.$store.state.dan; // this.$store.state.dan
    }, 5000);
    setTimeout(function () {
      console.log("settimeout");
      context.$store.state.dan = 2; // this.$store.state.dan
    }, 10000);
  },

  destroyed() {
    console.log("destroyed");
  },

  updated() {
    console.log("updated");
  },

  computed: {},

  data() {
    return {
      a: 1,
      str: "Kisoong",
      dan: 3,
      obj: { a: 1, b: 2, c: ["b", "c"] },
    };
  },

  methods: {
    sayhi() {
      alert("Hi " + this.str);
    },
    sayName(str) {
      alert("Hi " + str);
    },
    getChildValue() {
      console.log("getChildValue");
      alert(this.$refs.childComp.childName);
    },
    setChildValue() {
      this.$refs.childComp.childName = "Changed Name";
    },
    onChangeNameParent(value, child) {
      //   alert(value);
      console.log(value, child);
      // 선택한 child component 이름을 변경해보세요
      child.childName = value;
    },
  },
};
</script>
