function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "cerny_petricek":
        document.getElementById("myImg1").src = "wordclouds-graphs/cerny_petricek.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/cerny_petricek.svg";
        break;
      case "zvoneckovakralovna":
        document.getElementById("myImg1").src = "wordclouds-graphs/zvoneckovakralovna.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/zvoneckovakralovna.svg";
        break;
      case "prvniceska":
        document.getElementById("myImg1").src = "wordclouds-graphs/prvniceska.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/prvniceska.svg";
        break;
      case "mladapanizapletalova":
        document.getElementById("myImg1").src = "wordclouds-graphs/mladapanizapletalova.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/mladapanizapletalova.svg";
        break;
      case "skapulir":
        document.getElementById("myImg1").src = "wordclouds-graphs/skapulir.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/skapulir.svg";
        break;
      case "nakosatkach":
        document.getElementById("myImg1").src = "wordclouds-graphs/nakosatkach.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/nakosatkach.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }