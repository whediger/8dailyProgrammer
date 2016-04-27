function alindromeCheck(stringIn){

  stringIn = stringIn.trim();
  stringIn = stringIn.toLowerCase();
  stringIn = stringIn.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  stringIn = stringIn.replace(/\s/g,'');

  for (i = 0; i < stringIn.length; i++ ) {
    var answer = null;
    //console.log(stringIn[i]);
    //console.log(stringIn[(stringIn.length - 1) - i]);
    if ( stringIn[i] !== stringIn[((stringIn.length-1) - i)] ) {
      return false;
    } else {
      answer = true;
    }
  }
  return answer;
}

console.log(alindromeCheck("wevdvvew"));
