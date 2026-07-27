function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "golem":
        document.getElementById("myImg1").src = "wordclouds-graphs/golem.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/golem.svg";
        break;
      case "neviditelna_praha":
        document.getElementById("myImg1").src = "wordclouds-graphs/neviditelna_praha.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/neviditelna_praha.svg";
        break;
      case "valpurzinanoc":
        document.getElementById("myImg1").src = "wordclouds-graphs/valpurzinanoc.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/valpurzinanoc.svg";
        break;
      case "bilydominikan":
        document.getElementById("myImg1").src = "wordclouds-graphs/bilydominikan.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/bilydominikan.svg";
        break;
      case "prazskavizitka":
        document.getElementById("myImg1").src = "wordclouds-graphs/prazskavizitka.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/prazskavizitka.svg";
        break;
      case "zelenatvar":
        document.getElementById("myImg1").src = "wordclouds-graphs/zelenatvar.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/zelenatvar.svg";
        break;
      case "andelzapadnihookna":
        document.getElementById("myImg1").src = "wordclouds-graphs/andelzapadnihookna.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/andelzapadnihookna.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
      }
  } 