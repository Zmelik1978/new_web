function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "mistrkampanus":
        document.getElementById("myImg1").src = "wordclouds-graphs/kampanus.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/kampanus.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }