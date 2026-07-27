Highcharts.chart('container-text-segments', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Distribution of Text Segments'
    },
    xAxis: {
        categories: [
            'Osudy dobrého vojáka Švejka... I',
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
		name: 'Švejk direct speach',
		data: [255061.24]
	},		
		{
        name: 'direct speach',
        data: [295878.31] //pořadí určuje pořadí děl

    }, {
        name: 'direct speech as an inner monologue',
        data: [0]

    }, {
        name: 'personal narrator',
        data: [0]

    }, {
        name: 'narrator - character',
        data: [0]

    }, {
        name: 'heterodiegetic narrator',
        data: [0]

    }, {
        name: 'rhetorical narrator',
        data: [502235.31]

    }, {
        name: 'intradiegetic narrator of 1st degree',
        data: [0]

    }, {
        name: 'irect speach in intradiegetic narration of 1st degree',
        data: [0]

    }, {
        name: 'ntradiegetic narrator of 2st degree',
        data: [0]

    }, {
        name: 'direct speach in intradiegetic narration of 2st degree',
        data: [0]

    }, {
        name: 'text-in-text',
        data: [0]

    }, {
        name: 'direct speach in text-in-text',
        data: [0]

    }]
});