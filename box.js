class Box extends BaseClass {
  constructor(x, y, width, height, image) {
    super(x, y, width, height);
    this.image = loadImage(image || "wood1.png");
  }

};

