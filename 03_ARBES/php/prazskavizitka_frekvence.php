<?php
// VYHLEDÁVNÍ af rf V NEWTONŮV MOZEK
if(isset($_POST["submit"])){
    if($lemma = $_POST["prazskavizitka"]){
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom01");
        mysqli_set_charset($conection, "utf8mb4");
        if($conection){
            $sql = "SELECT af, rf FROM prazskavizitkatags WHERE lemma='".$lemma."'";
            $query = mysqli_query($conection, $sql);
            $radek = mysqli_fetch_assoc($query);
            if($radek){
            
                echo "<div style='font-weight: bold; font-size: 15px; float: left; margin-left: 121px;'>Af</div>";
                echo "<div style='font-weight: bold; font-size: 15px; float: left; margin-left: 15px;'>Rf</div><br>";
                
                echo "<div style='font-weight: bold; font-size: 15px; float: left;margin-right: 20px; width: 100px;'>".$lemma."</div> ".
                "<div style='font-size: 15px; float: left; color: blue; width: 20px;'>".$radek["af"]."</div>".
                "<div style='font-size: 15px; float: left; margin-left: 10px; color: blue;'>".$radek["rf"]."</div>";
                
                echo "<br><br>";
            } else {
                echo "<span style='color: red;'>Lemma není v databázi</span>";
            }
                           
        } else {
            die ("Nelze se připojit do databáze");
        }

    } else {
        echo "";
    }
}

    // VYHLEDÁVNÍ TVARŮ V NEWTONŮV MOZEK
    $conect = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
    mysqli_set_charset($conect, "utf8mb4");
    if($conect){
        $question = "SELECT DISTINCT LOWER (token) AS token FROM prazskavizitkakonkordance WHERE lemma='".$lemma."'";
        $query1 = mysqli_query($conect, $question);
        if (mysqli_num_rows($query1) > 0){
            echo "Tokens: ";
            while($radek1 = mysqli_fetch_assoc($query1)){
                echo "<span style='color: blue;'>";
                echo $radek1["token"].", ";
                echo "</span>";
                }
                echo "<a href='frequency-list/prazskavizitka.pdf' target='_blank'><img src='../../icons/file-earmark-pdf.svg' style='width: 20px; height: 20px; margin-left: 20px;'></a>";
            }
        } else {
            echo "<br><br>";
            echo "Tokeny nejsou v databázi";
        }
     
?>