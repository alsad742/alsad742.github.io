var audio = document.getElementById("pianokeys");
audio.volume = 0.1;

 $(window).scroll(function() {
    if ($(window).scrollLeft() > 1000) {
        $(".fine").fadeIn(500);
    }
});

 $(".fine").click( function() {
    var pitch = Math.floor(Math.random() * 2);
    // var rate = Math.floor(Math.random() * 1.5);
    responsiveVoice.speak(wordstring, "UK English Male", { pitch: pitch, rate: 0.9 });
   $('body').scrollLeft(0);
   // $("body").animate({scrollLeft: 0} 100); {
   // }
   // $(".textbox, .textboxbg").fadeIn();
   $(".horiz-line1, .horiz-line2, .horiz-line3, .horiz-line4, .horiz-line5, .vert-line, .whitetreble, .note, .fine").css('visibility', 'hidden');
   $(".wordscontainer").css({ "font-size": "150%", "margin-top": "-300px", "margin-left": "350px", "width": "500px"})
   $(".word").css({ "margin-right": "5px"})
 });


  var wordstring = "";
  var singleword = "";


$(".horiz-lines, .notes").click(function(){
  
  $(".horiz-line1, .horiz-line2, .horiz-line3, .horiz-line4, .horiz-line5, .vert-line").css("background-color","white");

  $("body").css("background-color","black");
  $(".noteline, .notecircle").css("background-color","white");
 	
  $(".treble").hide();
  $(".whitetreble").show();

  });



var numKeys = 0; 
var words = new Array("the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "words", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "called", "who", "oil", "sit", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "over", "new", "sound", "take", "only", "little", "work", "know", "place", "years", "live", "me", "back", "give", "most", "very", "after", "things", "our", "just", "name", "good", "sentence", "man", "think", "say", "great", "where", "help", "through", "much", "before", "line", "right", "too", "means", "old", "any", "same", "tell", "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small", "set", "put", "end", "does", "another", "well", "large", "must", "big", "even", "such", "because", "turn", "here", "why", "ask", "went", "men", "read", "need", "land", "different", "home", "us", "move", "try", "kind", "hand", "picture", "again", "change", "off", "play", "spell", "air", "away", "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still", "learn", "should", "America", "world", "high", "every", "near", "add", "food", "between", "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never", "start", "city", "earth", "eyes", "light", "thought", "head", "under", "story", "saw", "left", "don’t", "few", "while", "along", "might", "close", "something", "seem", "next", "hard", "open", "example", "begin", "life", "always", "those", "both", "paper", "together", "got", "group", "often", "run", "important", "until", "children", "side", "feet", "car", "mile", "night", "walk", "white", "sea", "began", "grow", "took", "river", "four", "carry", "state", "once", "book", "hear", "stop", "without", "second", "late", "miss", "idea", "enough", "eat", "face", "watch", "far", "Indian", "real", "almost", "let", "above", "girl", "sometimes", "mountains", "cut", "young", "talk", "soon", "list", "song", "being", "leave", "family", "it’s", "body", "music", "color", "stand", "sun", "questions", "fish", "area", "mark", "dog", "horse", "birds", "problem", "complete", "room", "knew", "since", "ever", "piece", "told", "usually", "didn’t", "friends", "easy", "heard", "order", "red", "door", "sure", "become", "top", "ship", "across", "today", "during", "short", "better", "best", "however", "low", "hours", "black", "products", "happened", "whole", "measure", "remember", "early", "waves", "reached", "listen", "wind", "rock", "space", "covered", "fast", "several", "hold", "himself", "toward", "five", "step", "morning", "passed", "vowel", "true", "hundred", "against", "pattern", "numeral", "table", "north", "slowly", "money", "map", "farm", "pulled", "draw", "voice", "seen", "cold", "cried", "plan", "notice", "south", "sing", "war", "ground", "fall", "king", "town", "I’ll", "unit", "figure", "certain", "field", "travel", "wood", "fire", "upon", "done", "English", "road", "half", "ten", "fly", "gave", "box", "finally", "wait", "correct", "oh", "quickly", "person", "became", "shown", "minutes", "strong", "verb", "stars", "front", "feel", "fact", "inches", "street", "decided", "contain", "course", "surface", "produce", "building", "ocean", "class", "note", "nothing", "rest", "carefully", "scientists", "inside", "wheels", "stay", "green", "known", "island", "week", "less", "machine", "base", "ago", "stood", "plane", "system", "behind", "ran", "round", "boat", "game", "force", "brought", "understand", "warm", "common", "bring", "explain", "dry", "though", "language", "shape", "deep", "thousands", "yes", "clear", "equation", "yet", "government", "filled", "heat", "full", "hot", "check", "object", "am", "rule", "among", "noun", "power", "cannot", "able", "six", "size", "dark", "ball", "material", "special", "heavy", "fine", "pair", "circle", "include", "built", "can’t", "matter", "square", "syllables", "perhaps", "bill", "felt", "suddenly", "test", "direction", "center", "farmers", "ready", "anything", "divided", "general", "energy", "subject", "Europe", "moon", "region", "return", "believe", "dance", "members", "picked", "simple", "cells", "paint", "mind", "love", "cause", "rain", "exercise", "eggs", "train", "blue", "wish", "drop", "developed", "window", "difference", "distance", "heart", "site", "sum", "summer", "wall", "forest", "probably", "legs", "sat", "main", "winter", "wide", "written", "length", "reason", "kept", "interest", "arms", "brother", "race", "present", "beautiful", "store", "job", "edge", "past", "sign", "record", "finished", "discovered", "wild", "happy", "beside", "gone", "sky", "grass", "million", "west", "lay", "weather", "root", "instruments", "meet", "third", "months", "paragraph", "raised", "represent", "soft", "whether", "clothes", "flowers", "shall", "teacher", "held", "describe", "drive", "cross", "speak", "solve", "appear", "metal", "son", "either", "ice", "sleep", "village", "factors", "result", "jumped", "snow", "ride", "care", "floor", "hill", "pushed", "baby", "buy", "century", "outside", "everything", "tall", "already", "instead", "phrase", "soil", "bed", "copy", "free", "hope", "spring", "case", "laughed", "nation", "quite", "type", "themselves", "temperature", "bright", "lead", "everyone", "method", "section", "lake", "iron", "within", "dictionary", "hair", "age", "amount", "scale", "pounds", "although", "per", "broken", "moment", "tiny", "possible", "gold", "milk", "quiet", "natural", "lot", "stone", "act", "build", "middle", "speed", "count", "consonant", "someone", "sail", "rolled", "bear", "wonder", "smiled", "angle", "fraction", "Africa", "killed", "melody", "bottom", "trip", "hole", "poor", "let’s", "fight", "surprise", "French", "died", "beat", "exactly", "remain", "dress", "cat", "couldn’t", "fingers", "row", "least", "catch", "climbed", "wrote", "shouted", "continued", "itself", "else", "plains", "gas", "England", "burning", "design", "joined", "foot", "law", "ears", "glass", "you’re", "grew", "skin", "valley", "cents", "key", "president", "brown", "trouble", "cool", "cloud", "lost", "sent", "symbols", "wear", "bad", "save", "experiment", "engine", "alone", "drawing", "east", "choose", "single", "touch", "information", "express", "mouth", "yard", "equal", "decimal", "yourself", "control", "practice", "report", "straight", "rise", "statement", "stick", "party", "seeds", "suppose", "woman", "coast", "bank", "period", "wire", "pay", "clean", "visit", "bit", "whose", "received", "garden", "please", "strange", "caught", "fell", "team", "God", "captain", "direct", "ring", "serve", "child", "desert", "increase", "history", "cost", "maybe", "business", "separate", "break", "uncle", "hunting", "flow", "lady", "students", "human", "art", "feeling", "supply", "corner", "electric", "insects", "crops", "tone", "hit", "sand", "doctor", "provide", "thus", "won’t", "cook", "bones", "mall", "board", "modern", "compound", "mine", "wasn’t", "fit", "addition", "belong", "safe", "soldiers", "guess", "silent", "trade", "rather", "compare", "crowd", "poem", "enjoy", "elements", "indicate", "except", "expect", "flat", "seven", "interesting", "sense", "string", "blow", "famous", "value", "wings", "movement", "pole", "exciting", "branches", "thick", "blood", "lie", "spot", "bell", "fun", "loud", "consider", "suggested", "thin", "position", "entered", "fruit", "tied", "rich", "dollars", "send", "sight", "chief", "Japanese", "stream", "planets", "rhythm", "eight", "science", "major", "observe", "tube", "necessary", "weight", "meat", "lifted", "process", "army", "hat", "property", "particular", "swim", "terms", "current", "park", "sell", "shoulder", "industry", "wash", "block", "spread", "cattle", "wife", "sharp", "company", "radio", "we’ll", "action", "capital", "factories", "settled", "yellow", "isn’t", "southern", "truck", "fair", "printed", "wouldn’t", "ahead", "chance", "born", "level", "triangle", "molecules", "France", "repeated", "column", "western", "church", "sister", "oxygen", "plural", "various", "agreed", "opposite", "wrong", "chart", "prepared", "pretty", "solution", "fresh", "shop", "suffix", "especially", "shoes", "actually", "nose", "afraid", "dead", "sugar", "adjective", "fig", "office", "huge", "gun", "similar", "death", "score", "forward", "stretched", "experience", "rose", "allow", "fear", "workers", "Washington", "Greek", "women", "bought", "led", "march", "northern", "create", "British", "difficult", "match", "win", "doesn’t", "steel", "total", "deal", "determine", "evening", "hoe", "rope", "cotton", "apple", "details", "entire", "corn", "substances", "smell", "tools", "conditions", "cows", "track", "arrived", "located", "sir", "seat", "division", "effect", "underline", "view");
var notes1 = ['<div class="note note1"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note1-2"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note1-3"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note1-4"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note1-5"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes2 = ['<div class="note note2 notes2"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note2-2 notes2"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note2-3 notes2"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note2-4 notes2"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note2-5 notes2"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes3 = ['<div class="note note3 notes3"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note3-2 notes3"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note3-3 notes3"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note3-4 notes3"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note3-5 notes3"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes4 = ['<div class="note note4 notes4"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note4-2 notes4"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note4-3 notes4"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note4-4 notes4"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note4-5 notes4"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes5 = ['<div class="note note5 notes5"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note5-2 notes5"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note5-3 notes5"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note5-4 notes5"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note5-5 notes5"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes6 = ['<div class="note note6 notes6"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note6-2 notes6"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note6-3 notes6"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note6-4 notes6"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note6-5 notes6"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes7 = ['<div class="note note7 notes7"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note7-2 notes7"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note7-3 notes7"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note7-4 notes7"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note7-5 notes7"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes8 = ['<div class="note note8 notes8"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note8-2 notes8"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note8-3 notes8"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note8-4 notes8"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note8-5 notes8"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes9 = ['<div class="note note9 notes9"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note9-2 notes9"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note9-3 notes9"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note9-4 notes9"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note9-5 notes9"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes10 = ['<div class="note note10 notes10"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note10-2 notes10"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note10-3 notes10"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note10-4 notes10"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note10-5 notes10"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes11 = ['<div class="note note11 notes11"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note11-2 notes11"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note11-3 notes11"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note11-4 notes11"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note11-5 notes11"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes12 = ['<div class="note note12 notes12"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note12-2 notes12"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note12-3 notes12"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note12-4 notes12"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note12-5 notes12"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes13 = ['<div class="note note13 notes13"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note13-2 notes13"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note13-3 notes13"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note13-4 notes13"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note13-5 notes13"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes14 = ['<div class="note note14 notes14"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note14-2 notes14"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note14-3 notes14"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note14-4 notes14"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note14-5 notes14"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes15 = ['<div class="note note15 notes15"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note15-2 notes15"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note15-3 notes15"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note15-4 notes15"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note15-5 notes15"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes16 = ['<div class="note note16 notes16"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note16-2 notes16"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note16-3 notes16"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note16-4 notes16"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note16-5 notes16"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes17 = ['<div class="note note17 notes17"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note17-2 notes17"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note17-3 notes17"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note17-4 notes17"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note17-5 notes17"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes18 = ['<div class="note note18 notes18"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note18-2 notes18"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note18-3 notes18"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note18-4 notes18"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note18-5 notes18"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes19 = ['<div class="note note19 notes19"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note19-2 notes19"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note19-3 notes19"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note19-4 notes19"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note19-5 notes19"><img src="assets/img/note.png" style="height:160px";/></div>'];

var notes20 = ['<div class="note note20 notes20"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note20-2 notes20"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note20-3 notes20"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note20-4 notes20"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note20-5 notes20"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes21 = ['<div class="note note21 notes21"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note21-2 notes21"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note21-3 notes21"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note21-4 notes21"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note21-5 notes21"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes22 = ['<div class="note note22 notes22"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note22-2 notes22"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note22-3 notes22"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note22-4 notes22"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note22-5 notes22"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes23 = ['<div class="note note23 notes23"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note23-2 notes23"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note23-3 notes23"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note23-4 notes23"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note23-5 notes23"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes24 = ['<div class="note note24 notes24"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note24-2 notes24"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note24-3 notes24"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note24-4 notes24"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note24-5 notes24"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes25 = ['<div class="note note25 notes25"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note25-2 notes25"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note25-3 notes25"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note25-4 notes25"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note25-5 notes25"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes26 = ['<div class="note note26 notes26"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note26-2 notes26"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note26-3 notes26"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note26-4 notes26"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note26-5 notes26"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes27 = ['<div class="note note27 notes27"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note27-2 notes27"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note27-3 notes27"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note27-4 notes27"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note27-5 notes27"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes28 = ['<div class="note note28 notes28"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note28-2 notes28"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note28-3 notes28"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note28-4 notes28"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note28-5 notes28"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes29 = ['<div class="note note29 notes29"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note29-2 notes29"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note29-3 notes29"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note29-4 notes29"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note29-5 notes29"><img src="assets/img/note.png" style="height:160px";/></div>'];
var notes30 = ['<div class="note note30 notes30"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note30-2 notes30"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note30-3 notes30"><img src="assets/img/note.png" style="height:160px";/></div>',
    '<div class="note note30-4 notes30"><img src="assets/img/note.png" style="height:160px";/></div>', 
    '<div class="note note30-5 notes30"><img src="assets/img/note.png" style="height:160px";/></div>'];


 $(window).keypress(function(event) { 
   

  numKeys++;
  if (numKeys == 5 || numKeys == 10 || numKeys == 15 || numKeys == 20 || numKeys == 25 || numKeys == 30 || numKeys == 35 || numKeys == 40 || numKeys == 45 || numKeys == 50) {
    $("html, body").animate({ scrollLeft: "+=1000px" });
  }
 if (numKeys == 1) {
      $(".notewrapper").append(notes1[Math.floor(Math.random()*notes1.length)]);
  }
 if (numKeys == 2) {   
      $(".notewrapper").append(notes2[Math.floor(Math.random()*notes2.length)]);
  }
  if (numKeys == 3) {
    $(".notewrapper").append(notes3[Math.floor(Math.random()*notes3.length)]);
  } 
  if (numKeys == 4) {
    $(".notewrapper").append(notes4[Math.floor(Math.random()*notes4.length)]);
  } 
  if (numKeys == 5) {
    $(".notewrapper").append(notes5[Math.floor(Math.random()*notes5.length)]);
  } 
  if (numKeys == 6) {
    $(".notewrapper").append(notes6[Math.floor(Math.random()*notes6.length)]);
  } 
  if (numKeys == 7) {
    $(".notewrapper").append(notes7[Math.floor(Math.random()*notes7.length)]);
  }
  if (numKeys == 8) {
    $(".notewrapper").append(notes8[Math.floor(Math.random()*notes8.length)]);
  }
  if (numKeys == 9) {
    $(".notewrapper").append(notes9[Math.floor(Math.random()*notes9.length)]);
  }
  if (numKeys == 10) {
    $(".notewrapper").append(notes10[Math.floor(Math.random()*notes10.length)]);
  }
  if (numKeys == 11) {
    $(".notewrapper").append(notes11[Math.floor(Math.random()*notes11.length)]);
  }
  if (numKeys == 12) {
    $(".notewrapper").append(notes12[Math.floor(Math.random()*notes12.length)]);
  }
  if (numKeys == 13) {
    $(".notewrapper").append(notes13[Math.floor(Math.random()*notes13.length)]);
  }
  if (numKeys == 14) {
    $(".notewrapper").append(notes14[Math.floor(Math.random()*notes14.length)]);
  }
  if (numKeys == 15) {
    $(".notewrapper").append(notes15[Math.floor(Math.random()*notes15.length)]);
  }
if (numKeys == 16) {
    $(".notewrapper").append(notes16[Math.floor(Math.random()*notes16.length)]);
  }
if (numKeys == 17) {
    $(".notewrapper").append(notes17[Math.floor(Math.random()*notes17.length)]);
  }
if (numKeys == 18) {
    $(".notewrapper").append(notes18[Math.floor(Math.random()*notes18.length)]);
  };
if (numKeys == 19) {
    $(".notewrapper").append(notes19[Math.floor(Math.random()*notes19.length)]);
  };
if (numKeys == 20) {
    $(".notewrapper").append(notes20[Math.floor(Math.random()*notes20.length)]);
  };
if (numKeys == 21) {
    $(".notewrapper").append(notes21[Math.floor(Math.random()*notes21.length)]);
  };
if (numKeys == 22) {
    $(".notewrapper").append(notes22[Math.floor(Math.random()*notes22.length)]);
  };
if (numKeys == 23) {
    $(".notewrapper").append(notes23[Math.floor(Math.random()*notes23.length)]);
  };
if (numKeys == 24) {
    $(".notewrapper").append(notes24[Math.floor(Math.random()*notes24.length)]);
  };
if (numKeys == 25) {
    $(".notewrapper").append(notes25[Math.floor(Math.random()*notes25.length)]);
  };
if (numKeys == 26) {
    $(".notewrapper").append(notes26[Math.floor(Math.random()*notes26.length)]);
  };
if (numKeys == 27) {
    $(".notewrapper").append(notes27[Math.floor(Math.random()*notes27.length)]);
  };
if (numKeys == 28) {
    $(".notewrapper").append(notes28[Math.floor(Math.random()*notes28.length)]);
  };
if (numKeys == 29) {
    $(".notewrapper").append(notes29[Math.floor(Math.random()*notes29.length)]);
  };
if (numKeys == 30) {
    $(".notewrapper").append(notes30[Math.floor(Math.random()*notes30.length)]);
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
 wordstring = wordstring + chosenword + " ";

  var onechosenword = words[Math.floor(Math.random()*words.length[1])];
        $(".wordscontainer").append(onechosenword),
        $(".wordscontainer").append("<div class='word'></div>");
    singleword = chosenword;

}




  if(event.which == 49) {
      var myAudio = document.getElementById("note-1"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 50) {
      var myAudio = document.getElementById("note-2"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 51) {
      var myAudio = document.getElementById("note-3"); 
      myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 52) {
      var myAudio = document.getElementById("note-4"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 53) {
      var myAudio = document.getElementById("note-5"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});

    }

    if(event.which == 54) {
      var myAudio = document.getElementById("note-6"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});

    }

    if(event.which == 55) {
      var myAudio = document.getElementById("note-7"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 56) {
      var myAudio = document.getElementById("note-8"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 57) {
      var myAudio = document.getElementById("note-9"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 48) {
      var myAudio = document.getElementById("note-10"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 2});
    }

    if(event.which == 113) {
      var myAudio = document.getElementById("note-11"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

  if(event.which == 119) {
      var myAudio = document.getElementById("note-12"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

  if(event.which == 101) {
      var myAudio = document.getElementById("note-13"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

  if(event.which == 114) {
      var myAudio = document.getElementById("note-14"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

 if(event.which == 116) {
      var myAudio = document.getElementById("note-15"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

 if(event.which == 121) {
      var myAudio = document.getElementById("note-16"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

 if(event.which == 117) {
      var myAudio = document.getElementById("note-17"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

 if(event.which == 105) {
      var myAudio = document.getElementById("note-18"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }

 if(event.which == 111) {
      var myAudio = document.getElementById("note-19"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }
 if(event.which == 112) {
      var myAudio = document.getElementById("note-20"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.8});
    }
 if(event.which == 97) {
      var myAudio = document.getElementById("note-21"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 115) {
      var myAudio = document.getElementById("note-22"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 100) {
      var myAudio = document.getElementById("note-23"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 102) {
      var myAudio = document.getElementById("note-24"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 103) {
      var myAudio = document.getElementById("note-25"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 104) {
      var myAudio = document.getElementById("note-26"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 106) {
      var myAudio = document.getElementById("note-27"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 107) {
      var myAudio = document.getElementById("note-28"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 108) {
      var myAudio = document.getElementById("note-29"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male", {pitch: 1.4});
    }
 if(event.which == 122) {
      var myAudio = document.getElementById("note-30"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }
if(event.which == 120) {
      var myAudio = document.getElementById("note-31"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }
if(event.which == 99) {
      var myAudio = document.getElementById("note-32"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }
if(event.which == 118) {
      var myAudio = document.getElementById("note-33"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }
if(event.which == 98) {
      var myAudio = document.getElementById("note-34"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }
if(event.which == 110) {
      var myAudio = document.getElementById("note-35"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }
if(event.which == 109) {
      var myAudio = document.getElementById("note-36"); 
    myAudio.play();
    responsiveVoice.speak(singleword, "UK English Male");
    }



 });




$(document).ready(function(){

    responsiveVoice.cancel();

    $('html, body').scrollLeft(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollLeft(0);
    }, 0);

    
 });


});





  // $(".horiz-lines").mouseover(function(){
 //     $(".notes").show()});
 //   $(".horiz-lines").mouseout(function(){
  //  $(".notes").hide();
  // });

