document.getElementById('chatbot-send').addEventListener('click', function() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    if (message) {
      addMessage('You', message);
      input.value = '';
      // Získání odpovědi chatbota
      setTimeout(() => {
        const response = getResponse(message);
        typeMessage('Bot', response);
      }, 1000);
    }
  });
  
  document.getElementById('chatbot-close').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'none';
    document.getElementById('chatbot-open').style.display = 'block';
  });
  
  document.getElementById('chatbot-open').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'block';
    document.getElementById('chatbot-open').style.display = 'none';
  });
  
  document.querySelectorAll('.chatbot-question').forEach(button => {
    button.addEventListener('click', function() {
      const question = this.textContent;
      addMessage('You', question);
      // Získání odpovědi chatbota
      setTimeout(() => {
        const response = getResponse(question);
        typeMessage('Bot', response);
      }, 1000);
    });
  });
  
  function addMessage(sender, text) {
    const messages = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${text}`;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function typeMessage(sender, text) {
    const messages = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
  
    let index = 0;
    function type() {
      if (index < text.length) {
        messageElement.innerHTML = `${sender}: ${text.substring(0, index + 1)}`;
        index++;
        setTimeout(type, 50); // Nastavení rychlosti psaní
      }
    }
    type();
  }
  
  function getResponse(message) {
    const responses = {
      'What type of corpus is it?': 'A corpus of Czech fictional-narrative literary texts from the 19th, 20th and 21st centuries. For more information, click on the <strong>"Info"</strong> link in the main menu.',
      'How can I access the corpus?': 'You can access the corpus by clicking on the <strong>"Corpus"</strong> link in the main menu.',
      'What exactly does the corpus offer?': 'The corpus includes <strong>literary-cartographic models</strong> of the fictional topography of Prague in individual works of Czech prose thematizing Prague. There are also <strong>quantitative and static models</strong> of selected text segments of narrative text, models of narrative rhythm, word clusters, concordance and collocation, word and lemma frequencies, CQL, GIS. For more detailed information, type one of these topics into the messenger, e.g. literary-cartographic models, etc.',
      'literary-cartographic models': 'The <strong>literary-cartographic models</strong> represent the fictional topography of Prague in individual works of Czech prose thematizing Prague.',
      'quantitative and static models': 'The <strong>quantitative and static models</strong> include various statistical analyses of selected text segments of narrative text.',
      'models of narrative rhythm': 'The <strong>models of narrative rhythm</strong> analyze the pacing and flow of the narrative text.',
      'word clusters': '<strong>Word clusters</strong> are groups of words that frequently appear together in the text.',
      'concordance and collocation': '<strong>Concordance and collocation</strong> analyses show the relationships between words in the text.',
      'word and lemma frequencies': '<strong>Word and lemma frequencies</strong> provide counts of how often words and their base forms appear in the text.',
      'CQL': '<strong>CQL</strong> (Corpus Query Language) allows for complex searches within the corpus.',
      // Přidejte další otázky a odpovědi zde
    };
  
    return responses[message] || 'Sorry, I do not understand your question.';
  }