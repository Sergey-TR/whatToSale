<template>
      <div class="weekDays">
        <div class="dayItem" v-for="(_, i) in 7"><span class="weeklyDay">{{ weekDayName(i)}}</span></div>
      </div>
      <div class="monthDays">
        <div class="calendarItem" v-for="day in days">
          <CalendarItem :date="date" :data="day" v-if="day"/>
        </div>
      </div>
</template>

<script>

import dateUtils from "../composables/dateUtils";
import weekDay from "../composables/weekDay";
import CalendarItem from "./CalendarItem";

export default {
  name: "Calendar",
  components: {CalendarItem},

  props: ['date'],
  watch: {
    date: {
      immediate: true,
      handler() {
        const currentDay = this.date
        const month = currentDay.getMonth()
        const year = currentDay.getFullYear()
        const daysInMonth = dateUtils(month, year)
        const firstDayIndex = weekDay(month, year)
        const days = []
        for (let i = firstDayIndex; i < daysInMonth + firstDayIndex; i++) {
          days[i] = i + 1 - firstDayIndex
        }
        this.days = days
        return this.days
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