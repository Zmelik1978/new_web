<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head><script src="assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.122.0">
    <title>Words in Context</title>
    <link rel="canonical" href="https://korpusprozy.com/words-in-context.php">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">   

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
      }

      li {
        display: inline;
        margin-right: 2rem;
        

      }
      li a {
        text-decoration: none;
      }
    </style>

    
  </head>
  
<main>
  <div class="container py-4">   

    <ul>
      <li><a href="../index.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg> Home</a></li>
      <li><a href="../corpus.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward" viewBox="0 0 16 16"><path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z"/></svg> Back to Corpus</a></li>
    </ul>

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-0">
        <h1 style="text-align: center; color: #d63384">Words in Context</h1>
      </div>
    </div>

    <p id ="description_wordsincontext" class ="description"></p>
    <script src="../js/description_maps.js"></script>

    <form action="words_in_context.php" method="post" style="margin-bottom: 7px;">
        <div style="float: left; margin-right: 20px;">
            <label style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 15px; color: blue; font-weight: 550;">first lemma: </label><br>
            <input type="text" name="word1" placeholder="" style="margin-bottom: 7px;">
        </div>
        <div style="float: left; margin-right: 20px;">
            <label style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 15px; color: blue; font-weight: 550;">second lemma: </label><br>
            <input type="text" name="word2" placeholder="" style="margin-bottom: 7px;">
        </div>
        
        <input type="submit" name="submit" value="Submit" style="color: blue; padding: 2px 3px; float: left; margin-top: 21px;">
    </form>

    <div style="float: left; margin-top: 100px; margin-left: -438px;">
        <?php
            ini_set('max_execution_time', 0); // for infinite time of execution 

            if (isset($_POST["submit"])){
                if ($_POST["word1"] and $_POST["word2"]){
                    $lemma1 = $_POST["word1"];
                    $lemma2 = $_POST["word2"];
            
                    $conection = mysqli_connect("127.0.0.1", "korpusprozyco001", "prasmoid", "korpusprozycom");
            
                    mysqli_set_charset($conection, "utf8mb4");
            
                    $sql1 = "SELECT id FROM allcorpuskonkordance WHERE lemma='".$lemma1."'";
                    $sql2 = "SELECT id FROM allcorpuskonkordance WHERE lemma='".$lemma2."'";
                    
            
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
                            
                            $sql_query = "SELECT token FROM allcorpuskonkordance WHERE id ='".$id1."'";
                            $result_query = mysqli_query($conection, $sql_query); 
                            $assoc_query = mysqli_fetch_assoc($result_query);
                            $word = $assoc_query["token"];
                                                          
                            $sql_query1 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1+1)."'";
                            $result_query1 = mysqli_query($conection, $sql_query1); 
                            $assoc_query1 = mysqli_fetch_assoc($result_query1);
                            $word1 = $assoc_query1["token"];
                            
                            $sql_query2 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1+2)."'";
                            $result_query2 = mysqli_query($conection, $sql_query2); 
                            $assoc_query2 = mysqli_fetch_assoc($result_query2);
                            $word2 = $assoc_query2["token"];
            
                            $sql_query3 = "SELECT token, title FROM allcorpuskonkordance WHERE id ='".($id1+3)."'";
                            $result_query3 = mysqli_query($conection, $sql_query3); 
                            $assoc_query3 = mysqli_fetch_assoc($result_query3);
                            $word3 = $assoc_query3["token"];
                            $title = $assoc_query3["title"];
            
                            $sql_query4 = "SELECT token, title FROM allcorpuskonkordance WHERE id ='".($id1+4)."'";
                            $result_query4 = mysqli_query($conection, $sql_query4); 
                            $assoc_query4 = mysqli_fetch_assoc($result_query4);
                            $word4 = $assoc_query4["token"];
                            
                            $sql_query5 = "SELECT token, title FROM allcorpuskonkordance WHERE id ='".($id1+5)."'";
                            $result_query5 = mysqli_query($conection, $sql_query5); 
                            $assoc_query5 = mysqli_fetch_assoc($result_query5);
                            $word5 = $assoc_query5["token"];
                                           
                            $sql_query_minus_1 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1-1)."'";
                            $result_query_minus_1 = mysqli_query($conection, $sql_query_minus_1); 
                            $assoc_query_minus_1 = mysqli_fetch_assoc($result_query_minus_1);
                            $word_minus_1 = $assoc_query_minus_1["token"];
                          
                            $sql_query_minus_2 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1-2)."'";
                            $result_query_minus_2 = mysqli_query($conection, $sql_query_minus_2); 
                            $assoc_query_minus_2 = mysqli_fetch_assoc($result_query_minus_2);
                            $word_minus_2 = $assoc_query_minus_2["token"];
                            
                            $sql_query_minus_3 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1-3)."'";
                            $result_query_minus_3 = mysqli_query($conection, $sql_query_minus_3); 
                            $assoc_query_minus_3 = mysqli_fetch_assoc($result_query_minus_3);
                            $word_minus_3 = $assoc_query_minus_3["token"];
            
                            $sql_query_minus_4 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1-4)."'";
                            $result_query_minus_4 = mysqli_query($conection, $sql_query_minus_4); 
                            $assoc_query_minus_4 = mysqli_fetch_assoc($result_query_minus_4);
                            $word_minus_4 = $assoc_query_minus_4["token"];
                           
                            $sql_query_minus_5 = "SELECT token FROM allcorpuskonkordance WHERE id ='".($id1-5)."'";
                            $result_query_minus_5 = mysqli_query($conection, $sql_query_minus_5); 
                            $assoc_query_minus_5 = mysqli_fetch_assoc($result_query_minus_5);
                            $word_minus_5 = $assoc_query_minus_5["token"];      
            
                            echo "<span style='float: left; width: 600px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>".$word_minus_5." ".$word_minus_4." ".$word_minus_3." ". $word_minus_2. " ".$word_minus_1." <span style='color: #cd6155'>". $word. "</span> ".$word1." ". $word2." ".$word3." ".$word4." ".$word5." </span><span style='color: blue; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-left: 50px; width: 700px;'><em>".$title."</em></span><br>";
            
                            
                        }                
                    }    
                
                }         
            }
        ?>
    </div>

  </div>
</main>
</body>
</html>
