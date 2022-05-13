import kaboom from "kaboom"
kaboom()


loadSprite("womb", "sprites/womb.jpg");
loadSprite("back", "sprites/back.png");
loadPedit("button", "sprites/button.pedit")
loadPedit("yes", "sprites/yes.pedit");
loadPedit("no", "sprites/no.pedit");
loadSprite("art!!", "sprites/art!!.jpeg");
loadSound("bad to", "sounds/bad to.mp3");
loadSound("finally", "sounds/finally.mp3");
loadSound("SFX", "sounds/SFX.wav");
//setup 



let text_timer = 0;
let click = 0;
let t1 = false;
let buttonDown = false;
let answer1;
let answer2;
let answer3;
let woman = false;
let yes = 0;
let no = 0;

// btn.color = rgb(
//    wave(0, 255, t),
//    wave(0, 255, t + 2),
//    wave(0, 255, t + 4),
//         )

// let bg = add([
//   sprite("womb"),
//   scale(0.1),
//   pos(0, 0)
// ])

for (let j = 0; j < (height()/70); j ++){
for (let i = 0; i < (width()/65); i++) {
  add([
  sprite("back"),
  scale(0.1),
  pos(65 * i, 70 * j)
])
}
}


const timer = add([
  text('0'),
  pos(300, 110000),
  layer('ui'),
  'timer',
  {
    time: text_timer,
  },
])

timer.action(()=> {
if(timer.time > 0){
  timer.time -= dt()
  timer.text = timer.time.toFixed(1)
}
  if (timer.time <= 0){
    comedy.pos.x = 20000;
  }
})

//THE BUTTON(s)

const yesB =
  add([
    sprite("yes"),
    state("idle", ["idle", "click"]),
  	pos(width() + 60, height()/2),
    origin("center"),
    area(),
    scale(3),
    "yesB"
  ])

const noB =
  add([
    sprite("no"),
    state("idle", ["idle", "click"]),
  	pos(width() + 60, height()/2),
    origin("center"),
    area(),
    scale(3),
    "noB"
  ])

const button = 
  add([
  	sprite("button"),
    state("idle", ["idle", "click"]),
  	pos(width()/2, height()/2),
    origin("center"),
  	area(),
    scale(4),
    "button"
])

button.onStateEnter("idle", () => {
  buttonDown = false;
  if (woman == false) {
  button.play("idle") }
  
})

button.onStateEnter("click", () => {
  buttonDown = true;
 // play("bad to", {
 //   loop: false,
 //   volume: 0.3
 // })
  if (woman == false) {
  button.play("click", {
    loop: false
  })
  play("SFX",{
    loop: false
  })
  }
  wait(.17, () => {
    click = click + 1;
    button.enterState("idle")
  })
})

onClick("button", ()=>{
  console.log(buttonDown);
    if (click == 9){
      play("finally", {
      volume: 0.4
      });
    }
   if (buttonDown == false){
      button.enterState("click")
   } else {
   console.log("fuck you")
   }
})

yesB.onStateEnter("idle", () => {
  buttonDown = false;
  if (woman == false) {
  yesB.play("idle") }
  
})

yesB.onStateEnter("click", () => {
  yes = yes + 1;
    play("SFX",{
    loop: false
  })
  buttonDown = true;
 // play("bad to", {
  //  loop: false,
  //  volume: 0.3
 // })
  if (woman == false) {
  yesB.play("click", {
    loop: false
  })
  }
  wait(.17, () => {
    click = click + 1;
    yesB.enterState("idle")
  })
})

onClick("yesB", ()=>{
  console.log(buttonDown);
   if (buttonDown == false){
      yesB.enterState("click")
   } else {
   console.log("fuck you")
   }
})

//

noB.onStateEnter("idle", () => {
  buttonDown = false;
  if (woman == false) {
  noB.play("idle") }
  
})

noB.onStateEnter("click", () => {
  no = no + 1;
    play("SFX",{
    loop: false
  })
  buttonDown = true;
  if (woman == false) {
  noB.play("click", {
    loop: false
  })
  }
  wait(.17, () => {
    click = click + 1;
    noB.enterState("idle")
  })
})

onClick("noB", ()=>{
  console.log(buttonDown);
   if (buttonDown == false){
      noB.enterState("click")
   } else {
   console.log("fuck you")
   }
})

//the counter

  add([
    text('0', {
      size: 100
    }),
    pos(width()/2,height()/6), 
    origin("center"),
    layer('ui'),
    "fuck",
    fixed(),
    {value: click}
    ])

  onUpdate('fuck', (f) =>{
    f.text = click;
  }
)

let art1 = add ([
   sprite("art!!"),
   origin("center"),
   scale(0.07),
   pos(width() + 100, height()/2 + 10),
   "art1"
])

//the funny

  const comedy = add([
    text('Wow, 20 clicks? Thats a pretty good start! Unfortunely it looks like you\'re just getting started, after all, the title of this game is "1000 Clicks"',{
      size: 20,
      width: width() - 20,
    }),
    pos(20000,200), 
    layer('ui'),
    fixed(),
    ])

  comedy.onUpdate(() => {
if (click == 0){
      comedy.text = '1000 Clicks';
      timer.time = 1;
      comedy.pos.x = width()/2.2;
      comedy.pos.y = height()/1.5;
    } 
  
    
    if (click == 20){
      comedy.text = 'Wow, 20 clicks? Thats a pretty good start! Unfortunely it looks like you\'re just getting started, after all, the title of this game is "1000 Clicks"';
      timer.time = 7;
      comedy.pos.x = width()/40;
    } 
    
    if (click == 69){
      comedy.text = "man this joke is so funny. better pause so you can see it. better pause to read it. i bet you're soooo happy you paused to read this. ha ha hee hee";
      timer.time = 0.2;
      comedy.pos.x = width()/40;
      click = click + 1;
    }
    
    if (click == 100){
     comedy.text = "Look at you! You're officially 1/10th of the way done! just 900 more clicks to go";
      timer.time = 5;
      comedy.pos.x = width()/40;
    }
    
    if (click == 138){
      comedy.text = "So I have some errands to run, gotta pick up the kids from soccer practice, so I'll see you at a thousand. Cannot wait to meet you there, goodbye for now."
      timer.time = 7;
      comedy.pos.x = width()/40;
    }
    if (click == 217){
      comedy.text = "Right, I'm back! You would NOT believe how some of the parents are at little league soccer practices, like ANIMALS I tell you.";
      timer.time = 5;
      comedy.pos.x = width()/40;
    }

    
    if (click == 255){
      comedy.text = "So a thousand clicks, huh? I knew you could do it, always did, always had fai- hang on a minute..."
      timer.time = 5;
      comedy.pos.x = width()/40;
    }

    
    if (click == 270) {
      comedy.text = "270!!! You only have 270 clicks!!! I can't believe you LIED to me!!! After all I've done for you, for shame!!"
    comedy.pos.x = width()/40;
    timer.time = 8;
  }

  if (click == 330) {
  comedy.text = "Hey so I realized I overreacted with the 270 clicks thing, so I decided to draw a picture of you. Do you like it?"
  comedy.pos.x = width()/40;
  button.pos.x = width() + 60;
  noB.pos.x = width() * .75;
  yesB.pos.x = width() / 4;
  timer.time = 1000000;
  art1.pos.x = width()/2

  }

  if (click == 331){
    if (yes == 1) {
      comedy.text = "I knew you'd like it!! I'm so glad :)"
    } else if (no == 1) {
      comedy.text = "*sigh* yeah, I knew you wouldn't recognize art when you saw it.Go back to your clicking you scrub."
    }
    destroy(art1);
    comedy.pos.x = width() / 40;
    timer.time = 8;
    button.pos.x = width()/2;
    noB.pos.x = width() + 60;
    yesB.pos.x = width() + 60;
  }

    if (click == 420) {
      comedy.text = "A lesser woman would make the obvious joke. A greater one wouldn't bring it up at all. lol"
    comedy.pos.x = width()/40;
    timer.time = 8;
    }

    if (click == 500){
      comedy.text = "Oh, halfway? Since I doubt you're going to actually touch grass, you should at least get some water. Having someone die on the job is horrible for my career."
      comedy.pos.x = width()/40;
      timer.time = 8;
    }

      if (click == 690){
      comedy.text = "Yes. Haha. The funny number. Let's just keep going please."
      comedy.pos.x = width()/40;
      timer.time = 3;
    }

    if (click == 743){
      comedy.text = "Three fourths of the way there huh? How much time have you spent here? Hope our theme isn't driving you up the wall yet."
      comedy.pos.x = width()/40;
      timer.time = 3;
    }

        if (click == 900){
      comedy.text = "90% there, as of now. Would you actually go outside now? Maybe talk to someone? No? Right then."
      comedy.pos.x = width()/40;
      timer.time = 8;
    }

        if (click == 990){
      comedy.text = "Ten clicks. Just press that button ten more times and I can finally leave. God I miss my wife"
      comedy.pos.x = width()/40;
      timer.time = 3;
    }

        if (click == 1000){
      comedy.text = "Well, that's a wrap. Hope you enjoyed, and I hope you realize that you are never, ever going to get this time back. I hope you're satisfied."
      comedy.pos.x = width()/40;
      timer.time = 100;
    }

            if (click == 1001){
      comedy.text = "Aaaaand of course you're not satisfied. You never are. You just pressed a button a thousand and one times hoping something would happen."
      comedy.pos.x = width()/40;
      timer.time = 10;
    }

                if (click == 1020){
      comedy.text = "And you know what? I don't care. I quit. Is there more content past a thousand and twenty clicks? If I said yes would you please leave me alone?"
      comedy.pos.x = width()/40;
      timer.time = 10;
    }

                if (click == 1040){
      comedy.text = "There is more content, by the way. You just have to keep pressing that button, and you'll find it. Trust me, have I ever lied to you?"
  //add yes or no response buttons
      comedy.pos.x = width()/40;
      timer.time = 10;
    }

                    if (click == 1111){
      comedy.text = "There is a l wa y s more."
      comedy.pos.x = width()/40;
      timer.time = 10;
    }

}
)

//(title)[large and in rainbow]1000 Clicks![smaller in blank] press the button to start [fine print at bottom corner] By clicking on this button you give your soul unto Heather E. Coneybeer

// (20 clicks) Wow, 20 clicks? Thats a pretty good start! Unfortunely it looks like you're just getting started, after all, the title of this game is "1000 Clicks"

//(69 clicks) Heh, nice

//(100 clicks) Look at you! You're officially 1/10th of the way done! just 900 more clicks to go

//(158 clicks) Hey I started to get bored waiting for you to click to 1000 so I started drawing something for you, do you like it? (insert picture with yes or no buttons)
//(no) Wow, I see how my consideration is treated. Go back to your clicking you scrub (yes) Awwww! Thanks I spent a lot of time on it :)

//(420 clicks) We could make a joke here, but we will refrain

//(500 clicks) You've held out to the halfway mark! You might wanna go get something to drink if your so determined to get to 1000

//(575  clicks) Ok, ok, remember that drawing I made for you earlier? Yeah I took your criticism to heart and went back and worked on it more. What do you think, is it good?
//(no) Fine, whatever, I made this for my OWN self of fulfillment, who cares what you think. Jerk. (yes) Thanks! I really think I made a lot of improvements, I'm glad you like it <3

//(690 clicks) NIIIIICE

//(900 clicks) You're 90% done! Thats a lot! Maybe you should go touch grass

//(935 clicks) We're nearing the end...it was nice talking to you...I made you one final gift, it's a little rushed and I wasn't able to spend as much time on it as the others. I wanted to make sure you got it in time....do you like it?
//(no) Go eat jorts (yes) Oh, you're gonna make me cry :')

//(990 clicks) So this is it huh? You're almost done...just a few clicks away.

//(1000 clicks) Well, congratulations, you've reached the end, you've completed the game! But you're never getting those 1000 clicks back <3

//(be unable to click for like a minute)

//(1001 clicks) Sike, this game goes on forever lol, but there is always more dialogue to find for those who have the patience (or an autoclicker)

