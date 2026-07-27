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
            name: 'Pekla zplozenci', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[19.2, 0], [14.7, 1], [22.72, 6], [29.94, 7], [29.07, 8], [18.14, 11]]
            }
    ]
});

