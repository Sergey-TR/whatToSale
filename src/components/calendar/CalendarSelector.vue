<template>
  <div class="content">
    <div class="header">
      <h1 class="header_app">Планировщик покупок <span><i>"Чо Купить"</i></span></h1>
    </div>
    <div class="calendar">
      <div class="calendar_selector">

        <div class="calendar_selector_month">
          <button class="btn btn-calendar" @click="prevMonth"><fas icon="caret-square-down" /></button>
          <span class="span-selector" >{{ getMonthTitle() }}</span>
          <button class="btn btn-calendar" @click="nextMonth"><fas icon="caret-square-up" /></button>
        </div>

        <div class="calendar_selector_year">
          <button class="btn btn-calendar" @click="prevYear"><fas icon="caret-square-down" /></button>
          <span class="span-selector">{{ getYear() }}</span>
          <button class="btn btn-calendar" @click="nextYear"><fas icon="caret-square-up" /></button>
        </div>
    </div>
    <Calendar :date="date" />
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar";

export default {
  name: "CalendarSelector",
  components: {Calendar},

  data() {
    return {
      date: new Date(),
    }
  },

  methods: {
    getMonthTitle() {
      const m = this.date.getMonth()
      const d = new Date(2020, m, 1)
      return d.toLocaleDateString('ru-RU', {month: 'long'})
    },
    nextMonth() {
      const date = new Date(this.date)
      date.setMonth(date.getMonth() + 1)
      this.date = date
    },
    prevMonth() {
      const date = new Date(this.date)
      date.setMonth(date.getMonth() - 1)
      this.date = date
    },
    getYear() {
      return this.date.getFullYear()
    },
    nextYear() {
      const date = new Date(this.date)
      date.setFullYear(date.getFullYear() + 1)
      this.date = date
    },
    prevYear() {
      const date = new Date(this.date)
      date.setFullYear(date.getFullYear() - 1)
      this.date = date
    }
  },
}
</script>

<style>

</style>