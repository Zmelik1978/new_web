// popis mapy
if (document.getElementById("description_map")){
    document.getElementById("description_map").innerHTML = `By selecting a specific work in the right menu, the fictional topography model can be displayed on the map. Under the Legend link, the uniform symbols used in the mapping are explained. Under the links (Place Density, Network Models, Toponyms and Prague and non-Prague locations) additional cartographic models are available. The base map is from 1831. Below the fictional topography models is a map in which the actual topography can be viewed. The first map load may take a little longer. Please be patient.`;
} 

// popis asiociační míry
if (document.getElementById("description_assoc")) {
    document.getElementById("description_assoc").innerHTML = `Type lemma in the search bar. The tables will list the collocations sorted by logDice, MI-score and T-score. For the calculation click on <a href="https://wiki.korpus.cz/doku.php/pojmy:asociacni_miry" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>. The → symbol indicates the right context, the ← symbol indicates the left context. Collocations are calculated from the list of bigrams.`;
} 

// popis frekvence
if (document.getElementById("description_freq")) {
    document.getElementById("description_freq").innerHTML = `In the line, type the lemma whose frequency and shapes you want to search for in the piece. When the results are displayed, at the end of the line of found shapes for that lemma, you will see a PDF file with a complete frequency list of all the lemmas in that part. <span style="color: blue; font-weight: bold;">`;
}

// popis textové segmenty
if (document.getElementById("description_textsegment")) {
    document.getElementById("description_textsegment").innerHTML = `This section contains information about the analyzed text segments. In the first chart you will find an overview of the sentence length in the individual text segments, such as narrative speeches, character speeches or embedded texts (letter, notebooks, etc.). The second graph shows the frequency distribution of individual text segments throughout the author's work. The third graph shows the frequency distribution of individual text segments in specific works.`;
}

// popisek konkordance
if (document.getElementById("description_concordance")) {
    document.getElementById("description_concordance").innerHTML = `The concordance is a list of all occurrences of the searched word in the text. The word is displayed in the middle of the line, the left and right context (5 tokens) is displayed on both sides. <span style="color: blue; font-weight: bold;">To search in all author's texts, click on</span> <a href="concordance-all.php" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>.`;
}

// popisek piechart
if (document.getElementById("description_piechart")) {
    document.getElementById("description_piechart").innerHTML = `To see the percentage distribution of word types in a given work, choose novel from the menu.`;
}

//popisek pozicni tagy
if (document.getElementById("description_pozicnitagy")) {
    document.getElementById("description_pozicnitagy").innerHTML = `To search for individual word types, capitalize complete 15-digit tag. The  position tag generator can be used here <a href="https://jakobson.korpus.cz/~skoumal/morfo/?lang=cs" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>. If you use it, it is necessary to replace the two end positions in the tag with - before inserting the tag. For example, to search for all adjectives, feminine, singular, accusative, 1st degree, affirmative, you will get this complex tag in the generator: <span style="font-weight: bold;">AAFS4----1A---.*</span> Replace the last two <span style="font-weight: bold;">.*</span> with one <span style="font-weight: bold;">-</span> character and enter the tag in this form into the search engine. All positions must be filled in. With respect to the lemmatization model used, we recommend using the following tagset for the search <a href="https://universaldependencies.org/docs/tagset-conversion/cs-pdt-uposf.html" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>. The detailed explanation is here <a href="../corpus_structure.html#mt" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>`;
}

//popsek sentiment analysis
if (document.getElementById("description_sentiment")) {
    document.getElementById("description_sentiment").innerHTML = `The sentiment analysis is based on the sentiment dictionary of the Czech Subjectivity Lexicon. The dictionary contains 4626 words with a positive and negative sentiment. The graph is based on the frequency of these words in the text. Cluster sentiment analysis is based on the Czech thematic thesaurus. For more click on  <a href="../corpus_structure.html#sentiment"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>. The graph is based on the frequency of individual lemmas in the respective clusters. The second graph shows the frequency of lemmas in the respecitve cluseters.  The third graph show the distanec (MDS — Multidimensional Scaling) bewtween the novels`;
}

// popisek statistik
if (document.getElementById("description_statistik")) {
    document.getElementById("description_statistik").innerHTML = 'The graphs show: boxplots, moving average type-token ratio (MATTR) and entropy especialy relative entropy for each work. A high MATTR indicates a high degree of lexical variation while a low MATTR indicates the opposite. This means that a higher MATTR indicates more different types and vice versa. Entropy indicates the degree of uncertainty of the system. Lexical diversity is represented here as the relationship between the number of words occurring once in a given work (hapax legomena) and the size of the text (the number of all words in the text). Texts below the linear regression axis are characterized by higher lexical diversity. Readability of Text uses three measures that statistically express the level of difficulty of a text with respect to reading "literacy", which is determined by the level of formal education. For more see <a href="../corpus_structure.html#st" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>.';
}

// popisek taglemma
if (document.getElementById("description_taglemma")) {
    document.getElementById("description_taglemma").innerHTML = 'To search for each word type, type tag (see table on the left) in the appropriate row with the title of the work. You can specify the extent of the listing by specifying number of lines.';
}

// popisek wordsincontext
if (document.getElementById("description_wordsincontext")) {
    document.getElementById("description_wordsincontext").innerHTML = 'Search for two words based on their close context. Write the first lemma in the first line, the second lemma in the second line. If the second lemma is not more than 3 positions to the right of the first, the context is printed.';
}

// popisek concordance-all
if (document.getElementById("description_concordance_all")) {
    document.getElementById("description_concordance_all").innerHTML = `Type lemma in the search box. The concordance search is performed in all the author's texts that are in the corpus. To search again, first click on the Refresh button.`;
}
// cql
if (document.getElementById("cql_query")) {
    document.getElementById("cql_query").innerHTML = `CQL query types: [lemma = "lemma"], [word = "word"], [tag = "tag"]. For more information see <a href="../corpus_structure.html#cql"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg><a/>.`;
}

// citizens-houses
if (document.getElementById("citizenes-houses")) {
    document.getElementById("citizenes-houses").innerHTML = `During the 19th century Prague did not change much urbanistically. Nevertheless, from the second half of the 19th century onwards, there were changes in the composition of the population in the so-called Old Prague and in the adjacent districts, which merged with Prague into one metropolis, the so-called Greater Prague, in 1922. This link provides statistics on the number of inhabitants and houses in Prague and its districts between 1869 and 1950 <a href="num_citizens_houses.html" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>.`;
}

// popisek num_citizens_houses
if (document.getElementById("description_residents_houses")) {
    document.getElementById("description_residents_houses").innerHTML = `Statistical charts show the change of population and number of houses in Prague and its districts between 1869 and 1950. For more click here <a href="../corpus_structure.html#prague-statistics" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></a>.`;
}

// stylometry

if (document.getElementById("stylometry")) {
    document.getElementById("stylometry").innerHTML = `Stylometry according to John Foster T. Burrows and David Delata (Delta method) is a method of authorship attribution. The method is based on the frequency of the most common words in the text. The graph shows the similarity of the author's works. The closer the works are to each other, the more similar they are. The graph is based on the frequency of the most common words in the text. The graph shows the similarity of the author's works. The closer the works are to each other, the more similar they are. The graph is based on the frequency of the most common words in the text. The graph shows the similarity of the author's works. The closer the works are to each other, the more similar they are. The graph is based on the frequency of the most common words in the text. The graph shows the similarity of the author's works. The closer the works are to each other, the more similar they are. For calculating stylometry was used <b>Stylo</b> ( Eder, M., Rybicki, J. and Kestemont, M. (2016). Stylometry with R: a package for computational text analysis. R Journal 8(1): 107-121. <https://journal.r-project.org/archive/2016/RJ-2016-007/index.html>)`;
}

//frequency lemmas
if (document.getElementById("frequency_lemmas")) {
    document.getElementById("frequency_lemmas").innerHTML = `The table shows the relative frequency of lemma in each author.`;
}