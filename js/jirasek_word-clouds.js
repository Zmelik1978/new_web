function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "flvek1":
        document.getElementById("myImg1").src = "wordclouds-graphs/flvek1.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/flvek1.svg";
        break;
      case "flvek2":
        document.getElementById("myImg1").src = "wordclouds-graphs/flvek2.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/flvek2.svg";
        break;
      case "flvek3":
        document.getElementById("myImg1").src = "wordclouds-graphs/flvek3.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/flvek3.svg";
        break; 
      case "flvek4":
        document.getElementById("myImg1").src = "wordclouds-graphs/flvek4.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/flvek4.svg";
        break; 
      case "flvek5":
        document.getElementById("myImg1").src = "wordclouds-graphs/flvek5.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/flvek5.svg";
        break;
      case "filozofskahistorie":
        document.getElementById("myImg1").src = "wordclouds-graphs/filozofskahistorie.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/filozofskahistorie.svg";
        break;
      case "temno":
        document.getElementById("myImg1").src = "wordclouds-graphs/temno.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/temno.svg";
        break;
      case "psohlavci":
        document.getElementById("myImg1").src = "wordclouds-graphs/psohlavci.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/psohlavci.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }