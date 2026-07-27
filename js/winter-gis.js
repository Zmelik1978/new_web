function showGIS() {
    var cluster = document.getElementById("gis-cluster").value;

    switch (cluster) {
        case "mistrkampanus":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.411, 50.0855], zoom: 6}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Malostranské náměstí (Malostranský rynk)', lon: 14.4037, lat: 50.0879, image: "../foto_praha/storzer_malostransken.jpg"},
                {name: 'Staré Město', lon: 14.421, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'Staroměstské náměstí (Staroměstský rynk)', lon: 14.421, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Nové Město', lon: 14.427, lat: 50.078, image: "../foto_praha/novemesto.jpg"},
                {name: 'Strahovský klášter', lon: 14.3895, lat: 50.0855, image: "../foto_praha/strahovsky_klaster.jpg"},
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Karlův most (dobový Kamenný most)', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Letná', lon: 14.417, lat: 50.0975, image: "../foto_praha/storzer_letna.jpg"},
                {name: 'Smíchov', lon: 14.404, lat: 50.071, image: "../foto_praha/smichov.jpg"},
                {name: 'Podskalí', lon: 14.415, lat: 50.066, image: "../foto_praha/zmelik_podskali.jpg"},
                {name: 'Újezd', lon: 14.404, lat: 50.083, image: "../foto_praha/ujezd.jpg"},
                {name: 'Karolinum', lon: 14.4236, lat: 50.0863, image: "../foto_praha/karolinum.jpg"},
                {name: 'Železná ulice', lon: 14.4218, lat: 50.0859, image: "../foto_praha/zelezna_ulice.jpg"},
                {name: 'Celetná ulice', lon: 14.4243, lat: 50.0872, image: "../foto_praha/zmelik_celetna.jpg"},
                {name: 'Kaprova ulice', lon: 14.4188, lat: 50.0884, image: "../foto_praha/kaprova_ulice.jpg"},
                {name: 'Týnský chrám', lon: 14.4225, lat: 50.0879, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Spálená ulice', lon: 14.4195, lat: 50.081, image: "../foto_praha/spalena_ulice.jpeg"},
                {name: 'Václavské náměstí (dobový Koňský trh)', lon: 14.427, lat: 50.081, image: "../foto_praha/Storzer_vaclavak.jpg"},
                {name: 'Bílá hora', lon: 14.318, lat: 50.082, image: "../foto_praha/zmelik_bila_hora.jpg"},
                {name: 'Ruzyně', lon: 14.2596, lat: 50.0686, image: "../foto_praha/Storzer_ruzyne.jpg"},
                {name: 'Řepy', lon: 14.312, lat: 50.0641, image: "../foto_praha/storzer_repy.jpg"},
                {name: 'Břevnov (břevnovský klášter)', lon: 14.3585, lat: 50.0855, image: "../foto_praha/brevnov_svejk.jpg"},
                {name: 'Hostivice', lon: 14.2585, lat: 50.0825, image: "../foto_praha/hostivice.jpg"},
                {name: 'Motol', lon: 14.3315, lat: 50.0707, image: "../foto_praha/zmelik_motol.png"},
                {name: 'Rakovník', lon: 13.733, lat: 50.1037, image: "../foto_praha/storzer_rakovnik.JPG"},
                {name: 'Sušice', lon: 13.521, lat: 49.231, image: "../foto_praha/susice.jpg"},
                {name: 'Vodňany (rodiště Kampanovo)', lon: 14.175, lat: 49.149, image: "../foto_praha/vodnany.jpg"},
                {name: 'Karlovy Vary', lon: 12.871, lat: 50.231, image: "../foto_praha/karlovy_vary.jpg"},
                {name: 'Vídeň', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
                {name: 'Drážďany', lon: 13.7373, lat: 51.0504, image: "../foto_praha/drazdany.jpg"},
                {name: 'Záblatí (bitva)', lon: 14.364, lat: 49.076, image: "../foto_praha/zablati.JPG"},
                {name: 'Můstek', lon: 14.4225, lat: 50.0837, image: "../foto_praha/mustek.jpg"},
                {name: 'Myší díra, Malá Strana', lon: 14.406, lat: 50.0876, image: "../foto_praha/mysi_dira.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Koňská brána (zbořena 1875)', lon: 14.429, lat: 50.0815, image: "../foto_praha/storzer_konska_brana.jpg"},
            ]},]});
            break;
    default:
        document.getElementById("gis-container").innerHTML = "";
    }

}