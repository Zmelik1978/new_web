<?php
    
    if (isset($_POST["submit"])){
        if($tag = $_POST["usnedenehokramu3"]){
            $conection1 = mysqli_connect("127.0.0.1","korpusprozyco001","prasmoid","korpusprozycom03");
            mysqli_set_charset($conection1, "utf8mb4");
            if($conection1){
                
                $sqltoken = "SELECT DISTINCT token, Af, Rf FROM usnedenehokramu3completmorphotags WHERE tag='".$tag."'";
                $resulttoken = mysqli_query($conection1, $sqltoken);
                $num_rows = mysqli_num_rows($resulttoken);
                if(mysqli_num_rows($resulttoken) > 0){
                    echo "<div style='width: 800px;'>";
                    echo "<div style='border: 1px solid black; width: 120px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>TOKEN</div>";
                    echo "<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                    echo "<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                    echo "<div style='width: 200px; margin-left: 10px; float: left; margin-bottom: 3px; color: blue;'> Počet řádků: ".$num_rows."</div>";
                    echo "<div style='clear:both;'></div>";
                    echo "</div>";
                    while($token = mysqli_fetch_assoc($resulttoken)){
                        $tokeny = $token["token"]; //jedinečné tokeny
                        $af = $token["Af"]; //Af
                        $rf = $token["Rf"]; //Rf

                        echo "<div style='border: 1px solid black; width: 120px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$tokeny."</span>"."</div>";
                        echo "<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$af."</span>"."</div>";
                        echo "<div style='border: 1px solid black; width: 80px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$rf."</span>"."</div>";
                        echo "<div style='clear:both;'></div>";
                    }    
                } else {
                    echo "<span style='color: red;'>Tokeny nenalezeny.</span>";
                }
            } else {
                echo "Chyba v připojení";
            }            
        } 
    }
    ?>