function generateQuery() {
    const description = document.getElementById('description').value.toLowerCase();
    let cqlQuery = '';

    if (description.includes('verbs') && description.includes('ending in')) {
        const ending = description.match(/ending in ([^\s]+)/);
        if (ending) {
            cqlQuery = `[lemma=".*${ending[1]}"] & pos="V.*"`;
        }
    } else if (description.includes('pronouns')) {
        cqlQuery = `[tag="PP"]`;
    } else if (description.includes('nouns')) {
        cqlQuery = `[tag="NN"]`;
    } else if (description.includes('adjectives')) {
        cqlQuery = `[tag="AA"]`;
    } else if (description.includes('adverbs')) {
        cqlQuery = `[tag="DD"]`;
    } else if (description.includes('verbs')) {
        cqlQuery = `[tag="VV"]`;
    } else if (description.includes('conjuctions')) {
        cqlQuery = `[tag="JJ"]`;
    } else if (description.includes('prepositions')) {
        cqlQuery = `[tag="RR"]`;
    } else if (description.includes('particles')) {
        cqlQuery = `[tag="TT"]`;
    } else if (description.includes('numerals')) {
        cqlQuery = `[tag="CC"]`;
    } else {
        cqlQuery = 'Unable to generate query. Please refine your description.';
    }

    document.getElementById('queryContent').textContent = cqlQuery;
    document.getElementById('queryOutput').style.display = 'block';
}