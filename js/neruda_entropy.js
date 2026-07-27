Highcharts.chart('container-entropy', {
    title: {
        text: "Entropy"
    },
    yAxis: {
        title: {
            text: 'Entropy'
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
        color: '#009900'
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
            lineColor: 'green',
            name: 'entropy',
            color: 'green',
            data: [9.22, 8.21, 8.04, 7.86, 8.01, 8.06, 7.99, 7.89, 7.37, 8.35, 8.43, 8.20, 8.53] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [0.7, 0.82, 0.82, 0.84, 0.79, 0.84, 0.84, 0.85, 0.87, 0.81, 0.79, 0.81, 0.72] // rel. entropy

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