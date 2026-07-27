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
            {x: 1076, y: 43.5553, name: removeTxtExtension('Karel Hynek Mácha - Svět zašlý.txt')}, 
            {x: 35399, y: 38.6653, name: removeTxtExtension('Karel Hynek Mácha - Cikáni.txt')}, 
            {x: 1312, y: 28.791, name: removeTxtExtension('Karel Hynek Mácha - Večer na Bezdězu.txt')}, 
            {x: 15780, y: 28.6993, name: removeTxtExtension('Karel Hynek Mácha - Křivoklad.txt')}, 
            {x: 1255, y: 27.9, name: removeTxtExtension('Karel Hynek Mácha - Návrat.txt')}, 
            {x: 4687, y: 27.0142, name: removeTxtExtension('Karel Hynek Mácha - Marinka.txt')}, 
            {x: 4725, y: 22.5556, name: removeTxtExtension('Karel Hynek Mácha - Viasil Viasilovič.txt')}, 
            {x: 1249, y: 20.5764, name: removeTxtExtension('Karel Hynek Mácha - Sen.txt')}, 
            {x: 1400, y: 17.4925, name: removeTxtExtension('Karel Hynek Mácha - Klášter Sázavský.txt')}, 
            {x: 3162, y: 16.4383, name: removeTxtExtension('Karel Hynek Mácha - Krkonošská pouť.txt')}, 
            {x: 3162, y: 16.4383, name: removeTxtExtension('Karel Hynek Mácha - Pouť krkonošská.txt')}, 
            {x: 150, y: 15.9285, name: removeTxtExtension('Karel Hynek Mácha - Poutník.txt')}, 
            {x: 1977, y: 15.4681, name: removeTxtExtension('Karel Hynek Mácha - Valdice.txt')}, 
            {x: 1455, y: 8.4624, name: removeTxtExtension('Karel Hynek Mácha - Karlův Tejn.txt')}, 
            {x: 607, y: 1.1537, name: removeTxtExtension('Karel Hynek Mácha - Přísaha.txt')}, 
            {x: 529, y: -40.6595, name: removeTxtExtension('Karel Hynek Mácha - Svět smyslný.txt')},
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
            // x, y, name values
            {x: 1076, y: 11.2967, name: removeTxtExtension('Karel Hynek Mácha - Svět zašlý.txt')}, 
            {x: 35399, y: 12.8096, name: removeTxtExtension('Karel Hynek Mácha - Cikáni.txt')}, 
            {x: 1312, y: 15.5116, name: removeTxtExtension('Karel Hynek Mácha - Večer na Bezdězu.txt')}, 
            {x: 15780, y: 16.086, name: removeTxtExtension('Karel Hynek Mácha - Křivoklad.txt')}, 
            {x: 1255, y: 17.1623, name: removeTxtExtension('Karel Hynek Mácha - Návrat.txt')}, 
            {x: 4687, y: 15.8195, name: removeTxtExtension('Karel Hynek Mácha - Marinka.txt')}, 
            {x: 4725, y: 19.0059, name: removeTxtExtension('Karel Hynek Mácha - Viasil Viasilovič.txt')}, 
            {x: 1249, y: 18.7755, name: removeTxtExtension('Karel Hynek Mácha - Sen.txt')}, 
            {x: 1400, y: 18.2194, name: removeTxtExtension('Karel Hynek Mácha - Klášter Sázavský.txt')}, 
            {x: 3162, y: 20.4307, name: removeTxtExtension('Karel Hynek Mácha - Krkonošská pouť.txt')}, 
            {x: 3162, y: 20.4307, name: removeTxtExtension('Karel Hynek Mácha - Pouť krkonošská.txt')}, 
            {x: 150, y: 20.3537, name: removeTxtExtension('Karel Hynek Mácha - Poutník.txt')}, 
            {x: 1977, y: 17.5642, name: removeTxtExtension('Karel Hynek Mácha - Valdice.txt')}, 
            {x: 1455, y: 23.3747, name: removeTxtExtension('Karel Hynek Mácha - Karlův Tejn.txt')}, 
            {x: 607, y: 23.8695, name: removeTxtExtension('Karel Hynek Mácha - Přísaha.txt')}, 
            {x: 529, y: 40.8336, name: removeTxtExtension('Karel Hynek Mácha - Svět smyslný.txt')},
            
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
            // x, y, name values
            {x: 1076, y: 13.7219, name: removeTxtExtension('Karel Hynek Mácha - Svět zašlý.txt')}, 
            {x: 35399, y: 15.8273, name: removeTxtExtension('Karel Hynek Mácha - Cikáni.txt')}, 
            {x: 1312, y: 18.7813, name: removeTxtExtension('Karel Hynek Mácha - Večer na Bezdězu.txt')}, 
            {x: 15780, y: 19.217, name: removeTxtExtension('Karel Hynek Mácha - Křivoklad.txt')}, 
            {x: 1255, y: 19.6257, name: removeTxtExtension('Karel Hynek Mácha - Návrat.txt')}, 
            {x: 4687, y: 18.9367, name: removeTxtExtension('Karel Hynek Mácha - Marinka.txt')}, 
            {x: 4725, y: 22.5468, name: removeTxtExtension('Karel Hynek Mácha - Viasil Viasilovič.txt')}, 
            {x: 1249, y: 21.8614, name: removeTxtExtension('Karel Hynek Mácha - Sen.txt')}, 
            {x: 1400, y: 21.372, name: removeTxtExtension('Karel Hynek Mácha - Klášter Sázavský.txt')}, 
            {x: 3162, y: 22.9046, name: removeTxtExtension('Karel Hynek Mácha - Krkonošská pouť.txt')}, 
            {x: 3162, y: 22.9046, name: removeTxtExtension('Karel Hynek Mácha - Pouť krkonošská.txt')}, 
            {x: 150, y: 23.0, name: removeTxtExtension('Karel Hynek Mácha - Poutník.txt')}, 
            {x: 1977, y: 21.3107, name: removeTxtExtension('Karel Hynek Mácha - Valdice.txt')}, 
            {x: 1455, y: 26.2425, name: removeTxtExtension('Karel Hynek Mácha - Karlův Tejn.txt')}, 
            {x: 607, y: 27.4911, name: removeTxtExtension('Karel Hynek Mácha - Přísaha.txt')}, 
            {x: 529, y: 44.1892, name: removeTxtExtension('Karel Hynek Mácha - Svět smyslný.txt')},
            
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});