/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 103.60282500000002,
        y: 32.255634967388204
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 103.60280499999999,
        y: 38.25563
      }),
      new Costume("costume11", "./Sprite1/costumes/costume11.svg", {
        x: 103.60280499999999,
        y: 38.92229499999999
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.svg", {
        x: 103.60280499999999,
        y: 34.92229333333333
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 103.60280499999999,
        y: 29.922290000000004
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.svg", {
        x: 103.60280499999999,
        y: 30.238951840784893
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.svg", {
        x: 103.60280499999999,
        y: 31.90560500000001
      }),
      new Costume("costume7", "./Sprite1/costumes/costume7.svg", {
        x: 103.60280499999999,
        y: 34.719315892419644
      }),
      new Costume("costume8", "./Sprite1/costumes/costume8.svg", {
        x: 103.60280499999999,
        y: 34.71930499999999
      }),
      new Costume("costume9", "./Sprite1/costumes/costume9.svg", {
        x: 103.60280499999999,
        y: 45.474027088184926
      }),
      new Costume("costume10", "./Sprite1/costumes/costume10.svg", {
        x: 103.60280499999999,
        y: 57.36060182740553
      }),
      new Costume("costume12", "./Sprite1/costumes/costume12.svg", {
        x: 103.60280499999999,
        y: 57.360604434803165
      }),
      new Costume("costume13", "./Sprite1/costumes/costume13.svg", {
        x: 103.60280499999999,
        y: 57.36058721740157
      }),
      new Costume("costume14", "./Sprite1/costumes/costume14.svg", {
        x: 103.60280499999999,
        y: 57.36058443480319
      }),
      new Costume("costume15", "./Sprite1/costumes/costume15.svg", {
        x: 103.60280499999999,
        y: 32.163974647083194
      }),
      new Costume("costume16", "./Sprite1/costumes/costume16.svg", {
        x: 96.09529749249248,
        y: 32.269629352212235
      }),
      new Costume("costume20", "./Sprite1/costumes/costume20.svg", {
        x: 103.60280499999999,
        y: 18.75611375804803
      }),
      new Costume("costume17", "./Sprite1/costumes/costume17.svg", {
        x: 117.1163185135135,
        y: 15.753106795370343
      }),
      new Costume("costume18", "./Sprite1/costumes/costume18.svg", {
        x: 94.59379599099097,
        y: 15.753110755045128
      }),
      new Costume("costume19", "./Sprite1/costumes/costume19.svg", {
        x: 108.10730950450449,
        y: 29.26662822823323
      }),
      new Costume("costume21", "./Sprite1/costumes/costume21.svg", {
        x: 100.59980199699694,
        y: 62.14208052268812
      }),
      new Costume("costume22", "./Sprite1/costumes/costume22.svg", {
        x: 87.0862884834834,
        y: 85.97049755759055
      }),
      new Costume("costume23", "./Sprite1/costumes/costume23.svg", {
        x: 102.1013034984984,
        y: 144.52898471197318
      }),
      new Costume("costume24", "./Sprite1/costumes/costume24.svg", {
        x: 84.08328548048041,
        y: 164.04846204145284
      }),
      new Costume("costume25", "./Sprite1/costumes/costume25.svg", {
        x: 84.08328499999999,
        y: 164.04845296544892
      }),
      new Costume("costume26", "./Sprite1/costumes/costume26.svg", {
        x: 84.08328499999999,
        y: 164.0484529654489
      }),
      new Costume("costume27", "./Sprite1/costumes/costume27.svg", {
        x: 107.27471669387324,
        y: 164.0484509308978
      }),
      new Costume("costume28", "./Sprite1/costumes/costume28.svg", {
        x: 158.86279352957808,
        y: 164.04845898272447
      }),
      new Costume("costume29", "./Sprite1/costumes/costume29.svg", {
        x: 188.66666499999997,
        y: 164.04845296544892
      }),
      new Costume("costume30", "./Sprite1/costumes/costume30.svg", {
        x: 209,
        y: 164.0484529654489
      }),
      new Costume("costume31", "./Sprite1/costumes/costume31.svg", {
        x: 226,
        y: 164.04845694817334
      }),
      new Costume("costume32", "./Sprite1/costumes/costume32.svg", {
        x: 243,
        y: 164.0484509308978
      }),
      new Costume("costume33", "./Sprite1/costumes/costume33.svg", {
        x: 253,
        y: 164.04845491362224
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    for (let i = 0; i < 4; i++) {
      yield* this.wait(0.06);
      this.costumeNumber += 1;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      yield* this.wait(0.04);
      this.costumeNumber += 1;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.035);
      this.costumeNumber += 1;
      yield;
    }
    yield* this.wait(0.5);
    for (let i = 0; i < 13; i++) {
      yield* this.wait(0.035);
      this.costumeNumber += 1;
      yield;
    }
  }
}
