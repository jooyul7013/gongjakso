function isConsonant(char){
  for(var i =0; i<consonantArray.length; i++)
  {
    if(char === consonantArray[i])
      return true;
  }
  return false;
}

function isVowel(char){
  for(var i =0; i<vowelArray.length; i++)
  {
    if(char === vowelArray[i])
      return true;
  }
  return false;
}

function findComponants(character){
  var componants = [];
  var consonant='';
  var vowel='';
  var finalConsonant='';

  var lastVowelIndex=100;  //모음의 마지막 인덱스
  for(var i =0; i<character.length; i++)
  {
    if(isConsonant(character.charAt(i)))
    {
      if (i<lastVowelIndex)
        consonant += character.charAt(i);
      else
        finalConsonant += character.charAt(i);
    }
    else if(isVowel(character.charAt(i))){
      vowel += character.charAt(i);
      lastVowelIndex =i;
    }

  }

  if(consonant.length > 0)
    componants.push(consonant);
  else
    componants.push(null);

  if(vowel.length > 0)
    componants.push(vowel);
  else
    componants.push(null);

  if(finalConsonant.length > 0)
    componants.push(finalConsonant);
  else
    componants.push(null);

  return componants;

}

function Character(char,setting) {

    var componants = findComponants(korTypeToEng(char));
    var consonant = componants[0];
    var vowel = componants[1];
    var finalConsonant = componants[2];

    this.str = char;

    this.currentSlant = 50;
    this.length = 50;


    // 쌍자음 처리과정
    if (consonant)
        consonant = consonant.replace('R', 'rr').replace('W', 'ww').replace('E', 'ee').replace('Q', 'qq').replace('T', 'tt');

    if (finalConsonant)
        finalConsonant = finalConsonant.replace('R', 'rr').replace('W', 'ww').replace('E', 'ee').replace('Q', 'qq').replace('T', 'tt');

    // 모음 처리과정
    if (vowel)
        vowel = vowel.replace('P', 'ul').replace('O', 'il').replace('o', 'kl').replace('p', 'jl');


  //  console.log('자음: ', consonant);



    if (consonant)
      if(setting == 2){
        var usedLetterIdx = consonantLetterArray[consonant.charAt(0)][consonantLetterArray[consonant.charAt(0)].length-2] -   //사용될 idx 계산
                            (++consonantLetterArray[consonant.charAt(0)][consonantLetterArray[consonant.charAt(0)].length-1]);

        this.consonant = consonantLetterArray[consonant.charAt(0)][usedLetterIdx];
        //console.log("자음:사용된 idx: "+ consonant.charAt(0)+usedLetterIdx);
        if(consonant.length>1) //쌍자음일때 처리
        {
          this.consonant.addNextLetter(consonant.charAt(1));
        }
      }
      else
      {
        this.consonant = new Letter(consonant, 1,setting);
        if(consonant.charAt(0)=='d')
          this.consonant.setFirstX(-14);
        }
    else
        this.consonant = null;

    if (vowel) { // 모음이 있으면
        if(setting == 2){
          var usedLetterIdx = vowelLetterArray[vowel.charAt(0)][vowelLetterArray[vowel.charAt(0)].length-2] -   //사용될 idx 계산
                              (++vowelLetterArray[vowel.charAt(0)][vowelLetterArray[vowel.charAt(0)].length-1]);

          this.vowel = vowelLetterArray[vowel.charAt(0)][usedLetterIdx];
          console.log("모음:사용된 idx: "+ vowel.charAt(0)+usedLetterIdx);

          if(vowel.length>1) //조합모음일때 처리
          {
            this.vowel.addNextLetter(vowel.charAt(1));
            if(vowel.length > 2)
              this.vowel.nextLetter.addNextLetter(vowel.charAt(2));
          }

        }
        else
          this.vowel = new Letter(vowel,2,setting);
        if (consonant)
            if (this.consonant.letterType == 2) { //쌍자음일때 모음의 위치 조정
                this.vowel.setFirstX(200);
            }
    } else
        this.vowel = null;

    if (finalConsonant) { //받침이 있으면
      if(setting == 2){

        // if(finalConsonant.charAt(0)=='f')
        //   console.log("ffff");

        var usedLetterIdx = consonantLetterArray[finalConsonant.charAt(0)][consonantLetterArray[finalConsonant.charAt(0)].length-2] -   //사용될 idx 계산
                            (++consonantLetterArray[finalConsonant.charAt(0)][consonantLetterArray[finalConsonant.charAt(0)].length-1]);


        this.finalConsonant = consonantLetterArray[finalConsonant.charAt(0)][usedLetterIdx];
      //  console.log("받침:사용된 idx: "+ finalConsonant.charAt(0)+usedLetterIdx);
        if(finalConsonant.length > 1) //쌍자음일때 처리
        {
          this.finalConsonant.addNextLetter(finalConsonant.charAt(1));
          this.finalConsonant.nextLetter.letterType = 1;
        }
      }
      else
        this.finalConsonant = new Letter(finalConsonant, 1,setting);


        //받침 위치로 이동
        if (this.finalConsonant.letterType == 1) //단자음
        {
            if ((vowel.charAt(0) == 'h' || vowel.charAt(0) == 'y' ||
                    vowel.charAt(0) == 'm' || vowel.charAt(0) == 'n' || vowel.charAt(0) == 'b') && vowel.length == 1)
                this.finalConsonant.setFirstX(18); //모음이 ㅜ 같이 밑에오는 형식이고 단일모음일 경우 자음이 x축으로 18 이동하므로 받침도 같이 이동 국

            else if ((vowel.search('j') != -1 || vowel.search('k') != -1 || vowel.search('u') != -1 || vowel.search('i') != -1) && vowel.length > 1)
                this.finalConsonant.setFirstX(360); // ㅔ,ㅖ ㅐ,ㅒ 일때 받침의 x위치

            else
                this.finalConsonant.setFirstX(290);
        }


        if (this.finalConsonant.letterType == 2) //받침이 쌍자음
            this.finalConsonant.setFirstX(200);



        this.finalConsonant.setFirstY(570); //받침의 y좌표를 내려줌




        if (this.consonant.letterType == 2)
            this.finalConsonant.setFirstX(200);

        if(finalConsonant.charAt(0)=='d')
          this.finalConsonant.setFirstX(-26);


    }




    this.firstX = 0;
    this.firstY = 0;


    this.returnLetter = function(){

      if(consonant){
        this.consonant.recoverFirstXY();
        this.consonant.returnLetter();
        this.consonant.length = 50;
      }
      if(vowel){
        this.vowel.recoverFirstXY();
        this.vowel.returnLetter();
        this.vowel.length =50;
      }
      if(finalConsonant){

        this.finalConsonant.recoverFirstXY();
        this.finalConsonant.returnLetter();
        this.finalConsonant.length = 50;
      }
    }



    // this.createStr = function() {
    //     var str = '';
    //     if (consonant) {
    //         str = consonant;
    //         //console.log(this.str);
    //     }
    //
    //     if (vowel) {
    //         if (consonant)
    //             str += vowel;
    //         else
    //             str = vowel;
    //         //console.log(this.str);
    //     }
    //
    //     if (finalConsonant) {
    //         str += finalConsonant;
    //         //console.log(this.str);
    //     }
    //
    //
    //     return engTypeToKor(str);
    //
    // };
    //
    // this.str = this.createStr();

    this.setFirstX = function(x) {
        this.firstX = x;

        if (consonant) {
            this.consonant.setFirstX(this.firstX);
        }

        if (vowel) {
            this.vowel.setFirstX(this.firstX);
        }

        if (finalConsonant) {
            this.finalConsonant.setFirstX(this.firstX);
        }
    };

    this.setFirstY = function(y) {
        this.firstY = y;

        if (consonant) {
            this.consonant.setFirstY(this.firstY);
        }

        if (vowel) {
            this.vowel.setFirstY(this.firstY);
        }


        if (finalConsonant) {
            this.finalConsonant.setFirstY(this.firstY);
        }

    };

    this.getFirstX = function() {
        return this.firstX;
    };

    this.getFirstY = function() {
        return this.firstY;
    };

    this.changeWeight = function(weight) {
        if (consonant)
            this.consonant.changeWeight(weight);
        if (vowel)
            this.vowel.changeWeight(weight);
        if (finalConsonant)
            this.finalConsonant.changeWeight(weight);

    };

    this.crossbarChange = function(cross) {
        if(consonant)
            this.consonant.crossbarChange(cross);
        if (vowel)
            this.vowel.crossbarChange(cross);
        if (finalConsonant)
            this.finalConsonant.crossbarChange(cross);
    };

    this.changeLength = function(length) {
        if(consonant)
            this.consonant.changeLength(length);
        if (vowel)
            this.vowel.changeLength(length);
        if (finalConsonant){
          // if(!(this.vowel.str.charAt(0) == 'ㅗ'|| this.vowel.str.charAt(0) == 'ㅛ'
          // || this.vowel.str.charAt(0) == 'ㅜ'|| this.vowel.str.charAt(0) == 'ㅠ'
          // ||this.vowel.str.charAt(0) == 'ㅡ')){
          //
          //   alert('2');
          //   this.finalConsonant.setFirstX(3*(length - this.length));
          // }
          // else{
          //   if(this.finalConsonan.letterType == 2)
          //     this.finalConsonant.setFirstX(3*(length - this.length));
          //   else
          //     alert('1');
          // }
            this.finalConsonant.changeLength(length);

            this.length = length;

        }

    };
    this.changeSlant = function(slant) {
        if(consonant)
            this.consonant.changeSlant(slant);
        if (vowel)
            this.vowel.changeSlant(slant);
        if (finalConsonant)
            this.finalConsonant.changeSlant(slant);

        /*if(this.finalConsonant) //받침이 있으면
          this.finalConsonant.changeWeight(weight);*/
    };

    // this.getSlntCoord = function()
    //   {
    //     var matrix = this.consonant.outlineElement.getCTM();
    //     var tmpPoint = fullPageID.createSVGPoint();
    //     var tmpOutline = this.consonant.outlineData;
    //     for(var i =0; i<tmpOutline.length; i++)
    //     {
    //       if(this.consonant.outlineData[i].type == "C")
    //       {
    //         tmpPoint.x = this.consonant.outlineData[i].values[0];
    //         tmpPoint.y = this.consonant.outlineData[i].values[1];
    //         tmpPoint = tmpPoint.matrixTransform(matrix);
    //         tmpOutline[i].values[0] = tmpPoint.x;
    //         tmpOutline[i].values[1] = tmpPoint.y;
    //         tmpPoint.x = this.consonant.outlineData[i].values[2];
    //         tmpPoint.y = this.consonant.outlineData[i].values[3];
    //         tmpPoint = tmpPoint.matrixTransform(matrix);
    //         tmpOutline[i].values[2] = tmpPoint.x;
    //         tmpOutline[i].values[3] = tmpPoint.y;
    //         tmpPoint.x = this.consonant.outlineData[i].values[4];
    //         tmpPoint.y = this.consonant.outlineData[i].values[5];
    //         tmpPoint = tmpPoint.matrixTransform(matrix);
    //         tmpOutline[i].values[4] = tmpPoint.x;
    //         tmpOutline[i].values[5] = tmpPoint.y;
    //       }
    //       else
    //       {
    //       tmpPoint.x = this.consonant.outlineData[i].values[0];
    //       tmpPoint.y = this.consonant.outlineData[i].values[1];
    //       tmpPoint = tmpPoint.matrixTransform(matrix);
    //       tmpOutline[i].values[0] = tmpPoint.x;
    //       tmpOutline[i].values[1] = tmpPoint.y;
    //       }
    //     }
    //     return tmpOutline;
    //   };

    if (vowel) {
        if (vowel.charAt(0) == 'h' || vowel.charAt(0) == 'y' ||
            vowel.charAt(0) == 'm' || vowel.charAt(0) == 'n' || vowel.charAt(0) == 'b') {
            this.setFirstX(18); //밑에오는 모음이 포함될겅우 글자가 오른쪽으로 18 이동해야한다.

            if (vowel.length == 1) {
                if (finalConsonant)
                    if (this.finalConsonant.letterType == 2) { //눆 처럼 밑에오는 모음 하나만 쓰이고 겹받침이 오면
                        //자음과 모음은 x축으로 79이동하고 받침은 x축으로 -18이동함
                        this.finalConsonant.setFirstX(-200);
                        this.consonant.setFirstX(79);
                        this.vowel.setFirstX(79);

                        this.finalConsonant.setFirstX(-18);
                    }

            }
        }
    }

    this.deleteElement = function(){
      if(consonant)
        this.consonant.deleteElement();
      if(vowel)
        this.vowel.deleteElement();
      if(finalConsonant)
        this.finalConsonant.deleteElement();
    };

    if(consonant && vowel)
    {
      if(this.consonant.letterType == 1)
      {
        if(this.vowel.str == 'ㅗ' || this.vowel.str == 'ㅛ'
        || this.vowel.str == 'ㅜ' || this.vowel.str == 'ㅠ' || this.vowel.str == 'ㅡ')
        {
          if(this.vowel.letterType == 2 )
          {
            this.characterType = 1; //굉
            this.assistX = 0;
            this.characterInterval = 681;
          }
          else{

            this.characterType = 3; //고,골
            this.assistX = 155;
            this.characterInterval = 421;
            if(finalConsonant)
              if(this.finalConsonant.letterType == 2)
              {
                this.characterType =5;//곩
                this.assistX = 110;
                this.characterInterval = 493;
              }
          }
        }
        else{
          this.characterType = 1;//가, 각
          this.assistX = 0;
          this.characterInterval = 681;
        }

      }

      else
      {
        if(this.vowel.str == 'ㅗ' || this.vowel.str == 'ㅛ'
        || this.vowel.str == 'ㅜ' || this.vowel.str == 'ㅠ' || this.vowel.str == 'ㅡ')
        {
          if(this.vowel.letterType == 2 )
          {
            this.characterType = 2;  //꽈
            this.assistX = -110;
            this.characterInterval = 881;
          }
          else{
          this.characterType = 4; //꼴
          this.assistX = 30;
          this.characterInterval = 600;

          if(finalConsonant)
            if(this.finalConsonant.letterType == 2)
            {
              this.characterType =6;//꼵
              this.assistX = -80;
              this.characterInterval = 593;
            }
          }
        }
        else{
          this.characterType = 2;  //까,깔
          this.assistX = -110;
          this.characterInterval = 881;
        }
      }
    }
    else {
      this.characterType = 7;
      this.assistX = 0;
    }


}
