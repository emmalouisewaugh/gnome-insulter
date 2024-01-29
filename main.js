const insult = () => {
    const arr = ['Oui... you! ',
    'Excuse me... ',
    'Hey, over here! ',
    'Oui! ']
    const randomNumber = Math.floor(Math.random()*arr.length)
    return arr[randomNumber]
};


const sentences = () => {
    const arr = ['Seeing you brings back memories... Of wanting my eyes gouged out!',
    'You\'re funny and all but looks aren\'t everything.',
    'I\'ve said it before and I\'ll say it again — I hate you.',
    'Oh, I didn\'t notice you there. How d\'you like being so insignificant?',
    'We could be best friends, if I liked people with an arse for a face!',
    'Those are nice shoes, but don\'t you think your gran\'s feet are cold without them?!',
    'You remind me of an old friend...He was a twat! Just like you!',
    'You seem like a very nice person. I kill nice people, you know.',
    'I like to think about puppies - about slowly, slowly crushing them.',
    'Sure is a beautiful day... Except where you\'re standing!',
    'I sensed your presence before you even arrived. What did you EAT?!']
    const randomNumber = Math.floor(Math.random()*arr.length )
    return arr[randomNumber];
};

const ending = () => {
    const arr = [' HAHAHA!',
    ' Burn!',
    '    *crickets*']
    const randomNumber = Math.floor(Math.random()*arr.length)
    return arr[randomNumber]
};

const randomSentence = () => {
    const newSentence = insult() + sentences() + ending();
    return newSentence
}

console .log('           ______     ');
console .log('        .~`      `\\   ');
console .log('       /         \\`\\  ')
console .log('      /           \\ @  ')
console .log('     |,------------|    ')
console .log('     |  C ----0---0-\\     ______________________________________________________________________ ___ ___ _ __ _ _')
console .log('     /   ,-.-   .__),\\   /                                                                          ')
console .log('    /~,         --    | <   ' + randomSentence())
console .log('   /   \\-,           |   \\_________________________________________________________________ ____ ___ ___ _ __ _ _ ')
console .log('  |        \\,_,___,_ / \\      ')
console .log('  ||   |               \\ ')
console .log('  ||   |         __     |' )
console .log('  ||   |========{__}====| ')