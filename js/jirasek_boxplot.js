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
            'F. L. Věk I', 
            'F. L. Věk II',
            'F. L. Věk III',
            'F. L. Věk IV',
            'F. L. Věk V',
            'Filozofská historie',
            'Temno',
            'Psohlavci'
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
            [1, 5, 10, 18, 110],
            [1, 5, 11, 19, 125],
            [1, 5, 10, 18, 151],
            [1, 6, 12, 20, 171],
            [1, 7, 13, 22, 191],
            [1, 7, 12, 18, 70],
            [1, 8, 14, 23, 177],
            [1, 7, 12, 19, 172]
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
