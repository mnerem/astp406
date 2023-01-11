// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
    hash: true,
    mouseWheel: true,
    slideNumber: 'c/t',
    //autoSlide: 5000,
    
    // Transition style
    transition: 'convex', // none/fade/slide/convex/concave/zoom
    
    // Vertical centering of slides
    center: true,

    preloadIframes: true,

    audio: {
        prefix: 'chalkboard/',
        suffix: '.ogg',
        defaultDuration: 5,
//					textToSpeechURL: "http://api.voicerss.org/?key=[YOUR_KEY]&hl=en-gb&c=ogg&src=",
        advance: 500,
        autoplay: false,
        defaultText: true,
        playerOpacity: 0.0,
    },

    chalkboard: {
            boardmarkerWidth: 3,
            chalkWidth: 3,
            chalkEffect: 0.25,
            storage: './',
            src: "./kinematics-problem.json",
            readOnly: false,
            messageType: 'broadcast',
            toggleChalkboardButton: { left: "30px", bottom: "60px", top: "auto", right: "auto" },
            toggleNotesButton: { left: "30px", bottom: "90px", top: "auto", right: "auto" },
            colorButtons: true,
            boardHandle: true,
            transition: 800,
            theme: "chalkboard",
            background: [ 'rgba(127,127,127,.1)' , path + 'img/blackboard.png' ],
            grid: { color: 'rgb(50,50,50,0.5)', distance: 40, width: 2},
            eraser: { src: path + 'img/eraser.png', radius: 20},
            boardmarkers : [
                    { color: 'rgba(0,0,0,1)', cursor: 'url(' + path + 'img/boardmarker-black.png), auto'},
                    { color: 'rgba(80,146,220, 1)', cursor: 'url(' + path + 'img/boardmarker-blue.png), auto'},
                    { color: 'rgba(220,80,80,1)', cursor: 'url(' + path + 'img/boardmarker-red.png), auto'},
                    { color: 'rgba(15,170,125,1)', cursor: 'url(' + path + 'img/boardmarker-green.png), auto'},
                    { color: 'rgba(255,140,0,1)', cursor: 'url(' + path + 'img/boardmarker-orange.png), auto'},
                    { color: 'rgba(150,0,20150,1)', cursor: 'url(' + path + 'img/boardmarker-purple.png), auto'},
                    { color: 'rgba(255,220,0,1)', cursor: 'url(' + path + 'img/boardmarker-yellow.png), auto'}
            ],
            chalks: [
                    { color: 'rgba(255,255,255,0.5)', cursor: 'url(' + path + 'img/chalk-white.png), auto'},
                    { color: 'rgba(80,146,220, 0.5)', cursor: 'url(' + path + 'img/chalk-blue.png), auto'},
                    { color: 'rgba(220, 80, 80, 0.5)', cursor: 'url(' + path + 'img/chalk-red.png), auto'},
                    { color: 'rgba(15,170,125,0.5)', cursor: 'url(' + path + 'img/chalk-green.png), auto'},
                    { color: 'rgba(220, 133, 41, 0.5)', cursor: 'url(' + path + 'img/chalk-orange.png), auto'},
                    { color: 'rgba(220,0,220,0.5)', cursor: 'url(' + path + 'img/chalk-purple.png), auto'},
                    { color: 'rgba(255,220,0,0.5)', cursor: 'url(' + path + 'img/chalk-yellow.png), auto'}
                    ]
                },

    math: {
        // mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js',
        config: 'TeX-AMS_HTML-full',
        TeX: {
            Macros: {
                R: '\\mathbb{R}',
                set: [ '\\left\\{#1 \\; ; \\; #2\\right\\}', 2 ]
            }
        }
    },

    menu: {
        width: 'wide',
        numbers: false,
        themes: false,
        transitions: false,
        markers: true,
    },
                    
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [  RevealMarkdown, 
                RevealHighlight, 
                RevealNotes,
                RevealChalkboard,
                RevealMath,
                RevealMenu,
                RevealAudioSlideshow, 
                RevealAudioRecorder
             ]
});

