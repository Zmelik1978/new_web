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
            'Mistr Kampanus', 
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
            20.96     
        ] // TTR - blue line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [
            85.25
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