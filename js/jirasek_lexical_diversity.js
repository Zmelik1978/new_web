document.addEventListener('DOMContentLoaded', function () {
    const xValues = [20121,
        28260,
        34411,
        33095,
        37204,
        11572,
        41680,
        
        ]; // Zadejte hodnoty osy x
    const yValues = [68052,
        106904,
        132245,
        119123,
        140695,
        28423,
        169620,
              
        ]; // Zadejte hodnoty osy y
    const pointNames = [    "Alois Jirásek - F. L. Věk I",
        "Alois Jirásek - F. L. Věk II",
        "Alois Jirásek - F. L. Věk III",
        "Alois Jirásek - F. L. Věk IV",
        "Alois Jirásek - F. L. Věk V",
        "Alois Jirásek - Filozofská historie",
        "Alois Jirásek - Temno"
     
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