const canvas = document.getElementById("canvas");
canvas.width = 600;

const ctx = canvas.getContext("2d");
const car = new Car(canvas.width / 2, canvas.width / 2, 30, 55);
car.draw(ctx);

animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate); // requestAnimationFrame(callback)
}
