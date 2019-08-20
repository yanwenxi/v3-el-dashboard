<template>
  <div>
    父组件：123
    <child></child>
    <ul>
      <li v-for="item in ary"
          :key="item">{{item}}</li>
    </ul>
    <button @click="add">增加</button>
  </div>
</template>
<script>
import child from "./byVal/child";
export default {
  name: "byVal",
  components: {
    child
  },
  data() {
    return {
      a: 123,
      ary: [1, 2, 3]
    };
  },
  mounted() {
    window.vm = this.$data;
  },
  methods: {
    add() {
      this.ary[3] = 4;
      this.$forceUpdate(); //强制更新
    }
  }
};
</script>