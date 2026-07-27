function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "mlynnamumie":
        document.getElementById("myImg1").src = "wordclouds-graphs/mlynnamumie.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/mlynnamumie.svg";
        break;
      case "perak":
        document.getElementById("myImg1").src = "wordclouds-graphs/perak.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/perak.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }