<script>
import InputSelect from './components/InputSelect.vue'

export default {
  components:
  {
    InputSelect,
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card shadow bg-dark text-success border-success p-3">
          <h1 class="text-center">CURRENCY CONVERTER</h1>
          <h4>1,00 EUR is equal to</h4>
          <h3>1,09 USD</h3>
          <InputSelect />
          <br>
          <InputSelect />
          <div class="graphic">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
