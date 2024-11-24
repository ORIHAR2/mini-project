const STORE = {
    questions: {
     rights_and_duties: [
      {
       question: "What is one of the fundamental rights guaranteed by the Universal Declaration of Human Rights?",
       code: ``,
       answers: [
        "The right to privacy",
        "The right to vote",
        "The right to a free market",
        "The right to a free education"
       ],
       correctAnswer: "The right to privacy"
      }, {
       question: "Which of the following is a fundamental duty of citizens in a democratic society?",
       code: ``,
       answers: [
        "To protest against the government",
        "To respect the rights of others",
        "To disregard public laws",
        "To limit access to public information"
       ],
       correctAnswer: "To respect the rights of others"
      }, {
       question: "What is the purpose of the right to a fair trial?",
       code: ``,
       answers: [
        "To ensure justice and transparency in legal proceedings",
        "To speed up the legal process",
        "To allow for secret trials",
        "To minimize the involvement of legal representatives"
       ],
       correctAnswer: "To ensure justice and transparency in legal proceedings"
      }, {
       question: "Which of the following is a fundamental right concerning freedom of expression?",
       code: ``,
       answers: [
        "The right to access classified information",
        "The right to speak freely without censorship",
        "The right to spread false information without repercussions",
        "The right to privacy from public opinion"
       ],
       correctAnswer: "The right to speak freely without censorship"
      }, {
       question: "What is a key responsibility of citizens regarding voting in democratic elections?",
       code: ``,
       answers: [
        "To participate in the voting process",
        "To avoid voting to ensure fairness",
        "To influence the voting outcome illegally",
        "To ignore the election results"
       ],
       correctAnswer: "To participate in the voting process"
      }
     ],
     civic_rights: [
        {
         question: "What is the right to free speech?",
         code: ``,
         answers: [
          "The ability to express opinions without government interference",
          "The right to remain silent in legal situations",
          "The right to limit others' speech",
          "The ability to publish state secrets"
         ],
         correctAnswer: "The ability to express opinions without government interference"
        }, {
         question: "Which right ensures that individuals are not unfairly detained without cause?",
         code: ``,
         answers: [
          "The right to a fair trial",
          "The right to privacy",
          "The right to freedom of assembly",
          "The right to due process"
         ],
         correctAnswer: "The right to due process"
        }, {
         question: "What is the fundamental duty related to paying taxes?",
         code: ``,
         answers: [
          "To contribute to government revenues to fund public services",
          "To evade taxes legally",
          "To donate all income to charity",
          "To avoid income reporting"
         ],
         correctAnswer: "To contribute to government revenues to fund public services"
        }, {
         question: "What is a key component of the right to education?",
         code: ``,
         answers: [
          "Access to free and compulsory primary education",
          "The right to choose any school without limitations",
          "The ability to dictate educational content",
          "The right to attend private schools only"
         ],
         correctAnswer: "Access to free and compulsory primary education"
        }, {
         question: "Which responsibility involves following laws and regulations?",
         code: ``,
         answers: [
          "Obeying legal requirements",
          "Disregarding local ordinances",
          "Challenging every legal rule",
          "Avoiding compliance with government policies"
         ],
         correctAnswer: "Obeying legal requirements"
        }
       ],
       personal_rights: [
        {
         question: "What does the right to privacy protect?",
         code: ``,
         answers: [
          "Personal information from unauthorized access",
          "The right to have unlimited access to private property",
          "The ability to make public declarations without consequence",
          "The right to avoid paying taxes"
         ],
         correctAnswer: "Personal information from unauthorized access"
        }, {
         question: "Which of the following is a fundamental right concerning the freedom of religion?",
         code: ``,
         answers: [
          "The right to practice any religion or no religion",
          "The right to force others to follow one's religion",
          "The right to restrict religious practices of others",
          "The right to dictate state religion"
         ],
         correctAnswer: "The right to practice any religion or no religion"
        }, {
         question: "What is meant by the right to freedom of assembly?",
         code: ``,
         answers: [
          "The right to gather peacefully for meetings or protests",
          "The right to disband assemblies organized by others",
          "The ability to prevent others from gathering",
          "The right to force participation in public events"
         ],
         correctAnswer: "The right to gather peacefully for meetings or protests"
        }, {
         question: "What responsibility comes with the right to own property?",
         code: ``,
         answers: [
          "To respect property rights of others",
          "To hoard property without regard to others",
          "To use property for illegal activities",
          "To disregard zoning laws"
         ],
         correctAnswer: "To respect property rights of others"
        }, {
         question: "What is the purpose of the right to a fair trial?",
         code: ``,
         answers: [
          "To ensure justice and impartiality in legal proceedings",
          "To speed up the legal process",
          "To allow for secret legal proceedings",
          "To minimize the involvement of legal representatives"
         ],
         correctAnswer: "To ensure justice and impartiality in legal proceedings"
        }
       ],
       global_rights: [
        {
         question: "What is the purpose of the Universal Declaration of Human Rights?",
         code: ``,
         answers: [
          "To establish global standards for human rights",
          "To create laws for international trade",
          "To regulate global economic policies",
          "To enforce military agreements"
         ],
         correctAnswer: "To establish global standards for human rights"
        }, {
         question: "Which of the following is a right protected under the International Covenant on Civil and Political Rights?",
         code: ``,
         answers: [
          "The right to participate in public affairs",
          "The right to unrestricted commercial activity",
          "The right to create state laws",
          "The right to global citizenship"
         ],
         correctAnswer: "The right to participate in public affairs"
        }, {
         question: "How does the Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) protect women's rights?",
         code: ``,
         answers: [
          "By addressing discrimination and promoting gender equality",
          "By promoting economic equality in international markets",
          "By regulating educational curricula worldwide",
          "By setting standards for international trade agreements"
         ],
         correctAnswer: "By addressing discrimination and promoting gender equality"
        }, {
         question: "What does the right to asylum entail?",
         code: ``,
         answers: [
          "The right to seek refuge from persecution in another country",
          "The right to gain automatic citizenship in any country",
          "The ability to impose international sanctions",
          "The right to refuse immigration processes"
         ],
         correctAnswer: "The right to seek refuge from persecution in another country"
        }, {
         question: "What does the right to health care typically ensure?",
         code: ``,
         answers: [
          "Access to necessary medical services and treatments",
          "The ability to access luxury medical treatments",
          "Free global healthcare without any conditions",
          "Complete exemption from health-related responsibilities"
         ],
         correctAnswer: "Access to necessary medical services and treatments"
        }
       ],
       environmental_rights: [
        {
         question: "What is the significance of the right to a healthy environment?",
         code: ``,
         answers: [
          "It ensures access to clean air, water, and a safe living environment",
          "It allows for unrestricted industrial activity",
          "It mandates the destruction of natural habitats for development",
          "It provides immunity from environmental regulations"
         ],
         correctAnswer: "It ensures access to clean air, water, and a safe living environment"
        }, {
         question: "Which international agreement focuses on climate change?",
         code: ``,
         answers: [
          "The Paris Agreement",
          "The Kyoto Protocol",
          "The Montreal Protocol",
          "The Geneva Convention"
         ],
         correctAnswer: "The Paris Agreement"
        }, {
         question: "What does the principle of sustainable development involve?",
         code: ``,
         answers: [
          "Meeting present needs without compromising future generations",
          "Maximizing resource extraction for economic growth",
          "Limiting renewable energy use",
          "Prioritizing short-term gains over long-term impacts"
         ],
         correctAnswer: "Meeting present needs without compromising future generations"
        }, {
         question: "What role do environmental regulations play in protecting natural resources?",
         code: ``,
         answers: [
          "They establish guidelines to manage and conserve natural resources",
          "They allow unrestricted use of natural resources",
          "They focus solely on economic growth without environmental considerations",
          "They provide legal loopholes for resource exploitation"
         ],
         correctAnswer: "They establish guidelines to manage and conserve natural resources"
        }, {
         question: "How can individuals contribute to environmental protection?",
         code: ``,
         answers: [
          "By adopting sustainable practices and reducing waste",
          "By ignoring recycling guidelines",
          "By increasing the use of non-renewable resources",
          "By opposing environmental regulations"
         ],
         correctAnswer: "By adopting sustainable practices and reducing waste"
        }
       ],
       human_rights   : [
        {
          question: "What is the Universal Declaration of Human Rights?",
          code: ``,
          answers: [
            "A document adopted by the United Nations outlining fundamental human rights",
            "A national law specific to the United States",
            "A set of religious doctrines",
            "An economic agreement between countries"
          ],
          correctAnswer: "A document adopted by the United Nations outlining fundamental human rights"
        },
        {
          question: "Which of the following is considered a fundamental human right?",
          code: ``,
          answers: [
            "The right to freedom of expression",
            "The right to own private property",
            "The right to participate in competitive sports",
            "The right to travel without restrictions"
          ],
          correctAnswer: "The right to freedom of expression"
        },
        {
          question: "How does the right to a fair trial protect individuals?",
          code: ``,
          answers: [
            "It ensures legal proceedings are conducted impartially and justly",
            "It guarantees that individuals win their cases",
            "It allows individuals to ignore legal obligations",
            "It provides automatic legal representation for all cases"
          ],
          correctAnswer: "It ensures legal proceedings are conducted impartially and justly"
        }
      ],
      digital_rights: [
        {
          question: "What is the right to digital privacy?",
          code: ``,
          answers: [
            "The right to protect personal data and communications from unauthorized access",
            "The ability to access any digital content without restrictions",
            "The right to free internet access worldwide",
            "The right to ignore cybersecurity regulations"
          ],
          correctAnswer: "The right to protect personal data and communications from unauthorized access"
        },
        {
          question: "How does the right to net neutrality affect internet users?",
          code: ``,
          answers: [
            "It ensures that internet service providers treat all data equally without discrimination",
            "It allows internet providers to prioritize certain websites and services",
            "It provides free access to all digital services",
            "It restricts access to information based on user preferences"
          ],
          correctAnswer: "It ensures that internet service providers treat all data equally without discrimination"
        },
        {
          question: "What is the right to data protection?",
          code: ``,
          answers: [
            "The right to have personal data collected, stored, and processed in a secure and lawful manner",
            "The ability to access all personal data held by organizations without restrictions",
            "The right to delete all digital traces from the internet",
            "The ability to control all digital platforms’ algorithms"
          ],
          correctAnswer: "The right to have personal data collected, stored, and processed in a secure and lawful manner"
        }
      ],
      economic_rights: [
        {
          question: "What does the right to fair trade ensure?",
          code: ``,
          answers: [
            "Trade practices that provide equitable trading conditions and benefits for all parties",
            "The ability to set trade regulations unilaterally",
            "The right to avoid paying fair prices for goods",
            "The ability to manipulate market prices"
          ],
          correctAnswer: "Trade practices that provide equitable trading conditions and benefits for all parties"
        },
        {
          question: "How does the right to economic self-determination support individuals?",
          code: ``,
          answers: [
            "It allows individuals to make their own economic decisions and control their economic resources",
            "It grants unrestricted access to global markets",
            "It ensures immunity from financial regulations",
            "It provides automatic economic benefits regardless of actions"
          ],
          correctAnswer: "It allows individuals to make their own economic decisions and control their economic resources"
        },
        {
          question: "What is the right to social security?",
          code: ``,
          answers: [
            "The right to financial assistance and protection during times of unemployment, disability, or old age",
            "The ability to avoid contributing to social security systems",
            "The right to unlimited government support without conditions",
            "The ability to bypass social security regulations"
          ],
          correctAnswer: "The right to financial assistance and protection during times of unemployment, disability, or old age"
        }
      ],
      educational_rights: [
        {
          question: "What does the right to free and compulsory education guarantee?",
          code: ``,
          answers: [
            "Access to education without cost and mandatory attendance for children of certain ages",
            "The ability to choose any educational institution without restrictions",
            "The right to ignore educational requirements",
            "The right to receive education in any language without limitations"
          ],
          correctAnswer: "Access to education without cost and mandatory attendance for children of certain ages"
        },
        {
          question: "How does the right to equal educational opportunities benefit students?",
          code: ``,
          answers: [
            "It ensures that all students have access to quality education regardless of their background",
            "It allows students to choose their own curriculum without limits",
            "It grants special privileges based on academic performance",
            "It provides exemption from educational standards"
          ],
          correctAnswer: "It ensures that all students have access to quality education regardless of their background"
        },
        {
          question: "What is the purpose of the right to academic freedom?",
          code: ``,
          answers: [
            "To allow educators and researchers to pursue knowledge and teach without undue interference",
            "To restrict academic research to certain topics only",
            "To mandate specific research outcomes",
            "To control educational content based on political views"
          ],
          correctAnswer: "To allow educators and researchers to pursue knowledge and teach without undue interference"
        }
      ],
      health_rights: [
        {
          question: "What does the right to access healthcare involve?",
          code: ``,
          answers: [
            "The ability to receive medical services and treatments without undue barriers",
            "The right to avoid paying for healthcare services",
            "The ability to choose any medical treatment regardless of regulations",
            "The right to ignore public health guidelines"
          ],
          correctAnswer: "The ability to receive medical services and treatments without undue barriers"
        },
        {
          question: "How does the right to mental health support individuals?",
          code: ``,
          answers: [
            "It ensures access to mental health services and support without discrimination",
            "It provides immunity from mental health issues",
            "It allows individuals to avoid seeking mental health care",
            "It guarantees instant solutions to mental health problems"
          ],
          correctAnswer: "It ensures access to mental health services and support without discrimination"
        },
        {
          question: "What is the right to safe and healthy working conditions?",
          code: ``,
          answers: [
            "The right to work in environments that do not pose harm to health and safety",
            "The ability to disregard workplace safety regulations",
            "The right to avoid compliance with health standards",
            "The ability to set unsafe working conditions"
          ],
          correctAnswer: "The right to work in environments that do not pose harm to health and safety"
        }
      ],
     // The rest of the categories would be similarly adapted
    }
   };
   

// Make the quiz. Create a model for our app's state
function makeQuiz(){
	// Creating an object to store the app's state when beginning the quiz
	return {
		// Gathering a random question out of the available questions for each category
		questions: helpers.getRandomQuestions(STORE),
		// Boolean for if the quiz is in progress or not
		midQuiz: false,
		// Array of correct/incorrect answers to use for our progress bar
		progress: {
			progressBar: [],
			incorrectCategories: []
		},
		// Boolean to determine if the end state should display
		completed: false,
		// Monitoring which question we are currently on
		currentQuestion: 0,
		// Keeps track of total correct answers
		correctAnswers: 0,
		// Keeps current selected answer
		currentAnswer: "",
		// Keeps track of % completed
		percCorrect: 0
	}
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState){

	// This is the completed state of of a quiz
	if(appState.completed){
		
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){

				// Display results of the quiz
				$showResults(appState);
				$('.results-wrapper').hide().removeClass('hide');
				$('.question-answer-wrapper, .results-wrapper').fadeIn(500);
	    });

	// This is if the app is just starting
	} else if(appState.midQuiz === false){

		// Set a flag that the app has begun
		appState.midQuiz = true;
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
			.done(function(){
				// Remove any progress from a previous quiz (if any);
				helpers.updateProgressBar(appState);
				$('.progress-count').html('1 / 10');
				$('.progress-perc').html('');
				// Kill previous results
				$('.failures').remove();
				// Lots to do... mostly just setting up a new environment for a new quiz
				$updateQuestion(appState);
				$('progress-bar').empty();
				$('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
				$('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
				$('.submit-btn, .progress, .progress-bar').removeClass('hide');
				$('.progress, .progress-bar').hide();
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
				if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
	    });

	// This is if the app is in the middle of execution
	} else if(appState.midQuiz){
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){
				$updateQuestion(appState);
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
	    });
	}
}

// Work in progress...
function $showResults(appState){
	if(appState.correctAnswers === 10){
		let endMsg = `You got ${appState.percCorrect}% correct!
I have nothing else to teach you. Move on and prosper!
`;
	} else {
		$('.answer-btn').remove();
		let endMsg = `You got ${appState.percCorrect}% correct!`
		let endFeedback = ``;
		if(appState.progress.incorrectCategories.length === 0){
			endFeedback = `You aced it! Good job!`;
		} else {
			endFeedback = `You may want to study up on the following categories:`;
		}
		
		$('.quiz-end-score').html(endMsg);
		let $failList = $('<ul class="failures"></ul>');
		appState.progress.incorrectCategories.map((cat => {
			$failList.append("<li class='category'>" + cat + "</li>");
		}));
		$('.quiz-end-feedback-p').html(endFeedback);
		$('.quiz-end-categories').append($failList);
		$('.results-wrapper').removeClass('hide').css('display', 'flex');
		$('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
	}

}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState){
	$('.answer-btn').remove();

	// Update the question and code text with the current question
	$('.question').html(appState.questions[appState.currentQuestion].question);

	// This is a hack to hide/show the code portion
	// Only 1/3 of the questions contain code so we hide it if they aren't present
	if(appState.questions[appState.currentQuestion].code == ``){
		$('.code').addClass('hide');
	} else {
		$('.code').removeClass('hide');
		$('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
	}
	
	// Change continue back to submit
	$('.continue-btn')
		.val("Submit")
		.removeClass('continue-btn')
		.addClass('submit-btn')
		.prop('disabled', true);

	// Add in available answers for the question
	let $answers = [];

	// Adding the answers to a temporary array
	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){

		// Add current question answers to an array
		let $answer = $('<button class="answer-btn" type="button"></button>');
		$answer.html(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}

	// Shuffle the answers
	helpers.shuffleAnswers($answers)

	// Push answers to the DOM
	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer){
	$('.answer-btn').removeClass('selected');
	answer.addClass('selected');
	$('.submit-btn').prop('disabled', false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState){

	// This will be returned true or false based on their answer
	let correct;

	// Add styles to the answers to show if their answer was correct or not
	$('.answer-btn').each(function () {
		if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
			$(this).addClass('pass');
			// If answer is correct and selected...
			if($(this).hasClass('selected')){
				correct = "pass";
				appState.correctAnswers++;
				appState.questions[appState.currentQuestion];
			}

		// Handle correct answer if selected answer is incorrect
		} else if ($(this).hasClass('selected')){
			$(this).addClass('fail dim-answer');
			correct = "fail";
			appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

		// Dim the other answers to make the correct one more prevalent
		} else {
			$(this).addClass('dim-answer');
		}
	});

	// Add a progress bar indicator to our appState object
	appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
	
	// Update our percent correct (parse a float and set it to a fixed percentage)
	appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

	// Update our current question VS total quiz length
	$('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

	// Update our current correct percentage
	$('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

	// Change submit back to continue
	$('.submit-btn')
		.val("Continue")
		.removeClass('submit-btn')
		.addClass('continue-btn')

	// Disable selecting answers
	$('.answer-btn').prop("disabled", true);

	// Update our progress-bar DOM
	helpers.updateProgressBar(appState);

	// Continue to next question
	appState.currentQuestion++;

	// Verify if we're done or not
	if(appState.currentQuestion === appState.questions.length){
		appState.completed = true;
	}
	
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz(){
	$('.start-quiz, .quit-quiz').hide();
	let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
	let msgSplit = failureMsg.split(" ");
	let counter = 0;
	$('.question').empty();
	let startTroll = setInterval(function () {
		$('.question').append(msgSplit[counter] + " ");
		counter++;
		if(counter > msgSplit.length - 1){
  			clearInterval(startTroll);
  			$('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
		}
	}, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
	// Pick a random question from the available ones
	pickRandomQ: function(obj,section){
		return Math.floor(Math.random() * obj.questions[section].length);		
	},
	// Gather a random question from every category
	getRandomQuestions: function(obj){
		let questions = [];
		let categories = Object.keys(obj.questions);
		categories.forEach((cat) => {
			let randomQ = this.pickRandomQ(obj,cat);
			let question = obj.questions[cat][randomQ];
			question.category = cat;
			questions.push(question);
		});
		return questions;
	},
	// Shuffle the answers so they don't appear in the same order
	shuffleAnswers: function(arr){
	    for (var i = arr.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	},
	// Update progress bar DOM element
	updateProgressBar: function(appState){
		$('.progress-bar').empty();
		appState.progress.progressBar.forEach((progInd => {
			$('.progress-bar').append(progInd);
		}))
	}
}

// Lets start the show
$(function(){

	// Kill any form refresh
	$('.answer-wrapper').on('submit', function(e){
		e.preventDefault();
	});

	// Storage for quiz app state
	let quizData;

	// Start quiz
	$('.start-quiz, .retry-btn').on('click', function(){
		quizData = makeQuiz();
		$fade(quizData);
	});

	// Select an answer
	$('.question-answer-wrapper').on('click', '.answer-btn', function(){
		selectAnswer($(this));
	})

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.submit-btn', function(e){
		submitAnswer(quizData);
	});

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.continue-btn', function(){
		$fade(quizData);
	});

	// Easter egg to chastize the user
	$('.quit-quiz').on('click', function(){
		killQuiz();
	})
})
