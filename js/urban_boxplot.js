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
            'Poslední tečka za rukopisy', 
            'Hastrman I',
            'Hastrman II',
            'Sedmikostelí',
            'Stín katedrály',
            'Michaela',
            'Santiniho jazyk',
            'Lord Mord',
            'Boletus Arcanus',
            'Praga Piccola',
            'Pole a palisáda',
            'Továrna na maso',
            'Závěrka aneb ztížená možnost happy-endu'
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
            [1, 7, 13, 21, 175], // sem se zadává 5 hodnot: nejmenší, Q1, medián, Q3 a největší
            [1, 9, 14, 20, 78],
            [1, 6, 10, 15, 67],
            [1, 7, 12, 18, 150],
            [1, 5, 9, 15, 171],
            [1, 5, 9, 13, 55], // Michaela
            [1, 6, 10, 16, 131],
            [1, 7, 12, 19, 140],
            [1, 7, 11, 17, 91],
            [1, 8, 14, 21, 126],
            [1, 5, 10, 15, 62], // Pole a palisáda
            [1, 6, 11, 18, 97],
            [1, 6, 10, 17, 99], // Závěrka aneb ztížená možnost happy-endu
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
