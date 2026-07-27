function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "druhemesto":
        document.getElementById("myImg1").src = "wordclouds-graphs/druhemesto.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/druhemesto.svg";
        break;
      case "luxemburskazahrada":
        document.getElementById("myImg1").src = "wordclouds-graphs/luxemburskazahrada.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/luxemburskazahrada.svg";
        break;
      case "vrazdavhoteluintercontinental":
        document.getElementById("myImg1").src = "wordclouds-graphs/vrazdavhoteluintercontinental.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/vrazdavhoteluintercontinental.svg";
        break;
      case "navratstarehovarana":
        document.getElementById("myImg1").src = "wordclouds-graphs/navratstarehovarana.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/navratstarehovarana.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }