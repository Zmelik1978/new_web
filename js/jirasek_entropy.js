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
            'F. L. Věk I',
            'F. L. Věk II',
            'F. L. Věk III',
            'F. L. Věk IV',
            'F. L. Věk V',
            'Filozofská historie',
            'Temno',
            'Psohlavci'
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
            data: [8.89,
                8.92,
                9.02,
                9.13,
                9.01,
                8.96,
                8.99,
                9.05
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [0.69,
                0.67,
                0.67,
                0.68,
                0.66,
                0.73,
                0.66,
                0.70
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