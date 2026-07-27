/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Jan Maria Plojhar (1891)',
            'Legenda pražská (1895)',
            'Legenda slovenská (1895)',
            'Legenda toledská (1895)'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            237556.29,
            254612.55,
            38970.7,
            222207.43
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            45249.85,
            1006.37,
            1338.69,
            266.28
        ]
    },     {
        name: 'personal narrator',
        data: [
            0,
            0,
            0,
            772999.6
        ]
    },     {
        name: 'narrator - character',
        data: [
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'heterodiegetic narrator',
        data: [
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'rhetorical narrator',
        data: [
            659161.2,
            721905.4,
            961178.05,
            0
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            217.03,
            11573.3,
            0,
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            781.29,
            10902.38,
            0,
            0
        ]
    },     {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 2nd degree',
        data: [
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'text-in-text',
        data: [
            53410.02,
            0,
            0,
            3861
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            6423.96,
            0,
            0,
            0
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            368.94,
            0,
            0,
            532.55
        ]
    }]
});

