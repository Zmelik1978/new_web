$(function () {
    Highcharts.chart('container-sentence-lenght', {
        chart: { type: 'scatter' },
        title: { text: '' },

        xAxis: { title: { text: 'average sentence length per word count' }, min: 0, max: 50,
					gridLineWidth: 0,
					plotLines: [					
					{ color: "#A9A9A9", value: 5, width:  0.7, },
					{ color: "#A9A9A9", value: 10, width: 0.7, },
					{ color: "#A9A9A9", value: 15, width: 0.7, },
					{ color: "#A9A9A9", value: 20, width: 0.7, },	
					{ color: "#A9A9A9", value: 25, width: 0.7, },	
					{ color: "#A9A9A9", value: 30, width: 0.7, },	
					{ color: "#A9A9A9", value: 35, width: 0.7, },	
					{ color: "#A9A9A9", value: 40, width: 0.7, },	
					{ color: "#A9A9A9", value: 45, width: 0.7, },
					{ color: "#A9A9A9", value: 50, width: 0.7, },
					],
			   },		
		
        yAxis: { title: { text: 'segments of text' }, min: 0, max: 13, categories: 
        [
		'AVERAGE SENTENCE LENGTH THROUGHOUT THE TEXT',                     	// 0
        'direct speach',                                                    // 1
        'direct speech as an inner monologue',                              // 2
        'personal narrator',                                               	// 3
        'narrator - character',                                             // 4
        'heterodiegetic narrator',                                          // 5
        'rhetorical narrator',                                              // 6
        'intradiegetic narrator of 1st degree',                             // 7
        'direct speech in intradiegetic narrator of 1st degree',            // 8
        'intradiegetic narrator of 2nd degree',                             // 9
        'direct speech in intradiegetic narrator of 2nd degree',            // 10
        'text-in-text',                                                     // 11
		'direct speech in text-in-text',                                    // 12
		'unrealized direct speech'                                     		// 13
        ], 
					gridLineWidth: 0,
					plotLines: [
						{ color: "#000000", value: 0.5, width: 1 }, 
						{ color: "#000000", value: 1.5, width: 1 }, 
						{ color: "#000000", value: 2.5, width: 1 },
						{ color: "#000000", value: 3.5, width: 1 },
						{ color: "#000000", value: 4.5, width: 1 },
						{ color: "#000000", value: 5.5, width: 1 },
						{ color: "#000000", value: 6.5, width: 1 },
						{ color: "#000000", value: 7.5, width: 1 },
						{ color: "#000000", value: 8.5, width: 1 },
						{ color: "#000000", value: 9.5, width: 1 },
						{ color: "#000000", value: 10.5, width: 1 },
						{ color: "#000000", value: 11.5, width: 1 },
						{ color: "#000000", value: 12.5, width: 1 }, 
						{ color: "#000000", value: 13.5, width: 1 },
						],				
				},
        legend: { enabled: true },
        credits: { enabled: false },
	      series: [

					{
					name: 'Ďábel na skřipci', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 }, 
					data: [[12.44, 0], [10.76, 1], [7.3, 2], [13.61, 4], [10.69, 7], [6.0, 8], [18.24, 11]] //vkládá se podle typu segmentu; číslo za čárkou značí typ segmentu: 0=průměrná délka věty v celém textu...
					},

					{
					name: 'Elegie o černých očích',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[15.18, 0], [9.45, 1], [18.76, 4], [20.14, 11]] 
					},
					{
					name: 'Svatý Xaverius',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[18.68, 0], [14.22, 1], [19.14, 4], [24.28, 7], [7.78, 8], [15.85, 9], [15.85, 10], [15.67, 11]]
					},

					{
					name: 'Sivooký démon',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[15.06, 0], [9.43, 1], [4.2, 2], [23.93, 3], [16.99, 4], [16.89, 7], [9.4, 8], [20.79, 11]] 
					},

					{
					name: 'Zázračná madona',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[16.34, 0], [10.59, 1], [15.82, 3], [17.76, 4], [18.76, 7], [7.88, 8], [15.25, 11]] 
					},
					{
					name: 'Bílé svatební šaty',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[16.30, 0], [12.56, 1], [17.97, 6], [18.50, 11]]
					},
					{
					name: 'Blíženci',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[19.57, 0], [27.5, 1], [19.64, 6], [5.0, 13]]
					},
					{
					name: 'Sběhlé švícko',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[15.2, 0], [8.04, 1], [15.83, 6], [23.27, 11]]
					},{
					name: 'Duhový bod nad hlavou',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[19.11, 0],[19.11, 4]]
					},	{
					name: 'Trilobit',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[26.19, 0],[22.25, 1], [25.8, 6]]
					},	{
					name: 'Jedna z těch, které mě zajímaly',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[23.35, 0], [9.91, 1], [24.5, 4], [8.0, 11]]
					},	{
					name: 'Zpuchřelá nitka',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[ 14.67, 0], [4.44, 1], [17.74, 6], [1.5, 13]]
					},	{
					name: 'Kamarádi',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[13.46, 0], [10.0, 1], [16.88, 6]]
					},	{
					name: 'Lilie v úpalu slunečním',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[16.01, 0], [9.24, 1], [ 6.0, 2], [17.54, 6]], 
					},	{
					name: 'Samovrah',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[19.97, 0], [12.36, 1], [4.0, 2], [22.72, 6]], 
					},	{
					name: 'Zbožný Tomáš',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[14.1, 1], [8.14, 1], [15.52, 6], [8.25, 7], [10.0, 8]], 
					},	{
					name: 'Dobrodružství ve výsadní hospodě',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[16.1, 0], [9.44, 1], [26.0, 2], [19.39, 6]], 
					},	{
					name: 'Nalezenc', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[20.55, 0],[9.6, 1], [5.0, 2], [22.43, 6], [4.5, 7], [7.0, 8]]
					},
					{
					name: 'Odumírající drahokam', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[18.42, 0], [7.21, 1], [21.15, 6], [4.0, 13]]
					},
					{
					name: 'Sladký hřích', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[22.82, 0], [37.0, 1], [ 29.54, 6], [21.88, 11], [14.63, 12]]
					},
					{
					name: 'Il divino Boemo', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[19.72, 0], [17.19, 1], [21.06, 6]]
					},
					{
					name: 'První noc u mrtvoly', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[23.77, 0], [15.78, 1], [25.41, 6], [26.73, 11]]
					},
					{
					name: 'Připij si, bratříčku!', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[15.7, 0], [13.14, 1], [17.71, 6]]
					},
					{
					name: 'Zbožňovatel kněžny Esterházy', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[16.85, 0], [9.77, 1], [19.24, 6]]
					},
					{
					name: 'Před domem smutku', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[16.46, 0], [16.57, 1], [17.06, 6], [17.3, 7], [7.12, 8], [9.0, 13]]
					},
					{
					name: 'Moderní Magdaléna', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[13.17, 0], [13.22, 1], [27.50, 2], [13.61, 6]]
					},
					{
					name: 'Poslední škamna', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[18.9 , 0], [11.64, 1], [21.43, 4], [18.39, 11], [5.50, 13]]
					},
					{
					name: 'Advokát chuďasů', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[18.12, 0], [12.27, 1], [8.80, 2], [20.17, 4], [18.02, 7], [6.0, 8], [44.88, 11], [12.83, 12], [5.33, 13]]
					},
					{
					name: 'Noc na hřbitově', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[20.46, 0], [11.10, 1], [24.89, 4], [12.61, 11], [5.0, 13]]
					},
					{
					name: 'Svatý Václav', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[18.24, 0], [16.27, 1], [4.0, 2], [20.26, 4], [6.5, 13]]
					},
					{
					name: 'Vymírající hřbitov', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[22.9, 0], [15.47, 1], [4.25, 2], [24.77, 4]]
					},
					{
					name: 'V staré pražské krčmě', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[18.44, 0], [12.19, 1], [14.67, 2], [21.88, 6], [38.0, 7], [5.0, 8], [18.5, 11], [1.0, 13]]
					},
					{
					name: 'Dva barikádníci', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[19.45, 0], [15.07, 1], [21.62, 6], [21.71, 7], [24.0, 8], [1.0, 13]]
					},
					{
					name: 'Lotr Gólo', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[127750.54, 0], [221.15, 1], [770594.52, 4], [24363.27, 7], [94504.44, 11]]
					},
					{
					name: 'Démantová garnitura', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[17.96, 0], [10.43, 1], [10.44, 2], [21.57, 6], [23.11, 11], [3.67, 12], [1.0, 13]]
					},
					{
					name: "Newtonův mozek", showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  },
					data: [[16.7, 0], [13.55, 1], [18.19, 4], [23.38, 7], [13.23, 11]]
					},
				]			
 		}); 
});	