let firstUser = {
    online: true,
    accountType: "normal",
    name:"Abbzy"

}

let secondUser = {
    online: true,
    accountType: "premium",
    name:"Abbz"
}

let thirdUser = {
    online: false,
    accountType: "premium",
    name:"Kabbz"

}

const sendWelcomeMessageToUser = (user) => {
    if(user.online){
        if(user.accountType === "normal" ){
            console.log(`Hello ${user.name}!`);
        } else {
            console.log(`Welcome back premium user ${user.name}!`);
        }
    }
}

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);

const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.spilt(' ');
    return wordArray.length;
}

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    
    for(let word of wordArray){
        // remove punctuation so as to only count letters
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }
    return totalLetters;
}

/*
** returns average word length to 
** two decimal places
*/

const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount (stringToTest) / getWordCount(stringToTest)).toFixed(2));
}

const printStringStats = (stringToTest) => {
    console.log({
        wordCount:getWordCount(stringToTest),
        letterCount:getLetterCount(stringToTest),
        averageWordLength: getAverageWordLength(stringToTest)
    })
}
