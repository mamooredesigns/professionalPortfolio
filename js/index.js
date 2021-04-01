//About Hover Animation
var canvasSpace = document.getElementById("navCanvas");
var canvas = document.createElement("canvas");
var preview = document.createElement("div");
preview.id = "designPreview";
var context = canvas.getContext("2d");
canvas.style.width = "79vw";
canvas.style.height = "99vh";
// let numberLog = [];

function fadeIn(drawing, preview, time) {
    drawing.style.opacity = 0;
    preview.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
        drawing.style.opacity = +drawing.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+drawing.style.opacity < 1) {  
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    var tock = function() {
        preview.style.opacity = +preview.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+preview.style.opacity < 1) {  
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
    tock();
}

document.getElementById("navLinkAbout").addEventListener(
    "mouseenter", function() {
        canvasSpace.appendChild(canvas);
        canvas.style.backgroundImage = "url('../images/blueChevron.jpg')"
        canvas.style.backgroundSize = "cover"
        fadeIn(canvas, preview, 3000);
});

document.getElementById("navLinkAbout").addEventListener(
    "mouseleave", function() {
    canvasSpace.removeChild(canvas);
    canvasSpace.removeChild(preview);
});

//Design Hover Animation
document.getElementById("navLinkDesigns").addEventListener(
    "mouseenter", function() {
        canvasSpace.appendChild(canvas);
        canvas.style.backgroundImage = "url('../images/goldChevron.jpg')"
        canvas.style.backgroundSize = "cover"
        preview.style.visibility = "visible";
        fadeIn(canvas, 3000);
    })

document.getElementById("navLinkDesigns").addEventListener("mouseleave", function() {
        preview.style.visibility = "collapse";
        canvasSpace.removeChild(canvas);
    })

//Apps Hover Animation
document.getElementById("navLinkApps").addEventListener(
    "mouseenter", function() {
        canvasSpace.appendChild(canvas);
        canvas.style.backgroundImage = "url('../images/darkChevron.png')"
        canvas.style.backgroundSize = "cover"
        fadeIn(canvas, 3000);
    })

document.getElementById("navLinkApps").addEventListener("mouseleave", function() {
        canvasSpace.removeChild(canvas);
    })

//Portfolio Hover Animation 
document.getElementById("navLinkPortfolio").addEventListener(
    "mouseenter", function() {
        canvasSpace.appendChild(canvas);
        canvas.style.backgroundImage = "url('../images/redGoldChevron.jpg')"
        canvas.style.backgroundSize = "cover"
        fadeIn(canvas, 3000);
    })

document.getElementById("navLinkPortfolio").addEventListener("mouseleave", function() {
        canvasSpace.removeChild(canvas);
    })

//Contact Hover Animation 
document.getElementById("navLinkContact").addEventListener(
    "mouseenter", function() {
        canvasSpace.appendChild(canvas);
        canvas.style.backgroundImage = "url('../images/blueGoldChevron.png')"
        canvas.style.backgroundSize = "cover"
        fadeIn(canvas, 3000);
    })

document.getElementById("navLinkContact").addEventListener("mouseleave", function() {
        canvasSpace.removeChild(canvas);
    })

//Create a sticky nav on home page scroll//
window.onscroll = function() {myFunction()};

var header = document.getElementById("stickyNav");

var sticky = header.offsetTop;
header.style.visibility = "hidden";

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.style.visibility = "visible";
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.style.visibility = "hidden";
  }
}

//Hamburger Menu Navigation//
function toggle() {
    var burgerLinks = document.getElementById("burgerLinks");
    if (burgerLinks.style.display === "block") {
        burgerLinks.style.display = "none";
    } else {
        burgerLinks.style.display = "block"
    }
}


//attempts at animations....
// function randomNumber() {
//     let random = parseInt(Math.floor(Math.random() * window.innerHeight));
//     return random;
// }

// function calculateShapes() {
//     for (i=0; i<4; i++) {
//         let startingPointX = randomNumber();
//         let startingPointY = randomNumber();
//         console.log("genRanShapes log: ", numberLog, "genRanShapes X number", startingPointX, "genRanShapes Y number", startingPointY);
//         if (numberLog.includes(startingPointX)) {
//             startingPointX = randomNumber();
//             console.log("in IF recalced x: ", startingPointX);
//         } else if (numberLog.includes(startingPointY)) {
//             startingPointY = randomNumber();
//             console.log("in ELSE IF recalced y: ", startingPointY);
//         } else {
//             console.log("in ELSE: ", startingPointX, startingPointY)
//             numberLog.push(startingPointX);
//             numberLog.push(startingPointY);
//             console.log("genRanShapes push to log", numberLog);
//         }
//         drawShapes(startingPointX, startingPointY);
//     }
// }

// function drawShapes(x, y) {
//     console.log("begin drawing")
//     console.log("x:", x, "y:", y)
//     context.beginPath();
//     context.moveTo(x, y);
//     context.lineTo(x+12, y+12);
//     context.lineTo(x-12, y+12);
//     context.fill();
// }
//   canvasSpace.appendChild(canvas);
    //   calculateShapes();
    //   let numberLog = [];
    //   for (i=0; i < 16; i++) {
        //   let random = parseInt(Math.floor(Math.random() * 100));
        //   console.log(random);
        //   if (numberLog.includes(random)) {
            //   random += 24;
            //   return random;
        //   }
            // let startingPoint = generateRandomNum();
            
                //   context.beginPath();
                //   context.moveTo(generateRandomNum(), generateRandomNum());
                //   context.lineTo(generateRandomNum()+25, generateRandomNum()+25);
                //   context.lineTo(generateRandomNum(), generateRandomNum()+50);
                //   context.fill();
        //   numberLog.push(generateRandomNum());
        //   console.log(numberLog);
    //   }