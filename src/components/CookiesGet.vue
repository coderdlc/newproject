<template>
  <div id="product-list-one">
    <button @click="cookiesGet()">执行cookiesGet</button>
    <button @click="cookiesGetAll()">执行cookiesGetAll</button>
  </div>
</template>

<script>
export default {
  name: "CookiesGet",
  data() {
    return {
      nameAll: [],
      name: "zhangfan",
      email: "2207044692@qq.com",
    };
  },
  computed: {},
  methods: {
    cookiesGet() {
      //获取指定key的val
      console.log(this.$Cookies.get("name"));
    },
    cookiesGetAll() {
      console.log(this.$Cookies.get());
      this.nameAll.push();
      console.log(typeof this.$Cookies.get());
      console.log(this.nameAll);
    },
  },
};
</script>

<style scoped>
</style>