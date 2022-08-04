function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log (string.toUpperCase());
}
function logWhisper (string) {
    console.log(string.toLowerCase( ));
  }

  function sayHiToHeadphonedRoommate(string) {
    var answerNo = "I can't hear you!";
    var correctAns = "YES INDEED!";
    var answerlov = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return answerNo;
    }
    else if (string.toUpperCase(string) === string) {
      return correctAns;
    }
    else if (string === string) {
      return answerlov
    }
  }