class jumping {
	constructor(x, y, col, lk, rk, uk) {
		this.x = x;
		this.y = y;
		this.w = 20;
		this.h = 20;
		this.xSpeed = 0;
		this.ySpeed = 0;
		this.a = 1;
		this.col = col;
		this.jumped = false;
		this.leftkey = lk;
		this.rightkey = rk;
		this.upkey = uk;
	}
	update() {
		// Move Horizontally & Check Collision
		this.x += this.xSpeed;
		this.checkPlatformsHz();
		this.checkSpikeStrip()
		// Move Vertically - Gravity
		this.y += this.ySpeed; // Move Vertically
		this.checkPlatformsVt();
		this.checkSpikeStrip()
		this.ySpeed += this.a; // Apply Gravity
		if (this.y + this.h > height) {
			// Land on Ground
			this.y = height - this.h;
			this.jumped = false;
			this.ySpeed = 0
		}
	}

	show() {
		// Draw Player
		noStroke();
		fill(this.col);
		rect(this.x, this.y, this.w, this.h);
	}

	jump() {
		if (keyCode == this.upkey && !this.jumped) {
			this.jumped = true;
			this.ySpeed = -20;
		}
	}

	setXSpeed() {
		if (keyCode == this.rightkey) {
			this.xSpeed = 5;
		} else if (keyCode == this.leftkey) {
			this.xSpeed = -5;
		}
	}

	stopXSpeed() {
		if (keyCode == this.rightkey && this.xSpeed > 0) {
			this.xSpeed = 0;
		} else if (keyCode == this.leftkey && this.xSpeed < 0) {
			this.xSpeed = 0;
		}
	}

	prevent() {
		if (this.x < 0) {
			this.x = 0
		} else if (this.x + this.w > width) {
			this.x = width - this.w
		}
		if (this.y < 0) {
			this.y = 0
			this.ySpeed = -this.ySpeed
		}
	}

	checkPlatformsHz() {
		for (let i = 0; i < platforms.length; i++) {
			if (rectIntersect(this, platforms[i])) {
				if (this.xSpeed > 0) { // Move RIght
					this.x = platforms[i].x - this.w;
				} else if (this.xSpeed < 0) { // Move Left
					this.x = platforms[i].x + platforms[i].w;
				} else if (this.xSpeed = 0) {
					if (platforms[i].dirx == 1) {
						this.x = platforms[i].x + platforms[i].w
					}
				}
				this.xSpeed = 0;
			}

		}
	}

	checkPlatformsVt() {
		for (let i = 0; i < platforms.length; i++) {
			if (rectIntersect(this, platforms[i])) {
				if (this.ySpeed > 0) { // Move Down (Land on platform)
					this.y = platforms[i].y - this.h;
					this.jumped = false;
				} else if (this.ySpeed < 0) { // Move Up
					this.y = platforms[i].y + platforms[i].h;
				}
				this.ySpeed = 0;
			}
		}
	}
	checkSpikeStrip() {
		for (let i = 0; i < spikeStrips.length; i++) {
			if (rectIntersect(this, spikeStrips[i])) {
				this.x = 0
				this.y = 0

			}
		}
	}
}