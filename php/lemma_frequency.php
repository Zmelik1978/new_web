<?php
ini_set('max_execution_time', 0); // for infinite time of execution

if (isset($_POST["submit"])) {
    if ($_POST["lemma"]) {
        $lemma = $_POST["lemma"];
       
        $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
        mysqli_set_charset($conection, "utf8mb4");
        if ($conection) {
            // Dotaz pro získání celkového počtu slov v databázi
            $total_words_query = "SELECT COUNT(*) as total_words FROM allcorpuskonkordance";
            $total_words_result = mysqli_query($conection, $total_words_query);
            $total_words_row = mysqli_fetch_assoc($total_words_result);
            $total_words = $total_words_row['total_words'];

            // Připravený dotaz pro získání lemmat seskupených podle autora
            $stmt = $conection->prepare("SELECT COUNT(*) as lemma_count, name, surname FROM allcorpuskonkordance WHERE lemma=? GROUP BY name, surname ORDER BY lemma_count DESC");
            $stmt->bind_param("s", $lemma);
            $stmt->execute();
            $result_lemma = $stmt->get_result();

            $rowcount = mysqli_num_rows($result_lemma);
            
            if ($rowcount > 0) {
                echo "<style>
                        table {
                            width: 100%;
                            border-collapse: separate;
                            border-spacing: 3px; /* Přidání mezer mezi buňkami */
                        }
                        th, td {
                            border: 1px solid black;
                        }
                        th, td {
                            padding: 5px;
                            text-align: left;
                            font-size: 15px;
                        }
                        th {
                            background-color: #FFF176;
                        }
                        td {
                            background-color: #F5F5F5;
                            color: blue;
                        }
                      </style>";
                echo "<table>";
                echo "<tr><th>Name</th><th>Surname</th><th>Relative Frequency (i.p.m.)</th></tr>";
                while ($row = $result_lemma->fetch_assoc()) {
                    $absolute_frequency_of_lemma = $row['lemma_count'];
                    $relative_frequency_of_lemma = ($absolute_frequency_of_lemma / 6747566) * 1000000;

                    echo "<tr>";
                    echo "<td>".$row['name']."</td>";
                    echo "<td>".$row['surname']."</td>";
                    echo "<td>".number_format($relative_frequency_of_lemma, 2)."</td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "No results found";
            }
        } else {
            echo "Connection failed: " . mysqli_connect_error();
        }
    }
}
?>