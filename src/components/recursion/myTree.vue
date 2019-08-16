<template>
  <div>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">
        <p>{{item.name}}</p>
        <tree-menu :list='item.cList'></tree-menu>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "treeMenu",
  props: ["list"],
  data() {
    return {
      a: 123
    };
  },
  mounted() {
    // console.log(this.list);
  }
};
</script>