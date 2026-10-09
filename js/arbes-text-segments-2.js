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
            'Samovrah (1900)',
            'Moderní Magdaléna (1900)',
            'Vymírající hřbitov (1924)',
            'Svatý Václav (1925)',
            'V staré pražské krčmě (1926)',
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
            149492.02, // Samovrah
            604843.04, // Moderní Magdaléna
            129107.20, // Vymírající hřbitov
            403807.81, // Svatý Václav
            216271.35 // V staré pražské krčmě
        ] //pořadí určuje pořadí děl

    }, {
        name: 'direct speech as an inner monologue',
        data: [
            4837.93, // Samovrah
            14757.18, // Moderní Magdaléna
            806.03, // Vymírající hřbitov
            1594.90, // Svatý Václav
            2087.29 // V staré pražské krčmě
        ] //pořadí určuje pořadí děl

    }, {
        name: 'personal narrator',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            0 // V staré pražské krčmě
        ]

    }, {
        name: 'narrator - character',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            885638.42, // Vymírající hřbitov
            610047.85, // Svatý Václav
            0 // V staré pražské krčmě
        ]

    }, {
        name: 'heterodiegetic narrator',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            0 // V staré pražské krčmě
        ]

    }, {
        name: 'rhetorical narrator',
        data: [
            851717.46, // Samovrah
            416152.4, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            799335.86 // V staré pražské krčmě
        ]

    }, {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            1802.66 // V staré pražské krčmě
        ]

    }, {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            237.19 // V staré pražské krčmě
        ]

    }, {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            0 // V staré pražské krčmě
        ]

    }, {
        name: 'direct speech in intradiegetic narration of 2nd degree',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            0 // V staré pražské krčmě
        ]

    },{
        name: 'text-in-text',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            3510.44 // V staré pražské krčmě
        ]

    }, {
        name: 'direct speech in text-in-text',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
            0 // V staré pražské krčmě
        ]

    }, {
        name: 'unrealized direct speech',
        data: [
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            1295.85, // Svatý Václav
            47.44 // V staré pražské krčmě
        ],
        

    }
]
});