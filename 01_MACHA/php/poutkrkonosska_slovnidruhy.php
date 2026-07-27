<?php
if(isset($_POST["pocetradku"])){
   $radek = $_POST["pocetradku"];
} else {

}

if (isset($_POST["submit"])) {
    if ($name = $_POST["poutkrkonosska"]){
        $name;
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom01");
        mysqli_set_charset($conection, "utf8mb4");
        switch($name){
            case "N":
                $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='N' LIMIT $radek";
                $result = mysqli_query($conection, $vyber);
                if (mysqli_num_rows($result) > 0){

                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                    echo "<div style='clear:both;'></div>";
                    while($radek = mysqli_fetch_assoc($result)){
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                        echo "<div style='clear:both;'></div>";
                        }

                    }          
                break;
            case "A":
                $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='A' LIMIT $radek";
                $result = mysqli_query($conection, $vyber);
                if (mysqli_num_rows($result) > 0){
                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                    echo "<div style='clear:both;'></div>";
                    while($radek = mysqli_fetch_assoc($result)){
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                        echo "<div style='clear:both;'></div>";
                    }                       
                }                   
                break;
                case "P":
                    $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='P' LIMIT $radek";
                    $result = mysqli_query($conection, $vyber);
                    if (mysqli_num_rows($result) > 0){
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                        echo "<div style='clear:both;'></div>";
                        while($radek = mysqli_fetch_assoc($result)){
                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                            echo "<div style='clear:both;'></div>";
                        }                       
                    }                   
                    break;
                    case "C":
                        $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='C' LIMIT $radek";
                        $result = mysqli_query($conection, $vyber);
                        if (mysqli_num_rows($result) > 0){
                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                            echo "<div style='clear:both;'></div>";
                            while($radek = mysqli_fetch_assoc($result)){
                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                echo "<div style='clear:both;'></div>";
                            }                       
                        }                   
                        break;
                        case "V":
                            $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='V' LIMIT $radek";
                            $result = mysqli_query($conection, $vyber);
                            if (mysqli_num_rows($result) > 0){
                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                                echo "<div style='clear:both;'></div>";
                                while($radek = mysqli_fetch_assoc($result)){
                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                    echo "<div style='clear:both;'></div>";
                                }                       
                            }                   
                            break;
                            case "D":
                                $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='D' LIMIT $radek";
                                $result = mysqli_query($conection, $vyber);
                                if (mysqli_num_rows($result) > 0){
                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                                    echo "<div style='clear:both;'></div>";
                                    while($radek = mysqli_fetch_assoc($result)){
                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                        echo "<div style='clear:both;'></div>";
                                    }                       
                                }                   
                                break;
                                case "R":
                                    $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='R' LIMIT $radek";
                                    $result = mysqli_query($conection, $vyber);
                                    if (mysqli_num_rows($result) > 0){
                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                                        echo "<div style='clear:both;'></div>";
                                        while($radek = mysqli_fetch_assoc($result)){
                                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                            echo "<div style='clear:both;'></div>";
                                        }                       
                                    }                   
                                    break;
                                    case "J":
                                        $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='J' LIMIT $radek";
                                        $result = mysqli_query($conection, $vyber);
                                        if (mysqli_num_rows($result) > 0){
                                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                                            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                                            echo "<div style='clear:both;'></div>";
                                            while($radek = mysqli_fetch_assoc($result)){
                                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                                echo "<div style='clear:both;'></div>";
                                            }                       
                                        }                   
                                        break;
                                        case "T":
                                            $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='T' LIMIT $radek";
                                            $result = mysqli_query($conection, $vyber);
                                            if (mysqli_num_rows($result) > 0){
                                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                                                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                                                echo "<div style='clear:both;'></div>";
                                                while($radek = mysqli_fetch_assoc($result)){
                                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                                    echo "<div style='clear:both;'></div>";
                                                }                       
                                            }                   
                                            break;
                                            case "I":
                                                $vyber= "SELECT lemma, af, rf FROM krkonosskapouttags WHERE tagy='I' LIMIT $radek";
                                                $result = mysqli_query($conection, $vyber);
                                                if (mysqli_num_rows($result) > 0){
                                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
                                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
                                                    echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
                                                    echo "<div style='clear:both;'></div>";
                                                    while($radek = mysqli_fetch_assoc($result)){
                                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                                                        echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                                                        echo "<div style='clear:both;'></div>";
                                                    }                       
                                                }                   
                                                break;
        } 

    } else {
        echo "";
    }

}    
?>