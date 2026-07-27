Highcharts.chart('container-ttr2', {
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
            'Dobrodružství ve výsadní hospodě',
            'Lampičky',
            'Penězokaz',
            'Samovrah',
            'Sběhlé švícko',
            'V staré pražské krčmě',
            'Zbožný Tomáš',
            'Štrajchpudlíci',
            'Mesiáš I',
            'Mesiáš II'
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
            43.22, // Dobrodružství ve výsadní hospodě
            25.26, // Lampičky
            56.22, // Penězokaz
            45.47, // Samovrah
            54.70, // Sběhlé švícko
            30.76, // V staré pražské krčmě
            48.74, // Zbožný Tomáš
            18.32, // Štrajchpudlíci
            21.03, // Mesiáš I
            19.46, // Mesiáš II
        ] // TTR - blue line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [
            83.94, // Dobrodružství ve výsadní hospodě
            82.28, // Lampičky
            84.67, // Penězokaz
            84.57, // Samovrah
            84.35, // Sběhlé švícko
            83.34, // V staré pražské krčmě
            83.91, // Zbožný Tomáš
            83.05, // Štrajchpudlíci
            83.65, // Mesiáš I
            83.72, // Mesiáš II
        ] // MATTR - red line

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