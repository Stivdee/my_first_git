const randFirstPart = [
    "I wish I was",
    "I could be",
    "you could be",
    "I am",
    "who is currently"
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
    "!!!",
];

function getRandomNumber() {

    const randomNumber = Math.floor(Math.random() * randFirstPart.length);
    return randomNumber;
};

function howManySentences (numberOf, yoda) {
        const sentence = [];

        for (let i = 0; i < numberOf; i++) {
            const first = randFirstPart[getRandomNumber()];
            const second = randSecondPart[getRandomNumber()];
            const third = randThirdPart[getRandomNumber()];

            if (yoda === false || yoda === undefined) {
                sentence.push(first[0].toUpperCase(0), first.slice(1), ' ', second, third, ' ');
            } else if (yoda === true) {
                sentence.push(second[0].toUpperCase(0), second.slice(1), ', ', first, third, ' ');

            }
        }
        return sentence.join('');
};
const testWord = howManySentences(2, true);
console.log(testWord);

const testWordTwo = howManySentences(2);
console.log(testWordTwo);