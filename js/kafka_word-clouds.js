function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "proces":
        document.getElementById("myImg1").src = "wordclouds-graphs/proces.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/proces.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }