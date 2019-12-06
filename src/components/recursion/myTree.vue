<style lang="less" scoped>
.wrap {
  li {
    cursor: pointer;
    padding: 5px 0;
    position: relative;
    span {
      display: inline-block;
      border: 1px solid red;
      padding: 0 5px;
      height: 30px;
      line-height: 30px;
    }
    ul {
      padding-left: 30px;
    }
  }
  ul {
    li {
      &::after {
        content: "";
        position: absolute;
        left: -15px;
        top: 20px;
        border: none;
        border-bottom: 1px solid green;
        width: 15px;
      }
      &:not(:last-child)::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 0;
        height: 100%; //或者去掉高写bottom:0自动拉开
        border-left: 1px solid green;
      }
      &:last-child::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 0;
        height: 20px;
        border-left: 1px solid green;
      }
    }
  }
  //可以加到引用的组件里。找一个唯一的类名一层层的找到。
  // & > ul:first-child {
  //   & > li:first-child {
  //     &::before {
  //       height: calc(100% - 20px);
  //       top: 20px;
  //     }
  //   }
  // }
}
</style>
<template>
  <div class="wrap">
    <ul class='firstUl'>
      <li v-for="(item,index) in list"
          :key="index">
        <span>{{item.name}}</span>
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