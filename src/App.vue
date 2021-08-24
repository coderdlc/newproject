<template>
  <div id="app">
    <slot-len>
      <div>选择角色</div>
      <br />
      <span>选择角色</span>
      <span>选择角色</span>
      <span>选择角色</span>
    </slot-len>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Cookies />
    <cookies-get />
    <login></login>
    <div id="cav"></div>
    <!-- <button @click="a"></button> -->
    <!-- <el-button>默认按钮</el-button> -->
    <!-- <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-len-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import slotLen from "./components/slotLen.vue";
import Cookies from "./components/Cookies.vue";
import CookiesGet from "./components/CookiesGet.vue";
import login from "./components/login.vue";

import { a } from "./uitls/tu";

export default {
  name: "app",
  components: {
    HelloWorld,
    slotLen,
    Cookies,
    CookiesGet,
    login,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
      ],
    };
  },
  created() {},
  mounted() {
    a();
  },
  methods: {},
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table {
  width: 900px;
  margin: 0 auto;
} */
</style>
