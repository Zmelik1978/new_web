<?php
if(isset($_POST["submit"])){
    if($lemma = $_POST["neviditelnapraha"]){
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom01");
        mysqli_set_charset($conection, "utf8mb4");
        if($conection){
            $stmt = $conection->prepare("SELECT af, rf FROM neviditelnaprahatags WHERE lemma=?");
            $stmt->bind_param("s", $lemma);
            $stmt->execute();
            $result = $stmt->get_result();
            $radek = $result->fetch_assoc();
            if($radek){
                echo "<div style='font-weight: bold; font-size: 15px; float: left; margin-left: 121px;'>Af</div>";
                echo "<div style='font-weight: bold; font-size: 15px; float: left; margin-left: 15px;'>Rf</div><br>";
                
                echo "<div style='font-weight: bold; font-size: 15px; float: left;margin-right: 20px; width: 100px;'>".$lemma."</div> ".
                "<div style='font-size: 15px; float: left; color: blue; width: 20px;'>".$radek["af"]."</div>".
                "<div style='font-size: 15px; float: left; margin-left: 10px; color: blue;'>".$radek["rf"]."</div>";
                
                echo "<br><br>";
            } else {
                echo "<span style='color: red;'>Lemma is not in database.</span>";
            }
            $stmt->close();
        } else {
            die ("Nelze se připojit do databáze");
        }
    } else {
        echo "";
    }
}

// VYHLEDÁVÁNÍ TVARŮ 
$conect = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
mysqli_set_charset($conect, "utf8mb4");
if($conect){
    $stmt = $conect->prepare("SELECT DISTINCT LOWER(token) AS token FROM neviditelnaprahakonkordance WHERE lemma=?");
    $stmt->bind_param("s", $lemma);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0){
        echo "Tokens: ";
        while($radek1 = $result->fetch_assoc()){
            echo "<span style='color: blue;'>";
            echo $radek1["token"].", ";
            echo "</span>";
        }
        echo "<a href='frequency-list/neviditelnapraha.pdf' target='_blank'><img src='../../icons/file-earmark-pdf.svg' style='width: 20px; height: 20px; margin-left: 20px;'></a>";
    } else {
        echo "<br><br>";
        echo "Tokens are not in database.";
    }
    $stmt->close();
} else {
    die ("Nelze se připojit do databáze");
}
?>