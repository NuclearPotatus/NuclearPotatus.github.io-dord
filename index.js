let computerscore = 0
let playerscore = 0
document.getElementById('rock').addEventListener('click', () => {
    let playerChoose = 'r'
    game('r')
    document.getElementById('play').innerHTML = "   Player Score = " + playerscore
    document.getElementById('computer').innerHTML = "   Computer Score = " + computerscore
});
document.getElementById('paper').addEventListener('click', () => {
    let playerChoose = 'p'
    game('p')
    document.getElementById('play').innerHTML = "   Player Score = " + playerscore
    document.getElementById('computer').innerHTML = "   Computer Score = " + computerscore
});
document.getElementById('sci').addEventListener('click', () => {
    let playerChoose = 's'
    game('s')
    document.getElementById('play').innerHTML = "   Player Score = " + playerscore
    document.getElementById('computer').innerHTML = "   Computer Score = " + computerscore
});

function game(playerChoose) {
    let computerChoose = Math.floor(Math.random()*3)
    let j = 1;
    for(let i = 0; i<j; i++) {
        switch (computerChoose) {
            case 1:
                switch (playerChoose) {
                    case 'r':
                        document.getElementById('cout').innerHTML = 'Computer chose rock. DRAW'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        break;
                    case 's':
                        document.getElementById('cout').innerHTML = 'Computer chose rock. YOU LOST'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        computerscore++;
                        break;
                    case 'p':
                        document.getElementById('cout').innerHTML = 'Computer chose rock. YOU WIN'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        playerscore++;
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                switch (playerChoose) {
                    case 'r':
                        document.getElementById('cout').innerHTML = 'Computer chose paper. YOU LOST'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        computerscore++;
                        break;
                    case 'p':
                        document.getElementById('cout').innerHTML = 'Computer chose paper. DRAW'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        break;
                    case 's':
                        document.getElementById('cout').innerHTML = 'Computer chose paper. YOU WIN'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        playerscore++;
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                switch (playerChoose) {
                    case 'r':
                        document.getElementById('cout').innerHTML = 'Computer chose scissors. YOU WIN'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        playerscore++;                
                        break;
                    case 'p':
                        document.getElementById('cout').innerHTML = 'Computer chose scissors. YOU LOST'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        computerscore++;
                        break;
                    case 's':
                        document.getElementById('cout').innerHTML = 'Computer chose scissors. DRAW'
                        document.body.style.background = "linear-gradient(90deg, #ff0099, #9900ff);"
                        break;
                    default:
                        break;
                }
                break;
        
            default:
                console.log('Somehow it broke.')
                break;
        };
    };
};


//this is where i lose the will to continue. if you wish to contact the author of this code, dont
//he was to much on his mind right now
