<?php
ini_set('max_execution_time', 0); // for infinite time of execution 

if (isset($_POST["submit"])){
    if ($_POST["trilobit"]){
        $lemma = $_POST["trilobit"];
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
        mysqli_set_charset($conection, "utf8mb4");

        $stmt = $conection->prepare("SELECT id, token FROM trilobitkonkordance WHERE lemma=?");
        $stmt->bind_param("s", $lemma);
        $stmt->execute();
        $result_lemma = $stmt->get_result();
        $rowcount = $result_lemma->num_rows; // počet řádků
        printf("<span style='color: blue; margin-left: -200px; font-size: 13px;'>Počet řádků: %d \n</span>", $rowcount);
        if ($rowcount > 0){
            while ($radek_lemma = $result_lemma->fetch_assoc()){
                $ID_LEMMA = $radek_lemma["id"]; // id lemmatu

                if ($ID_LEMMA) {

                    $token = $radek_lemma["token"]; // token

                    // PRAVÝ KONTEXT
                    $stmt2 = $conection->prepare("SELECT token FROM trilobitkonkordance WHERE id=?");
                    $tokenPlusJedna = $ID_LEMMA + 1;
                    $stmt2->bind_param("i", $tokenPlusJedna);
                    $stmt2->execute();
                    $result2 = $stmt2->get_result();
                    if ($result2->num_rows > 0) {
                        while ($radek2 = $result2->fetch_assoc()){
                            $P_1 = $radek2["token"]; // pravý token +1
                        }
                    } 
                    $tokenPlusDva = $ID_LEMMA + 2;
                    $stmt2->bind_param("i", $tokenPlusDva);
                    $stmt2->execute();
                    $result3 = $stmt2->get_result();
                    if ($result3->num_rows > 0) {
                        while ($radek3 = $result3->fetch_assoc()){
                            $P_2 = $radek3["token"]; // pravý token +2
                        }
                    } 
                    $tokenPlusTri = $ID_LEMMA + 3;
                    $stmt2->bind_param("i", $tokenPlusTri);
                    $stmt2->execute();
                    $result4 = $stmt2->get_result();
                    if ($result4->num_rows > 0) {
                        while ($radek4 = $result4->fetch_assoc()){
                            $P_3 = $radek4["token"]; // pravý token +3
                        }
                    }
                    $tokenPlusCtyri = $ID_LEMMA + 4;
                    $stmt2->bind_param("i", $tokenPlusCtyri);
                    $stmt2->execute();
                    $result5 = $stmt2->get_result();
                    if ($result5->num_rows > 0) {
                        while ($radek5 = $result5->fetch_assoc()){
                            $P_4 = $radek5["token"]; // pravý token +4
                        }
                    }  
                    $tokenPlusPet = $ID_LEMMA + 5;
                    $stmt2->bind_param("i", $tokenPlusPet);
                    $stmt2->execute();
                    $result6 = $stmt2->get_result();
                    if ($result6->num_rows > 0) {
                        while ($radek6 = $result6->fetch_assoc()){
                            $P_5 = $radek6["token"]; // pravý token +5
                        }
                    } 
                    
                    // LEVÝ KONTEXT
                    $tokenPMinusJedna = $ID_LEMMA - 1;    
                    $stmt2->bind_param("i", $tokenPMinusJedna);
                    $stmt2->execute();
                    $result7 = $stmt2->get_result();
                    if ($result7->num_rows > 0) {
                        while ($radek7 = $result7->fetch_assoc()){
                            $L_1 = $radek7["token"]; // levý token -1
                        }
                    }
                    $tokenPMinusDve = $ID_LEMMA - 2;    
                    $stmt2->bind_param("i", $tokenPMinusDve);
                    $stmt2->execute();
                    $result8 = $stmt2->get_result();
                    if ($result8->num_rows > 0) {
                        while ($radek8 = $result8->fetch_assoc()){
                            $L_2 = $radek8["token"]; // levý token -2
                        }
                    }
                    $tokenPMinusTri = $ID_LEMMA - 3;    
                    $stmt2->bind_param("i", $tokenPMinusTri);
                    $stmt2->execute();
                    $result9 = $stmt2->get_result();
                    if ($result9->num_rows > 0) {
                        while ($radek9 = $result9->fetch_assoc()){
                            $L_3 = $radek9["token"]; // levý token -3
                        }
                    }
                    $tokenPMinusCtyri = $ID_LEMMA - 4;    
                    $stmt2->bind_param("i", $tokenPMinusCtyri);
                    $stmt2->execute();
                    $result10 = $stmt2->get_result();
                    if ($result10->num_rows > 0) {
                        while ($radek10 = $result10->fetch_assoc()){
                            $L_4 = $radek10["token"]; // levý token -4
                        }
                    }
                    $tokenPMinusPet = $ID_LEMMA - 5;    
                    $stmt2->bind_param("i", $tokenPMinusPet);
                    $stmt2->execute();
                    $result11 = $stmt2->get_result();
                    if ($result11->num_rows > 0) {
                        while ($radek11 = $result11->fetch_assoc()){
                            $L_5 = $radek11["token"]; // levý token -5
                        }
                    }                    
                   
                    echo "<div style='float: left; width: 500px; text-align: right; font-size: 13px;'>".$L_5." ".$L_4." ".$L_3." ".$L_2." ".$L_1." "."</div>";
                    echo "<div style='font-weight: bold; margin-left: 30px; margin-right:30px; float: left; width: 50px; text-align: center; font-size: 13px;'>".$token."</div>";
                    echo "<div style='float: left; width: 500px; text-align: left; font-size: 13px;'>".$P_1." ".$P_2." ".$P_3." ".$P_4." ".$P_5." "."</div>"."<br>";     
                } 
            }
        } else {
            echo "<span style='color: red; margin-left: 500px;'>Lemma not found, enter new lemma.</span>";
        }
    }  
}
?>