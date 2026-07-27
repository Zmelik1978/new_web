/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Pravý výlet pana Broučka',
            'Nový epochální výlet pana Broučka'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            329389.94,
            301201.68
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            47980.21,
            32421.39
        ]
    },     {
        name: 'personal narrator',
        data: [
            0,
            0
        ]
    },     {
        name: 'narrator - character',
        data: [
            39571.31,
            0
        ]
    },     {
        name: 'heterodiegetic narrator',
        data: [
            0,
            0
        ]
    },     {
        name: 'rhetorical narrator',
        data: [
            573866.45,
            666376.93
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            0,
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            0,
            0
        ]
    },     {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0,
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 2nd degree',
        data: [
            0,
            0
        ]
    },     {
        name: 'text-in-text',
        data: [
            9192.09,
            0
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            0,
            0
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            0,
            0
        ]
    }]
});

