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
        name: 'Druhé město',
        data: [2407.25,
696.83,
1161.39,
696.83,
401.21,
1393.67,
781.30,
232.28,
1625.95,
1309.20,
1203.62,
886.88,
1752.64,
950.23,
1119.16,
1161.39,
337.86,
549.02,
886.88,
2174.97,
401.21,
929.11,
739.07,
886.88,
3568.64,
3294.13,
1583.72,
2428.36,
485.67,
570.14,
1372.55,
908.00,
696.83,
1815.99,
1625.95,
929.11,
992.46,
633.49,
1076.93,
1330.32,
380.09,
3251.90,
992.46,
211.16,
886.88,
3547.52,
3800.92,
633.49,
316.74,
337.86,
1266.97,
358.98,
844.65,
1098.04,
1203.62,
1900.46,
401.21,
844.65,
168.93,
2935.15,
]
    }, {
        name: 'Luxemburská zahrada',
        data: [4132.31,
600.73,
800.98,
764.57,
655.34,
1328.89,
964.81,
382.28,
1165.06,
1055.83,
1365.30,
1128.65,
1310.69,
1201.46,
1510.93,
1656.56,
910.20,
400.49,
673.55,
2512.15,
127.43,
1165.06,
582.53,
1165.06,
1128.65,
1492.73,
1765.79,
473.30,
254.86,
418.69,
1856.81,
600.73,
782.77,
1401.71,
1456.32,
709.96,
983.02,
491.51,
764.57,
1638.36,
455.10,
1401.71,
910.20,
18.20,
382.28,
1146.85,
2166.28,
764.57,
436.90,
400.49,
691.75,
327.67,
910.20,
964.81,
892.00,
1219.67,
436.90,
509.71,
91.02,
2839.82,
]
    }, {
        name: 'Vražda v hotelu Intercontinental',
        data: [2493.03,
1319.84,
1466.49,
879.89,
293.30,
1173.19,
1759.79,
293.30,
1319.84,
1319.84,
1906.44,
1173.19,
1173.19,
1319.84,
1906.44,
1613.14,
879.89,
1319.84,
586.60,
3079.63,
146.65,
2493.03,
1613.14,
1319.84,
2639.68,
3226.28,
3226.28,
879.89,
293.30,
1613.14,
1466.49,
293.30,
439.95,
2493.03,
3079.63,
733.25,
586.60,
1906.44,
439.95,
1759.79,
0.00,
3226.28,
439.95,
0.00,
586.60,
3226.28,
3372.93,
879.89,
586.60,
293.30,
293.30,
293.30,
1319.84,
1173.19,
1759.79,
1906.44,
439.95,
879.89,
146.65,
4106.17,
]
    }, {
        name: 'Návrat starého varana',
        data: [3291.59,
1003.53,
1043.67,
1846.50,
802.83,
1485.23,
842.97,
321.13,
1525.37,
1083.82,
1244.38,
682.40,
2809.89,
401.41,
1204.24,
1404.95,
602.12,
280.99,
642.26,
2569.04,
321.13,
1204.24,
963.39,
682.40,
2769.75,
4254.98,
1565.51,
1364.80,
361.27,
481.70,
2207.77,
682.40,
1003.53,
2167.63,
4174.69,
1003.53,
481.70,
481.70,
1364.80,
1244.38,
361.27,
2528.90,
1525.37,
120.42,
1043.67,
2569.04,
3331.73,
963.39,
802.83,
481.70,
1565.51,
240.85,
1445.09,
1164.10,
963.39,
2328.20,
441.55,
401.41,
200.71,
2769.75,
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
