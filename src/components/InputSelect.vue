<script>
export default
  {
    name: "InputSelect",
    components:
    {

    },
    data() {
      return {

      }
    },
    methods:
    {

    },
    mounted() {

    }
  }
</script>

<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-6 pe-0">
      <input class="w-100 border-0 rounded-start" type="number" name="" id="">
    </div>
    <div class="col-6 ps-0">
      <div class="">
        <select class="form-select border-0 rounded-0 rounded-end" name="" id="">
          <option value="">Select one</option>
          <option value="">New Delhi</option>
          <option value="">Istanbul</option>
          <option value="">Jakarta</option>
        </select>
      </div>
    </div>
  </div>

</template>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: .375rem 2.25rem .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--bs-body-bg);
  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>
