/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Ivův román'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            253044.28
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            7996.47
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
            729898.6
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            34251.05
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            942.55
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
            3329.33
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            0
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            8376.53
        ]
    }]
});

