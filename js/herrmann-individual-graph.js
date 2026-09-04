/* Model: individualni graf segmentu (i.p.m.) -- container 'container-individual-graph'. */
function renderchart2(chartTitle, vals){
    /*
    Funkce, ktera vykresli graf
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
                        y: vals[1]
                    },
                    {
                        name: 'personal narrator',
                        y: vals[2],
                        color: '#800000'
                    },
                    {
                        name: 'narrator-character',
                        y: vals[3],
                        color: '#5DADE2'
                    },
                    {
                        name: 'heterodiegetic narrator',
                        y: vals[4]
                    },
                    {
                        name: 'rhetorical narrator',
                        y: vals[5],
                        color: '#A52A2A'
                    },
                    {
                        name: 'intradiegetic narrator of 1st degree',
                        y: vals[6],
                        color: '#FF1493'
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 1st degree',
                        y: vals[7],
                        color: '#FF1493'
                    },
                    {
                        name: 'intradiegetic narrator of 2nd degree',
                        y: vals[8],
                        color: '#FF69B4'
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 2nd degree',
                        y: vals[9],
                        color: '#FF69B4'
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
Hodnoty pro jednotlive texty
*/
var values2 = {
    'historieodoktorufaustovi': [244466.93, 5691.16, 0, 0, 0, 749841.91, 0, 0, 0, 0, 0, 0, 0],
    'zamrza': [118145.85, 2261.16, 0, 0, 0, 879592.99, 0, 0, 0, 0, 0, 0, 0],
    'spiritista': [182819.38, 0, 0, 0, 0, 817180.62, 0, 0, 0, 0, 0, 0, 0],
    'dvetezkechvilezezivotapaneklokocova': [207830.34, 2936.38, 0, 0, 0, 789233.28, 0, 0, 0, 0, 0, 0, 0],
    'panalojs': [205317.58, 0, 0, 0, 0, 794682.42, 0, 0, 0, 0, 0, 0, 0],
    'tosetaknebere': [112136.27, 3193.75, 0, 0, 0, 884669.98, 0, 0, 0, 0, 0, 0, 0],
    'ztracenyrajpanetetrevuv': [247568.09, 7782.1, 0, 0, 0, 744649.81, 0, 0, 0, 0, 0, 0, 0],
    'procpantadeasbezinkachodioholenaostrihan': [120867.5, 24067.71, 0, 0, 0, 855064.8, 0, 0, 0, 0, 0, 0, 0],
    'prvnivydelek': [99638.41, 0, 0, 0, 0, 900361.59, 0, 0, 0, 0, 0, 0, 0],
    'kterakpanvilibaldvonasekdobylsvobody': [284115.37, 0, 0, 0, 0, 765389.58, 0, 0, 0, 0, 0, 0, 0],
    'poslednisazka': [136826.23, 0, 0, 0, 0, 861666.04, 0, 0, 0, 0, 0, 0, 1507.73],
    'smlouvapanuskabroutaarysaajejizanik': [88585.28, 0, 0, 0, 0, 909651.83, 0, 0, 0, 0, 1762.89, 0, 0],
    'hvezdari': [5356.19, 0, 0, 0, 0, 994643.81, 0, 0, 0, 0, 0, 0, 0],
    'maliramalir': [253682.49, 0, 0, 0, 0, 710720.13, 0, 0, 0, 0, 31914.89, 0, 3682.49],
    'dobrymuzkonura': [200000, 0, 0, 800000, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'nasmikolas': [326814.06, 0, 0, 673752.83, 0, 0, 0, 0, 0, 0, 0, 0, 2834.47],
    'tajnyspolecnikpanekobrcuv': [212951.43, 3320.88, 0, 0, 0, 779576.59, 0, 0, 0, 0, 4151.1, 0, 0],
    'usnedenehokramui': [183458.22, 1164.91, 0, 0, 0, 814180.47, 0, 0, 0, 0, 440.78, 0, 566.71],
    'usnedenehokramuii': [202840.35, 4603.33, 0, 0, 0, 788312.11, 0, 0, 0, 0, 0, 0, 4244.21],
    'usnedenehokramuiii': [178863.81, 2115.11, 0, 0, 0, 816408.29, 0, 0, 0, 0, 1692.09, 0, 920.7],
    'usnedenehokramuiv': [175896.57, 5712.88, 0, 0, 0, 818062.54, 0, 0, 0, 0, 300.68, 0, 0],
    'oteckondelikazenichvejvara': [360391.05, 158.19, 0, 0, 0, 632121.24, 2583.79, 126.55, 0, 0, 4387.17, 0, 305.84],
    'tchankondelikazetvejvara': [358453.48, 1739.88, 0, 0, 0, 612043.75, 20427.16, 1871.55, 0, 0, 4843.46, 0, 771.19],
    'pribehdusickovy': [339477.36, 10415.84, 0, 0, 0, 630567.2, 0, 0, 0, 0, 19539.59, 0, 0]
};

$('#select2').on('change', function() {
    const selectedVal = $(this).val();
    const selectedText = $("#select2 option:selected").text();

    if (selectedVal === 'default') {
        chart2.destroy();
        $('#notice').html('');
        return;
    }

    renderchart2(selectedText, values2[selectedVal]);

    const notes = {};

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

/* --- Odpovidajici <select> pro HTML stranku: ---
<select id="select2">
          <option value="default">— vyber dílo —</option>
          <option value="historieodoktorufaustovi">Historie o doktoru Faustovi (1884)</option>
          <option value="zamrza">Zamrzá! (1885)</option>
          <option value="spiritista">Spiritista (1885)</option>
          <option value="dvetezkechvilezezivotapaneklokocova">Dvě těžké chvíle ze života páně Klokočova (1885)</option>
          <option value="panalojs">Pan Alojs (1885)</option>
          <option value="tosetaknebere">To se tak nebere! (1886)</option>
          <option value="ztracenyrajpanetetrevuv">Ztracený ráj páně Tetřevův (1886)</option>
          <option value="procpantadeasbezinkachodioholenaostrihan">Proč pan Tadeáš Bezinka chodí oholen a ostříhán (1886)</option>
          <option value="prvnivydelek">První výdělek (1886)</option>
          <option value="kterakpanvilibaldvonasekdobylsvobody">Kterak pan Vilibald Vonásek dobyl svobody (1887)</option>
          <option value="poslednisazka">Poslední sázka (1887)</option>
          <option value="smlouvapanuskabroutaarysaajejizanik">Smlouva pánů Škabrouta a Rysa – a její zánik (1887)</option>
          <option value="hvezdari">Hvězdáři (1887)</option>
          <option value="maliramalir">Malíř a malíř! (1888)</option>
          <option value="dobrymuzkonura">Dobrý muž Koňura (1888)</option>
          <option value="nasmikolas">Náš Mikoláš (1888)</option>
          <option value="tajnyspolecnikpanekobrcuv">Tajný společník páně Kobrčův (1889)</option>
          <option value="usnedenehokramui">U snědeného krámu I (1890)</option>
          <option value="usnedenehokramuii">U snědeného krámu II (1890)</option>
          <option value="usnedenehokramuiii">U snědeného krámu III (1890)</option>
          <option value="usnedenehokramuiv">U snědeného krámu IV (1890)</option>
          <option value="oteckondelikazenichvejvara">Otec Kondelík a ženich Vejvara (1898)</option>
          <option value="tchankondelikazetvejvara">Tchán Kondelík a zeť Vejvara (1906)</option>
          <option value="pribehdusickovy">Příběh dušičkový (1916)</option>
</select>
--- */

