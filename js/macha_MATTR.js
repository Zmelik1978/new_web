Highcharts.chart('container-ttr', {
    title: {
        text: ""
    },
    yAxis: {
        title: {
            text: '%'
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
        data: [64.29, 37.46, 60.88, 49.99, 61.6, 60.22, 52.43, 74.48, 59.11, 58.03, 82.54, 44.58, 60.43, 69.48, 26.89] // TTR - blue line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [70.66, 68.62, 68.77, 69.98, 67.98, 69.45, 67.02, 75.05, 65.36, 69.62, 85.74, 84.04, 82.22, 86.04, 36.01] // MATTR - red line

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