
/**
 * Every entry must include a title and filename, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     filename: string // the name of your HTML file
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your profile
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 * }
 */
let baseUrl = location.href.includes('local') ? '' : '/apps';
let Metroxe = "https://github.com/Metroxe/one-html-page-challenge/blob/master/entries/"

console.log({baseUrl})
const entries = [
	{
		title: "Kanban",
		filename: `/public/kanban`,
		description: "The first submission to the One HTML Page Challenge. It is a simple ASCII man starting the dance from Napoleon Dynamite.",
		author: "Domenic (dcode)",
		github: "dcode-youtube"
	},
	{
		title: "Notes",
		filename: `/public/notes`,
		description: "Simulation of an ant colony creating a never ending underground colony. The 'Q' represents a queen that can giver birth to ants 'A'. Food sources are represented by the numbers 9 - 1. (Currently only works in desktop Chrome)",
		author: "Domenic (dcode)",
		github: "dcode-youtube",
		compatibleBrowsers: ["Chrome Desktop"]
	},
	{
		title: "Todo",
		filename: `/public/todo`,
		description: "An insult generator.",
		author: "Tyler Potts",
		github: "TylerPottsDev"
	},
	{
		title: "Dancing Man",
		ext_href: Metroxe, 
    filename: "dancing_man.html",
		description: "The first submission to the One HTML Page Challenge. It is a simple ASCII man starting the dance from Napoleon Dynamite.",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe"
	},
	{
		title: "Ant Colony",
    ext_href: Metroxe, 
    filename: "ant_colony.html",
		description: "Simulation of an ant colony creating a never ending underground colony. The 'Q' represents a queen that can giver birth to ants 'A'. Food sources are represented by the numbers 9 - 1. (Currently only works in desktop Chrome)",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe",
		compatibleBrowsers: ["Chrome Desktop"]
	},
	{
		title: "Strange Insults",
		ext_href: Metroxe, 
    filename: "strange_insults.html",
		description: "An insult generator.",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe"
	},
	{
		title: "Building Price Estimate",
		ext_href: Metroxe, 
    filename: "building.html",
		description: "Drag the top right corner on the building. Price increases as building gets bigger.",
		author: "Richard Hung (Richard1320)",
		github: "richard1320",
	},
	{
		title: "Adequate Memory Game",
		ext_href: Metroxe, 
    filename: "memory-game.html",
		description: "Simple memory testing game that I created during a flight while my laptop battery slowly approached 0%. Each level gets faster & adds 1 more color in randomized order to remember!",
		author: "Spencer Gray",
		github: "spencergray96",
	},
	{
		title: "Simple counter",
		ext_href: Metroxe, 
    filename: "simple-counter.html",
		description: "This is a simple counter for 2023 new year with gradient color background!!",
		author: "Israa Gargar",
		github: "Esogargar",
	},
	{
		title: "Fool's Mate",
		ext_href: Metroxe, 
    filename: "fools-mate.html",
		description: "In chess, Fool's Mate, also known as the Two-Move Checkmate, is the checkmate in the fewest possible number of moves from the start of the game. This play is created by animating grid rows and columns.",
		author: "Chen Hui Jing (huijing)",
		github: "huijing",
		compatibleBrowsers: ["Firefox 66+"]
	},
	{
		title: "Pure CSS Still Life - Water and Lemons",
		ext_href: Metroxe, 
    filename: "pure-css-still-life-water-lemon.html",
		description: " A Pure CSS Still Life. No images, No SVG, just CSS, absolutely pointless!",
		author: "Ben Evans",
		github: "ivorjetski"
	},
	{
		title: "Calculate Worked Hours",
		ext_href: Metroxe, 
    filename: "calculate_hours_worked.html",
		description: "Calculates the amount of hours worked based on the start and end time of the work shifts and break times if there is any.",
		author: "Jacky Ly (lyjacky11)",
		github: "lyjacky11"
	},
	{
		title: "Car Game",
		ext_href: Metroxe, 
    filename: "mini_car_game.html",
		description: "simple car racing game, collecting energys on road, speeds up as many energy consumed, slow down if miss energy on road. driving is unlimited",
		author: "irakli kvirikashvili",
		github: "zghnachvi"
	},
	{
		title: "Moon and stars Effect.",
		ext_href: Metroxe, 
    filename: "color-change-on-hover-objects.html",
		description: "Moon and stars showing a twinkiling effect. The background also turns to night view upon hovering over the moon, stars or the body.",
		author: "Yousuf Uyghur",
		github: "alfen-yu"
	},
	{
		title: "Color Clock",
		ext_href: Metroxe, 
    filename: "colorclock.html",
		description: "Shows you the time with a lovely background generated from the current time.",
		author: "mechamech",
		github: "mechamech"
	},
	{
		title: "Color Quiz",
		ext_href: Metroxe, 
    filename: "color-quiz.html",
		description: "A little quiz about the named colors. You try and guess what the color displayed is called.",
		author: "Andrea Kaminski (Kazeheki)",
		github: "kazeheki"
	},
	{
		title: "KNFL",
		ext_href: Metroxe, 
    filename: "knfl.html",
		description: "A one-throw-kniffel-like game.",
		author: "Pascal Claisse",
		github: "pclaisse"
	},
	{
		title: "Hangman",
		ext_href: Metroxe, 
    filename: "hangman.html",
		description: "A hangman game with words about web development.",
		author: "Sandro Roth",
		github: "rothsandro"
	},
	{
		title: "Tile game",
		ext_href: Metroxe, 
    filename: "tiles.html",
		description: "Tile ordering game.",
		author: "Marc Lajoie",
		github: "quickhand"
	},
	{
		title: "Bits Rain",
		ext_href: Metroxe, 
    filename: "bits-rain.html",
		description: "It's raining bits.",
		author: "Alexandre Nicolas (Kornflexx)",
		github: "Kornflexx"
	},
	{
		title: "Todo list",
		ext_href: Metroxe, 
    filename: "todo_list.html",
		description: "Just another one todo list.",
		author: "Rafał Goławski",
		github: "rago4"
	},
	{
		title: "Wargames",
		ext_href: Metroxe, 
    filename: "wargames.html",
		description: "Recreation of the terminal window from a scene in the movie Wargames.",
		author: "Vasilios Daskalopoulos",
		github: "vasil9v"
	},
	{
		title: "Interval",
		ext_href: Metroxe, 
    filename: "Interval.html",
		description: "Increase reading speed by training in short bursts.",
		author: "John Gillespie",
		github: "olddognewtrix123"
	},
	{
		title: "Meat on the Move",
		ext_href: Metroxe, 
    filename: "meat-on-the-move.html",
		description: "It's meat on the move!",
		author: "Jeff Phillips"
	},
	{
		title: "Just HTML. Mostly.",
		ext_href: Metroxe, 
    filename: "just_html.html",
		description: "Nothing to see here. This was an HTML challenge, so I tried to do just HTML.",
		author: "Shawn Oden",
		github: "shawnoden"
	},
	{
		title: "Bronchalia: The Windy City",
		ext_href: Metroxe, 
    filename: "bronchalia.htm",
		description: "Battle pathogens as the human immune system.",
		author: "quicksilv3rflash (instructables, reddit)",
		github: "quicksilv3rflash"
	},
	{
		title: "ASCII Camera",
		ext_href: Metroxe, 
    filename: "ascii-cam.html",
		description: "Display camera output in colourised ASCII",
		author: "iveseenthedark",
		github: "iveseenthedark"
	},
	{
		title: "Magic Wand",
		ext_href: Metroxe, 
    filename: "magicWand.html",
		description: "Wave your magic wand!  A simple demo using mouse motion and button.",
		author: "Jacob Ewing",
		github: "jacobEwing"
	},
	{
		title: "Fishies",
		ext_href: Metroxe, 
    filename: "fishies.html",
		description: "Spawn fishies and let your fishie grow!",
		author: "William Chung (wiiliam)",
		github: "wiiliam"
	},
	{
		title: "Simple Oui",
		ext_href: Metroxe, 
    filename: "watermelon-pixel.html",
		description: "A Simple Oui.",
		author: "Maxime DO",
		github: "Maxime-DO"
	},
	{
		title: "Ring Loader",
		ext_href: Metroxe, 
    filename: "ring-loader.html",
		description: "CSS only loaders is still the buzz now so I imported one of my tests.",
		author: "Markus Mafz",
		github: "headquarter8302"
	},
	{
		title: "Snake Game",
		ext_href: Metroxe, 
    filename: "Snakegame.html",
		description: "My first submission to the One HTML Page Challenge.It is a simple snake game using html, css and javascript.",
		author: "Kuljeet Singh (Kuljeet-123)",
		github: "Kuljeet-123"
	},
	{
		title: "Game of Life",
		ext_href: Metroxe, 
    filename: "game_of_life.html",
		description: "A simple implementation of Conway's Game of Life in JS.",
		author: "bendersteed",
		github: "bendersteed"
	},
	{
		title: "Ladner British Columbia",
		ext_href: Metroxe, 
    filename: "ladner_british_columbia.html",
		description: "Applied an <feTurbulence> to an image of my hometown Ladner British Columbia, in order to create a cool water effect.",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe"
	},
	{
		title: "Web Minesweeper",
		ext_href: Metroxe, 
    filename: "webmine.html",
		description: "Nearly full implementation of the original Minesweeper game (no high scores list).  Left click to hit a square and test for mines, right click to plant a flag.",
		author: "Terry McKay",
		github: "terrymckay"
	},
	{
		title: "Platform",
		ext_href: Metroxe, 
    filename: "platform.html",
		description: "v3.0 - Just a simple JavaScript game",
		author: "Mini Ware",
		github: "Mini-Ware"
	},
	{
		title: "Out On a Limb",
		ext_href: Metroxe, 
    filename: "out_on_a_limb.html",
		description: "Aesthetic lyric page for Out on a limb by Jayaire Woods.",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe"
	},
	{
		title: "background lights",
		ext_href: Metroxe, 
    filename: "backgroundlight.html",
		description: "Its a hover website, when u hover on a box it will react diiferently and background will keep on changing its color.",
		author: "rahil",
		github: "Rahilcode"
	},
	{
		title: "Tribute page",
		ext_href: Metroxe, 
    filename: "A-tribute-page.html",
		description: "Just a tribute page to a completely random person",
		author: "MAZ12211",
		github: "MAZ12211"
	},
	{
		title: "Fall Game",
		ext_href: Metroxe, 
    filename: "fall_game.html",
		description: "A fall game created using html,css,javascript",
		author: "Snehal",
		github: "SNEHAL311998"
	},
	{
		title: "Draw RGB",
		ext_href: Metroxe, 
    filename: "draw-rgb.html",
		description: "A svg draw with RGB.",
		author: "Erik Giovani",
		github: "ErikGIovani"
	},
	{
		title: "Birthday Cake",
		ext_href: Metroxe, 
    filename: "birthday-cake.html",
		description: `This is a simple animated birthday cake written in Vanilla JavaScript, CSS and HTML. It allows you to set:\n- the number of candles (via param ?candles=15);\n- the addressee name to display the phrase "Happy Birthday" with this name (via param ?name=Green);\n- or set your own congratulations (via param ?message=Happy%20Birthday,%20Green&message=Have%20a%20nice%20Day).`,
		author: "Alexander A. Kropotin (ololx)",
		github: "ololx"
	},
	{
		title: "Baby Wants Milk",
		ext_href: Metroxe, 
    filename: "BabyWantsMilk.html",
		description: "Baby is home alone and hungry. Take baby 👶 to the milk 🍼. It is my baby step towards HTML/JS/CSS 😉",
		author: "Seshu Thanneeru",
		github: "SeshuTechie"
	},
	{
		title: "Tic Tac Toe Game",
		ext_href: Metroxe, 
    filename: "tic-tac-toe.html",
		description: "It is just a simple tic tac toe game!",
		author: "Sumandeep Kaur",
		github: "Sumandeep-Kaur"
	},
	{
		title: "Analog-cum-Digital Clock",
		ext_href: Metroxe, 
    filename: "clock.html",
		description: "This is an analog-cum-digital clock with both dark and light modes!!",
		author: "Sumandeep Kaur",
		github: "Sumandeep-Kaur"
	},
	{
		title: "Ask Me on a Date Form",
		ext_href: Metroxe, 
    filename: "date_me_form.html",
		description: "Well, this is an application form for asking me on a date kind of thing",
		author: "Lailah Grant",
		github: "lailahgrant"
	},
	{
		title: "Calculator",
		ext_href: Metroxe, 
    filename: "css-calc.html",
		descrition: "Only html, css caluclator",
		author: "Aryan Kapoor",
		github: "Aryankpoor"
	},
	{
		title: "Hover Button",
		ext_href: Metroxe, 
    filename: "button-hover.html",
		descrition: "A simple button hover.",
		author: "Vanshika Rana",
		github: "Vanshika-Rana"
	},
	{
		title: "Fortune Cookie Generator",
		ext_href: Metroxe, 
    filename: "fortune-cookie-generator.html",
		description: "Prints a fortune cookie message on the screen, randomly generated by an algorithm.",
		author: "Hector Krionas Lamprou",
		github: "EKrionasLamprou"
	},
	{
		title: "Your IP",
		ext_href: Metroxe, 
    filename: "ip.html",
		description: "Find out what's your IP address",
		author: "Elisha Hollander (donno2048)",
		github: "donno2048"
	},
	{
		title: "Your Screen Resolution",
		ext_href: Metroxe, 
    filename: "my-screen-resolution.html",
		description: "THIS PAGE HELPS YOU TO FIND YOUR MONITOR/SCREEN RESOLUTIONS.",
		author: "Prateek Singh",
		github: "7ORP3DO",
		compatibleBrowsers: ["Chrome", "Edge", "Firefox", "Internet Explorer", "Opera", "Safari"]
	},
	{
		title: "Fireworks",
		ext_href: Metroxe, 
    filename: "fireworks.html",
		description: "Clickable fireworks!",
		author: "Matthew Hu",
		github: "wagabooga"
	},
	{
		title: "Adjustable Fireworks",
		ext_href: Metroxe, 
    filename: "adjustable-fireworks.html",
		description: "A firework generating website with tons of settings.",
		author: "Tyler Gordon Hill",
		github: "TyHil"
	},
	{
		title: "Marching Squares",
		ext_href: Metroxe, 
    filename: "marching-squares.html",
		description: "Marching Squares algorithm in one HTML page!",
		author: "Magoninho",
		github: "Magoninho"
	},
	{
		title: "Pink vs Unknowns",
		ext_href: Metroxe, 
    filename: "pink-vs-unknowns.html",
		description: "Pink vs Unknowns is a simulation where two sides have opposite contradictory missions.",
		author: "Aliaksandr B.",
		github: "ByAliaksandr",
		compatibleBrowsers: ["Chrome Desktop, Firefox Desktop, Safari Desktop"]
	},
	{
		title: "Ping Pong",
		ext_href: Metroxe, 
    filename: "ping-pong.html",
		description: "Ping Pong is a classical arcade game which you can play with two people. You can also set the computer as an auto player, moreover set two auto players and watch them while they play against each other.",
		author: "Osman Fikret Ceylan",
		github: "ofcyln",
		compatibleBrowsers: ["Chrome Desktop", "Firefox Desktop", "Safari Desktop", "Edge Chromium Desktop", "Brave Desktop"]
	},
	{
		title: "．ｑｕａｓｉｍｏｎｏ．",
		ext_href: Metroxe, 
    filename: "quasimono.html",
		description: "＊。．。．。．＊　\n．ｃｒｅａｔｅ．📝\n。　ａｓｃｉｉ。　\n．　ｅｍｏｊｉ．✨\n。　　　ａｒｔ。🖼\n．ｆｏｒ　　　．✨\n。ｓｏｃｉａｌ。　\n．　ｍｅｄｉａ．🕊\n＊。．。．。．＊",
		author: "Jonah J. H.",
		github: "jonahjoshua",
		compatibleBrowsers: ["Safari Mobile", "Chrome Mobile", "Safari Desktop", "Chrome Desktop", "Edge Chromium Desktop", "Firefox (probably)"]
	},
	{
		title: "Corona Party!",
		ext_href: Metroxe, 
    filename: "corona-party.html",
		description: "A simple game leveraging the Audio API. Listen to the audio and try to figure out at which house a party is going on!",
		author: "Justus Romijn",
		github: "justusromijn",
		compatibleBrowsers: ["Chrome Desktop", "Edge Chromium Desktop", "Firefox"]
	},
	{
		title: "Amsterdam: avoid the bikes & return home!",
		ext_href: Metroxe, 
    filename: "avoid-the-bikes.html",
		description: "You just got your new job in Amsterdam and moved in. After you picked up your new laptop from the Frontmen offices you need to return to your new home. Little did you know about these crazy bikes...",
		author: "Ioannis Smyrnios",
		github: "giannissmirnios",
		compatibleBrowsers: ["Chrome Desktop", "Firefox Desktop", "Safari Desktop", "Edge Chromium Desktop"]
	},
	{
		title: "Calculator",
		ext_href: Metroxe, 
    filename: "Calculator.html",
		description: "Calculator Using-Javascript For One Page Html Challenge",
		author: "Abhay Mourya (Abhay557)",
		github: "Abhay557"
	},
        {
		title: "Block Over It",
		ext_href: Metroxe, 
    filename: "blockoverit.html",
		description: "A Awesome Game Using-Javascript For One Page Html Challenge",
		author: "Abhay Mourya (Abhay557)",
		github: "Abhay557"
	},
	{
		title: "Whack-a-mole",
		ext_href: Metroxe, 
    filename: "whack-a-mole.html",
		description: "New whack-a-mole with speed rounds and shufffle keyboard",
		author: "sakshi",
		github: "sakshi-011"
	},
	{
		title: "Organs-For-Debt",
		ext_href: Metroxe, 
    filename: "organs-for-debt.html",
		description: "You have a lot of debt and nothing but your body to pay for it",
		author: "Justin Chao",
		github: "jutsK"
	},
	{
		title: "Blur background loading",
		ext_href: Metroxe, 
    filename: "blur-loading-page.html",
		description: "A smooth Css transition to slowly load the contents of the web page",
		author: "Nirban Chakraborty",
		github: "nirban256"
	},
	{
		title: "Task List App",
		ext_href: Metroxe, 
    filename: "taskListApp.html",
		description: "A task list application with local storage and filter tasks functionality",
		author: "Tejashwa Rajvardhan",
		github: "tejash023"
	},
	{
		title: "Hilbert Curve",
		ext_href: Metroxe, 
    filename: "hilbert-curve.html",
		description: "Draws a hilbert curve, a curve to map a two dimensional space in one dimension",
		author: "Ahmad Raza",
		github: "razaahmad333"
	},
	{
		title: "Random-Password-Generator",
		ext_href: Metroxe, 
    filename: "randomPassword.html",
		description: "Generate random strong passwords  ",
		author: "Ankita",
		github: "AnkitaMalik22"
	},
	{
		title: "StopWatch",
		ext_href: Metroxe, 
    filename: "stopWatch.html",
		description: "An online stopwatch to keep your performance in check",
		author: "Kabir Seth",
		github: "sethkabir"
	},
	{
		title: "RIP- Siddhu Moosewala -Rapper",
		ext_href: Metroxe, 
    filename: "Sidhumoosewala-tribute-page.html",
		description: "A small tribute to a legend",
		author: "Guneet Singh",
		github: "IamGuneet"
	},
	{
		title: "Cup Water Wave",
		ext_href: Metroxe, 
    filename: "cupWaterWave.html",
		description: "A cup filled with water and creating wave",
		author: "Satyabrata Sahoo",
		github: "satyasonu"
	},
	{
		title: "Guess_My_number",
		ext_href: Metroxe, 
    filename: "guess_my_number",
		description: "You have to guess the number genarated by the system",
		author: "Soumojit Chakraborty",
		github: "SOUMOJIT-CHAKRABORTY"
	},
	{
		title: "Contact List",
		ext_href: Metroxe, 
    filename: "contact_list.html",
		description: "Contact List where contacts saved at local storage",
		author: "Rahul Reddy",
		github: "rahulreddy-001"
	},
	{
		title: "Simon Game",
		ext_href: Metroxe, 
    filename: "simon-game.html",
		description: "Well known simon game, short term memory game",
		author: "Sai Mahith Reddy Bekkem",
		github: "mahith257"
	},
	{
		title: "Random colour generator",
		ext_href: Metroxe, 
    filename: "RandomColourGenerator.html",
		description: "A random colour generator which shows you different colours after every click",
		author: "Rajiv Sahal",
		github: "Ryukemeister"
	},
	{
		title: "Tips-Calculator",
		ext_href: Metroxe, 
    filename: "Tips-Calculator.html",
		description: "A simple Tips-calculator",
		author: "Amaan Haider",
		github: "AmaanHaider"
	},
	{
		title: "Movie List",
		ext_href: Metroxe, 
    filename: "movie-list.html",
		description: "Ratings for movies i've seen.",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe"
	},
	{
		title: "Registration Form",
		ext_href: Metroxe, 
    filename: "Sattyam.html",
		description: "Created a Static student Registration Form",
		author: "Sattyam Samania",
		github: "SattyamSamania"
	},
	{
		title: "Sudoku Solver",
		ext_href: Metroxe, 
    filename: "UdhavSudoku.html",
		description: "A Basic Sudoku Game which solves sudoku puzzle if places filled correctly.",
		author: "Udhav Sharma",
		github: "UdhavSharma2004"
	},
	{
		title: "Color Grid",
		ext_href: Metroxe, 
    filename: "color-grid.html",
		description: "Renders cards of random colors that can be copied by clicking on the card. Reload button to generate new cards.",
		author: "Rishabh Singh",
		github: "Rishabh-Singh-Codes"
	},
	{
		title: "AI Generated Game",
		ext_href: Metroxe, 
    filename: "openai-generated-entry.html",
		description: "This entry was coded completely by OpenAI using the prompt \"code me a game in one html file\".",
		author: "OpenAI",
		github: "openai"
	},
		{
		title: "Click challenge",
		ext_href: Metroxe, 
    filename: "aim-click-challenge.html",
		description: "You basically click the square as many times as you can in 30 seconds",
		author: "Abdullah Arafat",
		github: "dolosarafat"
	},
	{
		title: "Technical Documentation of Javascript",
		ext_href: Metroxe, 
    filename: "Technical-Doc.html",
		description: "The basic javascript documentation/cheatsheet",
		author: "Gorakshnath Bhongal",
		github: "gbb26"
	},
	{
		title: "SignUp Page",
		ext_href: Metroxe, 
    filename: "signup_page.html",
		description: "Simple signup page with no css by nithish gajula",
		author: "Nithish Gajula",
		github: "nithish-gajula"
	},
	{
		title: "Base64 to TXT Converter",
		ext_href: Metroxe, 
    filename: "Base64toTXT.html",
		description: "Convert any file to Base64 and download as TXT file",
		author: "Rupesh Soni",
		github: "rsoni124"
	},
	{
		title: "Mandelbrot Fractal",
		ext_href: Metroxe, 
    filename: "mandelbrot.html",
		description: "Simple mandelbrot fractal viewer in WebGL. Zoom in and move around with the mouse.",
		author: "Parkin Pham",
		github: "P4GAN"
        },
	{
		title: "Ripples",
		ext_href: Metroxe, 
    filename: "ripples.html",
		description: "Pleasant rippling circles appearing on the page",
		author: "Nicola Cerutti",
		github: "ncerutti"
	},
	{
	        title: "Image To Base64 Converter | PiXELCONVERTOR",
		ext_href: Metroxe, 
    filename: "PiXELCONVERTOR.html",
                description: "Convert Images to Base64",
		author: "Rupesh Soni",
		github: "rsoni124"
	},
];