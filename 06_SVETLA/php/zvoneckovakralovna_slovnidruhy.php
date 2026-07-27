<?php
if(isset($_POST["pocetradku"])){
   $radek = $_POST["pocetradku"];
} else {
   $radek = 100; // default value
}

if (isset($_POST["submit"])) {
    if ($name = $_POST["zvoneckovakralovna"]){
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom01");
        mysqli_set_charset($conection, "utf8mb4");

        $stmt = $conection->prepare("SELECT lemma, af, rf FROM zvoneckovakralovnatags WHERE tagy=? LIMIT ?");
        $stmt->bind_param("si", $name, $radek);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0){
            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>LEMMA</div>";
            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>AF</div>";
            echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; margin-bottom: 5px; font-weight: bold; background-color: #FFF176;'>RF</div>";
            echo "<div style='clear:both;'></div>";
            while($radek = $result->fetch_assoc()){
                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; margin-bottom: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["lemma"]."</span>"."</div>";
                echo "<div style='border: 1px solid black; width: 100px; margin-right: 3px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["af"]."</span>"."</div>";
                echo "<div style='border: 1px solid black; width: 100px; margin-right: 5px; float: left; background-color: #F5F5F5'>"."<span style='color: blue;'>".$radek["rf"]."</span>"."</div>";
                echo "<div style='clear:both;'></div>";
            }
        } else {
            echo "No results found.";
        }
    } else {
        echo "Please select a tag.";
    }
}
?>