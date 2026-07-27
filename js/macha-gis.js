function showGraph(){
    var option = document.getElementById("cluster").value;

    switch (option){
        case "marinka":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Márinka'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            {type: 'mappoint',name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Petřín (1830) © V. Morstadt' , lon: 14.3951714, lat: 50.0834847, image: "../foto_praha/petrin.jpg"},
                {name: 'Staroměstská radnice (19. stol.) © V. Jansa' , lon: 14.4204928, lat: 50.0870422, image: "../foto_praha/staromestskaradnice.jpg"},
                {name: 'Staroměstské náměstí (1899) © V. Jansa' , lon: 14.4212597, lat: 50.0875378, image: "../foto_praha/staromestskenamesti.jpg"},
            ]},
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'Kanálská zahrada (40. roky 19. stol.) © Zmizelá Praha 7' , lon: 14.446031, lat: 50.078287, image: "../foto_praha/kanalka_macha.jpg"},
                {name: 'Na Františku (19. stol.) © V. Jansa' , lon: 14.4245067, lat: 50.0930842, image: "../foto_praha/nafrantisku_macha.jpg"},
                {name: 'Wimmerovy sady (19. stol.) © https://vysehradskej.cz' , lon: 14.4456286, lat: 50.0757158, image: "../foto_praha/wimmerovysady.jpg"},
                {name: 'novoměstský hřbitov (dnes součástí Olšan)' , lon: 14.4657472, lat: 50.0795925, image: "../foto_praha/novomestsky_hrbitov.jpg"},
                {name: 'Dolejší loďka (dřívější mlýny Na Franišku)' , lon: 14.4247203, lat: 50.0933331, image: "../foto_praha/dolejsilodka.jpg"},
                {name: 'Žitná brána (před 1875) © https://cs.wikipedia.org/' , lon: 14.4304697, lat: 50.0797689, image: "../foto_praha/zitna_brana.jpg"},
            ]},]});
            break;
        case "krivoklad":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}},mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Křivoklad'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false}, 
            {type: 'mappoint',name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Vltava © https://encyklopedie.praha2.cz' , lon: 14.4136900, lat: 50.0662314, image: "../foto_praha/vltava_macha.png"},
                {name: 'Petřín (1830) © V. Morstadt' , lon: 14.3951714, lat: 50.0834847, image: "../foto_praha/petrin.jpg"},
                {name: 'zlíchovská kaplička  - Kaple P. Marie Bolestné (před 1949) © https://cs.wikipedia.org' , lon: 14.4039331, lat: 50.0382592, image: "../foto_praha/zlichovska_kaplicka.png"},
                
            ]},
            {type: 'mappoint',name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: 'vršovický pahorek (1831) © Plán Prahy' , lon: 14.4634567, lat: 50.0686383, image: "../foto_praha/vrsovicke_plane.jpg"},
            ]},]});
            break;
        case "cikani":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.418540, 50.0874654], zoom: 5}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Máchovi Cikáni'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Benátky © https://magazin.aktualne.cz/', lon: 12.1937, lat: 45.4387, image: "../foto_praha/zmelik_benatky.jpg"},
                {name: 'Ponte Rialto © https://kuadros.com/', lon: 12.3359, lat: 45.438, image: "../foto_praha/zmelik_ponte_rialto.jpg"},
                {name: 'Mestre © https://cs.wikipedia.org/', lon: 12.2424, lat: 45.4906, image: "../foto_praha/zmelik_mestre.jpg"},
                {name: 'Lido © https://imagesofvenice.com/', lon: 12.37, lat: 45.4088, image: "../foto_praha/zmelik_lido.jpg"},
                {name: 'Palazzo Ducale © https://cs.wikipedia.org/', lon: 12.3401, lat: 45.4337, image: "../foto_praha/zmelik_palazzo_ducale.jpg"},
                {name: 'Most vzdechů © https://www.protravel.cz/', lon: 12.3409, lat: 45.4341, image: "../foto_praha/zmelik_most_vzdechu.jpg"},
                {name: 'chrám sv. Marka © https://www.istockphoto.com/', lon: 12.3397, lat: 45.4345, image: "../foto_praha/zmelik_sv_marek.jpg"},
                {name: 'Jaderské moře © https://magazin.aktualne.cz/', lon: 12.7, lat: 45.0, image: "../foto_praha/zmelik_jaderske_more.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [

            ]},]});
            break;
        case "karluvtejn":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.391744, 50.073211], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Karlův Tejn'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: "Karlštejn © https://www.hrady-zriceniny.cz/", lon: 14.188, lat: 49.9395, image: "../foto_praha/zmelik_karlstejn.jpg"},
                {name: "Vyšehrad © https://edu.ceskatelevize.cz/", lon: 14.4186, lat: 50.0641, image: "../foto_praha/zmelik_vysehrad.jpg"},
                {name: 'Zbraslav (na vedutě Jana Antonína Venuta klášter) © hrady-zriceniny.cz', lon: 14.3932561, lat: 49.9752750, image: "../foto_praha/storzer_zbraslav.JPG"},
                {name: 'Staroměstské náměstí (1899) © V. Jansa' , lon: 14.4212597, lat: 50.0875378, image: "../foto_praha/staromestskenamesti.jpg"},
                {name: ' Vltava', lon:  14.4109975, lat:  50.0840539, image: "../foto_praha/vltava.jpg"},
                {name: "Berounka © https://edu.ceskatelevize.cz/", lon: 14.1007511, lat: 49.9534436, image: "../foto_praha/zmelik_berounka.jpg"},
                {name: "Labe © https://ekolist.cz/", lon: 14.471, lat: 50.35, image: "../foto_praha/zmelik_labe.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
                {name: "Újezdská brána © https://zakrasnejsivimperk.cz/", lon: 14.406, lat: 50.0817, image: "../foto_praha/zmelik_ujezdska_brana.jpg"},
            ]},]});
            break;
        case "navrat":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [15.02595, 50.380375], zoom: 7}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Návrat'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Bílá hora © https://www.avcr.cz/', lon: 14.3175, lat: 50.0826, image: "../foto_praha/zmelik_bila_hora.jpg"},
                {name: 'Krkonoše © https://artplus.cz/', lon: 15.739, lat: 50.736, image: "../foto_praha/zmelik_krkonose.jpg"},
                {name: 'Labe (mladé, pramen u Krkonoš)', lon: 15.6095, lat: 50.6274, image: "../foto_praha/zmelik_labe.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "svetsmyslny":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [15.7191, 50.8897], zoom: 10}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Svět smyslný'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hirschberg (dnes Jelenia Góra) © https://cs.wikipedia.org/', lon: 15.7282, lat: 50.9044, image: "../foto_praha/zmelik_jeleni_hora.jpg"},
                {name: 'Perštejnská hora se zříceninou © https://cs.wikipedia.org/', lon: 15.6446111, lat: 50.8358472, image: "../foto_praha/zmelik_perstejnska_hora.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "svetzasly":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [15.1334, 50.586425], zoom: 7}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Svět zašlý'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Hirschberg (dnes Jelenia Góra) © https://cs.wikipedia.org/', lon: 15.7282, lat: 50.9044, image: "../foto_praha/zmelik_jeleni_hora.jpg"},
                {name: 'Perštejnská hora se zříceninou © https://cs.wikipedia.org/', lon: 15.6446111, lat: 50.8358472, image: "../foto_praha/zmelik_perstejnska_hora.jpg"},
                {name: 'Bezděz', lon: 14.7193, lat: 50.5378, image: "../foto_praha/zmelik_bezdez.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "valdice":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [15.373408, 50.478258], zoom: 9}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Valdice'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Jičín', lon: 15.3513, lat: 50.4367, image: "../foto_praha/zmelik_jicin.jpg"},
                {name: 'Krkonoše', lon: 15.739, lat: 50.736, image: "../foto_praha/zmelik_krkonose.jpg"},
                {name: 'Kumburk', lon: 15.3628, lat: 50.4952, image: "../foto_praha/zmelik_kumburk.jpg"},
                {name: 'Bradlec', lon: 15.31, lat: 50.486, image: "../foto_praha/zmelik_bradlec.jpg"},
                {name: 'Tábor', lon: 15.4272, lat: 50.4615, image: "../foto_praha/zmelik_tabor.jpg"},
                {name: 'Veliš', lon: 15.2883, lat: 50.41, image: "../foto_praha/zmelik_velis.jpg"},
                {name: 'Zebín', lon: 15.3497, lat: 50.4249, image: "../foto_praha/zmelik_zebin.jpg"},
                {name: 'Valdice (kartuziánský klášter)', lon: 15.3431, lat: 50.427, image: "../foto_praha/zmelik_valdice.jpg"},
                {name: 'Trosky', lon: 15.2683, lat: 50.5152, image: "../foto_praha/zmelik_trosky.jpg"},
                {name: 'Pecka', lon: 15.7109, lat: 50.4919, image: "../foto_praha/zmelik_pecka.jpg"},
                {name: 'Mladá Boleslav', lon: 14.9103, lat: 50.4147, image: "../foto_praha/zmelik_mlada_boleslav.jpg"},
                {name: 'Radim ', lon: 15.42, lat: 50.44, image: "../foto_praha/zmelik_radime.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "vecernabezdezu":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.680125, 50.54265], zoom: 12}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Večer na Bezdězu'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Bezděz', lon: 14.7193, lat: 50.5378, image: "../foto_praha/zmelik_bezdez.jpg"},
                {name: 'Hiršperský rybník (dnes Máchovo jezero)', lon: 14.662, lat: 50.5416, image: "../foto_praha/zmelik_hirsperskyrybnk.jpg"},
                {name: 'Hiršperk (dnes Doksy)', lon: 14.6742, lat: 50.5612, image: "../foto_praha/zmelik_doksy.jpg"},
                {name: 'Jestřábí', lon: 14.665, lat: 50.53, image: "../foto_praha/zmelik_jestrabi.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;
        case "viasilviasilovic":
            Highcharts.mapChart('gis-container', {chart: {margin: 0}, title: {text: ''}, navigation: {buttonOptions: {align: 'left', theme: {stroke: '#e6e6e6'}}}, mapNavigation: {enabled: true, buttonOptions: {alignTo: 'spacingBox'}}, mapView: {center: [14.58816, 50.12934], zoom: 8}, tooltip: {useHTML: true, headerFormat: "{point.point.name}", pointFormat: '<br/><img src="{point.image}"/>'}, legend: {enabled: true, title: {text: 'Viasil Viasilovič'}, align: 'right', symbolWidth: 20, symbolHeight: 20, itemStyle: {textOutline: '1 1 1px rgba(255,255,255)'}, backgroundColor: 'rgba(255,255,255,0.8)', float: true, borderColor: '#e6e6e6', borderWidth: 1, borderRadius: 2, itemMarginBottom: 5}, plotOptions: {mappoint: {dataLabels: {enabled: false}}}, series: [{type: 'tiledwebmap', name: '', provider: {type: 'OpenStreetMap'}, showInLegend: false},
            {type: 'mappoint', name: 'existing place', marker: {symbol: 'url(../img/placeholder.png)', width: 24, height: 24}, data: [
                {name: 'Karlštejn', lon: 14.188, lat: 49.9393, image: "../foto_praha/zmelik_karlstejn.jpg"},
                {name: 'Berounka (u Karlštejna)', lon: 14.18, lat: 49.9345, image: "../foto_praha/zmelik_berounka.jpg"},
                {name: 'Zbraslavský klášter', lon: 14.396, lat: 49.9614, image: "../foto_praha/zmelik_zbraslavsky_klaster.jpg"},
                {name: 'Krkonoše', lon: 15.739, lat: 50.736, image: "../foto_praha/zmelik_krkonose.jpg"},
            ]},
            {type: 'mappoint', name: 'vanished place', marker: {symbol: 'url(../img/maps-and-flags.png)', width: 24, height: 24}, data: [
            ]},]});
            break;

        default:
            document.getElementById("gis").src = "";
    }
}