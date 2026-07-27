function showGIS(){
    var option = document.getElementById("gis-cluster").value;
    // switch method
    switch (option){
        case "peklazplozenci":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 2}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Pekla zplozenci'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            // existující místa
            {type: 'mappoint',name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Platejzská ulice (dnešní Štěpánská), © Světozor 19.1.1877', lon: 14.4252721, lat: 50.0785499, image: "../foto_praha/zmelik_stepanska.jpg"},
                {name: 'Nový Svět, © Stará Praha na dobových pohlednicích a ve straých fotografiích', lon: 14.3914434, lat: 50.0909168, image: "../foto_praha/zmelik_novysvet.jpg"},
                {name: 'Koňský Trh (dnešní Václavské náměstí)', lon: 14.4269539, lat: 50.0818, image: "../foto_praha/vaclavskenamesti_svejk.jpg"},
                {name: 'Kutná Hora', lon: 15.268226, lat: 49.948445, image: "../foto_praha/storzer_kutnah.jpg"},
                {name:'Dobytčí trh (dnešní Karlovo náměstí)', lon: 14.42083, lat: 50.07583, image: "../foto_praha/zmelik_dobytcitrh.jpg"},
                {name: 'Slovanský klášter', lon: 14.4175814, lat: 50.0719492, image: "../foto_praha/emauzy_svejk.jpg"},
                {name: 'Jordán', lon: 36.3149378, lat: 31.3031833, image: "../foto_praha/jordan.jpg"},
                {name: 'Nové Město', lon: 14.4167272, lat: 50.0762903, image: "../foto_praha/novemesto.jpg"},
                {name: 'Konstantinopol (dnešní Istanbul), © Wikipedie', lon: 28.9758714, lat: 41.0063808, image: "../foto_praha/konstantinopol.jpg"},
                {name: 'Vltava', lon: 14.4105328, lat: 50.0775831, image: "../foto_praha/vltava_macha.png"},
                {name: 'Jelení příkop', lon: 14.3995600, lat: 50.0917206, image: "../foto_praha/jelenniprikop.jpg"},
                {name: 'Daliborka, © Vincenc Morstadt', lon: 14.4049561, lat: 50.0923328, image: "../foto_praha/daliborka.jpg"},
                {name: 'Bílá věž, © Wikipedie', lon: 14.400051, lat: 50.090432, image: "../foto_praha/bilavez.jpg"},
                {name: 'Lví dvůr, © Wikipedie', lon: 14.398593, lat: 50.092904, image: "../foto_praha/lvidvur.jpeg"},
                {name: 'Borneo', lon: 114.7407564, lat: 1.4366336, image: "../foto_praha/borneo.jpg"},
                {name:'Hradčany', lon: 14.4000936, lat: 50.0898689, image: "../foto_praha/hradcany_svejk.jpg"},
                {name:'Staré Město', lon: 14.4177806, lat: 50.0845519, image: "../foto_praha/staremesto.jpg"},
                {name:'Botický potok', lon: 14.4145839, lat: 50.0672669, image: "../foto_praha/botic_svejk.jpg"},
                {name:'Etna', lon: 14.9940319, lat: 37.751025, image: "../foto_praha/etna.jpg"},
                {name:'Prašná brána', lon: 14.4277814, lat: 50.087265, image: "../foto_praha/storzer_prasnab.jpg"},
                {name:'Uhelný plácek (dnešní Kozí plácek)', lon: 14.4227556, lat: 50.0905131, image: "../foto_praha/kozi_placek.jpeg"},
                {name:'Můstek, © The Prygue Vitruvius', lon: 14.423505, lat: 50.0841742, image: "../foto_praha/mustek.jpg"},
                {name:'Jindřišská ulice', lon: 14.4287136, lat: 50.0841678, image: "../foto_praha/jindriska_svejk.jpg"},
                {name:'Golgata (Golgota, též Kavlárie), © Wikipedie', lon: 35.2243, lat: 31.7738, image: "../foto_praha/golgota.jpg"},
                {name:'Svatá Země (Izrael), © Wikipedie', lon: 34.6494544, lat: 31.4145242, image: "../foto_praha/izrael.jpeg"},
                {name:'Memfidy (dnes Memfis), © Wikipedie', lon: 31.1910392, lat: 29.8608742, image: "../foto_praha/memfis.jpeg"},
                {name:'Dolejší Egypt (tzv. Dolní Egypt), © Wikipedie', lon: 31.1910392, lat: 29.8608742, image: "../foto_praha/dolni_egypt.png"},
                {name: 'Staroměstský rathouz (dnešní Staroměstská radnice), © Wikipedie', lon: 14.4204475, lat: 50.0870669, image: "../foto_praha/staromestska_radnice.png"},
                {name:'Betlémská kaple, © Pražský přehled', lon: 14.4174692, lat: 50.0842975, image: "../foto_praha/betlemska_kaple.jpg"},
                {name:'kostel sv. Michala, © Wikipedie', lon: 14.418035, lat: 50.0801769, image: "../foto_praha/kostel_sv_michala.jpg"},
                {name:'Petřín', lon: 14.39508, lat: 50.08354, image: "../foto_praha/petrin.jpg"},
                {name:'Pohořelec', lon: 14.3852542, lat: 50.0871458, image: "../foto_praha/pohorelec.jpg"},
                {name:'Frýdlant, © Hrad a zámek Frýdlant', lon: 15.0838439, lat: 50.9153239, image: "../foto_praha/frydlant.jpg"},
                {name:'Spálená ulice, © FB Praha magická', lon: 14.4198, lat: 50.0807, image: "../foto_praha/spalena_ulice.jpeg"},
                {name: 'Řím', lon: 12.4829319, lat: 41.8933203, image: "../foto_praha/rim.jpg"},
                {name: 'Novoměstská radnice, © Encyklopedie Prahy 2', lon: 14.4211308, lat: 50.0782231, image: "../foto_praha/novomestska_radnice.jpg"},

            ]},
            // neexistující místa
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'v Prolomeném (též Brána svatého Havla)', lon: 14.422841, lat: 50.084527, image: "../foto_praha/zmelik_branahavel.jpeg"},
                {name:'Sviňská brána (též Brána svatého Jana nebo Slepá brána), © Encyklopedie Prahy 2', lon: 14.429262, lat: 50.075498, image: "../foto_praha/svinska_brana.png"},
                {name:'Židovské město (dnešní Josefov), © Prague City Line', lon: 14.4185958, lat: 50.0900742, image: "../foto_praha/zidovskemesto.jpg"},
               
            ]},
            ]});
            break;
        default:
            document.getElementById("gis-container").src = "";
    }
}
