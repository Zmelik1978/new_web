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
            'Podobojí', 
            'Kukly',
            'Théta',
            'Město vidím',
            'Točité věty',
            'Perunův den'            
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
            [1, 9, 15, 21, 77],
            [1, 9, 15, 22, 79],
            [1, 6, 12, 19, 90],
            [1, 7, 13, 20, 98], // Město vidím
            [1, 10, 32, 68, 548],
            [1, 7, 12, 19, 74], // Perunův den
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
