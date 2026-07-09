// ---------- Popup Elements ----------

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const title = document.getElementById("letterTitle");
const content = document.getElementById("letterContent");

// ---------- Letter Data ----------

const letters = {

    letter1: {
        title: "Open when you're first getting this",
        text: "This is where your first letter will go."
    },

    letter2: {
        title: "Open when you're needing a hug",
        text: "This is where your hug letter will go."
    },

    letter3: {
        title: "Open when you're sick",
        text: "This is where your sick letter will go."
    },

    letter4: {
        title: "Open when you're feeling nostalgic",
        text: "This is where your nostalgic letter will go."
    },

    letter5: {
        title: "Open when you're missing my voice",
        text: "This is where this letter will go."
    },

    letter6: { title: "Open when you're struggling to sleep", 
              text: "Write your letter here..."
     },
    
    letter7: { title: "Open when you're having a good day ",
              text: "Write your letter here..."
     },
    
    letter8: { title: "Open when you're feeling lonely",
              text: "Write your letter here..."
    },
    
    letter9: { title: "Open when it's the 30th of September ",
              text: "Write your letter here..."
    },
    
    letter10:{ title: "Open when you're needing a giggle", 
              text: "Write your letter here..."
   },

    letter11:{ title: "Open when you're having a bad day ", 
              text: "Write your letter here..."
    },
    
    letter12:{ title: "Open when you're bored", 
              text: "Write your letter here..."
    },
    
    letter13:{ title: "Open when you're needing motivation", 
              text:"Write your letter here..."
    },
    
    letter14:{ title: "Open when you're needing some love", 
              text: "Write your letter here..."
    },
    
    letter15:{ title: "Open whe you're thinking about the future",
              text: "Write your letter here..."
    },
    
    letter16:{ title: "Open when you're feeling like the distance is too much ",
              text: "Write your letter here..."
    },
    
    letter17:{ title: "Open when you're feeling stressed", 
              text: "Write your letter here..."
    },
    
    letter18:{ title: "Open when you're happy",
              text: "Write your letter here..."
    },
    
    letter19:{ title: "Open when you're feeling lovey",
              text: "Write your letter here..."
    },
    
    letter20:{ title: "Open when we've had a fight ",
              text: "Write your letter here..."
    },
    
    letter21:{ title: "Open whe you need a pep talk",
              text: "Write your letter here..."
    },
    
    letter22:{ title: "Open when you need peace", text: "Write your letter here..."
    },
    
    letter23:{ title: "Open when you miss me voice", text:"Write your letter here..."
    },
    
    letter24:{ title: "Open when you're on a study break",
              text:"Write your letter here..."
    },
    
    letter25:{ title: "Open when you're feeling doubtful", 
              text:"Write your letter here..."
    },

    letter26:{ title: "Open when your heart tells you to",
              text: "Write your letter here..."
    },
    
    letter27:{ title: "Open when you had a dream of me", 
              text:"Write your letter here..."
    },
    
    letter28:{ title: "Open when you want to remember how we started",
              text: "Write your letter here..."
    },
    
    letter29:{ title: "Open when you're looking at the moon", 
              text: "Write your letter here..."
    },
    
    letter30:{ title: "Open when you forget how much I love you", 
              text: "Write your letter here..."
    },

};

// ---------- Open Letter ----------

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const data = letters[button.id];

        if (!data) return;

        title.textContent = data.title;
        content.textContent = data.text;

        popup.classList.add("show");
        popup.style.display = "flex";

    });

});

// ---------- Close ----------

closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

    setTimeout(() => {

        popup.style.display = "none";

    }, 200);

});

// ---------- Click Outside ----------

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.style.display = "none";

        }, 200);

    }

});

// ---------- Escape ----------

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.style.display = "none";

        }, 200);

    }

});
