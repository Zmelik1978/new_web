Highcharts.chart('container-text-segments-2', {
    chart: {
        type: 'column',
        height: 550 // Set desired height in pixels
    },
    title: {
        text: 'Total Distribution of Text Segments'
    },
    xAxis: {
        categories: [
            'V staré pražské krčmě (1926)',
            'Newtonův mozek (1877)',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'i.p.m.'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'direct speech',
        data: [
            216271.35, // V staré pražské krčmě
            301555.04, // Newtonův mozek
        ] //pořadí určuje pořadí děl

    }, {
        name: 'direct speech as an inner monologue',
        data: [
            2087.29, // V staré pražské krčmě
            0 // Newtonův mozek
        ] //pořadí určuje pořadí děl

    }, {
        name: 'personal narrator',
        data: [
            0, // V staré pražské krčmě
            0 // Newtonův mozek
        ]

    }, {
        name: 'narrator - character',
        data: [
            0, // V staré pražské krčmě
            668903.91, // Newtonův mozek
        ]

    }, {
        name: 'heterodiegetic narrator',
        data: [
            0, // V staré pražské krčmě
            0, // Newtonův mozek
        ]

    }, {
        name: 'rhetorical narrator',
        data: [
            799335.86, // V staré pražské krčmě
            0, // Newtonův mozek
        ]

    }, {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            1802.66, // V staré pražské krčmě
            8838.68, // Newtonův mozek
        ]

    }, {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [    
            237.19, // V staré pražské krčmě
            0, // Newtonův mozek
        ]

    }, {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0, // V staré pražské krčmě
            0, // Newtonův mozek
        ]

    }, {
        name: 'direct speech in intradiegetic narration of 2nd degree',
        data: [
            0, // V staré pražské krčmě
            0, // Newtonův mozek
        ]

    },{
        name: 'text-in-text',
        data: [
        3510.44, // V staré pražské krčmě
        19378.93, // Newtonův mozek
        ]

    }, {
        name: 'direct speech in text-in-text',
        data: [
            0, // V staré pražské krčmě
            0 // Newtonův mozek
        ]

    }, {
        name: 'unrealized direct speech',
        data: [
            47.44, // V staré pražské krčmě
            0 // Newtonův mozek
        ],
        

    }
]
});