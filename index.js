
var Words = require('./Word');

var inquirer = require("inquirer"); 
var chalk = require("chalk"); 

// Guesses left
var guessesLeft = 10;

//Array for collecting letters guessed correct or in-correct 
var incorrectLetters = [];
var correctLetters = [];