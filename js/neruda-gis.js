function showGraph(){
    var option = document.getElementById("gis-cluster").value;

    switch (option){
        case "tydenvtichemdome":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.40, 49.0], zoom: 6}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Ostruhová ulice', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Hradec Králové', lon: 15.8328, lat: 50.2092, image: "../foto_praha/hradec_kralove.jpeg"},
                {name: 'Štýrský Hradec', lon: 15.4395, lat: 47.0707, image: "../foto_praha/graz.png"},
                {name: 'Vídeň', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
                {name: 'Dalmácie', lon: 16.4402, lat: 43.5081, image: "../foto_praha/dalmacie.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "panrysanekapanschlegl":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4040, 50.0879], zoom: 14}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Malá Strana', lon: 14.4040, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Malostranská mostecká věž', lon: 14.4090, lat: 50.0866, image: "../foto_praha/mostecka_vez.jpg"},
                {name: 'Mostecká ulice', lon: 14.4055, lat: 50.0877, image: "../foto_praha/mosteckaulice.jpg"},
                {name: 'Lázeňská ulice', lon: 14.4051, lat: 50.0871, image: "../foto_praha/lazenska_ulice.jpg"},
                {name: 'Karmelitánská ulice', lon: 14.4030, lat: 50.0855, image: "../foto_praha/karmelitanska_ulice.jpg"},
                {name: 'Ostruhová ulice (dnes Nerudova)', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Mariánské hradby', lon: 14.4045, lat: 50.0925, image: "../foto_praha/marianskehradby.jpg"},
                {name: 'kostel sv. Mikuláše', lon: 14.4036, lat: 50.0879, image: "../foto_praha/sv_mikulas.jpg"},
                {name: 'Malostranské náměstí', lon: 14.4034, lat: 50.0878, image: "../foto_praha/storzer_malostransken.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'hostinec U Štajniců — roh Mostecké a Lázeňské', lon: 14.4054, lat: 50.0874, image: "../foto_praha/u_stajnicu.jpeg"},
                {name: 'vinárna Cardova — Ostruhová/Nerudova', lon: 14.4010, lat: 50.0884, image: "../foto_praha/ostruhova.jpg"},
            ]},]});
            break;
        case "privedlazebrakanamizinu":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4050, 50.0876], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Malá Strana', lon: 14.4040, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Staré Město', lon: 14.4210, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'Ostruhová ulice (dnes Nerudova)', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Svatojanský vrch (spodní Nerudova/Úvoz)', lon: 14.4020, lat: 50.0880, image: "../foto_praha/svatojansky_vrch.jpg"},
                {name: 'Malostranské náměstí (socha sv. Trojice)', lon: 14.4034, lat: 50.0878, image: "../foto_praha/storzer_malostransken.jpg"},
                {name: 'Kostel sv. Mikuláše (Malá Strana)', lon: 14.4030, lat: 50.0879, image: "../foto_praha/sv_mikulas.jpg"},
                {name: 'Katedrála sv. Víta (lev na věži)', lon: 14.4006, lat: 50.0905, image: "../foto_praha/storzer_svaty_vit.jpg"},
                {name: 'Vyšehrad', lon: 14.4176, lat: 50.0641, image: "../foto_praha/zmelik_vysehrad.jpg"},
                {name: 'Kamenný most (dnes Karlův most)', lon: 14.4114, lat: 50.0865, image: "../foto_praha/karluvmost.jpg"},
                {name: 'Na Františku', lon: 14.4185, lat: 50.0905, image: "../foto_praha/storzer_na_frantisku.jpg"},
                {name: 'Bruska (Brusnice, pod Hradem)', lon: 14.4015, lat: 50.0918, image: "../foto_praha/brusnice.jpg"},
                {name: 'Stromovka (Královská obora)', lon: 14.4163, lat: 50.1057, image: "../foto_praha/storzer_stromovka.jpg"},
                {name: 'Klášter Karmelitánů (P. M. Vítězné)', lon: 14.4036, lat: 50.0857, image: "../foto_praha/karmelitani.jpg"},
                {name: 'Křížovnické náměstí (plácek)', lon: 14.4135, lat: 50.0863, image: "../foto_praha/storzer_krizovnicke_n.jpg"},
                {name: 'Klementinum', lon: 14.4150, lat: 50.0868, image: "../foto_praha/storzer_klementinum.jpg"},
                {name: 'Újezd (Oujezd)', lon: 14.4045, lat: 50.0828, image: "../foto_praha/ujezd.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Dělostřelecká (kanonýrská) kasárna na Újezdě – zaniklá', lon: 14.4040, lat: 50.0822, image: "../foto_praha/ujezdska_kasarna.jpg"},
            ]},]});
            break;
        case "omekkemsrdcipanirusky":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4040, 50.0875], zoom: 14}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Malá Strana, Praha', lon: 14.4040, lat: 50.0884, image: "../foto_praha/mala_strana.jpg"},
                {name: 'Chrám sv. Víta, Pražský hrad', lon: 14.4006, lat: 50.0909, image: "../foto_praha/sv_vit.jpg"},
                {name: 'Malostranské náměstí, Praha', lon: 14.4036, lat: 50.0879, image: "../foto_praha/malostranske_namesti.jpg"},
                {name: 'Mostecká ulice, Malá Strana', lon: 14.4053, lat: 50.0873, image: "../foto_praha/mostecka.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Oujezdská (Újezdská) brána (zbořena 1862)', lon: 14.4045, lat: 50.0817, image: "../foto_praha/zmelik_ujezdska_brana.jpg"},
                {name: 'zahrada Gráfovská (Gráfovka), dnešní Hellichova ulice', lon: 14.4028556, lat: 50.0843594, image: "../foto_praha/grafovka.jpg"},
                {name: 'Selský trh, dnešní Tržiště', lon: 14.402304, lat: 50.087301, image: "../foto_praha/selsky_trh.jpg"},
                {name: 'malostranský hřbitov', lon: 14.3917, lat:  50.0717, image: "../foto_praha/malostransky_hrbitov.jpg"},
            ]},]});
            break;
        case "vecernisplechty":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.404, 50.088], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Ostruhová ulice (dnes Nerudova)', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Dům U dvou slunců (Nerudova 233/47)', lon: 14.3995, lat: 50.08846, image: "../foto_praha/dum_u_dvou_sluncu.jpg"},
                {name: 'Dům U Hlubokého sklepa (Nerudova 235)', lon: 14.3992, lat: 50.08851, image: "../foto_praha/dum_u_hlubokeho_sklepa.JPG"},
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Malá Strana', lon: 14.404, lat: 50.088, image: "../foto_praha/malastrana.jpg"},
                {name: 'Staré Město', lon: 14.421, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'Valdštejnská zahrada', lon: 14.406, lat: 50.0903, image: "../foto_praha/valdstejnsky_palac.jpg"},
                {name: 'Senovážná ulice', lon: 14.431, lat: 50.0866, image: "../foto_praha/senovazna_ulice_nove_mesto.jpg"},
                {name: 'Nové zámecké schody, Malá Strana', lon: 14.4015, lat: 50.0903, image: "../foto_praha/novezameckeschody.jpg"},
                {name: 'Šárka (Divoká Šárka)', lon: 14.323, lat: 50.095, image: "../foto_praha/sarka.jpeg"},
                {name: 'Rakovník', lon: 13.7336, lat: 50.1036, image: "../foto_praha/storzer_rakovnik.JPG"},
                {name: 'Klatovy', lon: 13.295, lat: 49.3953, image: "../foto_praha/zmelik_klatovy.png"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "doktorkazisvet":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4047, 50.0826], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Újezd (Oujezd)', lon: 14.4043, lat: 50.0826, image: "../foto_praha/ujezd.jpg"},
                {name: 'Malá Strana', lon: 14.4040, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'Staré Město', lon: 14.4210, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'sady na Mariánských hradbách', lon: 14.4075, lat: 50.0930, image: "../foto_praha/marianskehradby.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Újezdská brána', lon: 14.4053, lat: 50.0808, image: "../foto_praha/zmelik_ujezdska_brana.jpg"},
                {name: 'hostinec U Vápenice', lon: 14.4047, lat: 50.0804, image: "../foto_praha/zmelik_ujezdska_brana.jpg"},
                {name: 'zábranské hroby – Malostranský hřbitov', lon: 14.3877, lat: 50.0719, image: "../foto_praha/malostransky_hrbitov.jpg"},
            ]},]});
            break;
        case "hastrman":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4006, 50.0887], zoom: 8}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'katedrála sv. Víta', lon: 14.4006, lat: 50.0903, image: "../foto_praha/katedrala_sv_vita.jpg"},
                {name: 'Ostruhová ulice', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Svatomikulášské (Malostranské) náměstí', lon: 14.4036, lat: 50.0879, image: "../foto_praha/storzer_malostransken.jpg"},
                {name: 'U Dvou slunců (Nerudova 47), Praha', lon: 14.3979, lat: 50.0887, image: "../foto_praha/dum_u_dvou_sluncu.jpg"},
                {name: 'Vltava – jezy vltavské', lon: 14.411, lat: 50.086, image: "../foto_praha/vltava.jpg"},
                {name: 'Bruská brána', lon: 14.4045, lat: 50.0922, image: "../foto_praha/storzer_bruskab.jpg"},
                {name: 'Turnov', lon: 15.1577, lat: 50.5874, image: "../foto_praha/turnov.jpg"},
                {name: 'hora Kozákov (u Turnova)', lon: 15.2283, lat: 50.6361, image: "../foto_praha/hora_kozakov.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "jaksinakourilpanvorelpenovku":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.398, 50.082], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Ostruhová ulice (dnes Nerudova) – hlavní dějiště, Malá Strana', lon: 14.4007, lat: 50.0883, image: "../foto_praha/ostruhova.jpg"},
                {name: 'Malá Strana, Praha', lon: 14.4040, lat: 50.0884, image: "../foto_praha/malastrana.jpg"},
                {name: 'U Hlubokého sklepa – hospoda, Malá Strana (orient.)', lon: 14.4022, lat: 50.0887, image: "../foto_praha/u_hlubokeho_sklepa.JPG"},
                {name: 'Košíře', lon: 14.3760, lat: 50.0668, image: "../foto_praha/Storzer_kosire.png"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Strahovská brána', lon: 14.3905, lat: 50.0876, image: "../foto_praha/strahovskabrana.png"},
            ]},]});
            break;
        case "utrililii":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.3898, 50.0871], zoom: 14}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hostinec U tří lilií, Pohořelec', lon: 14.3878142, lat: 50.0871461, image: "../foto_praha/u_tri_lilii.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Strahovská brána', lon: 14.3888, lat: 50.0862, image: "../foto_praha/strahovskabrana.png"},
            ]},]});
            break;
        case "svatovaclavskamse":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4008, 50.090833], zoom: 14}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Katedrála sv. Víta', lon: 14.400556, lat: 50.090833, image: "../foto_praha/svatovitskavez.jpg"},
                {name: 'Bazilika sv. Jiří / svatojirské kasárny, Pražský hrad', lon: 14.402778, lat: 50.091111, image: "../foto_praha/bazilika_sv_jiri.jpg"},
                {name: 'Loretánské náměstí', lon: 14.3919, lat: 50.0889, image: "../foto_praha/Storzer_Loretánské náměstí.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [

            ]},]});
            break;
        case "jaktoprislo":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4039, 50.0922], zoom: 9}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Na Příkopech', lon: 14.4258, lat: 50.0843, image: "../foto_praha/zmelik_na_prikope.jpg"},
                {name: 'Citadela belvedérská / Belvedér', lon: 14.4042, lat: 50.0928, image: "../foto_praha/zmelik_na_prikope.jpg"},
                {name: 'Bruská brána', lon: 14.4036, lat: 50.0936, image: "../foto_praha/storzer_bruskab.jpg"},
                {name: 'Chotkovy sady', lon: 14.4118, lat: 50.093, image: "../foto_praha/chotkovysady.jpg"},
                {name: 'Jelení příkop', lon: 14.3986, lat: 50.0916, image: "../foto_praha/jelenniprikop.jpg"},
                {name: 'Kostel sv. Tomáše, Malá Strana', lon: 14.4064, lat: 50.0888, image: "../foto_praha/kostel_sv_tomase_mala_strana.jpg"},
                {name: 'Valdštejnská ulice', lon: 14.4055, lat: 50.09, image: "../foto_praha/storzer_valdstejnska.jpeg"},
                {name: 'Bubeneč', lon: 14.41, lat: 50.1025, image: "../foto_praha/storzer_bubenec.jpeg"},
                {name: 'Podbaba', lon: 14.392, lat: 50.1175, image: "../foto_praha/storzer_podbaba.jpg"},
                {name: 'Jeneč', lon: 14.2222, lat: 50.0772, image: "../foto_praha/jenec.jpg"},
                {name: 'Bílá hora', lon: 14.3175, lat: 50.0838, image: "../foto_praha/zmelik_bila_hora.jpg"},
                {name: 'Rakovník', lon: 13.733, lat: 50.1036, image: "../foto_praha/storzer_rakovnik.jpg"},
                {name: 'Německý Brod (dnes Havlíčkův Brod)', lon: 15.58, lat: 49.6079, image: "../foto_praha/storzer_havl_brod.jpg"},
                {name: 'Moravské pole (Marchfeld)', lon: 16.75, lat: 48.3, image: "../foto_praha/moravske_pole.jpg"},
                {name: 'Vídeň', lon: 16.3738, lat: 48.2082, image: "../foto_praha/zmelik_viden.jpg"},
                {name: 'Senovážná ulice', lon: 14.4290697, lat: 50.0865467, image: "../foto_praha/senovazna_ulice_nove_mesto.jpg"},
                {name: 'Hluboká cesta (dnes Úvoz)', lon: 14.3938433, lat: 50.0880747, image: "../foto_praha/uvoz.jpg"},
                {name: 'Selský trh, dnešní Tržiště', lon: 14.402304, lat: 50.087301, image: "../foto_praha/selsky_trh.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Mariánské hradby', lon: 14.411, lat: 50.0945, image: "../foto_praha/marianskehradby.jpg"},
                {name: 'Strahovská brána', lon: 14.3895, lat: 50.086, image: "../foto_praha/strahovskabrana.png"},
                {name: 'kavárna Panorama', lon: 14.407454, lat: 50.095938, image: "../foto_praha/kavarna_panorama.jpg"},
            ]},]});
            break;
        case "psanooletosnichdusickach":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.4014, 50.0876], zoom: 13}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Košířský hřbitov', lon: 14.3823, lat: 50.0722, image: "../foto_praha/kosirskyhrbitov.jpg"},
                {name: 'Vlašská ulice, Malá Strana', lon: 14.3976, lat: 50.0869, image: "../foto_praha/vlasska_ulice.jpg"},
                {name: 'Svatojanský vršek (dnes Janský vršek)', lon: 14.3997, lat: 50.0872, image: "../foto_praha/svatojansky_vrch.jpg"},
                {name: 'Kostel sv. Mikuláše, Malá Strana', lon: 14.4031, lat: 50.088, image: "../foto_praha/sv_mikulas.jpg"},
                {name: 'Mariánské hradby', lon: 14.4042, lat: 50.0931, image: "../foto_praha/marianskehradby.jpg"},
                {name: 'Na Františku, Staré Město', lon: 14.4185, lat: 50.0907, image: "../foto_praha/nafrantisku_macha.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Mikulášská farní škola, Malá Strana', lon: 14.4031917, lat: 50.0885725, image: "../foto_praha/mikulaska_farni_skola.jpg"},
            ]},]});
            break;
        case "figurky":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.404, 50.0857], zoom: 12}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: ''}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Malá Strana', lon: 14.404, lat: 50.0884, image: "../foto_praha/malastrana_praha.jpg"},
                {name: 'Hradčany', lon: 14.399, lat: 50.0894, image: "../foto_praha/hradcany.jpg"},
                {name: 'Petřín', lon: 14.3915, lat: 50.0835, image: "../foto_praha/petrin.jpg"},
                {name: 'Újezd (dříve Oujezdská ulice), Malá Strana', lon: 14.4046, lat: 50.0823, image: "../foto_praha/ujezd.jpg"},
                {name: 'Staré Město', lon: 14.421, lat: 50.0875, image: "../foto_praha/staremesto.jpg"},
                {name: 'Josefov', lon: 14.418, lat: 50.09, image: "../foto_praha/storzer_josefov.jpg"},
                {name: 'Na Příkopě', lon: 14.4255, lat: 50.0855, image: "../foto_praha/zmelik_na_prikope.jpg"},
                {name: 'Smíchov', lon: 14.404, lat: 50.071, image: "../foto_praha/smichov.jpg"},
                {name: 'Vltava', lon: 14.4128, lat: 50.083, image: "../foto_praha/vltava.jpg"},
                {name: 'Obora Hvězda', lon: 14.35, lat: 50.0857, image: "../foto_praha/hvezda.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [

            ]},]});
            break;
        default:
            document.getElementById("gis").src = "";
    }
}