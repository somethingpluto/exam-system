<template>
  <ManageLogin></ManageLogin>
</template>

<script lang="ts">

import ManageLogin from '../../components/ManagePage/Login/ManageLogin.vue';
export default {
  name: 'AdminLoginPage',
  components: { ManageLogin },
};
</script>

<style scoped>
.admin-login {
  height: 100%;
}
.n-layout-header {
  height: 9%;
  background-color: #101010;
  display: flex;
}
.n-layout-content {
  height: 82%;
  background-color: #ebebeb;
}

.n-layout-footer {
  height: 9%;
  background-color: #f0f0f0;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-size: 28px;
  color: #ffffff;
  line-height: calc(310%);
  padding-left: 80px;
}
</style>
