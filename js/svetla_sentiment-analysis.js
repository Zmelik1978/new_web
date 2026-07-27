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
            "Černý Petříček",
            "Zvonečková královna",
            'První Češka',
            'Mladá paní Zapletalová',
            'Škapulíř',
            'Na košatkách'
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
            [-451, 480],
            [-745, 685],
            [-840, 729], // První Češka
            [-261, 351], // Mladá paní Zapletalová
            [-519, 611], // Škapulíř
            [-442, 493], // Na košatkách
        ]
    }]

});