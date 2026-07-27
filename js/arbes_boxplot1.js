Highcharts.chart('container-boxplot1', {

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
            'Ďábel na skřipci', 
            'Elegie o černých očích', 
            'Svatý Xaverius', 
            'Sivooký démon', 
            'Zázračná madona',
            'Ukřižovaná',
            'Newtonův mozek',
            'Akrobati',
            'Etiopská lilie',
            'Šílený Job',
            'Můj přítel vrah',
            'Aspoň se pousměj',
            'Dva barikádníci',
            'První noc u mrtvoly',
            'Il divino boemo',
            'Anna a Marie',
            'Vymírající hřbitrov',
            'Kandidáti existence',
            'Zborcené harfy tón',
            'Adamité',
            'Agitátor',
            'Anděl míru I',
            'Anděl míru II',
            'Anděl míru III',
            'Anděl míru IV',
            'Moderní upíři',
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
            [1, 5, 10, 17, 66], // sem se zadává 5 hodnot: nejmenší, Q1, medián, Q3 a největší
            [1, 4, 12, 24, 65],
            [1, 7, 15, 27, 115],
            [1, 7, 13, 21, 86],
            [1, 8, 13, 22, 130],
            [1, 9, 16, 25, 117],
            [1, 9, 16, 26, 105],
            [1, 7, 14, 23, 156],
            [1, 7, 14, 25, 126],
            [1, 10, 17, 27, 129],
            [1, 10, 19, 30, 192],
            [1, 9, 17, 29, 142], // Aspoň se pousměj
            [1, 10, 18, 30, 206],
            [1, 11, 20, 32, 134], // První noc u mrtvoly
            [1, 10, 18, 29, 124],
            [1, 11, 20, 32, 284], // Anna a Marie
            [1, 12, 21, 33, 180],
            [1, 9, 17, 27, 186], // Kandidáti existence
            [1, 10, 17, 30, 194],
            [1, 9, 17, 29, 233], // Adamité
            [1, 9, 16, 26, 138], // Agitátor
            [1, 9, 16, 25, 119],
            [1, 9, 15, 24, 137], // Anděl míru II
            [1, 9, 15, 25, 126], // Anděl míru III
            [1, 8, 14, 22, 137], // Anděl míru IV
            [1, 9, 16, 27, 140], // Moderní upíři
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
