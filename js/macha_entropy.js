Highcharts.chart('container-entropy', {
    title: {
        text: ""
    },
    yAxis: {
        title: {
            text: 'Entrophy'
        }
    },

    xAxis: {
        categories: [
            'Karlův Tejn', 
            'Křivoklad',
            'Večer na Bezdězu',
            'Marinka',
            'Klášter sázavský',
            'Valdice',
            'Pouť krkonošská', 
            'Svět smyslný', 
            'Svět zašlý',
            'Návrat',
            'Poutník', 
            'Viasil Viasilovič',
            'Sen',
            'Přísaha',
            'Cikáni'
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
            data: [7.96, 8.91, 7.84, 8.52, 8.1, 8.35, 8.36, 7.32, 7.33, 7.74, 6.38, 8.29, 7.76, 7.43, 8.89] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [0.86, 0.77, 0.87, 0.82, 0.88, 0.87, 0.84, 0.9, 0.85, 0.87, 0.96, 0.81, 0.87, 0.90, 0.73] // rel. entropy

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