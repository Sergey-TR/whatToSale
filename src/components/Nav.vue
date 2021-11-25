<template>
  <div class="nav">
    <div class="login">
      <a href="#" class="login_a">LOG IN</a>
      <a href="#" class="login_a">REGISTER</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
.nav {
  background: #e8e6e6;
  width: 300px;
  height: 100%;
  padding: 20px 20px 20px 40px;
}
.login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  height: 30px;
}
.login_a {
  color: dimgray;
  font-weight: bold;
  display: block;
  padding: 3px;
}
.login_a:hover {
  color: #f16d7f;
  border-bottom: 2px solid #f16d7f;
}
</style>