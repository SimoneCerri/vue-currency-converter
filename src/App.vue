<script>
import InputSelect from './components/InputSelect.vue'
import Chart from './components/Chart.vue'
import axios from 'axios';

export default {
  components: {
    InputSelect,
    Chart,
  },
  data() {
    return {
      amount1: 1,
      amount2: 1,
      currency1: 'EUR',
      currency2: 'USD',
      exchangeRate: 1,
      currencies: []
    };
  },
  async created() {
    await this.fetchCurrencies();
    await this.updateExchangeRate();
  },
  methods: {
    async fetchCurrencies() {
      const response = await axios.get('https://api.frankfurter.app/latest');
      console.log(response.data.rates, this.currencies);
      this.currencies = Object.keys(response.data.rates);
      this.currencies.push('EUR');
    },
    async updateExchangeRate() {
      const response = await axios.get(`https://api.frankfurter.app/latest?base=${this.currency1}&symbols=${this.currency2}`);
      console.log(response.data.rates[this.currency2]);
      this.exchangeRate = response.data.rates[this.currency2];
      this.convertAmount1();
    },
    convertAmount1() {
      this.amount2 = Number((this.amount1 * this.exchangeRate).toFixed(2));
    },
    convertAmount2() {
      this.amount1 = Number((this.amount2 / this.exchangeRate).toFixed(2));
    },
    handleAmount1Change(newAmount) {
      this.amount1 = newAmount;
      console.log('changed amount 1');
      this.convertAmount1();
    },
    handleAmount2Change(newAmount) {
      this.amount2 = newAmount;
      console.log('changed amount 2');
      this.convertAmount2();
    },
    handleCurrency1Change(newCurrency) {
      this.currency1 = newCurrency;
      console.log('changed currency 1');
      this.updateExchangeRate();
    },
    handleCurrency2Change(newCurrency) {
      this.currency2 = newCurrency;
      console.log('changed currency 2');
      this.updateExchangeRate();
    },
    formatNumber(value) {
      return value.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card shadow bg-dark text-success border-success p-3">
          <h1 class="text-center">CURRENCY CONVERTER</h1>
          <h4>{{ formatNumber(amount1) }} {{ currency1 }} is equal to</h4>
          <h3>{{ formatNumber(amount2) }} {{ currency2 }}</h3>
          <InputSelect class="pt-3" :amount="amount1" :currency="currency1" :currencies="currencies"
            :disabledCurrency="currency2" @amount-change="handleAmount1Change"
            @currency-change="handleCurrency1Change" />
          <br>
          <InputSelect class="pb-3" :amount="amount2" :currency="currency2" :currencies="currencies"
            :disabledCurrency="currency1" @amount-change="handleAmount2Change"
            @currency-change="handleCurrency2Change" />
          <div class="graphic">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h3 {
  font-size: 100px !important;
}
</style>
