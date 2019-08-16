<template>
  <div>
    父组件：123
    <child></child>
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
      a: 123
    };
  }
};
</script>