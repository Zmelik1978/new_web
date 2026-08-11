/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Filozofská historie (1878)',
            'Psohlavci (1884)',
            'F. L. Věk I (1888)',
            'F. L. Věk II (1892)',
            'F. L. Věk III (1897)',
            'F. L. Věk IV (1900)',
            'F. L. Věk V (1906)',
            'Temno (1915)'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            148549.57,
            195911.14,
            135279.61,
            180037.74,
            213750.32,
            186218.78,
            229132.69,
            228851.27
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            1558.46,
            3927.72,
            5448.19,
            3383.43,
            2070.33,
            1181.87,
            1056.21,
            574.11
        ]
    },     {
        name: 'personal narrator',
        data: [
            0,
            0,
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
            0,
            0,
            0
        ]
    },     {
        name: 'rhetorical narrator',
        data: [
            825594.16,
            782148.3,
            842589.87,
            797263.51,
            748092.12,
            783701.9,
            748442.63,
            729359.35
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            10165.41,
            9884.04,
            954.53,
            4127.05,
            15633.26,
            6650.08,
            5554.08,
            275.57
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            672.97,
            1136.59,
            279.02,
            1245.55,
            2191.23,
            174.78,
            1523.24,
            45.93
        ]
    },     {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0,
            0,
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
            0,
            0,
            0
        ]
    },     {
        name: 'text-in-text',
        data: [
            13601.11,
            6905.88,
            13583.76,
            8123.96,
            17250.24,
            13225.25,
            12811.02,
            10908.07
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            850.07,
            0,
            337.76,
            0,
            460.91,
            158.14,
            43.11,
            28.71
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            0,
            143.87,
            220.28,
            37.18,
            128.45,
            24.97,
            0,
            126.3
        ]
    }]
});

