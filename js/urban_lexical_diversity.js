document.addEventListener('DOMContentLoaded', function () {
    const xValues = [21170,
        2161,
        21451,
        18659,
        25865,
        9096,
        13900,
        8558,
        18357,
        30911,
        24287,
        28547,
        20089,
        24575,
        17440,        
        
        ]; // Zadejte hodnoty osy x
    const yValues = [60792,
        3377,
        59327,
        44896,
        78287,
        21138,
        33486,
        18561,
        44106,
        105510,
        75645,
        81564,
        52128,
        76655,
        48238,        

        ]; // Zadejte hodnoty osy y
    const pointNames = ['Miloš Urban - Boletus Arcanus',
 'Miloš Urban - Běloruska',
 'Miloš Urban - Hastrman1',
 'Miloš Urban - Hastrman2',
 'Miloš Urban - Lord Mord',
 'Miloš Urban - Michaela',
 'Miloš Urban - Paměti poslance parlamentu',
 'Miloš Urban - Pole a palisáda',
 'Miloš Urban - Poslední tečka za rukopisy',
 'Miloš Urban - Praga Piccola',
 'Miloš Urban - Santiniho jazyk',
 'Miloš Urban - Sedmikostelí',
 'Miloš Urban - Stín katedrály',
 'Miloš Urban - Továrna na maso',
 'Miloš Urban - Závěrka'
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