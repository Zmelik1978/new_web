/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'První Češka (1861)',
            'Černý Petříček (1871)',
            'Zvonečková královna (1872)',
            'Mladá paní Zapletalová (1882)',
            'Na košatkách (1885)',
            'Škapulíř (1889)'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            289774.96,
            180150.91,
            281744.04,
            204069.64,
            321681.1,
            262159.32
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            7195.04,
            3004.26,
            278.66,
            514.21,
            36.08,
            3323.73
        ]
    },     {
        name: 'personal narrator',
        data: [
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'narrator - character',
        data: [
            0,
            0,
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
            0,
            0,
            0
        ]
    },     {
        name: 'rhetorical narrator',
        data: [
            701485.59,
            815971.49,
            717995.88,
            780063.17,
            678174.6,
            733602.92
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0,
            0,
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
            0,
            0,
            0
        ]
    },     {
        name: 'text-in-text',
        data: [
            723.18,
            0,
            0,
            15426.43,
            0,
            0
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            0,
            0,
            0,
            0,
            0,
            0
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            821.24,
            733.6,
            0,
            0,
            108.23,
            886.33
        ]
    }]
});

