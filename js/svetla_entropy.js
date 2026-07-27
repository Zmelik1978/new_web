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
            'Černý Petříček',
            'Zvonečková královna',
            'První Češka',
            'Mladá paní Zapletalová',
            'Škapulíř',
            'Na košatkách'
            
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
                8.87,
                9.23,
                9.26, // První Češka
                8.84, // Mladá paní Zapletalová
                9.05, // Škapulíř
                8.80, // Na košatkách
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
                0.70, // První Češka
                0.76, // Mladá paní Zapletalová
                0.72, // Škapulíř
                0.72, // Na košatkách
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