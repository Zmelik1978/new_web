/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Kašpar Lén mstitel'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            112163.63
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            1741.61
        ]
    },     {
        name: 'personal narrator',
        data: [
            0
        ]
    },     {
        name: 'narrator - character',
        data: [
            0
        ]
    },     {
        name: 'heterodiegetic narrator',
        data: [
            0
        ]
    },     {
        name: 'rhetorical narrator',
        data: [
            861733.53
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            18095.7
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            1890.28
        ]
    },     {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 2nd degree',
        data: [
            0
        ]
    },     {
        name: 'text-in-text',
        data: [
            3270.82
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            0
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            1104.43
        ]
    }]
});

