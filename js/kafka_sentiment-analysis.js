Highcharts.chart('container-sentiment-analysis', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: [
          "Proces"
        ]
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    tooltip: {
        valueSuffix: ''
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: '{y}'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '',
        data: [
            [-606, 545],
    
        ]
    }]

});