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
            "Karlův Tejn",
            "Křivoklad",
            "Večer na Bezdězu", 
            "Marinka",
            "Klášter sázavský",
            "Pouť krkonošská",
            "Svět smyslný",
            "Svět zašlý",
            "Návrat",
            "Poutník",
            "Viasil Viasilovič",
            "Sen",
            "Přísaha",
            "Cikáni"
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
            [-37, 34],
            [-201, 188],
            [-22, 27],
            [-76, 77],
            [-35, 30],
            [-50, 57],
            [-20, 13],
            [-29, 32],
            [-32, 27],
            [-6, 6],
            [-96, 103],
            [-23, 27],
            [-23, 20],
            [-292, 233]
        ]
    }]

});