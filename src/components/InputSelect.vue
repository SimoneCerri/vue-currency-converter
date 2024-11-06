<script>

export default {
  props: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    currencies: {
      type: Array,
      required: true
    },
    disabledCurrency: {
      type: String,
      default: null
    }
  },
  computed: {
    currencyNames() {
      return {
        USD: 'United States Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        JPY: 'Japanese Yen',
        AUD: 'Australian Dollar',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        BGN: 'Bulgarian Lev',
        BRL: 'Brazilian Real',
        CZK: 'Czech Koruna',
        DKK: 'Danish Krone',
        HKD: 'Hong Kong Dollar',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Shekel',
        INR: 'Indian Rupee',
        ISK: 'Icelandic Krona',
        KRW: 'South Korean Won',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        NOK: 'Norwegian Krone',
        NZD: 'New Zealand Dollar',
        PHP: 'Philippine Peso',
        PLN: 'Polish Zloty',
        RON: 'Romanian Leu',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        THB: 'Thai Baht',
        TRY: 'Turkish Lira',
        ZAR: 'South African Rand'
      };
    },
  },
  methods: {
    onAmountInput(event) {
      const value = parseFloat(event.target.value) || 0;
      this.$emit('amount-change', value);
    },
    onCurrencySelect(event) {
      const value = event.target.value;
      this.$emit('currency-change', value);
    }
  }
};
</script>

<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-6 pe-0">
      <input class="w-100 border-0 rounded-start text-center bg-success" type="number" :value="amount"
        @input="onAmountInput" placeholder="Amount ?" />
    </div>
    <div class="col-6 ps-0">
      <select class="form-select border-0 rounded-0 rounded-end bg-success" :value="currency"
        @change="onCurrencySelect">
        <option class="text-center" v-for="currency in currencies" :key="currency" :value="currency"
          :disabled="currency === disabledCurrency">
          {{ currencyNames[currency] || currency }}
        </option>
      </select>
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

input:focus {
  outline: none;
  border: 1px solid transparent;
}

select:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid transparent;
}

select.form-select:focus {
  border: none;
  outline: none;
  box-shadow: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
