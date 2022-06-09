'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcAre() {
        return this.height * this.width;
    }
}

class ColoredRectangleWidthText extends Rectangle {
    constructor(height, width, text, bgColor ) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWidthText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcAre());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcAre());
// console.log(square.calcAre());

