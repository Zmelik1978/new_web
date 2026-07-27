Highcharts.chart('container-text-segments', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Distribution of Text Segments'
    },
    xAxis: {
        categories: [
            'Týden v tichém domě',
            'Pan Ryšánek a pan Schlegl',
            'Přivedla žebráka na mizinu',
            'O měkkém srdci paní Rusky',
            'Večerní šplechty',
			'Doktor Kazisvět',
			'Hastrman',
			'Jak si nakouřil pan Vorel pěnovku',
			'U Tří lilií',
			'Svatováclavská mše',
			'Jak to přišlo...',
			'Psáno o letošních dušičkách',
			'Figurky'
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
        data: [283462.03, 61310.1, 164658.63, 272286.23, 431575.74, 116902.83, 167237.44, 78807.95, 49306.63, 5077.5, 123509.2, 308653.26, 274124.72] //pořadí určuje pořadí děl

    }, {
        name: 'direct speech as an inner monologue',
        data: [31991.17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 387.94]

    }, {
        name: 'personal narrator',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'narrator - character',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 947611.71, 989577.77, 859510.81, 0, 717486.18]

    }, {
        name: 'heterodiegetic narrator',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'rhetorical narrator',
        data: [476098.55, 930945.47, 826416.78, 719223.77, 321243.52, 870445.34, 820776.26, 911920.53, 0, 0, 0, 647775.75, 0]

    }, {
        name: 'intradiegetic narrator of 1st degree',
        data: [0, 0, 0, 0, 207558.67, 0, 0, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'direct speach in intradiegetic narration of 1st degree',
        data: [0, 0, 0, 0, 10362.69, 0, 0, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'intradiegetic narrator of 2st degree',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'direct speach in intradiegetic narration of 2st degree',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'text-in-text',
        data: [188407.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150213.28, 13577.73]

    }, {
        name: 'direct speach in text-in-text',
        data: [18661.52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    }]
});