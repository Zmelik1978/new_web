function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "karluvtejn":
        document.getElementById("myImg1").src = "wordclouds-graphs/karluvtejn.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/karluvtejn.svg";
        break;
      case "krivoklad":
        document.getElementById("myImg1").src = "wordclouds-graphs/krivoklad.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/krivoklad.svg";
        break;
      case "vecernabezdezu":
        document.getElementById("myImg1").src = "wordclouds-graphs/vecernabezdezu.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/vecernabezdezu.svg";
        break; 
      case "marinka":
        document.getElementById("myImg1").src = "wordclouds-graphs/marinka.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/marinka.svg";
        break; 
      case "klastersazavsky":
        document.getElementById("myImg1").src = "wordclouds-graphs/klastersazavsky.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/klastersazavsky.svg";
        break;
      case "valdice":
        document.getElementById("myImg1").src = "wordclouds-graphs/valdice.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/valdice.svg";
        break;
      case "poutkrkonosska":
        document.getElementById("myImg1").src = "wordclouds-graphs/poutkrkonosska.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/poutkrkonosska.svg";
        break;
      case "svetsmyslny":
        document.getElementById("myImg1").src = "wordclouds-graphs/svetsmyslny.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/svetsmyslny.svg";
        break;
      case "svetzasly":
        document.getElementById("myImg1").src = "wordclouds-graphs/svetzasly.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/svetzasly.svg";
        break;
      case "navrat":
        document.getElementById("myImg1").src = "wordclouds-graphs/navrat.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/navrat.svg";
        break;
      case "poutnik":
        document.getElementById("myImg1").src = "wordclouds-graphs/poutnik.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/poutnik.svg";
        break;
      case "viasilviasilovic":
        document.getElementById("myImg1").src = "wordclouds-graphs/viasilviasilovic.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/viasilviasilovic.svg";
        break;
      case "sen":
        document.getElementById("myImg1").src = "wordclouds-graphs/sen.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/sen.svg";
        break;
      case "prisaha":
        document.getElementById("myImg1").src = "wordclouds-graphs/prisaha.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/prisaha.svg";
        break;
      case "cikani":
        document.getElementById("myImg1").src = "wordclouds-graphs/cikani.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/cikani.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }