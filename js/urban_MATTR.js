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
        data: [
            33.38,
            27.71,
            32.14,
            26.16,
            28.89,
            32.89,
            22.96,
            24.25,
            25.09,
            21.17,
            36.38,
            22.40, // Továrna na maso
            26.24, // Závěrka aneb ztížená možnost happy-endu
        ] // TTR - red line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [
            84.85,
            84.04,
            85.10,
            84.23,
            83.07,
            83.45,
            81.77,
            83.00,
            82.07,
            82.34,
            84.73,
            82.31, // Továrna na maso
            82.66, // Závěrka aneb ztížená možnost happy-endu
        ] // MATTR - blue line

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