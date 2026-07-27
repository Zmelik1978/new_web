function showGIS(){
    var option = document.getElementById("gis-cluster").value;
    // switch method
    switch (option){
        case "cernypetricek":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.406089, 50.082619], zoom: 12}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Koňský trh (dnes Václavské náměstí)', lon: 14.42848, lat: 50.08107, image: "../foto_praha/Storzer_vaclavak.jpg"},
                {name: 'Můstek', lon: 14.42158, lat: 50.08398, image: "../foto_praha/mustek.jpg"},
                {name: 'Kostel sv. Havla (Havelské tržiště)', lon: 14.42192, lat: 50.08549, image: "../foto_praha/kostel_sv_havla.jpg"},
                {name: 'Prašná brána', lon: 14.42807, lat: 50.08756, image: "../foto_praha/storzer_prasnab.jpg"},
                {name: 'Letohrádek Hvězda', lon: 14.3236, lat: 50.0839, image: "../foto_praha/hvezda.jpg"},
                {name: 'Břevnovský klášter sv. Markéty', lon: 14.3576, lat: 50.0846, image: "../foto_praha/brevnov_svejk.jpg"},
                {name: 'Panská ulice', lon: 14.4266, lat: 50.0862, image: "../foto_praha/panska_svejk.jpg"},
                {name: 'Smíchov', lon: 14.404, lat: 50.071, image: "../foto_praha/smichov.jpg"},
                {name: 'Podskalí', lon: 14.4156, lat: 50.0665, image: "../foto_praha/zmelik_podskali.jpg"},
                {name: 'Kamenný most (dnes Karlův most)', lon: 14.41128, lat: 50.08651, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Újezd (Oujezd), Malá Strana', lon: 14.4045, lat: 50.083, image: "../foto_praha/ujezd.jpg"},
                {name: 'Pražský hrad', lon: 14.4009, lat: 50.0911, image: "../foto_praha/hradcany.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Hospoda U Beránka na Koňském trhu', lon: 14.4276, lat: 50.0823, image: "../foto_praha/Storzer_vaclavak.jpg"},
                {name: 'Stará socha sv. Václava na Koňském trhu (do 1879)', lon: 14.4247, lat: 50.0822, image: "../foto_praha/Storzer_vaclavak.jpg"},
                {name: 'Strahovská brána (zbořená)', lon: 14.389, lat: 50.0853, image: "../foto_praha/strahovskabrana.png"},
                {name: 'Řetězový most (most císaře Františka I., zbořen 1898)', lon: 14.412, lat: 50.0812, image: "../foto_praha/retezovymost.jpg"},
            ]},]});
            break;
        case "zvoneckovakralovna":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4163, 50.0811], zoom: 11}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Dobytčí trh (dnes Karlovo náměstí)', lon: 14.4205, lat: 50.0758, image: "../foto_praha/Storzer_vaclavak.jpg"},
                {name: 'Novoměstská radnice', lon: 14.421, lat: 50.0794, image: "../foto_praha/novomestska_radnice.jpg"},
                {name: 'Spálená ulice', lon: 14.4195, lat: 50.0808, image: "../foto_praha/spalena_ulice.jpeg"},
                {name: 'Emauzský klášter (Na Slovanech)', lon: 14.4178, lat: 50.0664, image: "../foto_praha/storzer_emauzy.png"},
                {name: 'Vyšehrad', lon: 14.4176, lat: 50.0641, image: "../foto_praha/vysehrad.jpg"},
                {name: 'Podskalí', lon: 14.415, lat: 50.066, image: "../foto_praha/zmelik_podskali.jpg"},
                {name: 'Staroměstské náměstí', lon: 14.4213, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Týnský chrám', lon: 14.4223, lat: 50.0879, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Karlův most', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Ostruhová ulice (dnes Nerudova)', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Pražský hrad (k svatému Vítu)', lon: 14.4006, lat: 50.0911, image: "../foto_praha/hradcany.jpg"},
                {name: 'Strahovský klášter', lon: 14.3886, lat: 50.0855, image: "../foto_praha/strahov.jpg"},
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Bílá hora (kostelíček bělohorský)', lon: 14.3186, lat: 50.0814, image: "../foto_praha/bila_hora_kostelik.jpg"},
                {name: 'Vídeň', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
                {name: 'Paříž', lon: 2.3522, lat: 48.8566, image: "../foto_praha/zmelik_pariz.jpg"},
                {name: 'Řím', lon: 12.4964, lat: 41.9028, image: "../foto_praha/rim.jpg"},
                {name: 'Příbram', lon: 14.0098, lat: 49.6896, image: "../foto_praha/pribram.jpg"},
                {name: 'Strakonice', lon: 13.9024, lat: 49.2601, image: "../foto_praha/strakonice.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Dům U Pěti zvonečků (Dobytčí trh, dnes Karlovo náměstí)', lon: 14.4196, lat: 50.0772, image: "../foto_praha/nove-mesto-a-karlovo-namesti.jpg"},
                {name: 'Klášter sv. Kateřiny (letohrádek pod Kateřinkami)', lon: 14.4235, lat: 50.0726, image: "../foto_praha/klaster_sv_kateriny.jpg"},
                {name: 'Staroměstské mlýny (u sv. Jana, břeh Vltavy)', lon: 14.4135, lat: 50.0856, image: "../foto_praha/staromestske_mlyny.jpg"},
            ]},]});
            break;
        case "prvnicseka":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4115, 50.0830], zoom: 12}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Staroměstské náměstí', lon: 14.4209, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Týnský chrám (kostel Matky Boží před Týnem)', lon: 14.4225, lat: 50.0879, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Týnská ulička', lon: 14.4233, lat: 50.0884, image: "../foto_praha/tynskaulice.jpg"},
                {name: 'Celetná ulice', lon: 14.425, lat: 50.0868, image: "../foto_praha/zmelik_celetna.jpg"},
                {name: 'Ostruhová ulice (dnes Nerudova)', lon: 14.3997, lat: 50.0884, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Mostecká ulice (Malá Strana)', lon: 14.406, lat: 50.0875, image: "../foto_praha/mosteckaulice.jpg"},
                {name: 'Pohořelec', lon: 14.3897, lat: 50.0886, image: "../foto_praha/pohorelec.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.09, image: "../foto_praha/hradcany.jpg"},
                {name: 'Vltava (řeka)', lon: 14.4115, lat: 50.0855, image: "../foto_praha/vltava.jpg"},
                {name: 'Pankrác (kostel sv. Pankráce)', lon: 14.428, lat: 50.064, image: "../foto_praha/kostel_pankrac.jpg"},
                {name: 'Bílá hora (kostel P. M. Vítězné)', lon: 14.3206, lat: 50.084, image: "../foto_praha/bila_hora_kostelik.jpg"},
                {name: 'Klášter sv. Kateřiny (Kateřinky)', lon: 14.4231, lat: 50.0708, image: "../foto_praha/klaster_sv_kateriny.jpg"},
                {name: 'Klášter uršulinek (sv. Voršily)', lon: 14.415, lat: 50.082, image: "../foto_praha/klaster_ursulinek.jpg"},
                {name: 'Svatomarkétský (Břevnovský) klášter', lon: 14.358, lat: 50.084, image: "../foto_praha/brevnov_svejk.jpg"},
                {name: 'Svatá hora u Příbrami', lon: 14.019, lat: 49.69, image: "../foto_praha/svata_hora_u_pribrami.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Poříčská brána (zaniklá, Nové Město)', lon: 14.429, lat: 50.09, image: "../foto_praha/storzer_poricskab.png"},
            ]},]});
            break;
        case "mladapanizapletalova":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4025, 50.0889], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Pražský hrad (zámek)', lon: 14.4001, lat: 50.0905, image: "../foto_praha/hradcany.jpg"},
                {name: 'Katedrála sv. Víta', lon: 14.4006, lat: 50.0909, image: "../foto_praha/svatovitskavez.jpg"},
                {name: 'Staré Město', lon: 14.421, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'Uhelný trh', lon: 14.4186, lat: 50.0838, image: "../foto_praha/uhelny_trh.jpg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Prašný most', lon: 14.399, lat: 50.0925, image: "../foto_praha/prasnymost.jpg"},
                {name: 'Mariánské hradby', lon: 14.401, lat: 50.0945, image: "../foto_praha/marianskehradby.jpg"},
                {name: 'Kostel sv. Voršily (uršulinský klášter)', lon: 14.4145, lat: 50.0817, image: "../foto_praha/klaster_ursulinek.jpg"},
                {name: 'Brandýs nad Labem (Brandýsko)', lon: 14.661, lat: 50.186, image: "../foto_praha/brandys_nad_labem.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Strahovská brána (zbořena 1892)', lon: 14.387, lat: 50.0866, image: "../foto_praha/strahovskabrana.png"},
            ]},]});
            break;
        case "skapulir":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4182, 50.08755], zoom: 12}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Dlouhá třída (Dlouhá ulice)', lon: 14.4263, lat: 50.0904, image: "../foto_praha/dlouha_svejk.jpg"},
                {name: 'Staroměstské náměstí', lon: 14.421, lat: 50.0875, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: 'Chrám Matky Boží před Týnem', lon: 14.4225, lat: 50.0879, image: "../foto_praha/tynskychram.jpg"},
                {name: 'Staroměstská radnice', lon: 14.4203, lat: 50.087, image: "../foto_praha/staromestskaradnice.jpg"},
                {name: 'Klášter sv. Anežky Na Františku', lon: 14.4188, lat: 50.0918, image: "../foto_praha/anezsky_klaster.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Újezd', lon: 14.404, lat: 50.083, image: "../foto_praha/ujezd.jpg"},
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Vyšehrad', lon: 14.4176, lat: 50.0641, image: "../foto_praha/vysehrad.jpg"},
                {name: 'Vinohrady', lon: 14.448, lat: 50.0755, image: "../foto_praha/vinohrady_svejk.jpg"},
                {name: 'Stromovka (Královská obora)', lon: 14.4133, lat: 50.1055, image: "../foto_praha/storzer_stromovka.jpg"},
                {name: 'Košíře (vinice Hrazanů)', lon: 14.376, lat: 50.0686, image: "../foto_praha/Storzer_kosire.png"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Mariánský sloup (1650–1918), Staroměstské náměstí', lon: 14.4208, lat: 50.0876, image: "../foto_praha/marianska_sloup.jpg"},
            ]},]});
            break;
        case "nakosatkach":
    case "nakosatkach":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4075, 50.0853], zoom: 9}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Vltava', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Kamenný most (dnes Karlův most)', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Petřín', lon: 14.3951, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Na Poříčí', lon: 14.4337, lat: 50.0905, image: "../foto_praha/storzer_porici.jpg"},
                {name: 'Podbaba', lon: 14.3897, lat: 50.1183, image: "../foto_praha/storzer_podbaba.jpg"},
                {name: 'Zbraslav', lon: 14.3917, lat: 49.9747, image: "../foto_praha/storzer_zbraslav.JPG"},
                {name: 'Vejtoň (Výtoň)', lon: 14.4156, lat: 50.0648, image: "../foto_praha/vyton.jpg"},
                {name: 'Poštovská ulice (dnes Karoliny Světlé)', lon: 14.414, lat: 50.0846, image: "../foto_praha/postovska_ulice.jpg"},
                {name: 'Klášter Anglických panen, Malá Strana', lon: 14.4036, lat: 50.0862, image: "../foto_praha/klaster_anglickych_panen_mala_strana.jpg"},
                {name: 'Františkovo nábřeží (dnes Smetanovo nábřeží)', lon: 14.4135, lat: 50.081, image: "../foto_praha/frantiskovo_nabrezi.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Stará solnice (Podskalí, zaniklá)', lon: 14.4134536, lat: 50.0811994, image: "../foto_praha/stara_solnice.jpg"},
            ]},]});
            break;
        default:
            document.getElementById("gis-container").src = "";
    }
}