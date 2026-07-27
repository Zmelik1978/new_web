function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "svejk1":
        document.getElementById("myImg1").src = "wordclouds-graphs/svejk01.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/svejk01.svg";
        break;
      case "svejk2":
        document.getElementById("myImg1").src = "wordclouds-graphs/svejk02.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/svejk02.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }