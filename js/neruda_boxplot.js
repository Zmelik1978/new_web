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
            'Povídky malostranské', 
            'Týden v tichém domě',
            'Pan Ryšánek a pan Schlegl',
            'Přivedla žebráka na mizinu',
            'O měkkém srdci paní Rusky',
            'Večerní šplechty',
            'Doktor Kazisvět', 
            'Hastrman', 
            'Jak si nakouřil pan Vorel pěnovku',
            'U Tří liliíí',
            'Svatováclavská mše', 
            'Jak to přišlo...',
            'Psáno o letošních dušičkách',
            'Figurky']
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
            [1, 5, 9, 14, 75], // sem se zadává 5 hodnot: nejmenší, Q1, medián, Q3 a největší
            [1, 9, 13, 21, 98],
            [1, 7, 13, 19, 59],
            [2, 8, 11, 17, 60],
            [1, 8, 13, 20, 72],
            [1, 7, 12, 18, 41],
            [3, 7, 12, 19, 75],
            [1, 7, 11, 17, 52],
            [2, 9, 14, 20, 50],
            [4, 7, 11, 17, 35],
            [1, 9, 14, 22, 57],
            [1, 6, 11, 18, 61],
            [1, 8, 12, 19, 50],
            [1, 5, 9, 14, 62]],
        
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
