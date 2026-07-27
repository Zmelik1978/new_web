// zde zadávat jednotlivé frekvence
const dataset = [
    [0, 386.85], [0, 193.42], [0, 193.42], [0, 96.71], [0, 96.71], [0, 96.71], [0, 96.71], [0, 96.71], [0, 96.71], // Ďábel na skřipci

    [1, 1466.97], [1, 906.07], [1, 172.58] ,[1, 172.58],[1, 172.58],[1, 172.58],[1, 172.58],[1, 86.29],[1, 86.29],[1, 86.29],[1, 86.29], [1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15],[1, 43.15], // Svatý Xaverius

    [2, 1345.21], [2, 269.04], [2, 239.15], [2, 149.47], [2, 119.57], [2,  89.68], [2, 89.68],[2, 89.68],[2, 89.68], [2, 59.79], [2, 59.79], [2, 119.57],[2, 59.79],[2, 59.79],[2, 59.79], [2, 29.89], [2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89],[2, 29.89], // Sivooký démon

    [3, 645.97], [3, 492.17], [3, 369.13],[3, 307.61], [3, 276.85], [3, 184.56], [3, 92.28],[3, 92.28], [3, 61.52], [3, 61.52],[3, 61.52],[3, 61.52],[3, 61.52],[3, 61.52],[3, 61.52], [3, 30.76], [3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76],[3, 30.76], // Zázračná madona

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
            categories: ['Ďábel na skřipci', 'Svatý Xaverius', 'Sivooký démon', 'Zázračná madona'], // Names on X-axis            
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