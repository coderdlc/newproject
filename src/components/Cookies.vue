<template>
  <div id="product-list-one">
    <button @click="cookiesSet()">执行cookiesSet</button>
    <button @click="cookiesSet7Day()">执行cookiesSet7Day</button>
    <button @click="cookiesSet7DayCurrentPage()">
      执行cookiesSet7DayCurrentPage
    </button>
  </div>
</template>

<script>
export default {
  name: "Cookies",
  data() {
    return {
      name: "zhangfan",
      email: "2207044692@qq.com",
      name1: "lisi",
      name2: "wangwu",
      name3: "zhaoliu",
      name4: "wangba",
    };
  },
  computed: {},
  methods: {
    cookiesSet() {
      // /创建简单的cookie
      this.$Cookies.set("name", this.name);
      this.$Cookies.set("name1", this.name1);
      this.$Cookies.set("name2", this.name2);
      this.$Cookies.set("name3", this.name3);
      this.$Cookies.set("name4", this.name4);
    },
    cookiesSet7Day() {
      //创建有效期为7天的cookie
      this.$Cookies.set("name", this.name, { expires: 7 });
    },
    cookiesSet7DayCurrentPage() {
      //为当前页创建有效期7天的cookie
      this.$Cookies.set("name", this.name, { expires: 7, path: "" });
    },
  },
};
</script>

<style scoped>
</style>