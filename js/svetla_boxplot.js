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
            'Černý Petříček', 
            'Zvonečková královna',
            'První Češka',
            'Mladá paní Zapletalová',
            'Škapulíř',
            'Na košatkách'
            ]
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
            [1, 11, 19, 28, 127],
            [1, 15, 26, 40, 199],
            [1, 11, 21, 31, 147], // První Češka
            [1, 14, 23, 39, 163], // Mladá paní Zapletalová
            [1, 11, 21, 35, 119], // Skapulíř
            [1, 11, 20, 31, 120], // Na košatkách, , 
            ]
        
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
