function showGIS() {
    var cluster = document.getElementById("gis-cluster").value;

    switch (cluster) {
        case "novyepochalnivylet":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4197, 50.0875], zoom: 6}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Pražský hrad', lon: 14.4001, lat: 50.0905, image: "../foto_praha/hradcany.jpg"},
                {name: 'Vikárka (Vikářská ulice)', lon: 14.4015, lat: 50.0912, image: "../foto_praha/vikarka.jpeg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Staré Město pražské', lon: 14.421, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'Nové Město pražské', lon: 14.427, lat: 50.078, image: "../foto_praha/novemesto.jpg"},
                {name: 'Židovské Město (Josefov)', lon: 14.418, lat: 50.09, image: "../foto_praha/storzer_josefov.jpg"},
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Kamenný most (dnes Karlův most)', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Letná', lon: 14.417, lat: 50.0975, image: "../foto_praha/storzer_letna.jpg"},
                {name: 'Strahovský klášter', lon: 14.3895, lat: 50.0855, image: "../foto_praha/strahovsky_klaster.jpg"},
                {name: 'Vyšehrad', lon: 14.4176, lat: 50.0641, image: "../foto_praha/vysehrad.jpg"},
                {name: 'Vinohrady', lon: 14.448, lat: 50.0755, image: "../foto_praha/storzer_vinohrady.jpg"},
                {name: 'Žižkov', lon: 14.449, lat: 50.087, image: "../foto_praha/storzer_zizkov.jpg"},
                {name: 'Vítkov (Vítkova hora)', lon: 14.4495, lat: 50.0877, image: "../foto_praha/storzer_vitkov.jpg"},
                {name: 'Bílá hora', lon: 14.318, lat: 50.082, image: "../foto_praha/zmelik_bila_hora.jpg"},
                {name: 'Staroměstské náměstí', lon: 14.421, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Celetná ulice', lon: 14.4234, lat: 50.0873, image: "../foto_praha/zmelik_celetna.jpg"},
                {name: 'Malé náměstí', lon: 14.4197, lat: 50.0868, image: "../foto_praha/male_namesti.jpg"},
                {name: 'Týnský chrám', lon: 14.4222, lat: 50.0879, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Týnská ulice', lon: 14.4225, lat: 50.0882, image: "../foto_praha/tynska_ulice.jpg"},
                {name: 'Štupartská ulice', lon: 14.4248, lat: 50.0888, image: "../foto_praha/stupartska_ulice.jpg"},
                {name: 'Masná ulice', lon: 14.4238, lat: 50.089, image: "../foto_praha/masna_ulice.jpeg"},
                {name: 'Kozí náměstí / Kozí ulice', lon: 14.4258, lat: 50.0905, image: "../foto_praha/kozi_placek.jpeg"},
                {name: 'Hybernská ulice', lon: 14.4316, lat: 50.0875, image: "../foto_praha/hybernska_ulice.jpg"},
                {name: 'Na Příkopě', lon: 14.427, lat: 50.086, image: "../foto_praha/zmelik_na_prikope.jpg"},
                {name: 'Betlémská kaple', lon: 14.4178, lat: 50.0843, image: "../foto_praha/betlemska_kaple.jpg"},
                {name: 'Klášter sv. Kateřiny (Kateřinky)', lon: 14.4245, lat: 50.0719, image: "../foto_praha/klaster_sv_kateriny.jpg"},
                {name: 'Zderaz', lon: 14.4156, lat: 50.0746, image: "../foto_praha/zderaz.jpg"},
                {name: 'Belveder (Královský letohrádek)', lon: 14.4046, lat: 50.0942, image: "../foto_praha/storzer_belveder.jpg"},
                {name: 'Stromovka (Královská obora)', lon: 14.415, lat: 50.1055, image: "../foto_praha/storzer_stromovka.jpg"},
                {name: 'Ovenec (dnes Bubeneč)', lon: 14.409, lat: 50.1063, image: "../foto_praha/bubenec.jpg"},
                {name: 'Podbaba', lon: 14.3917, lat: 50.1206, image: "../foto_praha/storzer_podbaba.jpg"},
                {name: 'Jelení příkop', lon: 14.399, lat: 50.0922, image: "../foto_praha/jeleniprikop.jpg"},
                {name: 'Prašná brána', lon: 14.4276, lat: 50.0875, image: "../foto_praha/storzer_prasnab.jpg"},
                {name: 'Karlštejn', lon: 14.1881, lat: 49.9394, image: "../foto_praha/zmelik_karlstejn.jpg"},
                {name: 'Tábor', lon: 14.6578, lat: 49.4144, image: "../foto_praha/zmelik_tabor.jpg"},
                {name: 'Sudoměř', lon: 14.0903, lat: 49.3289, image: "../foto_praha/storzer_sudomer.jpg"},
                {name: 'Nekměř', lon: 13.2447, lat: 49.8889, image: "../foto_praha/nekmer.jpg"},
                {name: 'Příběnice (hrad)', lon: 14.5664, lat: 49.4419, image: "../foto_praha/pribenice.jpg"},
                {name: 'Sázava', lon: 14.8983, lat: 49.8786, image: "../foto_praha/sazava.jpg"},
                {name: 'Roudnice nad Labem', lon: 14.2611, lat: 50.4258, image: "../foto_praha/roudnice_nad_labem.jpg"},
                {name: 'Žatec', lon: 13.5456, lat: 50.3275, image: "../foto_praha/storzer_zatec.jpg"},
                {name: 'Litoměřice', lon: 14.1317, lat: 50.5344, image: "../foto_praha/litomerice.jpg"},
                {name: 'Český Krumlov', lon: 14.3175, lat: 48.8127, image: "../foto_praha/cesky_krumlov.jpg"},
                {name: 'Míšeň (Meißen)', lon: 13.4711, lat: 51.1622, image: "../foto_praha/misen.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Špitálské pole (Špitálsko, dnes Karlín–Florenc)', lon: 14.4435, lat: 50.0915, image: "../foto_praha/spitalske_pole.jpg"},
                {name: 'Poříčská brána', lon: 14.435, lat: 50.0905, image: "../foto_praha/storzer_poricskab.jpg"},
                {name: 'Horská brána', lon: 14.436, lat: 50.0838, image: "../foto_praha/horska_brana.jpg"},
                {name: 'Svinská brána', lon: 14.4205, lat: 50.0838, image: "../foto_praha/svinska_brana.jpg"},
                {name: 'Bruská brána / Písecká brána', lon: 14.403, lat: 50.0925, image: "../foto_praha/storzer_bruskab.jpg"},
                {name: 'Koňská brána', lon: 14.429, lat: 50.0815, image: "../foto_praha/storzer_konska_brana.jpg"},
                {name: 'Kostel sv. Linharta', lon: 14.4178, lat: 50.0884, image: "../foto_praha/sv_linhart.jpg"},
            ]},]});
            break;
        case "pravyvylet":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4002, 50.0905], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hospůdka Na Vikárce, Hradčany', lon: 14.4002, lat: 50.0914, image: "../foto_praha/vikarka.jpg"},
                {name: 'Svatovítský chrám (katedrála sv. Víta)', lon: 14.4006, lat: 50.0909, image: "../foto_praha/svatovitskavez.jpg"},
                {name: 'Jelení příkop', lon: 14.3998, lat: 50.0925, image: "../foto_praha/jelenniprikop.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Karlův most (kamenný most)', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Staré Město', lon: 14.421, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;     
    default:
            document.getElementById("gis-container").innerHTML = "";
    }
}
