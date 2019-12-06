<template>
  <div>
    子组件
    <button @click="change">改变父传引用值</button>
  </div>
</template>
<script>
export default {
  props: ["ary"],
  name: "byValChild",
  data() {
    return {
      a: 123
    };
  },
  methods: {
    change() {
      this.ary[0] = 123;
    }
  }
};
</script>