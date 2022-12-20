class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "black";

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 4;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  update() {
    this.#move();
    // console.log(`maxSpeed: ${this.maxSpeed}`)
    console.log(`speed: ${this.speed}`);
  }

  #boost = () =>
    this.controls.boost
      ? ((this.maxSpeed = 7), (this.color = "red"))
      : ((this.maxSpeed = 4), (this.color = "black"));

  #move() {
    this.#boost();

    // Increase or decrease speed
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    // MaxSpeed
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    // Friction
    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    // Here we flip direction going backwards
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.04 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.04 * flip;
      }
    }

    // Update position
    // this.y -= this.speed;
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  draw(ctx) {
    ctx.save(); // Save the drawing state

    ctx.translate(this.x, this.y);

    ctx.rotate(-this.angle);

    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.restore(); // Restore state
  }
}
