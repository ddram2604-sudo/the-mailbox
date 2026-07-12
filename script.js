// ---------- Popup Elements ----------

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const title = document.getElementById("letterTitle");
const content = document.getElementById("letterContent");

// ---------- Letter Data ----------

const letters = {

    letter1: {
        title: "Open when you're first getting this",
        text: `Dear Arthur,
Hi my love! So here it is, this project I've worked so hard on just for you. 
I missed the soft intimacy and tradition we created with our letters. 
I wanted to create our own lil world fulled with our love.

`
    },

    letter2: {
        title: "Open when you're needing a hug",
       text: `
Write your letter here...

`
    },

    letter3: {
        title: "Open when you're sick",
        text: `
Write your letter here...

`
    },

    letter4: {
        title: "Open when you're feeling nostalgic",
        text: `
Write your letter here...

`
    },

    letter5: {
        title: "Open when you're missing my voice",
        text: `
Write your letter here...

`
    },

    letter6: { title: "Open when you're struggling to sleep", 
              text: `
Write your letter here...

`
     },
    
    letter7: { title: "Open when you're having a good day ",
             text: `
Write your letter here...

`
     },
    
    letter8: { title: "Open when you're feeling lonely",
            text: `
Write your letter here...

`
    },
    
    letter9: { title: "Open when it's the 30th of September ",
            text: `
Write your letter here...

`
    },
    
    letter10:{ title: "Open when you're needing a giggle", 
             text: `
Write your letter here...

`
   },

    letter11:{ title: "Open when you're having a bad day ", 
              text: `
Write your letter here...

`
    },
    
    letter12:{ title: "Open when you're bored", 
             text: `
Write your letter here...

`
    },
    
    letter13:{ title: "Open when you're needing motivation", 
              text: `
Write your letter here...

`         
    },
    
    letter14:{ title: "Open when you're needing some love", 
             text: `
Write your letter here...

`
    },
    
    letter15:{ title: "Open when you're thinking about the future",
              text: `
Write your letter here...

`
    },
    
    letter16:{ title: "Open when you're feeling like the distance is too much ",
             text: `
Write your letter here...

`
    },
    
    letter17:{ title: "Open when you're feeling stressed", 
             text: `
Write your letter here...

`
    },
    
    letter18:{ title: "Open when you're happy",
             text: `
-Dear Arthur 
	Hii there smileyy!! so happy so adorable! 
    This is so strange writing to you , well future you and having 0 context....
    It's giving time travelling inter-dimensionally vibes { I'm a pro in this }.
    All I can tell you is how I feel about this glorious feeling (you feeling happy ) as I feel it right as Present Dani { Past Dani - to you }.
    Well, sir I'm sitting here gleaming from ear to ear because I'm simply just imagining you just smiling and experiencing joy. 
    I believe my heart is full right now. I don't need to know why, what caused such a good mood right now.
    I'm just grateful that in this moment and everything that led up to it. 
    I pray that it stays just like this because I know that across all the dimensions every version of me {past, present and future} want the same thing.
    Just to see you happy and winning.
	I love you truly, my champion.

    xoxo
-Your Cindy
`
    },
    
    letter19:{ title: "Open when you're feeling lovey",
             text: `
Write your letter here...

`
    },
    
    letter20:{ title: "Open when we've had a fight ",
             text: `
Write your letter here...

`
    },
    
    letter21:{ title: "Open when you need a pep talk",
             text: `
Write your letter here...

`
    },
    
    letter22:{ title: "Open when you need peace", 
              text: `
Write your letter here...

`
    },  
    
    letter23:{ title: "Open when you miss my voice", 
             text: `
Write your letter here...

`
    },
    
    letter24:{ title: "Open when you're on a study break",
             text: `
Write your letter here...

`
    },
    
    letter25:{ title: "Open when you're feeling doubtful", 
              text: `
Write your letter here...

`
    },

    letter26:{ title: "Open when your heart tells you to",
             text: `
Write your letter here...

`
    },
    
    letter27:{ title: "Open when you had a dream of me", 
              text: `
Write your letter here...

`
    },
    
    letter28:{ title: "Open when you want to remember how we started",
              text: `
Write your letter here...

`
    },
    
    letter29:{ title: "Open when you're looking at the moon", 
             text: `
Write your letter here...

`
    },
    
    letter30:{ title: "Open when you forget how much I love you", 
             text: `
Write your letter here...

`
    }

};

// ---------- Open Letter ----------

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const data = letters[button.id];

        if (!data) return;

      title.textContent = data.title;

popup.classList.add("show");

typeWriter(data.text);

    });

});

// ---------- Close ----------

closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

// ---------- Click Outside ----------

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("show");

    }

});


// ---------- Escape ----------

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        popup.classList.remove("show");

    }

});

// ---------- Typewriter ----------

let typing = false;
let typingInterval;

function typeWriter(text){

    clearInterval(typingInterval);

    typing = true;

    content.innerHTML = "";

    let i = 0;

    typingInterval = setInterval(() => {

        content.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typingInterval);

            typing = false;

        }

    },20);

}

