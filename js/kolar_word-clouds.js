function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "peklazplozenci":
        document.getElementById("myImg1").src = "wordclouds-graphs/peklazplozenci.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/peklazplozenci.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }