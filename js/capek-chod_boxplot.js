Highcharts.chart('container-boxplot', {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: "Boxplot"
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: [
            'Kašpar Lén mstitel', 
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
            [1, 11, 18, 28, 165], // sem se zadává 5 hodnot: nejmenší, Q1, medián, Q3 a největší
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
