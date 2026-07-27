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
        categories: ["Poslední tečka za rukopisy", 
                    "Sedmikostelí", 
                    "Hastrman I",
                    "Hastrman II",
                    "Stín katedrály",
                    "Michaela", 
                    "Santiniho jazyk",
                    "Lord Mord",
                    'Boletus Arcanus',
                    "Praga Piccola",
                    "Pole a palisáda",
                    "Továrna na maso",
                    'Závěrka aneb ztížená možnost happy-endu'
                  ]
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
            [-676, 619],
            [-1050, 809],
            [-768, 631], // Hastrman I
            [-713, 543], // Hastrman II
            [-688, 576],
            [-401, 289], // Michaela
            [-768, 622], // Santiniho jazyk
            [-882, 684],
            [-703, 527],
            [-900, 777],
            [-380, 356], // Pole a palisáda
            [-791, 650],
            [-571, 573], // Závěrka aneb ztížená možnost happy-endu
    
        ]
    }]

});