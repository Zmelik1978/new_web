document.addEventListener('DOMContentLoaded', function () {
    const xValues = [760,
        1069,
        1190,
        1210,
        8273,
        913,
        2706,
        962,
        1008,
        1695,
        1815,
        1312,
        2040,
        8974,
        460,
        1826,
        
        ]; // Zadejte hodnoty osy x
    const yValues = [1125,
        1834,
        1976,
        1884,
        20624,
        1510,
        4947,
        1424,
        1649,
        3099,
        3282,
        2241,
        3743,
        21758,
        649,
        3282,
              
        ]; // Zadejte hodnoty osy y
    const pointNames = [   "Jan Neruda - Blbý Jóna",
        "Jan Neruda - Byl darebákem",
        "Jan Neruda - Doktor Kazisvět",
        "Jan Neruda - Erotománie",
        "Jan Neruda - Figurky",
        "Jan Neruda - Jak si nakouřil pan Vorel pěnovku",
        "Jan Neruda - Jak to přišlo...",
        "Jan Neruda - Josef harfenista",
        "Jan Neruda - O měkkém srdci paní Rusky",
        "Jan Neruda - Pan Ryšánek a pan Schlegl",
        "Jan Neruda - Psáno o letošních dušičkách",
        "Jan Neruda - Přivedla žebráka na mizinu",
        "Jan Neruda - Svatováclavská mše",
        "Jan Neruda - Týden v tichém domě",
        "Jan Neruda - U tří lilií",
        
    ];
    const regression = linearRegression(xValues, yValues);
    const regressionLine = xValues.map(x => [x, regression.slope * x + regression.intercept]);

    Highcharts.chart('container-lexical_diversity', {
        title: {
            text: 'Linear Regresion'
        },
        xAxis: {
            title: {
                text: 'unique words'
            }
        },
        yAxis: {
            title: {
                text: 'number of words'
            }
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Název: <b>{point.name}</b><br>X: {point.x}<br>Y: {point.y}'
        },
        series: [{
            type: 'scatter',
            name: 'Data',
            data: xValues.map((x, i) => ({ x: x, y: yValues[i], name: pointNames[i] })),
            marker: {
                radius: 4
            },
            dataLabels: {
                enabled: false
            }
        }, {
            type: 'line',
            name: 'Regresion Line',
            data: regressionLine,
            color: '#FF0000',
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0,
                    
                }
            },
            enableMouseTracking: false
        }]
    });

    function linearRegression(x, y) {
        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        return { slope, intercept };
    }
});