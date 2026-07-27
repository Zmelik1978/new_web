document.addEventListener('DOMContentLoaded', function () {
    const xValues = [10387,
        831,
        824,
        1613,
        6026,
        2238,
        674,
        113,
        1613,
        394,
        714,
        338,
        571,
        1141,
        755,
        2083,
        ]; // Zadejte hodnoty osy x
    const yValues = [28998,
        1191,
        1254,
        2721,
        12648,
        3869,
        1071,
        128,
        2721,
        526,
        1077,
        443,
        889,
        1744,
        1122,
        3916,        
        ]; // Zadejte hodnoty osy y
    const pointNames = ["Karel Hynek Mácha - Cikáni",
    "Karel Hynek Mácha - Karlův Tejn",
    "Karel Hynek Mácha - Klášter Sázavský",
    "Karel Hynek Mácha - Krkonošská pouť",
    "Karel Hynek Mácha - Křivoklad",
    "Karel Hynek Mácha - Marinka",
    "Karel Hynek Mácha - Návrat",
    "Karel Hynek Mácha - Poutník",
    "Karel Hynek Mácha - Pouť krkonošská",
    "Karel Hynek Mácha - Přísaha",
    "Karel Hynek Mácha - Sen",
    "Karel Hynek Mácha - Svět smyslný",
    "Karel Hynek Mácha - Svět zašlý",
    "Karel Hynek Mácha - Valdice",
    "Karel Hynek Mácha - Večer na Bezdězu",
    "Karel Hynek Mácha - Viasil Viasilovič"
        
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