<?php
// povidky malostranske
if(isset($_POST["submit"])){
    if($lemma = $_POST["povidkymalostranske"]){
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom01");
        mysqli_set_charset($conection, "utf8mb4");
        if($conection){
            $stmt = $conection->prepare("SELECT af, rf FROM povidkymalostransketags WHERE lemma=?");
            $stmt->bind_param("s", $lemma);
            $stmt->execute();
            $query = $stmt->get_result();
            $radek = $query->fetch_assoc();
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
    // VYHLEDÁVNÍ TVARŮ 
    $conect = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
    mysqli_set_charset($conect, "utf8mb4");
    if($conect){
        $stmt1 = $conect->prepare("SELECT DISTINCT LOWER(token) AS token FROM povidkymalostranskekonkordance WHERE lemma=?");
        $stmt1->bind_param("s", $lemma);
        $stmt1->execute();
        $query1 = $stmt1->get_result();
        if ($query1->num_rows > 0){
            echo "Tokens: ";
            while($radek1 = $query1->fetch_assoc()){
                echo "<span style='color: blue;'>";
                echo $radek1["token"].", ";
                echo "</span>";
                }
                echo "<a href='frequency-list/povidkymalostranske.pdf' target='_blank'><img src='../../icons/file-earmark-pdf.svg' style='width: 20px; height: 20px; margin-left: 20px;'></a>";
            }
        } else {
            echo "<br><br>";
            echo "Tokeny nejsou v databázi";
        }
 
?>