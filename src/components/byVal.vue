<style lang="less">
.load-parent {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  .loading-spinner {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: red;
    }
  }
}
</style>
<template>
  <div>
    父组件：123
    {{obj.name}}{{obj.age}}
    <child :ary='ary'
           @click.native="nativeClick"></child>
    <ul>
      <li v-for="item in ary"
          :key="item">{{item}}</li>
    </ul>
    <button @click="add">增加</button>
    <!-- 自定义指令:自定义指令是用来操作DOM的。写一个加载第三方组件的 但凡遇到第三方插件如何与Vue.js集成的问题，都可以尝试用自定义指令实现。-->
    <input type="text"
           v-focus>
    <p v-color-define='"red"'>颜色是红的</p>
    <p v-color-define='"green"'>颜色是绿的</p>
    <button @click="loading=true;">控制loading</button>
    <div v-loading-my="loading"></div>
    <!-- 谷歌图片的加载做得非常优雅，在图片未完成加载前，用随机的背景色占位，图片加载完成后才直接渲染出来。用自定义指令可以非常方便的实现这个功能。 -->
    <div v-img='item.url'
         v-for="item in imgList"
         :key="item.url"></div>
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
      ary: [1, 2, 3],
      obj: {}, //空对象后期加的属性不能展示，假若对象原始有一个属性了后期的属性可以展示。
      loading: false,
      imgList: [
        { url: "https://0x9.me/3Vjnd" },
        { url: "http://atjf.top/rHKwJw" }
      ]
    };
  },
  directives: {
    focus: {
      inserted: function(el, binding) {
        el.focus();
      }
    },
    img(el, binding) {
      let color = Math.floor(Math.random() * 1000000);
      el.style.backgroundColor = `#${color}`;
      let img = new Image();
      img.src = binding.value;
      img.onload = function() {
        el.style.backgroundImage = `url(${binding.value})`;
      };
    },
    loadingMy: {
      bind: (el, binding) => {
        if (true) {
          const tempDiv = document.createElement("div");
          el.className = "load-parent";
          tempDiv.className = "loading-spinner";
          tempDiv.innerHTML = `<i class='el-icon-loading'></i>`;
          el.style.display = "none";
          el.appendChild(tempDiv);
        }
      },
      inserted(el, binding) {},
      update(el, binding) {
        if (binding.value) {
          el.style.display = "block";
          document.body.appendChild(el);
        } else {
          el.style.display = "none";
          // document.body.removeChild(el);
        }
      }
    },
    colorDefine: {
      bind: function(el, binding) {
        // 指令第一次绑定到元素时调用，只执行一次
        // 参数el 就是指令绑定的 DOM 元素，而binding是一个对象，它包含一下属性：name、value、oldValue、expression、arg、modifiers。
        // 除了 el 之外，binding、vnode 属性都是只读的
      },
      inserted: function(el, binding) {
        // 被绑定的元素插入到父节点的Dom中时调用
        el.style.color = binding.value;
      },
      update: function() {
        //被绑定元素所在的模板更新时调用
      },
      componentUpdated: function() {
        //被绑定元素所在模板完成一次更新周期时调用，除了update和componentUpdated钩子函数之外，每个钩子都含有
        // el/binding/vnode这三个参数，oldVnode 只有在 update 与 componentUpdated 钩子中生效
      },
      unbind: function() {
        //指令与元素解绑时调用，只执行一次
      }
    }
  },
  mounted() {
    window.vm = this.$data;
  },
  methods: {
    add() {
      this.ary[3] = 4;
      this.$forceUpdate(); //强制更新
    },
    nativeClick() {
      //加上.native该方法才可以执行。加上了相当于在该组件的根元素上添加了这个方法
      this.obj.name = "ywx";
      this.obj.age = 12;
    }
  }
};
</script>