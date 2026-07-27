/* Model: celkove rozlozeni segmentu v korpusu -- container 'container-text-segments'. */
Highcharts.chart('container-text-segments', {
    chart: { type: 'column', height: 550 },
    title: { text: 'Total Distribution of Text Segments' },
    xAxis: { categories: [
            'Sen (1833)',
            'Návrat (1833)',
            'Poutník (1833)',
            'Přísaha (1833)',
            'Svět smyslný (1833)',
            'Svět zašlý (1833)',
            'Pouť krkonošská (1833)',
            'Klášter sázavský (1834)',
            'Viasil Viasilovič (1834)',
            'Křivoklad (1834)',
            'Valdice (1834)',
            'Karlův Tejn (1834)',
            'Marinka (1834)',
            'Večer na Bezdězu (1834)',
            'Cikáni (1835–1836)'
        ], crosshair: true },
    yAxis: { title: { useHTML: true, text: 'i.p.m.' } },
    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0 } },
    series: [    {
        name: 'direct speech',
        data: [
            191947.57,
            311195.45,
            31746.03,
            208897.49,
            320185.61,
            702102.8,
            180370.37,
            3270.65,
            450975.36,
            305457.75,
            55652.17,
            291095.89,
            101472.13,
            10849.91,
            147377.42
        ]
    },     {
        name: 'direct speech as an inner monologue',
        data: [
            0,
            0,
            0,
            0,
            4640.37,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5520.5,
            9945.75,
            0
        ]
    },     {
        name: 'personal narrator',
        data: [
            0,
            0,
            968253.97,
            0,
            675174.01,
            0,
            809629.63,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            578107.18
        ]
    },     {
        name: 'narrator - character',
        data: [
            808052.43,
            688804.55,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            35451.34,
            0,
            0,
            891692.95,
            979204.34,
            4917.33
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
            0,
            0,
            0,
            791102.51,
            0,
            297897.2,
            0,
            994276.37,
            546457.91,
            641005.12,
            944347.83,
            708904.11,
            0,
            0,
            0
        ]
    },     {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            135119.73
        ]
    },     {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7518.53
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
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            97883.41
        ]
    },     {
        name: 'direct speech in text-in-text',
        data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            5095.5
        ]
    },     {
        name: 'unrealized direct speech',
        data: [
            0,
            0,
            0,
            0,
            0,
            0,
            10000,
            0,
            0,
            240.08,
            0,
            0,
            1314.41,
            0,
            0
        ]
    }]
});

