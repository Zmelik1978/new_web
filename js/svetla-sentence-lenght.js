/* Model: delka vet podle typu segmentu -- scatter, container 'container-sentence-lenght'. */
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
            name: 'První Češka', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[21.14, 0], [17.24, 1], [20.96, 2], [23.36, 6], [8.43, 11], [7.44, 13]]
            },
            {
            name: 'Černý Petříček', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[20.74, 0], [16.32, 1], [10.75, 2], [22.14, 6], [21, 13]]
            },
            {
            name: 'Zvonečková královna', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[26.52, 0], [22.6, 1], [15, 2], [28.44, 6]]
            },
            {
            name: 'Mladá paní Zapletalová', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[25.07, 0], [19.99, 1], [7, 2], [26.61, 6], [42, 11]]
            },
            {
            name: 'Na košatkách', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[18.7, 0], [15.59, 1], [1, 2], [20.7, 6], [3, 13]]
            },
            {
            name: 'Škapulíř', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[21.44, 0], [19.6, 1], [20, 2], [22.2, 6], [10.67, 13]]
            }
    ]
});

