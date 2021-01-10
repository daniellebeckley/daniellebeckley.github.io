
function createBookString(books,element){

	var con = '<div>';

	books.forEach(function(book){
		con += "<p>" + book.title + " - " + book.author; 
		if(book.info != null){
			con += " ( " + book.info + " )";
		}
		con += "</p>";
	})

	con += "</div>";
	document.getElementById(element).innerHTML = con;

}

function createMovieString(movies,element){
	var con = '<div>';

	movies.forEach(function(movie){
		con += "<p>" + movie.title +"</p>";
	})
	con += "</div>";
	document.getElementById(element).innerHTML = con;

}
var books21 = [
{"title":"Headhunters", "author":"Jo Nesbø"}];


var books20 = [
{"title":"Awakenings", "author":"Oliver Sacks"},
{"title":"Fahrenheit 451", "author":" Ray Bradbury"},
{"title":"Raymond Carver", "author":"Where I’m Calling From"},
{"title":"One Flew Over the Cuckoo's Nest", "author":"","info":"First Quarantine Book"},
{"title":"Devil in the White City", "author":"Erik Larson"},
{"title":"Blueprint for Disaster", "author":"D. Bradford Hunt"},
{"title":"Music of Chance", "author":"Paul Auster","info": "v nice outside, deck reading"},
{"title":"Dance, Dance, Dance", "author":"Murakami"},
{"title":"City of Glass", "author":"Paul Auster"},
{"title":"Just Kids", "author":"Patti Smith"},
{"title":"Wonderboys", "author":"Michael Chabon"},
{"title":"Let’s Go (So We Can Get Back)", "author":"Jeff Tweedy"},
{"title":"The Naked and The Dead", "author":"Norman Mailer"},
{"title":"The Sun Also Rises", "author":"Ernest Hemingway","info":"Wisconsin Trip Book"},
{"title":"The Plot Against American", "author":"Philip Roth"},
{"title":"Portnoy’s Complaint", "author":"Philip Roth"},
{"title":"The Rooster Bar", "author":"John Grisham"},
{"title":"The Namesake", "author":"J humpa Lahiri"},
{"title":"The Year Of The Monkey", "author":"Patti Smith"},
{"title":"Farewell To Arms", "author":"Ernest Hemingway"},
{"title":"The Snowman", "author":"Jo Nesbø (audiobook)"},
{"title":"Dharma Bums", "author":"Jack Keuroac","info":"Dad’s surgery, Ohio Trip"},
{"title":"Indignation", "author":"Philip Roth "},
{"title":"Collected Stories of Carson McCullers "},
{"title":"Disgrace", "author":"John Maxwell Coetzee"}
];

var books19 = [
{"title":"Emma","author":"Jane Austen"},
{"title":"Migraine", "author":"Oliver Sacks"},
{"title":"One Day in the Life of Ivan Denisovich","author":"Aleksandr Solzhenitsyn"},
{"title":"All the King's Men","author":"Robert Penn Warren"},
{"title":"Red Pony","author":"John Steinbeck"},
{"title":"The Last Black Unicorn","author":" Tiffany Haddish"},
{"title":"A History of the Soviet Union from the Beginning to the End","author":"Peter Kenez"},
{"title":"The Great Depression","author":"Robert S. Mcelvaine"}
];

var books18 = [
{"title":"Lincoln In The Bardo", "author":"George Saunders"},
{"title":"American Pastoral", "author":"Philip Roth"},
{"title":"Love In The Time of Cholera", "author": "Gabriel García Márquez"},
{"title":"Open City", "author": "Teju Cole", "info":"read while walking around ny in sept"},
{"title":"Eichmann in Jerusalem", "author": "Hannah Arendt"},
{"title":"Siddhartha", "author": "Hermann Hesse"},
{"title":"Who's Afraid of Virginia Woolf", "author": " Edward Albee"},
{"title":"American Pastoral", "author": "Philip Roth"},
{"title":"Lord of the Flies", "author": " William Golding"},
{"title":"1984 ", "author": " George Orwell"},
{"title":"Crime and Punishment ", "author": " Fyodor Dostoyevsky"},
{"title":"Waiting for Godot ", "author": " Samuel Beckett"},
{"title":"Back in the World ", "author": " Tobias Wolff"},
{"title":"The Pillowman ", "author": " Martin Mcdonagh"},
{"title":"The Devil Star ", "author": " Jo Nesbø"},
{"title":"Cat's Cradle ", "author": " Kurt Vonnegut"},
{"title":"Their Eyes Were Watching God ", "author": " Zora Neale Hurston"},
{"title":"Sapiens: A Brief History of Humankind ", "author": " Yuval Noah Harari"}
];

var movies21 = [
{"title":"Foul Play: The draft night sabotage... <p><a href=\"https://tinyurl.com/y832c5as\"	>YouTube Link</p></a>"},
{"title": "True Confessions"}

]
var movies201 = [
{"title":"Uncut Gems (In Theatres! can you imagine)"},
{"title":"Enough Said"},
{"title":"Once Upon A Time In Hollywood "},
{"title":"Men In Black"},
{"title":"Men In Black 2"},
{"title":"The Talented Mr. Ripley"},
{"title":"Little Women"},
{"title":"Parasite"},
{"title":"Kill Bill"},
{"title":"Hot Rod"},
{"title":"Bruce Almighty"},
{"title":"Miss Americana"},
{"title":"Polytechnique (school shooting Canada)"},
{"title":"<h4>CORTEEN MOVIES</h4>"},
{"title":"Side Effects - takes pills sues, setup"},
{"title":"Marc Maron Special - End Times Fun"},
{"title":"The Master "},
{"title":"Casino Royale "},
{"title":"Quantum of Solace "},
{"title":"Skyfall "},
{"title":"Specter "},
{"title":"Before The Devil Knows You're Dead"},
{"title":"There Will Be Blood"},
{"title":"Nocturnal Animals"},
{"title":"A Serious Man "},
{"title":"Shutter Island "},
{"title":"Tree Of Life "},
{"title":"Road To Perdition "},
{"title":"Good Fellas"},
{"title":"Pruitt Igor Myth"},
{"title":"Widows"},
{"title":"The Social Network"},
{"title":"Boogie Nights "},
{"title":"Wolf of Wall Street"},
{"title":"Bourne Identity"},
{"title":"The Nice Guys"},
{"title":"Hail, Caesar "},
{"title":"Network (1975)"},
{"title":"Hard Eight "},
{"title":"Searching For Sugar Man"},
{"title":"The Truman Show"},
{"title":"Portrait of a Lady on Fire "},
{"title":"The Other Guys"},
{"title":"The Minority Report "},
{"title":"Groundhog Day"},
{"title":"Apocalypse Now! "},
{"title":"Untouchables (Kevin Costner, Sean Connery)"},
{"title":"Thank You For Smoking "},
{"title":"The Aviator "},
{"title":"Tennis Match: 2008 Wimbledon Nadal/Federer "},
{"title":"Tennis Match: 1999 French Open Hingis/Graf "}
];


var movies202 = [{"title":"Nacho Libre"},
{"title":"The Highway Men"},
{"title":"Rush"},
{"title":"Fun With Dick and Jane"},
{"title":"Chinatown"},
{"title":"Never Look Away"},
{"title":"Trumbo"},
{"title":"In Bruges "},
{"title":"<h4>End CORNTEEN </h4>"},
{"title":"Batman Begins"},
{"title":"Failure To Launch"},
{"title":"The Dark Knight"},
{"title":"The Lincoln Lawyer"},
{"title":"The Parent Trap"},
{"title":"The Lizzie McGuire Movie"},
{"title":"The Dark Knight Rises"},
{"title":"The Departed"},
{"title":"School of Rock"},
{"title":"The Descendants"},
{"title":"Borg Versus McEnroe"},
{"title":"Blood Simple"},
{"title":"I’m Thinking of Ending Things"},
{"title":"Richard Jewell"},
{"title":"Bad  News Bears"},
{"title":"Midnight Special"},
{"title":"Before Sunrise"},
{"title":"Before Sunset "},
{"title":"Moneyball "},
{"title":"Before Midnight"},
{"title":"The Girl With The Dragon Tattoo"},
{"title":"The Verdict"},
{"title":"Indignation "},
{"title":"Wild Hogs"},
{"title":"Parent Trip (Original) "},
{"title":"American Beauty"},
{"title":"A Cinderella Story"},
{"title":"The Front Page"},
{"title":"In The Loop"},
{"title":"Hateful Eight"},
{"title":"The Odd Couple"},
{"title":"Knives Out"},
{"title":"Klaus"},
{"title":"Mission Impossible 4"},
{"title":"<h4>SERIES </h4>"},
{"title":"Cheers"},
{"title":"Fraiser Season 1"},
{"title":"Chernobyl"},
{"title":"Succession"},
{"title":"The Righteous Gemstones"},
{"title":"Working Moms"},
{"title":"Community"},
{"title":"True Detective (Season 1, couldn't make it through 2.. again)"},
{"title":"Fargo"},
{"title":"Younger"},
{"title":"Waco"},
{"title":"The Queen's Gambit"},
{"title":"The Last Dance"}
];

var movies19 = [

{"title":"Spider-Man: Into the Spider-Verse"},
{"title":"Magnolia"},
{"title":"The Big Lebowski"},
{"title":"No Country For Old Men"},
{"title":"Netflix Fyre Festival Documentary"},
{"title":"Bad Times at El Royale"},
{"title":"The Ted Bundy Tapes"},
{"title":" The Graduate"},
{"title":"Eternal Sunshine"},
{"title":" Love, actually"},
{"title":" Lady Gaga: Five foot two"},
{"title":" Conspiracy"},
{"title":" Digging For Fire"},
{"title":" American Animals"},
{"title":" Always Be My Maybe"},
{"title":" Fracture"},
{"title":" Knock Down The House"},
{"title":" Fahrenheit 11/9 "},
{"title":" Burn After Reading"},
{"title":" Blue Valentine"},
{"title":" Synecdoche, New York"},
{"title":" Doubt"},
{"title":" Spring Breakers"},
{"title":" Edge of Seventeen"},
{"title":" Casino Royale"},
{"title":" Get Me Roger Stone"},
{"title":" Coco"},
{"title":" L.A. Confidential"},
{"title":" FYRE: The Greatest Party That Never Happened"}
];


var theater18 = [
{"title":"Roma"},
{"title":"Ralph Breaks The Internet"},
{"title":"The Favourite"}, 
{"title":"Bohemian Rhapsody"},
{"title":"Beautiful Boy"},
{"title":"Can You Ever Forgive Me?"},
{"title":"Boy Erased"},
{"title":"Colette"},
{"title":"Madeline's Madeline"},
{"title":"Blackklansman"},
{"title":"Three Identical Strangers"},
{"title":"Sorry To Bother You"},
{"title":"Incredibles 2"},
{"title":"Ocean's 8"},
{"title":"Let The Sun Shine In"},
{"title":"1945"},
{"title":"A Quiet Place"},
{"title":"The Greatest Showman"},
{"title":"Isle of Dogs"},
{"title":"Love, Simon"},
{"title":"Red Sparrow"},
{"title":"Loveless"},
{"title":"Phantom Thread"},
{"title":"Lady Bird"},
{"title":"Shape of Water "},
{"title":"Call Me By Your Name"}
];

var movies18 = [
{"title":"Ballard of Buster Scruggs"},
{"title":"American Animals"},
{"title":"Children of Men"},
{"title":"Wreck It Ralph"},
{"title":"Downsizing"},
{"title":"20th Century Women"},
{"title":"Moon"},
{"title":"Shaun Of The Dead"},
{"title":"A Beautiful Mind"},
{"title":"Locke"},
{"title":"The Constant Gardener"},
{"title":"Mississippi"},
{"title":"Haywire"},  
{"title":"The Informant"},
{"title":"Casino"},
{"title":"It"},
{"title":"I am Chris Farley"},
{"title":"Seven Psychopaths"},
{"title":"The Incredibles"},
{"title":"Warrior"},
{"title":"Burn After Reading"},
{"title":"The Princess Diaries"},
{"title":"The Lizzie McGuire Movie "},
{"title":"Monsters University"},
{"title":"To All The Boys I've Ever Loved"},
{"title":"Jim Jeffries: This is me Now "},
{"title":"I Love You, Man "},
{"title":"Half Nelsen"},
{"title":"Along Came Polly"},
{"title":"Ali Wong: Baby Cobra"},
{"title":"Ali Wong: Hard Knock Wife"},
{"title":"Friday Night Lights"},
{"title":"The Hateful Eight"},
{"title":"Magic Mike"},
{"title":"It Follows"},
{"title":"Icarus"},
{"title":"High School Musical"},
{"title":"Moonrise Kingdom"},
{"title":"The Panic In Needle Park"},
{"title":"Jaws"},
{"title":"The Florida Project"}
];

createBookString(books21,"books21")
createMovieString(movies21,"movies21");
createBookString(books20,"books20")
createMovieString(movies201,"movies201");
createMovieString(movies202,"movies202");
createBookString(books19,"books19");
createMovieString(movies19,"movies19");
createBookString(books18,"books18");
createMovieString(theater18,"theater18");
createMovieString(movies18,"movies18");




