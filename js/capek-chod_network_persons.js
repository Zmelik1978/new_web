function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "kasparlenmstitel":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Kašpar Lén mstitel'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // 1) Návrat z vojny — byt Kryštofů, posluha Cverenc s rodinou
                    ["hospodyně", "Lén"],
                    ["Lén", "hospodyně"],
                    ["Cverenc", "Lén"],
                    ["Lén", "Cverenc"],
                    ["Cverenc", "Lén"],
                    ["Lén", "hospodyně"],
                    ["hospodyně", "Lén"],
                    ["Lén", "Cverenc"],
                    ["Cverenc", "Lén"],
                    ["hospodyně", "Lén"],
                    ["Lén", "hospodyně"],
                    ["stařena", "Lén"],
                    ["Lén", "stařena"],
                    ["Cverenc", "Lén"],
                    ["Lén", "Cverenc"],
                    ["Cverenc", "Lén"],
                    ["Lén", "Cverenc"],

                    // 2) Lén nachází Mařku v uličce za skladištěm
                    ["Mařka", "Lén"],
                    ["Lén", "Mařka"],
                    ["bordelmamá", "Mařka"],
                    ["Mařka", "bordelmamá"],
                    ["Mařka", "Lén"],
                    ["Lén", "Mařka"],
                    ["Mařka", "Lén"],
                    ["Lén", "Mařka"],
                    ["Lén", "Mařka"],
                    ["Mařka", "Lén"],
                    ["Lén", "Mařka"],
                    ["Mařka", "Lén"],

                    // 3) Vzpomínka na stavbu — malá Mařka a otčim Kryštof
                    ["Lén", "Kryštof"],
                    ["Kryštof", "Lén"],
                    ["Lén", "Kryštof"],
                    ["Kryštof", "Lén"],

                    // 4) Nocleh v kůlně — vorař
                    ["vorař", "Lén"],
                    ["Lén", "vorař"],
                    ["vorař", "Lén"],

                    // 5) Stavba — polír, Liprcaj (dědek fajfka)
                    ["polír", "Lén"],
                    ["Lén", "polír"],
                    ["polír", "Lén"],
                    ["Liprcaj", "Lén"],
                    ["Lén", "Liprcaj"],
                    ["Liprcaj", "Lén"],
                    ["Lén", "Liprcaj"],
                    ["Liprcaj", "Lén"],

                    // 5b) Trhlý (ryšavec) trýzní Liprcaje, Lén zasáhne
                    ["Trhlý", "Lén"],
                    ["Lén", "Trhlý"],
                    ["Trhlý", "Lén"],
                    ["Lén", "Trhlý"],

                    // 5c) Mareček (flautista) a hudba ze stavby
                    ["Mareček", "Lén"],
                    ["Lén", "Mareček"],
                    ["Mareček", "Lén"],
                    ["Lén", "Mareček"],

                    // Liprcajova vyprávění Lénovi
                    ["Liprcaj", "Lén"],
                    ["Lén", "Liprcaj"],
                    ["Liprcaj", "Lén"],
                    ["Lén", "Liprcaj"],
                    ["Liprcaj", "Lén"],
                    ["Lén", "Liprcaj"],

                    // 6) Večerní schůzky a lístky s Mařkou
                    ["Lén", "Mařka"],
                    ["Mařka", "Lén"],
                    ["Lén", "Mařka"],
                    ["Mařka", "Lén"],
                    ["Lén", "Mařka"],
                    ["Mařka", "Lén"],

                    // 7) Příchod Kabourkové; Konopík ji oslovuje; Liprcaj lísá dělníky
                    ["Liprcaj", "dělníci"],
                    ["dělníci", "Liprcaj"],
                    ["Konopík", "Kabourková"],
                    ["Kabourková", "Konopík"],
                    ["Konopík", "Kabourková"],
                    ["Trhlý", "Lén"],

                    // 8) Smrt Liprcaje a dav pod lešením
                    ["Lén", "Ferdík"],
                    ["Ferdík", "Lén"],
                    ["Lén", "elegán"],
                    ["elegán", "Lén"],
                    ["Koutný", "polír"],
                    ["polír", "Koutný"],
                    ["Koutný", "polír"],
                    ["polír", "Koutný"],
                    ["Koutný", "Trhlý"],
                    ["Trhlý", "Koutný"],
                    ["Kabourková", "Truneček"],
                    ["Truneček", "Kabourková"],
                    ["Kabourková", "Truneček"],
                    ["Liprcaj", "Kabourková"],
                    ["Kabourková", "Liprcaj"],
                    ["Liprcaj", "Kabourková"],
                    ["Cverenc", "Tondík"],
                    ["Tondík", "Cverenc"],
                    ["Tondík", "Liprcaj"],
                    ["Liprcaj", "Tondík"],
                    ["Koutný", "Cverenc"],
                    ["Cverenc", "Koutný"],
                    ["Truneček", "Koutný"],
                    ["Koutný", "Truneček"],

                    // 9) Druhý den — klepy o Kabourkové
                    ["Trhlý", "Zmatlík"],
                    ["Zmatlík", "Trhlý"],
                    ["Truneček", "Zmatlík"],
                    ["Zmatlík", "Truneček"],
                    ["Zmatlík", "Truneček"],
                    ["Truneček", "Trhlý"],
                    ["Trhlý", "Truneček"],
                    ["Trhlý", "Kabourková"],
                    ["Kabourková", "Trhlý"],
                    ["Trhlý", "Kabourková"],
                    ["Kabourková", "Trhlý"],

                    // 10) Lén ztříská Trhlého kvůli Kabourkové
                    ["Lén", "Trhlý"],
                    ["Trhlý", "Lén"],
                    ["Kabourková", "Lén"],
                    ["Lén", "Kabourková"],

                    // 11) Noční návštěva Kabourkové u Léna
                    ["Kabourková", "Lén"],
                    ["Lén", "Kabourková"],
                    ["Kabourková", "Lén"],
                    ["Lén", "Kabourková"],
                    ["Kabourková", "Lén"],
                    ["Lén", "Kabourková"],
                    ["Kabourková", "Lén"],
                    ["Lén", "Kabourková"],

                    // 12) Lén opilý; ráno polír a dělníci
                    ["polír", "Lén"],
                    ["Lén", "polír"],
                    ["dělníci", "Lén"],
                    ["Lén", "dělníci"],
                    ["dělníci", "Lén"],
                    ["Kabourková", "Lén"],
                    ["Lén", "Kabourková"],

                    // 13) Vyšetřovací výslech (nemocnice)
                    ["vyšetřující soudce", "Lén"],
                    ["Lén", "vyšetřující soudce"],
                    ["vyšetřující soudce", "Lén"],
                    ["Lén", "vyšetřující soudce"],
                    ["vyšetřující soudce", "Lén"],
                    ["Lén", "vyšetřující soudce"],

                    // 14) Přelíčení před porotou
                    ["president", "Lén"],
                    ["Lén", "president"],
                    ["president", "Lén"],
                    ["Lén", "president"],
                    ["žalobce", "dr. Ryba"],
                    ["dr. Ryba", "žalobce"],
                    ["žalobce", "dr. Ryba"],
                    ["dr. Ryba", "žalobce"],
                    ["president", "dr. Ryba"],
                    ["dr. Ryba", "president"],
                    ["president", "dr. Ryba"],
                    ["dr. Ryba", "president"],
                    ["president", "Kabourková"],
                    ["Kabourková", "president"],
                    ["president", "Kabourková"],
                    ["Kabourková", "president"],
                    ["president", "Kabourková"],
                    ["Kabourková", "president"],
                    ["president", "Kabourková"],
                    ["Kabourková", "president"],
                    ["president", "Ferdík"],
                    ["Ferdík", "president"],

                    // 15) Mařčin útěk — tramvaj, vrátný u soudu
                    ["průvodčí", "Mařka"],
                    ["Mařka", "průvodčí"],
                    ["průvodčí", "Mařka"],
                    ["Mařka", "průvodčí"],
                    ["průvodčí", "Mařka"],
                    ["Mařka", "průvodčí"],
                    ["strojvůdce", "průvodčí"],
                    ["průvodčí", "strojvůdce"],
                    ["strojvůdce", "průvodčí"],
                    ["Mařka", "vrátný"],
                    ["vrátný", "Mařka"],

                    // 16) Mařčina svědecká výpověď a vzpomínka na Konopíka a otce
                    ["president", "Mařka"],
                    ["Mařka", "president"],
                    ["president", "Mařka"],
                    ["Mařka", "president"],
                    ["president", "Mařka"],
                    ["Mařka", "president"],
                    ["Konopík", "Mařka"],
                    ["Mařka", "Konopík"],
                    ["Konopík", "Mařka"],
                    ["Kryštof", "Mařka"],
                    ["Mařka", "Kryštof"],
                    ["Kryštof", "Mařka"],

                    // 17) Závěr — Lén před soudem
                    ["president", "Lén"],
                    ["Lén", "president"],

                ], nodes:
                    [
                    // hlavní postavy
                    {id: 'Lén', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Mařka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kryštof', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Liprcaj', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kabourková', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Trhlý', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Konopík', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'president', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Cverenc',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hospodyně',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'stařena',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'bordelmamá',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vorař',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'polír',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Mareček',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Ferdík',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'elegán',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Koutný',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Truneček',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Zmatlík',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Tondík',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dělníci',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vyšetřující soudce',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dr. Ryba',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'žalobce',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'průvodčí',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'strojvůdce',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vrátný',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

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




