<!--COOKIE-->
<?php
    $name = "CookieFromKorpusprozy";
    $value = 125;
    $expiration = time() + (60*60*24*14);
    setcookie($name, $value, $expiration);
?>

<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head><script src="assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.122.0">
    <title>Concordance</title>
    <link rel="canonical" href="https://korpusprozy.com/03_ARBES/konkordance.php">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">   
    <link href="../style/menu-bar.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
      }

      li {
        display: inline;
        margin-right: 2rem;
        

      }
      li a {
        text-decoration: none;
      }
    </style>

    
  </head>
  
<main>
  <div class="container py-4">   

    <ul>
      <li><a href="../index.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg> Home</a></li>
      <li><a href="../corpus.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward" viewBox="0 0 16 16"><path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z"/></svg> Back to Corpus</a></li>
      <li class="dropdown">
        <svg id="icon-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
        <a class="dropbtn">Author Corpus Menu</a>
        <div class="dropdown-content">
          <a href="Cartography_Models_of_Fictional_Topography_ Network_Models.html" style="text-decoration: none;">Literary-Cartography Models and Quantitative Models of Places</a>
          <a href="Frequency of Text Segments.html">Frequency of Text Segments, Sentence Length, Narrative Rythm</a>
          <a href="Statistics.html">Statistics</a>
          <a href="Sentiment Analyssis-Word Clouds.html">Sentiment Analysis & Word Clouds</a>
          <a href="tag_lemma.php">Search Word Types by Tags</a>
          <a href="pie_chart.html">Word Types in Percentages</a>
          <a href="konkordance.php">Concordances</a>
          <a href="asociacni_miry.php">Collocations</a>
          <a href="words_in_context.php">Words in Context</a>
          <a href="frekvence.php">Lemmas, Frequency Dictionaries, Tokens</a>
          <a href="cql.php">CQL</a>
          <a href="stylometry.html">Stylometry</a>
        </div>
      </li>
    </ul>

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-0">
        <h1 style="text-align: center; color: #d63384;">Concordance</h1>
      </div>
    </div>

    <p id ="description_concordance" class ="description"></p>
    <script src="../js/description_maps.js"></script>

    <div>
      <p><span style="color: blue;">Explanatory notes:</span>
        <br><br>
        R - romanets<br>
        KPN I - Knihy povídek a novel I<br>
        KPN II - Knihy povídek a novel II<br>
        KPN III - Knihy povídek a novel III<br>
        KPN IV - Knihy povídek a novel IV<br>
        N - novels
      </p>
    </div>
    <br>

    <!--FORMULÁŘ PRO ZADÁVÁANÍ LEMMAT-->
    <form action="konkordance.php" method="post" style="float: left;">
      <input type="text" name="dabel" placeholder="Ďábel na skřipci (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="elegie" placeholder="Elegie o černých očích (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="xaverius" placeholder="Svatý Xaverius (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="demon" placeholder="Sivooký démon (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="madona" placeholder="Zázračná madona (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="ukrizovana" placeholder="Ukřižovaná (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="mozek" placeholder="Newtonův mozek (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="akrobati" placeholder="Akrobati (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="lilie" placeholder="Etiopská lilie (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="silenyjob" placeholder="Šílený Job (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="mujpritelvrah" placeholder="Můj přítel vrah (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="asponsepousmej" placeholder="Aspoň se pousměj (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="dvabarikadnici" placeholder="Dva barikádníci (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="prvninocumrtvoly" placeholder="První noc u mrtvoly (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="ildivinoboemo" placeholder="Il divino Boemo (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="annaamarie" placeholder="Anna a Marie (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="vymirajicihrbitov" placeholder="Vymírající hřbitov (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="kandidatiexistence" placeholder="Kandidáti existence (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="zborceneharfyton" placeholder="Zborcené harfy tón (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="adamite" placeholder="Adamité (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="agitator" placeholder="Agitátor (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="andelmiru1" placeholder="Anděl míru I (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="andelmiru2" placeholder="Anděl míru II (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="andelmiru3" placeholder="Anděl míru III (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="andelmiru4" placeholder="Anděl míru IV (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="moderniupiri" placeholder="Moderní upíři (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="advokatchudasu" placeholder="Advokát chuďasů (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="lotrgolo" placeholder="Lotr Gólo (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="duhovybodnadhlavou" placeholder="Duhový bod nad hlavou (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="lilievupaluslunecnim" placeholder="Liliev úpalu slunečním (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="duhokridlapsyche" placeholder="Duhokřídlá Psyché (R)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="poslednidnovelidstva" placeholder="Poslední dnové lidstva (R)" style="margin-bottom: 7px; width: 320px;"><br>

      <!--KPN I-->
      <input type="text" name="modernimagdalena" placeholder="Moderní Magdaléna (KPN I)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="preddomemsmutku" placeholder="Před domem smutku (KPN I)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="pripijsibratricku" placeholder="Připij si, bratříčku! (KPN I)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="svatyvaclav" placeholder="Svatý Václav (KPN I)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="trilobit" placeholder="Trilobit (KPN I)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="zboznovatelslecnyesterhazy" placeholder="Zbožňovatel slečny Esterházy (KPN I)" style="margin-bottom: 7px; width: 320px;"><br>

      <!--KPN II-->
      <input type="text" name="demantovagarnituda" placeholder="Démantová garnituda (KPN II)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="kamaradi" placeholder="Kamarádi (KPN II)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="nalezenec" placeholder="Nalezenec (KPN II)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="nocnahrbitove" placeholder="Noc na hřbitově (KPN II)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="odumirajicidrahokam" placeholder="Odumírající drahokam (KPN II)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="sladkyhrich" placeholder="Sladký hřích (KPN II)" style="margin-bottom: 7px; width: 320px;"><br>

      <!--KPN III-->
      <input type="text" name="bilesvatebnisaty" placeholder="Bílé svatební šaty (KPN III)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="blizenci" placeholder="Blíženci (KPN III)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="jednaztechkteremezajimaly" placeholder="Jedna z těch, které mě zajímaly (KPN III)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="posledniskamna" placeholder="Poslední škamna (KPN III)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="rodinnedrama" placeholder="Rodinné drama (KPN III)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="zpuchrelanitka" placeholder="Zpuchřelá nitka (KPN III)" style="margin-bottom: 7px; width: 320px;"><br>

      <!--KPN IV-->
      <input type="text" name="dobrodruzstvivevysadnihospode" placeholder="Dobrodružství ve výsadní hospodě (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="lampicky" placeholder="Lampičky (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="penezokaz" placeholder="Penězokaz (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="samovrah" placeholder="Samovrah (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="sbehlesvicko" placeholder="Sběhlé švícko (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="vstareprazskekrcme" placeholder="V staré pražské krčmě (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="zboznytomas" placeholder="Zbožný Tomáš (KPN IV)" style="margin-bottom: 7px; width: 320px;"><br>

      <!--romány-->
      <input type="text" name="strajchpudlici" placeholder="Štrajchpudlíci (N)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="mesias1" placeholder="Mesiáš I (N)" style="margin-bottom: 7px; width: 320px;"><br>
      <input type="text" name="mesias2" placeholder="Mesiáš II (N)" style="margin-bottom: 7px; width: 320px;"><br>

      <input type="submit" name="submit" value="Submit" style="padding: 2px 3px; color: green; font-weight: bold;">
    </form>

    <!-- Přidejte spinner zde -->
    <div id="loadingSpinner" class="spinner-border text-primary" role="status" style="display: none; float: left; margin-left: 10rem;">
      <span class="visually-hidden">Loading...</span>
    </div>

    <script>
    document.querySelector('form').addEventListener('submit', function() {
      document.getElementById('loadingSpinner').style.display = 'block';
    });
    </script>

    <div style="float: left; margin-left: 8rem; margin-top: -141rem; width: 100%">

    <?php
        if(isset($_POST["submit"])) {
          if(!empty($_POST["dabel"])){
              require "php/dabelnaskripci_konkordance.php";
              
          }
          if(!empty($_POST["elegie"])){
              require "php/elegieocernychocich_konkordance.php";
              
          }
          if(!empty($_POST["xaverius"])){
              require "php/svatyxaverius_konkordance.php";
              
          }
          if(!empty($_POST["demon"])){
              require "php/sivookydemon_konkordance.php";
              
          }
          if(!empty($_POST["madona"])){
              require "php/zazracnamadona_konkordance.php";
              
          }
          if(!empty($_POST["ukrizovana"])){
              require "php/ukrizovana_konkordance.php";
              
          }
          if(!empty($_POST["mozek"])){
              require "php/newtonuvmozek_konkordance.php";
              
          }
          if(!empty($_POST["akrobati"])){
              require "php/akrobati_konkordance.php";
              
          }
          if(!empty($_POST["lilie"])){
              require "php/etiopskalilie_konkordance.php";
              
          }
          if(!empty($_POST["silenyjob"])){
              require "php/silenyjob_konkordance.php";
              
          }
          if(!empty($_POST["mujpritelvrah"])){
              require "php/mujpritelvrah_konkordance.php";
              
          }
          if(!empty($_POST["asponsepousmej"])){
              require "php/asponsepousmej_konkordance.php";
              
          }
          if(!empty($_POST["dvabarikadnici"])){
              require "php/dvabarikadnici_konkordance.php";
              
          }
          if(!empty($_POST["prvninocumrtvoly"])){
              require "php/prvninocumrtvoly_konkordance.php";
              
          }
          if(!empty($_POST["ildivinoboemo"])){
              require "php/ildivinoboemo_konkordance.php";
              
          }
          if(!empty($_POST["annaamarie"])){
              require "php/annaamarie_konkordance.php";
              
          }
          if(!empty($_POST["vymirajicihrbitov"])){
              require "php/vymirajicihrbitov_konkordance.php";
              
          }
          if(!empty($_POST["kandidatiexistence"])){
              require "php/kandidatiexistence_konkordance.php";
              
          }
          if(!empty($_POST["zborceneharfyton"])){
              require "php/zborceneharfyton_konkordance.php";
              
          }
          if(!empty($_POST["adamite"])){
              require "php/adamite_konkordance.php";
              
          }
          if(!empty($_POST["agitator"])){
              require "php/agitator_konkordance.php";
              
          }
          if(!empty($_POST["andelmiru1"])){
              require "php/andelmiru1_konkordance.php";
              
          }
          if(!empty($_POST["andelmiru2"])){
              require "php/andelmiru2_konkordance.php";
              
          }
          if(!empty($_POST["andelmiru3"])){
              require "php/andelmiru3_konkordance.php";
              
          }
          if(!empty($_POST["andelmiru4"])){
              require "php/andelmiru4_konkordance.php";
              
          }
          if(!empty($_POST["moderniupiri"])){
              require "php/moderniupiri_konkordance.php";
              
          }
          if(!empty($_POST["advokatchudasu"])){
              require "php/advokatchudasu_konkordance.php";
              
          }
          if(!empty($_POST["lotrgolo"])){
              require "php/lotrgolo_konkordance.php";
              
          }
          if(!empty($_POST["duhovybodnadhlavou"])){
              require "php/duhovybodnadhlavou_konkordance.php";
              
          }
          if(!empty($_POST["lilievupaluslunecnim"])){
              require "php/lilievupaluslunecnim_konkordance.php";
              
          }
          if(!empty($_POST["duhokridlapsyche"])){
              require "php/duhokridlapsyche_konkordance.php";
              
          }
          if(!empty($_POST["poslednidnovelidstva"])){
              require "php/poslednidnovelidstva_konkordance.php";
              
          }
          if(!empty($_POST["modernimagdalena"])){
              require "php/modernimagdalena_konkordance.php";
              
          }
          if(!empty($_POST["preddomemsmutku"])){
              require "php/preddomemsmutku_konkordance.php";
              
          }
          if(!empty($_POST["pripijsibratricku"])){
              require "php/pripijsibratricku_konkordance.php";
              
          }
          if(!empty($_POST["svatyvaclav"])){
              require "php/svatyvaclav_konkordance.php";
              
          }
          if(!empty($_POST["trilobit"])){
              require "php/trilobit_konkordance.php";
              
          }
          if(!empty($_POST["zboznovatelslecnyesterhazy"])){
              require "php/zboznovatelslecnyesterhazy_konkordance.php";
             
          }
          if(!empty($_POST["demantovagarnituda"])){
              require "php/demantovagarnituda_konkordance.php";
              
          }
          if(!empty($_POST["kamaradi"])){
              require "php/kamaradi_konkordance.php";
              
          }
          if(!empty($_POST["nalezenec"])){
              require "php/nalezenec_konkordance.php";
              
          }
          if(!empty($_POST["nocnahrbitove"])){
              require "php/nocnahrbitove_konkordance.php";
              
          }
          if(!empty($_POST["odumirajicidrahokam"])){
              require "php/odumirajicidrahokam_konkordance.php";
              
          }
          if(!empty($_POST["sladkyhrich"])){
              require "php/sladkyhrich_konkordance.php";
              
          }
          if(!empty($_POST["bilesvatebnisaty"])){
              require "php/bilesvatebnisaty_konkordance.php";
              
          }
          if(!empty($_POST["blizenci"])){
              require "php/blizenci_konkordance.php";
              
          }
          if(!empty($_POST["jednaztechkteremezajimaly"])){
              require "php/jednaztechkteremezajimaly_konkordance.php";
              
          }
          if(!empty($_POST["posledniskamna"])){
              require "php/posledniskamna_konkordance.php";
              
          }
          if(!empty($_POST["rodinnedrama"])){
              require "php/rodinnedrama_konkordance.php";
              
          }
          if(!empty($_POST["zpuchrelanitka"])){
              require "php/zpuchrelanitka_konkordance.php";
              
          }
          if(!empty($_POST["dobrodruzstvivevysadnihospode"])){
              require "php/dobrodruzstvivevysadnihospode_konkordance.php";
              
          }
          if(!empty($_POST["lampicky"])){
              require "php/lampicky_konkordance.php";
              
          }
          if(!empty($_POST["penezokaz"])){
              require "php/penezokaz_konkordance.php";
             
          }
          if(!empty($_POST["samovrah"])){
              require "php/samovrah_konkordance.php";
              
          }
          if(!empty($_POST["sbehlesvicko"])){
              require "php/sbehlesvicko_konkordance.php";
              
          }
          if(!empty($_POST["vstareprazskekrcme"])){
              require "php/vstareprazskekrcme_konkordance.php";
              
          }
          if(!empty($_POST["zboznytomas"])){
              require "php/zboznytomas_konkordance.php";
              
          }
          if(!empty($_POST["strajchpudlici"])){
              require "php/strajchpudlici_konkordance.php";
              
          }
          if(!empty($_POST["mesias1"])){
              require "php/mesias1_konkordance.php"; 
          }
          if(!empty($_POST["mesias2"])){
              require "php/mesias2_konkordance.php"; 
          }
        }  
    ?>

    
  </div>
</main>
</body>
</html>
