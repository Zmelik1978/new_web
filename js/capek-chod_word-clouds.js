function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "kasparlenmstitel":
        document.getElementById("myImg1").src = "wordclouds-graphs/kasparlenmstitel.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/kasparlenmstitel.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }