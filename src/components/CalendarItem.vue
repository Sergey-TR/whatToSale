<template>
  <div :class="itemClasses">
        <button class="btn btn-plus">+</button>
        <span class="dayNumber">{{data}}</span>
  </div>
</template>

<script>
import getISO from "./composables/getISO"

export default {
  name: "CalendarItem",
  props: ['date', 'data'],

  computed: {
     itemClasses() {
       const currentDay = this.date
       const month = currentDay.getMonth()+1
       const year = currentDay.getFullYear()
       const fullDate = ''.concat(year,'-',month,'-',this.data)

       let d = new Date(fullDate)
       const isCurrentDate = getISO(new Date()) === getISO(d)
        return {
        'primary': isCurrentDate,
        'default': !isCurrentDate,
        }
     }
  }
}
</script>

<style>

</style>