// This is the code for creating a random quote generator

quotes = [
	"When it rains on me it ain't water, its money by the ton",
	"So much ice in my mouth, my breath is a cool breeze",
	"Pardon a rainbow, a player just had to sneeze",
	"I swear I'm half a man and half machine call me Robot",
	"Only thing I know how to do is go get the dough",
	"It feels so good to be free, I ain't even thinking bout a penitentiary",
	"Apple sauce and yellow grits that ain't breakfast, T-bone steak and eggs back in Screwed up Texas",
	"If looks could kill I'd die when they ride by, but ask them why they hate and they don't know why",
	"I'm the MVP and the only player on my team",
	"I'm like the ghetto Popeye but I don't need spinach",
	"Imma keep going, I keep on flowing just like the Nile",
	"Mayonnaise and mustard, that's how I roll",
	"If you say I don't look clean in this thang, you a liar",
	"Couldn't be a buster if I tried",
	"We can't all have bricks, somebody gotta have a stone",
	"If you don't look good, then I don't look good, now we don't good",
	"That ain't a thousand dollar bag that's a backpack",
	"There ain't no such thing as friends, only associates",
]

document.getElementById('quote-area').innerHTML = quotes[0];


document.getElementById('quote-button').onclick = function() {random()}

function random(){
	var rand = Math.floor(Math.random()*18); // creates random variable less than 18
	document.getElementById('quote-area').innerHTML = quotes[rand];
}


