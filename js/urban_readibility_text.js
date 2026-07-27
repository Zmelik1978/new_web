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
            {x: 41455, y: 47.8492, name: removeTxtExtension ('Miloš Urban - Paměti poslance parlamentu.txt')}, {x: 96067, y: 46.723, name: removeTxtExtension ('Miloš Urban - Továrna na maso.txt')}, {x: 91331, y: 46.5977, name: removeTxtExtension ('Miloš Urban - Santiniho jazyk.txt')}, {x: 75127, y: 46.4175, name: removeTxtExtension ('Miloš Urban - Boletus Arcanus.txt')}, {x: 25970, y: 46.3831, name: removeTxtExtension ('Miloš Urban - Michaela.txt')}, {x: 59748, y: 45.2319, name: removeTxtExtension ('Miloš Urban - Závěrka.txt')}, {x: 63692, y: 44.9763, name: removeTxtExtension ('Miloš Urban - Stín katedrály.txt')}, {x: 22421, y: 44.4124, name: removeTxtExtension ('Miloš Urban - Pole a palisáda.txt')}, {x: 95065, y: 43.5659, name: removeTxtExtension ('Miloš Urban - Lord Mord.txt')}, {x: 53953, y: 40.4373, name: removeTxtExtension ('Miloš Urban - Hastrman2.txt')}, {x: 126251, y: 40.3739, name: removeTxtExtension ('Miloš Urban - Praga Piccola.txt')}, {x: 69877, y: 39.2203, name: removeTxtExtension ('Miloš Urban - Hastrman1.txt')}, {x: 97480, y: 36.9364, name: removeTxtExtension ('Miloš Urban - Sedmikostelí.txt')}, {x: 52639, y: 31.4257, name: removeTxtExtension ('Miloš Urban - Poslední tečka za rukopisy.txt')}, {x: 4019, y: 28.444, name: removeTxtExtension ('Miloš Urban - Běloruska.txt')},
            
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
            {x: 41455, y: 9.5957, name: removeTxtExtension ('Miloš Urban - Paměti poslance parlamentu.txt')}, {x: 96067, y: 11.0026, name: removeTxtExtension ('Miloš Urban - Továrna na maso.txt')}, {x: 91331, y: 10.3942, name: removeTxtExtension ('Miloš Urban - Santiniho jazyk.txt')}, {x: 75127, y: 10.7175, name: removeTxtExtension ('Miloš Urban - Boletus Arcanus.txt')}, {x: 25970, y: 9.8504, name: removeTxtExtension ('Miloš Urban - Michaela.txt')}, {x: 59748, y: 10.8949, name: removeTxtExtension ('Miloš Urban - Závěrka.txt')}, {x: 63692, y: 10.6769, name: removeTxtExtension ('Miloš Urban - Stín katedrály.txt')}, {x: 22421, y: 10.4714, name: removeTxtExtension ('Miloš Urban - Pole a palisáda.txt')}, {x: 95065, y: 11.5313, name: removeTxtExtension ('Miloš Urban - Lord Mord.txt')}, {x: 53953, y: 11.0586, name: removeTxtExtension ('Miloš Urban - Hastrman2.txt')}, {x: 126251, y: 12.4252, name: removeTxtExtension ('Miloš Urban - Praga Piccola.txt')}, {x: 69877, y: 12.3166, name: removeTxtExtension ('Miloš Urban - Hastrman1.txt')}, {x: 97480, y: 12.2613, name: removeTxtExtension ('Miloš Urban - Sedmikostelí.txt')}, {x: 52639, y: 13.6348, name: removeTxtExtension ('Miloš Urban - Poslední tečka za rukopisy.txt')}, {x: 4019, y: 14.8698, name: removeTxtExtension ('Miloš Urban - Běloruska.txt')},
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
            {x: 41455, y: 13.1501, name: removeTxtExtension ('Miloš Urban - Paměti poslance parlamentu.txt')}, {x: 96067, y: 14.2943, name: removeTxtExtension ('Miloš Urban - Továrna na maso.txt')}, {x: 91331, y: 13.7413, name: removeTxtExtension ('Miloš Urban - Santiniho jazyk.txt')}, {x: 75127, y: 13.9754, name: removeTxtExtension ('Miloš Urban - Boletus Arcanus.txt')}, {x: 25970, y: 13.1743, name: removeTxtExtension ('Miloš Urban - Michaela.txt')}, {x: 59748, y: 14.0963, name: removeTxtExtension ('Miloš Urban - Závěrka.txt')}, {x: 63692, y: 14.092, name: removeTxtExtension ('Miloš Urban - Stín katedrály.txt')}, {x: 22421, y: 13.8471, name: removeTxtExtension ('Miloš Urban - Pole a palisáda.txt')}, {x: 95065, y: 14.8813, name: removeTxtExtension ('Miloš Urban - Lord Mord.txt')}, {x: 53953, y: 14.4946, name: removeTxtExtension ('Miloš Urban - Hastrman2.txt')}, {x: 126251, y: 15.803, name: removeTxtExtension ('Miloš Urban - Praga Piccola.txt')}, {x: 69877, y: 15.6678, name: removeTxtExtension ('Miloš Urban - Hastrman1.txt')}, {x: 97480, y: 15.8884, name: removeTxtExtension ('Miloš Urban - Sedmikostelí.txt')}, {x: 52639, y: 17.3569, name: removeTxtExtension ('Miloš Urban - Poslední tečka za rukopisy.txt')}, {x: 4019, y: 18.665, name: removeTxtExtension ('Miloš Urban - Běloruska.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});