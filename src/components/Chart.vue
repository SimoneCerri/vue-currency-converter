<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    name: 'Chart',
    components: {
        apexchart: VueApexCharts,
    },
    props: {
        historicalRates: {
            type: Object,
            required: true
        },
        currency1: {
            type: String,
            required: true
        },
        currency2: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            chartKey: 0,
            options: {
                chart: {
                    id: 'exchange-rate-chart',
                    type: 'line',
                    height: '100%',
                    zoom: {
                        enabled: true
                    },
                },
                xaxis: {
                    categories: [],
                    labels: {
                        rotate: -45,
                        style: {
                            fontSize: '12px',
                        },
                    },
                    title: {
                        text: 'Date',
                    },
                },
                yaxis: {
                    title: {
                        text: `Exchange Rate (${this.currency1} to ${this.currency2})`,
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                title: {
                    text: `Exchange Rate (${this.currency1} to ${this.currency2})`,
                    align: 'center',
                },
            },
            series: [
                {
                    name: 'Exchange Rate',
                    data: [],
                },
            ],
        };
    },
    watch: {
        historicalRates: {
            handler(newData) {
                if (newData && newData.dates && newData.rates) {
                    this.series[0].data = newData.rates;
                    this.options.xaxis.categories = newData.dates;
                    this.forceChartUpdate();
                }
            },
            deep: true,
            immediate: true,
        },
        currency1() {
            this.updateChartTitleAndYAxis();
        },
        currency2() {
            this.updateChartTitleAndYAxis();
        }
    },
    methods: {
        updateChartTitleAndYAxis() {
            this.options.title.text = `Exchange Rate (${this.currency1} to ${this.currency2})`;
            this.options.yaxis.title.text = `Exchange Rate (${this.currency1} to ${this.currency2})`;
            this.forceChartUpdate();
        },
        forceChartUpdate() {
            this.chartKey += 1;
        }
    }
}
</script>

<template>
    <div class="chart-container">
        <div class="card-chard bg-dark">
            <apexchart :key="chartKey" type="line" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<style scoped></style>