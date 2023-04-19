let dead = document.querySelector("#dead");
let lost = document.querySelector("#lost");
let getHole = index => document.getElementById(`hole${index}`);


function killTheBeaverPlay() {
    dead.textContent = 0;
    lost.textContent = 0;
    for (let i = 1; i < 10; i++) {
        getHole(i).onclick = () => {
            if (getHole(i).className.includes('hole_has-mole')) {
                dead.textContent++;
            } else {
                lost.textContent++;
            }
        
            if (dead.textContent == 10) {
                alert('Поздравляю Вы победили!!!');
                killTheBeaverPlay();
            }
            if (lost.textContent == 5) {
                alert('Поздравляю Вы проиграли!');
                killTheBeaverPlay();
            }
        }
    }
}

killTheBeaverPlay()
