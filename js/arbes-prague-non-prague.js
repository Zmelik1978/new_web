Highcharts.chart('prague-nonprague', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
        xAxis: {
        categories: [
            'Praha',
			'Kamenné lomy',
			'Smíchov',
			'Vídeň',
			'Šumava',
            'cesta z Prahy na Šumavu',
            'Krkonoše',
            'Španělsko',
                   ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'i.p.m.'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: 'Ďáběl na skřipci',
        data: [69161.05, 3058.62, 0, 0, 0, 0, 0, 0]

    }, {
        name: 'Svatý Xaverius',
        data: [110787.56, 0, 15321.02, 35118.22, 0, 0, 0, 0]

    }, {
        name: 'Sivooký démon',
        data: [75180.51, 0, 0, 0, 133741.15, 24168.66, 0, 0]

    }, {
        name: 'Zázračná madona',
        data: [117086.35, 0, 89544.84, 356.14, 0, 0, 18749.74, 1263.95]
		 
	}
]
});