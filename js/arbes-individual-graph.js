function renderchart2(chartTitle, vals){
    /*
    Funkce, která vykreslí graf
    */
    chart2 = Highcharts.chart('container-individual-graph', {
        chart: { type: 'column' },
        title: { align: 'center', text: chartTitle},
        accessibility: { announceNewData: { enabled: true } },
        xAxis: { type: 'category' },
        yAxis: { title: { text: 'i.p.m.' } },
        legend: { enabled: false },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: { enabled: true, format: '{point.y:.2f}' }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
        },
        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: [
                    {
                        name: 'direct speach',
                        y: vals[0],
                        color: '#808B96'     
                    },
                    {
                        name: 'direct speech as an inner monologue',
                        y: vals[1],
                       
                    },
                    {
                        name: 'personal narrator',
                        y: vals[2],
                        color: "#800000"
                    },
                    {
                        name: 'narrator-character',
                        y: vals[3],
                        color: '#5DADE2'
                    },
                    {
                        name: 'heterodiegetic narrator',
                        y: vals[4],
                        
                    },
                    {
                        name: 'rhetorical narrator',
                        y: vals[5],
                        color: "#A52A2A"
                    },
                    {
                        name: 'intradiegetic narrator of 1st degree',
                        y: vals[6],
                        color: "#FF1493"
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 1st degree',
                        y: vals[7],
                        color: "#FF1493"
                    },
                    {
                        name: 'intradiegetic narrator of 2nd degree',
                        y: vals[8],
                        color: "#FF69B4"
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 2nd degree',
                        y: vals[9],
                        color: "#FF69B4"
                    },
                    {
                        name: 'text-in-text',
                        y: vals[10],
                        color: '#FFFF00'
                    },
                    {
                        name: 'direct speech in text-in-text',
                        y: vals[11],
                        color: '#55ff00'
                    },
                    {
                        name: 'unrealized direct speech',
                        y: vals[12],
                        color: '#ff0088'
                    }
                ]
            }
        ], 
    });
}

/*
Hodnoty pro jednotlivý texty
*/
var values2 = {
    'dabel': [
        291392.65,
        7059.96,
        0,
        618665.38,
        0,
        0,
        43423.60,
        5222.44,
        0,
        0,
        44100.58,
        0,
        0
],
    'elegie': [
        252380.95,
        0,
        0,
        744444.44,
        0,
        0,
        0,
        0,
        0,
        0,
        74603.17,
        0,
        0
    ],
    'xaverius': [
        196315.31,
        0,
        0,
        467359.88,
        0,
        0,
        293351.17,
        3020.24,
        27354.71,
        14583.42,
        6083.62,
        0,
        0
    ],
    'demon': [
        185698.91,
        627.77,
        116584.96,
        532165.49,
        0,
        0,
        151949.06,
        14887.0,
        0,
        0,
        8699.03,
        0
    ],
    'madona': [
        108462.27,
        0,
        199544.74,
        479159.62,
        0,
        0,
        139622.87,
        1937.92,
        0,
        0,
        18764.03,
        0,
        0
    ],
    'bilesvatebnisaty': [
        208777.16,
        0,
        0,  
        0,
        0,
        796335.75,
        0,
        0,
        0,
        0,
        31529.61,
        0
    ],
    'blizenci': [
        70242.66,
        0,
        0,
        0,
        0,
        936568.75,
        0,
        0,
        0,
        0,
        0,
        0,
        4257.13
    ],
    'sbehlesvicko': [
        78880.41,
        0,
        0,
        0,
        0,
        817157.4,
        0,
        0,
        0,
        0,
        112322.79,
        0,
        0
    ],
    'duhovybodnadhlavou': [
        0,
        0,
        0,
        1015205.72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'penezokaz': [
        7993.27,
        0,
        0,
        0,
        0,
        1004627.68,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'trilobit': [
        20847.97,
        0,
        0,
        0,
        0,
        1009369.88,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'jednaztech': [
        20655.68,
        0,
        0,
        1002653.02,
        0,
        0,
        0,
        0,
        0,
        0,
        1516.01,
        0,
        0
    ],
    'zpuchrelanitka': [
        66812.71,
        0,  
        0,
        0,
        0,
        957009.86,
        0,
        0,
        0,
        0,
        0,
        0,
        821.47
    ],
    'kamaradi': [
        331779.54,
        0,  
        0,
        0,
        0,
        703317.8,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'lilievupaluslunecnim': [
        76041.33,
        968.68,
        0,
        0,
        0,
        954310.62,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'dobrodruzstvi': [
        200113.59,
        14767.13,
        0,
        0,
        0,
        789284.36,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'zboznytomas': [
        83120.57,
        0,
        0,
        0,
        0,
        924822.7,
        9361.7,
        2836.88,
        0,
        0,
        0,
        0,
        0
    ],
    'samovrah': [
        149492.02,
        4837.93,
        0,
        0,
        0,
        851717.46,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'nalezenec': [
        61185.47,
        61185.47,
        0,
        0,
        0,
        955491.82,
        956.02,
        743.57,
        0,
        0,
        0,
        0,
        0
    ],
    'odumirajicidrahokam': [
        61876.25,
        0,
        0,
        0,
        0,
        962674.65,
        0,
        0,
        0,
        0,
        0,
        0,
        1596.81       
    ],
    'sladkyhrich': [
        6332.36,
        0,
        0,
        0,
        0,
        262878.66,
        0,
        0,
        0,
        0,
        763991.1,
        95156.6,
        0
    ],
    'ildivinoboemo': [
        337072.88,
        0,
        0,
        0,
        0,
        669264.37,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'prvninocumrtvoly': [
        96981.03, 
        0, 
        0, 
        0, 
        0, 
        896072.67, 
        0, 
        0, 
        0, 
        0,
        39273.31, 
        0, 
        0
    ],
    'pripijsibratricku': [
        352628.18,
        0,
        0,
        0,
        0,
        665188.65,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'zboznovatelkneznyesterhazy': [
        135678.39,
        0,
        0,
        0,
        0,
        881781.79,
        0,
        0,
        0,
        0,
        0,
        0,
        0   
    ],
    'preddomemsmutku': [
        435451.07,
        0,
        0,
        0,
        0,
        528593.51,
        60522.25,
        9843.0,
        0,
        0,
        0,
        0,
        732.12   
    ],
    'modernimagdalena': [
        604843.04,
        14757.18,
        0,
        0,
        0,
        416152.4,
        0,
        0,
        0,
        0,
        0,
        0,
        0   
    ],
    'posledniskamna': [
        143073.08,
        0,
        0, 
        826629.86,
        0,
        0,
        0,
        0,
        0,
        0,
        43506.83,
        0,
        722.92
    ],
    'advokatchudasu': [
        221408.15,
        1965.69,
        0,
        582022.87,
        0,
        0,
        110302.0,
        2412.44,
        0,
        0,
        114278.06,
        3439.96,
        2144.39
    ],
    'nocnahrbitove':[
        99349.69,
        0,
        0,
        841413.95,
        0,
        0,
        0,
        0,
        0,
        0,
        77136.05,
        0,
        1287.75
    ],
    'svatyvaclav': [
        403807.81,
        1594.90,
        0,
        610047.85,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1295.85
    ],
    'vymirajicihrbitov': [
        129107.20,
        806.03,
        0,
        885638.42,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    'vstareprazskekrcme': [
        216271.35,
        2087.29,  
        0,
        0,
        0,
        799335.86,
        1802.66,
        237.19,
        0,
        0,
        3510.44,
        0,
        47.44
    ],
    'lotrgolo': [
        127750.54,
        221.15,
        0,
        770594.52,
        0,
        0,
        24363.27,
        0,
        0,
        0,
        90855.48,
        0,
        0
    ],
    'demantovagarnitura': [
        192718.93,
        7229.12,
        0,
        0,
        0,
        811306.87,
        0,
        0,
        0,
        0,
        9003.94,
        476.17,
        43.29
    ],
    'dvabarikadnici': [
        235568.30,
        0,
        0,
        0,
        0,
        723987.09,
        60702.76,
        860.52,
        0,
        0,
        0,
        0,
        35.86
    ],
    'mozek': [
        301555.04,
        0,
        0,
        668903.91,
        0,
        0,
        8838.68,
        0,
        0,
        0,
        19378.93,
        0,
        0
    ]
}

$('#select2').on('change', function() {
    const selectedVal = $(this).val();
    const selectedText = $("#select2 option:selected").text();

    if (selectedVal === 'default') {
        chart2.destroy();
        $('#notice').html('');
        return;
    }

    renderchart2(selectedText, values2[selectedVal]);

    const notes = {
        blizenci: `In this case, the narrator can also be identified as a heterodiegetic narrator with rhetorical elements. Where the narrator displays certain features of a commenting narrator, we classify them as a rhetorical narrator according to Doležel’s taxonomy (see Doležel, L. <em>Narrative Modes in Czech Literature</em>. Prague, 2014).`,
        sbehlesvicko: `Rhetorically, the narrator explicitly expresses himself minimally. His rhetoric is typical of a narrator-witness.`,
        penezokaz: `Rhetorically, the narrator explicitly expresses himself minimally. His rhetoric is typical of a narrator-observer.`,
        jednaztech: `More precisely, it is a rhetorical homodiegetic narrator.`,
        zpuchrelanitka: `More precisely, it is a rhetorical heterodiegetical narrator in ich-form.`,
        zboznovatelkneznyesterhazy: 'Rhetorical narrator in the first grammatical person.'
    };

    if (notes[selectedVal]) {
        $('#notice').html(
            `<p style="text-align: justify; width: 100%; color: blue; border: 0px; padding: 10px; border-radius: 5px; background-color: #f7f9f9;">
                <span style="color: red;">Note:</span><br>${notes[selectedVal]}
            </p>`
        );
    } else {
        $('#notice').html('');
    }
});