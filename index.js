function ChristmasCoutdown() {
    const christmasDate = new Date("January 1, 2024 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;

    const convertWord = function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const displayDays = Math.floor(diff / msInDays);
    const dayinRussiaDisplay = convertWord(displayDays, ['день', 'дня', 'дней']);
    document.querySelector('.days').innerHTML = `${displayDays} <br> ${dayinRussiaDisplay}`;


    const displayHours = Math.floor((diff % msInDays) / msInHours);
    const hourinRussiaDisplay = convertWord(displayHours, ['час', 'часа', 'часов']);
    document.querySelector('.hours').innerHTML = `${displayHours} <br> ${hourinRussiaDisplay}`;


    const displayMinutes = Math.floor((diff % msInHours) / msInMinutes);
    const minutesinRussiaDisplay = convertWord(displayMinutes, ['минута', 'минуты', 'минут']);
    document.querySelector('.minutes').innerHTML = `${displayMinutes} <br> ${minutesinRussiaDisplay}`;


    const displaySeconds = Math.floor((diff % msInMinutes) / msInSeconds);
    const secondsinRussiaDisplay = convertWord(displaySeconds, ['секунда', 'секунды', 'секунд']);
    document.querySelector('.seconds').innerHTML = `${displaySeconds} <br> ${secondsinRussiaDisplay}`;


    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }
}

let timerID = setInterval(ChristmasCoutdown, 1000)

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'С НОВЫМ ГОДОМ!!!!'
    heading.classList.add('red');
}

const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        button.classList.toggle('btn-pause');
    } else {
        audio.pause();
        button.classList.toggle('btn-pause');
    }
})

const search = document.querySelector('.search');
const divs = document.querySelectorAll('.movieName');


search.addEventListener('keyup', (event) => {
    let word = event.target.value.toLowerCase().trim();

    divs.forEach(item => {
        item.querySelector('.itemMovie').textContent.toLowerCase().includes(word)
            ? (item.style.display = 'block') : (item.style.display = 'none');
    });
})

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 600,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "star",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 8.33451405615796,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3.333805622463184,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
