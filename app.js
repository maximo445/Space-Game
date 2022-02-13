
// get canvas and context
const canvas = document.querySelector('.my-canvas');
const ctx = canvas.getContext('2d');

// get good-spaceship image
const goodSpaceship = document.querySelector('.good-spaceship');

const goodCoor = {
    x: canvas.width/ 2 - 37,
    mx: 8,
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(goodSpaceship, goodCoor.x, 500, 75, 75);

    requestAnimationFrame(update);
}

update();

document.addEventListener('keydown', (e) => {
    //horizontal movement 
    if (e.key === 'ArrowRight') {
        goodCoor.x += goodCoor.mx;
    }
    if (e.key === 'ArrowLeft') {
        goodCoor.x -= goodCoor.mx;
    }
});