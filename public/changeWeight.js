var changeWeightArray = {};

var changeLengthArray = {};


//Weight

changeWeightArray.r = function(weight) { //  ㄱ
    this.weight = weight;
    // console.log(contrast_x + " // " + contrast_y);

    this.outlineData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50 / 2) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + (weight * 78 / 50)* 1 / 3 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[2].values[0] + weight * (80 / 50) / 3 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1] - (40 + (weight - 50) * 40 / 50 / 2) * contrast_y;

    this.outlineData[3].values[0] = this.boneData[2].values[0] - (weight * (80 / 50 * 2 / 3)) * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[1].values[1] - (weight * 78 / 50)* 2 / 3 * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[0].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50 / 2) * contrast_x*centerLine/120;
    this.boneOutputData[0].values[1] = (this.outlineData[0].values[1] + this.outlineData[5].values[1])/2 + (weight * 39 / 50) * contrast_x *centerLine / 120;

    this.boneOutputData[1].values[0] = (this.outlineData[1].values[0] + this.outlineData[4].values[0])/2+ weight * (40 / 50) * contrast_y *centerLine / 120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[2].values[1] - (40 + (weight - 50) * 40 / 50 / 2) * contrast_y *centerLine/120;

    this.boneOutputData[3].values[0] = (this.outlineData[1].values[0] + this.outlineData[4].values[0])/2 - weight * (40 / 50) * contrast_y *centerLine / 120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = (this.outlineData[0].values[1] + this.outlineData[5].values[1])/2 - (weight * 39 / 50) * contrast_x *centerLine / 120;
    this.boneOutputData[5].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();

    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};

changeWeightArray.s= function(weight){//ㄴ
  this.weight = weight;
  this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50  * contrast_y;
  this.outlineData[0].values[1] = this.boneData[0].values[1] + (39 + (weight - 50) * 40 / 50 / 2) * contrast_y;

  this.outlineData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y;
  this.outlineData[1].values[1] = this.outlineData[0].values[1];

  this.outlineData[2].values[0] = this.outlineData[1].values[0];
  this.outlineData[2].values[1] = this.boneData[2].values[1] + weight * 78 / 50 * 2 / 3 * contrast_x;

  this.outlineData[3].values[0] = this.boneData[2].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_x;
  this.outlineData[3].values[1] = this.outlineData[2].values[1];

  this.outlineData[4].values[0] = this.outlineData[3].values[0];
  this.outlineData[4].values[1] = this.boneData[1].values[1] - weight * 78 / 50 * 1 / 3 * contrast_x;

  this.outlineData[5].values[0] = this.outlineData[0].values[0];
  this.outlineData[5].values[1] = this.outlineData[4].values[1];

  this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50  * contrast_y * centerLine / 120;
  this.boneOutputData[0].values[1] = this.boneData[0].values[1] + (39 + (weight - 50) * 40 / 50 / 2) * contrast_y * centerLine / 120;

  this.boneOutputData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y * centerLine / 120;
  this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

  this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
  this.boneOutputData[2].values[1] = (this.outlineData[2].values[1] + this.outlineData[5].values[1])/2 + weight * 39 / 50 * contrast_x *centerLine / 120;

  this.boneOutputData[3].values[0] = this.boneData[2].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_x * centerLine / 120;
  this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

  this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
  this.boneOutputData[4].values[1] = (this.outlineData[2].values[1] + this.outlineData[5].values[1])/2 - weight * 39 / 50 * contrast_x *centerLine / 120;

  this.boneOutputData[5].values[0] = this.boneOutputData[0].values[0];
  this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];
  this.symmetry();
  this.setSize();
  if(this.setting==2)
  {
    this.recoverSize();
    this.symmetry();
  }
  this.initialize();
  if(this.letterType ==2)
    this.nextLetter.changeWeight(weight);
};
//ㄷ
changeWeightArray.e = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[1].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y; /// /2
    this.outlineData[0].values[1] = this.boneData[1].values[1] + weight * (80 / 50) / 3 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * ((39 / 50) / 2)) * contrast_x;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * (80 / 50) * (2 / 3) * contrast_x;

    this.outlineData[3].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_y; /// /2
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[2].values[1] + (weight * ((80 / 50) * (2 / 3))) * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[1].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[1].values[0];
    this.outlineData[6].values[1] = this.boneData[2].values[1] - (weight * ((80 / 50) / 3)) * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[0].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.boneOutputData[0].values[0] = this.boneData[1].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y * centerLine/120;
    this.boneOutputData[0].values[1] = (this.outlineData[0].values[1] + this.outlineData[2].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * ((39 / 50) / 2)) * contrast_x*centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = (this.outlineData[0].values[1] + this.outlineData[2].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_y *centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 + (weight * (40 / 50) ) * contrast_x * centerLine/120;

    this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[6].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 - (weight * (40 / 50) ) * contrast_x * centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];
    //1:1 로 해본거
    // this.outlineData[0].values[0] = this.boneData[1].values[0] - ( weight  * 39 / 50) * contrast_y; /// /2
    // this.outlineData[0].values[1] = this.boneData[1].values[1] + weight * (40 / 50)  * contrast_x;
    //
    // this.outlineData[1].values[0] = this.boneData[0].values[0] + ( weight * (39 / 50)/2) * contrast_x;
    // this.outlineData[1].values[1] = this.outlineData[0].values[1];
    //
    // this.outlineData[2].values[0] = this.outlineData[1].values[0];
    // this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * (40 / 50) *  contrast_x;
    //
    // this.outlineData[3].values[0] = this.boneData[1].values[0] + (weight * 39 / 50) * contrast_y; /// /2
    // this.outlineData[3].values[1] = this.outlineData[2].values[1];
    //
    // this.outlineData[4].values[0] = this.outlineData[3].values[0];
    // this.outlineData[4].values[1] = this.boneData[2].values[1] + (weight * (40 / 50) ) * contrast_x;
    //
    // this.outlineData[5].values[0] = this.outlineData[1].values[0];
    // this.outlineData[5].values[1] = this.outlineData[4].values[1];
    //
    // this.outlineData[6].values[0] = this.outlineData[1].values[0];
    // this.outlineData[6].values[1] = this.boneData[2].values[1] - (weight * (40 / 50) )* contrast_x;
    //
    // this.outlineData[7].values[0] = this.outlineData[0].values[0];
    // this.outlineData[7].values[1] = this.outlineData[6].values[1];
    //
    // this.boneOutputData[0].values[0] = this.boneData[1].values[0] - ( weight  * 39 / 50) * contrast_y * centerLine/120; /// /2
    // this.boneOutputData[0].values[1] = this.boneData[1].values[1] + weight * (40 / 50)  * contrast_x * centerLine/120;
    //
    // this.boneOutputData[1].values[0] = this.boneData[0].values[0] + ( weight * (39 / 50)/2) * contrast_x * centerLine/120;
    // this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];
    //
    // this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    // this.boneOutputData[2].values[1] = this.boneData[0].values[1] - weight * (40 / 50) *  contrast_x * centerLine/120;
    //
    // this.boneOutputData[3].values[0] = this.boneData[1].values[0] + (weight * 39 / 50) * contrast_y * centerLine/120; /// /2
    // this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];
    //
    // this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    // this.boneOutputData[4].values[1] = this.boneData[2].values[1] + (weight * (40 / 50) ) * contrast_x * centerLine/120;
    //
    // this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    // this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];
    //
    // this.boneOutputData[6].values[0] = this.boneOutputData[1].values[0];
    // this.boneOutputData[6].values[1] = this.boneData[2].values[1] - (weight * (40 / 50) )* contrast_x * centerLine/120;
    //
    // this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    // this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];
    //
    // this.boneOutputData[0].values[0] = this.boneData[1].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y * centerLine/120;
    // this.boneOutputData[0].values[1] = (this.outlineData[0].values[1] + this.outlineData[2].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;
    //
    // this.boneOutputData[1].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * ((39 / 50) / 2)) * contrast_x*centerLine/120;
    // this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];
    //
    // this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    // this.boneOutputData[2].values[1] = (this.outlineData[0].values[1] + this.outlineData[2].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;
    //
    // this.boneOutputData[3].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_y *centerLine/120;
    // this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];
    //
    // this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    // this.boneOutputData[4].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 + (weight * (40 / 50) ) * contrast_x * centerLine/120;
    //
    // this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    // this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];
    //
    // this.boneOutputData[6].values[0] = this.boneOutputData[1].values[0];
    // this.boneOutputData[6].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 - (weight * (40 / 50) ) * contrast_x * centerLine/120;
    //
    // this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    // this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];//무쓸모
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);

};

//ㄹ
changeWeightArray.f = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * (80 / 50) / 3 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1] - (39 + (weight - 50) * ((39 / 50))) * contrast_x;

    this.outlineData[3].values[0] = this.boneData[3].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[4].values[1] + (weight * ((80 / 50) * (2 / 3))) * contrast_x;

    this.outlineData[5].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_x;
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.boneData[5].values[1] - (weight * ((80 / 50) / 3)) * contrast_x;

    this.outlineData[7].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[7].values[0];
    this.outlineData[8].values[1] = this.boneData[3].values[1] + (weight) * (39 / 50) * contrast_x;

    this.outlineData[9].values[0] = this.boneData[2].values[0] - (39 + (weight - 50) * ((39 / 50))) * contrast_y;
    this.outlineData[9].values[1] = this.outlineData[8].values[1];

    this.outlineData[10].values[0] = this.outlineData[9].values[0];
    this.outlineData[10].values[1] = this.boneData[1].values[1] - weight * (80 / 50) * 2 / 3 * contrast_x;

    this.outlineData[11].values[0] = this.outlineData[0].values[0];
    this.outlineData[11].values[1] = this.outlineData[10].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_x*centerLine/120;
    this.boneOutputData[0].values[1] = (this.outlineData[0].values[1] + this.outlineData[11].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y*centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[2].values[1] - (39 + (weight - 50) * ((39 / 50))) * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y*centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[5].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_x*centerLine/120;
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[7].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y*centerLine/120;
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[8].values[1] = this.boneData[3].values[1] + (weight) * (39 / 50) * contrast_x*centerLine/120;

    this.boneOutputData[9].values[0] =  this.boneData[1].values[0] - (39 + (weight - 50) * ((39 / 50))) * contrast_y*centerLine/120;
    this.boneOutputData[9].values[1] = this.boneOutputData[8].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[9].values[0];
    this.boneOutputData[10].values[1] = (this.outlineData[0].values[1] + this.outlineData[11].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[11].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);


};

//ㅁ
changeWeightArray.a = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * (80 / 50) / 3  * contrast_x;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1] - weight * (80 / 50) / 3 * contrast_x;

    this.outlineData[3].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[4].values[1] = this.boneData[2].values[1] + weight * (80 / 50) * 2 / 3 * contrast_x;

    this.outlineData[5].values[0] = this.boneData[1].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.boneData[0].values[1] - weight * (80 / 50) * 2 / 3 * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[4].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[3].values[0];
    this.outlineData[8].values[1] = this.outlineData[3].values[1];

    this.outlineData[9].values[0] = this.outlineData[0].values[0];
    this.outlineData[9].values[1] = this.outlineData[2].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y*centerLine/120;
    this.boneOutputData[0].values[1] = (this.outlineData[0].values[1] + this.outlineData[7].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y*centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = (this.outlineData[2].values[1] + this.outlineData[5].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * 39 / 50) * contrast_y*centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = (this.outlineData[2].values[1] + this.outlineData[5].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[5].values[0] = this.boneData[1].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y*centerLine/120;
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = (this.outlineData[0].values[1] + this.outlineData[7].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[8].values[1] = this.boneOutputData[3].values[1];

    this.boneOutputData[9].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[9].values[1] = this.boneOutputData[2].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);


};

//ㅂ
changeWeightArray.q = function(weight) { //ㅂ
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] -(39 + (weight - 50) * 39 / 50)  * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1] +(39 + (weight - 50) * 39 / 50)  * contrast_y;

    this.outlineData[1].values[0] = this.boneData[0].values[0] +(39 + (weight - 50) * 39 / 50)  * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[4].values[1] + weight * (80 / 50) * (2 / 3) * contrast_x;

    this.outlineData[3].values[0] = this.boneData[3].values[0] -(39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.outlineData[0].values[1];

    this.outlineData[5].values[0] = this.boneData[3].values[0] +(39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.boneData[2].values[1] - (weight * ((80 / 50) / 3)) * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[1].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[1].values[0];
    this.outlineData[8].values[1] = this.boneData[2].values[1] + (weight * ((80 / 50) * 2 / 3)) * contrast_x;

    this.outlineData[9].values[0] = this.outlineData[3].values[0];
    this.outlineData[9].values[1] = this.outlineData[8].values[1];

    this.outlineData[10].values[0] = this.outlineData[3].values[0];
    this.outlineData[10].values[1] = this.boneData[4].values[1] - (weight * ((80 / 50) / 3)) * contrast_x;

    this.outlineData[11].values[0] = this.outlineData[1].values[0];
    this.outlineData[11].values[1] = this.outlineData[10].values[1];

    this.outlineData[12].values[0] = this.outlineData[7].values[0];
    this.outlineData[12].values[1] = this.outlineData[7].values[1];

    this.outlineData[13].values[0] = this.outlineData[0].values[0];
    this.outlineData[13].values[1] = this.outlineData[6].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] -(39 +  (weight - 50) * 39 / 50)  * contrast_y *centerLine /120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] +(39 + (weight - 50) * 39 / 50)  * contrast_y *centerLine /120;

    this.boneOutputData[1].values[0] = this.boneData[0].values[0] +(39 +  (weight - 50) * 39 / 50)  * contrast_y *centerLine /120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = (this.outlineData[2].values[1] + this.outlineData[11].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[3].values[0] -(39 + (weight - 50) * 39 / 50) * contrast_y*centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[5].values[0] = this.boneData[3].values[0] +(39 + (weight - 50) * 39 / 50) * contrast_y*centerLine/120;
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = (this.outlineData[6].values[1] + this.outlineData[8].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[8].values[1] = (this.outlineData[6].values[1] + this.outlineData[9].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[9].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[9].values[1] = this.boneOutputData[8].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[10].values[1] = (this.outlineData[2].values[1] + this.outlineData[11].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[11].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];

    this.boneOutputData[12].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[12].values[1] = this.boneOutputData[7].values[1];

    this.boneOutputData[13].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[13].values[1] = this.boneOutputData[6].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅅ
changeWeightArray.t= function(weight){
   this.weight = weight;
  //  this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)* contrast_y;
  //  this.outlineData[0].values[1] = this.boneData[0].values[1] + (weight * (10.3 / 50) - (weight-50)*(78/50)/2)* contrast_y;
   //
  //  this.outlineData[1].values[0] = this.boneData[1].values[0];
  //  this.outlineData[1].values[1] = this.boneData[1].values[1] + (weight * (58.7 / 50) - (weight-50)*(78/50)/2) *zz;
   //
  //  this.outlineData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)* contrast_x;
  //  this.outlineData[2].values[1] = this.boneData[2].values[1] + (weight * (10.3 / 50) - (weight-50)*(78/50)/2)* contrast_x;
   //
  //  this.outlineData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)* contrast_x;
  //  this.outlineData[3].values[1] = this.boneData[2].values[1] - (weight * (20.7 / 50) + (weight-50)*(78/50)/2)* contrast_x;
   //
  //  this.outlineData[4].values[0] = this.boneData[1].values[0];
  //  this.outlineData[4].values[1] = this.boneData[1].values[1] - (weight * (117.4 / 50) + (weight-50)*(78/50)/2)*zz;
   //
  //  this.outlineData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)* contrast_y;
  //  this.outlineData[5].values[1] = this.boneData[0].values[1] - (weight * (20.7 / 50) + (weight-50)*(78/50)/2)* contrast_y;


  this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)* contrast_y;
  this.outlineData[0].values[1] = this.boneData[0].values[1] + ((weight-50) * (10.3 / 50)+10.3 )* contrast_y;

  this.outlineData[1].values[0] = this.boneData[1].values[0];// - weight * (47.3 / 50)* (contrast_x-1);
  this.outlineData[1].values[1] = this.boneData[1].values[1] + ((weight-50)  * (19.7 / 50)+19.7 );// *zz;

  this.outlineData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)* contrast_x;
  this.outlineData[2].values[1] = this.boneData[2].values[1] + ((weight-50)  * (10.3 / 50)+10.3)* contrast_x;

  this.outlineData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)* contrast_x;
  this.outlineData[3].values[1] = this.boneData[2].values[1] - ((weight-50)  * (20.7 / 50)+20.7 )* contrast_x;

  this.outlineData[4].values[0] = this.boneData[1].values[0] - weight * (47.3 / 50)* (contrast_x-1);
  this.outlineData[4].values[1] = this.boneData[1].values[1] - ((weight-50)  * (117.4 / 50)+117.4 );//*zz;

  this.outlineData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)* contrast_y;
  this.outlineData[5].values[1] = this.boneData[0].values[1] - ((weight-50)  * (20.7 / 50) +20.7)* contrast_y;


  this.boneData[0].values[1] = this.initialBoneData.y[0] + (weight-50)*(78/50)/2;
  this.boneData[2].values[1] = this.initialBoneData.y[2] + (weight-50)*(78/50)/2;


  this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)* contrast_y*centerLine /120;
  this.boneOutputData[0].values[1] = this.boneData[0].values[1] + ((weight-50) * (10.3 / 50)+10.3 )* contrast_y*centerLine /120;

  this.boneOutputData[1].values[0] = this.boneData[1].values[0];// - weight * (47.3 / 50)* (contrast_x-1);
  this.boneOutputData[1].values[1] = this.boneData[1].values[1] + ((weight-50)  * (19.7 / 50)+19.7 )*centerLine /120;// *zz;

  this.boneOutputData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)* contrast_x*centerLine /120;
  this.boneOutputData[2].values[1] = this.boneData[2].values[1] + ((weight-50)  * (10.3 / 50)+10.3)* contrast_x*centerLine /120;

  this.boneOutputData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)* contrast_x*centerLine /120;
  this.boneOutputData[3].values[1] = this.boneData[2].values[1] - ((weight-50)  * (20.7 / 50)+20.7 )* contrast_x*centerLine /120;

  this.boneOutputData[4].values[0] = this.boneData[1].values[0] - weight * (47.3 / 50)* (contrast_x-1)*centerLine /120;
  this.boneOutputData[4].values[1] = this.boneData[1].values[1] - ((weight-50)  * (117.4 / 50)+117.4 )*centerLine /120;//*zz;

  this.boneOutputData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)* contrast_y*centerLine /120;
  this.boneOutputData[5].values[1] = this.boneData[0].values[1] - ((weight-50)  * (20.7 / 50) +20.7)* contrast_y*centerLine /120;
   this.symmetry();
   this.setSize();
   if(this.setting==2)
   {
     this.recoverSize();
     this.symmetry();
   }
   this.initialize();
  if(this.letterType ==2)
    this.nextLetter.changeWeight(weight);
};

//ㅇ
changeWeightArray.d= function(weight){
  this.weight = weight;

var CtrlPntRate = (this.boneData[1].values[0]-this.boneData[0].values[0])/(this.boneData[1].values[4]-this.boneData[0].values[0]);
this.outlineData[0].values[0] = this.boneData[0].values[0];
this.outlineData[0].values[1] = this.boneData[0].values[1] - weight * 39/50* contrast_x;

this.outlineData[1].values[4] = this.boneData[1].values[4] + weight * 39/50* contrast_y;
this.outlineData[1].values[5] = this.boneData[1].values[5];
this.outlineData[1].values[0] = this.outlineData[0].values[0]+(this.outlineData[1].values[4] - this.outlineData[0].values[0])*CtrlPntRate;
this.outlineData[1].values[1] = this.outlineData[0].values[1];
this.outlineData[1].values[2] = this.outlineData[1].values[4];
this.outlineData[1].values[3] = this.outlineData[1].values[5]+(this.outlineData[0].values[1] - this.outlineData[1].values[5])*CtrlPntRate;
this.outlineData[2].values[4] = this.boneData[2].values[4];
this.outlineData[2].values[5] = this.boneData[2].values[5] + weight * 39/50* contrast_x;
this.outlineData[2].values[0] = this.outlineData[1].values[4];
this.outlineData[2].values[1] = this.outlineData[1].values[5]-(this.outlineData[0].values[1] - this.outlineData[1].values[5])*CtrlPntRate;
this.outlineData[2].values[2] = this.outlineData[1].values[0];
this.outlineData[2].values[3] = this.outlineData[2].values[5];
this.outlineData[3].values[0] = this.outlineData[2].values[4]-(this.outlineData[1].values[4] - this.outlineData[0].values[0])*CtrlPntRate;
this.outlineData[3].values[1] = this.outlineData[2].values[5];
this.outlineData[3].values[4] = this.boneData[3].values[4] - weight * 39/50* contrast_y;
this.outlineData[3].values[5] = this.boneData[3].values[5];
this.outlineData[3].values[2] = this.outlineData[3].values[4];
this.outlineData[3].values[3] = this.outlineData[2].values[1];
this.outlineData[4].values[0] = this.outlineData[3].values[4];
this.outlineData[4].values[1] = this.outlineData[1].values[3];
this.outlineData[4].values[2] = this.outlineData[3].values[0];
this.outlineData[4].values[3] = this.outlineData[0].values[1];
this.outlineData[4].values[4] = this.outlineData[0].values[0];
this.outlineData[4].values[5] = this.outlineData[0].values[1];

this.outlineData[5].values[0] = this.boneData[0].values[0];
this.outlineData[5].values[1] = this.boneData[0].values[1] + weight * 39/50* contrast_x;
this.outlineData[6].values[4] = this.boneData[3].values[4] + weight * 39/50* contrast_y;
this.outlineData[6].values[5] = this.boneData[3].values[5];
this.outlineData[6].values[0] = this.outlineData[5].values[0]+(this.outlineData[6].values[4] - this.outlineData[5].values[0])*CtrlPntRate;
this.outlineData[6].values[1] = this.outlineData[5].values[1];
this.outlineData[6].values[2] = this.outlineData[6].values[4];
this.outlineData[6].values[3] = this.outlineData[6].values[5]+(this.outlineData[5].values[1] - this.outlineData[6].values[5])*CtrlPntRate;
this.outlineData[7].values[4] = this.boneData[2].values[4];
this.outlineData[7].values[5] = this.boneData[2].values[5] - weight * 39/50* contrast_x;
this.outlineData[7].values[0] = this.outlineData[6].values[4];
this.outlineData[7].values[1] = this.outlineData[6].values[5]-(this.outlineData[5].values[1] - this.outlineData[6].values[5])*CtrlPntRate;
this.outlineData[7].values[2] = this.outlineData[6].values[0];
this.outlineData[7].values[3] = this.outlineData[7].values[5];
this.outlineData[8].values[0] = this.outlineData[7].values[4]-(this.outlineData[6].values[4] - this.outlineData[5].values[0])*CtrlPntRate;
this.outlineData[8].values[1] = this.outlineData[7].values[5];
this.outlineData[8].values[4] = this.boneData[1].values[4] - weight * 39/50* contrast_y;
this.outlineData[8].values[5] = this.boneData[1].values[5];
this.outlineData[8].values[2] = this.outlineData[8].values[4];
this.outlineData[8].values[3] = this.outlineData[7].values[1];
this.outlineData[9].values[0] = this.outlineData[8].values[4];
this.outlineData[9].values[1] = this.outlineData[6].values[3];
this.outlineData[9].values[2] = this.outlineData[8].values[0];
this.outlineData[9].values[3] = this.outlineData[5].values[1];
this.outlineData[9].values[4] = this.outlineData[5].values[0];
this.outlineData[9].values[5] = this.outlineData[5].values[1];


this.boneOutputData[0].values[0] = this.boneData[0].values[0];
this.boneOutputData[0].values[1] = this.boneData[0].values[1] - weight * 39/50*centerLine /120* contrast_x;

this.boneOutputData[1].values[4] = this.boneData[1].values[4] + weight * 39/50*centerLine /120* contrast_y;
this.boneOutputData[1].values[5] = this.boneData[1].values[5];
this.boneOutputData[1].values[0] = this.boneOutputData[0].values[0]+(this.boneOutputData[1].values[4] - this.boneOutputData[0].values[0])*CtrlPntRate;
this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];
this.boneOutputData[1].values[2] = this.boneOutputData[1].values[4];
this.boneOutputData[1].values[3] = this.boneOutputData[1].values[5]+(this.boneOutputData[0].values[1] - this.boneOutputData[1].values[5])*CtrlPntRate;
this.boneOutputData[2].values[4] = this.boneData[2].values[4];
this.boneOutputData[2].values[5] = this.boneData[2].values[5] + weight * 39/50*centerLine /120* contrast_x;
this.boneOutputData[2].values[0] = this.boneOutputData[1].values[4];
this.boneOutputData[2].values[1] = this.boneOutputData[1].values[5]-(this.boneOutputData[0].values[1] - this.boneOutputData[1].values[5])*CtrlPntRate;
this.boneOutputData[2].values[2] = this.boneOutputData[1].values[0];
this.boneOutputData[2].values[3] = this.boneOutputData[2].values[5];
this.boneOutputData[3].values[0] = this.boneOutputData[2].values[4]-(this.boneOutputData[1].values[4] - this.boneOutputData[0].values[0])*CtrlPntRate;
this.boneOutputData[3].values[1] = this.boneOutputData[2].values[5];
this.boneOutputData[3].values[4] = this.boneData[3].values[4] - weight * 39/50*centerLine /120* contrast_y;
this.boneOutputData[3].values[5] = this.boneData[3].values[5];
this.boneOutputData[3].values[2] = this.boneOutputData[3].values[4];
this.boneOutputData[3].values[3] = this.boneOutputData[2].values[1];
this.boneOutputData[4].values[0] = this.boneOutputData[3].values[4];
this.boneOutputData[4].values[1] = this.boneOutputData[1].values[3];
this.boneOutputData[4].values[2] = this.boneOutputData[3].values[0];
this.boneOutputData[4].values[3] = this.boneOutputData[0].values[1];
this.boneOutputData[4].values[4] = this.boneOutputData[0].values[0];
this.boneOutputData[4].values[5] = this.boneOutputData[0].values[1];

this.boneOutputData[5].values[0] = this.boneData[0].values[0];
this.boneOutputData[5].values[1] = this.boneData[0].values[1] + weight * 39/50*centerLine /120* contrast_x;
this.boneOutputData[6].values[4] = this.boneData[3].values[4] + weight * 39/50*centerLine /120* contrast_y;
this.boneOutputData[6].values[5] = this.boneData[3].values[5];
this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0]+(this.boneOutputData[6].values[4] - this.boneOutputData[5].values[0])*CtrlPntRate;
this.boneOutputData[6].values[1] = this.boneOutputData[5].values[1];
this.boneOutputData[6].values[2] = this.boneOutputData[6].values[4];
this.boneOutputData[6].values[3] = this.boneOutputData[6].values[5]+(this.boneOutputData[5].values[1] - this.boneOutputData[6].values[5])*CtrlPntRate;
this.boneOutputData[7].values[4] = this.boneData[2].values[4];
this.boneOutputData[7].values[5] = this.boneData[2].values[5] - weight * 39/50*centerLine /120* contrast_x;
this.boneOutputData[7].values[0] = this.boneOutputData[6].values[4];
this.boneOutputData[7].values[1] = this.boneOutputData[6].values[5]-(this.boneOutputData[5].values[1] - this.boneOutputData[6].values[5])*CtrlPntRate;
this.boneOutputData[7].values[2] = this.boneOutputData[6].values[0];
this.boneOutputData[7].values[3] = this.boneOutputData[7].values[5];
this.boneOutputData[8].values[0] = this.boneOutputData[7].values[4]-(this.boneOutputData[6].values[4] - this.boneOutputData[5].values[0])*CtrlPntRate;
this.boneOutputData[8].values[1] = this.boneOutputData[7].values[5];
this.boneOutputData[8].values[4] = this.boneData[1].values[4] - weight * 39/50*centerLine /120* contrast_y;
this.boneOutputData[8].values[5] = this.boneData[1].values[5];
this.boneOutputData[8].values[2] = this.boneOutputData[8].values[4];
this.boneOutputData[8].values[3] = this.boneOutputData[7].values[1];
this.boneOutputData[9].values[0] = this.boneOutputData[8].values[4];
this.boneOutputData[9].values[1] = this.boneOutputData[6].values[3];
this.boneOutputData[9].values[2] = this.boneOutputData[8].values[0];
this.boneOutputData[9].values[3] = this.boneOutputData[5].values[1];
this.boneOutputData[9].values[4] = this.boneOutputData[5].values[0];
this.boneOutputData[9].values[5] = this.boneOutputData[5].values[1];


  this.symmetry();
  this.setSize();
  if(this.setting==2)
  {
    this.recoverSize();
    this.symmetry();
  }
  this.initialize();
  if(this.letterType ==2)
    this.nextLetter.changeWeight(weight);
};

changeWeightArray.w = function(weight){
  this.weight = weight;

  this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)* contrast_y;
   this.outlineData[0].values[1] = this.boneData[0].values[1] + ((weight-50) * (10.3 / 50)+10.3 )* contrast_y;

   this.outlineData[1].values[0] = this.boneData[1].values[0];
   this.outlineData[1].values[1] = this.boneData[1].values[1] + ((weight-50)  * (19.7 / 50)+19.7 );// *zz;

   this.outlineData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)* contrast_x;
   this.outlineData[2].values[1] = this.boneData[2].values[1] + ((weight-50)  * (10.3 / 50)+10.3)* contrast_x;

   this.outlineData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)* contrast_x;
   this.outlineData[3].values[1] = this.boneData[2].values[1] - ((weight-50)  * (20.7 / 50)+20.7 )* contrast_x;

   this.outlineData[4].values[0] = this.boneData[1].values[0] - weight * (47.3 / 50)* (contrast_x-1);
   this.outlineData[4].values[1] = this.boneData[1].values[1] - ((weight-50)  * (117.4 / 50)+117.4 );//*zz;

   this.outlineData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)* contrast_y;
   this.outlineData[5].values[1] = this.boneData[0].values[1] - ((weight-50)  * (20.7 / 50) +20.7)* contrast_y;

  this.outlineData[6].values[0] = this.boneData[0].values[0] - (weight) * (23.7 / 50) * contrast_y;
  this.outlineData[6].values[1] = this.boneData[0].values[1] + (weight) * (10.3 / 50) * contrast_y;//- (weight-50)*(78/50)/2 ;

  this.outlineData[7].values[0] = this.boneData[3].values[0] - weight * (43 / 50)* contrast_x;
  this.outlineData[7].values[1] = this.boneData[3].values[1] + ((weight)) * (33.3 / 50)* contrast_x;//- (weight-50)*(78/50)/2 ;

  this.outlineData[8].values[0] = this.boneData[4].values[0] + (weight) * (43 / 50)* contrast_x;
  this.outlineData[8].values[1] = this.boneData[4].values[1] + (weight) * (33.3 / 50)* contrast_x;//- (weight-50)*(78/50)/2 ;

  this.outlineData[9].values[0] = this.boneData[4].values[0] + (weight) * (43 / 50)* contrast_x;
  this.outlineData[9].values[1] = this.boneData[4].values[1] - (weight) * (33.3 / 50)* contrast_x;//- (weight-50)*(78/50)/2 ;

  this.outlineData[10].values[0] = this.boneData[3].values[0] - weight * (43 / 50)* contrast_x;
  this.outlineData[10].values[1] = this.boneData[3].values[1] - weight * (33.3 / 50)* contrast_x;//- (weight-50)*(78/50)/2 ;




this.boneData[0].values[1] = this.initialBoneData.y[0] + (weight-50)*(78/50)/2;
   this.boneData[2].values[1] = this.initialBoneData.y[2] + (weight-50)*(78/50)/2;


   this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)* contrast_y*centerLine /120;
   this.boneOutputData[0].values[1] = this.boneData[0].values[1] + ((weight-50) * (10.3 / 50)+10.3 )* contrast_y*centerLine /120;

   this.boneOutputData[1].values[0] = this.boneData[1].values[0];// - weight * (47.3 / 50)* (contrast_x-1);
   this.boneOutputData[1].values[1] = this.boneData[1].values[1] + ((weight-50)  * (19.7 / 50)+19.7 )*centerLine /120;// *zz;

   this.boneOutputData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)* contrast_x*centerLine /120;
   this.boneOutputData[2].values[1] = this.boneData[2].values[1] + ((weight-50)  * (10.3 / 50)+10.3)* contrast_x*centerLine /120;

   this.boneOutputData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)* contrast_x*centerLine /120;
   this.boneOutputData[3].values[1] = this.boneData[2].values[1] - ((weight-50)  * (20.7 / 50)+20.7 )* contrast_x*centerLine /120;

   this.boneOutputData[4].values[0] = this.boneData[1].values[0] - weight * (47.3 / 50)* (contrast_x-1)*centerLine /120;
   this.boneOutputData[4].values[1] = this.boneData[1].values[1] - ((weight-50)  * (117.4 / 50)+117.4 )*centerLine /120;//*zz;

   this.boneOutputData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)* contrast_y*centerLine /120;
   this.boneOutputData[5].values[1] = this.boneData[0].values[1] - ((weight-50)  * (20.7 / 50) +20.7)* contrast_y*centerLine /120;


this.boneOutputData[6].values[0] = this.boneData[0].values[0] - (weight) * (23.7 / 50)*centerLine /120* contrast_y;
this.boneOutputData[6].values[1] = this.boneData[0].values[1] + (weight) * (10.3 / 50)*centerLine /120* contrast_y;//- (weight-50)*(78/50)/2 ;

this.boneOutputData[7].values[0] = this.boneData[3].values[0] - weight * (43 / 50)*centerLine /120* contrast_x;
this.boneOutputData[7].values[1] = this.boneData[3].values[1] + ((weight)) * (33.3 / 50)*centerLine /120* contrast_x;//- (weight-50)*(78/50)/2 ;

this.boneOutputData[8].values[0] = this.boneData[4].values[0] + (weight) * (43 / 50)*centerLine /120* contrast_x;
this.boneOutputData[8].values[1] = this.boneData[4].values[1] + (weight) * (33.3 / 50)*centerLine /120* contrast_x;//- (weight-50)*(78/50)/2 ;

this.boneOutputData[9].values[0] = this.boneData[4].values[0] + (weight) * (43 / 50)*centerLine /120* contrast_x;
this.boneOutputData[9].values[1] = this.boneData[4].values[1] - (weight) * (33.3 / 50)*centerLine /120* contrast_x;//- (weight-50)*(78/50)/2 ;

this.boneOutputData[10].values[0] = this.boneData[3].values[0] - weight * (43 / 50)*centerLine /120* contrast_x;
this.boneOutputData[10].values[1] = this.boneData[3].values[1] - weight * (33.3 / 50)*centerLine /120* contrast_x;//- (weight-50)*(78/50)/2 ;

this.symmetry();
this.setSize();
if(this.setting==2)
{
  this.recoverSize();
  this.symmetry();
}
this.initialize();
  if(this.letterType ==2)
    this.nextLetter.changeWeight(weight);
};

changeWeightArray.c = function(weight){
  this.weight = weight;

  this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)* contrast_y;
   this.outlineData[0].values[1] = this.boneData[0].values[1] + ((weight-50) * (10.3 / 50)+10.3 )* contrast_y;

   this.outlineData[1].values[0] = this.boneData[1].values[0];
   this.outlineData[1].values[1] = this.boneData[1].values[1] + ((weight-50)  * (19.7 / 50)+19.7 );// *zz;

   this.outlineData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)* contrast_x;
   this.outlineData[2].values[1] = this.boneData[2].values[1] + ((weight-50)  * (10.3 / 50)+10.3)* contrast_x;

   this.outlineData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)* contrast_x;
   this.outlineData[3].values[1] = this.boneData[2].values[1] - ((weight-50)  * (20.7 / 50)+20.7 )* contrast_x;

   this.outlineData[4].values[0] = this.boneData[1].values[0] - weight * (47.3 / 50)* (contrast_x-1);
   this.outlineData[4].values[1] = this.boneData[1].values[1] - ((weight-50)  * (117.4 / 50)+117.4 );//*zz;

   this.outlineData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)* contrast_y;
   this.outlineData[5].values[1] = this.boneData[0].values[1] - ((weight-50)  * (20.7 / 50) +20.7)* contrast_y;

  this.outlineData[6].values[0] = this.boneData[0].values[0] - (weight) * (23.7 / 50) * contrast_y;
  this.outlineData[6].values[1] = this.boneData[0].values[1] + (weight) * (10.3 / 50) * contrast_y;//- (weight-50)*(78/50)/2 ;

  this.outlineData[7].values[0] = this.boneData[3].values[0] - weight * (43 / 50)* contrast_x;
  this.outlineData[7].values[1] = this.boneData[3].values[1] + weight * (36.3 / 50)* contrast_x;

  this.outlineData[8].values[0] = this.boneData[4].values[0] + weight * (43 / 50)* contrast_x;
  this.outlineData[8].values[1] = this.boneData[4].values[1] + weight * (36.3 / 50)* contrast_x;

  this.outlineData[9].values[0] = this.boneData[4].values[0] + weight * (43 / 50)* contrast_x;
  this.outlineData[9].values[1] = this.boneData[4].values[1] - weight * (26.7 / 50)* contrast_x;

  this.outlineData[10].values[0] = this.boneData[3].values[0] - weight * (43 / 50)* contrast_x;
  this.outlineData[10].values[1] = this.boneData[3].values[1] - weight * (26.7 / 50)* contrast_x;

  this.outlineData[11].values[0] = this.boneData[5].values[0] - weight * (37.5 / 50)* contrast_x;
  this.outlineData[11].values[1] = this.boneData[5].values[1] + weight * (31.5 / 50)* contrast_x;

  this.outlineData[12].values[0] = this.boneData[6].values[0] + weight * (37.5 / 50)* contrast_x;
  this.outlineData[12].values[1] = this.boneData[6].values[1] + weight * (31.5 / 50)* contrast_x;

  this.outlineData[13].values[0] = this.boneData[6].values[0] + weight * (37.5 / 50)* contrast_x;
  this.outlineData[13].values[1] = this.boneData[6].values[1] - weight * (31.5 / 50)* contrast_x;

  this.outlineData[14].values[0] = this.boneData[5].values[0] - weight * (37.5 / 50)* contrast_x;
  this.outlineData[14].values[1] = this.boneData[5].values[1] - weight * (31.5 / 50)* contrast_x;


  this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)*centerLine /120* contrast_y;
  this.boneOutputData[0].values[1] = this.boneData[0].values[1] + weight * (8.3 / 50)*centerLine /120* contrast_y;

  this.boneOutputData[1].values[0] = this.boneData[1].values[0];
  this.boneOutputData[1].values[1] = this.boneData[1].values[1] + weight * (47.3 / 50)*centerLine /120;

  this.boneOutputData[2].values[0] = this.boneData[2].values[0] + weight * (23.7 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[2].values[1] = this.boneData[2].values[1] + weight * (8.3 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[3].values[0] = this.boneData[2].values[0] - weight * (47.3 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[3].values[1] = this.boneData[2].values[1] - weight * (16.7 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[4].values[0] = this.boneData[1].values[0] - weight * (47.3 / 50)* (contrast_x-1)*centerLine /120;
  this.boneOutputData[4].values[1] = this.boneData[1].values[1] - ((weight-50)  * (117.4 / 50)+117.4 )*centerLine /120;

  this.boneOutputData[5].values[0] = this.boneData[0].values[0] + weight * (47.3 / 50)*centerLine /120* contrast_y;
  this.boneOutputData[5].values[1] = this.boneData[0].values[1] - ((weight-50)  * (20.7 / 50) +20.7)* contrast_y*centerLine /120;

  this.boneOutputData[6].values[0] = this.boneData[0].values[0] - weight * (23.7 / 50)*centerLine /120*contrast_y;
  this.boneOutputData[6].values[1] = this.boneData[0].values[1] + weight * (8.3 / 50)*centerLine /120*contrast_y;

  this.boneOutputData[7].values[0] = this.boneData[3].values[0] - weight * (43 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[7].values[1] = this.boneData[3].values[1] + weight * (36.3 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[8].values[0] = this.boneData[4].values[0] + weight * (43 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[8].values[1] = this.boneData[4].values[1] + weight * (36.3 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[9].values[0] = this.boneData[4].values[0] + weight * (43 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[9].values[1] = this.boneData[4].values[1] - weight * (26.7 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[10].values[0] = this.boneData[3].values[0] - weight * (43 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[10].values[1] = this.boneData[3].values[1] - weight * (26.7 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[11].values[0] = this.boneData[5].values[0] - weight * (37.5 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[11].values[1] = this.boneData[5].values[1] + weight * (31.5 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[12].values[0] = this.boneData[6].values[0] + weight * (37.5 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[12].values[1] = this.boneData[6].values[1] + weight * (31.5 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[13].values[0] = this.boneData[6].values[0] + weight * (37.5 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[13].values[1] = this.boneData[6].values[1] - weight * (31.5 / 50)*centerLine /120* contrast_x;

  this.boneOutputData[14].values[0] = this.boneData[5].values[0] - weight * (37.5 / 50)*centerLine /120* contrast_x;
  this.boneOutputData[14].values[1] = this.boneData[5].values[1] - weight * (31.5 / 50)*centerLine /120* contrast_x;
  this.symmetry();
  this.setSize();
  if(this.setting==2)
  {
    this.recoverSize();
    this.symmetry();
  }
  this.initialize();
  if(this.letterType ==2)
    this.nextLetter.changeWeight(weight);
};

//ㅌ
changeWeightArray.x = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[1].values[0] - (39 + (weight - 50) * 39 / 50) * contrast_y;
    this.outlineData[0].values[1] = this.boneData[1].values[1] + weight * (80 / 50) / 3 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[0].values[0] + (39 + (weight - 50) * ((39 / 50) / 2)) * contrast_x;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * (80 / 50) * (2 / 3) * contrast_x;

    this.outlineData[3].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[4].values[1] + (weight * ((39 / 50))) * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[1].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[1].values[0];
    this.outlineData[6].values[1] = this.boneData[5].values[1] - (weight * ((39 / 50))) * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[3].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[3].values[0];
    this.outlineData[8].values[1] = this.boneData[2].values[1] + (weight) * (80 / 50) * (2 / 3) * contrast_x;

    this.outlineData[9].values[0] = this.outlineData[1].values[0];
    this.outlineData[9].values[1] = this.outlineData[8].values[1];

    this.outlineData[10].values[0] = this.outlineData[1].values[0];
    this.outlineData[10].values[1] = this.boneData[3].values[1] - weight * (80 / 50) / 3 * contrast_x;

    this.outlineData[11].values[0] = this.outlineData[0].values[0];
    this.outlineData[11].values[1] = this.outlineData[10].values[1];

    this.boneOutputData[0].values[0] = this.boneData[1].values[0] -(39 +  (weight - 50) * 39 / 50)  * contrast_y *centerLine /120;
    this.boneOutputData[0].values[1] =(this.outlineData[0].values[1] + this.outlineData[3].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[1].values[0] =  this.boneData[0].values[0] + (39 + (weight - 50) * ((39 / 50) / 2)) * contrast_x*centerLine /120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = (this.outlineData[0].values[1] + this.outlineData[3].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y * centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneData[4].values[1] + (weight * ((39 / 50))) * contrast_x *centerLine/120;

    this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = this.boneData[4].values[1] - (weight * ((39 / 50))) * contrast_x *centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[8].values[1] = (this.outlineData[8].values[1] + this.outlineData[11].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[9].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[9].values[1] = this.boneOutputData[8].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[10].values[1] = (this.outlineData[8].values[1] + this.outlineData[11].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[11].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};


//ㅍ
changeWeightArray.v = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50 / 2) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * (80 / 50) / 3 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * ((39 / 50) / 2)) * contrast_x;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * (80 / 50) * (2 / 3) * contrast_x;

    this.outlineData[3].values[0] = this.boneData[6].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y; /// /2
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[3].values[1] + (weight * ((80 / 50) * (2 / 3))) * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[1].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[1].values[0];
    this.outlineData[6].values[1] = this.boneData[3].values[1] - (weight * ((80 / 50) / 3)) * contrast_x;

    this.outlineData[7].values[0] = this.boneData[4].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y; /// /2
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[7].values[0];
    this.outlineData[8].values[1] = this.outlineData[4].values[1];

    this.outlineData[9].values[0] = this.boneData[6].values[0] - (39 + (weight - 50) * ((39 / 50))) * contrast_y; /// /2
    this.outlineData[9].values[1] = this.outlineData[4].values[1];

    this.outlineData[10].values[0] = this.outlineData[9].values[0];
    this.outlineData[10].values[1] = this.outlineData[2].values[1];

    this.outlineData[11].values[0] = this.outlineData[7].values[0];
    this.outlineData[11].values[1] = this.outlineData[2].values[1];

    this.outlineData[12].values[0] = this.outlineData[7].values[0];
    this.outlineData[12].values[1] = this.outlineData[7].values[1];

    this.outlineData[13].values[0] = this.outlineData[0].values[0];
    this.outlineData[13].values[1] = this.outlineData[6].values[1];

    this.outlineData[14].values[0] = this.outlineData[0].values[0];
    this.outlineData[14].values[1] = this.outlineData[5].values[1];

    this.outlineData[15].values[0] = this.boneData[5].values[0] - (39 + (weight - 50) * ((39 / 50))) * contrast_y; /// /2
    this.outlineData[15].values[1] = this.outlineData[5].values[1];

    this.outlineData[16].values[0] = this.outlineData[15].values[0];
    this.outlineData[16].values[1] = this.outlineData[2].values[1];

    this.outlineData[17].values[0] = this.outlineData[0].values[0];
    this.outlineData[17].values[1] = this.outlineData[2].values[1];


    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50 / 2) * contrast_x *centerLine/120;
    this.boneOutputData[0].values[1] =(this.outlineData[0].values[1] + this.outlineData[17].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[1].values[0] + (39 + (weight - 50) * 39 / 50 / 2) * contrast_x *centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = (this.outlineData[0].values[1] + this.outlineData[17].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[6].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y *centerLine/120;// /2
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = (this.outlineData[4].values[1] + this.outlineData[6].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = (this.outlineData[4].values[1] + this.outlineData[6].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[7].values[0] = this.boneData[4].values[0] + (39 + (weight - 50) * ((39 / 50))) * contrast_y *centerLine/120; /// /2
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[8].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[9].values[0] = this.boneData[6].values[0] - (39 + (weight - 50) * ((39 / 50))) * contrast_y *centerLine/120; /// /2
    this.boneOutputData[9].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[9].values[0];
    this.boneOutputData[10].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[11].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];

    this.boneOutputData[12].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[12].values[1] = this.boneOutputData[7].values[1];

    this.boneOutputData[13].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[13].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[14].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[14].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[15].values[0] = this.boneData[5].values[0] - (39 + (weight - 50) * ((39 / 50))) * contrast_y *centerLine/120; /// /2
    this.boneOutputData[15].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[16].values[0] = this.boneOutputData[15].values[0];
    this.boneOutputData[16].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[17].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[17].values[1] = this.boneOutputData[2].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);


};

//ㅋ
changeWeightArray.z = function(weight) {
    this.weight = weight;

    this.outlineData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50 / 2) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + (weight * 78 / 50)* 1 / 3 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + weight * (80 / 50) / 3 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1] -( 40 + (weight - 50) * 40 / 50 / 2) * contrast_y;

    this.outlineData[3].values[0] = this.boneData[2].values[0] - (weight * (80 / 50 * 2 / 3)) * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[3].values[1] - (weight) * 78 / 50 * 2 / 3 * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[0].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[0].values[0];
    this.outlineData[6].values[1] = this.boneData[3].values[1] + (weight * 78 / 50)* 1 / 3 * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[3].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[3].values[0];
    this.outlineData[8].values[1] = this.boneData[1].values[1] - (weight) * 78 / 50 * 2 / 3 * contrast_x;

    this.outlineData[9].values[0] = this.outlineData[0].values[0];
    this.outlineData[9].values[1] = this.outlineData[8].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (39 + (weight - 50) * 39 / 50 / 2) * contrast_x *centerLine/120;
    this.boneOutputData[0].values[1] =(this.outlineData[0].values[1] + this.outlineData[9].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[1].values[0] = (this.outlineData[1].values[0] + this.outlineData[3].values[0])/2 + weight * (40 / 50) * contrast_y *centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[2].values[1] -( 40 + (weight - 50) * 40 / 50 / 2) * contrast_y *centerLine/120;

    this.boneOutputData[3].values[0] = (this.outlineData[1].values[0] + this.outlineData[3].values[0])/2 - weight * (40 / 50) * contrast_y *centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[5].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = (this.outlineData[4].values[1] + this.outlineData[7].values[1])/2 + weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[4].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[4].values[0];
    this.boneOutputData[8].values[1] =(this.outlineData[0].values[1] + this.outlineData[9].values[1])/2 - weight * (40 / 50) * contrast_x *centerLine/120;

    this.boneOutputData[9].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[9].values[1] = this.boneOutputData[8].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);


};

//  ㅎ
changeWeightArray.g = function(weight) {
  this.weight = weight;

    var CtrlPntRate = (this.boneData[1].values[0]-this.boneData[0].values[0])/(this.boneData[1].values[4]-this.boneData[0].values[0]);
    this.outlineData[0].values[0] = this.boneData[0].values[0];
  this.outlineData[0].values[1] = this.boneData[0].values[1] - weight * 39/50* contrast_x;

  this.outlineData[1].values[4] = this.boneData[1].values[4] + weight * 39/50* contrast_y;
  this.outlineData[1].values[5] = this.boneData[1].values[5];
  this.outlineData[1].values[0] = this.outlineData[0].values[0]+(this.outlineData[1].values[4] - this.outlineData[0].values[0])*CtrlPntRate;
  this.outlineData[1].values[1] = this.outlineData[0].values[1];
  this.outlineData[1].values[2] = this.outlineData[1].values[4];
  this.outlineData[1].values[3] = this.outlineData[1].values[5]+(this.outlineData[0].values[1] - this.outlineData[1].values[5])*CtrlPntRate;
  this.outlineData[2].values[4] = this.boneData[2].values[4];
  this.outlineData[2].values[5] = this.boneData[2].values[5] + weight * 39/50* contrast_x;
  this.outlineData[2].values[0] = this.outlineData[1].values[4];
  this.outlineData[2].values[1] = this.outlineData[1].values[5]-(this.outlineData[0].values[1] - this.outlineData[1].values[5])*CtrlPntRate;
  this.outlineData[2].values[2] = this.outlineData[1].values[0];
  this.outlineData[2].values[3] = this.outlineData[2].values[5];
  this.outlineData[3].values[0] = this.outlineData[2].values[4]-(this.outlineData[1].values[4] - this.outlineData[0].values[0])*CtrlPntRate;
  this.outlineData[3].values[1] = this.outlineData[2].values[5];
  this.outlineData[3].values[4] = this.boneData[3].values[4] - weight * 39/50* contrast_y;
  this.outlineData[3].values[5] = this.boneData[3].values[5];
  this.outlineData[3].values[2] = this.outlineData[3].values[4];
  this.outlineData[3].values[3] = this.outlineData[2].values[1];
  this.outlineData[4].values[0] = this.outlineData[3].values[4];
  this.outlineData[4].values[1] = this.outlineData[1].values[3];
  this.outlineData[4].values[2] = this.outlineData[3].values[0];
  this.outlineData[4].values[3] = this.outlineData[0].values[1];
  this.outlineData[4].values[4] = this.outlineData[0].values[0];
  this.outlineData[4].values[5] = this.outlineData[0].values[1];

  this.outlineData[5].values[0] = this.boneData[0].values[0];
  this.outlineData[5].values[1] = this.boneData[0].values[1] + weight * 39/50* contrast_x;
  this.outlineData[6].values[4] = this.boneData[3].values[4] + weight * 39/50* contrast_y;
  this.outlineData[6].values[5] = this.boneData[3].values[5];
  this.outlineData[6].values[0] = this.outlineData[5].values[0]+(this.outlineData[6].values[4] - this.outlineData[5].values[0])*CtrlPntRate;
  this.outlineData[6].values[1] = this.outlineData[5].values[1];
  this.outlineData[6].values[2] = this.outlineData[6].values[4];
  this.outlineData[6].values[3] = this.outlineData[6].values[5]+(this.outlineData[5].values[1] - this.outlineData[6].values[5])*CtrlPntRate;
  this.outlineData[7].values[4] = this.boneData[2].values[4];
  this.outlineData[7].values[5] = this.boneData[2].values[5] - weight * 39/50* contrast_x;
  this.outlineData[7].values[0] = this.outlineData[6].values[4];
  this.outlineData[7].values[1] = this.outlineData[6].values[5]-(this.outlineData[5].values[1] - this.outlineData[6].values[5])*CtrlPntRate;
  this.outlineData[7].values[2] = this.outlineData[6].values[0];
  this.outlineData[7].values[3] = this.outlineData[7].values[5];
  this.outlineData[8].values[0] = this.outlineData[7].values[4]-(this.outlineData[6].values[4] - this.outlineData[5].values[0])*CtrlPntRate;
  this.outlineData[8].values[1] = this.outlineData[7].values[5];
  this.outlineData[8].values[4] = this.boneData[1].values[4] - weight * 39/50* contrast_y;
  this.outlineData[8].values[5] = this.boneData[1].values[5];
  this.outlineData[8].values[2] = this.outlineData[8].values[4];
  this.outlineData[8].values[3] = this.outlineData[7].values[1];
  this.outlineData[9].values[0] = this.outlineData[8].values[4];
  this.outlineData[9].values[1] = this.outlineData[6].values[3];
  this.outlineData[9].values[2] = this.outlineData[8].values[0];
  this.outlineData[9].values[3] = this.outlineData[5].values[1];
  this.outlineData[9].values[4] = this.outlineData[5].values[0];
  this.outlineData[9].values[5] = this.outlineData[5].values[1];


  this.boneOutputData[0].values[0] = this.boneData[0].values[0];
  this.boneOutputData[0].values[1] = this.boneData[0].values[1] - weight * 39/50*centerLine /120* contrast_x;

  this.boneOutputData[1].values[4] = this.boneData[1].values[4] + weight * 39/50*centerLine /120* contrast_y;
  this.boneOutputData[1].values[5] = this.boneData[1].values[5];
  this.boneOutputData[1].values[0] = this.boneOutputData[0].values[0]+(this.boneOutputData[1].values[4] - this.boneOutputData[0].values[0])*CtrlPntRate;
  this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];
  this.boneOutputData[1].values[2] = this.boneOutputData[1].values[4];
  this.boneOutputData[1].values[3] = this.boneOutputData[1].values[5]+(this.boneOutputData[0].values[1] - this.boneOutputData[1].values[5])*CtrlPntRate;
  this.boneOutputData[2].values[4] = this.boneData[2].values[4];
  this.boneOutputData[2].values[5] = this.boneData[2].values[5] + weight * 39/50*centerLine /120* contrast_x;
  this.boneOutputData[2].values[0] = this.boneOutputData[1].values[4];
  this.boneOutputData[2].values[1] = this.boneOutputData[1].values[5]-(this.boneOutputData[0].values[1] - this.boneOutputData[1].values[5])*CtrlPntRate;
  this.boneOutputData[2].values[2] = this.boneOutputData[1].values[0];
  this.boneOutputData[2].values[3] = this.boneOutputData[2].values[5];
  this.boneOutputData[3].values[0] = this.boneOutputData[2].values[4]-(this.boneOutputData[1].values[4] - this.boneOutputData[0].values[0])*CtrlPntRate;
  this.boneOutputData[3].values[1] = this.boneOutputData[2].values[5];
  this.boneOutputData[3].values[4] = this.boneData[3].values[4] - weight * 39/50*centerLine /120* contrast_y;
  this.boneOutputData[3].values[5] = this.boneData[3].values[5];
  this.boneOutputData[3].values[2] = this.boneOutputData[3].values[4];
  this.boneOutputData[3].values[3] = this.boneOutputData[2].values[1];
  this.boneOutputData[4].values[0] = this.boneOutputData[3].values[4];
  this.boneOutputData[4].values[1] = this.boneOutputData[1].values[3];
  this.boneOutputData[4].values[2] = this.boneOutputData[3].values[0];
  this.boneOutputData[4].values[3] = this.boneOutputData[0].values[1];
  this.boneOutputData[4].values[4] = this.boneOutputData[0].values[0];
  this.boneOutputData[4].values[5] = this.boneOutputData[0].values[1];

  this.boneOutputData[5].values[0] = this.boneData[0].values[0];
  this.boneOutputData[5].values[1] = this.boneData[0].values[1] + weight * 39/50*centerLine /120* contrast_x;
  this.boneOutputData[6].values[4] = this.boneData[3].values[4] + weight * 39/50*centerLine /120* contrast_y;
  this.boneOutputData[6].values[5] = this.boneData[3].values[5];
  this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0]+(this.boneOutputData[6].values[4] - this.boneOutputData[5].values[0])*CtrlPntRate;
  this.boneOutputData[6].values[1] = this.boneOutputData[5].values[1];
  this.boneOutputData[6].values[2] = this.boneOutputData[6].values[4];
  this.boneOutputData[6].values[3] = this.boneOutputData[6].values[5]+(this.boneOutputData[5].values[1] - this.boneOutputData[6].values[5])*CtrlPntRate;
  this.boneOutputData[7].values[4] = this.boneData[2].values[4];
  this.boneOutputData[7].values[5] = this.boneData[2].values[5] - weight * 39/50*centerLine /120* contrast_x;
  this.boneOutputData[7].values[0] = this.boneOutputData[6].values[4];
  this.boneOutputData[7].values[1] = this.boneOutputData[6].values[5]-(this.boneOutputData[5].values[1] - this.boneOutputData[6].values[5])*CtrlPntRate;
  this.boneOutputData[7].values[2] = this.boneOutputData[6].values[0];
  this.boneOutputData[7].values[3] = this.boneOutputData[7].values[5];
  this.boneOutputData[8].values[0] = this.boneOutputData[7].values[4]-(this.boneOutputData[6].values[4] - this.boneOutputData[5].values[0])*CtrlPntRate;
  this.boneOutputData[8].values[1] = this.boneOutputData[7].values[5];
  this.boneOutputData[8].values[4] = this.boneData[1].values[4] - weight * 39/50*centerLine /120* contrast_y;
  this.boneOutputData[8].values[5] = this.boneData[1].values[5];
  this.boneOutputData[8].values[2] = this.boneOutputData[8].values[4];
  this.boneOutputData[8].values[3] = this.boneOutputData[7].values[1];
  this.boneOutputData[9].values[0] = this.boneOutputData[8].values[4];
  this.boneOutputData[9].values[1] = this.boneOutputData[6].values[3];
  this.boneOutputData[9].values[2] = this.boneOutputData[8].values[0];
  this.boneOutputData[9].values[3] = this.boneOutputData[5].values[1];
  this.boneOutputData[9].values[4] = this.boneOutputData[5].values[0];
  this.boneOutputData[9].values[5] = this.boneOutputData[5].values[1];

    this.outlineData[10].values[0] = this.boneData[5].values[0] - (weight * 18.75 / 50 + 18.75) * contrast_x;
    this.outlineData[10].values[1] = this.boneData[5].values[1] + weight * 37.5 / 50 * contrast_x;

    this.outlineData[11].values[0] = this.outlineData[10].values[0];
    this.outlineData[11].values[1] = this.boneData[5].values[1] - weight * 37.5 / 50 * contrast_x;

    this.outlineData[12].values[0] = this.boneData[6].values[0] + (weight * 18.75 / 50 + 18.75) * contrast_x;
    this.outlineData[12].values[1] = this.outlineData[11].values[1];

    this.outlineData[13].values[0] = this.outlineData[12].values[0];
    this.outlineData[13].values[1] = this.outlineData[10].values[1];
    this.outlineData[14].values[0] = this.outlineData[10].values[0];
    this.outlineData[14].values[1] = this.outlineData[10].values[1];

    this.outlineData[15].values[0] = this.boneData[7].values[0] - (weight * 18.25 / 50 + 18.25) * contrast_x;
    this.outlineData[15].values[1] = this.boneData[7].values[1] + weight * 36.5 / 50 * contrast_x;

    this.outlineData[16].values[0] = this.outlineData[15].values[0];
    this.outlineData[16].values[1] = this.boneData[7].values[1] - weight * 36.5 / 50 * contrast_x;

    this.outlineData[17].values[0] = this.boneData[8].values[0] + (weight * 18.25 / 50 + 18.25) * contrast_x;
    this.outlineData[17].values[1] = this.outlineData[16].values[1];

    this.outlineData[18].values[0] = this.outlineData[17].values[0];
    this.outlineData[18].values[1] = this.outlineData[15].values[1];
    this.outlineData[19].values[0] = this.outlineData[15].values[0];
    this.outlineData[19].values[1] = this.outlineData[15].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0];
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] - weight * 35/50 *centerLine / 120* contrast_x;

    this.boneOutputData[1].values[4] = this.boneData[1].values[4] + weight * 35/50 *centerLine / 120* contrast_y;
    this.boneOutputData[1].values[5] = this.boneData[1].values[5];
    this.boneOutputData[1].values[0] = this.boneOutputData[0].values[0]+(this.boneOutputData[1].values[4] - this.boneOutputData[0].values[0])*CtrlPntRate;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];
    this.boneOutputData[1].values[2] = this.boneOutputData[1].values[4];
    this.boneOutputData[1].values[3] = this.boneOutputData[1].values[5]+(this.boneOutputData[0].values[1] - this.boneOutputData[1].values[5])*CtrlPntRate;
    this.boneOutputData[2].values[4] = this.boneData[2].values[4];
    this.boneOutputData[2].values[5] = this.boneData[2].values[5] + weight * 35/50 *centerLine / 120* contrast_x;
    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[4];
    this.boneOutputData[2].values[1] = this.boneOutputData[1].values[5]-(this.boneOutputData[0].values[1] - this.boneOutputData[1].values[5])*CtrlPntRate;
    this.boneOutputData[2].values[2] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[3] = this.boneOutputData[2].values[5];
    this.boneOutputData[3].values[0] = this.boneOutputData[2].values[4]-(this.boneOutputData[1].values[4] - this.boneOutputData[0].values[0])*CtrlPntRate;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[5];
    this.boneOutputData[3].values[4] = this.boneData[3].values[4] - weight * 35/50 *centerLine / 120* contrast_y;
    this.boneOutputData[3].values[5] = this.boneData[3].values[5];
    this.boneOutputData[3].values[2] = this.boneOutputData[3].values[4];
    this.boneOutputData[3].values[3] = this.boneOutputData[2].values[1];
    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[4];
    this.boneOutputData[4].values[1] = this.boneOutputData[1].values[3];
    this.boneOutputData[4].values[2] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[3] = this.boneOutputData[0].values[1];
    this.boneOutputData[4].values[4] = this.boneOutputData[0].values[0];
    this.boneOutputData[4].values[5] = this.boneOutputData[0].values[1];

    this.boneOutputData[5].values[0] = this.boneData[0].values[0];
    this.boneOutputData[5].values[1] = this.boneData[0].values[1] + weight * 35/50 *centerLine / 120* contrast_x;
    this.boneOutputData[6].values[4] = this.boneData[3].values[4] + weight * 35/50 *centerLine / 120* contrast_y;
    this.boneOutputData[6].values[5] = this.boneData[3].values[5];
    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0]+(this.boneOutputData[6].values[4] - this.boneOutputData[5].values[0])*CtrlPntRate ;
    this.boneOutputData[6].values[1] = this.boneOutputData[5].values[1];
    this.boneOutputData[6].values[2] = this.boneOutputData[6].values[4];
    this.boneOutputData[6].values[3] = this.boneOutputData[6].values[5]+(this.boneOutputData[5].values[1] - this.boneOutputData[6].values[5])*CtrlPntRate ;
    this.boneOutputData[7].values[4] = this.boneData[2].values[4];
    this.boneOutputData[7].values[5] = this.boneData[2].values[5] - weight * 35/50 *centerLine / 120* contrast_x;
    this.boneOutputData[7].values[0] = this.boneOutputData[6].values[4];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[5]-(this.boneOutputData[5].values[1] - this.boneOutputData[6].values[5])*CtrlPntRate ;
    this.boneOutputData[7].values[2] = this.boneOutputData[6].values[0];
    this.boneOutputData[7].values[3] = this.boneOutputData[7].values[5];
    this.boneOutputData[8].values[0] = this.boneOutputData[7].values[4]-(this.boneOutputData[6].values[4] - this.boneOutputData[5].values[0])*CtrlPntRate ;
    this.boneOutputData[8].values[1] = this.boneOutputData[7].values[5];
    this.boneOutputData[8].values[4] = this.boneData[1].values[4] - weight * 35/50 *centerLine / 120* contrast_y;
    this.boneOutputData[8].values[5] = this.boneData[1].values[5];
    this.boneOutputData[8].values[2] = this.boneOutputData[8].values[4];
    this.boneOutputData[8].values[3] = this.boneOutputData[7].values[1];
    this.boneOutputData[9].values[0] = this.boneOutputData[8].values[4];
    this.boneOutputData[9].values[1] = this.boneOutputData[6].values[3];
    this.boneOutputData[9].values[2] = this.boneOutputData[8].values[0];
    this.boneOutputData[9].values[3] = this.boneOutputData[5].values[1];
    this.boneOutputData[9].values[4] = this.boneOutputData[5].values[0];
    this.boneOutputData[9].values[5] = this.boneOutputData[5].values[1];

    this.boneOutputData[10].values[0] = this.boneData[5].values[0] - (weight * 18.75 / 50 + 18.75) * contrast_x *centerLine / 120;
    this.boneOutputData[10].values[1] = this.boneData[5].values[1] + weight * 37.5 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[11].values[0] = this.boneOutputData[10].values[0];
    this.boneOutputData[11].values[1] = this.boneData[5].values[1] - weight * 37.5 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[12].values[0] = this.boneData[6].values[0] + (weight * 18.75 / 50 + 18.75) * contrast_x *centerLine / 120;
    this.boneOutputData[12].values[1] = this.boneOutputData[11].values[1];

    this.boneOutputData[13].values[0] = this.boneOutputData[12].values[0];
    this.boneOutputData[13].values[1] = this.boneOutputData[10].values[1];
    this.boneOutputData[14].values[0] = this.boneOutputData[10].values[0];
    this.boneOutputData[14].values[1] = this.boneOutputData[10].values[1];

    this.boneOutputData[15].values[0] = this.boneData[7].values[0] - (weight * 18.25 / 50 + 18.25) * contrast_x *centerLine / 120;
    this.boneOutputData[15].values[1] = this.boneData[7].values[1] + weight * 36.5 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[16].values[0] = this.boneOutputData[15].values[0];
    this.boneOutputData[16].values[1] = this.boneData[7].values[1] - weight * 36.5 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[17].values[0] = this.boneData[8].values[0] + (weight * 18.25 / 50 + 18.25) * contrast_x *centerLine / 120;
    this.boneOutputData[17].values[1] = this.boneOutputData[16].values[1];

    this.boneOutputData[18].values[0] = this.boneOutputData[17].values[0];
    this.boneOutputData[18].values[1] = this.boneOutputData[15].values[1];
    this.boneOutputData[19].values[0] = this.boneOutputData[15].values[0];
    this.boneOutputData[19].values[1] = this.boneOutputData[15].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};

//ㅏ
changeWeightArray.k = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50 * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1] +(20+ weight * 20 / 50) * contrast_y;

    this.outlineData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1] + weight * 40 / 50 * contrast_x;

    this.outlineData[3].values[0] = this.boneData[3].values[0] + (20+weight * 20 / 50) * contrast_y;//원래 contrast_x였으나 ㅒ 할때의 미관상 y로 바꿈
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[2].values[1] - weight * 40 / 50 * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[1].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[1].values[0];
    this.outlineData[6].values[1] = this.boneData[1].values[1] -(20+ weight * 20 / 50) * contrast_y;

    this.outlineData[7].values[0] = this.outlineData[0].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];


    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50 * contrast_y *centerLine/120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] +(20+ weight * 20 / 50) * contrast_y *centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y *centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[2].values[1] + weight * 40 / 50 * contrast_x *centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[3].values[0] + (20+weight * 20 / 50) * contrast_y *centerLine/120;//원래 contrast_x였으나 ㅒ 할때의 미관상 y로 바꿈
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneData[2].values[1] - weight * 40 / 50 * contrast_x*centerLine/120;

    this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[6].values[1] = this.boneData[1].values[1] -(20+ weight * 20 / 50) * contrast_y*centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅑ
changeWeightArray.i = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0]-weight*40/50 * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1]+(20+weight*20/50) * contrast_y;

    this.outlineData[1].values[0] = this.boneData[0].values[0]+weight*40/50 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1]+weight*40/50 * contrast_x;

    this.outlineData[3].values[0] = this.boneData[3].values[0]+(20+weight*20/50) * contrast_y;//원래 contrast_x였으나 ㅒ 할때의 미관상 y로 바꿈
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[2].values[1]-weight*40/50 * contrast_x;

    this.outlineData[5].values[0] = this.outlineData[1].values[0];
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[1].values[0];
    this.outlineData[6].values[1] = this.boneData[4].values[1]+weight*40/50 * contrast_x;

    this.outlineData[7].values[0] = this.boneData[5].values[0]+(20+weight*20/50) * contrast_y;//원래 contrast_x였으나 ㅒ 할때의 미관상 y로 바꿈
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[7].values[0];
    this.outlineData[8].values[1] = this.boneData[4].values[1]-weight*40/50 * contrast_x;

    this.outlineData[9].values[0] = this.outlineData[6].values[0];
    this.outlineData[9].values[1] = this.outlineData[8].values[1];

    this.outlineData[10].values[0] = this.outlineData[1].values[0];
    this.outlineData[10].values[1] = this.boneData[1].values[1]-(20+weight*20/50) * contrast_y;

    this.outlineData[11].values[0] = this.outlineData[0].values[0];
    this.outlineData[11].values[1] = this.outlineData[10].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0]-weight*40/50 * contrast_y*centerLine/120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1]+(20+weight*20/50) * contrast_y*centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[0].values[0]+weight*40/50 * contrast_y*centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[2].values[1]+weight*40/50 * contrast_x*centerLine/120;

    this.boneOutputData[3].values[0] = this.boneData[3].values[0]+(20+weight*20/50) * contrast_y*centerLine/120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneData[2].values[1]-weight*40/50 * contrast_x*centerLine/120;

    this.boneOutputData[5].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[6].values[1] = this.boneData[4].values[1]+weight*40/50 * contrast_x*centerLine/120;

    this.boneOutputData[7].values[0] = this.boneData[5].values[0]+(20+weight*20/50) * contrast_y*centerLine/120;
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[8].values[1] = this.boneData[4].values[1]-weight*40/50 * contrast_x*centerLine/120;

    this.boneOutputData[9].values[0] = this.boneOutputData[6].values[0];
    this.boneOutputData[9].values[1] = this.boneOutputData[8].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[10].values[1] = this.boneData[1].values[1]-(20+weight*20/50) * contrast_y*centerLine/120;

    this.boneOutputData[11].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅓ
changeWeightArray.j = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50  * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + (weight * 20 / 50 + 20)  * contrast_y;

    this.outlineData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50  * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[1].values[1] - (weight * 20 / 50 + 20) * contrast_y;///헷갈림

    this.outlineData[3].values[0] = this.outlineData[0].values[0];
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[0].values[0];
    this.outlineData[4].values[1] = this.boneData[2].values[1] - weight * 39 / 50 * contrast_x;

    this.outlineData[5].values[0] = this.boneData[2].values[0] - (weight * 19.5 / 50 + 19.5 )* contrast_y;
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.boneData[2].values[1] + (weight * 39 / 50) * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[0].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50  * contrast_y*centerLine/120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + (weight * 20 / 50 + 20)  * contrast_y*centerLine/120;

    this.boneOutputData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50  * contrast_y*centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[1].values[1] - (weight * 20 / 50 + 20) * contrast_y*centerLine/120;///헷갈림

    this.boneOutputData[3].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[4].values[1] = this.boneData[2].values[1] - weight * 39 / 50 * contrast_x*centerLine/120;

    this.boneOutputData[5].values[0] = this.boneData[2].values[0] - (weight * 19.5 / 50 + 19.5 )* contrast_y*centerLine/120;
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = this.boneData[2].values[1] + (weight * 39 / 50) * contrast_x*centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅕ
changeWeightArray.u = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50 * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + (weight * 20 / 50 + 20) * contrast_y; //여기도

    this.outlineData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[1].values[1] - (weight * 20 / 50 + 20) * contrast_y; //여기

    this.outlineData[3].values[0] = this.outlineData[0].values[0];
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[0].values[0];
    this.outlineData[4].values[1] = this.boneData[5].values[1] - weight * 39 / 50 * contrast_x;

    this.outlineData[5].values[0] = this.boneData[4].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_y; //여기 나눠야함
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.boneData[4].values[1] + weight * 39 / 50 * contrast_x;

    this.outlineData[7].values[0] = this.outlineData[0].values[0];
    this.outlineData[7].values[1] = this.outlineData[6].values[1];

    this.outlineData[8].values[0] = this.outlineData[0].values[0];
    this.outlineData[8].values[1] = this.boneData[2].values[1] - weight * 39 / 50 * contrast_x;

    this.outlineData[9].values[0] = this.outlineData[5].values[0];
    this.outlineData[9].values[1] = this.outlineData[8].values[1];

    this.outlineData[10].values[0] = this.outlineData[5].values[0];
    this.outlineData[10].values[1] = this.boneData[2].values[1] + weight * 39 / 50 * contrast_x;

    this.outlineData[11].values[0] = this.outlineData[0].values[0];
    this.outlineData[11].values[1] = this.outlineData[10].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50 * contrast_y*centerLine/120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + (weight * 20 / 50 + 20) * contrast_y*centerLine/120; //여기도

    this.boneOutputData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y*centerLine/120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[1].values[1] - (weight * 20 / 50 + 20) * contrast_y*centerLine/120; //여기

    this.boneOutputData[3].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[4].values[1] = this.boneData[5].values[1] - weight * 39 / 50 * contrast_x*centerLine/120;

    this.boneOutputData[5].values[0] = this.boneData[4].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_y*centerLine/120; //여기 나눠야함
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = this.boneData[4].values[1] + weight * 39 / 50 * contrast_x*centerLine/120;

    this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[8].values[1] = this.boneData[2].values[1] - weight * 39 / 50 * contrast_x*centerLine/120;

    this.boneOutputData[9].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[9].values[1] = this.boneOutputData[8].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[10].values[1] = this.boneData[2].values[1] + weight * 39 / 50 * contrast_x*centerLine/120;

    this.boneOutputData[11].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];

    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
changeWeightArray.h = function(weight){   //  ㅗ
      this.weight = weight;

      this.outlineData[0].values[0] = this.boneData[0].values[0] - (weight * 19.25 / 50 +19.25) * contrast_x;
      this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * 77 / 50 * 2 / 3 * contrast_x;

      this.outlineData[1].values[0] = this.boneData[3].values[0] - weight * 38.5 / 50 * contrast_y;
      this.outlineData[1].values[1] = this.outlineData[0].values[1];

      this.outlineData[2].values[0] = this.outlineData[1].values[0];
      this.outlineData[2].values[1] = this.boneData[2].values[1] + (weight * 20 / 50 + 20) * contrast_y;

      this.outlineData[3].values[0] = this.boneData[3].values[0] + weight * 38.5 / 50 * contrast_y;
      this.outlineData[3].values[1] = this.outlineData[2].values[1];

      this.outlineData[4].values[0] = this.outlineData[3].values[0];
      this.outlineData[4].values[1] = this.outlineData[0].values[1];

      this.outlineData[5].values[0] = this.boneData[1].values[0] + (weight * 19.25 / 50 +19.25) * contrast_x;
      this.outlineData[5].values[1] = this.outlineData[0].values[1];

      this.outlineData[6].values[0] = this.outlineData[5].values[0];
      this.outlineData[6].values[1] = this.boneData[0].values[1] - weight * 77 / 50 * 1 / 3 * contrast_x;

      this.outlineData[7].values[0] = this.outlineData[0].values[0];
      this.outlineData[7].values[1] = this.outlineData[6].values[1];


      this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (weight * 19.25 / 50 +19.25) * contrast_x *centerLine/120;
      this.boneOutputData[0].values[1] = (this.outlineData[0].values[1] + this.outlineData[7].values[1])/2 + (weight * 39 / 50) * contrast_x *centerLine / 120;

      this.boneOutputData[1].values[0] = this.boneData[3].values[0] - weight * 38.5 / 50 * contrast_y *centerLine /120;
      this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

      this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
      this.boneOutputData[2].values[1] =  this.boneData[2].values[1] + (weight * 20 / 50 + 20) * contrast_y *centerLine /120;

      this.boneOutputData[3].values[0] = this.boneData[3].values[0] + weight * 38.5 / 50 * contrast_y *centerLine/120;
      this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

      this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
      this.boneOutputData[4].values[1] = this.boneOutputData[0].values[1];

      this.boneOutputData[5].values[0] = this.boneData[1].values[0] + (weight * 19.25 / 50 +19.25) * contrast_x *centerLine/120;
      this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

      this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
      this.boneOutputData[6].values[1] = (this.outlineData[0].values[1] + this.outlineData[7].values[1])/2 - (weight * 39 / 50) * contrast_x *centerLine / 120;

      this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
      this.boneOutputData[7].values[1] = this.boneOutputData[6].values[1];

      this.symmetry();
      this.setSize();
      if(this.setting==2)
      {
        this.recoverSize();
        this.symmetry();
      }
      this.initialize();
  if(this.letterType ==2)
    this.nextLetter.changeWeight(weight);
};
//ㅛ
changeWeightArray.y = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * 39 / 50 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[3].values[0] - weight * 39 / 50 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[2].values[1] + (weight * 19.25 / 50 + 19.25) * contrast_y;

    this.outlineData[3].values[0] = this.boneData[2].values[0] + weight * 39.5 / 50 * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.outlineData[0].values[1];

    this.outlineData[5].values[0] = this.boneData[5].values[0] - weight * 39.5 / 50 * contrast_y;
    this.outlineData[5].values[1] = this.outlineData[0].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.outlineData[2].values[1];

    this.outlineData[7].values[0] = this.boneData[5].values[0] + weight * 39.5 / 50 * contrast_y;
    this.outlineData[7].values[1] = this.outlineData[2].values[1];

    this.outlineData[8].values[0] = this.outlineData[7].values[0];
    this.outlineData[8].values[1] = this.outlineData[0].values[1];

    this.outlineData[9].values[0] = this.boneData[1].values[0] + (weight * 19.5 / 50 + 19.5) * contrast_x;
    this.outlineData[9].values[1] = this.outlineData[0].values[1];

    this.outlineData[10].values[0] = this.outlineData[9].values[0];
    this.outlineData[10].values[1] = this.boneData[0].values[1] - weight * 39 / 50 * contrast_x;

    this.outlineData[11].values[0] = this.outlineData[0].values[0];
    this.outlineData[11].values[1] = this.outlineData[10].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_x *centerLine / 120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + weight * 39 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[1].values[0] = this.boneData[3].values[0] - weight * 39 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[2].values[1] + (weight * 19.25 / 50 + 19.25) * contrast_y *centerLine / 120;

    this.boneOutputData[3].values[0] = this.boneData[2].values[0] + weight * 39.5 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[5].values[0] = this.boneData[5].values[0] - weight * 39.5 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[5].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[7].values[0] = this.boneData[5].values[0] + weight * 39.5 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[7].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[8].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[9].values[0] = this.boneData[1].values[0] + (weight * 19.5 / 50 + 19.5) * contrast_x *centerLine / 120;
    this.boneOutputData[9].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[9].values[0];
    this.boneOutputData[10].values[1] = this.boneData[0].values[1] - weight * 39 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[11].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[10].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅜ
changeWeightArray.n = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * 39 / 50 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + (weight * 19.5 / 50 + 19.5) * contrast_x;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * 39 / 50 * contrast_x;

    this.outlineData[3].values[0] = this.boneData[3].values[0] + weight * 40 / 50 * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[2].values[1] - (weight * 20 / 50 + 20) * contrast_y;

    this.outlineData[5].values[0] = this.boneData[3].values[0] - weight * 40 / 50 * contrast_y;
    this.outlineData[5].values[1] = this.outlineData[4].values[1];

    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.outlineData[2].values[1];

    this.outlineData[7].values[0] = this.outlineData[0].values[0];
    this.outlineData[7].values[1] = this.outlineData[2].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_x *centerLine / 120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + weight * 39 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[1].values[0] = this.boneData[1].values[0] + (weight * 19.5 / 50 + 19.5) * contrast_x *centerLine / 120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[0].values[1] - weight * 39 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[3].values[0] = this.boneData[3].values[0] + weight * 40 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneData[2].values[1] - (weight * 20 / 50 + 20) * contrast_y *centerLine / 120;

    this.boneOutputData[5].values[0] = this.boneData[3].values[0] - weight * 40 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[7].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[7].values[1] = this.boneOutputData[2].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅠ
changeWeightArray.b = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * 39 / 50;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + (weight * 19.5 / 50 + 19.5) * contrast_x;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * 39 / 50 * contrast_x;

    this.outlineData[3].values[0] = this.boneData[5].values[0] + weight * 39 / 50 * contrast_y;
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.outlineData[4].values[0] = this.outlineData[3].values[0];
    this.outlineData[4].values[1] = this.boneData[4].values[1] - (weight * 19.5 / 50 + 19.5) * contrast_y;

    this.outlineData[5].values[0] = this.boneData[5].values[0] - weight * 39 / 50 * contrast_y;
    this.outlineData[5].values[1] = this.outlineData[4].values[1];
    this.outlineData[6].values[0] = this.outlineData[5].values[0];
    this.outlineData[6].values[1] = this.outlineData[2].values[1];

    this.outlineData[7].values[0] = this.boneData[3].values[0] + weight * 39 / 50 * contrast_y;
    this.outlineData[7].values[1] = this.outlineData[2].values[1];

    this.outlineData[8].values[0] = this.outlineData[7].values[0];
    this.outlineData[8].values[1] = this.outlineData[4].values[1];

    this.outlineData[9].values[0] = this.boneData[3].values[0] - weight * 39 / 50 * contrast_y;
    this.outlineData[9].values[1] = this.outlineData[4].values[1];

    this.outlineData[10].values[0] = this.outlineData[9].values[0];
    this.outlineData[10].values[1] = this.outlineData[2].values[1];

    this.outlineData[11].values[0] = this.outlineData[0].values[0];
    this.outlineData[11].values[1] = this.outlineData[2].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (weight * 19.5 / 50 + 19.5) * contrast_x *centerLine / 120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + weight * 39 / 50 *centerLine / 120;

    this.boneOutputData[1].values[0] = this.boneData[1].values[0] + (weight * 19.5 / 50 + 19.5) * contrast_x *centerLine / 120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[0].values[1] - weight * 39 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[3].values[0] = this.boneData[5].values[0] + weight * 39 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[4].values[0] = this.boneOutputData[3].values[0];
    this.boneOutputData[4].values[1] = this.boneData[4].values[1] - (weight * 19.5 / 50 + 19.5) * contrast_y *centerLine / 120;

    this.boneOutputData[5].values[0] = this.boneData[5].values[0] - weight * 39 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[5].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[6].values[0] = this.boneOutputData[5].values[0];
    this.boneOutputData[6].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[7].values[0] = this.boneData[3].values[0] + weight * 39 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[7].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[8].values[0] = this.boneOutputData[7].values[0];
    this.boneOutputData[8].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[9].values[0] = this.boneData[3].values[0] - weight * 39 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[9].values[1] = this.boneOutputData[4].values[1];

    this.boneOutputData[10].values[0] = this.boneOutputData[9].values[0];
    this.boneOutputData[10].values[1] = this.boneOutputData[2].values[1];

    this.boneOutputData[11].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[11].values[1] = this.boneOutputData[2].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅡ
changeWeightArray.m = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - (weight * 19 / 50 + 19) * contrast_x;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + weight * 38 / 50 * contrast_x;

    this.outlineData[1].values[0] = this.boneData[1].values[0] + (weight * 19 / 50 + 19) * contrast_x;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[0].values[1] - weight * 38 / 50 * contrast_x;

    this.outlineData[3].values[0] = this.outlineData[0].values[0];
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - (weight * 19 / 50 + 19) * contrast_x *centerLine / 120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + weight * 38 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[1].values[0] = this.boneData[1].values[0] + (weight * 19 / 50 + 19) * contrast_x *centerLine / 120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[0].values[1] - weight * 38 / 50 * contrast_x *centerLine / 120;

    this.boneOutputData[3].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
//ㅣ
changeWeightArray.l = function(weight) {
    this.weight = weight;
    this.outlineData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50 * contrast_y;
    this.outlineData[0].values[1] = this.boneData[0].values[1] + (weight * 20 / 50 + 20) * contrast_y;

    this.outlineData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y;
    this.outlineData[1].values[1] = this.outlineData[0].values[1];

    this.outlineData[2].values[0] = this.outlineData[1].values[0];
    this.outlineData[2].values[1] = this.boneData[1].values[1] - (weight * 20 / 50 + 20) * contrast_y;

    this.outlineData[3].values[0] = this.outlineData[0].values[0];
    this.outlineData[3].values[1] = this.outlineData[2].values[1];

    this.boneOutputData[0].values[0] = this.boneData[0].values[0] - weight * 40 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[0].values[1] = this.boneData[0].values[1] + (weight * 20 / 50 + 20) * contrast_y *centerLine / 120;

    this.boneOutputData[1].values[0] = this.boneData[0].values[0] + weight * 40 / 50 * contrast_y *centerLine / 120;
    this.boneOutputData[1].values[1] = this.boneOutputData[0].values[1];

    this.boneOutputData[2].values[0] = this.boneOutputData[1].values[0];
    this.boneOutputData[2].values[1] = this.boneData[1].values[1] - (weight * 20 / 50 + 20) * contrast_y *centerLine / 120;

    this.boneOutputData[3].values[0] = this.boneOutputData[0].values[0];
    this.boneOutputData[3].values[1] = this.boneOutputData[2].values[1];
    this.symmetry();
    this.setSize();
    if(this.setting==2)
    {
      this.recoverSize();
      this.symmetry();
    }
    this.initialize();
    if(this.letterType ==2)
      this.nextLetter.changeWeight(weight);
};
