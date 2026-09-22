/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Osudy dobrého vojáka Švejka I',
            'Osudy dobrého vojáka Švejka II'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            238925.83,
            310856.76
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            3252.3,
            4014.27
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
            0,
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
            456793.49,
            333830.97
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            108034.45,
            161864.48
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            10247.47,
            24649.58
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
            25164.43,
            46562.16
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            545.08,
            763.04
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            872.12,
            779.63
        ]
    }]
});

