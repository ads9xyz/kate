let favoriteThings = [
    "YOUR EYES AUIDHDJAIJDAIJDAJIDAJDJADAKD",
    "I love being able to hear the little smile in your voice\nwhen you're talking about the things you like",
    "You have the kindest soul and you always\ntreat people so well",
    "Your voice. Especially when we're talking\nlate at night it just gives me tingles",
    "I love how comfortable and easy it is to talk to you.\nI can just be myself with you",
    "You make me feel so loved and appreciated",
    "The way you talk about us as a couple and our future.\nHearing you say 'When we get married...'\n on call made me melt",
    "I love how encouraging and supporting of me\nyou always are",
    "Your style. Not just your clothes but everything\nfrom interior decorating to flowers.\nI'm not good at this sort of thing\nso it's one of the many ways you complete me",
    "The way you always make time for me,\nmessaging and calling every day",
    "You have the prettiest face I have ever seen",
    "The way you copy everything I do.\nYou're a mini meeeeee",
    "How good you are at mercy and just Overwatch\nin general.I love when you show me your widow clips.\nI'm so proud of you",
    "How thoughtful and caring you are",
    "You bring me so much peace.\nYou always make me feel so relaxed.",
    "Your love for animals, ESPECIALLY JOZI.\nIt makes me melt the way you talk about her",
    "I love all of your hobbies.\nReading, knitting, baking, etc. you are so cute.\n(OH and shopping ofc)",
    "Your little smile, espcially when you get\nall shy and smiley.You have the prettiest smile",
    "Your music taste",
    "Your sense of humour and how enjoyable\nyou are to talk to",
    "How sweet you always are to me",
    "How pure your intentions are,\nI haven't had a single doubt",
    "How perfect you are. I know you think you're not\nbut you areeeee, all the 'flaws' you think you have\nare not flaws to me. You are perfect",
    "How you talk about me to your family",
    "How you talk about my family, especially my mum",
    "How much effort you put into us"
];


let note;


function setup() {
    print(favoriteThings.length);
    createCanvas(800, 400);
    background(255, 182, 193);
    textAlign(CENTER, CENTER);
  
    generateNote();
  
    noLoop();
}


function draw() {
    background(255, 182, 193);
    textSize(24);
    fill(255, 255, 255);
    text("What I love about my girlfriend:", width / 2, 30);
    textSize(16);
    text("(Press SPACE)", width / 2, 55);
    

    if (note) {
        textSize(32);
        fill(255, 255, 255);
        text(note, width / 2, height / 2);
    }
}


function keyPressed() {
    if (keyCode === 32) { // Spacebar key code is 32
        generateNote();
        redraw();
    }
}

function generateNote() {
    let randomIndex = floor(random(favoriteThings.length));
    note = favoriteThings[randomIndex];
}
