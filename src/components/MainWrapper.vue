<template>
  <div class="container">
    <Nav />
    <CalendarSelector />
  </div>
</template>

<script>
import Nav from "./Nav";
import CalendarSelector from "./CalendarSelector";

export default {
  name: "MainWrapper",
  components: {CalendarSelector, Nav},
}

</script>

<style>
.container {
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
}
</style>