function showGraph(){
    var option = document.getElementById("gis-cluster").value;

    switch (option){
        case "ivuvroman":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.41722, 50.0795], zoom: 3}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Karlův most, Praha', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Nové Město, Praha', lon: 14.427, lat: 50.078, image: "../foto_praha/novemesto.jpg"},
                {name: 'Václavské náměstí, Praha', lon: 14.427, lat: 50.081, image: "../foto_praha/Storzer_vaclavak.jpg"},
                {name: 'Rudolfinum, Praha', lon: 14.4159, lat: 50.09, image: "../foto_praha/rudolfinum_praha.jpg"},
                {name: 'U Fleků, Praha', lon: 14.4188, lat: 50.0778, image: "../foto_praha/zmelik_ufleku.jpg"},
                {name: 'Hrad Trosky', lon: 15.2289, lat: 50.5147, image: "../foto_praha/zmelik_trosky.jpg"},
                {name: 'Lipnice nad Sázavou', lon: 15.4186, lat: 49.6136, image: "../foto_praha/lipnice_nad_sazavou.jpg"},
                {name: 'Lipsko (Leipzig)', lon: 12.3731, lat: 51.3397, image: "../foto_praha/lipsko.jpeg"},
                {name: 'Paříž (Quartier Latin)', lon: 2.3448, lat: 48.8499, image: "../foto_praha/zmelik_pariz.jpg"},
                {name: 'Berlín', lon: 13.405, lat: 52.52, image: "../foto_praha/storzer_berlin.jpg"},
                {name: 'Drážďany (Dresden)', lon: 13.7373, lat: 51.0504, image: "../foto_praha/drazdany.jpg"},
                {name: 'Vídeň (Wien)', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
                {name: 'Ženeva (Genève)', lon: 6.1432, lat: 46.2044, image: "../foto_praha/zeneva.jpg"},
                {name: 'Petrohrad (Sankt-Peterburg)', lon: 30.3609, lat: 59.9311, image: "../foto_praha/petrohrad.jpg"},
                {name: 'Turín (Torino)', lon: 7.6869, lat: 45.0703, image: "../foto_praha/turin.jpg"},
                {name: 'Riviéra (Nice)', lon: 7.262, lat: 43.7102, image: "../foto_praha/riviera.jpg"},
                {name: 'Bosna (Sarajevo)', lon: 18.4131, lat: 43.8563, image: "../foto_praha/bosna.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [

            ]},]});
            break;
        default:
            document.getElementById("gis").src = "";
    }
}