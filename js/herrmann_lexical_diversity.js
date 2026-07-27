document.addEventListener('DOMContentLoaded', function () {
    const xValues = [2151,
        1696,
        6738,
        1232,
        1420,
        1462,
        2014,
        27925,
        1238,
        1614,
        2118,
        1525,
        13642,
        1357,
        1349,
        28767,
        1707,
        12495,
        11991,
        14274,
        13321,
        1081,
        1225,
        
        
        ]; // Zadejte hodnoty osy x
    const yValues = [3896,
        3083,
        15910,
        1882,
        2341,
        2480,
        3565,
        96913,
        2052,
        2677,
        3819,
        2510,
        38716,
        2293,
        2444,
        108089,
        2845,
        31563,
        30895,
        40807,
        37164,
        1789,
        2078,
        
        
        ]; // Zadejte hodnoty osy y
    const pointNames = [ "Ignát Herrmann - Dobrý muž Koňura",
        "Ignát Herrmann - Dvě těžké chvíle ze života páně Klokočova",
        "Ignát Herrmann - Historie o doktoru Faustovi",
        "Ignát Herrmann - Hvězdáři",
        "Ignát Herrmann - Kterak pan Vilibald Vonásek dobyl svobody",
        "Ignát Herrmann - Malíř a malíř!",
        "Ignát Herrmann - Náš Mikoláš",
        "Ignát Herrmann - Otec Kondelík a ženich Vejvara",
        "Ignát Herrmann - Pan Alojs",
        "Ignát Herrmann - Poslední sázka",
        "Ignát Herrmann - Proč pan Tadeáš Bezinka chodí oholen a ostříhán",
        "Ignát Herrmann - První výdělek",
        "Ignát Herrmann - Příběh dušičkový",
        "Ignát Herrmann - Smlouva pánů Škabrouta a Rysa a její zánik",
        "Ignát Herrmann - Tajný společník páně Kobrčův",
        "Ignát Herrmann - Tchán Kondelík a zeť Vejvara",
        "Ignát Herrmann - To se tak nebere!",
        "Ignát Herrmann - U snědeného krámu I",
        "Ignát Herrmann - U snědeného krámu II",
        "Ignát Herrmann - U snědeného krámu III",
        "Ignát Herrmann - U snědeného krámu IV",
        "Ignát Herrmann - Zamrzá!",
        "Ignát Herrmann - Ztracený ráj páně Tetřevův"  
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