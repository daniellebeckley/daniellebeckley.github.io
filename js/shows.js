
var shows = [
{"artist":"Transviolet","location":"Beat Kitchen","date":"March 11, 2020"},
{"artist":"Wilco","location":"Chicago Theater","date":"December 19, 2019"},
{"artist":"Whitney","location":"Thalia Hall","date":"December 5, 2019"},
{"artist":"Chastity Belt","location":"Schubas","date":"November 21, 2019"},
{"artist":"Chastity Belt","location":"Schubas","date":"November 21, 2019"},
{"artist":"Wild Pink | Ryley Walker","location":"Hungry Brain","date":"August 16, 2019"},
{"artist":"Weyes Blood","location":"Thalia Hall","date":"September 30, 2019"},
{"artist":"Neighbor Lady","location":"Hideout","date":"September 22, 2019"},
{"artist":"Retirement Party","location":"Beat Kitchen August 27, 2019 with Allie"},
{"artist":"Sacred Paws","location":"Beat Kitchen","date":"July 28, 2019"},
{"artist":"The National","location":"Milwaukee, WI","date":"June 30, 2019"},
{"artist":"Yo La Tengo","location":"Space","date":" June 23, 2019"},
{"artist":"Father John Misty | Jason Isbell & the 400 Unit","location":"Northerly Island","date":"June 15, 2019"},
{"artist":"Rolling Stones","location":"Soldier Field","date":"June 21, 2019"},
{"artist":"Olden Yolk","location":"Hideout","date":"May 30, 2019"},
{"artist":"FLORENCE AND THE MACHINE","location":"Northerly Island- MAY 24, 2019","date":"SAM AND ALLIE"},
{"artist":"Camp Cope","location":"Subterranean","date":"May 22, 2019 with Sam, Allie and Taylor"},
{"artist":"Strand of Oaks","location":"Lincoln Hall","date":"May 3, 2019"},
{"artist":"CHVRCHES","location":"Aragon","date":"May 2, 2019"},
{"artist":"Jeff Tweedy","location":"Vic Theatre","date":"March 22, 2019"},
{"artist":"Retirement Party & Illuminati Hotties","location":"Hideout","date":"February 16, 2019"},
{"artist":"Thom Yorke","location":"Chicago Theater","date":"December 4, 2018"},
{"artist":"Wild Pink | Thurston Moore","location":"Empty Bottle","date":"October 13, 2018"},
{"artist":"Interpol","location":"Riot Fest","date":"September 2018"},
{"artist":"Ryley Walker","location":"Hideout","date":"August 17, 2018"},
{"artist":"Northly Island Benefit with Mark","date":"Usher, Michael Phelps, July 21, 2018"},
{"artist":"Constellation Thing","date":"February 24, 2018"},
{"artist":"Destroyer","location":"Metro","date":"January 20, 2018"},
{"artist":"Frankie Cosmos","location":"SPACE","date":"September 30, 2017"}
];

var con = '<div>';

shows.forEach(function(concert){
    con += "<h4>" + concert.artist + " @ " + concert.location + " - " + concert.date + "</h4>";
})

con += "</div>";
document.getElementById("shows").innerHTML = con;
