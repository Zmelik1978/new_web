<?php
ini_set('max_execution_time', 0); // for infinite time of execution 

if (isset($_POST["submit"])){
    if ($_POST["radio"] && $_POST["radio"] == "2"){
        if ($_POST["marinka"]){
            $lemma = $_POST["marinka"];
            $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
            mysqli_set_charset($conection, "utf8mb4");
            $sql = "SELECT id, token, title FROM marinkanarratorkonkordance WHERE lemma='".$lemma."'";
            $result_lemma = mysqli_query($conection, $sql);    
            $rowcount=mysqli_num_rows($result_lemma);   //počet řádků
            printf("<span style='color: blue; margin-left: 100px; font-size: 13px; color: green;'>Počet řádků: %d \n</span>",$rowcount);          
            if (mysqli_num_rows($result_lemma) > 0){
                while ($radek_lemma = mysqli_fetch_assoc($result_lemma)){
                    $ID_LEMMA = $radek_lemma["id"];     //id lemmatu
                    
                    if ($ID_LEMMA) {

                        $token = $radek_lemma["token"];     // token

                        // PRAVÝ KONTEXT
                        $tokenPlusJedna = $ID_LEMMA+1;
                        $sql2 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPlusJedna."'";
                        $result2 = mysqli_query($conection, $sql2);
                        if (mysqli_num_rows($result2) > 0) {
                            while ($radek2 = mysqli_fetch_assoc($result2)){
                                $P_1 = $radek2["token"]; //pravý token +1
                                
                            }
                        } 
                        $tokenPlusDva = $ID_LEMMA+2;
                        $sql3 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPlusDva."'";
                        $result3 = mysqli_query($conection, $sql3);
                        if (mysqli_num_rows($result3) > 0) {
                            while ($radek3 = mysqli_fetch_assoc($result3)){
                                $P_2 = $radek3["token"]; //pravý token +2
                                
                            }
                        } 
                        $tokenPlusTri = $ID_LEMMA+3;
                        $sql4 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPlusTri."'";
                        $result4 = mysqli_query($conection, $sql4);
                        if (mysqli_num_rows($result4) > 0) {
                            while ($radek4 = mysqli_fetch_assoc($result4)){
                                $P_3 = $radek4["token"]; //pravý token +3
                                
                            }
                        }
                        $tokenPlusCtyri = $ID_LEMMA+4;
                        $sql5 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPlusCtyri."'";
                        $result5 = mysqli_query($conection, $sql5);
                        if (mysqli_num_rows($result5) > 0) {
                            while ($radek5 = mysqli_fetch_assoc($result5)){
                                $P_4 = $radek5["token"]; //pravý token +4
                                
                            }
                        }  
                        $tokenPlusPet = $ID_LEMMA+5;
                        $sql6 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPlusPet."'";
                        $result6 = mysqli_query($conection, $sql6);
                        if (mysqli_num_rows($result6) > 0) {
                            while ($radek6 = mysqli_fetch_assoc($result6)){
                                $P_5 = $radek6["token"]; //pravý token +5
                                
                            }
                        } 
                        
                        // LEVÝ KONTEXT
                        $tokenPMinusJedna = $ID_LEMMA-1;    
                        $sql7 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPMinusJedna."'";
                        $result7 = mysqli_query($conection, $sql7);
                        if (mysqli_num_rows($result7) > 0) {
                            while ($radek7 = mysqli_fetch_assoc($result7)){
                                $L_1 = $radek7["token"]; //levý token -1
                                
                            }
                        }
                        $tokenPMinusDve = $ID_LEMMA-2;    
                        $sql8 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPMinusDve."'";
                        $result8 = mysqli_query($conection, $sql8);
                        if (mysqli_num_rows($result8) > 0) {
                            while ($radek8 = mysqli_fetch_assoc($result8)){
                                $L_2 = $radek8["token"]; //levý token -2
                                
                            }
                        }
                        $tokenPMinusTri = $ID_LEMMA-3;    
                        $sql9 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPMinusTri."'";
                        $result9 = mysqli_query($conection, $sql9);
                        if (mysqli_num_rows($result9) > 0) {
                            while ($radek9 = mysqli_fetch_assoc($result9)){
                                $L_3 = $radek9["token"]; //levý token -3
                                
                            }
                        }
                        $tokenPMinusCtyri = $ID_LEMMA-4;    
                        $sql10 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPMinusCtyri."'";
                        $result10 = mysqli_query($conection, $sql10);
                        if (mysqli_num_rows($result10) > 0) {
                            while ($radek10 = mysqli_fetch_assoc($result10)){
                                $L_4 = $radek10["token"]; //levý token -4
                                
                            }
                        }
                        $tokenPMinusPet = $ID_LEMMA-5;    
                        $sql11 = "SELECT token FROM marinkanarratorkonkordance WHERE id='".$tokenPMinusPet."'";
                        $result11 = mysqli_query($conection, $sql11);
                        if (mysqli_num_rows($result11) > 0) {
                            while ($radek11 = mysqli_fetch_assoc($result11)){
                                $L_5 = $radek11["token"]; //levý token -5
                                
                            }
                        }    
                        
                        $title = $radek_lemma["title"];     
                    
                    echo "<div style='float: left; width: 300px; text-align: right; font-size: 13px; margin-left: 120px;'>".$L_5." ".$L_4." ".$L_3." ".$L_2." ".$L_1." "."</div>";
                    echo "<div style='font-weight: bold; margin-left: 30px; margin-right:30px; float: left; width: 50px; text-align: center; font-size: 13px;'>".$token."</div>";
                    echo "<div style='float: left; width: 300px; text-align: left; font-size: 13px;'>".$P_1." ".$P_2." ".$P_3." ".$P_4." ".$P_5."</div>";  
                    echo "<div style='float: left; color: blue; font-style: italic;'>".$title."</div><br>";   
                                                
                                
                } 
            }
        } else {
            echo "<span style='color: red; margin-left: 500px;'>Lemma not found, enter new lemma.</span>";
        }
    }  
}
}
?>