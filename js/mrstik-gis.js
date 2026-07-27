function showGraph(){
    var option = document.getElementById("gis-cluster").value;

    switch (option){
        case "santalucia":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4208, 50.0814], zoom: 7}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Staroměstské náměstí', lon: 14.4208, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Všeobecná nemocnice (Karlovo nám.)', lon: 14.4178, lat: 50.0773, image: "../foto_praha/vseobecna_nemocnice.jpg"},
                {name: 'Malá Strana', lon: 14.4033, lat: 50.0878, image: "../foto_praha/malastrana.jpg"},
                {name: 'Vinohrady', lon: 14.4407, lat: 50.0748, image: "../foto_praha/vinohrady_svejk.jpg"},
                {name: 'Strahov', lon: 14.3869, lat: 50.0838, image: "../foto_praha/strahov.jpg"},
                {name: 'Olšany', lon: 14.4688, lat: 50.0789, image: "../foto_praha/zmelik_olsany.jpg"},
                {name: 'Václavské náměstí', lon: 14.4277, lat: 50.0814, image: "../foto_praha/vaclavskenamesti_svejk.jpg"},
                {name: 'Národní divadlo', lon: 14.4150, lat: 50.0808, image: "../foto_praha/zmelik_narodnidivadlo.jpg"},
                {name: 'Karlův most', lon: 14.4116, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Malostranské nám. (Radeckého nám.)', lon: 14.4042, lat: 50.0878, image: "../foto_praha/storzer_malostransken.jpg"},
                {name: 'Prašná brána', lon: 14.4280, lat: 50.0873, image: "../foto_praha/storzer_prasnab.jpg"},
                {name: 'Pivnice U Fleků', lon: 14.4189, lat: 50.0783, image: "../foto_praha/zmelik_ufleku.jpg"},
                {name: 'Smetanovo nábřeží', lon: 14.4133, lat: 50.0830, image: "../foto_praha/storzer_smetanovo_n.jpg"},
                {name: 'Žitná ulice', lon: 14.4238, lat: 50.0775, image: "../foto_praha/zmelik_zitna_ulice.jpg"},
                {name: 'Jindřišská ulice', lon: 14.4290, lat: 50.0832, image: "../foto_praha/jindriska_svejk.jpg"},
                {name: 'Ostrovní ulice', lon: 14.4166, lat: 50.0797, image: "../foto_praha/zmelik_ostrovni_ulice.jpg"},
                {name: 'Senovážné náměstí', lon: 14.4305, lat: 50.0840, image: "../foto_praha/zmelik_senovazne_namesti.jpg"},
                {name: 'Ovocný trh', lon: 14.4233, lat: 50.0861, image: "../foto_praha/zmelik_ovocny_trh.jpg"},
                {name: 'Tržiště (Malá Strana)', lon: 14.4005, lat: 50.0870, image: "../foto_praha/zmelik_trh_mala_strana.jpg"},
                {name: 'Na Příkopě', lon: 14.4258, lat: 50.0853, image: "../foto_praha/zmelik_na_prikope.jpg"},
                {name: 'Brno', lon: 16.6068, lat: 49.1951, image: "../foto_praha/zmelik_brno.jpg"},
                {name: 'Kutná Hora', lon: 15.2680, lat: 49.9480, image: "../foto_praha/zmelik_kutna_hora.jpeg"},
                {name: 'Přerov', lon: 17.4516, lat: 49.4556, image: "../foto_praha/zmelik_prerov.jpg"},
                {name: 'Letovice', lon: 16.5713, lat: 49.5461, image: "../foto_praha/zmelik_letovice.gif"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Podskalí', lon: 14.4148, lat: 50.0685, image: "../foto_praha/zmelik_podskali.jpg"},
            ]},]});
            break;

        default:
            document.getElementById("gis").src = "";
    }
}