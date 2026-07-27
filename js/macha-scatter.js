// zde zadávat jednotlivé frekvence
const dataset = [
    [0, 1292.33], [0, 516.93], [0, 1033.86], [0, 258.46], [0, 258.46], [0, 258.46], [0, 258.46], [0, 258.46], [0, 258.46], [0, 258.46], // Márinka
    [1, 2134.72], [1, 1581.28], [1, 869.70], [1, 158.13], [1, 158.13],[1, 79.06], [1, 79.06], [1, 79.06],[1, 79.06], // Křivoklad   

    ];

function getTrendLine(data) {
    const n = data.length;

    let sumX = 0,
        sumY = 0,
        sumXY = 0,
        sumX2 = 0;

    // Calculate the sums needed for linear regression
    for (let i = 0; i < n; i++) {
        const [x, y] = data[i];
        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x ** 2;
    }

    // Calculate the slope of the trend line
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);

    // Calculate the intercept of the trend line
    const intercept = (sumY - slope * sumX) / n;

    const trendline = []; // Array to store the trend line data points

    // Find the minimum and maximum x-values from the scatter plot data
    const minX = Math.min(...data.map(([x]) => x));
    const maxX = Math.max(...data.map(([x]) => x));

    // Calculate the corresponding y-values for the trend line using the slope
    // and intercept
    trendline.push([minX, minX * slope + intercept]);
    trendline.push([maxX, maxX * slope + intercept]);

    return trendline;
}

    Highcharts.chart('container-scatter', {
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Márinka', 'Křivoklad'], // Names on X-axis            
        },
        yAxis: {
            title: {
                text: 'i.p.m.'
            }
        },
        series: [{
            type: 'line',
            name: 'Trend Line',
            data: getTrendLine(dataset),
            showInLegend: false, 
            marker: {
                enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }, {
        type: 'scatter',
        name: 'Observations',
        data: dataset,
        marker: {
            radius: 4
        }
    }]
});
