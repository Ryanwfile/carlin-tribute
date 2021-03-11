import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {CONSTANTS} from "../../constants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Brain Droppings" {...a11yProps(0)} />
          <Tab label="When Will Jesus Bring the Pork Chops" {...a11yProps(1)} />
          <Tab label="Last Words With Tony Hendra" {...a11yProps(2)} />
          <Tab label="Napalm and Silly Putty" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <img src={CONSTANTS.EXCERPTS_IMAGES[0].src} alt="Brain Droppings Cover"/>
      I don't believe there's any problem in this country, no matter how tough it is, that Americans, when they roll up their sleeves, can't completely ignore.<br></br><br></br>

At one point in my haste to improve myself, I mixed up the telephone numbers of Shick Center for the Control of Smoking and the Evelyn Woods Speed Reading School.  As a result, I can now smoke up to 300 cigaretts a minute, but I gave up reading.<br></br><br></br>

On the other hand, the founders of the major religions had names that seem quite suitable.  There's still a certain mystery surrounding the names Buddha, Moses, and Mohammed.  But the poor Mormons.  All they could come up with was Joseph Smith.  Not too impressive. <br></br>
"Listen, Caleb, we got a new religion.  You wanna join?"<br></br>
<p class = "text-center">"Who started it?"</p>
"Joe Smith."<br></br>
"See ya later."<br></br>
"C'mon, we're goin' to Utah."<br></br>
"Why?"<br></br>
"Joe Smith said that's where we're supposed to be."<br></br>
"Well, I'm gonna finish this crossword.  Why don'tcha drop me a postcard."<br></br><br></br>

If something in the future is canceled, what is canceled?  What has really happened?  Something that didn't occur yet is now never going to occur at all.  Does that qualify as an event?<br></br><br></br>

  I've adopted a new lifestyle that doesn't require my presence.  In fact, if I don't want to, I don't have to get out of bed at all, and I still get credit for a full day.<br></br><br></br>

I'm not going to apologize for this, but I have my own personal psychic.  He doesn't predict the future, and he can't tell you much about your past.  But he does a really fantastic job of describing the present.  For instance, he can tell you exactly what you're wearing, but he can't do it over the phone. <br></br><br></br>

If JFK Jr. got into a taxi in New York to go to the airport, do you think he would say, "Take me to JFK?" How would he feel about that?  And how does Lee Harvey Oswald's mother feel when she walks through JFK, knowing that if she had stayed single it would probably be Martin Luther King Jr. Airport?<br></br><br></br>Sometimes the same words mean opposite things.  Sometimes the opposite is true.  Shock absorbers are called shocks.  Slow down and slow up are interchangeable.  Bad taste is tasteless.  Sports fans say "turf" when they mean artificial turf.  Something invaluable is very valuable.  I'll bet you could care less.  Or maybe you couldn't care less.  Same difference.  By the way, is it "from here on in" or "from here on out"? <br></br>

<br></br>I thought it would be nice to get a job at a duty-free shop, but it doesn't sound like there's a whole lot to do in a place like that. 
Weyerhauser, a company that makes its money by cutting down trees, calls itself “The tree-growing company.”<br></br><br></br>
Not only do I not know what’s going on, I wouldn’t know what to do about it if I did.<br></br><br></br>
They said some guy arrested for murder in Las Vegas had “a history of questionable actions.”  Can you imagine if we were all held to that standard?<br></br><br></br>
A lot of these people who keep a gun at home for safety are the same ones who refuse to wear a seat belt.<br></br><br></br>
I wanted to get a job as a gynecologist, but I couldn’t find an opening. <br></br><br></br>
Why don’t they have dessert at breakfast?  <br></br><br></br>
You rarely meet a wino with perfect pitch. <br></br><br></br>
There’s a moment coming.  It’s not here yet.  It’s still on the way.  It’s in the future.  It hasn’t arrived.  Here it comes.  Here it is…shit! It’s gone. <br></br><br></br>
Even instant replay is a form of token nostalgia: a brief visit to the immediate past for reexamination, before slapping it onto a highlight video for further review and re-review on into the indefinite future. <br></br><br></br>
Momentarily means <i>for</i> a moment, not <i> in </i> a moment.  The word for “in a moment” is <i>presently</i>.  “I will be there presently, Dad, and then, after pausing momentarily, I will kick you in the nuts.” <br></br><br></br>
I have a suggestion that I think would help fight serious crime.  Signs.  There are lots of signs for minor infractions: No Smoking, Stay Off the Grass, Keep Out, and they seem to work fairly well.  I think we should also have signs for major crimes: Murder Strictly Prohibited, No Raping People, Thank You for Not Kidnapping Anyone.  It’s certainly worth a try.  I’m convinced Watergate would never have happened if there had just been a sign in the Oval Office that said, Malfeasance of Office Is Strictly Against the Law, or Thank You for Not Undermining the Constitution.  <br></br><br></br>
Here’s a sign I don’t like: Authorized Personnel Only.  Now, if there’s one thing I know about myself, it’s that I am definitely not authorized.  I wouldn’t even know where to go to <i> get </i>authorized.  Can you do it by mail?  Wouldn’t baptism sort of authorize you?  It doesn’t matter; I go through the door anyway.  If I get stopped, I say, “Well, I may not be authorized for this, but I am authorized for other things.  And your sign doesn’t mention which things.” <br></br><br></br>
I’ve got a terrific sign in front of my house that keeps intruders out:  Retarded Pit Bull High on Angel Dust.  No one’s come over the wall yet.  Except a couple of retarded guys who were high on angel dust.  <br></br><br></br>
This is for health food fiends, the natural-fabrics gang, and all those green-head environmental hustlers who stomp around in the “natural”: Your key word is meaningless.  Everything is natural.  Everything in the universe is a part of nature.  Polyester, pesticides, oil slicks, and whoopee cushions.  Nature is not just trees and flowers.  It’s everything.  Human beings are part of nature.  And if a human being invents something, that’s part of nature, too.  Like the whoopee cushion.  <br></br><br></br>
Sometimes on television they tell you a product is “good for headaches.”  I don’t want something that’s good for headaches.  I want something that’s bad for headaches.  And good for me.  <br></br><br></br>

Why do we say <b>OUT LIKE A LIGHT</b>?  The primary function of a light is to be lit, not to be out.  Why choose a light to represent the concept of being out?  Why not, “<i>On</i> like a light?”The same is true of <b>DROPPING LIKE FLIES</b>;  the wrong quality is being emphasized.  Flies are known for flying, no dropping.  And let’s forget <b>METEORIC RISE</b>.  Meteors don’t rise, they fall.  <br></br><br></br>
When they say someone is <b>NOT GOING TO WIN ANY POPULARITY CONTESTS</b>, what popularity contests are they talking about?  I’ve never heard of these contests.  Where do they have them?  And who wins?  Whoever is winning these popularity contests can’t be that popular.  You never hear about them.<br></br>
<b>YOU COULD HEAR A PIN DROP</b>.  Well, you can’t hear a pin drop.  Not even a bowling pin.  When a pin is dropping, it’s just floating through the air.  There’s very little noise.  You might be able to hear a pin land but certainly not drop.  <br></br><br></br>
And I think it’s time to start slapping around these people who can’t tell a simple story without repeatedly saying, “Ya know what I’m sayin’?”  Here I am, trying to listen to the guy, and he’s a person who is constantly checking on how he’s doing.  <br></br><br></br>
I don’t like euphemisms.  Euphemisms are a form of lying.  Fat people are not gravitationally disadvantaged.  They’re fat.  I prefer seeing things the way they are, not the way some people wish they were.<br></br><br></br>
Labels divide people.  We need fewer labels, not more.<br></br><br></br>
The real news is that there are millions upon millions of sick babies and cripples and addicts and criminals and misfits and diseased and mentally ill and hungry people who need help.  Not to mention all the middle-class normal who swear things are just fine but spend three hours a day commuting, and whose dull, meaningless lives are being stolen from them by soulless corporations.  But the media don’t bother with all that.  They like to simply cover their designated Victims of the Week, so they can see themselves as somehow noble.  They highlight certain cases, making them appear exceptional.  And when they do, they admit they are simply unable and unwilling to report the totality of the Great American Social Nightmare.<br></br><br></br>
I only respect horoscopes that are specific:  “Today, Neil Perleman, wearing tight-fitting wool knickers, will kill you on the crosstown bus.”<br></br><br></br>

<i>Alter</i> and <i>change</i> are supposed to be synonyms, but altering your trousers and changing your trousers are quite different things. <br></br><br></br>

I put a dollar in one of those change machines.  Nothing changed. <br></br><br></br>
It’s hard for me to believe that the small amount of water I take from the water cooler can produce such a large bubble. <br></br><br></br>

When primitive people practice the rain dance, does it rain at the end of practice?  And if it doesn’t how do they know they did the dance correctly? <br></br><br></br>
They keep saying you can’t compare apples and oranges.  I can.  An apple is red and distinctly non-spherical; an orange is orange and nearly spherical.  So, what’s the big problem? <br></br><br></br>
George Washington’s brother was the Uncle of Our Country. <br></br><br></br>

The New Testament is not new anymore; it’s thousands of years old.  It’s time to start calling it The Less Old Testament.  <br></br><br></br>
“It’s neither here nor there.”  Well, folks, it’s gotta be somewhere.  I certainly don’t have it. <br></br><br></br>
Isn’t it interesting that only sex and excretion can be found legally obscene in this country?  Not violence, not neglect, not abuse of humans… two of nature’s most necessary functions and irresistible forces.  We’re always trying to control and thwart nature, even in our language.  <br></br><br></br>

Religion was always an easy class.  All you had to do was suspend the logic and reasoning you were being taught in all the other classes. <br></br><br></br>
And it’s always struck me that our two most-used gasses produce only tears and laughter.  How about a gas that creates crippling self-doubt?  Or a gas that conjures up terrifying childhood memories?  Okay, last one:  How about a gas that fills you with a unquenchable desire for vanilla pudding?<br></br><br></br>
I’m also uneasy about the sheer number of scientific experiments performed on animals.  First of all, animals are not always good models for medical experimentation: penicillin kills guinea pigs; an owl is not bothered by cyanide; monkeys can survive strychnine, etc., etc.  Couldn’t these scientific tests just as easily be performed on humans?  Condemned prisoners, old people, the feeble, the terminally ill?  I’m sure there are plenty of ignorant, desperate Americans who would be willing to volunteer in exchange for some small electrical appliance.<br></br><br></br>
<b>Limericks</b><br></br>
There was a young man from St. Maarten<br></br>
Who saved all his odors from faartin.<br></br>
If it passed through his crack<br></br>
It went straight in a sack<br></br>
And mistakes were all kept in a caarton<br></br><br></br>
A flatulent actor named Barton<br></br>
Had a lifestyle exceedingly Spartan<br></br>
Till a playwright one day<br></br>
Wrote a well-received play<br></br>
With a part in which Barton could fart in.<br></br><br></br>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src={CONSTANTS.EXCERPTS_IMAGES[1].src} alt="When Will Jesus Bring the Pork Chops Cover"/>
      THOU SHALT NOT COVET THY NEGHBOR’S GOODS<br></br>
This one is just plain stupid.  Coveting your neighbor’s goods is what keeps the economy going: Your neighbor gets a vibrator that plays “O Come All Ye Faithful,” you want to get one, too.  Coveting creates jobs.  <br></br>
Ninety-nine percent of all the truly horrifying shit going on in this world was initiated, established, perpetrated, enabled or continued by men.  And that includes the wave and the high five, two of history’s truly low points. <br></br>
(Referring to men in general)His manliness also requires that he refuse to go to a doctor or a hospital unless it can be demonstrated to him that he has, in fact, been clinically dead for six months.  “No sense going’ to the hospital, honey, I don’t seem to be in a coma.”  Therefore, he must learn to ignore pain.  “It doesn’t really hurt.  Bleeding from six holes in the head doesn’t really hurt.  Just gimme the remote and get me a beer.” <br></br><br></br>
(Referring to the FBI 10 Most Wanted)One last question: Does the FBI search harder for number three than they do for number seven?  I would.  Otherwise why have the numbers at all?  These are the kinds of thoughts that keep me from making any real progress in life. <br></br><br></br>
Political correctness is America’s newest form of intolerance, and it is especially pernicious because it comes disguised as tolerance.  It presents itself as fairness, yet attempts to restrict and control people’s language with strict codes and rigid rules.  I’m not sure that’s the way to fight discrimination.  I’m not sure silencing people or forcing them to alter their speech is the best method for solving problems that go much deeper than speech.  <br></br>
The use of <i>physically challenged </i>is an obvious attempt to make people feel better, the idea being, “As long as we can’t cure these people, let’s give their condition a more positive name, and maybe it will distract everyone.”  It’s verbal sleight of hand.<br></br>
These allegedly well-intentioned people have strayed so far from reality that it will not be a surprise for me to someday hear a rape victim referred to as an <i>unwilling sperm recipient</i>.<br></br>



How would you like to be told that about your child?  “He’s minimally exceptional.”  “Oh, thank God for that!  We thought he was just kind of, I don’t know, slow.  But minimally exceptional!  Wow!  Wait’ll I tell our friends.”<br></br>
Political correctness cripples discourse, creates ugly language and is generally stupid.<br></br><br></br>
“Is Bruno a sadist?”<br></br>
“Beats me.”<br></br><br></br>
Or they might say, “I’m leaving Armando.  He beat me up yesterday in the frozen-food section of the supermarket.  He struck me in the head repeatedly with a Stouffer’s Lean Cusine.  I believe it was the Chicken Cordon Bleu.  I’m moving on.”  Occasionally, I get impatient with these people.  When they tell me they’re moving on, I look at my watch and say, “Well, isn’t it about time you got started?  No sense standing around here, talking to me, when you could be out there… moving on.”  <br></br>
I don’t know, I guess it all works out, because when I run into the same person a few months later, they usually say, “I’m in a <i>whole different place now</i>.”  And I don’t think they’re referring to Pittsburgh.  <br></br><br></br>
Why not be a schmuck?  A licensed, practicing schmuck.  Or, if you qualify, a CPS, a certified public schmuck.  It may not seem like it when you look around, but there’s actually a shortage of schmucks in America.  As a result, there’s big money in schmucking.  The average schmuck earns $28,000 a year, plus benefits.  And there are openings for schmucks in every field:  The government is run by schmucks; big business is run by schmucks; and the retail field is crawling with schmucks.  And, more and more, people are becoming independent, freelance schmucks on their own.  Call the Schmuck Technical Institute today and get our free booklet,  <i>Hey Putz, Be a Schmuck!</i>  Most people only manage to be schmucks at parties, but here’s your chance to become a fulltime, year-round schmuck.  Give us a call.  Don’t be a schmuck, be a schmuck.<br></br><br></br>

Uncle Tonto had a tough life; intercourse with a pelican is not an easy thing to live down.  He drank excessively.  One time he was so hungover he had to consult a cottage cheese carton to determine the approximate date.  At parties, he was the designated drinker, his preference being crème de menthe, Sterno and goat droppings.  When stopped and tested by police, he usually set the Breathalyzer on fire.  Refusing to drive when he was sober, in the mornings he rode to work on an electric floor buffer, claiming the one drawback was the time he wasted traveling from side to side.  He was sentenced to ten years for defecating in a cathedral, but was released immediately when the warden felt Tonto was lowering the prison’s standards.  After his release, he hitchhiked through Pennsylvania where he was beaten to death by a buggyload of Quakers.  <br></br><br></br>
The same is true of the word <i> cuisine</i>.  The difference between food and cuisine is sixty dollars.  That’s it.  They’re stealing from you.  You want to know some real gourmet food?  Toasted snail penises; candied filet of panda asshole; deep-dish duck dick.<br></br><br></br>
      
KEVIN: Boy, a lot has changed in twenty years.<br></br>
RAY: Yeah.<br></br>
KEVIN: Is Naughton still around?<br></br>
RAY: Frankie?<br></br>
KEVIN: No Jimmy.<br></br>
RAY: Jimmy’s dead.  And Frankie died at the funeral.  They’re both dead.<br></br>
KEVIN: What about Bobby? How’s he?<br></br>
RAY: He’s dead, too.  A lot of ‘em are dead.<br></br>
KEVIN: What was the other Naughton kid’s name?  Tommy?  Is he dead?<br></br>
RAY: No.  Tommy’s not dead.<br></br>
KEVIN: Thank God for that.<br></br>
RAY: He’s dying.<br></br>
KEVIN: Jeez! The mother must be heartbroken.<br></br>
RAY: The mother was killed in a boiler explosion.  Blown to pieces.<br></br>
KEVIN: Jeez.  I’ll never forget that house the Naughtons lived in.  Kind of a cute little place with the green shutters.<br></br>
RAY: Hit by lighting fifteen years ago.  Burned to the ground.  All the pets were killed.<br></br>
KEVIN: Jeez.  That’s too bad.  I remember the Naughtons always like that house because it was so close to the church.<br></br>
RAY: Our Lady of Perpetual Suffering?<br></br>
KEVIN: Yeah<br></br>
RAY: The church is gone.  Condemned by the city last year and demolished on Good Friday.<br></br>
KEVIN: So where do the neighborhood kids go to school?<br></br>
RAY: Most of the neighborhood kids were killed a few years ago by a rapist who worked at the grocery store.<br></br>
KEVIN: Dorian’s?<br></br>
RAY: No, Babington’s.<br></br>
KEVIN: I liked Dorian’s.  They always had good produce.<br></br>
RAY: Dorian’s collapse ten years ago and killed nineteen customers.  The entire Halloran family was decapitated at the butcher counter while they were pickin’ out meat.<br></br>
KEVIN: Jeez.  Times really change.<br></br>
RAY: Well, life goes on.<br></br><br></br>

I don’t often write about my own experiences; it’s not my style.  But I had a recent incident in traffic that that I’d like to tell you about.  And before I being, there are a couple of things you ought to know about me: I drive kind of recklessly, I take a lot of chances, I never maintain my vehicles and I don’t believe in traffic laws.  And so, because of these practices, I tend to have what a picky person would probably refer to as a lot of traffic accidents.  
And wouldn’t you know, last week I ran over a sheep.  
Or, possibly, I ran over a small man wearing a sheepskin coat.  I’m not sure, really, because I didn’t stop.  That’s another rule of mine: I never stop when I have a traffic accident.  Do you?  No.  You can’t.  Who has time?  Not me.
If I hit something, or I run somebody over, I keep moving!  Especially if I’ve injured someone.  I refuse to involve myself in other people’s injuries.  I’m not a doctor, I’ve had no medical training; I’m just another guy, out, driving around looking ofr a little fun.  And I can’t be stopping for everything.  
Listen, folks.  Let’s be logical about it.  If you stop at the scene of the accident, all you do is add to the confusion.  These people you ran over have enough troubles of their own without you stopping and making things worse.  Think about it – they’ve just been involved in a major traffic accident!  The last thing they need is for you to stop, get out of your car, go over to the wreckage and start bothering them with stupid questions:  “Are you hurt?”
Well, of course they’re hurt.  Look at all the blood!  You just hit them with a ton and a half of steel- of course they’re hurt.  Leave these people alone.  Haven’t you done enough?  For once in your life do the decent thing- don’t get involved...
Now, folks.  There are two sides to this.  Helping people by leaving them alone when they’re injured is one thing, that’s my altruistic side; people need to be self-reliant, and I want to do what I can to foster that.  But it’s often hard for me to drive away from a nice fiery accident scene, because I have a self-indulgent side, and that needs to be honored too… 
And if the traffic situation is such that I can’t quite see what’s going on- can’t get a good enough look- I’m not the least bit shy about asking the police to bring the bodies over a little closer to the car.  
“Pardon me, Officers.  Would you fellows mind dragging that twisted-looking chap over here a little closer to the car?  My wife has never seen anyone shaped quite like that.”<br></br><br></br>
Also, I never say, “ A merry Christmas to you and yours.”  I don’t like the possibilities suggested by that use of the possessive pronoun <i>yours</i>.  One never knows when the other person may be a slave owner.  I certainly wouldn’t want to encourage that sort of behavior. <br></br><br></br>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img src={CONSTANTS.EXCERPTS_IMAGES[2].src} alt="Last Words With Tony Hendra Cover"/>
        <p>"Sliding headfirst down a vagina with no clothes on and landing in the freshly shaven crotch of a screaming woman did not seem to be part of God's plan for me.  At least not at first.  I'm not one of those people who can boast of having been a sparkle in his mother's eye.  A cinder comes closer." <br></br><br></br>"Popular ethnic slurs to the contrary, the Irish do enjoy sex-at least the last ten seconds or so.  But we must admit that Irish foreplay consists of little more than 'You awake?' Or the more caring, sensitive 'Brace yourself, Agnes!'" <br></br><br></br>

 Best of all there was a station sign-off he (his father) said he'd like to deliver; and this was at the height of World War 2 and its patriotic fervor:  "I pledge allegiance to the people of the United States of America and all the poltical crap for which they stand.  Big dough shall be divisible with union dues for all."  As conclusive evidence it's scanty, but suggests to me that my father saw through the bullshit that is the glue of America.  That makes me proud.  If he transmitted it to me genetically, it was the greatest gift he could have given.<br></br><br></br>
She (his mother) sat me down on a little stepladder that doubled as a chair-I still have it- and handed me a death notice from that day's New York Journal-American.  I didn't need to read beyond his name (his father); I knew what death notices looked like.  I don't recall any emotion.  I just knew my brother would be happy and my mother relieved.<br></br><br></br>

And he(his father) got his wish, though there are very few people alive to whom it matters.  Not only did I outlive the gossip-by which I'm sure he meant my mother's quite public and vocal negative opinion of him-but I lived to write this book which will serve as testimony to my old man's great heart and soul.<br></br><br></br>

My mother's capacity for good living had long been blunted by the realities of salaried employment, but she retained her clasc pretensions and tried to realize some of them by using us kids as advertisement for her taste.  Pat, when he was young, had always been dressed like a little sissy in Eton collars and short pants, explaining in part why his fighting skills developed so rapidly.  I escaped the worst of that because she couldn't affort it, but she still took me to have my hair cut at Best & Co. on Fifth Avenue, because she knew that was where "the better people" had their kids' hair cut.  The better people went to Best.<br></br><br></br>

And yet she was my mother, so she's deep in my art, both for what she gave me-especially that love of words- and for what I rebelled against in her.  And she made me laugh, she had a way with a punch line.  Once she told Pat and me about coming home on the bus that day.  A big fat German man plonked down beside her.  "A big Hun sat next to me,"  she said, "a big mess!  He was taking up far too much room.  So I took out my hatpin and showed it to him and said:'Condense yourself!'"<br></br><br></br>
  I'll never forget the moment when I made my mother laugh for the first time.  That I actually took an idea and twisted it and she laughed.  And it was real-not just cute-kid stuff.  I provoked a laugh in her by means of something I thought of.  How magic that was, the power it gave me.<br></br><br></br>

After much effort I learned "Frere Jacques" and one day played it for the class.  My first ever public appearance!  A real charge!  Having thirty people (okay, six-year-olds, but they had pulses) sit without fidgeting and watch something you were doing- which they <i>couldn't do</i>- was intensely satisfying.  Having them applaud at the end, even though many had dfficulty bringing their hands together with any accuracy, produced an odd sense of power.  It was an intoxicant.  As would be the case with many intoxicants, I immediately wanted more.<br></br><br></br>

Class clowns are dedicated to attracting attention to themselves.  Traditional Freudians might attribute my chronic need for attention to the fact that I had no father and half a mother.  Naaah.  The truth was much simpler.  Then as now, I was a consummate show-off.<br></br><br></br>

A fifth-grade autobiography assignment I still have required a closing paragraph on "What I want to be when I grow up."  I wrote, "When I grow up I'd like to be an actor, impersonator, comedian, disc jockey announcer or trumpet player." <br></br><br></br>

Lenny was incredibly important to me.  I’d come across his album <i>Interviews of Our Times</i> when I was in Shreveport and I was changed forever.  The defiance inherent in that material, the brilliance of the mimicry, the intellect at work, the freedom he had.  I had no sense I could approach it ever, but I wanted to emulate it in any way I could.

Later still, throughout the eighties, my Irish street guy was a powerful element in the evolution of what finally became in the early nineties my authentic voice.  He and his White Harlem relatives are the core of the family of characters that still live inside me.  <br></br><br></br>

(After being falsely accused of armed robbery)It was clear that the cops had fucked up big-time, but they wouldn’t let us go.  …  The lead cop… later turned up as the guy in charge of investigating the Kennedy assassination, Will Fritz.  He interrogated Oswald after his arrest.  The obvious conclusion:  Oswald had as much to do with the assassination as the three of us did with the Motor Club robbery in Chicago. <br></br><br></br>

Only a couple months and it was kicking in just how hard this shit was.  How few places there were where I felt secure.  How many times I had to repeat to myself after the died-a-death nights: “Remember that terrific set three Fridays ago?  Hang your hopes on that.  <br></br><br></br>

(Referring to Second City)  I could do material in these places I didn’t always trust to a nightclub: about integration, the John Birch Society, the Ku Klux Klan. <br></br><br></br>
There’s a textile mill in South Carolina where the lunchroom has been integrated but the restrooms are still segregated.  That’s like, “Hell, I’ll break bread with ‘em but not wind” … The textile industry moved south for one reason- there’s a bigger demand for sheets. <br></br><br></br>

As Brenda’s mother was dying, our child was born.  A daughter.  We named her Kelly. <br></br><br></br>

Like most people, I remember where I was when the (JFK's)assassination happened and what I was doing…  I went into Rexall’s or Liggett’s or some drugstore and called Brenda.  I said, “Turn on the television,” and I realized I was crying.  <br></br><br></br>
Two years earlier, in 1961, Lenny Bruce had begun to be hit with a series of arrests for obscenity in San Francisco, Los Angeles (at three different clubs), Chicago and finally in New York
By now it was becoming pretty clear that Lenny wasn’t being arrested for obscenity.  He was being arrested for being funny about religion and in particular Catholicism. <br></br><br></br>
That I knew intellectually there was an anal, uptight world out there I didn’t feel part of didn’t erase the fact that I was a living, breathing example of it. 
That felt wonderfully subversive.  I’ve never been a full-blown radical.  I wasn’t cut out to man the barricades.  But any time the subversive part of me is satisfied, it delights me. <br></br><br></br>
In short:Acting.
And I was NOT ABLE to do that!  I was absolutely at sea, completely lost.  Whatever competence I might have had going in had vanished. <br></br><br></br>
It was traditional for comedians to try out a bit in clubs to see if it worked and then do it on <i>Sullivan</i>.  I tried out things on <i>Sullivan</i> and if they worked, I’d do them in clubs. <br></br><br></br>
We were together all the time, on the road or back in New York,  And just like before, Brenda was my manager and bookkeeper, collaborator and comforter. 
She had to be mother and father to Kelly.  Then I’d come home with an armful of presents and it would be: “Daddy’s home! Fun time!”  Which cast her as the domestic tyrant, the one who said No.  Time for bed.  Time for school.  She hated being that.  So she got drunk. <br></br><br></br>

The establishment was winning-its war, its assassins, its secret government-and that fact overpowered and debilitated me more than it enraged me.  
And however much kinship I had with the counterculture, it brought up again the eternal dilemma: of longing to belong but not liking to belong-even though the group I wanted to belong to now were non-belongers. <br></br><br></br>

Dropping acid was a profound turning point for me, a seminal experience. <br></br><br></br>
This is what devout-Catholic-Eisenhower-Republican Mary had to say to her wayward son about his latest developments;
Dear George,
I should be on the check-out line at the supermarket but I must say these words to you.  Please read these reviews.  You will someday be a Beckett or a Joyce or maybe a Bernard Shaw.  You seem to have their kind of disturbance… Some day you will release what you have down inside of you and it will be listened to and heard.  They condemn you for idolizing Lenny Bruce-how little they really know what you see in his courage, sincerity and daring.  Please George insist on being yourself.  Don’t let anyone change you or silence you.  I am so hungry for a heart-to-heart with you…Why have I got this restlessness-this groping for answers which I sometimes feel I have passed on to you?  Do you follow me George?  Why can’t I quiet this undisciplined questioning of what goes on around us?  Why am I caught up by it? <br></br><br></br>
I ripped up Representative Bob Dornan… when he’d just become a congressman.  He talked about “these hippies desecrating the flag” … So I called him on it: “Wait a minute.  A flag is supposed to represent everything that a country does.  It doesn’t only represent the good things.  If you burn the flag, you’re burning the flag for what you perceive to be the bad things the country has done.”<br></br><br></br>
My sense of US versus Them had been alive and well on the streets around Columbia; and in the air force, where I rejected everything they put on me.  But it had been submerged when I got into the nightclubs and the smothering chatter of television. <br></br><br></br>
So it was really disturbing when the time came to record FM & AM in June 1971 and somehow a lot of my confidence had vanished.  … I walked around Georgetown, crying all night.  I’d had my chance; the sound truck wouldn’t be back the next night.  <br></br><br></br>
As usual, a price had to be paid for all this pleasure.  I discovered in July of ’72 that not only could you not say the Heavy Seven on television, you couldn’t say them in Milwaukee either.  Here’s how the AP reported it; Comedian George Carlin was taken into custody Friday night and charged with disorderly condust after he allegedly used profanity during a performance at Summerfest, a ten-day festival on the city’s lakefront.  Henry Jordan, executive director of Summerfest, said, “Carlin got up on stage and … he used a lot of profanity.  The police went up on stage after he had finished his act and arrested him.”  Jordan said he supported the police, adding that many in the crowd of 70,000 were children.<br></br><br></br>
(Referring to the Supreme Court Case FCC vs Pacific Foundation)Justice William Brennan wrote the dissent:  “In our land of cultural pluralism there are many who think, act, and talk differently from the members of the Court and who do not share their fragile sensibilities.  It is only an acute ethnocentric myopia that enables the Court to approve censorship of the communications solely because of the words they contain.  The Court’s decision … is another of the dominant culture’s efforts to force those groups who do not share its mores to conform to its own way of thinking, acting, and speaking.” 
Which in turn means that the only thing you can safely broadcast anytime, anywhere, in any medium, is material that’s suitable for kids.  Could this be why our society shows so many signs of arrested development?  <br></br><br></br>
The timetable on this downward path is not exact-it never is, I guess- except that it began to happen with the success of my first three records…  The money didn’t help because she felt she(Brenda) was losing me.  She didn’t have a husband.  She had a man who was out there for everybody else, but was hardly ever there for her.  Or Kelly.  I don’t remember this-there’s a lot I don’t remember- but she said that once an interviewer asked me how old Kelly was, and I didn’t know.  <br></br>
That’s when Kelly sat us down and said, “This has got to stop.”  She was crying and sobbing:  “I have to tell you about how I feel about all this… It’s my turn to talk!”  Then and there she wrote a contract for us, which read: “You/I will not drink or snort coke or smoke pot for the next X days of our vacation.  We’re going to have a family vacation and we’re going to have a good time.”  She made us sign it.  …What she’d written and done was like a roundhouse punch to the solar plexus.  Even if it didn’t have immediate results, it had a dramatic long-term impact.  From then on I tried harder to do right.  <br></br><br></br>
When it came to Kelly’s problems-especially pregnancy-I really abdicated my responsibilities.  And yet it was all directed at me, all designed to get my attention.  I just took an emotional walk on that.  What I should have done was to be more aware; intervened, opened up.  But I was afraid of what lay behind that door; afraid of what might come out.  One of my biggest fears-the most difficult area of my existence- has always been unleashing my feelings.<br></br>
It’s impossible to overestimate the importance of Jerry Hamza in my career and life.  Without Jerry I don’t think I would’ve escaped from the financial and creative swamp that bad choices and drugs had landed me in by the late seventies.<br></br><br></br>
(After having a near death heart attack)I don’t think I’d let surgery change my personality.  First of all, I’m extremely optimistic and positive.  Secondly, I hate to behave in clichés.
Liberal orthodoxy was as repugnant to me as conservative orthodoxy.
The noisier the culture becomes, the stronger your voice has to be to be heard above the din.  This was a conscious thought-that I’d better raise the level of my voice and therefore the intensity of my metaphors and images and words and topics to get and keep people’s attention.<br></br><br></br>
When are we going to start assassinating the right people in this country?  (Why is it, by the way, that the right-wing guys assassins have tried to shoot survived?  Like Wallace and Reagan?  Don’t we have any marksmen on our side?)<br></br><br></br>
No one is ever more herself or himself than when they really laugh.  Their defenses are down.  It’s very Zen-like, that moment.  They are completely open, completely themselves when that message hits the brain and the laugh begins.  That’s when new ideas can be implanted.  If a new idea slips in at that moment, it has a chance to grow.  So for that moment, that tiny moment, I own them.  <br></br><br></br>
When we’re in the womb, we’re in the oceanic state, we are completely part of nature.  We are attached to nature, literally, physically.  Everything comes through tubes, you don’t have to do a goddam thing, everything’s cool.  You are at one.  You are in union with nature.  Then you get torn out of this fucking place there’s pain and screaming and the violence starts…UNION IS OVER.The rest of your life is spent yearning for reunion.  <br></br><br></br>
I hate topical material because I hate to throw anything away.  <br></br><br></br>
I hadn’t seen her(Brenda) for a week or more.  Jaundice had made her skin yellow.  All her hair was gone from the chemo.  She was unconscious and unresponsive but her eyes were open.  I have no idea if she was aware of anyone, but I saw her eyes were tearing up a little.  I took a tissue and gently wiped away her tears.  <br></br><br></br>
You may know exactly what you’re going to do and that they’re predisposed to like you… But the instant I get out there it all starts over again.  Right from the beginning.  Win them over, and get ’em where I want ‘em!  That’s living!  That’s the thing that feeds me, that’s my nourishment.  <br></br><br></br>
The larger the group, the more toxic, the more of your beauty as an individual you have to surrender for the sake of group thought.  And when you suspend your individual beauty you also give up a lot of your humanity.</p>

      </TabPanel>
      <TabPanel value={value} index={3}>
      <img src={CONSTANTS.EXCERPTS_IMAGES[3].src} alt="Napalm and Silly Putty Cover"/>
      A Florida man who wrestles alligators for a living was eaten alive today when the alligator apparently did not understand the universal signal for “time-out.”<br></br><br></br>
You know what’s fun?  Go to a German restaurant and insist on using chopsticks. <br></br><br></br>
      </TabPanel>
    </div>
  );
}

