<?php
$servername = "127.0.0.1";
$username = "korpusprozyco001";
$password = "prasmoid";
$dbname = "korpusprozycom05";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $query = $_POST['cqlQuery'];
    $limit = $_POST['limit'];

    // Připojení k databázi
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Kontrola připojení
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Simulace zpracování CQL dotazu
    sleep(2); // Simulace zpoždění

    echo "<p>Results for query: " . htmlspecialchars($query) . "</p>";

    // Zpracování CQL dotazu
    $conditions = [];
    if (preg_match_all('/\[(\w+)\s*=\s*"([^"]+)"\]/', $query, $matches, PREG_SET_ORDER)) {
        foreach ($matches as $match) {
            $field = strtolower($match[1]);
            $value = strtolower($match[2]);
            if (strpos($value, '*') !== false) {
                // Nahrazení hvězdičky procentem pro LIKE
                $value = str_replace('*', '%', $value);
                $conditions[] = "$field LIKE '$value'";
            } else {
                $conditions[] = "$field = '$value'";
            }
        }

        // Přidání podmínky pro vyhledávání sloves končících na -ti
        if (strpos($query, '[word="*ti"]') !== false) {
            $conditions[] = "word LIKE '%ti'";
        }

        // Přidání podmínky pro vyhledávání lemmat končících na -ti
        if (strpos($query, '[lemma="*ti"]') !== false) {
            $conditions[] = "lemma LIKE '%ti'";
        }

        // Přidání dalších specifických podmínek
        if (strpos($query, '[lemma="něco"]') !== false) {
            $conditions[] = "lemma LIKE '%něco%'";
        }
        if (strpos($query, '[tag="něco"]') !== false) {
            $conditions[] = "tag LIKE '%něco%'";
        }

        if (!empty($conditions)) {
            $sql = "SELECT * FROM allauthors WHERE " . implode(' OR ', $conditions) . " ORDER BY word ASC LIMIT $limit";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Vytvoření divů pro výsledky
                echo "<div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>Word</div>
                      <div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>Lemma</div>
                      <div style='border: 1px solid black; width: 150px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>Tag</div>
                      <div style='border: 1px solid black; width: 300px; margin-right: 3px; float: left; margin-bottom: 3px; font-weight: bold; background-color: #FFF176;'>Title</div>";
                echo "<div style='clear:both;'></div>";
                while($row = $result->fetch_assoc()) {
                    echo "<div style='float: left; max-width: 100%;'>";
                    echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>" . htmlspecialchars($row["word"]) . "</div>";
                    echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>" . htmlspecialchars($row["lemma"]) . "</div>";
                    echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 150px; background-color: #F5F5F5; color: blue;'>" . htmlspecialchars($row["tag"]) . "</div>";
                    echo "<div style='text-align: left; float: left; margin-right: 3px; border: 1px solid black; margin-bottom: 3px; width: 300px; background-color: #F5F5F5; color: blue;'>" . htmlspecialchars($row["title"]) . "</div>";
                    echo "<div style='clear:both;'></div>";
                }
                echo "<div style='clear:both;'></div>";
            } else {
                echo "<p>No results found</p>";
            }
        } else {
            echo "<p>Invalid query format</p>";
        }
    } else {
        echo "<p>Invalid query format</p>";
    }

    $conn->close();
}
?>