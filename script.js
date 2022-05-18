// JavaScript Document

var currentQuestion = 0;
var isflipped = 0;
var currentHowTo = 4;


var questions = ["WHAT WILL YOU DO BETTER OR DIFFERENTLY WHEN YOU GO BACK TO WORK?","WHICH ARE THE SITUATIONS WHERE YOU ARE MOST LIKELY TO APPLY WHAT YOU HAVE LEARNED?","WHAT ARE THE GREY AREAS IN TERMS OF CONTENT? ","WHAT IS STILL NOT CLEAR?","HOW DID YOU CONTRIBUTE TO THE EXPERIENCE?","WHAT MADE THE EXPERIENCE DIFFICULT?","WHAT DID YOU LEARN ABOUT YOURSELF AS A LEADER?","WHAT DID YOU LEARN ABOUT YOURSELF AS A LEARNER?","WHAT ELEMENTS IN YOUR WORK CONTEXT WILL HELP YOU TO APPLY YOUR LEARNING?","WHAT ELEMENTS IN YOUR WORK CONTEXT WILL MAKE IT DIFFICULT FOR YOU TO APPLY YOUR LEARNING?","HOW WILL YOU SHARE WHAT YOU HAVE LEARNED WITH YOUR MANAGER AND YOUR TEAM?","WHAT DID WE LEARN AS A GROUP?","WAS THERE A GROWTH OR DEVELOPMENT BEYOND INDIVIDUAL LEARNING?","WHAT ARE YOUR KEY INSIGHTS IN TERMS OF CONTENT?","WHICH BEHAVIOURS DO YOU COMMIT TO CHANGING?","WHICH BEHAVIOURS DO YOU WANT TO CHANGE?","WHICH BEHAVIOURS HAVE YOU ALREADY CHANGED?","HOW WILL YOU MAKE SPACE FOR LEARNING AT WORK?","WHAT IS YOUR NEXT GOAL OR MILESTONE IN TERMS OF LEARNING?","WHAT SUPPORT DO YOU NEED IN ORDER TO REACH YOUR NEXT LEARNING GOALS?","SHARE THREE BURNING QUESTIONS YOU HAVE AT THE MOMENT."]

var howToAnswer = ["Answer the question yourself.","Answer the question by drawing. Others interpret it. Then explain.","Ask the question to the group. Facilitate the discussion.","Ask the question to the person on your right."]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function flip() {
	document.getElementById("card-a").classList.add("flipped");
setTimeout(function() {document.getElementById("card-b").classList.add("flipped")}, 100);
	isflipped = 1;
}

function unflip() {
	document.getElementById("card-a").classList.remove("flipped");
setTimeout(function() {document.getElementById("card-b").classList.remove("flipped")}, 100);
	isflipped = 0;
}

function generateRandom(min, max, except) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === except) ? generateRandom(min, max) : num;
}

function populate() {
	document.getElementById("question-container").innerText = questions[currentQuestion];
	randomNum = generateRandom(0, 3, currentHowTo);
	document.getElementById("how-to-container").innerText = howToAnswer[randomNum];
	currentHowTo = randomNum;
}

function depopulate() {
	document.getElementById("question-container").innerText = "";
	document.getElementById("how-to-container").innerText = "";
}

function progress() {
	currentQuestion++
	if (currentQuestion>20) {
		currentQuestion = 0;
		shuffle(questions);
	}

}

function populateNumber() {
	document.getElementById("question-number").innerHTML = "<h3>Question " + (currentQuestion + 1) + "/21 </h3>";
}

function flipOnOff() {
	if (isflipped == 0) {
		flip();
		populate();
		populateNumber();
		startTimer();
		unhide(document.getElementById("how-to-container"));
		unhide(document.getElementById("question-container"));
	} else {
		unflip();
		/*depopulate()*/
		progress();
		stopTimer();
		hide(document.getElementById("how-to-container"));
		hide(document.getElementById("question-container"));
	}
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  timer5 = setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function stopTimer() {
	 clearTimeout(timer5);
	document.getElementById('timer').innerHTML = "5:00";
}

function hide(a) {
	a.classList.remove("unhidden");
	a.classList.add("hidden");
}

function unhide(a) {
	a.classList.add("unhidden");
	a.classList.remove("hidden");
}

/*added for spinner*/

function rotateFunction(){


	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 1000); //5000 = 5 second
}

  