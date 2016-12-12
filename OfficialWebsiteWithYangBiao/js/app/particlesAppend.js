//particlesAppend after svgappend
(function (w) {
    var winW = $(w).width();
    var sizeValue = (winW <= 1024) ? 2 : 4;

    var particlesNumber = 0;
    var particlesNumber = (winW <= 1024) ? 65 : 60;

    var json = {
        "particles": {
            "number": {
                "value": particlesNumber,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": 'circle'
            },
            "opacity": {
                "value": 0.9,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": sizeValue,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 30,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
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
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "remove"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
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
    };


    function particlesAppend() {
        particlesJS('particles-js', json);
    }

    w.particlesAppend = particlesAppend;

})(window);