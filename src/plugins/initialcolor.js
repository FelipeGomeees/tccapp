

export default function LetterToCollor(initialLetter, type) {
    const initial = initialLetter.toUpperCase();
    let color = '#222';
    let text = '#30343f';
    switch (initial) {
        case 'A': color = '#FDD657'; text='#dfdcd0';
        break;
        case 'B': color = '#9F6820'; text='#dfdcd0';
        break;
        case 'C': color = '#FD9A57';
        break;
        case 'D': color = '#973810'; text='#dfdcd0';
        break;
        case 'E': color = '#FD6D57';
        break;
        case 'F': color = '#9B1616'; text='#dfdcd0';
        break;
        case 'G': color = '#FD579A';
        break;
        case 'H': color = '#B31BA4'; text='#dfdcd0';
        break;
        case 'I': color = '#D657FD';
        break;
        case 'J': color = '#6E19B7'; text='#dfdcd0';
        break;
        case 'K': color = '#8357FD';
        break;
        case 'L': color = '#6257FD'; text='#dfdcd0';
        break;
        case 'M': color = '#5773FD';
        break;
        case 'N': color = '#1F5FCD'; text='#dfdcd0';
        break;
        case 'O': color = '#57C6FD';
        break;
        case 'P': color = '#08575F'; text='#dfdcd0';
        break;
        case 'Q': color = '#57FDF8';
        break;
        case 'R': color = '#167558'; text='#dfdcd0';
        break;
        case 'S': color = '#57FDAA';
        break;
        case 'T': color = '#156E2F'; text='#dfdcd0';
        break;
        case 'U': color = '#57FD57';
        break;
        case 'V': color = '#368314'; text='#dfdcd0';
        break;
        case 'X': color = '#BBFD57';
        break;
        case 'W': color = '#6F7911'; text='#dfdcd0';
        break;
        case 'Y': color = '#FDF857';
        break;
        case 'Z': color = '#7D6D07'; text='#dfdcd0';
        break;
        default: color = '#222'; text='#dfdcd0';
    }

    return type ? {color, text} : color;
}