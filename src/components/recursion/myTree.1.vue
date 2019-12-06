<style lang="less" scoped>
.wrap {
  width: 300px;
  li {
    cursor: pointer;
    p {
      height: 30px;
      line-height: 30px;
    }
    ul {
      padding-left: 20px;
    }
  }
}
</style>
<template>
  <div class="wrap">
    <ul>
      <li v-for="(item,index) in list"
          :key="index">
        <p><i class="el-icon-circle-plus-outline"
             @click="plusClick(item,index)"
             v-if="item.cList"></i>{{item.name}}</p>
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
    window.vm = this.$data;
    // console.log(this.list);
  },
  methods: {
    plusClick(item, index) {
      //控制展开还是收缩
    }
  }
};
</script>