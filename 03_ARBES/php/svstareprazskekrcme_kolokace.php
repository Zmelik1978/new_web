<?php
    if (isset($_POST["Submit"])){
        if ($_POST["vstareprazskekrcme"]){
            
            $lemma = $_POST["vstareprazskekrcme"];

            $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom04");
            mysqli_set_charset($conection, "utf8mb4");

            // COUNTING ROWS IN TABLE = N
            $sgl_n = "SELECT id FROM vstareprazskekrcmebigramy";
            $result4 = mysqli_query($conection, $sgl_n);
            $N = mysqli_num_rows($result4); //N


            // prave kolokace
            $sql = "SELECT DISTINCT LOWER (word2) AS word2 FROM vstareprazskekrcmebigramy WHERE word1='".$lemma."'";
            $result_kolokace = mysqli_query($conection, $sql);  
            if (mysqli_num_rows($result_kolokace) > 0){
                while ($radek_kolokace = mysqli_fetch_assoc($result_kolokace)){
                    
                    $kolokace = $radek_kolokace["word2"]; // pravé kolokace - seznam
                    
                    $mysql1 = "SELECT COUNT(word1) as w1 FROM vstareprazskekrcmebigramy WHERE word2='".$kolokace."'";
                    mysqli_set_charset($conection, "utf8mb4");
                    $result = mysqli_query($conection, $mysql1);  
                    if (mysqli_num_rows($result) > 0){
                        while ($radek = mysqli_fetch_assoc($result)){
                            $freq_w1 = $radek["w1"]; // frequency of collocations

                        }
                    }

                    $mysql2 = "SELECT COUNT(word2) as w2 FROM vstareprazskekrcmebigramy WHERE word1='".$lemma."'";
                    mysqli_set_charset($conection, "utf8mb4");
                    $result2 = mysqli_query($conection, $mysql2);  
                    if (mysqli_num_rows($result2) > 0){
                        while ($radek2 = mysqli_fetch_assoc($result2)){
                            $freq_w2 = $radek2["w2"]; // frekvence lemmatu, který zadávám 
                        }

                    $mysql3 = "SELECT COUNT(id) as id FROM vstareprazskekrcmebigramy WHERE word1='".$lemma."' AND word2='".$kolokace."'";
                    mysqli_set_charset($conection, "utf8mb4");
                    $result3 = mysqli_query($conection, $mysql3);  
                    if (mysqli_num_rows($result3) > 0){
                        while ($radek3 = mysqli_fetch_assoc($result3)){
                            $freq_w3 = $radek3["id"]; // frequency of bigrams 
                        }      



                    // COUNTING logDice - vpravo
                    $logDice = 14+log(2*$freq_w3/$freq_w2+$freq_w1); // logDice value
                    $logDice_round = round($logDice, 2);

                    //COUNTING MI-score - vpravo
                    $Mi_score = log($N*$freq_w3/($freq_w2*$freq_w1)); // MI-score
                    $Mi_score_round = round($Mi_score, 2);

                    //COUNTING T-score - vpravo
                    $T_score = (($freq_w3-(($freq_w1*$freq_w2)/$N))/sqrt($freq_w3 )); // T-score
                    $T_score_round = round($T_score, 2);

                    $pole_logDice[$kolokace] = floatval($logDice_round);
                    $pole_miscore[$kolokace] = floatval($Mi_score_round);
                    $pole_tscore[$kolokace] = floatval($T_score_round);  

                        }
                    }
                } 
            }

            // leve kolokace
            $sql2 = "SELECT DISTINCT LOWER (word1) AS word1 FROM vstareprazskekrcmebigramy WHERE word2='".$lemma."'";
            $result_kolokace2 = mysqli_query($conection, $sql2);
            if (mysqli_num_rows($result_kolokace2) > 0){
                while ($radek_kolokace2 = mysqli_fetch_assoc($result_kolokace2)){
                    $kolokace2 = $radek_kolokace2["word1"]; // levé kolokace - seznam

                    $mysql4 = "SELECT COUNT(word2) as w2 FROM vstareprazskekrcmebigramy WHERE word1='".$kolokace."'";
                    mysqli_set_charset($conection, "utf8mb4");
                    $result4 = mysqli_query($conection, $mysql4); 
                    if (mysqli_num_rows($result4) > 0){
                        while ($radek4 = mysqli_fetch_assoc($result4)){
                            $freq_w4 = $radek4["w2"]; // frequency of collocations
                        }
                    }

                    $mysql5 = "SELECT COUNT(word1) as w1 FROM vstareprazskekrcmebigramy WHERE word2='".$lemma."'";
                    mysqli_set_charset($conection, "utf8mb4");
                    $result5 = mysqli_query($conection, $mysql5);  
                    if (mysqli_num_rows($result5) > 0){
                        while ($radek5 = mysqli_fetch_assoc($result5)){
                            $freq_w5 = $radek5["w1"]; // frekvence lemmatu, který zadávám 
                        }

                    $mysql6 = "SELECT COUNT(id) as id FROM vstareprazskekrcmebigramy WHERE word2='".$lemma."' AND word1='".$kolokace2."'";
                    mysqli_set_charset($conection, "utf8mb4");
                    $result6 = mysqli_query($conection, $mysql6);  
                    if (mysqli_num_rows($result6) > 0){
                        while ($radek6 = mysqli_fetch_assoc($result6)){
                            $freq_w6 = $radek6["id"]; // frequency of bigrams 
                        }    


                    // COUNTING logDice - vlevo
                    $logDice2 = 14+log(2*$freq_w6/$freq_w5+$freq_w4); // logDice value
                    $logDice_round2 = round($logDice2, 2);  

                    //COUNTING MI-score - vlevo
                    $Mi_score2 = log($N*$freq_w6/($freq_w5*$freq_w4)); // MI-score
                    $Mi_score_round2 = round($Mi_score2, 2);

                    //COUNTING T-score - vlevo
                    $T_score2 = (($freq_w6-(($freq_w4*$freq_w5)/$N))/sqrt($freq_w6 )); // T-score
                    $T_score_round2 = round($T_score2, 2);

                    $pole_logDice2[$kolokace2] = floatval($logDice_round2);
                    $pole_miscore2[$kolokace2] = floatval($Mi_score_round2);
                    $pole_tscore2[$kolokace2] = floatval($T_score_round2); 

                       }
                    }
                } 
            }


        // print prave kolokace
        echo "<div style='float: left; margin-right: 2rem; font-weight: bold;'>".$lemma."<span style='font-size: 15px;'> →</span></div>";

        arsort($pole_logDice);

        echo "<div style='float: left; margin-right: 2rem;'>";  
        echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>COLLOCATIONS</div>"."<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>logDice</div>";

        echo "<div style='clear:both;'></div>";

        foreach ($pole_logDice as $kolokace => $logDice){
            
            echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>".$kolokace."</div>"."<div style='text-align: left; float: left; border: 1px solid black; width: 80px; background-color: #F5F5F5; color: blue;'>".$logDice."</div>".'<br>';
            
        }
        echo "</div>";
        

        arsort($pole_miscore);

        echo "<div style='float: left; margin-right: 2rem;'>";  
        echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>COLLOCATIONS</div>"."<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>MI-score</div>";

        echo "<div style='clear:both;'></div>";

        foreach ($pole_miscore as $kolokace => $Mi_score){
            
            echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>".$kolokace."</div>"."<div style='text-align: left; float: left; border: 1px solid black; width: 80px; background-color: #F5F5F5; color: blue;'>".$Mi_score."</div>".'<br>';
            
        }
        echo "</div>";


        arsort($pole_tscore);

        echo "<div style='float: left;'>";  
        echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>COLLOCATIONS</div>"."<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>T-score</div>";

        echo "<div style='clear:both;'></div>";

        foreach ($pole_tscore as $kolokace => $T_score){
            
            echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>".$kolokace."</div>"."<div style='text-align: left; float: left; border: 1px solid black; width: 80px; background-color: #F5F5F5; color: blue;'>".$T_score."</div>".'<br>';
            
        }
        echo "</div>";
            

        echo "<div style='clear:both;'></div>";


        // print leve kolokace
        echo "<div style='float: left; margin-right: 2rem; font-weight: bold;'><span style='font-size: 15px;'> ← </span>".$lemma."</div>";
        
        arsort($pole_logDice2);

        echo "<div style='float: left; margin-right: 2rem;'>";  
        echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>COLLOCATIONS</div>"."<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>logDice</div>";

        echo "<div style='clear:both;'></div>";

        foreach ($pole_logDice2 as $kolokace2 => $logDice2){
            
            echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>".$kolokace2."</div>"."<div style='text-align: left; float: left; border: 1px solid black; width: 80px; background-color: #F5F5F5; color: blue;'>".$logDice2."</div>".'<br>';
            
        }
        echo "</div>";
        

        arsort($pole_miscore2);

        echo "<div style='float: left; margin-right: 2rem;'>";  
        echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>COLLOCATIONS</div>"."<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>MI-score2</div>";

        echo "<div style='clear:both;'></div>";

        foreach ($pole_miscore2 as $kolokace2 => $Mi_score2){
            
            echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>".$kolokace2."</div>"."<div style='text-align: left; float: left; border: 1px solid black; width: 80px; background-color: #F5F5F5; color: blue;'>".$Mi_score2."</div>".'<br>';
            
        }
        echo "</div>";


        arsort($pole_tscore2);

        echo "<div style='float: left;'>";  
        echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>COLLOCATIONS</div>"."<div style='border: 1px solid black; width: 80px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>T-score</div>";

        echo "<div style='clear:both;'></div>";

        foreach ($pole_tscore2 as $kolokace2 => $T_score2){
            
            echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>".$kolokace2."</div>"."<div style='text-align: left; float: left; border: 1px solid black; width: 80px; background-color: #F5F5F5; color: blue;'>".$T_score2."</div>".'<br>';
            
        }
        echo "</div>";
    }  
} 
?>