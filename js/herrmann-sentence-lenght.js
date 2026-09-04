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
            name: 'Historie o doktoru Faustovi (1884)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[21.28, 0], [15.16, 1], [15, 2], [24.6, 6]]
            },
            {
            name: 'Zamrzá! (1885)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.61, 0], [6.15, 1], [1.33, 2], [16.55, 6]]
            },
            {
            name: 'Spiritista (1885)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.53, 0], [6.78, 1], [19.53, 6]]
            },
            {
            name: 'Dvě těžké chvíle ze života páně Klokočova (1885)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[18.35, 0], [10.27, 1], [4.5, 2], [23.49, 6]]
            },
            {
            name: 'Pan Alojs (1885)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.51, 0], [8.87, 1], [17.35, 6]]
            },
            {
            name: 'To se tak nebere! (1886)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.99, 0], [6.58, 1], [4.5, 2], [17.81, 6]]
            },
            {
            name: 'Ztracený ráj páně Tetřevův (1886)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[17.28, 0], [8.63, 1], [16, 2], [25.95, 6]]
            },
            {
            name: 'Proč pan Tadeáš Bezinka chodí oholen a ostříhán (1886)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[17.34, 0], [8.31, 1], [9.1, 2], [21.13, 6]]
            },
            {
            name: 'První výdělek (1886)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[15.85, 0], [6.36, 1], [18.99, 6]]
            },
            {
            name: 'Kterak pan Vilibald Vonásek dobyl svobody (1887)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.83, 0], [8.25, 1], [18.72, 6]]
            },
            {
            name: 'Poslední sázka (1887)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.61, 0], [6.26, 1], [16.81, 6], [4, 13]]
            },
            {
            name: 'Smlouva pánů Škabrouta a Rysa – a její zánik (1887)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[19.39, 0], [8.38, 1], [22.43, 6], [4, 11]]
            },
            {
            name: 'Hvězdáři (1887)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[23.63, 0], [5, 1], [24.12, 6]]
            },
            {
            name: 'Malíř a malíř! (1888)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.89, 0], [7.75, 1], [19.97, 6], [11.14, 11], [4.5, 13]]
            },
            {
            name: 'Dobrý muž Koňura (1888)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[16.08, 0], [11.07, 1], [18.13, 4]]
            },
            {
            name: 'Náš Mikoláš (1888)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.94, 0], [10.29, 1], [17.1, 4], [5, 13]]
            },
            {
            name: 'Tajný společník páně Kobrčův (1889)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[13.38, 0], [6.75, 1], [8, 2], [18.78, 6], [3.33, 11]]
            },
            {
            name: 'U snědeného krámu I (1890)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.56, 0], [8.06, 1], [7.4, 2], [17.88, 6], [7, 11], [3.6, 13]]
            },
            {
            name: 'U snědeného krámu II (1890)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.66, 0], [9.97, 1], [8.81, 2], [16.7, 6], [26, 13]]
            },
            {
            name: 'U snědeného krámu III (1890)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[15.63, 0], [10.56, 1], [8.5, 2], [17.52, 6], [17, 11], [9.25, 13]]
            },
            {
            name: 'U snědeného krámu IV (1890)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[14.48, 0], [9.41, 1], [9.5, 2], [16.48, 6], [2.75, 11]]
            },
            {
            name: 'Otec Kondelík a ženich Vejvara (1898)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[11.5, 0], [9.1, 1], [5, 2], [13.51, 6], [17.5, 7], [3, 8], [13.87, 11], [5.8, 13]]
            },
            {
            name: 'Tchán Kondelík a zeť Vejvara (1906)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[11.72, 0], [9.13, 1], [10.28, 2], [13.98, 6], [14.88, 7], [6.03, 8], [15.15, 11], [6.31, 13]]
            },
            {
            name: 'Příběh dušičkový (1916)', showInLegend: false,
            marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 },
            data: [[11.16, 0], [9.14, 1], [8.4, 2], [12.77, 6], [10.29, 11]]
            }
    ]
});

