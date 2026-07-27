<?php
if (isset($_POST["Submit"])){
    if ($_POST["santinihojazyk"]){
        
        $lemma = $_POST["santinihojazyk"];

        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom04");
        mysqli_set_charset($conection, "utf8mb4");

        // COUNTING ROWS IN TABLE = N
        $sgl_n = "SELECT id FROM santinihojazykbigramy";
        $result4 = mysqli_query($conection, $sgl_n);
        $N = mysqli_num_rows($result4); //N

        // prave kolokace
        $stmt = $conection->prepare("SELECT DISTINCT LOWER(word2) AS word2 FROM santinihojazykbigramy WHERE word1=?");
        $stmt->bind_param("s", $lemma);
        $stmt->execute();
        $result_kolokace = $stmt->get_result();
        if ($result_kolokace->num_rows > 0){
            while ($radek_kolokace = $result_kolokace->fetch_assoc()){
                
                $kolokace = $radek_kolokace["word2"]; // pravé kolokace - seznam
                
                $stmt1 = $conection->prepare("SELECT COUNT(word1) as w1 FROM santinihojazykbigramy WHERE word2=?");
                $stmt1->bind_param("s", $kolokace);
                $stmt1->execute();
                $result = $stmt1->get_result();
                if ($result->num_rows > 0){
                    while ($radek = $result->fetch_assoc()){
                        $freq_w1 = $radek["w1"]; // frequency of collocations
                    }
                }

                $stmt2 = $conection->prepare("SELECT COUNT(word2) as w2 FROM santinihojazykbigramy WHERE word1=?");
                $stmt2->bind_param("s", $lemma);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                if ($result2->num_rows > 0){
                    while ($radek2 = $result2->fetch_assoc()){
                        $freq_w2 = $radek2["w2"]; // frekvence lemmatu, který zadávám 
                    }

                    $stmt3 = $conection->prepare("SELECT COUNT(id) as id FROM santinihojazykbigramy WHERE word1=? AND word2=?");
                    $stmt3->bind_param("ss", $lemma, $kolokace);
                    $stmt3->execute();
                    $result3 = $stmt3->get_result();
                    if ($result3->num_rows > 0){
                        while ($radek3 = $result3->fetch_assoc()){
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
        $stmt4 = $conection->prepare("SELECT DISTINCT LOWER(word1) AS word1 FROM santinihojazykbigramy WHERE word2=?");
        $stmt4->bind_param("s", $lemma);
        $stmt4->execute();
        $result_kolokace2 = $stmt4->get_result();
        if ($result_kolokace2->num_rows > 0){
            while ($radek_kolokace2 = $result_kolokace2->fetch_assoc()){
                $kolokace2 = $radek_kolokace2["word1"]; // levé kolokace - seznam

                $stmt5 = $conection->prepare("SELECT COUNT(word2) as w2 FROM santinihojazykbigramy WHERE word1=?");
                $stmt5->bind_param("s", $kolokace2);
                $stmt5->execute();
                $result4 = $stmt5->get_result();
                if ($result4->num_rows > 0){
                    while ($radek4 = $result4->fetch_assoc()){
                        $freq_w4 = $radek4["w2"]; // frequency of collocations
                    }
                }

                $stmt6 = $conection->prepare("SELECT COUNT(word1) as w1 FROM santinihojazykbigramy WHERE word2=?");
                $stmt6->bind_param("s", $lemma);
                $stmt6->execute();
                $result5 = $stmt6->get_result();
                if ($result5->num_rows > 0){
                    while ($radek5 = $result5->fetch_assoc()){
                        $freq_w5 = $radek5["w1"]; // frekvence lemmatu, který zadávám 
                    }

                    $stmt7 = $conection->prepare("SELECT COUNT(id) as id FROM santinihojazykbigramy WHERE word2=? AND word1=?");
                    $stmt7->bind_param("ss", $lemma, $kolokace2);
                    $stmt7->execute();
                    $result6 = $stmt7->get_result();
                    if ($result6->num_rows > 0){
                        while ($radek6 = $result6->fetch_assoc()){
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