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
            {x: 115736, y: 40.9431, name: removeTxtExtension ('Julius Zeyer - Jan Maria Plojhar.txt')}, {x: 7429, y: 40.2844, name: removeTxtExtension ('Julius Zeyer - Legenda pražská.txt')}, {x: 7973, y: 36.4876, name: removeTxtExtension ('Julius Zeyer - Legenda slovenská.txt')}, {x: 9172, y: 35.9553, name: removeTxtExtension ('Julius Zeyer - Legenda toledská.txt')},
            
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
            {x: 115736, y: 12.1511, name: removeTxtExtension ('Julius Zeyer - Jan Maria Plojhar.txt')}, {x: 7429, y: 12.4466, name: removeTxtExtension ('Julius Zeyer - Legenda pražská.txt')}, {x: 7973, y: 13.5671, name: removeTxtExtension ('Julius Zeyer - Legenda slovenská.txt')}, {x: 9172, y: 13.3647, name: removeTxtExtension ('Julius Zeyer - Legenda toledská.txt')},
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
            {x: 115736, y: 15.2077, name: removeTxtExtension ('Julius Zeyer - Jan Maria Plojhar.txt')}, {x: 7429, y: 15.2712, name: removeTxtExtension ('Julius Zeyer - Legenda pražská.txt')}, {x: 7973, y: 16.0598, name: removeTxtExtension ('Julius Zeyer - Legenda slovenská.txt')}, {x: 9172, y: 16.3867, name: removeTxtExtension ('Julius Zeyer - Legenda toledská.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});