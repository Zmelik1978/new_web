
<?php

ini_set('max_execution_time', 0); // for infinite time of execution 

if (isset($_POST["submit"])){
    if ($_POST["word1"] and $_POST["word2"]){
        $lemma1 = $_POST["word1"];
        $lemma2 = $_POST["word2"];

        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");

        mysqli_set_charset($conection, "utf8mb4");

        $sql1 = "SELECT id FROM allajvazkonkordance WHERE lemma='".$lemma1."'";
        $sql2 = "SELECT id FROM allajvazkonkordance WHERE lemma='".$lemma2."'";
        

        $ids1 = [];
        $result_lemma1 = mysqli_query($conection, $sql1);    
        while ($radek_lemma1 = mysqli_fetch_assoc($result_lemma1)){
            $ids1[] = $radek_lemma1["id"];
        }

        $ids2 = [];
        $result_lemma2 = mysqli_query($conection, $sql2);    
        while ($radek_lemma2 = mysqli_fetch_assoc($result_lemma2)){
            $ids2[] = $radek_lemma2["id"];
        }

        // uvádí se jen tři pozice v pravo
        foreach ( $ids1 as $id1 ) {
            $ids_frame = [ $id1-3, $id1-2, $id1-1, $id1+1, $id1+2, $id1+3 ];
            $ids2_context = array_intersect($ids_frame, $ids2);
            $c1 = count($ids2_context);
            if ( $c1 > 0  or $c1 < 0) {
                
                $sql_query = "SELECT token FROM allajvazkonkordance WHERE id ='".$id1."'";
                $result_query = mysqli_query($conection, $sql_query); 
                $assoc_query = mysqli_fetch_assoc($result_query);
                $word = $assoc_query["token"];
                                              
                $sql_query1 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1+1)."'";
                $result_query1 = mysqli_query($conection, $sql_query1); 
                $assoc_query1 = mysqli_fetch_assoc($result_query1);
                $word1 = $assoc_query1["token"];
                
                $sql_query2 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1+2)."'";
                $result_query2 = mysqli_query($conection, $sql_query2); 
                $assoc_query2 = mysqli_fetch_assoc($result_query2);
                $word2 = $assoc_query2["token"];

                $sql_query3 = "SELECT token, title FROM allajvazkonkordance WHERE id ='".($id1+3)."'";
                $result_query3 = mysqli_query($conection, $sql_query3); 
                $assoc_query3 = mysqli_fetch_assoc($result_query3);
                $word3 = $assoc_query3["token"];
                $title = $assoc_query3["title"];

                $sql_query4 = "SELECT token, title FROM allajvazkonkordance WHERE id ='".($id1+4)."'";
                $result_query4 = mysqli_query($conection, $sql_query4); 
                $assoc_query4 = mysqli_fetch_assoc($result_query4);
                $word4 = $assoc_query4["token"];
                
                $sql_query5 = "SELECT token, title FROM allajvazkonkordance WHERE id ='".($id1+5)."'";
                $result_query5 = mysqli_query($conection, $sql_query5); 
                $assoc_query5 = mysqli_fetch_assoc($result_query5);
                $word5 = $assoc_query5["token"];
                               
                $sql_query_minus_1 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1-1)."'";
                $result_query_minus_1 = mysqli_query($conection, $sql_query_minus_1); 
                $assoc_query_minus_1 = mysqli_fetch_assoc($result_query_minus_1);
                $word_minus_1 = $assoc_query_minus_1["token"];
              
                $sql_query_minus_2 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1-2)."'";
                $result_query_minus_2 = mysqli_query($conection, $sql_query_minus_2); 
                $assoc_query_minus_2 = mysqli_fetch_assoc($result_query_minus_2);
                $word_minus_2 = $assoc_query_minus_2["token"];
                
                $sql_query_minus_3 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1-3)."'";
                $result_query_minus_3 = mysqli_query($conection, $sql_query_minus_3); 
                $assoc_query_minus_3 = mysqli_fetch_assoc($result_query_minus_3);
                $word_minus_3 = $assoc_query_minus_3["token"];

                $sql_query_minus_4 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1-4)."'";
                $result_query_minus_4 = mysqli_query($conection, $sql_query_minus_4); 
                $assoc_query_minus_4 = mysqli_fetch_assoc($result_query_minus_4);
                $word_minus_4 = $assoc_query_minus_4["token"];
               
                $sql_query_minus_5 = "SELECT token FROM allajvazkonkordance WHERE id ='".($id1-5)."'";
                $result_query_minus_5 = mysqli_query($conection, $sql_query_minus_5); 
                $assoc_query_minus_5 = mysqli_fetch_assoc($result_query_minus_5);
                $word_minus_5 = $assoc_query_minus_5["token"];      

                echo "<span style='float: left; width: 600px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>".$word_minus_5." ".$word_minus_4." ".$word_minus_3." ". $word_minus_2. " ".$word_minus_1." <span style='color: #cd6155'>". $word. "</span> ".$word1." ". $word2." ".$word3." ".$word4." ".$word5." </span><span style='color: blue; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-left: 50px; width: 700px;'><em>".$title."</em></span><br>";

                
            }                
        }    
    
    }         
}
?>