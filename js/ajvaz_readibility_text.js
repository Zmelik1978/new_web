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
            {x: 6762, y: 28.0591, name: removeTxtExtension ('Michal Ajvaz - Vražda v hotelu Intercontinental.txt')}, {x: 24807, y: 20.4979, name: removeTxtExtension ('Michal Ajvaz - Návrat starého varana.txt')}, {x: 54413, y: 18.1741, name: removeTxtExtension ('Michal Ajvaz - Luxemburská zahrada.txt')}, {x: 47159, y: 18.0309, name: removeTxtExtension ('Michal Ajvaz - Druhé město.txt')},
            
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
            {x: 6762, y: 14.1453, name: removeTxtExtension ('Michal Ajvaz - Vražda v hotelu Intercontinental.txt')}, {x: 24807, y: 17.8884, name: removeTxtExtension ('Michal Ajvaz - Návrat starého varana.txt')}, {x: 54413, y: 18.8725, name: removeTxtExtension ('Michal Ajvaz - Luxemburská zahrada.txt')}, {x: 47159, y: 18.3817, name: removeTxtExtension ('Michal Ajvaz - Druhé město.txt')},
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
            {x: 6762, y: 17.7073, name: removeTxtExtension ('Michal Ajvaz - Vražda v hotelu Intercontinental.txt')}, {x: 24807, y: 21.4204, name: removeTxtExtension ('Michal Ajvaz - Návrat starého varana.txt')}, {x: 54413, y: 22.468, name: removeTxtExtension ('Michal Ajvaz - Luxemburská zahrada.txt')}, {x: 47159, y: 21.9868, name: removeTxtExtension ('Michal Ajvaz - Druhé město.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});