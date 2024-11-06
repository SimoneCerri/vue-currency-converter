<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    name: 'Chart',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example',
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                },
            },
            series: [
                {
                    name: 'Sales',
                    data: [30, 40, 35, 50, 49, 60],
                },
            ],
        };
    },
};
</script>

<template>
    <div>
        <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<style></style>