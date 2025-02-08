function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Random position from left
    petal.style.left = Math.random() * 100 + 'vw';
    
    // Random fall duration between 4-8 seconds
    const fallDuration = 4 + Math.random() * 4;
    petal.style.animationDuration = fallDuration + 's';
    
    // Random initial rotation
    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    
    // Random size variation
    const size = 15 + Math.random() * 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    // Random petal color variation
    const hue = 350 + Math.random() * 20; // Pink hues
    const lightness = 80 + Math.random() * 10;
    petal.style.background = `hsl(${hue}, 100%, ${lightness}%)`;
    
    document.getElementById('petals').appendChild(petal);
    
    // Remove petal after animation
    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

// Create initial batch of petals
for(let i = 0; i < 30; i++) {
    setTimeout(createPetal, Math.random() * 3000);
}

// Continue creating petals
setInterval(() => {
    if(document.getElementById('petals').children.length < 30) {
        createPetal();
    }
}, 300);
