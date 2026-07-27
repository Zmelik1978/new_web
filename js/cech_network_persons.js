function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "novyepochalnivyletpanabroucka":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Nový epochální výlet pana Broučka'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Brouček", "profesor"],
                    ["profesor", "Brouček"],
                    ["host", "profesor"],
                    ["profesor", "host"],
                    ["Brouček", "profesor"],
                    ["profesor", "Brouček"],
                    ["světlonoš", "Brouček"],
                    ["Brouček", "světlonoš"],
                    ["světlonoš", "Brouček"],
                    ["Brouček", "světlonoš"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Mandalena", "Brouček"],
                    ["Brouček", "Mandalena"],
                    ["Kunka", "Brouček"],
                    ["Brouček", "Kunka"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Kunka", "Domšík"],
                    ["Domšík", "Kunka"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Mandalena", "Brouček"],
                    ["Brouček", "Mandalena"],
                    ["Kunka", "Brouček"],
                    ["Brouček", "Kunka"],
                    ["Mandalena", "Domšík"],
                    ["Domšík", "Mandalena"],
                    ["Kunka", "Domšík"],
                    ["Domšík", "Kunka"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Domšík", "Brouček"],
                    ["Brouček", "Domšík"],
                    ["Vacek", "Brouček"],
                    ["Brouček", "Vacek"],
                    ["Domšík", "Vacek"],
                    ["Vacek", "Domšík"],
                    ["Miroslav", "Brouček"],
                    ["Brouček", "Miroslav"],
                    ["krčmář", "Brouček"],
                    ["Brouček", "krčmář"],
                    ["Miroslav", "Vacek"],
                    ["Vacek", "Miroslav"],
                    ["žák", "Vacek"],
                    ["Vacek", "žák"],
                    ["Miroslav", "žák"],
                    ["žák", "Miroslav"],
                    ["Vojta", "Miroslav"],
                    ["Miroslav", "Vojta"],
                    ["Vojta", "žák"],
                    ["žák", "Vojta"],
                    ["krčmář", "Vojta"],
                    ["Vojta", "krčmář"],
                    ["Vacek", "Brouček"],
                    ["Brouček", "Vacek"],
                    ["Chval", "Brouček"],
                    ["Brouček", "Chval"],
                    ["Chval", "Koranda"],
                    ["Koranda", "Chval"],
                    ["Koranda", "Brouček"],
                    ["Brouček", "Koranda"],
                    ["Chval", "Brouček"],
                    ["Brouček", "Chval"],
                    ["Koranda", "Brouček"],
                    ["Brouček", "Koranda"],
                    ["Chval", "Žižka"],
                    ["Žižka", "Chval"],
                    ["Žižka", "Brouček"],
                    ["Brouček", "Žižka"],
                    ["Stach", "Brouček"],
                    ["Brouček", "Stach"],
                    ["Stach", "Brouček"],
                    ["Brouček", "Stach"],
                    ["Stach", "Brouček"],
                    ["Brouček", "Stach"],
                    ["Žižka", "Chval"],
                    ["Chval", "Žižka"],
                    ["kněz", "Brouček"],
                    ["Brouček", "kněz"],
                    ["kněz", "Brouček"],
                    ["Brouček", "kněz"],
                    ["vůdce", "Brouček"],
                    ["Brouček", "vůdce"],
                    ["vůdce", "Brouček"],
                    ["Brouček", "vůdce"],
                    ["Žižka", "Brouček"],
                    ["Brouček", "Žižka"],
                    ["Chval", "Žižka"],
                    ["Žižka", "Chval"],
                    ["Vacek", "Brouček"],
                    ["Brouček", "Vacek"],
                    ["Vojta", "Brouček"],
                    ["Brouček", "Vojta"],
                    ["Chval", "Brouček"],
                    ["Brouček", "Chval"],
                    ["Žižka", "Brouček"],
                    ["Brouček", "Žižka"],
                    ["Wurfel", "Brouček"],
                    ["Brouček", "Wurfel"],
                    ["Wurfel", "Brouček"],
                    ["Brouček", "Wurfel"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Brouček',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Domšík',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'profesor',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'host',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'světlonoš',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Mandalena',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kunka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vacek',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Miroslav',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'krčmář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'žák',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vojta',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Chval',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Koranda',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Žižka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Stach',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kněz',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vůdce',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Wurfel',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "pravyvyletpanabroucka":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Pravý výlet pana Broučka'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // rámec - redaktor a Brouček
                    ["Brouček", "narrator"],
                    ["narrator", "Brouček"],
                    ["Brouček", "narrator"],
                    ["narrator", "Brouček"],
                    ["Brouček", "narrator"],
                    ["narrator", "Brouček"],
                    ["Brouček", "narrator"],

                    // u Wurfla
                    ["Brouček", "Wurfl"],
                    ["Wurfl", "Brouček"],

                    // první setkání s měsíčanem Blankytným
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],

                    // procházka, pomníky, jména, povolání
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],

                    // debata o lásce a Ethereji
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],

                    // architektura, holubník, Pegas
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],

                    // Lunoborovo sídlo
                    ["Lunobor", "Blankytný"],
                    ["Blankytný", "Lunobor"],
                    ["Lunobor", "Brouček"],
                    ["Brouček", "Lunobor"],
                    ["Lunobor", "Brouček"],
                    ["Brouček", "Lunobor"],

                    // Etherea
                    ["Etherea", "Blankytný"],
                    ["Blankytný", "Etherea"],
                    ["Etherea", "Brouček"],
                    ["Brouček", "Etherea"],
                    ["Lunobor", "Brouček"],
                    ["Brouček", "Lunobor"],
                    ["Etherea", "Brouček"],
                    ["Lunobor", "Brouček"],

                    // Blankytného zoufalství a útěk oknem
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],

                    // let - čas, hodiny, němčina, město
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],

                    // Chrám Všeuměny - mecenáš Čaroskvoucí
                    ["Čaroskvoucí", "Blankytný"],
                    ["Blankytný", "Čaroskvoucí"],
                    ["Čaroskvoucí", "Brouček"],
                    ["Brouček", "Čaroskvoucí"],

                    // slzničky
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],

                    // velekněz poesie Oblačný a Hvězdný
                    ["Oblačný", "Blankytný"],
                    ["Blankytný", "Oblačný"],
                    ["Oblačný", "Hvězdný"],
                    ["Hvězdný", "Oblačný"],

                    // incident s nosem, vyloučení
                    ["Brouček", "Čaroskvoucí"],
                    ["Čaroskvoucí", "Brouček"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],

                    // malíř Mlhomil Vzdušný
                    ["Brouček", "Vzdušný"],
                    ["Vzdušný", "Brouček"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Čaroskvoucí", "Brouček"],
                    ["Brouček", "Čaroskvoucí"],

                    // malíř Duhoslav Žárný
                    ["Čaroskvoucí", "Žárný"],
                    ["Žárný", "Čaroskvoucí"],
                    ["Žárný", "Blankytný"],
                    ["Blankytný", "Žárný"],
                    ["Žárný", "Brouček"],
                    ["Brouček", "Žárný"],
                    ["Blankytný", "Brouček"],
                    ["Brouček", "Blankytný"],
                    ["Žárný", "Brouček"],
                    ["Brouček", "Žárný"],

                    // koncertní síň - biletář
                    ["biletář", "Brouček"],
                    ["Brouček", "biletář"],
                    ["biletář", "Brouček"],

                    // poslední Etherea, útěk
                    ["Etherea", "Brouček"],

                    // návrat - závěrečné konference s redaktorem
                    ["narrator", "Brouček"],
                    ["Brouček", "narrator"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Brouček',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Blankytný',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Wurfl',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Lunobor',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Etherea',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Čaroskvoucí',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Oblačný',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Hvězdný',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vzdušný',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Žárný',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'biletář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

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






// ŠABLONA:

/*
    case "NÁZEV CASE-TEXTU":
      Highcharts.chart('container', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'NÁZEV TEXTU'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [
        
                    ["narrator", "JMÉNO POSTAVY"],
                    ...
                    
                ], nodes: 
                    [
                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'NÁZEV POSTAVY 1',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    ...

                    // vedlejší postavy
                    {id: 'NÁZEV POSTAVY 2',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    ...

                    ]
                }
              ]
          });
      break;
*/