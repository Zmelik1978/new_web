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
            'Golem',
            'Neviditelná Praha',
            'Valpuržina noc',
            'Bílý dominikán',
            'Pražská vizitka',
            'Zelená tvář',
            'Anděl západního okna'
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
            23.38,
            62.14,
            29.09,
            26.07,
            52.29,
            25.94, // Zelená tvář
            21.69, // Anděl západního okna
        ] // TTR - red line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [
            83.84,
            85.13,
            84.84,
            83.57,
            87.29,
            85.38, // Zelená tvář
            84.00, // Anděl západního okna
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