<template>
  <div>
    <form action="http://localhost:8080/" method="get">
      账号: <input type="text" v-model="id" />
      <br />
      密码: <input type="password" v-model="password" />
      <br />
      <button type="submit">提交</button>
    </form>
    <button @click="getWin">yes</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      id: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    getWin() {
      console.log(window);
    },
  },
};
</script>

<style scoped>
</style>