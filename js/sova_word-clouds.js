function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "ivuvroman":
        document.getElementById("myImg1").src = "wordclouds-graphs/ivuvroman.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/ivuvroman.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }