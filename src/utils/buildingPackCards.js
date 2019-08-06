import shuffle from 'lodash.shuffle';
import GetSignsCards from './getsigns';

const CARD_NUMBER = 10;

export default () => {
    const getSignsCards = GetSignsCards();
    const cards = [];

    while(createHash.length < CARD_NUMBER){
        const index = Math.floor(Math.random() * getSignsCards.length);
        const card = {
            sign: getSignsCards.splice(index, 1)[0],
            discovered: false
        };
        cards.push(card);
        cards.push({...card})
    }
    return shuffle(cards);
};