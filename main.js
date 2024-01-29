const person = () => {
    const randomNumber = Math.floor(Math.random()*5 + 1)

    if (randomNumber === 1){
        return `mother`
    } else if (randomNumber === 2){
        return 'father'
    } else if (randomNumber === 3){
        return 'nan'
    } else if (randomNumber === 4){
        return 'girlfriend'
    } else if (randomNumber === 5){
        return 'grandad'
    }
};

const insult = () => {
    const randomNumber = Math.floor(Math.random()*5 + 1)

    if (randomNumber === 1){
        return `fat`
    } else if (randomNumber === 2){
        return 'stupid'
    } else if (randomNumber === 3){
        return 'dumb'
    } else if (randomNumber === 4){
        return 'lazy'
    } else if (randomNumber === 5){
        return 'ugly'
    }
};


const randomSentences = () => {
    //const randomNumber = Math.floor(Math.random()*10 + 1)
    const randomNumber = 1
if (randomNumber === 1){
    return `Your ${person()} is so ${insult()}`
} else if (randomNumber === 2){
    return 'You are number 2'
} else if (randomNumber === 3){
    return 'You are number 3'
} else if (randomNumber === 4){
    return 'You are number 4'
} else if (randomNumber === 5){
    return 'You are number 5'
} else if (randomNumber === 6){
    return 'You are number 6'
} else if (randomNumber === 7){
    return 'You are number 7'
} else if (randomNumber === 8){
    return 'You are number 8'
} else if (randomNumber === 9){
    return 'You are number 9'
} else if (randomNumber === 10){
    return 'You are number 10'
} else {
    console.log('not working')
}
}
console .log('           ______     ');
console .log('        .~`      `\\   ');
console .log('       /         \\`\\  ')
console .log('      /           \\ @  ')
console .log('     |,------------|    ')
console .log('     |  C ----0---0-\\     ___________________________________')
console .log('     /   ,-.-   .__),\\   /                                   \\')
console .log('    /~,         --    | <   ' + randomSentences())
console .log('   /   \\-,           |   \\___________________________________/ ')
console .log('  |        \\,_,___,_ / \\      ')
console .log('  ||   |               \\ ')
console .log('  ||   |         __     |' )
console .log('  ||   |========{__}====| ')