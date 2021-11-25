<template>
      <div class="weekDays">
        <div class="dayItem" v-for="(_, i) in 7"><span class="weeklyDay">{{ weekDayName(i)}}</span></div>
      </div>
      <div class="monthDays">
        <div class="calendarItem" v-for="i in days"><span class="monthDay">{{ i }}</span></div>
      </div>
</template>

<script>

import dateUtils from "./composables/dateUtils";
import weekDay from "./composables/weekDay";

export default {
  name: "Calendar",

  props: ['date'],
  watch: {
    date: {
      immediate: true,
      handler() {
        console.log(this.date)
        const currentDay = this.date
        console.log(currentDay)
        const month = currentDay.getMonth()
        const year = currentDay.getFullYear()
        const daysInMonth = dateUtils(month, year)
        const firstDayIndex = weekDay(month, year)
        const days = []
        for (let i = firstDayIndex; i < daysInMonth + firstDayIndex; i++) {
          days[i] = i + 1 - firstDayIndex
        }
        this.days = days
      }
    },
  },

  methods: {
    weekDayName(i) {
      const d = new Date('2021-04-05')
      d.setDate(d.getDate() + i)
      return d.toLocaleDateString('ru-RU', {weekday: 'short'})
    },
  }
}

</script>

<style>

</style>