let count = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let speed = document.getElementById("speed");

let lastTime = Date.now();

cookie.onclick = () => {
    let clic = count.textContent ++;
    if (clic % 2 == 0) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
    const speedTime = Date.now();
    speed.textContent = (1 / ((speedTime - lastTime) / 1000)).toFixed(2);
    lastTime = speedTime;
}