// Create the chart
Highcharts.mapChart('contact-map', {
    chart: {
        margin: 0
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    navigation: {
        buttonOptions: {
            align: 'left',
            theme: {
                stroke: '#e6e6e6'
            }
        }
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            alignTo: 'spacingBox'
        }
    },

    mapView: {
        center: [17.251143, 49.5940567],
        zoom: 10
    },

    tooltip: {
        pointFormat: '{point.name}'
    },

    legend: {
        enabled: true,
        title: {
            text: ''
        },
        align: 'left',
        symbolWidth: 20,
        symbolHeight: 20,
        itemStyle: {
            textOutline: '1 1 1px rgba(255,255,255)'
        },
        backgroundColor: 'rgba(255,255,255,0.8)',
        float: true,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        borderRadius: 2,
        itemMarginBottom: 5
    },

    plotOptions: {
        mappoint: {
            dataLabels: {
                enabled: false
            }
        }
    },

    series: [{
        type: 'tiledwebmap',
        name: 'Basemap Tiles',
        provider: {
            type: 'OpenStreetMap'
        },
        showInLegend: false
    }, {
        type: 'mappoint',
        name: 'Faculty of Arts of Palacky University in Olomouc',
        marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/museum.svg)',
            width: 24,
            height: 24
        },
        data: [{
            name: 'Faculty of Arts of Palacky University in Olomouc',
            lon: 17.2598569,
            lat: 49.5947117
        }]
    }]
});