function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "posledniteckazarukopisy":
        document.getElementById("myImg1").src = "wordclouds-graphs/posledniteckazarukopisy.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/posledniteckazarukopisy.svg";
        break;
      case "sedmikosteli":
        document.getElementById("myImg1").src = "wordclouds-graphs/sedmikosteli.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/sedmikosteli.svg";
        break;
      case "hastrman1":
        document.getElementById("myImg1").src = "wordclouds-graphs/hastrman1.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/hastrman1.svg";
        break;
      case "hastrman2":
        document.getElementById("myImg1").src = "wordclouds-graphs/hastrman2.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/hastrman2.svg";
        break;
      case "stinkatedraly":
        document.getElementById("myImg1").src = "wordclouds-graphs/stinkatedraly.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/stinkatedraly.svg";
        break;
      case "michaela":
        document.getElementById("myImg1").src = "wordclouds-graphs/michaela.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/michaela.svg";
        break;
      case "santinihojazyk":
        document.getElementById("myImg1").src = "wordclouds-graphs/santinihojazyk.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/santinihojazyk.svg";
        break;
      case "lordmord":
        document.getElementById("myImg1").src = "wordclouds-graphs/lordmord.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/lordmord.svg";
        break;
      case "boletusarcanus":
        document.getElementById("myImg1").src = "wordclouds-graphs/boletusarcanus.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/boletusarcanus.svg";
        break;
      case "pragapiccola":
        document.getElementById("myImg1").src = "wordclouds-graphs/pragapiccola.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/pragapiccola.svg";
        break;
      case "poleapalisada":
        document.getElementById("myImg1").src = "wordclouds-graphs/poleapalisada.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/poleapalisada.svg";
        break;
      case "tovarnanamaso":
        document.getElementById("myImg1").src = "wordclouds-graphs/tovarnanamaso.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/tovarnanamaso.svg";
        break;
      case "zaverka":
        document.getElementById("myImg1").src = "wordclouds-graphs/zaverka.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/zaverka.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }