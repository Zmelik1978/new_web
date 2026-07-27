Highcharts.chart('container', {

    chart: {
        height: 800, // Set the height of the chart
        events: {
            load: function () {
                this.renderer.text('positive', 250, 70) // Text and position (x, y)
                    .css({
                        color: 'black', // Text color
                        fontSize: '16px', // Font size
                        fontWeight: 'bold', // Font weight
                        fontStyle: 'italic' // Font style
                    })
                    .add();
                this.renderer.text('negative', 800, 70) //Text and position (x, y)
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
        name: 'Nový epochální výlet pana Broučka...',
        data: [6961.68,
731.87,
2249.16,
2356.26,
1356.63,
1677.94,
1410.19,
2017.10,
2891.77,
1642.24,
1053.18,
874.67,
1660.09,
821.12,
4712.52,
1910.00,
714.02,
1195.98,
1267.38,
3409.44,
267.76,
4694.67,
1017.48,
1213.83,
1106.73,
3088.13,
2302.71,
642.62,
321.31,
535.51,
2624.02,
749.72,
1731.49,
963.92,
2177.75,
981.77,
767.57,
553.36,
2534.76,
1642.24,
357.01,
1124.58,
999.63,
17.85,
517.66,
1445.89,
2677.57,
1160.28,
1053.18,
464.11,
1731.49,
1303.08,
1785.04,
1856.45,
1767.19,
1088.88,
196.35,
1374.48,
428.41,
3837.85,
]
        },{
            name: 'Pravý výlet pana Broučka...',
            data: [7882.73,
1140.48,
4394.20,
4964.44,
1475.92,
1341.74,
2482.22,
1509.46,
5065.07,
2046.16,
1710.72,
1039.85,
2884.74,
637.33,
4729.64,
1576.55,
1744.26,
805.04,
1073.39,
3689.79,
335.44,
6876.43,
2549.31,
1241.11,
1677.18,
1911.98,
2683.48,
469.61,
335.44,
570.24,
2113.24,
167.72,
1911.98,
1543.00,
2448.68,
1341.74,
1106.94,
503.15,
2482.22,
1677.18,
368.98,
872.13,
1140.48,
33.54,
503.15,
1375.29,
2918.29,
1308.20,
1241.11,
402.52,
905.68,
1106.94,
1509.46,
2582.85,
2717.03,
771.50,
234.80,
469.61,
335.44,
5769.49,
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
