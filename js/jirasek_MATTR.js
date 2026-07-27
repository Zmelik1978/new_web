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
            data: [20.63,
                17.89,
                17.30,
                18.96,
                17.40,
                30.56,
                15.74,
                21.58
            ] // TTR - blue line
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'blue',
            name: 'MATTR',
            color: 'blue',
            data: [81.96,
                81.27,
                81.53,
                82.09,
                81.29,
                84.74,
                81.14,
                83.85
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