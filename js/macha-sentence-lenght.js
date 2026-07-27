/* Model: delka vet podle typu segmentu -- scatter, container 'container-sentence-lenght'. */
$(function () {
    Highcharts.chart('container-sentence-lenght', {
        chart: { type: 'scatter' },
        title: { text: '' },
        xAxis: { title: { text: 'average sentence length per word count' }, min: 0, max: 50,
            gridLineWidth: 0,
            plotLines: [
            { color: '#A9A9A9', value: 5, width: 0.7 },
            { color: '#A9A9A9', value: 10, width: 0.7 },
            { color: '#A9A9A9', value: 15, width: 0.7 },
            { color: '#A9A9A9', value: 20, width: 0.7 },
            { color: '#A9A9A9', value: 25, width: 0.7 },
            { color: '#A9A9A9', value: 30, width: 0.7 },
            { color: '#A9A9A9', value: 35, width: 0.7 },
            { color: '#A9A9A9', value: 40, width: 0.7 },
            { color: '#A9A9A9', value: 45, width: 0.7 },
            { color: '#A9A9A9', value: 50, width: 0.7 }
            ] },
        yAxis: { title: { text: 'segments of text' }, min: 0, max: 13, categories: [
        'AVERAGE SENTENCE LENGTH THROUGHOUT THE TEXT',
        'direct speach',
        'direct speech as an inner monologue',
        'personal narrator',
        'narrator - character',
        'heterodiegetic narrator',
        'rhetorical narrator',
        'intradiegetic narrator of 1st degree',
        'direct speech in intradiegetic narrator of 1st degree',
        'intradiegetic narrator of 2nd degree',
        'direct speech in intradiegetic narrator of 2nd degree',
        'text-in-text',
        'direct speech in text-in-text',
        'unrealized direct speech'
        ],
            gridLineWidth: 0,
            plotLines: [
            { color: '#000000', value: 0.5, width: 1 },
            { color: '#000000', value: 1.5, width: 1 },
            { color: '#000000', value: 2.5, width: 1 },
            { color: '#000000', value: 3.5, width: 1 },
            { color: '#000000', value: 4.5, width: 1 },
            { color: '#000000', value: 5.5, width: 1 },
            { color: '#000000', value: 6.5, width: 1 },
            { color: '#000000', value: 7.5, width: 1 },
            { color: '#000000', value: 8.5, width: 1 },
            { color: '#000000', value: 9.5, width: 1 },
            { color: '#000000', value: 10.5, width: 1 },
            { color: '#000000', value: 11.5, width: 1 },
            { color: '#000000', value: 12.5, width: 1 },
            { color: '#000000', value: 13.5, width: 1 }
            ] },
        legend: { enabled: true },
        credits: { enabled: false },
        series: [
            {
            name: 'Sen', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[25.43, 0], [20.5, 1], [26.97, 4]]
            },
            {
            name: 'Návrat', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[24.51, 0], [41, 1], [20.74, 4]]
            },
            {
            name: 'Poutník', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[31.5, 0], [4, 1], [30.5, 3]]
            },
            {
            name: 'Přísaha', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[30.41, 0], [27, 1], [31.46, 6]]
            },
            {
            name: 'Svět smyslný', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[43.1, 0], [34.5, 1], [2, 2], [58.2, 3]]
            },
            {
            name: 'Svět zašlý', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.17, 0], [17.68, 1], [8.23, 6]]
            },
            {
            name: 'Pouť krkonošská', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[27.84, 0], [19.48, 1], [30.79, 3], [13.5, 13]]
            },
            {
            name: 'Klášter sázavský', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[25.48, 0], [4, 1], [25.87, 6]]
            },
            {
            name: 'Viasil Viasilovič', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[23.05, 0], [22.82, 1], [23.14, 6]]
            },
            {
            name: 'Křivoklad', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[15.31, 0], [10.78, 1], [15.82, 4], [20.81, 6], [3, 13]]
            },
            {
            name: 'Valdice', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[21.84, 0], [10.67, 1], [22.94, 6]]
            },
            {
            name: 'Karlův Tejn', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[24.33, 0], [15.45, 1], [31.85, 6]]
            },
            {
            name: 'Marinka', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[17.37, 0], [8.04, 1], [10.5, 2], [20.19, 4], [5, 13]]
            },
            {
            name: 'Večer na Bezdězu', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[19.75, 0], [3, 1], [11, 2], [20.83, 4]]
            },
            {
            name: 'Cikáni', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.13, 0], [7.18, 1], [17.02, 3], [19.71, 4], [15.41, 7], [9.17, 8], [12.96, 11], [14.3, 12]]
            }
        ]
    });
});

