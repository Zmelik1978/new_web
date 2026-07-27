<?php

ini_set('max_execution_time', 0); // for infinite time of execution 

if (isset($_POST["submit"])){
    if ($_POST["concordance"]){
        $lemma = $_POST["concordance"];
        $radek = intval($_POST["pocetradku"]); // Zajistěte, že $radek je celé číslo
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
        mysqli_set_charset($conection, "utf8mb4");

        // Připravený dotaz pro získání lemmat
        $stmt = $conection->prepare("SELECT id, token, name, surname, title FROM allcorpuskonkordance WHERE lemma=? ORDER BY RAND() LIMIT ?");
        $stmt->bind_param("si", $lemma, $radek);
        $stmt->execute();
        $result_lemma = $stmt->get_result();
        
        $rowcount = $result_lemma->num_rows;   //počet řádků
                 
        if ($rowcount > 0){
            while ($radek_lemma = $result_lemma->fetch_assoc()){
                $ID_LEMMA = $radek_lemma["id"];     //id lemmatu

                $name = $radek_lemma['name']; 
                $surname = $radek_lemma['surname'];
                $title = $radek_lemma['title'];
                
                if ($ID_LEMMA) {

                    $token = $radek_lemma["token"];     // token

                    // PRAVÝ KONTEXT
                    $P_1 = $P_2 = $P_3 = $P_4 = $P_5 = "";
                    for ($i = 1; $i <= 5; $i++) {
                        $tokenPlus = $ID_LEMMA + $i;
                        $stmt = $conection->prepare("SELECT token FROM allcorpuskonkordance WHERE id=?");
                        $stmt->bind_param("i", $tokenPlus);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if ($result->num_rows > 0) {
                            $row = $result->fetch_assoc();
                            ${"P_$i"} = $row["token"];
                        }
                    }

                    // LEVÝ KONTEXT
                    $L_1 = $L_2 = $L_3 = $L_4 = $L_5 = "";
                    for ($i = 1; $i <= 5; $i++) {
                        $tokenMinus = $ID_LEMMA - $i;
                        $stmt = $conection->prepare("SELECT token FROM allcorpuskonkordance WHERE id=?");
                        $stmt->bind_param("i", $tokenMinus);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if ($result->num_rows > 0) {
                            $row = $result->fetch_assoc();
                            ${"L_$i"} = $row["token"];
                        }
                    }

                    echo "<div style='float: left; width: 500px; text-align: right; font-size: 13px;'>".$L_5." ".$L_4." ".$L_3." ".$L_2." ".$L_1." "."</div>";
                    echo "<div style='font-weight: bold; margin-left: 30px; margin-right:30px; float: left; width: 50px; text-align: center; font-size: 12px;'>".$token."</div>";
                    echo "<div style='float: left; width: 300px; text-align: left; font-size: 13px;'>".$P_1." ".$P_2." ".$P_3." ".$P_4." ".$P_5." </div>";
                    echo "<div style='float: right; width: 350px; text-align: left; font-size: 13px; color: brown;'>".$name." ".$surname.": <i>".$title."</i></div><br>";                   
                } 
            }
        } else {
            echo "<span style='color: red; margin-left: 500px;'>Lemma nenalezeno, zadejte nové lemma.</span>";
        }
    }  
}
?>