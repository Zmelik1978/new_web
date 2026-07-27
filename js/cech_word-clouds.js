function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "broucek15":
        document.getElementById("myImg1").src = "wordclouds-graphs/broucek15.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/broucek15.svg";
        break;
      case "broucekmesic":
        document.getElementById("myImg1").src = "wordclouds-graphs/broucekmesic.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/broucekmesic.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }