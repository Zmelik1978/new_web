Highcharts.chart('container_houses', {
    title: {
        text: 'Number of Houses in Prague by Districts'
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
        data: [198, 205, 203, 202, 208, 276, 289, 216]
    },{
        name: 'The Old Town',
        data: [1021, 1044, 981, 925, 898, 907, 875, 834
             
        ]
    }, {
        name: 'Josefov',
        data: [283, 284, 258, 198, 76, 78, 76, 77
            
        ]
    }, {
        name: 'The Small Side',
        data: [544, 558, 536, 559, 576, 584, 580, 594
            
        ]
    }, {
        name: 'The New Town',
        data: [1508, 1601, 1609, 1812, 1814, 1829, 1792, 1789
            
        ]
    }, {
        name: 'Žižkov',
        data: [19, 377, 729, 974, 1209, 1271, 2201, 2663
             
        ]
    }, {
        name: 'Smíchov',
        data: [350, 503, 677, 1021, 1208, 1339, 2037, 2558
             
        ]
    }, {
        name: 'Nusle',
        data: [108, 203, 283, 432, 640, 725, 1065, 1434
             
        ]
    }, {
        name: 'Podolí',
        data: [137, 159, 170, 187, 203, 240, 457, 809
             
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
