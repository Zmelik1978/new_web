Highcharts.chart('container-entropy2', {
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
                8.49, // Dobrodružství ve výsadní hospodě
                8.82, // Lampičky
                8.46, // Penězokaz
                8.59, // Samovrah
                8.48, // Sběhlé švícko
                8.99, // V staré pražské krčmě
                8.44, // Zbožný Tomáš
                9.09, // Štrajchpudlíci
                9.29, // Mesiáš I
                9.23, // Mesiáš II
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [
                0.80, // Dobrodružství ve výsadní hospodě
                0.73, // Lampičky
                0.85, // Penězokaz
                0.83, // Samovrah
                0.83, // Sběhlé švícko
                0.75, // V staré pražské krčmě
                0.81, // Zbožný Tomáš
                0.69, // Štrajchpudlíci
                0.70, // Mesiáš I
                0.70, // Mesiáš II
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