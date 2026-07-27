function showGIS(){
    var option = document.getElementById("gis-cluster").value;
    // switch method
    switch (option){
        case "janmariaplojhar":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [12.48065, 41.9129], zoom: 4}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Via Giulia, Řím', lon: 12.469, lat: 41.8946, image: "../foto_praha/via_giulia.jpg"},
                {name: 'Palazzo Falconieri, Řím', lon: 12.4677, lat: 41.8939, image: "../foto_praha/palazzo_falconieri.jpg"},
                {name: 'Pincio / Monte Pincio, Řím', lon: 12.479, lat: 41.9109, image: "../foto_praha/pincio.jpg"},
                {name: 'Piazza di Spagna, Řím', lon: 12.4823, lat: 41.9058, image: "../foto_praha/piazza_di_spagna.jpg"},
                {name: 'Hotel Quirinale, Via Nazionale, Řím', lon: 12.4925, lat: 41.9009, image: "../foto_praha/hotel_quirinale.jpg"},
                {name: 'Tibera (Tiber), Řím', lon: 12.4663, lat: 41.9019, image: "../foto_praha/tibera.jpg"},
                {name: 'Ponte Molle (Ponte Milvio), Řím', lon: 12.4669, lat: 41.9359, image: "../foto_praha/ponte_milvio.jpg"},
                {name: 'Porta del Popolo, Řím', lon: 12.4763, lat: 41.9116, image: "../foto_praha/porta_del_popolo.jpg"},
                {name: 'Park Borghese (Villa Borghese), Řím', lon: 12.4922, lat: 41.9142, image: "../foto_praha/villa_borghese.jpg"},
                {name: 'Teatro Valle, Řím', lon: 12.4742, lat: 41.8967, image: "../foto_praha/teatro_valle.jpg"},
                {name: 'Teatro Costanzi (dnes Teatro dell\'Opera), Řím', lon: 12.4948, lat: 41.9006, image: "../foto_praha/teatro_costanzi.jpg"},
                {name: 'Teatro Argentina, Řím', lon: 12.4762, lat: 41.8957, image: "../foto_praha/teatro_argentina.JPG"},
                // pokračovat
                {name: 'Vatikan', lon: 12.4534, lat: 41.9029, image: "../foto_praha/vatikan.jpg"},
                {name: 'La Storta (u Říma)', lon: 12.401, lat: 42.012, image: "../foto_praha/la_storta.jpg"},
                {name: 'Isola Farnese (u Říma)', lon: 12.4022, lat: 42.0386, image: "../foto_praha/isola_farnese.jpg"},
                {name: 'Veji (Veii) a grotta Campana', lon: 12.4015, lat: 42.03, image: "../foto_praha/veji.png"},
                {name: 'Florencie (Firenze)', lon: 11.2558, lat: 43.7696, image: "../foto_praha/florencie.jpg"},
                {name: 'Neapol (Napoli)', lon: 14.2681, lat: 40.8518, image: "../foto_praha/neapol.jpg"},
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Vyšehrad', lon: 14.4176, lat: 50.0641, image: "../foto_praha/vysehrad.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Korfu (Kerkyra)', lon: 19.9217, lat: 39.6243, image: "../foto_praha/korfu.jpg"},
                {name: 'Ateny (Athina)', lon: 23.7275, lat: 37.9838, image: "../foto_praha/ateny.jpg"},
                {name: 'Cařihrad (dnes Istanbul)', lon: 28.9784, lat: 41.0082, image: "../foto_praha/carihrad.jpg"},
                {name: 'Paříž', lon: 2.3522, lat: 48.8566, image: "../foto_praha/Storzer_pariz.jpg"},
                {name: 'Londýn', lon: -0.1278, lat: 51.5074, image: "../foto_praha/storzer_london.jpg"},
                {name: 'Vídeň', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "legendaprazska":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4001, 50.0861], zoom: 11}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Karlův most', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Staroměstská mostecká věž', lon: 14.4138, lat: 50.0861, image: "../foto_praha/mostecka_vez.jpg"},
                {name: 'Bílá hora', lon: 14.318, lat: 50.082, image: "../foto_praha/zmelik_bila_hora.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;   
        case "legendaslovenska":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [19.91645, 48.92035], zoom: 4}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Vysoké Tatry', lon: 20.1339, lat: 49.1717, image: "../foto_praha/vysoke_tatry.jpg"},
                {name: 'Dunaj', lon: 18.74, lat: 47.799, image: "../foto_praha/dunaj.jpg"},
                {name: 'Stoličný Bělehrad', lon: 18.4221, lat: 47.186, image: "../foto_praha/stolicny_belehrad.jpg"},
                {name: 'Cařihrad', lon: 28.9784, lat: 41.0082, image: "../foto_praha/carihrad.jpg"},
                {name: 'Řím', lon: 12.4964, lat: 41.9028, image: "../foto_praha/rim.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;  
        case "legendatoledska":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [10.0, 36.0], zoom: 5}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Toledo', lon: -4.0273, lat: 39.8628, image: "../foto_praha/toledo.jpg"},
                {name: 'Synagóga Santa María la Blanca, Toledo', lon: -4.0286, lat: 39.8581, image: "../foto_praha/synagoga_santa_maria_la_blanca_toledo.jpg"},
                {name: 'Kostel/mešita Krista Světlého (Cristo de la Luz), Toledo', lon: -4.024, lat: 39.8609, image: "../foto/kostelmesita_krista_svetleho.jpg"},
                {name: 'Náměstí Zocodover, Toledo', lon: -4.0227, lat: 39.8597, image: "../foto_praha/namesti_zocodover_toledo.jpg"},
                {name: 'Most de Alcántara (Puente de Alcántara), Toledo', lon: -4.0162, lat: 39.8606, image: "../foto_praha/most_de_alcantara.jpg"},
                {name: 'Valmardonská brána (Puerta de Valmardón), Toledo', lon: -4.0242, lat: 39.8611, image: "../foto_praha/valmardonska_brana.jpg"},
                {name: 'Náměstí Valdecaleros, Toledo', lon: -4.0238, lat: 39.8578, image: "../foto_praha/toledo.jpg"},
                {name: 'Řeka Tajo (Tajo / Tejo) u Toleda', lon: -4.019, lat: 39.8565, image: "../foto_praha/reka_tajo.jpg"},
                {name: 'Toledská vega (Vega Baja), Toledo', lon: -4.034, lat: 39.8685, image: "../foto_praha/toledska_vega.jpg"},
                {name: 'Talavera de la Reina', lon: -4.8303, lat: 39.9635, image: "../foto_praha/talavera_de_la_reina.jpg"},
                {name: 'Jeruzalém (biblický)', lon: 35.2137, lat: 31.7683, image: "../foto_praha/jeruzalem.jpg"},
                {name: 'Sión, Jeruzalém (biblický)', lon: 35.2287, lat: 31.7717, image: "../foto_praha/sion_hora_sion_jeruzalem.jpg"},
                {name: 'Jericho', lon: 35.4444, lat: 31.8568, image: "../foto_praha/jericho.jpg"},
                {name: 'Hammut / Hamát (Hama, Sýrie)', lon: 36.7578, lat: 35.1318, image: "../foto_praha/hammut_hamat.jpg"},
                {name: 'Misraim (biblický Egypt)', lon: 30.8025, lat: 26.8206, image: "../foto_praha/misraim.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
 
        default:
            document.getElementById("gis-container").src = "";
    }
}
