function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "janmariaplojhar":
        document.getElementById("myImg1").src = "wordclouds-graphs/janmariaplojhar.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/janmariaplojhar.svg";
        break;
      case "legendaprazska":
        document.getElementById("myImg1").src = "wordclouds-graphs/legendaprazska.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/legendaprazska.svg";
        break;
      case "legendatoledska":
        document.getElementById("myImg1").src = "wordclouds-graphs/legendatoledska.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/legendatoledska.svg";
        break;
      case "legendaslovenska":
        document.getElementById("myImg1").src = "wordclouds-graphs/legendaslovenska.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/legendaslovenska.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }