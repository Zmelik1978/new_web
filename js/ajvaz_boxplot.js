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
            'Druhé město', 
            'Luxemburská zahrada', 
            'Vražda v hotelu Intercontinental', 
            'Návrat starého varana'
            
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
            [2, 12, 20, 33, 357], // sem se zadává 5 hodnot: nejmenší, Q1, medián, Q3 a největší
            [1, 11, 22, 38, 680],
            [1, 7, 12, 20, 187],
            [1, 10, 18, 32, 273], // Návrat starého varana
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
