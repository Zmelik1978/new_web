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
            {x: 161463, y: 46.3921, name: removeTxtExtension ('Alois Jirásek - F. L. Věk III.txt')}, {x: 129752, y: 44.4339, name: removeTxtExtension ('Alois Jirásek - F. L. Věk II.txt')}, {x: 81918, y: 43.2919, name: removeTxtExtension ('Alois Jirásek - F. L. Věk I.txt')}, {x: 145390, y: 42.1073, name: removeTxtExtension ('Alois Jirásek - F. L. Věk IV.txt')}, {x: 176779, y: 39.7834, name: removeTxtExtension ('Alois Jirásek - F. L. Věk V.txt')}, {x: 211979, y: 38.248, name: removeTxtExtension ('Alois Jirásek - Temno.txt')}, {x: 35400, y: 37.7228, name: removeTxtExtension ('Alois Jirásek - Filozofská historie.txt')},
            
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
            {x: 161463, y: 11.0314, name: removeTxtExtension ('Alois Jirásek - F. L. Věk III.txt')}, {x: 129752, y: 11.2952, name: removeTxtExtension ('Alois Jirásek - F. L. Věk II.txt')}, {x: 81918, y: 11.1918, name: removeTxtExtension ('Alois Jirásek - F. L. Věk I.txt')}, {x: 145390, y: 12.107, name: removeTxtExtension ('Alois Jirásek - F. L. Věk IV.txt')}, {x: 176779, y: 13.1699, name: removeTxtExtension ('Alois Jirásek - F. L. Věk V.txt')}, {x: 211979, y: 13.5435, name: removeTxtExtension ('Alois Jirásek - Temno.txt')}, {x: 35400, y: 12.234, name: removeTxtExtension ('Alois Jirásek - Filozofská historie.txt')},
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
            {x: 161463, y: 14.3582, name: removeTxtExtension ('Alois Jirásek - F. L. Věk III.txt')}, {x: 129752, y: 14.6854, name: removeTxtExtension ('Alois Jirásek - F. L. Věk II.txt')}, {x: 81918, y: 14.593, name: removeTxtExtension ('Alois Jirásek - F. L. Věk I.txt')}, {x: 145390, y: 15.5527, name: removeTxtExtension ('Alois Jirásek - F. L. Věk IV.txt')}, {x: 176779, y: 16.5936, name: removeTxtExtension ('Alois Jirásek - F. L. Věk V.txt')}, {x: 211979, y: 17.2004, name: removeTxtExtension ('Alois Jirásek - Temno.txt')}, {x: 35400, y: 15.6886, name: removeTxtExtension ('Alois Jirásek - Filozofská historie.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});