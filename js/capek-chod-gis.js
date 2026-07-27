function showGraph(){
    var option = document.getElementById("gis-cluster").value;

    switch (option){
        case "kasparlenmstitel":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4205, 50.086], zoom: 12}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Vltava (Praha)', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Letná (Praha)', lon: 14.417, lat: 50.0958, image: "../foto_praha/storzer_letna.jpg"},
                {name: 'Vinohrady (Praha)', lon: 14.448, lat: 50.0755, image: "../foto_praha/storzer_vinohrady.jpg"},
                {name: 'Karlovo náměstí (Praha)', lon: 14.4205, lat: 50.0758, image: "../foto_praha/karlovonamesti_svejk.jpg"},
                {name: 'Malá Strana (Praha)', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Kostel sv. Ludmily, Praha-Vinohrady', lon: 14.4373, lat: 50.0759, image: "../foto_praha/kostel_sv_ludmily_praha_vinohrady.jpg"},
                {name: 'Rovereto (Itálie)', lon: 11.04, lat: 45.8906, image: "../foto_praha/rovereto.jpg"},
                {name: 'Trident / Trento (Itálie)', lon: 11.1167, lat: 46.0667, image: "../foto_praha/trident_trento.jpg"},
                {name: 'Treviso (Itálie)', lon: 12.2433, lat: 45.6669, image: "../foto_praha/treviso.jpg"},
                {name: 'Vídeň (Rakousko)', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [

            ]},]});
            break;
        default:
            document.getElementById("gis").src = "";
    }
}