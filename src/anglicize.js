/**
 * Converts Lək̓ʷaŋən orthography to an anglicized pronunciation guide.
 * @param {string} word - The word in Lək̓ʷaŋən orthography
 * @returns {string} - The anglicized pronunciation
 */
function anglicize(word) {
    if (!word || word === 'Unknown') return '';

    const replacements = {
        'k̓ʷ': "kw'",
        'q̓ʷ': "qw'",

        'c̓': "ts'",
        'č̓': "ch'",
        'l̕': "l'",
        'ƛ̕': "tl'",
        'm̓': "m'",
        'n̓': "n'",
        'ŋ̓': "ng'",
        'p̓': "p'",
        'q̓': "q'",
        't̕': "t'",
        'w̓': "w'",
        'y̓': "y'",

        'kʷ': "kw",
        'qʷ': "qw",
        'xʷ': "hw",
        'x̣ʷ': "xw",

        'č': "ch",
        'š': "sh",
        'x̣': "x",
        'ɬ': "lh",
        'ŋ': "ng",
        'u': "oo",
        'ə': "u",
        'c': "ts",
        'ʔ': "'",
        'x': "h",
    };
    const pattern = new RegExp(Object.keys(replacements).join('|'), 'gi');

    word = word.toLowerCase();
    word = word.replace(pattern, (match) => {
        return replacements[match];
    });

    return word;
}

export { anglicize };
