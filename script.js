//list of random answers
$(document).ready(function () {
  var magic8Ball = {};
  $("#answer").hide();

  magic8Ball.listOfAnswers = [
    "Certain",
    "Uncertain",
    "Absolutely",
    "Definitely",
    "Yes",
    "No",
    "Likely",
    "Unlikely",
    "Maybe",
    "Unsure",
    "Not Now",
    "Ask Me Later",
  ];

  magic8Ball.askQuestion = function (question) {
    //moved shake effect
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
    $("#8ball").attr("src", "answerside.png");

    //display the list of answers randomly
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").text(answer);
  };

  var onClick = function () {
    $("#answer").hide();
    $("#8ball").attr("src", "answerside.png");

    // moved set time out function here inside onClick function
    setTimeout(function () {
      var question = prompt("Ask a yes or no question");
      magic8Ball.askQuestion(question);
    }, 500);
  };
  $("#questionButton").click(onClick);
});
