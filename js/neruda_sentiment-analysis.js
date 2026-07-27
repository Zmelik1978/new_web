Highcharts.chart('container-sentiment-analysis', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: [
    "Povídky malostranské", 
    "Týden v tichém domě",
    "Pan Ryšánek a pan Schlegl",
    "Přivedla žebráka na mizinu",
    "O měkkém srdci paní Rusky",
    "Večerní šplechty",
    "Doktor Kazisvět",
    "Hastrman",
    "Jak si nakouřil pan Vorel pěnovku",
    "U Tří lilií",
    "Svatováclavská mše",
    "Jak to přišlo...",
    "Psáno o letošních dušičkách",
    "Figurky"]
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    tooltip: {
        valueSuffix: ''
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: '{y}'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '',
        data: [
            [-571, 545],
            [-284, 31],
            [-63, 100],
            [-54, 57],
            [-36, 52],
            [-57, 94],
            [-51, 72],
            [-34, 58],
            [-29, 42],
            [-9, 16],
            [-89, 106],
            [-120, 121],
            [-81, 106],
            [-273, 278]
        ]
    }]

});