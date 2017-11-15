var changeLengthArray = {};


changeLengthArray.r = function(length) { // ㄱ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = this.boneData[1].values[0];
    this.changeWeight(this.weight);

    if(this.letterType==2){
      //console.log("현재 length",length );
    //  console.log("this.nextLetter.length",this.nextLetter.length);
      this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
      this.nextLetter.length = length;
      this.nextLetter.changeLength(length);
    }
};
changeLengthArray.s = function(length) { // ㄴ
    this.boneData[2].values[0] = this.initialBoneData.x[2] - 150 + length * 150 / 50;
    this.changeWeight(this.weight);

    if(this.letterType==2){
      //console.log("현재 length",length );
    //  console.log("this.nextLetter.length",this.nextLetter.length);
      this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
      this.nextLetter.length = length;
      this.nextLetter.changeLength(length);
    }
};
changeLengthArray.e = function(length) { // ㄷ
    this.boneData[0].values[0] = this.initialBoneData.x[0] - 150 + length * 150 / 50;
    this.boneData[3].values[0] = this.boneData[0].values[0];
    this.changeWeight(this.weight);

    if(this.letterType==2){
      //console.log("현재 length",length );
    //  console.log("this.nextLetter.length",this.nextLetter.length);
      this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
      this.nextLetter.length = length;
      this.nextLetter.changeLength(length);
    }
};
changeLengthArray.f = function(length) { // ㄹ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = this.boneData[1].values[0];
    this.boneData[5].values[0] = this.boneData[1].values[0];
    this.changeWeight(this.weight);

    if(this.letterType==2){
      //console.log("현재 length",length );
    //  console.log("this.nextLetter.length",this.nextLetter.length);
      this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
      this.nextLetter.length = length;
      this.nextLetter.changeLength(length);
    }
};

changeLengthArray.a = function(length){ // ㅁ
  this.boneData[1].values[0] = this.initialBoneData.x[1] -150 + length*150/50;
  this.boneData[2].values[0] = this.boneData[1].values[0];
  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};

changeLengthArray.q = function(length){ // ㅂ
  this.boneData[2].values[0] = this.initialBoneData.x[2] -150 + length*150/50;
  this.boneData[3].values[0] = this.boneData[2].values[0];
  this.boneData[5].values[0] = this.boneData[2].values[0];
  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};
changeLengthArray.z = function(length) { // ㅋ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = this.boneData[1].values[0];
    this.boneData[4].values[0] = this.boneData[1].values[0];
    this.changeWeight(this.weight);

    if(this.letterType==2){
      //console.log("현재 length",length );
    //  console.log("this.nextLetter.length",this.nextLetter.length);
      this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
      this.nextLetter.length = length;
      this.nextLetter.changeLength(length);
    }
};
changeLengthArray.x = function(length) { // ㅌ
    this.boneData[0].values[0] = this.initialBoneData.x[0] - 150 + length * 150 / 50;
    this.boneData[3].values[0] = this.boneData[0].values[0];
    this.boneData[5].values[0] = this.boneData[0].values[0];
    this.changeWeight(this.weight);

    if(this.letterType==2){
      //console.log("현재 length",length );
    //  console.log("this.nextLetter.length",this.nextLetter.length);
      this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
      this.nextLetter.length = length;
      this.nextLetter.changeLength(length);
    }
};
changeLengthArray.v = function(length){ // ㅍ
  this.boneData[1].values[0] = this.initialBoneData.x[1] -150 + length*150/50;
  this.boneData[3].values[0] = this.boneData[1].values[0];
  this.boneData[4].values[0] = this.initialBoneData.x[4] - (150 - length*150/50)*42/206;
  this.boneData[5].values[0] = this.boneData[4].values[0];
  this.boneData[6].values[0] = this.initialBoneData.x[6] - (150 - length*150/50)*164/206;
  this.boneData[7].values[0] = this.boneData[6].values[0];
  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};
changeLengthArray.t = function(length){ // ㅅ
  this.boneData[1].values[0] = this.initialBoneData.x[1] -75 + length*75/50;
  this.boneData[2].values[0] = this.initialBoneData.x[2] -150 + length*150/50;

  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};
changeLengthArray.d = function(length){ // ㅇ
  var CtrlPntRate = 70/126.8;
  var tmplength;
  this.boneData[0].values[0] = this.initialBoneData.x[0] -75 + length*75/50;
  this.boneData[1].values[4] = this.tmp -150 + length*150/50;
  this.boneData[2].values[4] = this.boneData[0].values[0];
  tmplength = (this.boneData[1].values[4] - this.boneData[0].values[0])*CtrlPntRate;
  this.boneData[1].values[0] = this.boneData[0].values[0]+tmplength;
  this.boneData[2].values[2] = this.boneData[1].values[0];
  this.boneData[3].values[0] = this.boneData[0].values[0]-tmplength;
  this.boneData[4].values[2] = this.boneData[3].values[0];
  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};
changeLengthArray.w = function(length){ // ㅈ
  this.boneData[1].values[0] = this.initialBoneData.x[1] -75 + length*75/50;
  this.boneData[2].values[0] = this.initialBoneData.x[2] -150 + length*150/50;
  this.boneData[4].values[0] = this.initialBoneData.x[4] -150 + length*150/50;

  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};

changeLengthArray.c = function(length){ // ㅊ
  this.boneData[1].values[0] = this.initialBoneData.x[1] -75 + length*75/50;
  this.boneData[2].values[0] = this.initialBoneData.x[2] -150 + length*150/50;
  this.boneData[4].values[0] = this.initialBoneData.x[4] -150 + length*150/50;
  this.boneData[6].values[0] = this.initialBoneData.x[6] -150 + length*150/50;

  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};

changeLengthArray.g = function(length){ // ㅎ
  var CtrlPntRate = 70/126.8;
  var tmplength;
  this.boneData[0].values[0] = this.initialBoneData.x[0] -75 + length*75/50;
  this.boneData[1].values[4] = this.tmp -150 + length*150/50;
  this.boneData[2].values[4] = this.boneData[0].values[0];
  tmplength = (this.boneData[1].values[4] - this.boneData[0].values[0])*CtrlPntRate;
  this.boneData[1].values[0] = this.boneData[0].values[0]+tmplength;
  this.boneData[2].values[2] = this.boneData[1].values[0];
  this.boneData[3].values[0] = this.boneData[0].values[0]-tmplength;
  this.boneData[4].values[2] = this.boneData[3].values[0];
  this.boneData[6].values[0] = this.initialBoneData.x[6] -150 + length*150/50;
  this.boneData[8].values[0] = this.initialBoneData.x[8] -150 + length*150/50;
  this.changeWeight(this.weight);

  if(this.letterType==2){
    //console.log("현재 length",length );
  //  console.log("this.nextLetter.length",this.nextLetter.length);
    this.nextLetter.setFirstX(3*(length -this.nextLetter.length));
    this.nextLetter.length = length;
    this.nextLetter.changeLength(length);
  }
};



changeLengthArray.h = function(length) { // ㅗ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = (this.boneData[0].values[0] + this.boneData[1].values[0]) / 2;
    this.boneData[3].values[0] = this.boneData[2].values[0];
    if(this.letterType == 2)
      this.nextLetter.changeLength(length);
    this.changeWeight(this.weight);
};
changeLengthArray.y = function(length) { // ㅛ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = (this.boneData[0].values[0] + (this.boneData[0].values[0] + this.boneData[1].values[0]) / 2) / 2;
    this.boneData[3].values[0] = this.boneData[2].values[0];
    this.boneData[4].values[0] = (this.boneData[1].values[0] + (this.boneData[0].values[0] + this.boneData[1].values[0]) / 2) / 2;
    this.boneData[5].values[0] = this.boneData[4].values[0];

    if(this.letterType == 2)
      this.nextLetter.changeLength(length);

    this.changeWeight(this.weight);
};
changeLengthArray.n = function(length) { // ㅜ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = (this.boneData[0].values[0] + this.boneData[1].values[0]) / 2;
    this.boneData[3].values[0] = this.boneData[2].values[0];

    if(this.letterType == 2)
      this.nextLetter.changeLength(length);

    this.changeWeight(this.weight);
};
changeLengthArray.b = function(length) { // ㅠ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;
    this.boneData[2].values[0] = (this.boneData[0].values[0] + (this.boneData[0].values[0] + this.boneData[1].values[0]) / 2) / 2;
    this.boneData[3].values[0] = this.boneData[2].values[0];
    this.boneData[4].values[0] = (this.boneData[1].values[0] + (this.boneData[0].values[0] + this.boneData[1].values[0]) / 2) / 2;
    this.boneData[5].values[0] = this.boneData[4].values[0];

    if(this.letterType == 2)
      this.nextLetter.changeLength(length);

    this.changeWeight(this.weight);
};
changeLengthArray.m = function(length) { // ㅡ
    this.boneData[1].values[0] = this.initialBoneData.x[1] - 150 + length * 150 / 50;

    if(this.letterType == 2)
      this.nextLetter.changeLength(length);
      
    this.changeWeight(this.weight);
};
