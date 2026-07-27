Highcharts.chart('container-boxplot', {
    chart: {
        type: 'boxplot'
    },

    title: {
        text: ""
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: [
            'Karlův Tejn', 
            'Křivoklad',
            'Večer na Bezdězu',
            'Marinka',
            'Klášter sázavský',
            'Valdice',
            'Pouť krkonošská', 
            'Svět smyslný', 
            'Svět zašlý',
            'Návrat',
            'Poutník', 
            'Viasil Viasilovič',
            'Sen',
            'Přísaha',
            'Cikáni']
    },
    plotOptions: {
        series: {
            color: '#004C99'
            }
    },
    yAxis: {
        title: {
            text: 'sentence length per word count'
        },
        plotLines: []
    },

    series: [{
        name: 'Hodnoty',
        data: [
            [1, 19, 32, 48, 94], // sem se zadává 5 hodnot: nejmenší, Q1, medián, Q3 a největší
            [1, 8, 16, 30, 163],
            [1, 10, 20, 30, 62],
            [1, 8, 17, 29, 95],
            [2, 14, 24, 32, 82],
            [5, 12, 20, 29, 99],
            [1, 13, 24, 47, 99],
            [15, 26, 68, 110, 144],
            [1, 2, 4, 17, 91],
            [1, 5, 19, 32, 139],
            [24, 24, 34, 35, 37],
            [1, 12, 23, 38, 163],
            [2, 16, 21, 33, 94],
            [1, 22, 37, 54, 99],
            [1, 6, 14, 22, 132]
            ],
        
    }, {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category

        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]

});
