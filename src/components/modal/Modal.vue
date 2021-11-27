<template>
  <div class="modal-wrapper">
    <div class="modal-content">
      <div class="modal-header">
        <span>Задачи на: {{ fullMonth[0] }}</span>
        <button class="btn btn-modal" @click="closeModal">x</button>
      </div>
      <div class="modal-main"></div>
      <div class="modal-footer">
        <button class="btn btn-save">СОХРАНИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['fullMonth'],

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    // currentDate() {
    //   console.log(this.fullMonth[0])
    // }
  },
}
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: .8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  width: 900px;
  height: 450px;
}
.btn-modal {
  width: 30px;
  height: 30px;

}
</style>