Highcharts.chart('container-ttr', {
    title: {
        text: "TTR & MATTR"
    },
    yAxis: {
        title: {
            text: '%'
        }
    },

    xAxis: {
        categories: [
            'Povídky malostranské',
            'Pan Ryšánek a pan Schlegl',
            'Přivedla žebráka na mizinu',
            'O měkkém srdci paní Rusky',
            'Večerní šplechty', 
            'Doktor Kazisvět', 
            'Hastrman', 
            'Jak si nakouřil pan Vorel pěnovku',
            'U Tří lilií', 
            'Svatováclavská mše', 
            'Jak to přišlo...',
            'Psáno o letošních dušičkách', 
            'Figurky'],
    },
    plotOptions: {
    series: {
        color: '#FF9933'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
   
    series: [{
          
    marker: {
    fillColor: 'transparent',
    lineColor: Highcharts.getOptions().colors[0]
    
    },
        lineColor: 'red',
        name: 'TTR',
        color: 'red',
        data: [23.15, 47.42, 51.30, 53.72, 47.22, 52.71, 55.51, 53.21, 62.42, 47.68, 45.74, 47.15, 29.42] // TTR - red line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [59.59, 58.70, 60.09, 58.56, 58.08, 60.91, 62.76, 57.21, 62.31, 66.87, 66.08, 65.44, 63.43] // MATTR - blue line

    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});