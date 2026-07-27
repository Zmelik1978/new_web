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
            {x: 81702, y: 42.08, name: removeTxtExtension ('Daniela Hodrová - Perunův den.txt')}, {x: 58810, y: 38.5187, name: removeTxtExtension ('Daniela Hodrová - Podobojí.txt')}, {x: 68696, y: 36.6323, name: removeTxtExtension ('Daniela Hodrová - Théta.txt')}, {x: 91476, y: 35.594, name: removeTxtExtension ('Daniela Hodrová - Kukly.txt')}, {x: 24485, y: 33.528, name: removeTxtExtension ('Daniela Hodrová - Město vidím.txt')}, {x: 145359, y: -5.9165, name: removeTxtExtension ('Daniela Hodrová - Točité věty.txt')},
            
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
            {x: 81702, y: 11.5112, name: removeTxtExtension ('Daniela Hodrová - Perunův den.txt')}, {x: 58810, y: 12.7487, name: removeTxtExtension ('Daniela Hodrová - Podobojí.txt')}, {x: 68696, y: 12.3062, name: removeTxtExtension ('Daniela Hodrová - Théta.txt')}, {x: 91476, y: 13.1247, name: removeTxtExtension ('Daniela Hodrová - Kukly.txt')}, {x: 24485, y: 12.9589, name: removeTxtExtension ('Daniela Hodrová - Město vidím.txt')}, {x: 145359, y: 28.9268, name: removeTxtExtension ('Daniela Hodrová - Točité věty.txt')},
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
            {x: 81702, y: 14.7922, name: removeTxtExtension ('Daniela Hodrová - Perunův den.txt')}, {x: 58810, y: 15.746, name: removeTxtExtension ('Daniela Hodrová - Podobojí.txt')}, {x: 68696, y: 15.5393, name: removeTxtExtension ('Daniela Hodrová - Théta.txt')}, {x: 91476, y: 16.124, name: removeTxtExtension ('Daniela Hodrová - Kukly.txt')}, {x: 24485, y: 16.3366, name: removeTxtExtension ('Daniela Hodrová - Město vidím.txt')}, {x: 145359, y: 32.7543, name: removeTxtExtension ('Daniela Hodrová - Točité věty.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});