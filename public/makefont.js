function makeupStuff() {

  //var consonantArray = ['r','s','e','f','a','q','t','d','w','c','z','x','v','g'];
  //var vowelArray = ['k','i','j','u','h','y','n','b','m','l'];
  var doubleConsonantArray = ['r','t','e','w','q'];



  for(var i =0; i < consonantArray.length-5; i++)   //폰트제작시 사용될 letter를 미리 생성
  {
    consonantLetterArray[consonantArray[i]].push(new Letter(consonantArray[i],1,2));
    consonantLetterArray[consonantArray[i]].push(new Letter(consonantArray[i],1,2));
    consonantLetterArray[consonantArray[i]].push(2);  //letter 총 개수
    consonantLetterArray[consonantArray[i]].push(0); //사용한 개수

    //console.log("자음"+consonantArray[i],consonantLetterArray[consonantArray[i]]);
  }

  for(var i = 0; i<doubleConsonantArray.length; i++)
  {
    consonantLetterArray[doubleConsonantArray[i]].pop();
    consonantLetterArray[doubleConsonantArray[i]].pop();
    consonantLetterArray[doubleConsonantArray[i]].push(new Letter(doubleConsonantArray[i],1,2));
    consonantLetterArray[doubleConsonantArray[i]].push(new Letter(doubleConsonantArray[i],1,2));
    consonantLetterArray[doubleConsonantArray[i]].push(4);
    consonantLetterArray[doubleConsonantArray[i]].push(0);

    //console.log("쌍자음"+doubleConsonantArray[i],consonantLetterArray[doubleConsonantArray[i]]);
  }

  for(var i =0; i < vowelArray.length-4; i++) //모음
  {

    vowelLetterArray[vowelArray[i]].push(new Letter(vowelArray[i],2,2));
    vowelLetterArray[vowelArray[i]].push(new Letter(vowelArray[i],2,2));
    vowelLetterArray[vowelArray[i]].push(2);
    vowelLetterArray[vowelArray[i]].push(0);

    //console.log("모음"+vowelArray[i],vowelLetterArray[vowelArray[i]]);
  }

  for(letter in consonantLetterArray) //기울기 적용
  {
    for(var j =0; j<consonantLetterArray[letter].length-2; j++)
    {
      consonantLetterArray[letter][j].changeSlant(slant);
      consonantLetterArray[letter][j].getSlntCoord();
    }
  }

  for(letter in vowelLetterArray) //기울기 적용
  {
    for(var j =0; j < vowelLetterArray[letter].length-2; j++)
    {
      vowelLetterArray[letter][j].changeSlant(slant);
      vowelLetterArray[letter][j].getSlntCoord();
    }
  }






  var txt ='';
  var count = 0xAC00;
//D7A3 이 마지막글자.
  for(var i=0;i<firstLetterArray.length;i++)
  {
    for(var jj=0; jj<middleLetterArray.length; jj++)
    {
      for(var z=0;z<finalLetterArray.length;z++)
      {


        var stuff = new Character(firstLetterArray[i]+middleLetterArray[jj]+finalLetterArray[z],2);
        // var stuff = new Character("ror",2);

        // stuffArray.push(new Character(firstLetterArray[i]+middleLetterArray[j]+finalLetterArray[k],2));
        stuff.changeWeight(weight);
        // console.log("stuff1", stuff.vowel.letterType);
        stuff.crossbarChange(crossbar);
        // console.log("stuff2", stuff.vowel.letterType);
        stuff.changeLength(length);
        // console.log("stuff3", stuff.vowel.letterType);

        stuff.changeSlant(slant);

        // console.log("stuff4", stuff.vowel.letterType);

        // fontTest

        if(stuff.consonant)
        {
          stuff.consonant.outlineElement.setAttribute("stroke","black");
          stuff.consonant.boneOutputElement.setAttribute("stroke","none");
          stuff.consonant.outlineElement.setAttribute("fill","black");
          stuff.consonant.boneOutputElement.setAttribute("fill","white");
          if(stuff.consonant.nextLetter)
          {
            stuff.consonant.nextLetter.outlineElement.setAttribute("stroke","black");
            stuff.consonant.nextLetter.boneOutputElement.setAttribute("stroke","none");
            stuff.consonant.nextLetter.outlineElement.setAttribute("fill","black");
            stuff.consonant.nextLetter.boneOutputElement.setAttribute("fill","white");
          }
        }
        if(stuff.vowel)
        {
          stuff.vowel.outlineElement.setAttribute("stroke","black");
          stuff.vowel.boneOutputElement.setAttribute("stroke","none");
          stuff.vowel.outlineElement.setAttribute("fill","black");
          stuff.vowel.boneOutputElement.setAttribute("fill","white");
          if(stuff.vowel.nextLetter)
          {
            stuff.vowel.nextLetter.outlineElement.setAttribute("stroke","black");
            stuff.vowel.nextLetter.boneOutputElement.setAttribute("stroke","none");
            stuff.vowel.nextLetter.outlineElement.setAttribute("fill","black");
            stuff.vowel.nextLetter.boneOutputElement.setAttribute("fill","white");
          }
        }
        if(stuff.finalConsonant)
        {
          stuff.finalConsonant.outlineElement.setAttribute("stroke","black");
          stuff.finalConsonant.boneOutputElement.setAttribute("stroke","none");
          stuff.finalConsonant.outlineElement.setAttribute("fill","black");
          stuff.finalConsonant.boneOutputElement.setAttribute("fill","white");
          if(stuff.finalConsonant.nextLetter)
          {
            stuff.finalConsonant.nextLetter.outlineElement.setAttribute("stroke","black");
            stuff.finalConsonant.nextLetter.boneOutputElement.setAttribute("stroke","none");
            stuff.finalConsonant.nextLetter.outlineElement.setAttribute("fill","black");
            stuff.finalConsonant.nextLetter.boneOutputElement.setAttribute("fill","white");
          }
        }



          var stack =[];
          var d_tag = '';
          var tempindex;
          var temp;
          var numberStack = [];
          var typeStack = [];

          if(stuff.consonant){

            if(slant != 0){

                stuff.consonant.getSlntCoord();

            }

            for(var k =0; k<stuff.consonant.outlineData.length;k++)
            {
              d_tag +=stuff.consonant.outlineData[k].type;
              d_tag +=Math.floor(stuff.consonant.outlineData[k].values[0]*100)/100;
              d_tag +=" "+Math.floor(stuff.consonant.outlineData[k].values[1]*100)/100;
              if(stuff.consonant.outlineData[k].type == 'C')
              {
                d_tag +=" "+Math.floor(stuff.consonant.outlineData[k].values[2]*100)/100;
                d_tag +=" "+Math.floor(stuff.consonant.outlineData[k].values[3]*100)/100;
                d_tag +=" "+Math.floor(stuff.consonant.outlineData[k].values[4]*100)/100;
                d_tag +=" "+Math.floor(stuff.consonant.outlineData[k].values[5]*100)/100;
              }
              if(centerLine>0)
              {
                var tmpType = stuff.consonant.boneOutputData[k].type;
                typeStack.push(tmpType);

                for(var j = 0; j < stuff.consonant.outlineData[k].values.length; j ++)
                {
                  var tmpNumber = stuff.consonant.boneOutputData[k].values[j];
                  numberStack.push(tmpNumber);
                }

              }
            }

            if(centerLine>0)
            {
              numberStack.pop();
              numberStack.pop();
              for(var k =0; k<stuff.consonant.boneOutputData.length;k++)
              {
                var tmpData = typeStack.pop();
                if(tmpData=='Z')
                {
                  d_tag+='M';
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='C')
                {
                  d_tag+=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='M'&&numberStack.length==0)
                {
                  d_tag+='Z';
                }
                else
                {
                  d_tag +=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }

              }
            }

            if(stuff.consonant.nextLetter)
            {
            for(var k =0; k<stuff.consonant.nextLetter.outlineData.length;k++)
            {
              d_tag +=stuff.consonant.nextLetter.outlineData[k].type;
              d_tag +=Math.floor(stuff.consonant.nextLetter.outlineData[k].values[0]*100)/100;
              d_tag +=" "+Math.floor(stuff.consonant.nextLetter.outlineData[k].values[1]*100)/100;
              if(stuff.consonant.nextLetter.outlineData[k].type == 'C')
              {
                d_tag +=" "+Math.floor(stuff.consonant.nextLetter.outlineData[k].values[2]*100)/100;
                d_tag +=" "+Math.floor(stuff.consonant.nextLetter.outlineData[k].values[3]*100)/100;
                d_tag +=" "+Math.floor(stuff.consonant.nextLetter.outlineData[k].values[4]*100)/100;
                d_tag +=" "+Math.floor(stuff.consonant.nextLetter.outlineData[k].values[5]*100)/100;
              }
              if(centerLine>0)
              {
                var tmpType = stuff.consonant.nextLetter.boneOutputData[k].type;
                typeStack.push(tmpType);

                for(var j = 0; j < stuff.consonant.nextLetter.outlineData[k].values.length; j ++)
                {
                  var tmpNumber = stuff.consonant.nextLetter.boneOutputData[k].values[j];
                  numberStack.push(tmpNumber);
                }

              }
            }

            if(centerLine>0)
            {

              numberStack.pop();
              numberStack.pop();
              for(var k =0; k<stuff.consonant.nextLetter.boneOutputData.length;k++)
              {

                var tmpData = typeStack.pop();
                if(tmpData=='Z')
                {
                  d_tag+='M';
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='C')
                {
                  d_tag+=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='M'&&numberStack.length==0)
                {
                  d_tag+='Z';
                }
                else
                {
                  d_tag +=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }

              }
            }

          }
        }
          if(stuff.vowel){
            stuff.vowel.getSlntCoord();



            for(var k =0; k<stuff.vowel.outlineData.length;k++){
            d_tag +=(stuff.vowel.outlineData[k].type);
            d_tag +=(Math.floor(stuff.vowel.outlineData[k].values[0]*100)/100);
            d_tag +=(" "+Math.floor(stuff.vowel.outlineData[k].values[1]*100)/100);

            if(centerLine>0)
            {
              var data = {
                        type : stuff.vowel.boneOutputData[k].type,
                        x : stuff.vowel.boneOutputData[k].values[0],
                        y : stuff.vowel.boneOutputData[k].values[1]
                      };
              if(data.type=='M')
                tempindex=k;
              if(data.type=='Z')
              {
                temp = data;
                data = stack[tempindex];
                stack[tempindex] = temp;
                stack.push(data);
              }
              else
                stack.push(data);
            }
            }
            if(centerLine>0)
            {
              for(var k =0; k<stuff.vowel.boneOutputData.length;k++)
              {
                var parsingData = stack.pop();
                d_tag +=parsingData.type;
                d_tag +=Math.floor(parsingData.x*100)/100;
                d_tag +=" "+Math.floor(parsingData.y*100)/100;
              }
            }


            if(stuff.vowel.nextLetter)
            {
            for(var k =0; k<stuff.vowel.nextLetter.outlineData.length;k++){
            d_tag +=(stuff.vowel.nextLetter.outlineData[k].type);
            d_tag +=(Math.floor(stuff.vowel.nextLetter.outlineData[k].values[0]*100)/100);
            d_tag +=(" "+Math.floor(stuff.vowel.nextLetter.outlineData[k].values[1]*100)/100);

              if(centerLine>0)
              {
                var data = {
                          type : stuff.vowel.nextLetter.boneOutputData[k].type,
                          x : stuff.vowel.nextLetter.boneOutputData[k].values[0],
                          y : stuff.vowel.nextLetter.boneOutputData[k].values[1]
                        };
                if(data.type=='M')
                  tempindex=k;
                if(data.type=='Z')
                {
                  temp = data;
                  data = stack[tempindex];
                  stack[tempindex] = temp;
                  stack.push(data);
                }
                else
                  stack.push(data);
              }

            }

            if(centerLine>0)
            {
              for(var k =0; k<stuff.vowel.nextLetter.boneOutputData.length;k++)
              {
                var parsingData = stack.pop();
                d_tag +=parsingData.type;
                d_tag +=Math.floor(parsingData.x*100)/100;
                d_tag +=" "+Math.floor(parsingData.y*100)/100;
              }
            }

            if(stuff.vowel.nextLetter.nextLetter)
            {
            for(var k =0; k<stuff.vowel.nextLetter.nextLetter.outlineData.length;k++){
            d_tag +=(stuff.vowel.nextLetter.nextLetter.outlineData[k].type);
            d_tag +=(Math.floor(stuff.vowel.nextLetter.nextLetter.outlineData[k].values[0]*100)/100);
            d_tag +=(" "+Math.floor(stuff.vowel.nextLetter.nextLetter.outlineData[k].values[1]*100)/100);

            if(centerLine>0)
            {
              var data = {
                        type : stuff.vowel.nextLetter.nextLetter.boneOutputData[k].type,
                        x : stuff.vowel.nextLetter.nextLetter.boneOutputData[k].values[0],
                        y : stuff.vowel.nextLetter.nextLetter.boneOutputData[k].values[1]
                      };
              if(data.type=='M')
                tempindex=k;
              if(data.type=='Z')
              {
                temp = data;
                data = stack[tempindex];
                stack[tempindex] = temp;
                stack.push(data);
              }
              else
                stack.push(data);
            }
            }
            if(centerLine>0)
            {
              for(var k =0; k<stuff.vowel.nextLetter.nextLetter.boneOutputData.length;k++)
              {
                var parsingData = stack.pop();
                d_tag +=parsingData.type;
                d_tag +=Math.floor(parsingData.x*100)/100;
                d_tag +=" "+Math.floor(parsingData.y*100)/100;
              }
            }
          }
          }
          }

          if(stuff.finalConsonant){

            stuff.finalConsonant.getSlntCoord();
            for(var k =0; k<stuff.finalConsonant.outlineData.length;k++)
            {
              d_tag +=stuff.finalConsonant.outlineData[k].type;
              d_tag +=Math.floor(stuff.finalConsonant.outlineData[k].values[0]*100)/100;
              d_tag +=" "+Math.floor(stuff.finalConsonant.outlineData[k].values[1]*100)/100;
              if(stuff.finalConsonant.outlineData[k].type == 'C')
              {
                d_tag +=" "+Math.floor(stuff.finalConsonant.outlineData[k].values[2]*100)/100;
                d_tag +=" "+Math.floor(stuff.finalConsonant.outlineData[k].values[3]*100)/100;
                d_tag +=" "+Math.floor(stuff.finalConsonant.outlineData[k].values[4]*100)/100;
                d_tag +=" "+Math.floor(stuff.finalConsonant.outlineData[k].values[5]*100)/100;
              }
              if(centerLine>0)
              {
                var tmpType = stuff.finalConsonant.boneOutputData[k].type;
                typeStack.push(tmpType);

                for(var j = 0; j < stuff.finalConsonant.outlineData[k].values.length; j ++)
                {
                  var tmpNumber = stuff.finalConsonant.boneOutputData[k].values[j];
                  numberStack.push(tmpNumber);
                }

              }
            }

            if(centerLine>0)
            {

              numberStack.pop();
              numberStack.pop();
              for(var k =0; k<stuff.finalConsonant.boneOutputData.length;k++)
              {

                var tmpData = typeStack.pop();
                if(tmpData=='Z')
                {
                  d_tag+='M';
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='C')
                {
                  d_tag+=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='M'&&numberStack.length==0)
                {
                  d_tag+='Z';
                }
                else
                {
                  d_tag +=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }

              }
            }

            if(stuff.finalConsonant.nextLetter)
            {
            for(var k =0; k<stuff.finalConsonant.nextLetter.outlineData.length;k++)
            {
              d_tag +=stuff.finalConsonant.nextLetter.outlineData[k].type;
              d_tag +=Math.floor(stuff.finalConsonant.nextLetter.outlineData[k].values[0]*100)/100;
              d_tag +=" "+Math.floor(stuff.finalConsonant.nextLetter.outlineData[k].values[1]*100)/100;
              if(stuff.finalConsonant.nextLetter.outlineData[k].type == 'C')
              {
                d_tag +=" "+Math.floor(stuff.finalConsonant.nextLetter.outlineData[k].values[2]*100)/100;
                d_tag +=" "+Math.floor(stuff.finalConsonant.nextLetter.outlineData[k].values[3]*100)/100;
                d_tag +=" "+Math.floor(stuff.finalConsonant.nextLetter.outlineData[k].values[4]*100)/100;
                d_tag +=" "+Math.floor(stuff.finalConsonant.nextLetter.outlineData[k].values[5]*100)/100;
              }
              if(centerLine>0)
              {
                var tmpType = stuff.finalConsonant.nextLetter.boneOutputData[k].type;
                typeStack.push(tmpType);

                for(var j = 0; j < stuff.finalConsonant.nextLetter.outlineData[k].values.length; j ++)
                {
                  var tmpNumber = stuff.finalConsonant.nextLetter.boneOutputData[k].values[j];
                  numberStack.push(tmpNumber);
                }

              }
            }

            if(centerLine>0)
            {

              numberStack.pop();
              numberStack.pop();
              for(var k =0; k<stuff.finalConsonant.nextLetter.boneOutputData.length;k++)
              {

                var tmpData = typeStack.pop();
                if(tmpData=='Z')
                {
                  d_tag+='M';
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='C')
                {
                  d_tag+=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                  tmpstk = numberStack.pop();
                  d_tag +=" "+Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }
                else if(tmpData=='M'&&numberStack.length==0)
                {
                  d_tag+='Z';
                }
                else
                {
                  d_tag +=tmpData;
                  var tmpstk = numberStack.pop();
                  d_tag+=Math.floor(numberStack.pop()*100)/100;
                  d_tag +=" "+Math.floor(tmpstk*100)/100;
                }

              }
            }

          }
        }

            //  d_tag.replace("NAN","");
            txt += "<glyph glyph-name=\"uni"+count.toString(16).toUpperCase()+"\" unicode=\"&#x"+count.toString(16)+";\"" + " horiz-adv-x=" +"\""+ (stuff.characterInterval + length*3 -150)+"\"" +" d=\""+d_tag.replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","").replace("NaN","")+"\" />\n";



            if(stuff.consonant)
            {
              stuff.consonant.outlineElement.setAttribute("stroke","none");
              stuff.consonant.boneOutputElement.setAttribute("stroke","none");
              stuff.consonant.outlineElement.setAttribute("fill","none");
              stuff.consonant.boneOutputElement.setAttribute("fill","none");
              if(stuff.consonant.nextLetter)
              {
                stuff.consonant.nextLetter.outlineElement.setAttribute("stroke","none");
                stuff.consonant.nextLetter.boneOutputElement.setAttribute("stroke","none");
                stuff.consonant.nextLetter.outlineElement.setAttribute("fill","none");
                stuff.consonant.nextLetter.boneOutputElement.setAttribute("fill","none");
              }
            }
            if(stuff.vowel)
            {
              stuff.vowel.outlineElement.setAttribute("stroke","none");
              stuff.vowel.boneOutputElement.setAttribute("stroke","none");
              stuff.vowel.outlineElement.setAttribute("fill","none");
              stuff.vowel.boneOutputElement.setAttribute("fill","none");
              if(stuff.vowel.nextLetter)
              {
                stuff.vowel.nextLetter.outlineElement.setAttribute("stroke","none");
                stuff.vowel.nextLetter.boneOutputElement.setAttribute("stroke","none");
                stuff.vowel.nextLetter.outlineElement.setAttribute("fill","none");
                stuff.vowel.nextLetter.boneOutputElement.setAttribute("fill","none");
              }
            }
            if(stuff.finalConsonant)
            {
              stuff.finalConsonant.outlineElement.setAttribute("stroke","none");
              stuff.finalConsonant.boneOutputElement.setAttribute("stroke","none");
              stuff.finalConsonant.outlineElement.setAttribute("fill","none");
              stuff.finalConsonant.boneOutputElement.setAttribute("fill","none");
              if(stuff.finalConsonant.nextLetter)
              {
                stuff.finalConsonant.nextLetter.outlineElement.setAttribute("stroke","none");
                stuff.finalConsonant.nextLetter.boneOutputElement.setAttribute("stroke","none");
                stuff.finalConsonant.nextLetter.outlineElement.setAttribute("fill","none");
                stuff.finalConsonant.nextLetter.boneOutputElement.setAttribute("fill","none");
              }
            }

            //alert(count+"완료");
            count++;

            stuff.returnLetter();

            // for(letter in consonantLetterArray){
            //   if(consonantLetterArray[letter][consonantLetterArray[letter].length-1] != 0)
            //     console.log(letter+"의 반환에 이상.."+
            //     consonantLetterArray[letter][consonantLetterArray[letter].length-1]+"개남음");
            // }
    }
  }
    }
    // console.log(txt);
    //alert("completed");
    return txt;
  }
