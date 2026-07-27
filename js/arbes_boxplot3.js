Highcharts.chart('container-boxplot3', {

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
            'Sběhlé švícko',
            'V staré pražské krčmě',
            'Zbožný Tomáš',
            'Štrajcpudlíci',
            'Mesiáš I',
            'Mesiáš II'
            ],
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
            [2, 9, 14, 23, 83], // Sběhlé švícko
            [1, 10, 20, 32, 238], // V staré pražské krčmě
            [1, 7, 13, 20, 66], // Zbožný Tomáš
            [1, 9, 18, 30, 253], // Štrajcpudlíci
            [1, 9, 19, 33, 298], // Mesiáš I
            [1, 9, 16, 28, 160] // Mesiáš II
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
