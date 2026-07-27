function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "ivuvroman":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Ivův román'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // Praha - Ivo a Hana (úvod)
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    // příjezd na zámek, Hana představuje
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    // Lula
                    ["Ivo", "Lula"],
                    ["Lula", "Ivo"],
                    ["Ivo", "Lula"],
                    ["Lula", "Ivo"],
                    // Dvořák (Hanin muž) - flobertky
                    ["Dvořák", "Ivo"],
                    ["Ivo", "Dvořák"],
                    ["Dvořák", "Ivo"],
                    ["Ivo", "Dvořák"],
                    // Hana a Ivo v salonku
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    // první rozhovory Ivo - Štěpánka (u potoka, alej)
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // mše - Ivo a Hloh
                    ["Ivo", "Hloh"],
                    ["Hloh", "Ivo"],
                    ["Ivo", "Hloh"],
                    ["Hloh", "Ivo"],
                    // oběd - spor Ivo vs profesor
                    ["profesor", "Ivo"],
                    ["Ivo", "profesor"],
                    ["profesor", "Ivo"],
                    ["Ivo", "profesor"],
                    ["profesor", "Ivo"],
                    ["Ivo", "profesor"],
                    // Štěpánka, stařena (babka), Ivo v chatrči
                    ["Štěpánka", "stařena"],
                    ["stařena", "Štěpánka"],
                    ["stařena", "Ivo"],
                    ["Ivo", "stařena"],
                    ["stařena", "Ivo"],
                    ["Ivo", "stařena"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // Lula na návštěvě - Hana, inženýr (credo)
                    ["Lula", "Hana"],
                    ["Hana", "Lula"],
                    ["Lula", "Hana"],
                    ["Hana", "Lula"],
                    ["inženýr", "Lula"],
                    ["Lula", "inženýr"],
                    ["inženýr", "Lula"],
                    ["Lula", "inženýr"],
                    ["inženýr", "Ivo"],
                    ["Ivo", "inženýr"],
                    ["inženýr", "Ivo"],
                    ["Ivo", "inženýr"],
                    ["Hana", "Lula"],
                    // mlýn - Donát, Hloh, Ivo
                    ["Donát", "Ivo"],
                    ["Ivo", "Donát"],
                    ["Donát", "Ivo"],
                    ["Ivo", "Donát"],
                    ["Hloh", "Ivo"],
                    ["Ivo", "Hloh"],
                    ["Hloh", "Ivo"],
                    ["Ivo", "Hloh"],
                    // terasa - inženýr, Štěpánka, Ivo (růže)
                    ["inženýr", "Štěpánka"],
                    ["Štěpánka", "inženýr"],
                    ["inženýr", "Ivo"],
                    ["Ivo", "inženýr"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["inženýr", "Štěpánka"],
                    ["Štěpánka", "inženýr"],
                    ["Ivo", "inženýr"],
                    ["inženýr", "Ivo"],
                    // návštěva u virtuosa (1)
                    ["virtuos", "Ivo"],
                    ["Ivo", "virtuos"],
                    ["virtuos", "Ivo"],
                    ["Ivo", "virtuos"],
                    ["virtuos", "Ivo"],
                    ["Ivo", "virtuos"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // hospoda - Donát opilý, mužík
                    ["Donát", "Ivo"],
                    ["Ivo", "Donát"],
                    ["mužík", "Donát"],
                    ["Donát", "mužík"],
                    ["mužík", "Donát"],
                    ["Donát", "Ivo"],
                    ["Ivo", "Donát"],
                    ["Donát", "Ivo"],
                    ["Ivo", "Donát"],
                    // lavička - vyznání lásky
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // nová společnost - profesor, Kamiša, Sviták
                    ["profesor", "Ivo"],
                    ["Ivo", "profesor"],
                    ["Kamiša", "Ivo"],
                    ["Ivo", "Kamiša"],
                    ["Kamiša", "profesor"],
                    ["profesor", "Kamiša"],
                    ["Sviták", "Ivo"],
                    ["Ivo", "Sviták"],
                    // loutkové divadlo - Ivo, Štěpánka, Kamiša
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Kamiša", "Ivo"],
                    ["Ivo", "Kamiša"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // vodopád - Kamiša a knihy
                    ["Kamiša", "Ivo"],
                    ["Ivo", "Kamiša"],
                    ["Kamiša", "Ivo"],
                    ["Ivo", "Kamiša"],
                    // chatrč - Štěpánka a Ivo
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // výlet na Trosky - Hana a literát, Ivo a literát (Hus)
                    ["Hana", "literát"],
                    ["literát", "Hana"],
                    ["literát", "Ivo"],
                    ["Ivo", "literát"],
                    ["literát", "Ivo"],
                    ["Ivo", "literát"],
                    ["literát", "Ivo"],
                    ["Ivo", "literát"],
                    // Trosky - historky o duších (literát, inženýr, kočí)
                    ["literát", "kočí"],
                    ["kočí", "literát"],
                    ["kočí", "literát"],
                    ["literát", "kočí"],
                    ["inženýr", "kočí"],
                    ["kočí", "inženýr"],
                    ["inženýr", "kočí"],
                    ["kočí", "inženýr"],
                    ["inženýr", "Ivo"],
                    ["Ivo", "inženýr"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // Dvořák zve na hon
                    ["Dvořák", "Ivo"],
                    ["Ivo", "Dvořák"],
                    ["Dvořák", "Ivo"],
                    ["Ivo", "Dvořák"],
                    // Donát střízlivý, omluva
                    ["Donát", "Ivo"],
                    ["Ivo", "Donát"],
                    // Štěpánka a Ivo po tanci
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // virtuos (2) - záchvat, Štěpánka
                    ["virtuos", "Ivo"],
                    ["Ivo", "virtuos"],
                    ["virtuos", "Ivo"],
                    ["Ivo", "virtuos"],
                    ["virtuos", "Ivo"],
                    ["Štěpánka", "virtuos"],
                    ["virtuos", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // vdova (sestra Štěpánky) vítá Iva
                    ["vdova", "Ivo"],
                    ["Ivo", "vdova"],
                    // Jeník nosí vzkazy
                    ["Jeník", "Ivo"],
                    ["Ivo", "Jeník"],
                    ["Jeník", "Ivo"],
                    ["Ivo", "Jeník"],
                    // Štěpánka a Ivo před odjezdem
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // nádraží - inženýr, Ivo, Štěpánka, vlak do Prahy
                    ["inženýr", "Ivo"],
                    ["Ivo", "inženýr"],
                    ["inženýr", "Štěpánka"],
                    ["Štěpánka", "inženýr"],
                    ["Ivo", "inženýr"],
                    ["inženýr", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // Praha - doktor Bodský
                    ["doktor Bodský", "Ivo"],
                    ["Ivo", "doktor Bodský"],
                    ["doktor Bodský", "Ivo"],
                    ["Ivo", "doktor Bodský"],
                    ["doktor Bodský", "Ivo"],
                    ["Ivo", "doktor Bodský"],
                    // Praha - byt, ulice, Ivo a Štěpánka
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // přítelkyně - Dagmar a Štěpánka
                    ["Dagmar", "Ivo"],
                    ["Ivo", "Dagmar"],
                    ["Dagmar", "Štěpánka"],
                    ["Štěpánka", "Dagmar"],
                    // hotel Hana + atelier malíře
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "malíř"],
                    ["malíř", "Ivo"],
                    ["Ivo", "malíř"],
                    ["malíř", "Ivo"],
                    ["Hana", "malíř"],
                    ["malíř", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],
                    ["Ivo", "Hana"],
                    // plakát Richard - Štěpánka a Ivo
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // koncert a po něm
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // Richard - setkání, Štěpánka představuje
                    ["Štěpánka", "Richard"],
                    ["Richard", "Štěpánka"],
                    ["Štěpánka", "Richard"],
                    ["Richard", "Štěpánka"],
                    ["Štěpánka", "Richard"],
                    ["Richard", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Richard", "Ivo"],
                    ["Ivo", "Richard"],
                    // novinář - manifest
                    ["novinář", "Ivo"],
                    ["Ivo", "novinář"],
                    ["novinář", "Ivo"],
                    ["Ivo", "novinář"],
                    // neznámá žena v ulici
                    ["žena", "Ivo"],
                    ["Ivo", "žena"],
                    ["žena", "Ivo"],
                    // Richard studuje se Štěpánkou, Ivo přihlíží
                    ["Richard", "Štěpánka"],
                    ["Štěpánka", "Richard"],
                    ["Richard", "Štěpánka"],
                    ["Štěpánka", "Richard"],
                    ["Richard", "Ivo"],
                    ["Ivo", "Richard"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    // Štěpánka navštíví Ivův pokoj (závěr)
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    ["Štěpánka", "Ivo"],
                    ["Ivo", "Štěpánka"],
                    // závěr - vdova sděluje, virtuos
                    ["vdova", "Ivo"],
                    ["Ivo", "vdova"],
                    ["vdova", "Ivo"],
                    ["virtuos", "Ivo"],
                    // Hana - důvěrnice na vánoce
                    ["Ivo", "Hana"],
                    ["Hana", "Ivo"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Ivo',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Štěpánka',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Hana',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'virtuos',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Dvořák',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Lula',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'inženýr',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Hloh',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'profesor',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kamiša',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'stařena',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Donát',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'mužík',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'literát',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kočí',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Sviták',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Richard',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vdova',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Jeník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'doktor Bodský',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'novinář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'malíř',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'žena',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Dagmar',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
    default:
    document.getElementById("container-person").src = "";   
  }
}




