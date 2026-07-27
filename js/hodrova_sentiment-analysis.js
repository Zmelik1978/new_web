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
            "Podobojí",
            "Kukly",
            "Théta",
            "Město vidím",
            "Točité věty",
            'Perunův den'
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
            [-523, 377], 
            [-475, 383],
            [-544, 430],
            [-315, 267], // Město vidím
            [-913, 674], // Točité věty
            [-575, 432], // Perunův den
        ]
    }]

});