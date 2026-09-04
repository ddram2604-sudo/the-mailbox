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
        title: "Open when you're feeling sad ",
        text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },

    letter6: { title: "Open when you're struggling to sleep", 
              text: ` Dear Arthur

Hi love.

So you're starting to miss sleep.

I know how much you love your sleep, so I'm taking this very seriously.
I wish I could just teleport to you and make you get into bed properly.
I know sometimes you're tired, but your brain just won't switch off.
You think about everything, overthink everything, and somehow convince yourself that 2am is the perfect time to start solving every problem you've ever had.

Don't.

You don't need to figure everything out tonight. Whatever is waiting for you tomorrow can wait until tomorrow.

Just get comfortable, put your phone down, close your eyes and let yourself rest.

And if I was there, I'd probably tell you to stop fighting sleep while annoying you until you finally gave in. I'd steal some of your blanket, complain that you're taking up too much space and then secretly make sure you're actually comfortable.

So go to sleep, silly.

You can deal with the world again when the sun comes up.

For now, just rest.

xoxo 
-Your Cindy
`
     },
    
    letter7: { title: "Open when you're having a good day ",
             text: `Dear Arthur

Hi my love.

First of all, I'm so happy you're having a good day.

I wish I could be there with you for it, but even when I'm not, I still want to know all about it. Tell me what happened. Tell me what made you smile. Tell me everything that made today feel good.

I'm genuinely happy when you're happy, and I hope you know that.

Sometimes I wish I could just be there beside you for the little moments too, even if we're doing absolutely nothing. I'd probably make you laugh, annoy you a little and then act innocent when you complain about it.

So enjoy your day.

You deserve good days. You deserve moments that make you forget about everything else for a little while.

And even if I'm not there beside you, just know I'm somewhere smiling because you're having a good day too.

Now go enjoy it properly.


xoxo 
-Your Cindy
`
     },
    
    letter8: { title: "Open when you're feeling lonely",
            text: `Dear Arthur

Hi love.

I'm sorry you're feeling lonely.

I know that feeling more than I'd probably like to admit. I've had days where I've felt like I'm surrounded by people and still somehow completely alone, so I understand how heavy it can feel.

I never want you to feel like you have to sit with that feeling by yourself.

Even when I'm not physically there, you're still someone I carry with me. You're in my thoughts, in little things that remind me of you, and in my heart more than you probably realise.

So if you're having one of those days, please remember that you're loved. You're wanted. You're thought about.

And if I could be there right now, I'd probably sit beside you, steal some of your space, complain that you're being dramatic and then stay there until you felt a little less alone.

You don't have to be okay every second.

Just take it one moment at a time.

I'm here, even when I'm not there.

And you're never as alone as you think you are.


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
              text: ` Dear Arthur

Hi love.

So... you're having a bad day.

I know what it's like to have those days where everything just feels a little heavier than it should. I've had plenty of them, and you've seen me through a lot of mine.

You've been there for me through some really shitty days, and I don't think I say thank you for that enough.

I wish I could give you one of those big, stupid hugs right now. The kind where I don't even say anything, I just hold you until everything feels a little less shit.

Whatever happened today doesn't have to define the rest of it. You don't have to fix everything right now. You can have a bad day and still be okay.

So be gentle with yourself today.

And remember that just because today is bad, doesn't mean tomorrow will be.

I'm always rooting for you, even on the days where you don't feel like rooting for yourself.

xoxo 
-Your Cindy

`
    },
    
    letter12:{ title: "Open when you're bored", 
             text: ` Dear Arthur

Hi handsome.

You're bored?

Okay, luckily for you, you've opened the correct letter.

First things first, text me.

Seriously. Send me a random thought, a stupid picture, tell me something I don't need to know, complain about your day, anything. I will entertain you.

I can be your personal source of nonsense for the next however long you need.

We could argue about something completely pointless, send each other ridiculous videos, play a game, or just talk absolute shit until one of us gets tired.

So don't sit there being bored when you have me.

Go on.

Text me.

xoxo 
-Your Cindy

`
    },
    
    letter13:{ title: "Open when you're needing motivation", 
              text: ` Dear Arthur

My love,

I know sometimes you just need someone to remind you that you can do it.

So here I am.

Whatever you're trying to do right now, just take it one step at a time. You don't have to do everything perfectly and you don't have to have everything figured out before you start.

You've done difficult things before. You've gotten through things you didn't think you would. Don't forget that.

I'm proud of you for trying, even when you don't feel motivated.

So get up, drink some water, put your big boy pants on and go do the thing.

And if you need someone to cheer you on, you already know where I am.

Now go make me proud.

xoxo 
-Your Cindy

`         
    },
    
    letter14:{ title: "Open when you're needing some love", 
             text: `
Dear Arthur

Hi love.

So you need a little extra love today.

Well, unfortunately for you, you're stuck with me.

I hope you know just how loved you are. Not only when you're happy or when everything is going right, but on the messy days too. You don't have to earn love by being perfect.

I'd give you the biggest hug right now if I could. I'd probably squeeze you way too hard, refuse to let go and then complain that you're annoying me while secretly enjoying every second of it.

You deserve to feel loved.

You deserve to feel wanted.

And you deserve to know that there is someone out here thinking about you and wishing they could be beside you right now.

So consider this letter a little reminder from me:

I love you.

Even when I'm not there to say it in person.
xoxo 
-Your Cindy

`
    },
    
    letter15:{ title: "Open when you're thinking about the future",
              text: ` 

Dear Arthur

Hi love.

So you're thinking about the future.

I think about it too sometimes. And honestly, there is so much uncertainty in it. We don't know where we'll be, what we'll be doing, what life will look like, or how much is going to change between now and then.

That's a little scary, but it's also kind of exciting.

There are so many things we haven't experienced yet. So many places we haven't been, things we haven't done, and memories we haven't even made.

I don't know exactly what the future looks like for either of us, but I really, really hope I'm somewhere in it.

I hope there are still mornings where I get to annoy you, nights where we stay up talking about absolutely nothing, and little moments that remind us how far we've come.

Whatever happens, I hope life is kind to you.

And selfishly, I hope I get to be there for a lot of it.


xoxo 
-Your Cindy

`
    },
    
    letter16:{ title: "Open when you're feeling like the distance is too much ",
             text: ` Dear Arthur

My love,

I know this feeling.

I feel the distance all the freaking time.

Sometimes I just wish I could skip the miles between us and have you right here. No waiting for messages, no counting down until we see each other, no wishing you were beside me when something happens.

Just you. Here.

I hate that sometimes I have something I want to tell you and my first thought is how much easier it would be if I could just turn around and tell you in person.

But even when the distance feels huge, it doesn't make you any less important to me.

We're still here. We're still us.

So on the days where the distance feels unbearable, just remember that I miss you too.

And one day, hopefully, we'll look back at all these miles and wonder how we ever managed them.

Until then, come here mentally so I can give you a really big hug.
xoxo 
-Your Cindy

`
    },
    
    letter17:{ title: "Open when you're feeling stressed", 
			  text: ` Dear Arthur

Hi you.

First things first, breathe.

I know your brain is probably doing that thing where it takes one problem and somehow turns it into seventeen.

You don't have to solve everything right now.

Whatever is stressing you out can be broken down. One thing at a time. One problem at a time. One breath at a time.

Please remember that you are allowed to take a break. You are allowed to rest. You do not have to be productive every second of the day to be doing enough.

If I was there, I'd probably tell you to stop overthinking, make you drink some water, and force you to sit down for five minutes.

And yes, I'd probably annoy you while doing it.

So unclench your jaw, drop your shoulders, take a breath, and deal with the next thing.

Not everything.

Just the next thing.

You've got this, love.

xoxo
-Your Cindy
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
Dear Arthur

Hi my love.

Ohhhh, so you're feeling lovey-dovey.

I knew you'd come around eventually.

If you're sitting there thinking about me right now, just know that I'm probably thinking about you too.

I hope you're smiling a little while reading this because that's exactly what I want.

I want you to picture me beside you, probably cuddling into you, stealing your warmth, annoying you every five seconds and then pretending I didn't do anything.

I miss being close to you.

I miss the little things. The stupid conversations, the random touches, laughing at things that aren't even funny, and just being together without having to think about it.

So if you're feeling extra mushy right now, you are absolutely allowed to be.

Think about me.

Miss me a little.

And just know that somewhere, your girl is probably doing the exact same thing.
xoxo
-Your Cindy

`
    },
    
    letter20:{ title: "Open when we've had a fight ",
             text: `Dear Arthur

Hi love.

So... we've had a fight.

I'm sure neither of us is feeling particularly lovely right now, but I don't want you to forget that being upset with each other doesn't suddenly erase everything between us.

We're allowed to disagree. We're allowed to get frustrated. We're allowed to need a little space sometimes.

But I never want us to forget that we're on the same side.

I'm not going to pretend I'm always right, because let's be honest... sometimes I'm very stubborn. And I'm sure you can say the same about yourself.

So take a breath. Cool down. Think about what actually matters.

I don't want us fighting against each other. I want us figuring things out together.

Whatever happened, I still love you.

And when you're ready, come talk to me.

We'll figure it out.
xoxo 
- Your Cindy 
`
    },
    
    letter21:{ title: "Open when you need a pep talk",
             text: `
Dear Arthur

Hi handsome.

Okay, listen to me.

You are capable of so much more than you give yourself credit for.

I know sometimes you get stuck in your own head and start convincing yourself that you can't do something before you've even tried.

Stop that.

You've made it through every bad day you've had so far. You've figured things out before. You've learned, grown, messed up, tried again and kept going.

You don't need to be perfect.

You just need to keep moving.

So whatever you're dealing with right now, take it one step at a time.

And if nobody has told you today, I'm proud of you.

Now go do the thing.

Yes, I'm bossing you around.

You're welcome.
xoxo
-Your Cindy 
`
    },
    
    letter22:{ title: "Open when you need peace", 
              text: `
Dear Arthur

My love,

If you're reading this, I hope you can take a second to slow everything down.

You don't have to answer every question right now.
You don't have to solve every problem tonight.
You don't have to carry everything at once.

Just breathe.

Let yourself have a quiet moment without feeling like you need to be doing something.

Close your eyes for a little while. Put your phone down. Get comfortable.

Imagine that I'm sitting beside you, not saying anything, just being there.

Sometimes you don't need advice.
Sometimes you just need someone beside you.

So let this be your little reminder that you can rest.

The world will still be there when you wake up.

For now, just be still.

You've got nothing to prove right now.
To me, you're more than enough.
xoxo 
-Your Cindy 

`
    },  
    
    letter23:{ title: "Open when you miss my voice ", 
             text: `
Write your letter here...

`
    },
    
    letter24:{ title: "Open when you're on a study break",
             text: ` ### Open when you're on a study break

Dear Arthur

Hi love.

So you've finally taken a study break.

First of all, I'm proud of you for actually taking one because I know that degree is probably trying to kill you slowly.

I know studying can get really stressful, especially when you have a million things to remember and it feels like your brain has simply decided that it knows enough.

So for the next few minutes, you are NOT allowed to think about your degree.

Drink some water.
Eat something.
Stretch.
Look away from the screen.

And most importantly, remember that you are more than your grades and more than how productive you were today.

You can have a break without feeling guilty about it.

And if I was there, I'd probably distract you even more, yk I'm a good stress reliever.

So enjoy your little break, my love.

Then go back and kick that degree's ass.
xoxo 
-Your Cindy 


`
    },
    
    letter25:{ title: "Open when you're feeling doubtful", 
              text: ` ### Open when you're feeling doubtful

Dear Arthur

My love,

I know sometimes you doubt yourself.

You start wondering if you're doing enough, if you're good enough, if you're making the right decisions.

So let me remind you of something.

You don't have to have everything figured out right now.

You're learning.
You're growing.
You're becoming the person you're supposed to be.

Don't let one bad day make you question everything you've already accomplished.

I believe in you.

Even when you don't believe in yourself, I'll happily believe for the both of us.

So keep going.

You are doing better than you think you are.


xoxo 
-Your Cindy 
`
    },

    letter26:{ title: "Open when your heart tells you to",
             text: ` ### Open when your heart tells you to...

Dear Arthur

Hi love.

Well...

If your heart brought you here, I'm guessing there's a reason.

So listen to it.

Sometimes your heart knows what you need before your brain has had time to overthink it.

Maybe you miss me.
Maybe you want to tell me something.
Maybe you just need to feel close to me for a little while.

Whatever it is, don't ignore it.

And if what your heart is telling you is that you need me...

You know where I am.



`
    },
    
    letter27:{ title: "Open when you had a dream of me", 
              text: ` ### Open when you dream of me

Dear Arthur

Hi my love.

So I made it into your dreams?

I knew I'd eventually make my way in there. 😭

I hope dream-me was nice to you.

Or maybe I was annoying you like I usually do.

Either way, I hope you woke up with a little smile.

There's something really sweet about knowing that, even while you're asleep, some little part of your brain decided to bring me along.

I wish I could actually wake up beside you after one of those dreams and hear exactly what happened.

So tell me about it when you can.

And if you go back to sleep tonight, maybe I'll make another appearance.

Hopefully I'm behaving this time.

xoxo 
-Your Cindy

`
    },
    
    letter28:{ title: "Open when you want to remember how we started",
              text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },
    
    letter29:{ title: "Open when you're looking at the moon", 
             text: `
Write your letter here...
xoxo 
-Your Cindy
`
    },
    
    letter30:{ title: "Open when you forget how much I love you", 
             text: `
xoxo 
-Your Cindy
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

