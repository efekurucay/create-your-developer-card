function displayQuiz() {
    
    const questions = [
        {
            question: "Bir yazılım projesine başlarken ilk önceliğin ne olur?",
            choices: ["Arka plan mimarisini düşünmek", "Görsel tasarımı planlamak"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 }, // Backend Developer
                {perceivingScore: +1, judgingScore:0 },  // Frontend Developer
            ]
        },
        {
            question: "Veri ile ilgili bir problemle karşılaştın, ne yaparsın?",
            choices: ["Veri analizine yoğunlaşırım", "Tasarım odaklı bir çözüm ararım"],
            weights: [
                {thinkingScore: +1, feelingScore: 0 },   // AI Developer
                {feelingScore: +3, thinkingScore: 0 }   // UI/UX Designer
            ]
        },
        {
            question: "Hem backend hem frontend işleri var, hangisini seçersin?",
            choices: ["Her ikisini de dengeli yaparım", "Sadece birini yaparım"],
            weights: [
                {intuitionScore: +3, sensingScore: 0 }, // Full-Stack Developer
                {sensingScore: +1, intuitionScore: 0 }, // Backend/Frontend Developer
            ]
        },
        {
            question: "Bir mobil uygulama geliştirme projesindesin. Önceliğin nedir?",
            choices: ["Mobil performans optimizasyonu", "Web geliştirme ile uyumluluk"],
            weights: [
                {perceivingScore: +1, judgingScore: 0 }, // Mobile Developer
                {judgingScore: +3, perceivingScore: 0 }, // Frontend Developer
            ]
        },
        {
            question: "Sistemi sürekli güncel tutmak için hangi yolu tercih edersin?",
            choices: ["Otomasyon süreçleri ile", "Elle yönetim ile"],
            weights: [
                {sensingScore: +1, intuitionScore: 0 },  // DevOps Engineer
                {intuitionScore: +3, sensingScore: 0 },  // Backend Developer
            ]
        },
        {
            question: "Verilerle çalışırken en önemli önceliğin nedir?",
            choices: ["Veriyi anlamlı hale getirmek", "Veri güvenliğini sağlamak"],
            weights: [
                {thinkingScore: +1, feelingScore: 0 },  // Data Scientist
                {feelingScore: +3, thinkingScore: 0 }, // Security Specialist
            ]
        },
        {
            question: "Bir güvenlik açığı buldun, ne yaparsın?",
            choices: ["Derhal düzeltmeye çalışırım", "Detaylı bir analiz yaparım"],
            weights: [
                {sensingScore: +1, intuitionScore: 0 }, // Security Specialist
                {intuitionScore: +3, sensingScore: 0 }, // Blockchain Developer
            ]
        },
        {
            question: "Cloud teknolojileri ile çalışırken neyi önemsersin?",
            choices: ["Veri yönetimi ve optimizasyon", "Mikroservis entegrasyonu"],
            weights: [
                {introvertScore: +1, extrovertScore: 0 }, // Cloud Engineer
                {extrovertScore: +3, introvertScore: 0 }, // DevOps Engineer
            ]
        },
        {
            question: "Bir oyun geliştirme projesinde çalışıyorsun, neye odaklanırsın?",
            choices: ["Oyun motorlarının optimizasyonu", "Grafik tasarımı"],
            weights: [
                {thinkingScore: +3, feelingScore: 0 },  // Game Developer
                {feelingScore: +1, thinkingScore: 0 },  // UI/UX Designer
            ]
        },
        {
            question: "Blockchain tabanlı bir proje üzerinde çalışıyorsun. Ne önemlidir?",
            choices: ["Akıllı sözleşmelerin güvenliği", "Veritabanı ile uyumluluk"],
            weights: [
                {thinkingScore: +3, feelingScore: 0 },  // Blockchain Developer
                {feelingScore: +1, thinkingScore: 0 },  // Database Administrator
            ]
        },
        {
            question: "Bir donanım/yazılım entegrasyonu projesinde çalışıyorsun. Ne önemsersin?",
            choices: ["Mikrodenetleyici programlama", "Cloud tabanlı çözümler"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 }, // Embedded Systems Developer
                {introvertScore: +1, extrovertScore: 0 }, // Cloud Engineer
            ]
        },
        {
            question: "Son olarak, kullanıcı deneyimine ne kadar önem verirsin?",
            choices: ["Veriyi analiz etmek daha önemli", "Kullanıcı dostu bir arayüz oluşturmak"],
            weights: [
                {perceivingScore: +3, judgingScore: 0 }, // Data Scientist
                {judgingScore: +1, perceivingScore: 0 }, // UI/UX Designer
            ]
        }
    ];


    //Variables for scores 
    let currentQuestionIndex = 0;
    let introvertScore = 0;
    let extrovertScore = 0;
    let judgingScore = 0;
    let perceivingScore = 0;
    let sensingScore = 0;
    let intuitionScore = 0;
    let thinkingScore = 0;
    let feelingScore = 0;


    function displayQuestionImage(questionIndex) {
        const imageURLs = [
            "Q1.png",
            "Q2.png",
            "Q3.png",
            "Q4.png",
            "Q5.png",
            "Q6.png",
            "Q7.png",
            "Q8.png",
            "Q9.png",
            "Q10.png",
            "Q11.png",
            "Q12.png",
            "processing.GIF",
        ];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);
        
        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }

    //Function to get progress bar image URL for the current question 
    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "Q1 progress.svg",
            "Q2 progress.svg",
            "Q3 progress.svg",
            "Q4 progress.svg",
            "Q5 progress.svg",
            "Q6 progress.svg",
            "Q7 progress.svg",
            "Q8 progress.svg",
            "Q9 progress.svg",
            "Q10 progress.svg",
            "Q11 progress.svg",
            "Q12 progress.svg",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    //Function to handle choice click
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                //Update scores based on weight of selected choice
                if (selectedChoiceWeight.hasOwnProperty('introvertScore')) {
                    introvertScore += selectedChoiceWeight.introvertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('extrovertScore')) {
                    extrovertScore += selectedChoiceWeight.extrovertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('judgingScore')) {
                    judgingScore += selectedChoiceWeight.judgingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('perceivingScore')) {
                    perceivingScore += selectedChoiceWeight.perceivingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('sensingScore')) {
                    sensingScore += selectedChoiceWeight.sensingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('intuitionScore')) {
                    intuitionScore += selectedChoiceWeight.intuitionScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('thinkingScore')) {
                    thinkingScore += selectedChoiceWeight.thinkingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('feelingScore')) {
                    feelingScore += selectedChoiceWeight.feelingScore;
                }

            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
            }
        }
        

    //Function to calculate MBTI type based on scores and display image
    function calculateMBTITypeAndDisplayImage() {
        //Calculate introvert/extrovert dimension
        const introextro = introvertScore > extrovertScore ? "I" :"E";
        //Calculate sensing/intuition dimension
        const sensint = sensingScore > intuitionScore ? "S" : "N";
        //Calculate thinking/feeling dimension
        const thinkfeel = thinkingScore > feelingScore ? "T" : "F";
        //Calculate judging/perceiving dimension
        const judgeper = judgingScore > perceivingScore ? "J" : "P";
        //Produce MBTI type string
        const mbtiTypeString = introextro + sensint + thinkfeel + judgeper;

        console.log("MBTI Type:", mbtiTypeString);

        document.getElementById('results').style.display = 'none';
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": "Lemon.png",          // Backend Developer
                "INTJ": "Pomegranate.png",    // Frontend Developer
                "ENTP": "Dragon Fruit.png",   // AI Developer
                "INTP": "Grape.png",          // Full-Stack Developer
                "ENFJ": "Peach.png",          // Mobile Developer
                "INFJ": "Fig.png",            // DevOps Engineer
                "ENFP": "Watermelon.png",     // Data Scientist
                "INFP": "Cherry.png",         // Security Specialist
                "ESFJ": "Orange.png",         // Database Administrator
                "ISFJ": "Apple.png",          // Cloud Engineer
                "ESTJ": "Banana.png",         // Game Developer
                "ISTJ": "Pear.png",           // Blockchain Developer
                "ESTP": "Pineapple.png",      // Embedded Systems Developer
                "ISTP": "Coconut.png",        // AI Researcher
                "ESFP": "Mango.png",          // QA Engineer
                "ISFP": "Strawberry.png",     // UI/UX Designer
            };
            return MBTIImageUrls[mbtiTypeString] || ""
        }

        //Display image
        function displayImage(mbtiTypeString) {
            const imageURL = getMBTIImageUrl(mbtiTypeString);
            const mbtiImageContainer = document.getElementById('mbti-image');
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            mbtiImageContainer.appendChild(imageElement);
    
    }
        //Display the first question when the quiz starts
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

//Call function to start the quiz
displayQuiz();

// Share quiz button click event handler
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Quiz URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    });
});

// Select the button element
const backToHomeButton = document.getElementById('back-to-home');

// Add event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        // Redirect to the home page or perform any other action you want
        window.location.href = 'quiz.akdenizyyy.org.tr'; // Replace 'home.html' with the actual URL of your home page
    });
});

// Function to navigate back to the home page
function navigateToHomePage() {
    // Reset quiz state if needed
    resetQuiz(); // Assuming you have a resetQuiz() function defined

    // Hide quiz page and show the home page
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
