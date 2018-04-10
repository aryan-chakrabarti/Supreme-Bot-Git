function keywordMaker(words) {
key="";
arrayWord=[];
for each(letter in words){
  if (letter===",") {
    arrayWord.push(key);
    key="";
  }
  else{
    key+=letter;
  }
}
  return arrayWord;
}
