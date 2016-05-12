

 $(window).scroll(function() {
    if ($(window).scrollLeft() > 2000) {
        $(".fine").show(1000);
    }
});

  $(".fine").click( function() {
    responsiveVoice.speak(wordstring);
   $("body").animate({scrollLeft: 0}, 800)
 });

  var wordstring = "";


$(".horiz-lines, .notes").click(function(){
  
  $(".horiz-line1, .horiz-line2, .horiz-line3, .horiz-line4, .horiz-line5, .vert-line").css("background-color","white");

  $("body").css("background-color","black");
  $(".noteline, .notecircle").css("background-color","white");
 	
  $(".treble").hide();
  $(".whitetreble").show();

  });


	// $(".horiz-lines").mouseover(function(){
 //    	$(".notes").show()});
 //  	$(".horiz-lines").mouseout(function(){
	// 	$(".notes").hide();
	// });

// $(window).keypress(function(event) { 

// 	if(event.which == 52){ 
// 		$("html, body").animate({ scrollLeft: "+=600px" }, 100);
// 	}
	

// });


var numKeys = 0; 
var words = new Array("the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "words", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "called", "who", "oil", "sit", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "over", "new", "sound", "take", "only", "little", "work", "know", "place", "years", "live", "me", "back", "give", "most", "very", "after", "things", "our", "just", "name", "good", "sentence", "man", "think", "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "does", "another", "well", "large", "must", "big", "even", "such", "because", "turn", "here", "why", "ask", "went", "men", "read", "need", "land", "different", "home", "us", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don’t", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "late", "miss", "idea", "enough", "eat", "face", "watch", "far", "Indian", "real", "almost", "let", "above", "girl", "sometimes", "mountains", "cut", "young", "talk", "soon", "list", "song", "being", "leave", "family", "it’s", "body", "music", "color", "stand", "sun", "questions", "fish", "area", "mark", "dog", "horse", "birds", "problem", "complete", "room", "knew", "since", "ever", "piece", "told", "usually", "didn’t", "friends", "easy", "heard", "order", "red", "door", "sure", "become", "top", "ship", "across", "today", "during", "short", "better", "best", "however", "low", "hours", "black", "products", "happened", "whole", "measure", "remember", "early", "waves", "reached", "listen", "wind", "rock", "space", "covered", "fast", "several", "hold", "himself", "toward", "five", "step", "morning", "passed", "vowel", "true", "hundred", "against", "pattern", "numeral", "table", "north", "slowly", "money", "map", "farm", "pulled", "draw", "voice", "seen", "cold", "cried", "plan", "notice", "south", "sing", "war", "ground", "fall", "king", "town", "I’ll", "unit", "figure", "certain", "field", "travel", "wood", "fire", "upon", "done", "English", "road", "half", "ten", "fly", "gave", "box", "finally", "wait", "correct", "oh", "quickly", "person", "became", "shown", "minutes", "strong", "verb", "stars", "front", "feel", "fact", "inches", "street", "decided", "contain", "course", "surface", "produce", "building", "ocean", "class", "note", "nothing", "rest", "carefully", "scientists", "inside", "wheels", "stay", "green", "known", "island", "week", "less", "machine", "base", "ago", "stood", "plane", "system", "behind", "ran", "round", "boat", "game", "force", "brought", "understand", "warm", "common", "bring", "explain", "dry", "though", "language", "shape", "deep", "thousands", "yes", "clear", "equation", "yet", "government", "filled", "heat", "full", "hot", "check", "object", "am", "rule", "among", "noun", "power", "cannot", "able", "six", "size", "dark", "ball", "material", "special", "heavy", "fine", "pair", "circle", "include", "built", "can’t", "matter", "square", "syllables", "perhaps", "bill", "felt", "suddenly", "test", "direction", "center", "farmers", "ready", "anything", "divided", "general", "energy", "subject", "Europe", "moon", "region", "return", "believe", "dance", "members", "picked", "simple", "cells", "paint", "mind", "love", "cause", "rain", "exercise", "eggs", "train", "blue", "wish", "drop", "developed", "window", "difference", "distance", "heart", "site", "sum", "summer", "wall", "forest", "probably", "legs", "sat", "main", "winter", "wide", "written", "length", "reason", "kept", "interest", "arms", "brother", "race", "present", "beautiful", "store", "job", "edge", "past", "sign", "record", "finished", "discovered", "wild", "happy", "beside", "gone", "sky", "grass", "million", "west", "lay", "weather", "root", "instruments", "meet", "third", "months", "paragraph", "raised", "represent", "soft", "whether", "clothes", "flowers", "shall", "teacher", "held", "describe", "drive", "cross", "speak", "solve", "appear", "metal", "son", "either", "ice", "sleep", "village", "factors", "result", "jumped", "snow", "ride", "care", "floor", "hill", "pushed", "baby", "buy", "century", "outside", "everything", "tall", "already", "instead", "phrase", "soil", "bed", "copy", "free", "hope", "spring", "case", "laughed", "nation", "quite", "type", "themselves", "temperature", "bright", "lead", "everyone", "method", "section", "lake", "iron", "within", "dictionary", "hair", "age", "amount", "scale", "pounds", "although", "per", "broken", "moment", "tiny", "possible", "gold", "milk", "quiet", "natural", "lot", "stone", "act", "build", "middle", "speed", "count", "consonant", "someone", "sail", "rolled", "bear", "wonder", "smiled", "angle", "fraction", "Africa", "killed", "melody", "bottom", "trip", "hole", "poor", "let’s", "fight", "surprise", "French", "died", "beat", "exactly", "remain", "dress", "cat", "couldn’t", "fingers", "row", "least", "catch", "climbed", "wrote", "shouted", "continued", "itself", "else", "plains", "gas", "England", "burning", "design", "joined", "foot", "law", "ears", "glass", "you’re", "grew", "skin", "valley", "cents", "key", "president", "brown", "trouble", "cool", "cloud", "lost", "sent", "symbols", "wear", "bad", "save", "experiment", "engine", "alone", "drawing", "east", "choose", "single", "touch", "information", "express", "mouth", "yard", "equal", "decimal", "yourself", "control", "practice", "report", "straight", "rise", "statement", "stick", "party", "seeds", "suppose", "woman", "coast", "bank", "period", "wire", "pay", "clean", "visit", "bit", "whose", "received", "garden", "please", "strange", "caught", "fell", "team", "God", "captain", "direct", "ring", "serve", "child", "desert", "increase", "history", "cost", "maybe", "business", "separate", "break", "uncle", "hunting", "flow", "lady", "students", "human", "art", "feeling", "supply", "corner", "electric", "insects", "crops", "tone", "hit", "sand", "doctor", "provide", "thus", "won’t", "cook", "bones", "mall", "board", "modern", "compound", "mine", "wasn’t", "fit", "addition", "belong", "safe", "soldiers", "guess", "silent", "trade", "rather", "compare", "crowd", "poem", "enjoy", "elements", "indicate", "except", "expect", "flat", "seven", "interesting", "sense", "string", "blow", "famous", "value", "wings", "movement", "pole", "exciting", "branches", "thick", "blood", "lie", "spot", "bell", "fun", "loud", "consider", "suggested", "thin", "position", "entered", "fruit", "tied", "rich", "dollars", "send", "sight", "chief", "Japanese", "stream", "planets", "rhythm", "eight", "science", "major", "observe", "tube", "necessary", "weight", "meat", "lifted", "process", "army", "hat", "property", "particular", "swim", "terms", "current", "park", "sell", "shoulder", "industry", "wash", "block", "spread", "cattle", "wife", "sharp", "company", "radio", "we’ll", "action", "capital", "factories", "settled", "yellow", "isn’t", "southern", "truck", "fair", "printed", "wouldn’t", "ahead", "chance", "born", "level", "triangle", "molecules", "France", "repeated", "column", "western", "church", "sister", "oxygen", "plural", "various", "agreed", "opposite", "wrong", "chart", "prepared", "pretty", "solution", "fresh", "shop", "suffix", "especially", "shoes", "actually", "nose", "afraid", "dead", "sugar", "adjective", "fig", "office", "huge", "gun", "similar", "death", "score", "forward", "stretched", "experience", "rose", "allow", "fear", "workers", "Washington", "Greek", "women", "bought", "led", "march", "northern", "create", "British", "difficult", "match", "win", "doesn’t", "steel", "total", "deal", "determine", "evening", "hoe", "rope", "cotton", "apple", "details", "entire", "corn", "substances", "smell", "tools", "conditions", "cows", "track", "arrived", "located", "sir", "seat", "division", "effect", "underline", "view");
var notes = [".note", "note2-2", "note2-3", "note2-4", "note-2-5"];

 $(window).keypress(function(event) { 
   

  numKeys++;
  if (numKeys == 5 || numKeys == 10 || numKeys == 15 || numKeys == 20 || numKeys == 25 || numKeys == 30 || numKeys == 35 || numKeys == 40 || numKeys == 45 || numKeys == 50) {
    $("html, body").animate({ scrollLeft: "+=1000px" });
  }

 if (numKeys == 1) {
    $(".noteline, .notecircle").show();
  }

  // if (numKeys == 2) {
  //   $(".note2, .note2-2, .note2-3, .note2-4, .note2-5, .note2-6, .note2-7, .note2-8, .note2-9, .note2-10").show();
  // }

 if (numKeys == 2) {
      
            // $(".notes2").show(note[Math.floor(Math.random()*note.length)]);
   
   $(".notes2").show();
// $(".note-2").show().eq(random).hide();

   
  }

  if (numKeys == 3) {
    $(".note3").show();
  } 
  if (numKeys == 4) {
    $(".note4").show();
  } 
  if (numKeys == 5) {
    $(".note5").show();
  } 
  if (numKeys == 6) {
    $(".note6").show();
  } 
  if (numKeys == 7) {
    $(".note7").show();
  }
  if (numKeys == 8) {
    $(".note8").show();
  }
  if (numKeys == 9) {
    $(".note9").show();
  }
  if (numKeys == 10) {
    $(".note10").show();
  }
  if (numKeys == 11) {
    $(".note11").show();
  }
  if (numKeys == 12) {
    $(".note12").show();
  }
  if (numKeys == 13) {
    $(".note13").show();
  }
  if (numKeys == 14) {
    $(".note14").show();
  }
  if (numKeys == 15) {
    $(".note15").show();
  }
if (numKeys == 16) {
    $(".note16").show();
  }
if (numKeys == 17) {
    $(".note17").show();
  }
if (numKeys == 18) {
    $(".note18").show();
  };



 	  if(event.which == 49 || event.which == 50 || event.which == 51 || event.which == 52 || event.which == 53 || event.which == 54 || event.which == 55 || event.which == 56 
      || event.which == 57 || event.which == 48 || event.which == 97 || event.which == 98 || event.which == 99 || event.which == 100 || event.which == 102 || event.which == 101 || event.which == 103 || event.which == 104 
      || event.which == 105 || event.which == 106 || event.which == 107 || event.which == 108 || event.which == 109 || event.which == 110 || event.which == 111 || event.which == 112 || event.which == 113
      || event.which == 114 || event.which == 115 || event.which == 116 || event.which == 117 || event.which == 118 || event.which == 119 || event.which == 120 || event.which == 121 || event.which == 122) {
  		$(".horiz-line1, .horiz-line2, .horiz-line3, .horiz-line4, .horiz-line5, .vert-line").css("background-color","white");
  		$("body").css("background-color","black");
  		$(".noteline, .notecircle").css("background-color","white");
  		$(".treble").hide();
  		$(".whitetreble").show();
  		// $(".notes").show();

var chosenword = words[Math.floor(Math.random()*words.length)];
		$(".wordscontainer").append(chosenword),
		$(".wordscontainer").append("<div class='word'></div>");
 wordstring = wordstring + chosenword +  " ";
    }


  if(event.which == 49) {
  		var myAudio = document.getElementById("note-1"); 
		myAudio.play();

    }

    if(event.which == 50) {
  		var myAudio = document.getElementById("note-2"); 
		myAudio.play();
    }

    if(event.which == 51) {
  		var myAudio = document.getElementById("note-3"); 
		myAudio.play();
    }

    if(event.which == 52) {
  		var myAudio = document.getElementById("note-4"); 
		myAudio.play();
    }

    if(event.which == 53) {
  		var myAudio = document.getElementById("note-5"); 
		myAudio.play();
    }

    if(event.which == 54) {
  		var myAudio = document.getElementById("note-6"); 
		myAudio.play();
    }

    if(event.which == 55) {
  		var myAudio = document.getElementById("note-7"); 
		myAudio.play();
    }

    if(event.which == 56) {
  		var myAudio = document.getElementById("note-8"); 
		myAudio.play();
    }

    if(event.which == 57) {
  		var myAudio = document.getElementById("note-9"); 
		myAudio.play();
    }

    if(event.which == 48) {
  		var myAudio = document.getElementById("note-10"); 
		myAudio.play();
    }

    if(event.which == 113) {
      var myAudio = document.getElementById("note-11"); 
    myAudio.play();
    }

  if(event.which == 119) {
      var myAudio = document.getElementById("note-12"); 
    myAudio.play();
    }

  if(event.which == 101) {
      var myAudio = document.getElementById("note-13"); 
    myAudio.play();
    }

  if(event.which == 114) {
      var myAudio = document.getElementById("note-14"); 
    myAudio.play();cf
    }

 if(event.which == 116) {
      var myAudio = document.getElementById("note-15"); 
    myAudio.play();
    }

 if(event.which == 121) {
      var myAudio = document.getElementById("note-16"); 
    myAudio.play();
    }

 if(event.which == 117) {
      var myAudio = document.getElementById("note-17"); 
    myAudio.play();
    }

 if(event.which == 105) {
      var myAudio = document.getElementById("note-18"); 
    myAudio.play();
    }

 if(event.which == 111) {
      var myAudio = document.getElementById("note-19"); 
    myAudio.play();
    }
 if(event.which == 112) {
      var myAudio = document.getElementById("note-20"); 
    myAudio.play();
    }
 if(event.which == 97) {
      var myAudio = document.getElementById("note-21"); 
    myAudio.play();
    }
 if(event.which == 115) {
      var myAudio = document.getElementById("note-22"); 
    myAudio.play();
    }
 if(event.which == 100) {
      var myAudio = document.getElementById("note-23"); 
    myAudio.play();
    }
 if(event.which == 102) {
      var myAudio = document.getElementById("note-24"); 
    myAudio.play();
    }
 if(event.which == 103) {
      var myAudio = document.getElementById("note-25"); 
    myAudio.play();
    }
 if(event.which == 104) {
      var myAudio = document.getElementById("note-26"); 
    myAudio.play();
    }
 if(event.which == 106) {
      var myAudio = document.getElementById("note-27"); 
    myAudio.play();
    }
 if(event.which == 107) {
      var myAudio = document.getElementById("note-28"); 
    myAudio.play();
    }
 if(event.which == 108) {
      var myAudio = document.getElementById("note-29"); 
    myAudio.play();
    }
 if(event.which == 122) {
      var myAudio = document.getElementById("note-30"); 
    myAudio.play();
    }
if(event.which == 120) {
      var myAudio = document.getElementById("note-31"); 
    myAudio.play();
    }
if(event.which == 99) {
      var myAudio = document.getElementById("note-32"); 
    myAudio.play();
    }
if(event.which == 118) {
      var myAudio = document.getElementById("note-33"); 
    myAudio.play();
    }
if(event.which == 98) {
      var myAudio = document.getElementById("note-34"); 
    myAudio.play();
    }
if(event.which == 110) {
      var myAudio = document.getElementById("note-35"); 
    myAudio.play();
    }
if(event.which == 109) {
  		var myAudio = document.getElementById("note-36"); 
		myAudio.play();
    }l

    


 });






//  $(window).keypress(function(event) {


//  	  if(event.which == 49 || event.which == 50 || event.which == 51 || event.which == 52 || event.which == 53 || event.which == 54 || event.which == 55) {
//  	  	var words = new Array("the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "words", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "called", "who", "oil", "sit", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "over", "new", "sound", "take", "only", "little", "work", "know", "place", "years", "live", "me", "back", "give", "most", "very", "after", "things", "our", "just", "name", "good", "sentence", "man", "think", "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "does", "another", "well", "large", "must", "big", "even", "such", "because", "turn", "here", "why", "ask", "went", "men", "read", "need", "land", "different", "home", "us", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don’t", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "late", "miss", "idea", "enough", "eat", "face", "watch", "far", "Indian", "real", "almost", "let", "above", "girl", "sometimes", "mountains", "cut", "young", "talk", "soon", "list", "song", "being", "leave", "family", "it’s", "body", "music", "color", "stand", "sun", "questions", "fish", "area", "mark", "dog", "horse", "birds", "problem", "complete", "room", "knew", "since", "ever", "piece", "told", "usually", "didn’t", "friends", "easy", "heard", "order", "red", "door", "sure", "become", "top", "ship", "across", "today", "during", "short", "better", "best", "however", "low", "hours", "black", "products", "happened", "whole", "measure", "remember", "early", "waves", "reached", "listen", "wind", "rock", "space", "covered", "fast", "several", "hold", "himself", "toward", "five", "step", "morning", "passed", "vowel", "true", "hundred", "against", "pattern", "numeral", "table", "north", "slowly", "money", "map", "farm", "pulled", "draw", "voice", "seen", "cold", "cried", "plan", "notice", "south", "sing", "war", "ground", "fall", "king", "town", "I’ll", "unit", "figure", "certain", "field", "travel", "wood", "fire", "upon", "done", "English", "road", "half", "ten", "fly", "gave", "box", "finally", "wait", "correct", "oh", "quickly", "person", "became", "shown", "minutes", "strong", "verb", "stars", "front", "feel", "fact", "inches", "street", "decided", "contain", "course", "surface", "produce", "building", "ocean", "class", "note", "nothing", "rest", "carefully", "scientists", "inside", "wheels", "stay", "green", "known", "island", "week", "less", "machine", "base", "ago", "stood", "plane", "system", "behind", "ran", "round", "boat", "game", "force", "brought", "understand", "warm", "common", "bring", "explain", "dry", "though", "language", "shape", "deep", "thousands", "yes", "clear", "equation", "yet", "government", "filled", "heat", "full", "hot", "check", "object", "am", "rule", "among", "noun", "power", "cannot", "able", "six", "size", "dark", "ball", "material", "special", "heavy", "fine", "pair", "circle", "include", "built", "can’t", "matter", "square", "syllables", "perhaps", "bill", "felt", "suddenly", "test", "direction", "center", "farmers", "ready", "anything", "divided", "general", "energy", "subject", "Europe", "moon", "region", "return", "believe", "dance", "members", "picked", "simple", "cells", "paint", "mind", "love", "cause", "rain", "exercise", "eggs", "train", "blue", "wish", "drop", "developed", "window", "difference", "distance", "heart", "site", "sum", "summer", "wall", "forest", "probably", "legs", "sat", "main", "winter", "wide", "written", "length", "reason", "kept", "interest", "arms", "brother", "race", "present", "beautiful", "store", "job", "edge", "past", "sign", "record", "finished", "discovered", "wild", "happy", "beside", "gone", "sky", "grass", "million", "west", "lay", "weather", "root", "instruments", "meet", "third", "months", "paragraph", "raised", "represent", "soft", "whether", "clothes", "flowers", "shall", "teacher", "held", "describe", "drive", "cross", "speak", "solve", "appear", "metal", "son", "either", "ice", "sleep", "village", "factors", "result", "jumped", "snow", "ride", "care", "floor", "hill", "pushed", "baby", "buy", "century", "outside", "everything", "tall", "already", "instead", "phrase", "soil", "bed", "copy", "free", "hope", "spring", "case", "laughed", "nation", "quite", "type", "themselves", "temperature", "bright", "lead", "everyone", "method", "section", "lake", "iron", "within", "dictionary", "hair", "age", "amount", "scale", "pounds", "although", "per", "broken", "moment", "tiny", "possible", "gold", "milk", "quiet", "natural", "lot", "stone", "act", "build", "middle", "speed", "count", "consonant", "someone", "sail", "rolled", "bear", "wonder", "smiled", "angle", "fraction", "Africa", "killed", "melody", "bottom", "trip", "hole", "poor", "let’s", "fight", "surprise", "French", "died", "beat", "exactly", "remain", "dress", "cat", "couldn’t", "fingers", "row", "least", "catch", "climbed", "wrote", "shouted", "continued", "itself", "else", "plains", "gas", "England", "burning", "design", "joined", "foot", "law", "ears", "glass", "you’re", "grew", "skin", "valley", "cents", "key", "president", "brown", "trouble", "cool", "cloud", "lost", "sent", "symbols", "wear", "bad", "save", "experiment", "engine", "alone", "drawing", "east", "choose", "single", "touch", "information", "express", "mouth", "yard", "equal", "decimal", "yourself", "control", "practice", "report", "straight", "rise", "statement", "stick", "party", "seeds", "suppose", "woman", "coast", "bank", "period", "wire", "pay", "clean", "visit", "bit", "whose", "received", "garden", "please", "strange", "caught", "fell", "team", "God", "captain", "direct", "ring", "serve", "child", "desert", "increase", "history", "cost", "maybe", "business", "separate", "break", "uncle", "hunting", "flow", "lady", "students", "human", "art", "feeling", "supply", "corner", "electric", "insects", "crops", "tone", "hit", "sand", "doctor", "provide", "thus", "won’t", "cook", "bones", "mall", "board", "modern", "compound", "mine", "wasn’t", "fit", "addition", "belong", "safe", "soldiers", "guess", "silent", "trade", "rather", "compare", "crowd", "poem", "enjoy", "elements", "indicate", "except", "expect", "flat", "seven", "interesting", "sense", "string", "blow", "famous", "value", "wings", "movement", "pole", "exciting", "branches", "thick", "blood", "lie", "spot", "bell", "fun", "loud", "consider", "suggested", "thin", "position", "entered", "fruit", "tied", "rich", "dollars", "send", "sight", "chief", "Japanese", "stream", "planets", "rhythm", "eight", "science", "major", "observe", "tube", "necessary", "weight", "meat", "lifted", "process", "army", "hat", "property", "particular", "swim", "terms", "current", "park", "sell", "shoulder", "industry", "wash", "block", "spread", "cattle", "wife", "sharp", "company", "radio", "we’ll", "action", "capital", "factories", "settled", "yellow", "isn’t", "southern", "truck", "fair", "printed", "wouldn’t", "ahead", "chance", "born", "level", "triangle", "molecules", "France", "repeated", "column", "western", "church", "sister", "oxygen", "plural", "various", "agreed", "opposite", "wrong", "chart", "prepared", "pretty", "solution", "fresh", "shop", "suffix", "especially", "shoes", "actually", "nose", "afraid", "dead", "sugar", "adjective", "fig", "office", "huge", "gun", "similar", "death", "score", "forward", "stretched", "experience", "rose", "allow", "fear", "workers", "Washington", "Greek", "women", "bought", "led", "march", "northern", "create", "British", "difficult", "match", "win", "doesn’t", "steel", "total", "deal", "determine", "evening", "hoe", "rope", "cotton", "apple", "details", "entire", "corn", "substances", "smell", "tools", "conditions", "cows", "track", "arrived", "located", "sir", "seat", "division", "effect", "underline", "view");

// $(".wordscontainer").html(words[Math.floor(Math.random()*words.length)]);
// $(".wordscontainer").append("");


//  	  }

//  	 });