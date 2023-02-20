
const lessonArray = ['If you get your priorities right, you\'ll be happier!', 'Make decisions, nobody can make them for you.', 'Peace of mind is more important than any material possesions could ever be.', 'Never choke a hammer, always hold it by the end of the handle.', 'Baby, be a simple kind of man...'];

const olderGeneration = [[Hanna, 86], [Mike, 90], [Paul, 88], [Jen, 77], [Liam, 79]];

const randomizePerson = () => {
    const randomNum = Math.floor(Math.random * 5);
    return `${olderGeneration[randomNum][0]}, aged ${olderGeneration[randomNum][1]}, gives this advice:`
};

const randomizeLesson = () => {
    const randomNum = Math.floor(Math.random * 5);
    return lessonArray[randomNum];
} 
