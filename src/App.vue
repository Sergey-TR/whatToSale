<template>
  <MainWrapper />
</template>

<script>

  import MainWrapper from "./components/MainWrapper";

  export default {
    name: 'App',
    components: {
      MainWrapper,
    },
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.btn {
  cursor: pointer;
  border: none;
  outline: none;
}
.header {
  text-align: center;
  background: #e8e6e6;
}
.header_app {
  padding: 20px;
  color: dimgray;
}
.content {
  width: 100vw;
}
.calendar {
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
}
.calendar_selector {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
}
.calendar_selector_month, .calendar_selector_year {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 160px;
  border: 1px solid dimgray;
  border-radius: 4px;
  padding: 5px;
}
.svg-inline--fa.fa-w-14 {
  font-size: 30px;
  color: dimgray;
}
.svg-inline--fa.fa-w-14:hover {
  color: #f16d7f;
}
.svg-inline--fa.fa-w-14:active {
  color: #f68e9b;
}
.span-selector {
  font-size: 18px;
  font-weight: bolder;
  color: dimgray;
  padding: 0 10px;
}
.weekDays, .monthDays {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.weeklyDay {
  text-transform: uppercase;
}
.calendarItem {
  width: calc(100% / 7);
  height: 60px;
  /*border: 1px solid dimgray;*/
  /*margin: 2px;*/
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  /*box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);*/
}
.btn-plus {
  width: 20px;
  height: 20px;
  border: 2px solid dimgray;
  border-radius: 50%;
  color: dimgrey;
  font-size: 16px;
  font-weight: bold;
  background: white;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.monthDay {
  margin: 10px;
  color: dimgray;
  font-weight: bold;

}
.dayItem {
  width: calc(100% / 8);
  text-align: left;
  margin: 10px 2px;
}
.primary {
  background: #f68e9b;
}
.default, .primary {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
}
.primary:hover, .default:hover {
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.17)
}
.dayNumber {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}

</style>
