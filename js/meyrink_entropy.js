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
                9.18,
                7.96,
                9.10,
                9.00,
                8.83, // Pražská vizitka
                9.35, // Zelená tvář
                9.34, // Anděl západního okna
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [
                0.71,
                0.86,
                0.71,
                0.72,
                0.81,
                0.71, // Zelená tvář
                0.69, // Anděl západního okna
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