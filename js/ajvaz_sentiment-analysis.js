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
          "Druhé město",
          "Luxemburská zahrada",
          "Vražda v hotelu Intercontinental",
          "Návrat starého varana"
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
            [-519, 420],
            [-541, 461],
            [-164, 130], // Vražda v hotelu Intercontinental
            [-432, 332]
    
        ]
    }]

});