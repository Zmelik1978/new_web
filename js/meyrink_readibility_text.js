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
            {x: 72957, y: 40.5523, name: removeTxtExtension ('Gustav Meyrink - Golem.txt')}, {x: 50602, y: 37.8125, name: removeTxtExtension ('Gustav Meyrink - Bílý Dominikán.txt')}, {x: 130600, y: 34.8874, name: removeTxtExtension ('Gustav Meyrink - Anděl západního okna.txt')}, {x: 54937, y: 30.3778, name: removeTxtExtension ('Gustav Meyrink - Valpuržina noc.txt')}, {x: 77790, y: 26.8016, name: removeTxtExtension ('Gustav Meyrink - Zelená tvář.txt')}, {x: 1443, y: 26.5294, name: removeTxtExtension ('Gustav Meyrink - Neviditelná Praha.txt')},
            
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
            {x: 72957, y: 11.5752, name: removeTxtExtension ('Gustav Meyrink - Golem.txt')}, {x: 50602, y: 13.3875, name: removeTxtExtension ('Gustav Meyrink - Bílý Dominikán.txt')}, {x: 130600, y: 13.4336, name: removeTxtExtension ('Gustav Meyrink - Anděl západního okna.txt')}, {x: 54937, y: 14.2815, name: removeTxtExtension ('Gustav Meyrink - Valpuržina noc.txt')}, {x: 77790, y: 16.1393, name: removeTxtExtension ('Gustav Meyrink - Zelená tvář.txt')}, {x: 1443, y: 15.635, name: removeTxtExtension ('Gustav Meyrink - Neviditelná Praha.txt')},
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
            {x: 72957, y: 14.8054, name: removeTxtExtension ('Gustav Meyrink - Golem.txt')}, {x: 50602, y: 16.4165, name: removeTxtExtension ('Gustav Meyrink - Bílý Dominikán.txt')}, {x: 130600, y: 16.8791, name: removeTxtExtension ('Gustav Meyrink - Anděl západního okna.txt')}, {x: 54937, y: 17.1748, name: removeTxtExtension ('Gustav Meyrink - Valpuržina noc.txt')}, {x: 77790, y: 19.6871, name: removeTxtExtension ('Gustav Meyrink - Zelená tvář.txt')}, {x: 1443, y: 19.1247, name: removeTxtExtension ('Gustav Meyrink - Neviditelná Praha.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});