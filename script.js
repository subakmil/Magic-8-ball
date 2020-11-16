// Define your question between the quotation marks ("") in a question variable
let question = "Will I be a coder?";


const anPoint = Math.floor(Math.random()*20);
const answers = ["It is certain!", "It is decidedly so!", "Without a doubt!", "Yes - definitely.", "You may rely on it.", 
                "As I see it, yes.", "Most likely", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again",
                "Ask again later.", "Better not tell you now.", "Cannot predict now", "Concentrate and ask again.",
                "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good", "Very doubtful"];

function predictTheFuture(question) {

    // checking whether the question has been asked
    if (question === "" || question === undefined) {
        console.log("Ask the question my friend");
    } else {

    // main code
        const answer = answers[anPoint];        
        console.log(`Question asked: ${question}\nAnswer: ${answer}`);
    };
};

predictTheFuture(question);