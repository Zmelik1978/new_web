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
            29.33,
            27.59,
            23.84, // První Češka
            37.11, // Mladá paní Zapletalová
            29.48, // Škapulíř
            29.70, // Na košatkách
        ] // TTR - red line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [
            84.91,
            85.10,
            85.80, // První Češka
            85.92, // Mladá paní Zapletalová
            85.80, // Škapulíř
            84.44, // Na košatkách
        ] // MATTR - blue line

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