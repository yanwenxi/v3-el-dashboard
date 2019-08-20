<style lang="less" scoped>
.upload {
  position: relative;
  input {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div>
    <el-button class="upload">上传<input type="file"
             id="upload"></el-button>
    <my-tree :list='treeData'></my-tree>
  </div>
</template>
<script>
import myTree from "./recursion/myTree";
export default {
  name: "recursion",
  components: {
    myTree
  },
  created() {},
  mounted() {
    window.vm = this.$data;
    this.watchUpload();
    this.getdata();
  },
  data() {
    return {
      treeData: []
    };
  },
  methods: {
    getdata() {
      this.$get("./recursiondata").then(res => {
        this.treeData = res.data;
      });
    },
    watchUpload() {
      let ele = document.querySelector("#upload");
      ele.addEventListener("change", e => {
        // console.log(e.target.files[0] == ele.files[0]); true
        let myFormData = new FormData();
        myFormData.append("fileCon", ele.files[0]);
        myFormData.append("id", 123);
        // this.$post()上传即可。
        /** 以下是上传图片，转base64*/
        let reader = new FileReader();
        reader.readAsDataURL(ele.files[0]); //异步读取
        reader.onload = e => {
          //读取完成
          //e.target.result =>转换成的base64，不用真实上传即可完成图片的回显
        };
        /** base64 和 blob 可以互转*/
      });
    },
    downLoadpostBinary() {
      // 假设前端用post请求后台，后台返回的是csv文件的二进制流，前端实现下载该文件
      //  1、先设置responseType:'Blob'  2、进行如下模拟，假设res.data为二进制流
      let binaryData = [];
      binaryData.push("\ufeff" + res.data); //注不加\ufeff下载下来中文是乱码。
      let url = window.URL.createObjectURL(new Blob(binaryData), {
        type: "text/csv;charset=UTF-8"
      });
      let a = document.createElement("a");
      a.href = url;
      a.download = "可以定义下载文件的名字";
      document.body.appendChild(a);
      a.click(); //模拟下载完成
      document.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
    downloadGetBinary() {
      //如果后端支持get请求，下载文件或者在线打开pdf就很简单了。
      //直接用this.$downloadFile()传入参数就可以，支持get的意思不是真发get请求，而是用window.open打开
      // 一个链接后面拼接上参数即可，相当于get请求，这种方式浏览器会自动解析后台返回的文件流，实现文件下载或者在线预览pdf.
      this.$downloadFile();
    }
  }
};
</script>