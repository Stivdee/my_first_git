const randFirstPart = [
    "I wish I was ",
    "I could be ",
    "You could ",
    "I am ",
    "Who is currently "
];

const randSecondPart = [
    "eating ice cream",
    "swiming right now",
    "doing my homework",
    "coding now",
    "sleeping in my bed"
];

const randThirdPart = [
    "!",
    "?",
    ".",
    "...",
    "-",
];

function getRandomNumber() {

    const randomNumber = Math.floor(Math.random() * randFirstPart.length);
    return randomNumber;
};

function howManySentences (numberOf) {
        const sentence = [];


        for (let i = 0; i < numberOf; i++) {
            const first = randFirstPart[getRandomNumber()];
            const second = randSecondPart[getRandomNumber()];
            const third = randThirdPart[getRandomNumber()];
            sentence.push(first, second, third, ' ');
        }
        return sentence.join('');
};
const testWord = howManySentences(2);
console.log(testWord);
