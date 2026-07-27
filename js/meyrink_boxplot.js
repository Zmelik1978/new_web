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
            'Golem', 
            'Neviditelná Praha',
            'Valpuržina noc',
            'Bílý dominikán',
            'Pražská vizitka',
            'Zelená tvář',
            'Anděl západního okna'
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
            [1, 5, 10, 18, 94],
            [1, 9, 16, 25, 129],
            [1, 7, 13, 23, 120],
            [1, 8, 14, 24, 166],
            [1, 6, 11, 21, 107],  // Pražská vizitka
            [1, 9, 18, 30, 252], // Zelená tvář
            [1, 7, 13, 22, 144], // Anděl západního okna
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
