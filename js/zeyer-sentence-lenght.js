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
            name: 'Jan Maria Plojhar', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[12.3, 0], [9.71, 1], [9.61, 2], [13.74, 6], [10, 7], [12, 8], [13.38, 11], [10.76, 12], [3.78, 13]]
            },
            {
            name: 'Legenda pražská', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[12.58, 0], [9.09, 1], [3, 2], [14.39, 6], [23, 7], [21.67, 8]]
            },
            {
            name: 'Legenda slovenská', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[16.98, 0], [6.72, 1], [3, 2], [18.31, 6]]
            },
            {
            name: 'Legenda toledská', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.53, 0], [8.69, 1], [2, 2], [17.98, 3], [14.5, 11], [4, 13]]
            }
    ]
});

