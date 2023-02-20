const olderGeneration = [['Hanna', 86], ['Mike', 90], ['Paul', 88], ['Jen', 77], ['Liam', 79]];

const adviceArray = ['draw inspiration from all the people you meet.', 'find mentors who can guide you and challenge you.', 'make most of less.', 'lead your life.','be more thankful and less self-centered.'];

const lessonArray = ['if you get your priorities right, you\'ll be happier!', 'make decisions, nobody can make them for you.', 'peace of mind is more important than any material possesions could ever be.', 'never choke a hammer, always hold it by the end of the handle.', 'baby, be a simple kind of man...'];

const randomizePerson = () => {
    const randomNum = Math.floor(Math.random() * 5);
    return `${olderGeneration[randomNum][0]}, aged ${olderGeneration[randomNum][1]}`
};

const randomAdvice = () => {
    const randomNum2 = Math.floor(Math.random() * 5);
    return " gives this life advice - " + adviceArray[randomNum2];
}
const randomLesson = () => {
    const randomNum = Math.floor(Math.random() * 5);
    return ' learned this throughout the years: ' + lessonArray[randomNum];
} 

const lessonOrAdvice = () => {
    const coinFlip = Math.floor(Math.random() * 2);
    return coinFlip === 1 ? randomAdvice() : randomLesson();
}
// Display random (potentially silly) advice quote
console.log(randomizePerson() + lessonOrAdvice());