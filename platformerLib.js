class platform {
    constructor(x, y, w, h, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = GREY;
        this.topcol = ORANGE;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed
        this.dirx = 1;
        this.diry = 1;
    }
    show() {
        noStroke()
        fill(this.col)
        rect(this.x, this.y, this.w, this.h)
        fill(this.topcol)
        rect(this.x, this.y, this.w, 2)
    }
    move() {
        this.x += this.xSpeed * this.dirx;
        this.y += this.ySpeed * this.diry;
        if (this.x + this.w > width || this.x < 0) {
            this.xSpeed = -this.xSpeed
        }
        if (this.y + this.h > height || this.y < 0) {
            this.ySpeed = -this.ySpeed
        }
    }
};

// function powerUp(x, y, char) {
//     noStroke()
//     fill(0)
//     rect(x, y, 20, 20)
//     fill(255)
//     textAlign(CENTER)
//     textSize(18)
//     text(char, x + 10, y + 16)
// }

function spike(x, y, col) {
    noStroke
    fill(col)
    triangle(x, y, x + 10, y - 20, x + 20, y)
}

// function item(x, y, outcol, incol) {
//     fill(outcol)
//     rect(x, y, 20, 20)
//     fill(incol)
//     ellipse(x + 10, y + 10, 15, 15)
// }

// function door(x, y, framecol) {
//     noStroke()
//     fill(framecol)
//     rect(x, y, 40, 40)
//     fill(0)
//     rect(x + 5, y + 5, 30, 35)
// }

function bridge(x, y, w, col) {
    noStroke()
    fill(col)
    for (let i = 1; i <= 6; i++) {
        ellipse(x + [i] * w, y, w, w)
    }
}

class spikeStrip {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    show() {
        noStroke()
        fill(255, 0, 0, 100)
        rect(this.x, this.y, this.w * 6, -this.h)
        fill(RED)
        for (let i = 0; i < 6; i++) {
            triangle(this.x + [i] * this.w, this.y, (this.x + (this.w / 2)) + [i] * this.w, this.y - this.w, (this.x + this.w) + [i] * this.w, this.y)
        }
    };
}

class levelEnd {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    show() {
        noStroke()
        fill(GREY)
        rect(this.x, this.y, this.w, this.h)
    }
}