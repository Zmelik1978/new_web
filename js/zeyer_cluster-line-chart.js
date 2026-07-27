Highcharts.chart('container', {

    chart: {
        height: 800, // Set the height of the chart
        events: {
            load: function () {
                this.renderer.text('positive', 220, 70) // Text and position (x, y)
                    .css({
                        color: 'black', // Text color
                        fontSize: '16px', // Font size
                        fontWeight: 'bold', // Font weight
                        fontStyle: 'italic' // Font style
                    })
                    .add();
                this.renderer.text('negative', 650, 70) // Text and position (x, y)
                .css({
                    color: 'black', // Text color
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontStyle: 'italic' // Font style
                })
                .add();
                this.renderer.text('neutral', 1170, 70) // Text and position (x, y)
                .css({
                    color: 'black', // Text color
                    fontSize: '16px', // Font size
                    fontWeight: 'bold',
                    fontStyle: 'italic' // Font style
                })
                .add();
            }
        }
    },

    title: {
        text: 'Cluster Sentiment Line Graph',
        align: 'center'
    },    

    yAxis: {
        title: {
            text: 'i.p.m.'
        }
    },

    xAxis: {
        categories: ["LÁSKA", "CITLIVOST", "PŘÍJEMNOST", "RADOST", "SPOKOJENOST", "ODPUŠTĚNÍ", "SOUCIT", "ODVAHA", "KRÁSA",
    "SKROMNOST", "SPOLEČENSKOST", "ÚLEVA", "VESELOST", "ODČINĚNÍ", "ÚCTA", "OBEZŘETNOST", "OBLIBA", "FILANTROPIE",
    "POKORA", "TOUHA", "UCTIVOST", "ZALÍBENÍ", "KULTIVOVANOST", "VDĚČNOST", "NECITLIVOST", "NEPŘÍJEMNOST",
    "ZÁRMUTEK", "NELÍTOSTNOST", "NEVDĚČNOST", "BEZNADĚJ", "STRACH", "ZBABĚLOST", "NEROZVÁŽNOST", "NUDA",
    "OŠKLIVOST", "NESPOKOJENOST", "PŘITÍŽENÍ", "SKLÍČENOST", "NEÚCTA", "ZÁVIST", "ŽÁRLIVOST", "LHOSTEJNOST",
    "NELIBOST", "MISANTROPIE", "POPUDLIVOST", "ROZMRZELOST", "ŠPATNOST", "PÝCHA", "DRZOST", "MARNIVOST",
    "NENÁVIST", "PROKLETÍ", "ZLOST", "VULGÁRNOST", "OKÁZALOST", "NEVZRUŠENOST", "NEPŘEKVAPENOST", "FORMÁLNOST",
    "NEFORMÁLNOST", "ÚŽAS"], // Replace with your data
        accessibility: {
            rangeDescription: 'Clusters'
        },
        plotLines: [
            {
                color: 'black', // First line color
                width: 2,       // First line widthappear
                value: 23,      // Index of the category for the first line
            },
            {
                color: 'black',   // Second line color
                width: 2,       // Second line width
                value: 53,      // Index of the category for the second line
            }
        ]
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },

    series: [{
        name: 'Jan Maria Plojhar',
        data: [13268.53,
            925.71,
            3497.13,
            1645.71,
            985.71,
            2219.99,
            4174.27,
            1757.14,
            2142.85,
            1868.57,
            1765.71,
            1808.57,
            2477.14,
            1054.28,
            3085.71,
            1954.28,
            4148.56,
            642.86,
            1277.14,
            4954.27,
            240.00,
            4979.99,
            745.71,
            1225.71,
            1448.57,
            3025.71,
            3428.56,
            831.43,
            342.86,
            711.43,
            2202.85,
            642.86,
            908.57,
            934.28,
            1362.85,
            1714.28,
            1002.85,
            1268.57,
            1894.28,
            3068.56,
            677.14,
            1140.00,
            1251.42,
            154.29,
            437.14,
            1542.85,
            3188.56,
            754.28,
            745.71,
            317.14,
            951.43,
            1165.71,
            2434.28,
            1165.71,
            951.43,
            1448.57,
            325.71,
            454.28,
            214.29,
            1671.42,
            
            ]
    },{
        name: 'Legenda pražská',
        data: [11899.99,
            668.54,
            2540.45,
            2005.62,
            1470.78,
            2807.86,
            4947.19,
            2273.03,
            3743.82,
            2005.62,
            2139.32,
            2941.57,
            2005.62,
            1871.91,
            5080.89,
            1337.08,
            2139.32,
            1069.66,
            935.95,
            3877.52,
            133.71,
            2941.57,
            802.25,
            802.25,
            3610.11,
            7086.51,
            7888.76,
            1738.20,
            133.71,
            668.54,
            3075.28,
            802.25,
            534.83,
            1203.37,
            1470.78,
            2406.74,
            534.83,
            2273.03,
            935.95,
            2139.32,
            802.25,
            2674.15,
            1604.49,
            133.71,
            267.42,
            2406.74,
            6819.09,
            1069.66,
            133.71,
            802.25,
            1203.37,
            1069.66,
            1871.91,
            1069.66,
            2540.45,
            1337.08,
            0.00,
            1069.66,
            0.00,
            2139.32,
            ]
    },{
        name: 'Legenda toledská',
        data: [14756.94,
            217.01,
            2278.65,
            1627.60,
            868.06,
            1627.60,
            3038.19,
            1627.60,
            2387.15,
            1736.11,
            1627.60,
            2278.65,
            3689.24,
            1302.08,
            4774.31,
            868.06,
            4557.29,
            2061.63,
            1302.08,
            4123.26,
            217.01,
            5859.38,
            651.04,
            1085.07,
            1410.59,
            6401.91,
            3363.72,
            325.52,
            217.01,
            0.00,
            3472.22,
            542.53,
            868.06,
            542.53,
            1844.62,
            868.06,
            976.56,
            542.53,
            1193.58,
            4557.29,
            868.06,
            868.06,
            3906.25,
            0.00,
            217.01,
            651.04,
            7486.98,
            434.03,
            542.53,
            217.01,
            2929.69,
            3146.70,
            6076.39,
            976.56,
            1953.12,
            1193.58,
            217.01,
            1302.08,
            0.00,
            3580.73,
            ]
    },{
        name: 'Legenda slovenská',
        data: [12496.88,
            749.81,
            3624.09,
            3999.00,
            999.75,
            874.78,
            4623.84,
            1749.56,
            1249.69,
            1624.59,
            2749.31,
            1249.69,
            5123.72,
            499.88,
            3374.16,
            624.84,
            2124.47,
            1749.56,
            1499.63,
            3624.09,
            249.94,
            4748.81,
            499.88,
            499.88,
            1999.50,
            5498.63,
            7748.06,
            2499.38,
            1249.69,
            374.91,
            2499.38,
            624.84,
            999.75,
            874.78,
            2374.41,
            1999.50,
            1374.66,
            2124.47,
            3124.22,
            2874.28,
            0.00,
            1249.69,
            874.78,
            0.00,
            374.91,
            3999.00,
            4998.75,
            249.94,
            1374.66,
            249.94,
            749.81,
            2999.25,
            2374.41,
            1999.50,
            874.78,
            874.78,
            124.97,
            499.88,
            0.00,
            1624.59,
            ]
    },
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
