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
            ],
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
            data: [
                9.46,
                9.30,
                9.40,
                9.42,
                9.12,
                8.81,
                9.01,
                9.07,
                8.90,
                9.09,
                8.90,
                8.78, // Továrna na maso
                8.82, // Závěrka aneb ztížená možnost happy-endu
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [
                0.72,
                0.71,
                0.72,
                0.70,
                0.69,
                0.73,
                0.68,
                0.68,
                0.68,
                0.67,
                0.74,
                0.66, // Továrna na maso
                0.69, // Závěrka aneb ztížená možnost happy-endu
            ] // rel. entropy

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