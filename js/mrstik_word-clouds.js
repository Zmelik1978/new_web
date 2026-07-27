function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "santalucia":
        document.getElementById("myImg1").src = "wordclouds-graphs/santalucia.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/santalucia.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
      }
  } 