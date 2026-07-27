function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "podoboji":
        document.getElementById("myImg1").src = "wordclouds-graphs/podoboji.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/podoboji.svg";
        break;
      case "kukly":
        document.getElementById("myImg1").src = "wordclouds-graphs/kukly.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/kukly.svg";
        break;
      case "theta":
        document.getElementById("myImg1").src = "wordclouds-graphs/theta.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/theta.svg";
        break; 
      case "mestovidim":
        document.getElementById("myImg1").src = "wordclouds-graphs/mestovidim.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/mestovidim.svg";
        break;
      case "tocitevety":
        document.getElementById("myImg1").src = "wordclouds-graphs/tocitevety.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/tocitevety.svg";
        break;
      case "perunuvden":
        document.getElementById("myImg1").src = "wordclouds-graphs/perunuvden.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/perunuvden.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }