function showImage() {
    var option = document.getElementById("selectOption2").value;
    switch(option) {
      case "povidky_malostranske":
        document.getElementById("myImg1").src = "wordclouds-graphs/povidky_malostranske.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/povidky_malostranske.svg";
        break;
      case "tydenvtichemdome":
        document.getElementById("myImg1").src = "wordclouds-graphs/tydenvtichemdome.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/tydenvtichemdome.svg";
        break;
      case "panrysanekapanschlegl":
        document.getElementById("myImg1").src = "wordclouds-graphs/panrysanekapanschlegl.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/panrysanekapanschlegl.svg";
        break; 
      case "privedlazebrakanamizinu":
        document.getElementById("myImg1").src = "wordclouds-graphs/privedlazebrakanamizinu.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/privedlazebrakanamizinu.svg";
        break; 
      case "omekkemsrdcipanirusky":
        document.getElementById("myImg1").src = "wordclouds-graphs/omekkemsrdcipanirusky.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/omekkemsrdcipanirusky.svg";
        break;
      case "vecernisplechty":
        document.getElementById("myImg1").src = "wordclouds-graphs/vecernisplechty.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/vecernisplechty.svg";
        break;
      case "doktorkazisvet":
        document.getElementById("myImg1").src = "wordclouds-graphs/doktorkazisvet.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/doktorkazisvet.svg";
        break;
      case "hastrman":
        document.getElementById("myImg1").src = "wordclouds-graphs/hastrman.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/hastrman.svg";
        break;
      case "jaksinakouril":
        document.getElementById("myImg1").src = "wordclouds-graphs/jaksinakouril.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/jaksinakouril.svg";
        break;
      case "utrililii":
        document.getElementById("myImg1").src = "wordclouds-graphs/utrililii.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/utrililii.svg";
        break;
      case "svatovaclavskamse":
        document.getElementById("myImg1").src = "wordclouds-graphs/svatovaclavskamse.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/svatovaclavskamse.svg";
        break;
      case "jaktoprislo":
        document.getElementById("myImg1").src = "wordclouds-graphs/jaktoprislo.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/jaktoprislo.svg";
        break;
      case "psanooletosnichdusickach":
        document.getElementById("myImg1").src = "wordclouds-graphs/psanooletosnichdusickach.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/psanooletosnichdusickach.svg";
        break;
      case "figurky":
        document.getElementById("myImg1").src = "wordclouds-graphs/figurky.svg";
        var element = document.getElementById("link");
        element.href = "wordclouds-graphs/figurky.svg";
        break;
      default:
        document.getElementById("myImg1").src = "";
    }
  }