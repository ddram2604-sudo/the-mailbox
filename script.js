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
I wanted to create our own lil world filled with our love, 
our memories and all the little things that remind me of us.
I really, really hope you love it.

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
I'm sending you the biggest hug I possibly can through this piece of my love. 
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
So here's what I need you to do !
Drink your water.
Yes, *actual* water.
Take your medicine if you're supposed to.(text me I will get you what you need)
Get some rest.

I know being sick is boring and annoying, and I also know you're probably going to tell yourself,
"I'm fine," five minutes before coughing up a lung. 
Please don't be stubborn. Let your body do its thing.

I wish I could be there to check your temperature, make you something warm to devour, complain that
you're impossible to look after,ask you a million times if you took your meds and 
secretly enjoy taking care of you anyway.

I'd probably BORROW (with no intent of return or "steal" as you put it) one of your hoodies 
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
Dear Arthur

Hi my champion.

So... you're feeling a little nostalgic, huh?

You miss me?
Oh, I know you do. 😭

We've had so many days together. So many random little moments, stupid jokes, long conversations, and memories that I know I'll carry with me for a very long time.

We've created so many memories together, and sometimes I find myself thinking about them too.

Honestly, I think I live in a constant state of nostalgia. I'll randomly remember something we did or something you said and suddenly I'm right back there, thinking about how happy I was in that moment.

So if you're sitting there missing me, just know I'm probably doing the exact same thing somewhere.

But I'll be honest with you...

As much as I love looking back at everything we've already done, what makes me even more excited is knowing that we haven't made all our memories yet.

There's still so much ahead of us.

More places.
More stupid little moments.
More movies to make..
More things we'll laugh about.
More memories that haven't even happened yet.

So I know nostalgia can feel a little heavy sometimes, but don't let it make you feel like the best parts are behind us.

We still have so much more to make.

And I can't wait to make them with you.

xoxo 
-Your Cindy
`
    },

    letter5: {
        title: "Open when you're feeling sad ",
        text: ` Dear Arthur

Hi my baby.

You're feeling sad?

Come here.

I know I can't physically give you a hug right now, but just pretend I am. A really big one. The kind where I don't let go until you stop pretending you're fine.

I hate knowing that you're having a bad day or that something is sitting heavily on your heart.

You don't have to hide it from me.

You don't have to pretend to be okay just because you don't want to bother anyone.

Whatever you're feeling is okay.

You can be sad.
You can be tired.
You can have a shitty day.

You don't have to fix everything immediately.

I just want you to remember that you're loved.

And if I were there, I'd probably sit with you, give you a million kisses, make you something to eat and then annoy you until I saw you smile again.

So for now, let this letter be my little hug from far away.

Take a breath, my baby.

You don't have to carry everything alone.

I'm thinking of you, and I'm sending you the biggest kiss I possibly can.


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
Well more like when the sun has been up for hours, you aren't an early bird.

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
            text: ` Dear Arthur

Hi my love.

It's our second 309.

And I can't help but think about that day at Canal Walk.

We were so excited to finally go see Final Destination. We had the whole day planned out, and you know me... I LOVE a plan. I'm very A-type. I like knowing what's happening, where we're going, what we're doing and how everything is supposed to work.

And then... we didn't even see the movie. 😭

Our plans didn't work out the way we thought they would, but somehow we still ended up having such a good day.

We went to Bossa, had our little moments, that waitress, my camera, and then there was our table.

309.

That little number ended up meaning so much more than it ever should have.

It's the first picture we ever took together on my Polaroid. I still have it, and every time I see it, I'm reminded of that day, that table, and everything that came after.

And then 309 became something else.

It's the day we said we were going to get hitched. The day we decided that one day, that would be our marriage day.

I think that's what makes 309 so special to me.

Because it came from a day that didn't even go according to plan.

I had a plan. We had a plan. We were meant to see a movie, and we didn't. But somehow, in the middle of everything not going the way we expected, we still made our own little memory.

And I think that's what 309 will always remind me of.

That even in this big, scary world where things are constantly changing and plans don't always work out, somehow we always find a way to make our own little world.

A little place that belongs to us.

Nobody else really knows what 309 means, and I kind of love that.

It's something small.
Something silly.
Something special.

Our own little secret.

And maybe that's what I love most about us. We don't need everything to go perfectly to have a good time. Sometimes the plans fall apart, and somehow we still find our way back to each other.

So on our second 309, I'll think about that little table number, that Polaroid, that day at Canal Walk, and how something so small ended up becoming something so important to us.

And I hope we have many more days like that.

More plans that don't go according to plan.
More random adventures.
More little worlds that belong only to us.

And hopefully one day, we'll look back at that tiny 309 on our first Polaroid and know that it really was the beginning of something.

Happy 309, my love.

Our little day.
Our little secret.
Our little world.


xoxo 
-Your Cindy
`
    },
    
    letter10:{ title: "Open when you're needing a giggle", 
             text: ` Dear Arthur

Hi my love.

You need a giggle?

Well, lucky for you, you've come to the right place.

I could tell you something funny, but realistically I'm probably the funniest thing in your life anyway. 😌

Actually, don't take that seriously.

But if you're having one of those days where everything feels a little too serious, I need you to stop for a second and remember that somewhere out there is a girl who would absolutely make a fool of herself just to make you laugh.

I'd probably make some stupid face, send you the dumbest picture I have, make fun of you for something completely random, or just start saying nonsense until you finally crack.

So consider this your official reminder to smile.

And if that didn't work...

Text me.

I'll figure something out.


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

So I'm officially the girl of your dreams huh? ( WAS I HOT? IN SAID DREAM )

I hope dream-me was nice to you.

Or maybe I was annoying you like I usually do.

Either way, I hope you woke up with a little smile.

There's something really sweet about knowing that, even while you're asleep, some little part of your brain decided to bring me along.

I wish I could actually wake up beside you after one of those dreams and hear exactly what happened.

So tell me about it when you can.

And if you go back to sleep tonight, maybe I'll make another appearance just to be a tease ( just how you like me ).

Hopefully I'm behaving this time.

xoxo 
-Your Cindy

`
    },
    
    letter28:{ title: "Open when you want to remember how we started",
              text: `
Dear Arthur

Hi my love.

So you want to remember how we started.

Okay... let's go all the way back.

I remember that day so clearly.

I wasn't sitting properly on the bench. I was sitting the wrong way, just kind of there, in the middle of the garden.

And I remember you walking up.

I watched you.

I remember you coming over and sitting right next to me.

You had been looking at me, and I remember noticing.

And I remember thinking, “Oh my God... this is the first time we have ever actually interacted.”

I can't remember what we were talking about for the life of me.

But I remember looking down and telling you that I didn't like your socks and sandals. 😭

And I started complaining about that, and somehow that became our first little interaction.

It's funny how I don't remember the conversation, but I remember you.

I remember being shy.
I remember being nervous.
I remember being scared.

But I also remember being so drawn to you.

And honestly... you did no work. 😭

I genuinely feel like I did ALL the work.

I was running around, going to see you, finding reasons to be around you, doing everything I could, while you were just sitting there being you.

But somehow, somewhere in that garden, on that bench, something happened.

Something just clicked.

Two kids who had no idea what they were doing, sitting beside each other, too nervous to understand what was happening, and somehow starting something that would become this.

And when I think about how we started, I don't think about some huge romantic moment.

I think about you walking over.

I think about watching you sit beside me.

I think about looking at you and realising that this was the first time.

The first interaction.

The beginning.

And that memory is so deeply engraved in my head that I could probably close my eyes and see it all again.

Two kids in love, man.

And somehow, that little moment became us.  I'm in tears here because whatever we are has come so far. And honestly I wouldn't change a thing because the story of us . SO PEAK.
xoxo 
-Your Cindy
`
    },
    
    letter29:{ title: "Open when you're looking at the moon", 
             text: `Dear Arthur

Hi my love.

If you're looking at the moon right now, I hope you think of me.

We've spent so many nights under her.

So many nights looking up at the sky, talking about absolutely everything and nothing at the same time.

I always used to look at the moon and say, “Arthur, isn't she so gorgeous?” (especially during departure) 

I'd always tell you how beautiful she was.

And every time, I'd turn to you , you'd be looking at me and you'd say something like, “Yeah, she is beautiful... but not as beautiful as you.”

And I swear, those were some of the most romantic moments I've ever experienced.

Because I would be staring at something I thought was so beautiful, and you'd somehow saw me in that same light.

Now whenever I look at the moon, I can't help but think of you.

I think about all those nights.
All those conversations.
All those little moments underneath the same sky.

And I hope that whenever you look at her, somewhere in your mind, you think of me too.

Because even when we're far apart, we're still looking at the same moon.

And maybe that's why she feels a little different to me now.

She's not just beautiful anymore.

She's a reminder of us.

Of all the nights we've shared, all the things we've said, and all the nights we still have left to spend together.

So look at her for me.

And maybe look up and think,

“Not as beautiful as you.”

Because I'll probably be somewhere looking right back. 


xoxo 
-Your Cindy
`
    },
    
    letter30:{ title: "Open when you forget how much I love you", 
             text: ` Dear Arthur

Hi my love.

If you're reading this, I think you probably need reminding.

So... let me remind you.

I've always loved you for being you.

Not because you ticked some list in my head, or because you were everything I thought I wanted. You were just... you.

And somehow, I loved that.

I love who you are, but I also love who I get to be with you.

I love the way you look at me.
I love the way you treat me.
I love the way you see me.
I love the way you make me feel.
I love that I can look at you and know there's so much more underneath what everyone else gets to see.

I love your little things.

I love being able to picture you bobbing your little head to a song with a drink in your hand.
I love how you treat others.
I love that I actually got to dance with you.

I love that your arms are my home.
I love all those tiny pieces of you that probably seem so ordinary to you, but somehow became some of my favourite things.

And I think what I love most is that I got to see you without all the walls.

I got to see you fully.

The soft parts. The weird parts. The vulnerable parts. The parts you don't just hand to anybody.

And you let me in.

And somehow, you accepted me when my walls came down too.

You saw me without all the armour I had built around myself, and you stayed.

I don't think you realise how much that means to me.

Because loving someone is one thing.

But being trusted enough to really **know** them?

To see them when they're not trying to be anything?

That is something else entirely.

I love our memories. I love our stupid little moments. I love the way we've built this whole little world without even really meaning to.

And I know life changes. I know people change. I know sometimes things get confusing and hard.

But none of that changes the fact that when I think of you, I think of **you**.

Not some perfect version.

Not some idea.

Just you.

My Arthur.

So if you ever forget how much I love you, come back here.

Read this again.

And remember that there is someone out there who knows you, loves you, misses you, and has seen parts of you that I will always treasure.

And yes, I'm being disgustingly sentimental.

I love you, Barry 

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

