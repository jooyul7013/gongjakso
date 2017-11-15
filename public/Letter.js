function createSVG(letter){  //svg를 생성하는 함수
  var boneElement = document.getElementById(letter+"_bone");
  var boneData = boneElement.getPathData();

  var outlineElement = document.getElementById(letter+"_outline");
  var outlineData = outlineElement.getPathData();

  var boneOutputElement = document.getElementById(letter+"_boneOutput");
  var boneOutputData = boneOutputElement.getPathData();

  var str = "<svg class = \"svg\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\" viewBox=\"0 0 1200 1200\" >/n";
  str += "<!-- "+e2k(letter)+" -->\n<path stroke=\"black\" stroke-width=\"2\"fill=\"black\" id= \""+letter+"_outline"+letterUseCount[letter] +"\"";
  str += "d= \"";
  for (var i=0; i<outlineData.length-1; i++)
  {
    if(outlineData[i].type == "C")
    {
      str += outlineData[i].type + outlineData[i].values[0]+" "+ outlineData[i].values[1]+" "+ outlineData[i].values[2]+" "+ outlineData[i].values[3]+" "+ outlineData[i].values[4]+" "+ outlineData[i].values[5]+" ";
    }
    else
      str += outlineData[i].type + outlineData[i].values[0]+" "+ outlineData[i].values[1]+" ";
  }
  str += "Z";
  str += "\" />";
  str += "\n</svg>";
  //console.log(str);
  //document.write(str);
  //alert(str);
  $("body").append(str);
  //
  var str = "<svg class =\"svg\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\" viewBox=\"0 0 1200 1200\" >/n";
  str += "<!-- "+e2k(letter)+" -->\n<path stroke=\"none\" stroke-width=\"1\"fill=\"none\" id= \""+letter+"_bone"+letterUseCount[letter] +"\"";
  str += "d= \"";
  for (var i=0; i<boneData.length; i++)
  {
    if(boneData[i].type == "C")
    {
      str += boneData[i].type + boneData[i].values[0]+" "+ boneData[i].values[1]+" "+ boneData[i].values[2]+" "+ boneData[i].values[3]+" "+ boneData[i].values[4]+" "+ boneData[i].values[5]+" ";
    }

    else
    str += boneData[i].type + boneData[i].values[0]+" "+ boneData[i].values[1]+" ";
  }
  str += "\" />";
  str += "\n</svg>";
  //alert(str);

  //body에 쓰는부분
  //document.write(str);
  $("body").append(str);


//  document.write(str.replace("bone","boneOutput").replace('none', 'red')); 여기까지가 원래코드


var str = "<svg class =\"svg\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\" viewBox=\"0 0 1200 1200\" >/n";
str += "<!-- "+e2k(letter)+" -->\n<path stroke=\"none\" stroke-width=\"2\"fill=\"white\" id= \""+letter+"_boneOutput"+letterUseCount[letter] +"\"";
str += "d= \"";
for (var i=0; i<boneOutputData.length; i++)
{
  if(boneOutputData[i].type == "C")
  {
    str += boneOutputData[i].type + boneOutputData[i].values[0]+" "+ boneOutputData[i].values[1]+" "+ boneOutputData[i].values[2]+" "+ boneOutputData[i].values[3]+" "+ boneOutputData[i].values[4]+" "+ boneOutputData[i].values[5]+" ";
  }
  else
    str += boneOutputData[i].type + boneOutputData[i].values[0]+" "+ boneOutputData[i].values[1]+" ";
}
str += "\" />";
str += "\n</svg>";
//document.write(str);
$("body").append(str);


//  document.write(str.replace("boneOutput"));
  return letterUseCount[letter]++;   //생성된 svg의 번호가 리턴
}

function Letter(id,type,setting){
  this.id=id;  //바꿈
 this.setting = setting;
  if(id.length > 3)
    return -1;

  var letterUsedCount = createSVG(id.charAt(0));
  //var letterUsedCount = "";
  this.boneElement = document.getElementById(id.charAt(0)+"_bone"+letterUsedCount);
  this.boneOutputElement = document.getElementById(id.charAt(0)+"_boneOutput"+letterUsedCount);
  this.outlineElement = document.getElementById(id.charAt(0)+"_outline"+letterUsedCount);

  this.boneData = this.boneElement.getPathData();
  this.boneOutputData = this.boneOutputElement.getPathData();
  this.outlineData = this.outlineElement.getPathData();

  this.length =50;
  var weight =50;
  this.letterType = 1;  //단자음

  this.boneID = id.charAt(0) + "_bone" + letterUsedCount;



  if(id.length > 1)
  {
    this.letterType = 2;  //쌍자음 or 조합모음
    if(type == 1){   //자음일때
      this.nextLetter = new Letter(id.slice(1),1,setting);
      this.nextLetter.setFirstX(200);
    }
    else{     //모음일때
      this.nextLetter = new Letter(id.slice(1),2,setting);

      if(id.charAt(0) == 'u' || id.charAt(0) == 'i' || id.charAt(0) == 'j' || id.charAt(0) == 'k')
      this.nextLetter.setFirstX(137); //ㅔ에서 ㅓ와ㅣ의 간격을 벌림

    }

  }

  this.addNextLetter = function(letter){
    this.letterType = 2;
    if(type == 1){   //자음일때

      var usedLetterIdx = consonantLetterArray[letter][consonantLetterArray[letter].length-2] -   //사용될 idx 계산
                          (++consonantLetterArray[letter][consonantLetterArray[letter].length-1]);
      console.log("조합자음:추가된 idx: "+ letter+usedLetterIdx);
      this.nextLetter = consonantLetterArray[letter][usedLetterIdx];
      this.nextLetter.setFirstX(200);


      //alert("추가된 idx: "+ letter+usedLetterIdx);
    }

    if(type == 2)
    {
      var usedLetterIdx = vowelLetterArray[letter][vowelLetterArray[letter].length-2] -   //사용될 idx 계산
                          (++vowelLetterArray[letter][vowelLetterArray[letter].length-1]);

      console.log("조합모음:추가된 idx: "+ letter+usedLetterIdx);

      this.nextLetter = vowelLetterArray[letter][usedLetterIdx];

      if(id.charAt(0) == 'u' || id.charAt(0) == 'i' || id.charAt(0) == 'j' || id.charAt(0) == 'k')
      this.nextLetter.setFirstX(137); //ㅔ에서 ㅓ와ㅣ의 간격을 벌림
    }



  };

  this.initialBoneData = {};
  this.initialBoneData.x=[];
  this.initialBoneData.y=[];

  this.tmp = 0; //ㅇ,ㅎ 이니셜좌표때문에 필요

  //console.log(this.boneData);

  if(this.boneData[1].type == 'C')
  {
    this.tmp = this.boneData[1].values[4];
    //alert(this.tmp);
  }
  for(var i = 0 ; i < this.boneData.length ; i++)
  {
    this.initialBoneData.x[i] = this.boneData[i].values[0];
    this.initialBoneData.y[i] = this.boneData[i].values[1];


  }





  this.str = engTypeToKor(id);
  this.outputSize = 0.2;

  this.changedX = 0;
  this.changedY = 0;

  this.setFirstX = function(x){
    this.changedX += x;
    if(this.tmp != 0)   // ㅇ의 첫번째 좌표
      this.tmp += x;
    for(var i=0; i<this.boneData.length; i++){
      for(var j = 0;j < this.boneData[i].values.length; j=j+2)
      {
        this.boneData[i].values[j] += x;
      }
      this.initialBoneData.x[i] += x;
    }
    if (this.letterType == 2)
      this.nextLetter.setFirstX(x);
  };

  this.setFirstY = function(y){
    this.changedY += y;
    for(var i=0; i<this.boneData.length; i++){
      for(var j = 1;j < this.boneData[i].values.length; j=j+2)
      {
        this.boneData[i].values[j] -= y;
      }
      this.initialBoneData.y[i] -= y;
    }
    if (this.letterType == 2)
      this.nextLetter.setFirstY(y);
  };

  this.recoverFirstXY = function(){
    this.setFirstX(-this.changedX);
    this.setFirstY(-this.changedY);

    if(this.letterType == 2)
      this.nextLetter.recoverFirstXY();
  };

  this.returnLetter = function(){
    if(type == 1)
      consonantLetterArray[id.charAt(0)][consonantLetterArray[id.charAt(0)].length-1]--;
    else
      vowelLetterArray[id.charAt(0)][vowelLetterArray[id.charAt(0)].length-1]--;

    console.log(id.charAt(0)+"리턴됨");

    if(this.letterType == 2){
      this.nextLetter.returnLetter();
      this.letterType = 1;
      this.nextLetter = null;

    }
  }



  this.setSize = function(){
    /*for(var i =0; i< this.outlineData.length;i++)
    {
      this.outlineData[i].values[1] *= size;
      this.outlineData[i].values[0] *= size;
    }*/
    for(var i=0;i<this.outlineData.length;i++)
              {
                this.outlineData[i].values[0] *= this.outputSize;
                this.outlineData[i].values[1] *= this.outputSize;
                if(this.outlineData[i].values.length > 3)
                {
                  this.outlineData[i].values[2] *= this.outputSize;
                  this.outlineData[i].values[3] *= this.outputSize;
                  this.outlineData[i].values[4] *= this.outputSize;
                  this.outlineData[i].values[5] *= this.outputSize;
                }

              }
    for(var i=0;i<this.boneOutputData.length;i++) //고친부분
            {
              this.boneOutputData[i].values[0] *= this.outputSize;
              this.boneOutputData[i].values[1] *= this.outputSize;

              if(this.boneOutputData[i].values.length > 3)
              {
                this.boneOutputData[i].values[2] *= this.outputSize;
                this.boneOutputData[i].values[3] *= this.outputSize;
                this.boneOutputData[i].values[4] *= this.outputSize;
                this.boneOutputData[i].values[5] *= this.outputSize;
              }

            }
  };

  this.recoverSize = function(){
    /*for(var i =0; i< this.outlineData.length;i++)
    {
      this.outlineData[i].values[1] *= size;
      this.outlineData[i].values[0] *= size;
    }*/
    for(var i=0;i<this.outlineData.length;i++)
              {
                this.outlineData[i].values[0] *= 5;
                this.outlineData[i].values[1] *= 5;
                if(this.outlineData[i].values.length > 3)
                {
                  this.outlineData[i].values[2] *= 5;
                  this.outlineData[i].values[3] *= 5;
                  this.outlineData[i].values[4] *= 5;
                  this.outlineData[i].values[5] *= 5;
                }

              }
    for(var i=0;i<this.boneOutputData.length;i++) //고친부분
            {
              this.boneOutputData[i].values[0] *= 5;
              this.boneOutputData[i].values[1] *= 5;

              if(this.boneOutputData[i].values.length > 3)
              {
                this.boneOutputData[i].values[2] *= 5;
                this.boneOutputData[i].values[3] *= 5;
                this.boneOutputData[i].values[4] *= 5;
                this.boneOutputData[i].values[5] *= 5;
              }

            }
  };

  this.symmetry = function(){
    for(var i=0; i<this.outlineData.length; i++)
              {
                if(this.outlineData[i].values[1]>500)
                  this.outlineData[i].values[1] = 500 - (this.outlineData[i].values[1]-500);
                else {
                  this.outlineData[i].values[1] = 500 + (500 - this.outlineData[i].values[1]);
                }

                if(this.outlineData[i].values.length>3)
                {
                  if(this.outlineData[i].values[3]>500)
                    this.outlineData[i].values[3] = 500 - (this.outlineData[i].values[3]-500);
                  else
                    this.outlineData[i].values[3] = 500 + (500 - this.outlineData[i].values[3]);

                  if(this.outlineData[i].values[5]>500)
                   this.outlineData[i].values[5] = 500 - (this.outlineData[i].values[5]-500);
                  else {
                   this.outlineData[i].values[5] = 500 + (500 - this.outlineData[i].values[5]);
                  }
                }
              }

              for(var i=0; i<this.boneOutputData.length; i++)
              {
                if(this.boneOutputData[i].values[1]>500)
                  this.boneOutputData[i].values[1] = 500 - (this.boneOutputData[i].values[1]-500);
                else {
                  this.boneOutputData[i].values[1] = 500 + (500 - this.boneOutputData[i].values[1]);
                }

                if(this.boneOutputData[i].values.length>3)
                {
                  if(this.boneOutputData[i].values[3]>500)
                    this.boneOutputData[i].values[3] = 500 - (this.boneOutputData[i].values[3]-500);
                  else
                    this.boneOutputData[i].values[3] = 500 + (500 - this.boneOutputData[i].values[3]);

                  if(this.boneOutputData[i].values[5]>500)
                   this.boneOutputData[i].values[5] = 500 - (this.boneOutputData[i].values[5]-500);
                  else {
                   this.boneOutputData[i].values[5] = 500 + (500 - this.boneOutputData[i].values[5]);
                  }
                }
              }


              if(this.letterType == 2)
                this.nextLetter.symmetry();
  };
  // this.resymmetry = function(){
  //   for(var i=0; i<this.outlineData.length; i++)
  //             {
  //               if(this.outlineData[i].values[1]>500)
  //                 this.outlineData[i].values[1] = 500 - (this.outlineData[i].values[1]-500);
  //               else {
  //                 this.outlineData[i].values[1] = 500 + (500 - this.outlineData[i].values[1]);
  //               }
  //
  //               if(this.outlineData[i].values.length>3)
  //               {
  //                 if(this.outlineData[i].values[3]>500)
  //                   this.outlineData[i].values[3] = 500 - (this.outlineData[i].values[3]-500);
  //                 else
  //                   this.outlineData[i].values[3] = 500 + (500 - this.outlineData[i].values[3]);
  //
  //                 if(this.outlineData[i].values[5]>500)
  //                  this.outlineData[i].values[5] = 500 - (this.outlineData[i].values[5]-500);
  //                 else {
  //                  this.outlineData[i].values[5] = 500 + (500 - this.outlineData[i].values[5]);
  //                 }
  //               }
  //             }
  //
  //             for(var i=0; i<this.boneOutputData.length; i++)
  //             {
  //               if(this.boneOutputData[i].values[1]>500)
  //                 this.boneOutputData[i].values[1] = 500 - (this.boneOutputData[i].values[1]-500);
  //               else {
  //                 this.boneOutputData[i].values[1] = 500 + (500 - this.boneOutputData[i].values[1]);
  //               }
  //
  //               if(this.boneOutputData[i].values.length>3)
  //               {
  //                 if(this.boneOutputData[i].values[3]>500)
  //                   this.boneOutputData[i].values[3] = 500 - (this.boneOutputData[i].values[3]-500);
  //                 else
  //                   this.boneOutputData[i].values[3] = 500 + (500 - this.boneOutputData[i].values[3]);
  //
  //                 if(this.boneOutputData[i].values[5]>500)
  //                  this.boneOutputData[i].values[5] = 500 - (this.boneOutputData[i].values[5]-500);
  //                 else {
  //                  this.boneOutputData[i].values[5] = 500 + (500 - this.boneOutputData[i].values[5]);
  //                 }
  //               }
  //             }
  //
  //
  //             if(this.letterType == 2)
  //               this.nextLetter.resymmetry();
  //
  //
  // };
  this.initialize = function(){
  //  this.setSize();
    this.boneElement.setPathData(this.boneData);
    this.boneOutputElement.setPathData(this.boneOutputData);
    this.outlineElement.setPathData(this.outlineData);
    if (this.letterType ==2)
      this.nextLetter.initialize();
  };

  this.changeWeight = changeWeightArray[id.charAt(0)];

  this.crossbarStemindex = [];
  this.pushCrossbarStem = pushCrossbarStem[id.charAt(0)];
  if(this.pushCrossbarStem ===undefined)
    this.pushCrossbarStem = function(){};
  this.pushCrossbarStem();

  this.crossbarChange = function(crossbar){

    for(var i=0; i<this.crossbarStemindex.length; i++)
      this.boneData[this.crossbarStemindex[i]].values[1] = this.initialBoneData.y[this.crossbarStemindex[i]] + (crossbar-50);//*2

    this.changeWeight(this.weight);



    if(this.letterType==2)
      this.nextLetter.crossbarChange(crossbar);

  };

  this.changeLength = changeLengthArray[id.charAt(0)];


  if(this.changeLength === undefined)  //ㅗㅛㅜㅠㅡ를 제외한 길이조정
    this.changeLength = function(length){
      this.setFirstX(3*(length - this.length));
      if(this.letterType == 2)
        this.nextLetter.changeLength(length);

      this.changeWeight(this.weight);
      this.length = length;

    };

  this.changeSlant = function(slant){
    this.outlineElement.setAttribute("transform","skewX("+slant+")");
    this.boneOutputElement.setAttribute("transform","skewX("+slant+")");
    if(this.letterType==2)
      this.nextLetter.changeSlant(slant);
  };

  this.deleteElement = function(){
    this.boneElement.remove();
    this.boneOutputElement.remove();
    this.outlineElement.remove();
    if(this.letterType == 2)
      this.nextLetter.deleteElement();
  };

  this.getSlntCoord = function()
    {
      var matrix = this.outlineElement.getCTM();
      matrix.a = 1;
      matrix.d = 1;
      matrix.c = -matrix.c;
      var tmpPoint = fullPageID.createSVGPoint();
      var tmpOutline = this.outlineData;
      for(var i =0; i<tmpOutline.length; i++)
      {
        if(this.outlineData[i].type == "C")
        {
          tmpPoint.x = this.outlineData[i].values[0];
          tmpPoint.y = this.outlineData[i].values[1];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          tmpOutline[i].values[0] = tmpPoint.x;
          tmpOutline[i].values[1] = tmpPoint.y;
          tmpPoint.x = this.outlineData[i].values[2];
          tmpPoint.y = this.outlineData[i].values[3];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          tmpOutline[i].values[2] = tmpPoint.x;
          tmpOutline[i].values[3] = tmpPoint.y;
          tmpPoint.x = this.outlineData[i].values[4];
          tmpPoint.y = this.outlineData[i].values[5];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          tmpOutline[i].values[4] = tmpPoint.x;
          tmpOutline[i].values[5] = tmpPoint.y;

          tmpPoint.x = this.boneOutputData[i].values[0];
          tmpPoint.y = this.boneOutputData[i].values[1];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          this.boneOutputData[i].values[0] = tmpPoint.x;
          this.boneOutputData[i].values[1] = tmpPoint.y;

          tmpPoint.x = this.boneOutputData[i].values[2];
          tmpPoint.y = this.boneOutputData[i].values[3];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          this.boneOutputData[i].values[2] = tmpPoint.x;
          this.boneOutputData[i].values[3] = tmpPoint.y;


          tmpPoint.x = this.boneOutputData[i].values[4];
          tmpPoint.y = this.boneOutputData[i].values[5];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          this.boneOutputData[i].values[4] = tmpPoint.x;
          this.boneOutputData[i].values[5] = tmpPoint.y;


        }
        else
        {
          tmpPoint.x = this.outlineData[i].values[0];
          tmpPoint.y = this.outlineData[i].values[1];

          tmpPoint = tmpPoint.matrixTransform(matrix); //outline에 적용
          tmpOutline[i].values[0] = tmpPoint.x;
          tmpOutline[i].values[1] = tmpPoint.y;

          tmpPoint.x = this.boneOutputData[i].values[0];  //센터라인에도 적용
          tmpPoint.y = this.boneOutputData[i].values[1];
          tmpPoint = tmpPoint.matrixTransform(matrix);
          this.boneOutputData[i].values[0] = tmpPoint.x;
          this.boneOutputData[i].values[1] = tmpPoint.y;


        }
      }
      if(this.letterType == 2)
      {
        this.nextLetter.getSlntCoord();
      }
    };
}
