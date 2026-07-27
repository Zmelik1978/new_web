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
            'Ivův román',
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
                9.05
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [
               0.69
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