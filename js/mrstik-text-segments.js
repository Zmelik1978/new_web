/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Santa Lucia'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            157707.82
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            4089.18
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
            823302.71
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            0
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
            14653.82
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            0
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            246.47
        ]
    }]
});

