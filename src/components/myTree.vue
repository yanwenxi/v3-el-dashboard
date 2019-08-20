<template>
  <div>
    <my-tree :treeData='treeData'></my-tree>
  </div>
</template>
<script>
import myTree from "./myTree/index";
export default {
  name: "highTree",
  components: {
    myTree
  },
  data() {
    return {
      treeData: []
    };
  },
  mounted() {
    window.vm = this.$data;
    this.getMyTreedata();
  },
  methods: {
    getMyTreedata() {
      this.$get("./myTreedata").then(res => {
        this.treeData = [...res.data.parent, ...res.data.child];
      });
    }
  }
};
</script>