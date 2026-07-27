document.getElementById('chatbot-toggle').addEventListener('click', function() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
  });

  document.getElementById('chatbot-send').addEventListener('click', function() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
      addMessage('<span style="font-weight: bold; color: #d63384;">You</span>', message);
      input.value = '';
      // Získání odpovědi chatbota
      setTimeout(() => {
        const response = getResponse(message);
        addMessage('<span style="font-weight: bold; color: #d63384;">Bot</span>', response);
      }, 1000);
    }
  });
  
  document.getElementById('chatbot-close').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'none';
  });
  
  document.querySelectorAll('.chatbot-question').forEach(button => {
    button.addEventListener('click', function() {
      const question = this.textContent;
      addMessage('<span style="font-weight: bold; color: #d63384;">You</span>', question);
      // Získání odpovědi chatbota
      setTimeout(() => {
        const response = getResponse(question);
        addMessage('<span style="font-weight: bold; color: #d63384;">Bot</span>', response);
      }, 1000);
    });
  });
  
  function addMessage(sender, text) {
    const messages = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `${sender}: ${text}`;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;

    let index = 0;
    function type() {
        if (index < text.length) {
        messageElement.innerHTML = `${sender}: ${text.substring(0, index + 1)}`;
        index++;
        setTimeout(type, 20); // Nastavení rychlosti psaní
        }
    }
    type();
  }
  
  function getResponse(message) {
    const responses = {
        'What type of corpus is it?': 'A corpus of Czech fictional-narrative literary texts from the 19<sup>th</sup>, 20<sup>th</sup> and 21<sup>st</sup> centuries. For more information, click on the "Info" link in the main menu.',
        'corpus': 'If you mean this corpus: A corpus of Czech fictional-narrative literary texts from the 19<sup>th</sup>, 20<sup>th</sup> and 21<sup>st</sup> centuries. For more information, click on the "Info" link in the main menu.',
        'How can I access the corpus?': 'You can access the corpus by clicking on the "Corpus" link in the main menu.',
        'What exactly does the corpus offer?': 'The corpus includes <b>literary-cartographic models</b> of the fictional topography of Prague in individual works of Czech prose thematizing Prague. There are also <b>quantitative and static models</b> of selected text segments of narrative text, models of <b>narrative rhythm</b>, <b>word clusters</b>, <b>concordances</b> and <b>collocations</b>, <b>word and lemma frequencies</b>, <b>CQL</b>, <b>GIS</b>. For more detailed information, type one of these topics into the messenger, e.g. literary-cartographic models, etc.',
        'What is the structure of the corpus?':'The corpus is divided into two main parts. The first one includes single author corpora, with the following options for further browsing: <br> - <b>Literary Cartographic Models and and Quantitative Models of Places</b> <br>- <b>Frequency of Text Segments, Sentence Length, Narrative Rhythm </b> <br>- <b>Statistics</b> <br> - <b>Sentiment Analysis & Word Clouds</b> <br> - <b>Search Word Types by Tags</b> <br> - <b>Word Types in Percentages</b> <br> - <b>Concordances<b> <br> - <b>Collocations</b> <br> - <b>Words in Context</b> <br> - <b>Lemmas, Frequency Dictionaries, Tokens</b> <br> - <b>CQL</b>. <br><span style="font-weight: normal;">The second part of the corpus refers to the whole corpus and has the following options for further browsing:</span> <br> - <b>Concordances</b> <br> - <b>Words in Context</b> <br> - <b>Lexical Diversity</b> <br> - <b>Time Line of Text Segments</b> <br> - <b>Stylometry</b> <br> - <b>CQL</b> <br> - <b>GIS</b> <br><span style="font-weight: normal;">For more information input the desired topic into the messenger.</span>', 
        'corpus structure': 'The corpus is divided into two main parts. The first one includes single author corpora, with the following options for further browsing: <br> - <b>Literary Cartographic Models and and Quantitative Models of Places</b> <br>- <b>Frequency of Text Segments, Sentence Length, Narrative Rhythm </b> <br>- <b>Statistics</b> <br> - <b>Sentiment Analysis & Word Clouds</b> <br> - <b>Search Word Types by Tags</b> <br> - <b>Word Types in Percentages</b> <br> - <b>Concordances<b> <br> - <b>Collocations</b> <br> - <b>Words in Context</b> <br> - <b>Lemmas, Frequency Dictionaries, Tokens</b> <br> - <b>CQL</b>. <br><span style="font-weight: normal;">The second part of the corpus refers to the whole corpus and has the following options for further browsing:</span> <br> - <b>Concordances</b> <br> - <b>Words in Context</b> <br> - <b>Lexical Diversity</b> <br> - <b>Time Line of Text Segments</b> <br> - <b>Stylometry</b> <br> - <b>CQL</b> <br> - <b>GIS</b> <br><span style="font-weight: normal;">For more information input the desired topic into the messenger.</span>',
        'tools': 'The corpus is divided into two main parts. The first one includes single author corpora, with the following options for further browsing: <br> - <b>Literary Cartographic Models and and Quantitative Models of Places</b> <br>- <b>Frequency of Text Segments, Sentence Length, Narrative Rhythm </b> <br>- <b>Statistics</b> <br> - <b>Sentiment Analysis & Word Clouds</b> <br> - <b>Search Word Types by Tags</b> <br> - <b>Word Types in Percentages</b> <br> - <b>Concordances<b> <br> - <b>Collocations</b> <br> - <b>Words in Context</b> <br> - <b>Lemmas, Frequency Dictionaries, Tokens</b> <br> - <b>CQL</b>. <br><span style="font-weight: normal;">The second part of the corpus refers to the whole corpus and has the following options for further browsing:</span> <br> - <b>Concordances</b> <br> - <b>Words in Context</b> <br> - <b>Lexical Diversity</b> <br> - <b>Time Line of Text Segments</b> <br> - <b>Stylometry</b> <br> - <b>CQL</b> <br> - <b>GIS</b> <br><span style="font-weight: normal;">For more information input the desired topic into the messenger.</span>',
        'literary-cartographic models': 'The corpus contains literary-cartographic models that depict the morphology or structure of the fictional Prague topography in individual Czech prose works thematizing Prague. The models distinguish types of places and types of speech segments (see the legend on the pages of the literary-cartographic models). Also included are models of character movement and models of toponym density. Also included in this part of the corpus are frequency models of toponyms, Prague and non-Prague places, holy places and gis models.',
        'map': 'The corpus contains literary-cartographic models that depict the morphology or structure of the fictional Prague topography in individual Czech prose works thematizing Prague. The models distinguish types of places and types of speech segments (see the legend on the pages of the literary-cartographic models). Also included are models of character movement and models of toponym density. Also included in this part of the corpus are frequency models of toponyms, Prague and non-Prague places, holy places and gis models.',
        'maps': 'The corpus contains literary-cartographic models that depict the morphology or structure of the fictional Prague topography in individual Czech prose works thematizing Prague. The models distinguish types of places and types of speech segments (see the legend on the pages of the literary-cartographic models). Also included are models of character movement and models of toponym density. Also included in this part of the corpus are frequency models of toponyms, Prague and non-Prague places, holy places and gis models.',
        'quantitative and static models': 'Models include average sentence lengths with respect to selected text segments, an overall overview of the frequency use of each text segment, the frequency situation of text segment use in specific prose, and models of narrative rhythm. For more information, type in mesanger "narrative rhythm".',
        'narrative rhythm': 'Narrative rhythm is modeled as the frequency load of individual narrative utterances in the text. The X-axis is the length of the text, the Y-axis shows the frequency load of a given narrative segment in a given part of the text.',
        'word clusters': 'The models show the most frequent autosemantics of the text. Omitted are synsemantics and other stop-words. Their list is available in <a href="https://github.com/Zmelik1978/corpus_prozy_open_data" style="text-decoration: none;">Open Data</a>.',
        'word clouds': 'The models show the most frequent autosemantics of the text. Omitted are synsemantics and other stop-words. Their list is available in <a href="https://github.com/Zmelik1978/corpus_prozy_open_data" style="text-decoration: none;">Open Data</a>.',
        'concordances': 'Concordances show the context of the search word in a given text or author corpus or the whole corpus. The structure is as follows: <br> L5 - L4 - L3 - L2 - L1 - Search lemma - R1 - R2 - R3 - R4 - R5.',
        'concordance' : 'Concordances show the context of the search word in a given text or author corpus or the whole corpus. The structure is as follows: <br> L5 - L4 - L3 - L2 - L1 - Search lemma - R1 - R2 - R3 - R4 - R5.',
        'collocations': 'Collocations show lexical co-occurrence. The measures used are logDice, Mi-score and T-score. To calculate them, click <a href="https://wiki.korpus.cz/doku.php/pojmy:asociacni_miry" style="text-decoration: none;">here</a>.',
        'collocation': 'Collocations show lexical co-occurrence. The measures used are logDice, Mi-score and T-score. To calculate them, click <a href="https://wiki.korpus.cz/doku.php/pojmy:asociacni_miry" style="text-decoration: none;">here</a>.',
        'word and lemma frequencies': 'The tables show the frequency-ordered tokens of the lemma, word forms and a link to the complete frequency dictionary in pdf.',
        'CQL': 'CQLs are special corpus queries for searching the corpus. More detailed CQl parameters can be found in the "Info" section of the main menu.',
        'cql': 'CQLs are special corpus queries for searching the corpus. More detailed CQl parameters can be found in the "Info" section of the main menu.',
        'GIS': 'GIS are cartographic digital systems that display information on maps using individual information types.  In this corpus, existing and no longer existing places that are related to the fictional Prague topography are entered into the map base. The markers also include photographs of these places.',
        'gis': 'GIS are cartographic digital systems that display information on maps using individual information types.  In this corpus, existing and no longer existing places that are related to the fictional Prague topography are entered into the map base. The markers also include photographs of these places.',
        'Statistics': 'Statistical models show boxplots of sentence lengths in individual texts, type-token ratio (TTR), entropy and lexical diversity. For more information, click on "Info" in the top menu.',
        'statistics': 'Statistical models show boxplots of sentence lengths in individual texts, type-token ratio (TTR), entropy and lexical diversity. For more information, click on "Info" in the top menu.',
        'statistic': 'Statistical models show boxplots of sentence lengths in individual texts, type-token ratio (TTR), entropy and lexical diversity. For more information, click on "Info" in the top menu.',
        'frequency': 'Statistical models show boxplots of sentence lengths in individual texts, type-token ratio (TTR), entropy and lexical diversity. For more information, click on "Info" in the top menu.',
        'Sentiment Analysis & Word Clouds': 'The Sentiment Analysis graphs show the proportion of positive and negative emotionality, based on the <a href="https://lindat.mff.cuni.cz/repository/xmlui/handle/11858/00-097C-0000-0022-FF60-B" style="text-decoration: none;">Czech SubLex 1.0 dataset</a>.',
        'sentiment analysis': 'The Sentiment Analysis graphs show the proportion of positive and negative emotionality, based on the <a href="https://lindat.mff.cuni.cz/repository/xmlui/handle/11858/00-097C-0000-0022-FF60-B" style="text-decoration: none;">Czech SubLex 1.0 dataset</a>.',
        'sentiment': 'The Sentiment Analysis graphs show the proportion of positive and negative emotionality, based on the <a href="https://lindat.mff.cuni.cz/repository/xmlui/handle/11858/00-097C-0000-0022-FF60-B" style="text-decoration: none;">Czech SubLex 1.0 dataset</a>.',
        'Search Word Types by Tags': 'The tables show the results after entering a simple morphological tag (the first tag in a 15-digit morphological tag). For example, to find all nouns, you need to enter the tag N in the too line of the work.',
        'tags': 'The tables show the results after entering a simple morphological tag (the first tag in a 15-digit morphological tag). For example, to find all nouns, you need to enter the tag N in the too line of the work.',
        'tag': 'The tables show the results after entering a simple morphological tag (the first tag in a 15-digit morphological tag). For example, to find all nouns, you need to enter the tag N in the too line of the work.',
        'Word Types in Percentages': 'The chart shows the percentage of each word type.',
        'word types': 'The chart shows the percentage of each word type.',
        'Concordances': 'Concordances show the context of the search word in a given text or author corpus or the whole corpus. The structure is as follows: <br> L5 - L4 - L3 - L2 - L1 - Search lemma - R1 - R2 - R3 - R4 - R5.',
        'Collocations': 'Collocations show lexical co-occurrence. The measures used are logDice, Mi-score and T-score. To calculate them, click <a href="https://wiki.korpus.cz/doku.php/pojmy:asociacni_miry" style="text-decoration: none;">here</a>.',
        'Words in Context': 'The result shows whether the two words you enter occur next to each other at a distance of 3 tokens.',
        'words in context': 'The result shows whether the two words you enter occur next to each other at a distance of 3 tokens.',
        'context': 'What specifically do you have in mind? Are you looking for information on <b>Words in Context</b> or <b>Collocations</b> or <b>Concordances<b><span style="font-weight: normal;">? If you are looking for these contextual functions, type their names into the mesanger.</span>',
        'Lemmas, Frequency Dictionaries, Tokens': 'The tables show the frequency-ordered tokens of the lemma, word forms and a link to the complete frequency dictionary in pdf.',
        'lemmas': 'The tables show the frequency-ordered tokens of the lemma, word forms and a link to the complete frequency dictionary in pdf.',
        'lemma': 'The tables show the frequency-ordered tokens of the lemma, word forms and a link to the complete frequency dictionary in pdf.',
        'Frequency of Text Segments': 'The graph shows the frequency of text segments in the text. The more frequent the text segment, the higher the graph.',
        'frequency of text segments': 'The graph shows the frequency of text segments in the text. The more frequent the text segment, the higher the graph.',
        'frequency': 'The graph shows the frequency of text segments in the text. The more frequent the text segment, the higher the graph.',
        'Sentence Length': 'The graph shows the length of the sentences in the text. The longer the sentence, the higher the graph.',
        'sentence length': 'The graph shows the length of the sentences in the text. The longer the sentence, the higher the graph.',
        'length': 'The graph shows the length of the sentences in the text. The longer the sentence, the higher the graph.',
        'Entropy': 'The graph shows the entropy of the text. The more diversified the text, the higher the graph.',
        'entropy': 'The graph shows the entropy of the text. The more diversified the text, the higher the graph.',
        'Lexical Diversity': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'lexical diversity': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'diversity': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'diversity': 'If you mean Lexical Diveristy in this corpus: The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'Time Line of Text Segments': 'The graph shows how the individual text segments of the fictional narrative are distributed over time. The Y-axis shows the cumulative values in a given year on the X-axis.',
        'time line of text segments': 'The graph shows how the individual text segments of the fictional narrative are distributed over time. The Y-axis shows the cumulative values in a given year on the X-axis.',
        'time line': 'The graph shows how the individual text segments of the fictional narrative are distributed over time. The Y-axis shows the cumulative values in a given year on the X-axis.',
        'Stylometry': 'The graphs of the stylometric analysis show the degree of relatedness between the texts. Denodgrams show the cluster analysis of Clasic Delta.',    
        'stylometry': 'The graphs of the stylometric analysis show the degree of relatedness between the texts. Denodgrams show the cluster analysis of Clasic Delta.',
        'usefulness': 'The corpus is useful for literary scholars, linguists, geographers, historians, and other humanities scholars. It is also useful for students and teachers of Czech language and literature, as well as for the general public interested in Czech literature and Prague.',
        'use': 'The corpus is useful for literary scholars, linguists, geographers, historians, and other humanities scholars. It is also useful for students and teachers of Czech language and literature, as well as for the general public interested in Czech literature and Prague.',
        'useful': 'The corpus is useful for literary scholars, linguists, geographers, historians, and other humanities scholars. It is also useful for students and teachers of Czech language and literature, as well as for the general public interested in Czech literature and Prague.',
        'Linear regression': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'Lexical Diversity': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'lexical diversity': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'linear regression': 'The graph shows the relationship between single words and all words. The linear regression then shows this relationship clearly. The more unique words and the smaller the text size, the more lexically diversified the text is, and vice versa.',
        'Readibility of Text': 'Flesh-Kincaid Readibility Test is a test that shows the readibility of the text. The higher the value, the more difficult the text is. Flesh Ease is the opposite of Flesh-Kincaid Readibility Test. Gunning Fog Index is a test that shows the readibility of the text. The higher the value, the more difficult the text is. SMOG Index is a test that shows the readibility of the text. The higher the value, the more difficult the text is. For more information, click on <a href="corpus_structure.html#st" style="text-decoration: none;">Info</a> in the top menu.',
        'readibility of text': 'Flesh-Kincaid Readibility Test is a test that shows the readibility of the text. The higher the value, the more difficult the text is. Flesh Ease is the opposite of Flesh-Kincaid Readibility Test. Gunning Fog Index is a test that shows the readibility of the text. The higher the value, the more difficult the text is. SMOG Index is a test that shows the readibility of the text. The higher the value, the more difficult the text is. For more information, click on <a href="corpus_structure.html#st" style="text-decoration: none;">Info</a> in the top menu.',
        'readibility': 'Flesh-Kincaid Readibility Test is a test that shows the readibility of the text. The higher the value, the more difficult the text is. Flesh Ease is the opposite of Flesh-Kincaid Readibility Test. Gunning Fog Index is a test that shows the readibility of the text. The higher the value, the more difficult the text is. SMOG Index is a test that shows the readibility of the text. The higher the value, the more difficult the text is. For more information, click on <a href="corpus_structure.html#st" style="text-decoration: none;">Info</a> in the top menu.',
        'Who is author of this project?': 'The author of this project is Richard Změlík, Ph.D., associate professor at Palacký University in Olomouc (Czechia). For more information, click on the <a href="contact.html" style="text-decoration: none;">Contact</a> link in the main menu.',
        'author of this project': 'The author of this project is Richard Změlík, Ph.D., associate professor at Palacký University in Olomouc (Czechia). For more information, click on the <a href="contact.html" style="text-decoration: none;">Contact</a> link in the main menu.',
        'author of corpus': 'The author of this project is Richard Změlík, Ph.D., associate professor at Palacký University in Olomouc (Czechia). For more information, click on the <a href="contact.html" style="text-decoration: none;">Contact</a> link in the main menu.',
        'who is the author?': 'The author of this project is Richard Změlík, Ph.D., associate professor at Palacký University in Olomouc (Czechia). For more information, click on the <a href="contact.html" style="text-decoration: none;">Contact</a> link in the main menu.',
        'who is author?': 'The author of this project is Richard Změlík, Ph.D., associate professor at Palacký University in Olomouc (Czechia). For more information, click on the <a href="contact.html" style="text-decoration: none;">Contact</a> link in the main menu.',
    };
  
    return responses[message] || 'Sorry, I do not understand your question.';
  }