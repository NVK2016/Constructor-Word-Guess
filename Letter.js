function Letter(value) {
    this.letter = value;
    this.guessed = false;

    this.displayUnderScore = function(){
        if(!this.guessed){
            return "-"; 
        }
        else{
            return this.leter; 
        }
    }
    
    // Check if user guess is the same value
    this.checkLetter = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;