<template>
  <div :class="itemClasses" @click="showModal">
        <button class="btn btn-plus">+</button>
        <span class="dayNumber">{{data}}</span>
  </div>
  <Modal v-if="isModalVisible" @closeModal="closeModal" :fullMonth="fullMonth"/>
</template>

<script>
import getISO from "../composables/getISO"
import Modal from "../modal/Modal";

export default {
  name: "CalendarItem",
  components: {Modal},
  props: ['date', 'data'],

  data() {
    return {
      isModalVisible: false,
      fullMonth: []
    }
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },

  computed: {
     itemClasses() {
       this.fullMonth = []
       const currentDay = this.date
       const month = currentDay.getMonth()+1
       const year = currentDay.getFullYear()
       const fullDate = ''.concat(year,'-',month,'-',this.data)
       let d = new Date(fullDate)
       this.fullMonth.push(fullDate)
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