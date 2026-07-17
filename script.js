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
I really hope you love it.

xoxo 
-Your Cindy
`
    },

    letter2: {
        title: "Open when you're needing a hug",
       text: `
	   Dear Arthur 
DON'T THINK IM CRAZY BUT get comfy for a second (or just take a deep breath) and pretend
I'm wrapping my arms around you.
I'm not going anywhere just yet.
You don't have to explain why you opened this letter.
Maybe you know exactly why, maybe you don't. 
Either way, you deserve a hug.
If I were with you right now,
I'd probably squeeze you a little too tightly with all the might and strength my body has
( which is more than like an army) I'd laugh, absolutely refuse to let go of you.
I really wish I could do that.
So instead, imagine me here.
My head resting against you.
Everything quiet. 
Just... us.
I hope you know that you're incredibly easy to care about. 
You never have to earn my affection or wait until you're at your best to deserve it. 
Whether you're happy, tired, excited, grumpy, overwhelmed, or just feeling a little off, 
I'd still want to hug you exactly the same. 
Sometimes I think hugs say all the things words struggle to.
"I'm here."
"I've got you."
"You can stay a little longer."
"I missed you."
"I love you."
So if this letter can do even a tiny bit of that until I get to hug you for real, 
then it's doing its job.
I'm sending you the biggest hug I possibly can through this piece of paper. 
YES Its an upsy hug !
Don't let go too quickly.

xoxo 
-Your Cindy
`
    },

    letter3: {
        title: "Open when you're sick",
        text: ` Dear Arthur 
Hey, you.
First things first...

I'm sorry you're not feeling well. If I could teleport to you right now,
I'd be at your door with a blanket, water, soup, and probably enough meds to
survive a zombie apocalypse.
I bet you miss my bossy mom mode now.
Instead, you're stuck with this letter.
So here's what I need you to do 
Drink your water.
Yes, *actual* water.
Take your medicine if you're supposed to.(text me I will get you what you need)
Get some rest.

I know being sick is boring and annoying, and I also know you're probably going to tell yourself,
"I'm fine," five minutes before coughing up a lung. 
Please don't be stubborn. Let your body do its thing.

I wish I could be there to check your temperature, make you something warm, complain that
you're impossible to look after,ask you a million times if you took your meds and 
secretly enjoy taking care of you anyway.

I'd probably BORROW with no intent of return or "steal" as you put it one of your hoodies 
to keep warm while we watched absolutely FIRE cartoon. 
I'd make fun of how dramatic you are when you're sick... even though 
I'd still be asking every ten minutes if you needed anything.

So, until I can do all of that in person, let this be your reminder that
someone is thinking about you and wishing they could make today a little easier.

Be patient with yourself. You don't have to bounce back immediately. 
Your only job right now is to get better.

And when you're finally feeling like yourself again, I fully expect an update saying, 
"Guess who's alive?"

I'll be waiting.

Get well soon, my favorite patient
xoxo
-Your Cindy
`
    },

    letter4: {
        title: "Open when you're feeling nostalgic",
        text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },

    letter5: {
        title: "Open when you're missing my voice",
        text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },

    letter6: { title: "Open when you're struggling to sleep", 
              text: `
Write your letter here...
xoxo 
-Your Cindy
`
     },
    
    letter7: { title: "Open when you're having a good day ",
             text: `
Write your letter here...
xoxo 
-Your Cindy
`
     },
    
    letter8: { title: "Open when you're feeling lonely",
            text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },
    
    letter9: { title: "Open when it's the 30th of September ",
            text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },
    
    letter10:{ title: "Open when you're needing a giggle", 
             text: `
Write your letter here...
xoxo 
-Your Cindy
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

