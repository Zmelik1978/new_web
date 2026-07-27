// Funkce pro odstranění přípony .txt z názvu
function removeTxtExtension(name) {
    return name.replace('.txt', '');
}

// Flesh Reading Easy
Highcharts.chart('flesh_reding_easy', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Flesh Reading Easy vs Text Size'
    },
    xAxis: {
        title: {
            text: 'Text Size'
        },
        gridLineWidth: 1 // Width of the vertical grid lines
    },
    yAxis: {
        title: {
            text: 'Flesh Reading Easy'
        },
        gridLineWidth: 1 // Width of the horizontal grid lines
    },
    series: [{
        name: 'Sample Data',
        color: 'rgb(0,191,255)',
        data: [
            // x, y, name values
            {x: 26013, y: 53.1962, name: removeTxtExtension ('Jan Neruda - Figurky.txt')}, {x: 4139, y: 48.5472, name: removeTxtExtension ('Jan Neruda - Večerní šplechty.txt')}, {x: 778, y: 46.0742, name: removeTxtExtension ('Jan Neruda - U tří lilií.txt')}, {x: 2732, y: 45.5105, name: removeTxtExtension ('Jan Neruda - Přivedla žebráka na mizinu.txt')}, {x: 6035, y: 43.0576, name: removeTxtExtension ('Jan Neruda - Jak to přišlo....txt')}, {x: 2004, y: 42.2658, name: removeTxtExtension ('Jan Neruda - O měkkém srdci paní Rusky.txt')}, {x: 3929, y: 41.8486, name: removeTxtExtension ('Jan Neruda - Psáno o letošních dušičkách.txt')}, {x: 3686, y: 41.1398, name: removeTxtExtension ('Jan Neruda - Pan Ryšánek a pan Schlegl.txt')}, {x: 26918, y: 40.7796, name: removeTxtExtension ('Jan Neruda - Týden v tichém domě.txt')}, {x: 1792, y: 39.5445, name: removeTxtExtension ('Jan Neruda - Jak si nakouřil pan Vorel pěnovku.txt')}, {x: 1370, y: 39.0277, name: removeTxtExtension ('Jan Neruda - Blbý Jóna.txt')}, {x: 4364, y: 37.9618, name: removeTxtExtension ('Jan Neruda - Svatováclavská mše.txt')}, {x: 2386, y: 36.9417, name: removeTxtExtension ('Jan Neruda - Doktor Kazisvět.txt')}, {x: 1761, y: 35.9233, name: removeTxtExtension ('Jan Neruda - Josef harfenista.txt')}, {x: 2301, y: 33.7817, name: removeTxtExtension ('Jan Neruda - Erotománie.txt')}, {x: 2166, y: 33.3555, name: removeTxtExtension ('Jan Neruda - Byl darebákem.txt')},
            
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

// Flesch-Kincaid Grade Level
Highcharts.chart('flesh_kincaid_grade_level', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Flesch-Kincaid Grade Level vs Text Size'
    },
    xAxis: {
        title: {
            text: 'Text Size'
        },
        gridLineWidth: 1 // Width of the vertical grid lines
    },
    yAxis: {
        title: {
            text: 'Flesch-Kincaid Grade Level'
        },
        gridLineWidth: 1 // Width of the horizontal grid lines
    },
    series: [{
        name: 'Sample Data',
        color: 'rgb(250,128,114)',
        data: [
            {x: 26013, y: 9.1949, name: removeTxtExtension ('Jan Neruda - Figurky.txt')}, {x: 4139, y: 10.6509, name: removeTxtExtension ('Jan Neruda - Večerní šplechty.txt')}, {x: 778, y: 10.6227, name: removeTxtExtension ('Jan Neruda - U tří lilií.txt')}, {x: 2732, y: 11.1534, name: removeTxtExtension ('Jan Neruda - Přivedla žebráka na mizinu.txt')}, {x: 6035, y: 11.3612, name: removeTxtExtension ('Jan Neruda - Jak to přišlo....txt')}, {x: 2004, y: 12.0169, name: removeTxtExtension ('Jan Neruda - O měkkém srdci paní Rusky.txt')}, {x: 3929, y: 11.6295, name: removeTxtExtension ('Jan Neruda - Psáno o letošních dušičkách.txt')}, {x: 3686, y: 11.9663, name: removeTxtExtension ('Jan Neruda - Pan Ryšánek a pan Schlegl.txt')}, {x: 26918, y: 12.5918, name: removeTxtExtension ('Jan Neruda - Týden v tichém domě.txt')}, {x: 1792, y: 12.4298, name: removeTxtExtension ('Jan Neruda - Jak si nakouřil pan Vorel pěnovku.txt')}, {x: 1370, y: 12.2358, name: removeTxtExtension ('Jan Neruda - Blbý Jóna.txt')}, {x: 4364, y: 12.7194, name: removeTxtExtension ('Jan Neruda - Svatováclavská mše.txt')}, {x: 2386, y: 12.5635, name: removeTxtExtension ('Jan Neruda - Doktor Kazisvět.txt')}, {x: 1761, y: 13.3357, name: removeTxtExtension ('Jan Neruda - Josef harfenista.txt')}, {x: 2301, y: 13.3511, name: removeTxtExtension ('Jan Neruda - Erotománie.txt')}, {x: 2166, y: 13.4113, name: removeTxtExtension ('Jan Neruda - Byl darebákem.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

// Gunning Fog Index
Highcharts.chart('gunning_fox_index', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Gunning Fog Index'
    },
    xAxis: {
        title: {
            text: 'Text Size'
        },
        gridLineWidth: 1 // Width of the vertical grid lines
    },
    yAxis: {
        title: {
            text: 'Gunning Fog Index'
        },
        gridLineWidth: 1 // Width of the horizontal grid lines
    },
    series: [{
        name: 'Sample Data',
        color: 'rgb(124,252,0)',
        data: [
            {x: 26013, y: 11.9023, name: removeTxtExtension ('Jan Neruda - Figurky.txt')}, {x: 4139, y: 13.3325, name: removeTxtExtension ('Jan Neruda - Večerní šplechty.txt')}, {x: 778, y: 13.4541, name: removeTxtExtension ('Jan Neruda - U tří lilií.txt')}, {x: 2732, y: 14.2678, name: removeTxtExtension ('Jan Neruda - Přivedla žebráka na mizinu.txt')}, {x: 6035, y: 14.5408, name: removeTxtExtension ('Jan Neruda - Jak to přišlo....txt')}, {x: 2004, y: 14.8169, name: removeTxtExtension ('Jan Neruda - O měkkém srdci paní Rusky.txt')}, {x: 3929, y: 14.5013, name: removeTxtExtension ('Jan Neruda - Psáno o letošních dušičkách.txt')}, {x: 3686, y: 14.5691, name: removeTxtExtension ('Jan Neruda - Pan Ryšánek a pan Schlegl.txt')}, {x: 26918, y: 15.7066, name: removeTxtExtension ('Jan Neruda - Týden v tichém domě.txt')}, {x: 1792, y: 15.2908, name: removeTxtExtension ('Jan Neruda - Jak si nakouřil pan Vorel pěnovku.txt')}, {x: 1370, y: 14.7373, name: removeTxtExtension ('Jan Neruda - Blbý Jóna.txt')}, {x: 4364, y: 15.878, name: removeTxtExtension ('Jan Neruda - Svatováclavská mše.txt')}, {x: 2386, y: 15.7426, name: removeTxtExtension ('Jan Neruda - Doktor Kazisvět.txt')}, {x: 1761, y: 16.5723, name: removeTxtExtension ('Jan Neruda - Josef harfenista.txt')}, {x: 2301, y: 16.6002, name: removeTxtExtension ('Jan Neruda - Erotománie.txt')}, {x: 2166, y: 16.563, name: removeTxtExtension ('Jan Neruda - Byl darebákem.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});