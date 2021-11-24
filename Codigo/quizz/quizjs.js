(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
    
      // find selected answer
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }

      //creating a passing value
      // an empty array 
      let uAnswer ={
        'number':'',
        'answer':''
      }

      //passing the values
      uAnswer.number = questionNumber;
      console.log(uAnswer.number);
      uAnswer.answer = userAnswer;
      console.log(uAnswer.answer);

      //creating a colective array that will store many arrays.
      let uAnswers=[];
      if(localStorage.getItem('uAnswers')){
        uAnswers= JSON.parse(localStorage.getItem('uAnswers'));
      }
      uAnswers.push(uAnswer);
      localStorage.setItem('uAnswers', JSON.stringify(uAnswers));


    ///////////////////
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} de ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1 ){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  //Next and previous

  function showNextSlide() {
    if ($('input[type=radio]:checked').length > 0) {
      showSlide(currentSlide + 1);
  }
    
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  //Only this part should be changed 
  const myQuestions = JSON.parse.localStorage.getItem('myQuestion');



  // Kick things off
  buildQuiz();

 

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  //this part that calls the functions most important


  //ends the quiz
  submitButton.addEventListener('click', showResults);
  //next and previous slides
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
