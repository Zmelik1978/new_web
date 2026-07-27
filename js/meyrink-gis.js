function showGraph(){
    var option = document.getElementById("cluster-gis").value;

    switch (option){
        case "golem":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.415843, 50.088293], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Ulice U Staré školy', lon: 14.4175, lat: 50.0895, image: "../foto_praha/zmelik_u_stare_skoly.jpg"},
                {name: 'Staroměstské náměstí', lon: 14.4213, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Chrám sv. Víta, Hradčany', lon: 14.4003, lat: 50.0906, image: "../foto_praha/storzer_svaty_vit.jpeg"},
                {name: 'Hradčany', lon: 14.3953, lat: 50.0892, image: "../foto_praha/hradcany.jpg"},
                {name: 'Karlův most (Kamenný most)', lon: 14.4114, lat: 50.0866, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Staronová synagóga', lon: 14.4181, lat: 50.09, image: "../foto_praha/zmelik_staronova_synagoga.jpg"},
                {name: 'Týnský chrám (kostel Panny Marie před Týnem)', lon: 14.4219, lat: 50.0877, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Staré zámecké schody', lon: 14.4053, lat: 50.0883, image: "../foto_praha/starezameckeschody.jpg"},
                {name: 'Fürstenberská zahrada', lon: 14.4008, lat: 50.0864, image: "../foto_praha/zmelik_furstenberska_zahrada.jpg"},
                {name: 'Židovská radnice', lon: 14.4188, lat: 50.0893, image: "../foto_praha/zmelik_zidovska_radnice.jpg"},
                {name: 'Vltava', lon: 14.4115, lat: 50.0855, image: "../foto_praha/vltava.jpg"},
                {name: 'Žižkov', lon: 14.4636, lat: 50.0855, image: "../foto_praha/zizkov_svejk.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Hampejská ulice', lon: 14.4178, lat: 50.0902, image: "../foto_praha/zmelik_hampejska_ulice.jpeg"},
                {name: 'Sanytrová ulice', lon: 14.4182, lat: 50.0898, image: "../foto_praha/zmelik_sanytrova_ulice.jpg"},
            ]},]});
            break;
        case "neviditelnapraha":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.410114, 50.0858], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hradčany', lon: 14.3969, lat: 50.0911, image: "../foto_praha/hradcany.jpg"},
                {name: 'Malá Strana', lon: 14.4053, lat: 50.0873, image: "../foto_praha/malastrana.jpg"},
                {name: 'Daliborka', lon: 14.4005, lat: 50.0916, image: "../foto_praha/daliborka.jpg"},
                {name: 'Chrám sv. Víta', lon: 14.4005, lat: 50.0907, image: "../foto_praha/storzer_svaty_vit.jpeg"},
                {name: 'Nové Město', lon: 14.423, lat: 50.0779, image: "../foto_praha/novemesto.jpg"},
                {name: 'Opatovická ulice', lon: 14.4168, lat: 50.0784, image: "../foto_praha/zmelik_opatovicka_ulice.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Lóžová budova Sat Bhai (kde je dnes hlavní pošta)', lon: 14.4278, lat: 50.0836, image: "../foto_praha/lozova_budova_sat_bhai.jpg"},
            ]},]});
            break;
        case "valpurzinanoc":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.402373, 50.090813], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hradčanské náměstí', lon: 14.3922, lat: 50.0909, image: "../foto_praha/storzer_hradcanske_n.jpg"},
                {name: 'Daliborka', lon: 14.4005, lat: 50.0916, image: "../foto_praha/daliborka.jpg"},
                {name: 'Nový Svět', lon: 14.3928, lat: 50.093, image: "../foto_praha/novysvet.jpg"},
                {name: 'Jelení příkop', lon: 14.3971, lat: 50.0925, image: "../foto_praha/jeleniprikop.jpg"},
                {name: 'Loreta', lon: 14.3919, lat: 50.0888, image: "../foto_praha/loreta.jpg"},
                {name: 'Kapucínský klášter', lon: 14.3912, lat: 50.0893, image: "../foto_praha/kapucinsky_klaster.jpg"},
                {name: 'Letohrádek královny Anny', lon: 14.399, lat: 50.0938, image: "../foto_praha/letohradek_kralovny_anny.jpeg"},
                {name: 'Valdštejnský palác', lon: 14.4059, lat: 50.0891, image: "../foto_praha/valdstejnsky_palac.jpg"},
                {name: 'Valdštejnské náměstí', lon: 14.4049, lat: 50.0898, image: "../foto_praha/valdstejnske_namesti.jpg"},
                {name: 'Thunovská ulice', lon: 14.4048, lat: 50.088, image: "../foto_praha/thunovska_ulice.jpg"},
                {name: 'Morzinský palác', lon: 14.404, lat: 50.0869, image: "../foto_praha/morzinsky_palac.jpg"},
                {name: 'Strahovský klášter', lon: 14.3876, lat: 50.0845, image: "../foto_praha/strahovsky_klaster.jpg"},
                {name: 'Týnský chrám', lon: 14.4224, lat: 50.0875, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Holešovice', lon: 14.4475, lat: 50.1057, image: "../foto_praha/storzer_holesovice.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Hostinec U Schnellů (zaniklý)', lon: 14.3938, lat: 50.0908, image: "../foto_praha/hostinec_u_schnellu.jpg"},
            ]},]});
            break;
        case "prazskavizitka":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4214, 50.0755], zoom: 6}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hradčany', lon: 14.3966, lat: 50.0909, image: "../foto_praha/hradcany.jpg"},
                {name: 'Malá Strana', lon: 14.4029, lat: 50.0878, image: "../foto_praha/malastrana.jpg"},
                {name: 'Na Příkopě', lon: 14.4266, lat: 50.0832, image: "../foto_praha/zmelik_na_prikope.jpg"},
                {name: 'Celetná ulice', lon: 14.4234, lat: 50.0873, image: "../foto/zmelik_celetna.jpg"},
                {name: 'Ovocný trh', lon: 14.423, lat: 50.0853, image: "../foto_praha/zmelik_ovocny_trh.jpg"},
                {name: 'Panská ulice', lon: 14.4264, lat: 50.0836, image: "../foto_praha/panska_svejk.jpg"},
                {name: 'Perlová ulice', lon: 14.4199, lat: 50.0853, image: "../foto_praha/zmelik_perlova_ulice.jpg"},
                {name: 'Prašná brána', lon: 14.4276, lat: 50.0876, image: "../foto_praha/storzer_prasnab.jpg"},
                {name: 'Dlouhá ulice', lon: 14.4241, lat: 50.0903, image: "../foto_praha/dlouha_svejk.jpg"},
                {name: 'Týnský kostel', lon: 14.4222, lat: 50.0872, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Národní divadlo', lon: 14.4155, lat: 50.0806, image: "../foto_praha/storzer_narodni_divadlo.jpg"},
                {name: 'Mariánské Lázně', lon: 12.7014, lat: 49.9648, image: "../foto_praha/zmelik_marianske_lazne.jpg"},
                {name: 'Trutnov', lon: 15.9075, lat: 50.5614, image: "../foto_praha/storzer_trutnov.jpg"},
                {name: 'Vídeň', lon: 16.3721, lat: 48.2085, image: "../foto/zmelik_viden.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Ferdinandova třída', lon: 14.4148, lat: 50.0816, image: "../foto_praha/zmelik_ferdinandova_trida.jpg"},
                {name: 'Kavárna Continental', lon: 14.4261, lat: 50.0833, image: "../foto_praha/zmelik_kavarna_continental.jpg"},
            ]},]});
            break;
        case "zelenatvar":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [4.9041, 52.3676], zoom: 4}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Amsterodam', lon: 4.9041, lat: 52.3676, image: "../foto_praha/zmelik_amsterodam.jpg"},
                {name: 'Jodenbreestraat', lon: 4.9011, lat: 52.3698, image: "../foto_praha/zmelik_jodenbreestraat.jpg"},
                {name: 'Jodenbuurt', lon: 4.9003, lat: 52.3699, image: "../foto_praha/zmelik_jodenbuurt.jpg"},
                {name: 'Warmoesstraat', lon: 4.8978, lat: 52.3738, image: "../foto_praha/zmelik_warmoesstraat.jpg"},
                {name: 'Zeedijk', lon: 4.9005, lat: 52.3736, image: "../foto_praha/zmelik_zeedijk.jpg"},
                {name: 'Herengracht', lon: 4.8936, lat: 52.368, image: "../foto_praha/zmelik_herengracht.jpg"},
                {name: 'Jordaan', lon: 4.8835, lat: 52.3745, image: "../foto_praha/zmelik_jordaan.jpg"},
                {name: 'Nieuwendijk', lon: 4.8952, lat: 52.3753, image: "../foto_praha/zmelik_nieuwendijk.jpg"},
                {name: 'Hotel Amstel', lon: 4.904, lat: 52.3642, image: "../foto_praha/zmelik_hotel_amstel.jpg"},
                {name: 'Cirkus Carré', lon: 4.9157, lat: 52.3609, image: "../foto_praha/zmelik_cirkus_carre.jpg"},
                {name: 'Hilversum', lon: 5.1638, lat: 52.2292, image: "../foto_praha/zmelik_hilversum.jpg"},
                {name: 'Den Haag', lon: 4.3007, lat: 52.0705, image: "../foto_praha/zmelik_den_haag.jpg"},
                {name: 'Leiden', lon: 4.497, lat: 52.1601, image: "../foto_praha/zmelik_leiden.jpg"},
                {name: 'Rotterdam', lon: 4.4792, lat: 51.9225, image: "../foto_praha/zmelik_rotterdam.jpg"},
                {name: 'Zandvoort', lon: 4.5338, lat: 52.3715, image: "../foto_praha/zmelik_zandvoort.jpg"},
                {name: 'Bern', lon: 7.4474, lat: 46.948, image: "../foto_praha/zmelik_bern.jpg"},
                {name: 'Basilej', lon: 7.5886, lat: 47.5596, image: "../foto_praha/zmelik_basilej.jpg"},
                {name: 'Prešpurk', lon: 17.1077, lat: 48.1486, image: "../foto_praha/zmelik_prespurk.png"},
                {name: 'Hamburk', lon: 10.0153, lat: 53.5753, image: "../foto_praha/zmelik_hambur.jpg"},
                {name: 'Londýn', lon: -0.1278, lat: 51.5074, image: "../foto_praha/zmelik_londyn.jpg"},
                {name: 'Paříž', lon: 2.3522, lat: 48.8566, image: "../foto_praha/zmelik_pariz.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Zandstraat', lon: 4.9022, lat: 52.3678, image: "../foto_praha/zmelik_zandstraat.jpg"},
            ]},]});
            break;
        case "andelzapadnihookna":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [13.5, 50.5], zoom: 2}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hradčany', lon: 14.3966, lat: 50.0909, image: "../foto_praha/hradcany.jpg"},
                {name: 'Malá Strana', lon: 14.4029, lat: 50.0878, image: "../foto_praha/malastrana.jpg"},
                {name: 'Strahov', lon: 14.388, lat: 50.0842, image: "../foto_praha/strahov.jpg"},
                {name: 'Staroměstské náměstí', lon: 14.4213, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Týnský chrám', lon: 14.4222, lat: 50.0872, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Vyšehrad', lon: 14.4179, lat: 50.0644, image: "../foto_praha/zmelik_vysehrad.jpg"},
                {name: 'Vltavský most', lon: 14.4115, lat: 50.0865, image: "../foto_praha/karluv_most_svejk.jpg"},
                {name: 'Karlštejn', lon: 14.1885, lat: 49.9379, image: "../foto_praha/zmelik_karlstejn.jpg"},
                {name: 'Krakov', lon: 19.945, lat: 50.0647, image: "../foto_praha/storzer_krakov.jpg"},
                {name: 'Londýn', lon: -0.1278, lat: 51.5074, image: "../foto_praha/zmelik_londyn.jpg"},
                {name: 'Mortlake', lon: -0.2574, lat: 51.4693, image: "../foto_praha/mortlake.jpg"},
                {name: 'Greenwich', lon: 0.0005, lat: 51.4769, image: "../foto_praha/greenwich.jpg"},
                {name: 'Richmond', lon: -0.3037, lat: 51.4613, image: "../foto_praha/richmond.jpg"},
                {name: 'Tower of London', lon: -0.0759, lat: 51.5081, image: "../foto_praha/tower_of_london.jpg"},
                {name: 'Cambridge', lon: 0.1218, lat: 52.2053, image: "../foto_praha/cambridge.jpg"},
                {name: 'Worcester', lon: -2.2216, lat: 52.1936, image: "../foto_praha/worcester.jpg"},
                {name: 'Uxbridge', lon: -0.4775, lat: 51.5449, image: "../foto_praha/uxbridge.jpeg"},
                {name: 'Vídeň', lon: 16.3721, lat: 48.2085, image: "../foto_praha/zmelik_viden.jpg"},
                {name: 'Graz', lon: 15.4395, lat: 47.0707, image: "../foto_praha/graz.png"},
                {name: 'Curych', lon: 8.5417, lat: 47.3769, image: "../foto_praha/storzer_curych.jpg"},
                {name: 'Paříž', lon: 2.3522, lat: 48.8566, image: "../foto_praha/zmelik_pariz.jpg"},
                {name: 'Brusel', lon: 4.3517, lat: 50.8503, image: "../foto_praha/brusel.jpg"},
                {name: 'Louvain', lon: 4.7009, lat: 50.8796, image: "../foto_praha/louvain.jpg"},
                {name: 'Utrecht', lon: 5.1214, lat: 52.0907, image: "../foto_praha/utrecht.jpg"},
                {name: 'Leiden', lon: 4.497, lat: 52.1601, image: "../foto_praha/leiden.jpg"},
                {name: 'Turín', lon: 7.6869, lat: 45.0703, image: "../foto_praha/turin.jpg"},
                {name: 'Alexandria', lon: 29.9187, lat: 31.2001, image: "../foto_praha/alexandria.jpg"},
                {name: 'Aleppo', lon: 37.1343, lat: 36.2021, image: "../foto_praha/aleppo.jpg"},
                {name: 'Madras', lon: 80.2707, lat: 13.0827, image: "../foto_praha/madras.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
        
            ]},]});
            break;
        default:
            document.getElementById("gis").src = "";
    }
}