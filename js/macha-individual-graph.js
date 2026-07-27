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
    'sen': [191947.57, 0, 0, 808052.43, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'navrat': [311195.45, 0, 0, 688804.55, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'poutnik': [31746.03, 0, 968253.97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'prisaha': [208897.49, 0, 0, 0, 0, 791102.51, 0, 0, 0, 0, 0, 0, 0],
    'svetsmyslny': [320185.61, 4640.37, 675174.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'svetzasly': [702102.8, 0, 0, 0, 0, 297897.2, 0, 0, 0, 0, 0, 0, 0],
    'poutkrkonosska': [180370.37, 0, 809629.63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000],
    'klastersazavsky': [3270.65, 0, 0, 0, 0, 994276.37, 0, 0, 0, 0, 0, 0, 0],
    'viasilviasilovic': [450975.36, 0, 0, 0, 0, 546457.91, 0, 0, 0, 0, 0, 0, 0],
    'krivoklad': [305457.75, 0, 0, 35451.34, 0, 641005.12, 0, 0, 0, 0, 0, 0, 240.08],
    'valdice': [55652.17, 0, 0, 0, 0, 944347.83, 0, 0, 0, 0, 0, 0, 0],
    'karluvtejn': [291095.89, 0, 0, 0, 0, 708904.11, 0, 0, 0, 0, 0, 0, 0],
    'marinka': [101472.13, 5520.5, 0, 891692.95, 0, 0, 0, 0, 0, 0, 0, 0, 1314.41],
    'vecernabezdezu': [10849.91, 9945.75, 0, 979204.34, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    'cikani': [147377.42, 0, 578107.18, 4917.33, 0, 0, 135119.73, 7518.53, 0, 0, 97883.41, 5095.5, 0]
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
          <option value="sen">Sen</option>
          <option value="navrat">Návrat</option>
          <option value="poutnik">Poutník</option>
          <option value="prisaha">Přísaha</option>
          <option value="svetsmyslny">Svět smyslný</option>
          <option value="svetzasly">Svět zašlý</option>
          <option value="poutkrkonosska">Pouť krkonošská</option>
          <option value="klastersazavsky">Klášter sázavský</option>
          <option value="viasilviasilovic">Viasil Viasilovič</option>
          <option value="krivoklad">Křivoklad</option>
          <option value="valdice">Valdice</option>
          <option value="karluvtejn">Karlův Tejn</option>
          <option value="marinka">Marinka</option>
          <option value="vecernabezdezu">Večer na Bezdězu</option>
          <option value="cikani">Cikáni</option>
</select>
--- */

