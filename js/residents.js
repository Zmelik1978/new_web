Highcharts.chart('container_residents', {

    title: {
        text: 'Number of Residents in Prague by Districts'
    },
    yAxis: {
        title: {
            text: 'Number of Residents'
        }
    },

    xAxis: {
        categories: ['1869', '1880', '1890', '1900', '1910', '1921', '1930', '1950']
    }, 

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: 'The Castle District',
        data :[5940, 12330, 12584, 12906, 10580, 10732, 9100, 5730]
    },{
        name: 'The Old Town',
        data: [46060, 44027, 42322, 37888, 35504, 35503, 30481, 24516]
    }, {
        name: 'Josefov',
        data: [10296, 10668, 11535, 9047, 3376, 4070, 3497, 3077

        ]
    }, {
        name: 'The Small Side',
        data: [22140, 20963, 20447, 21161, 20374, 22780, 21218, 16818
            
        ]
    }, {
        name: 'The New Town',
        data: [73277, 74335, 75734, 84462, 81760, 87329, 78121, 64636
            
        ]
    }, {
        name: 'Žižkov',
        data: [292, 21212, 41236, 59326, 72173, 71766, 93098, 90234
             
        ]
    }, {
        name: 'Smíchov',
        data: [15382, 24984, 32646, 47135, 51791, 56249, 60195, 61854
             
        ]
    }, {
        name: 'Nusle',
        data: [2387, 5555, 11740, 20122, 30874, 34160, 41076, 52047
             
        ]
    }, {
        name: 'Podolí',
        data: [1739, 2003, 2582, 3534, 4048, 4800, 8097, 13630
             
        ]
    }
],

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
