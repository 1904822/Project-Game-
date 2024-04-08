const game = document.getElementById('game')
const  scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    //first catigory
    {
        genres: 'Random Rhyme',
        questions: [
            {
                //question 1
                question: " Do you know the ______? The______? The______?",
                answers: ["The Muffin Man", 
                          "The Milk Man", 
                          "The Man Next Door",
                          "Her Name"],
                correct: "The Muffin Man",
                level: "Medium",
            },
            {
                //question 2
                    question: "1, 2, _____, 3, 4, ______",
                    answers: ["Buckly My shoes, Lock the Door", 
                              "pick up sticks, lay them straight", 
                              "3 , 5",
                              " black blue, settle the score"],
                    correct: "Buckly My shoes, Lock the Door",
                    level: "easy",
                },
                {
                //question 3
                    question: " My ______, Your _______, lives across the street",
                    answers: ["Mother", 
                              "Friend", 
                              "Brother", 
                              "Teacher"],
                    correct: "Mother",
                    level: "Medium",
                },
                {
                //question 4
                    question: " Father _____ and Mother_____ thrive in love, and care, and nurture",
                    answers: ["Nature & Time", 
                              "Time & Nature", 
                              "Sam & Mary",
                              "God & Mary"],
                    correct: "Time & Nature",
                    level: "HARD",
                },
                {
                //question 5
                    question: "1,2,345 _________, 678910_______",
                    answers: ["Once I caught a fish alive, Then I let i go again",
                              "In counting I trive, Lets cound from 1 again", 
                              "are the first five numbers, are the other five ",
                              "show the world my flow, Just how far can I go?"],
                    correct: "Once I caught a fish alive, Then I let i go again",
                    level: "Medium",
                },
        ],
    },

    //Second catigory    
    {   
        genres: "Name the Song",
        questions: [
            {
                //question 1
                question: " Tonights the Night i'll let you Know,and baby Tonight's the night we lose control...",
                answers: ["Night Dancer", 
                          "Lovin in the Dark",
                          "Best you've Ever had",
                          "My Night Romance"],
                correct: "Best you've Ever had",
                level: "Medium",
            },

            {
                //question 2
                    question: "So don't call me baby, Unless you mean it, Don't tell me you need me...",
                    answers: ["Don't call me Baby",
                              "Heart's Violin", 
                              "Dive",
                              "Let me Know the Truth"],
                    correct: "Dive",
                    level: "HARD",
                },

                {
                //question 3
                    question: "Ol' pirates yes they rob I, Sold I to the merchant ship",
                    answers: ["I shot the Cheriff", 
                              "Song of Freedom", 
                              "Redemtion song", 
                              "Sea Shanty"],
                    correct: "Redemtion song",
                    level: "Medium",
                },

                {
                //question 4
                    question: " You want me, I want you, baby My sugarboo, I'm levitating, the Milky Way, we're renegading...",
                    answers: ["I Want You", 
                              "Renegading", 
                              "Milky Way",
                              "Levitating"],
                    correct: "Levitating",
                    level: "Medium",
                },

                {
                //question 5
                    question: " Eternal Father bless our land, Guide us with thy mighty hand...",
                    answers: ["Jamaican National Anthem",
                              "Jamaica Boom",
                              "Nationan Athem",
                              "Trinidardian National Antem"],
                    correct: "Jamaican National Anthem",
                    level: "easy",
                },
        ],
    },


    //Third catigory
    {
        genres: "EAsy mAth",
        questions: [
            {
                //question 1
                question: "solve the following: 3(6+7(4))",
                answers: ["102", 
                          "90", 
                          "46",
                          "58"],
                correct: "102",
                level: "easy",
            },

            {
                //question 2
                    question: "What is the mean of these numbers: 6, 78, 99, 5, 32, 12, 4, 19, 100 ",
                    answers: ["3.5", 
                              "39.4", 
                              "4", 
                              "100"],
                    correct: "39.4",
                    level: "HARD",
                },

                {
                //question 3
                    question: "what is the median of these numbers: 6, 89, 72, 67, 10, 2, 15, 7, 69",
                    answers: ["69", 
                              "15", 
                              "2", 
                              "89"],
                    correct: "15",
                    level: "Medium",
                },

                {
                //question 4
                    question: "what is the mode of these numbers: 3, 6, 8, 9, 3, 9, 0, 9, 3, 3, 8",
                    answers: ["9", 
                              "3",
                              "7",
                              "5"],
                    correct: "3",
                    level: "easy",
                },

                {
                //question 5
                    question: " what is the Value of Pie",
                    answers: ["3.14",
                              "5", 
                              "3",
                              "3.141592...."],
                    correct: "3.141592....",
                    level: "easy",
                },
        ],
    },

    //forth catigory
    {
        genres: "Genral Knowledge",
        questions: [
            {
                //question 1
                question: "What is the name of the fastest healing organ of the human body?",
                answers: ["The Cornea", 
                          "The Skin",  
                          "The Tongue",
                          "The Brain"],
                correct: "The Cornea",
                level: "Medium",
            },

            {
                //question 2
                    question: "What Country speaks the most language",
                    answers: ["South Africa", 
                              "Europe", 
                              "Papua New Guinea", 
                              "France"],
                    correct: "Papua New Guinea",
                    level: "Medium",
                },

                {
                //question 3
                    question: "What part of the computer is responsible for high reslution Display?",
                    answers: ["MotherBoard",
                              "Screen",
                              "CPU", 
                              "GPU"],
                    correct: "GPU",
                    level: "easy",
                },

                {
                //question 4
                    question: "A broken white line at the right of your lane means",
                    answers: ["You may pass if the way is clear", 
                              "Pass when there are no cops near by",
                              "Pass anytime",
                              "Never Pass"],

                    correct: "You may pass if the way is clear",
                    level: "easy",
                },

                {
                //question 5
                    question: "What human organ can regenerate its self?",
                    answers: ["Skin",
                              "Liver", 
                              "Heart",
                              "Intestine"],
                    correct: "Liver",
                    level: "easy",
                },
        ],
    },

    //fifth Category
    {
        //Fifth catigory
        genres: "Anime Edition",
        questions: [
            {
                //question 1
                question: "Who said these words: 'ARISE,'",
                answers: ["Luffy", 
                          "Ichigo",
                          "Bakugo",
                          "Sun jin woo"],
                correct: "Sun jin woo",
                level: "HARD",
            },

            {
                //question 2
                    question: "Who is the Vessle of Sukuna?",
                    answers: ["Naruto",
                              "Trunks", 
                              "Mappa", 
                              "Yuji"],
                    correct: "Yuji",
                    level: "easy",
                },

                {
                //question 3
                    question: "To what Universe does this character belong to: The Cabbage Man",
                    answers: ["One Piece", 
                              "HellSing", 
                              "Demon Slayer", 
                              "Avatar, The Last Airbender"],
                    correct: "Avatar, The Last Airbender",
                    level: "Medium",
                },

                {
                //question 4
                    question: "What is the plot of Kakaguri?",
                    answers: ["To free Dracula", 
                              "To Gamble to there heart content", 
                              "To Find the one piece",
                              "To gain Freedom"],
                    correct: "To Gamble to there heart conten",
                    level: "Medium",
                },

                {
                //question 5
                    question: "From the list below which Protagonist is an Antagonist?",
                    answers: ["Muzan",
                              "Keyarga", 
                              "Aizen",
                              "Alucard"],
                    correct: "Alucard",
                    level: "HARD",
                },
        ],
    },
 ]


function addCategory(category) {
  const column = document.createElement('div')
  column.classList.add('genre-column')

  const genreTitle = document.createElement('div')
  genreTitle.classList.add('genre-title')
  genreTitle.innerText = category.genres

  column.appendChild(genreTitle)
  game.append(column)

  category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)

    if (question.level === "easy"){
        card.innerHTML = 200
    }

    if (question.level === "Medium"){
        card.innerHTML = 400
    }

    if (question.level === "HARD"){
        card.innerHTML = 600
    }


    card.setAttribute('data-question', question.question)
    card.setAttribute('data-ansewr-1', question.answers[0])
    card.setAttribute('data-ansewr-2', question.answers[1])
    card.setAttribute('data-ansewr-3', question.answers[2])
    card.setAttribute('data-ansewr-4', question.answers[3])
    card.setAttribute('data-correct', question.correct)
    card.setAttribute('data-value', card.getInnerHTML())

    card.addEventListener('click', flipCard)
     })
  }

jeopardyCategories.forEach(category => addCategory(category))

let score = 0

function flipCard() {
    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "20px"

    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML =this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')
    const thirdButton = document.createElement('button')
    const fourthButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    thirdButton.classList.add('third-button')
    fourthButton.classList.add('fourth-button')

    firstButton.innerHTML = this.getAttribute('data-ansewr-1')
    secondButton.innerHTML = this.getAttribute('data-ansewr-2')
    thirdButton.innerHTML = this.getAttribute('data-ansewr-3')
    fourthButton.innerHTML = this.getAttribute('data-ansewr-4')

    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    thirdButton.addEventListener('click', getResult)
    fourthButton.addEventListener('click', getResult)

    this.append(textDisplay, firstButton, secondButton, thirdButton, fourthButton)

    const allcards = Array.from(document.querySelectorAll('.card'))
        allcards.forEach(card => card.removeEventListener('click', flipCard))
}

function getResult(){
   const allcards = Array.from(document.querySelectorAll('.card'))
   allcards.forEach(card => card.addEventListener('click', flipCard))

   const cardOfButton = this.parentElement

   if(cardOfButton.getAttribute('data-correct') === this.innerHTML){
    score = score + parseInt(cardOfButton.getAttribute('data-value'))
    scoreDisplay.innerHTML = score
    cardOfButton.classList.add('correct-answer')
        setTimeout(() =>{
            while (cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML =cardOfButton.getAttribute('data-value')
        },100)
        } else{
            cardOfButton.classList.add('Incorrect')
            setTimeout(() =>{
                while (cardOfButton.firstChild){
                    cardOfButton.removeChild(cardOfButton.lastChild)
                }
                cardOfButton.innerHTML = 0
            },100)
        }
        cardOfButton.removeEventListener('click',flipCard)
}

function EndGame() {
    window.location.href = "./indextest.html"; 
}
document.getElementById("endGameBtn").addEventListener("click", EndGame);