<style lang="less">
.el-tree {
  width: 200px;
  .el-tree-node {
  }
  .treeNode {
    width: 100%;
    .el-dropdown {
      float: right;
    }
  }
}
</style>
<template>
  <div>
    <!-- <el-tree :data='data'
             :props="defaultProps"></el-tree> -->
    <el-tree :render-content="renderContent"
             :expand-on-click-node='false'
             :data='data'></el-tree>

    <!-- <input type="text" on-input={e => (data.name = e.target.value)} />
          <i class="el-icon-check"></i>  -->
  </div>
</template>
<script>
export default {
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      data: []
      //   defaultProps: {
      //     children: "children",
      //     label: "name"
      //   }
    };
  },
  mounted() {
    window.vm = this.$data;
  },
  watch: {
    treeData(newVal, oldVal) {
      //   console.log("treeData变化了");
      this.formateTreeData();
      if (newVal.length > 0) {
      }
    }
  },
  methods: {
    renderContent(h, { node, data, store }) {
      // vueCli2里 jsx不能直接使用v-model，识别不了，要安装插件babel-plugin-jsx-v-model/babel-preset-es2015
      // 当然也可以用原生on-input事件来模拟，不用v-model
      console.log(node, data, store);
      return (
        <div class="treeNode">
          <span>{data.name}</span>
          <i class="el-icon-check" on-click={() => this.changeName(data)}></i>
          {/**添加注释 */}
          <el-dropdown on-command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="change">改名</el-dropdown-item>
              <el-dropdown-item command="del">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      );
    },
    changeName(data) {
      console.log(data);
    },
    del(data) {
      console.log(data);
    },
    handleCommand(type) {
      console.log(type);
    },
    formateTreeData() {
      //返回想要的数据格式
      let treeMap = this.treeData.reduce((obj, item, index, self) => {
        item.label = item.name;
        obj[item.id] = item;
        return obj;
      }, {});
      //this.treeData[0] === treeMap[1] true  引用类型内存地址值的引用
      let res = this.treeData.reduce((ary, item, index, self) => {
        let pid = item.pid;
        let parent = treeMap[pid];
        if (pid == 0) {
          //根节点->文件夹
          ary.push(item);
        } else {
          //treeMap[item.pid]父元素
          if (parent.children) {
            parent.children.push(item);
          } else {
            parent.children = [item];
          }
        }
        return ary;
      }, []);
      this.data = res;
    }
  }
};
</script>