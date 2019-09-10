'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
        tittle: "12 Angry Men",
        director: "Sidney Lumet",
        releaseDate: "4/10/1957",
        rating: "Not Rated",
        runTime: "95 mins",
        genres: "Drama"
      },
      {
        tittle: "2001: A Space Odyssey",
        director: "Stanley Kubrick",
        releaseDate: "4/3/1968",
        rating: "G",
        runTime: "140 mins",
        genres: "Science fiction"
      },
      {
        tittle: "A Clockwork Orange",
        director: "Stanley Kubrick",
        releaseDate: "12/19/1971",
        rating: "R",
        runTime: "137 mins",
        genres: "Drama"
      },
      {
        tittle: "A Night At The Opera",
        director: "Sam Wood",
        releaseDate: "11/15/1935",
        rating: "Passed",
        runTime: "90 mins",
        genres: "Comedy"
      },
      {
        tittle: "A Streetcar Named Desire",
        director: "Elia Kazan",
        releaseDate: "3/22/1952",
        rating: "PG",
        runTime: "125 mins",
        genres: "Drama"
      },
      {
        tittle: "All About Eve",
        director: "Joseph L. Mankiewicz",
        releaseDate: "10/27/1950",
        rating: "Passed",
        runTime: "138 mins",
        genres: "Drama"
      },
      {
        tittle: "All The President's Men",
        director: "Alan J. Pakula",
        releaseDate: "4/1/1976",
        rating: "PG",
        runTime: "136 mins",
        genres: "Drama"
      },
      {
        tittle: "American Graffiti",
        director: "George Lucas",
        releaseDate: "8/11/1973",
        rating: "PG",
        runTime: "110 mins",
        genres: "Comedy"
      },
      {
        tittle: "Annie Hall",
        director: "Woody Allen",
        releaseDate: "4/20/1977",
        rating: "PG",
        runTime: "94 mins",
        genres: "Romantic comedy"
      },
      {
        tittle: "Apocalypse Now",
        director: "Francis Ford Coppola",
        releaseDate: "8/15/1979",
        rating: "R",
        runTime: "157 mins",
        genres: "Drama"
      },
      {
        tittle: "Ben-Hur",
        director: "William Wyler",
        releaseDate: "1/29/1960",
        rating: "G",
        runTime: "212 mins",
        genres: "Epic"
      },
      {
        tittle: "Blade Runner",
        director: "Ridley Scott",
        releaseDate: "6/25/1982",
        rating: "R",
        runTime: "124 mins",
        genres: "Science fiction"
      },
      {
        tittle: "Bonnie And Clyde",
        director: "Arthur Penn",
        releaseDate: "8/13/1967",
        rating: "R",
        runTime: "111 mins",
        genres: "Biography"
      },
      {
        tittle: "Bringing Up Baby",
        director: "Howard Hawks",
        releaseDate: "2/18/1938",
        rating: "Not Rated",
        runTime: "102 mins",
        genres: "Screwball comedy"
      },
      {
        tittle: "Butch Cassidy And The Sundance Kid",
        director: "George Roy Hill",
        releaseDate: "10/24/1969",
        rating: "PG",
        runTime: "112 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Cabaret",
        director: "Bob Fosse",
        releaseDate: "2/13/1972",
        rating: "PG",
        runTime: "124 mins",
        genres: "Drama"
      },
      {
        tittle: "Casablanca",
        director: "Michael Curtiz",
        releaseDate: "1/23/1943",
        rating: "PG",
        runTime: "103 mins",
        genres: "Romance"
      },
      {
        tittle: "Chinatown",
        director: "Roman Polanski",
        releaseDate: "6/20/1974",
        rating: "R",
        runTime: "132 mins",
        genres: "Mystery"
      },
      {
        tittle: "Citizen Kane",
        director: "Orson Welles",
        releaseDate: "9/5/1941",
        rating: "PG",
        runTime: "119 mins",
        genres: "Drama"
      },
      {
        tittle: "City Lights",
        director: "Charles Chaplin",
        releaseDate: "3/7/1931",
        rating: "G",
        runTime: "87 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Do The Right Thing",
        director: "Spike Lee",
        releaseDate: "6/30/1989",
        rating: "R",
        runTime: "120 mins",
        genres: "Drama"
      },
      {
        tittle: "Double Indemnity",
        director: "Billy Wilder",
        releaseDate: "4/24/1944",
        rating: "Passed",
        runTime: "106 mins",
        genres: "Film noir"
      },
      {
        tittle: "Dr. Strangelove",
        director: "Stanley Kubrick",
        releaseDate: "1/29/1964",
        rating: "PG",
        runTime: "102 mins",
        genres: "Black comedy"
      },
      {
        tittle: "Duck Soup",
        director: "Leo McCarey",
        releaseDate: "11/17/1933",
        rating: "Not Rated",
        runTime: "80 mins",
        genres: "Comedy"
      },
      {
        tittle: "E.T",
        director: "Steven Spielberg",
        releaseDate: "6/11/1982",
        rating: "PG",
        runTime: "120 mins",
        genres: "Fantasy"
      },
      {
        tittle: "Easy Rider",
        director: "Dennis Hopper",
        releaseDate: "7/14/1969",
        rating: "R",
        runTime: "95 mins",
        genres: "Drama"
      },
      {
        tittle: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseDate: "7/6/1994",
        rating: "PG-13",
        runTime: "142 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Gone With The Wind",
        director: "Victor Fleming",
        releaseDate: "Sam Wood",
        rating: "George Cukor",
        runTime: "Chester Franklin",
        genres: "James Fitzpatrick"
      },
      {
        tittle: "Goodfellas",
        director: "Martin Scorsese",
        releaseDate: "9/19/1990",
        rating: "R",
        runTime: "146 mins",
        genres: "Drama"
      },
      {
        tittle: "High Noon",
        director: "Fred Zinnemann",
        releaseDate: "7/30/1952",
        rating: "PG",
        runTime: "87 mins",
        genres: "Western"
      },
      {
        tittle: "In The Heat Of The Night",
        director: "Norman Jewison",
        releaseDate: "8/2/1967",
        rating: "Not Rated",
        runTime: "110 mins",
        genres: "Drama"
      },
      {
        tittle: "Intolerance",
        director: "D. W. Griffith",
        releaseDate: "9/5/1916",
        rating: "Passed",
        runTime: "197 mins",
        genres: "Drama"
      },
      {
        tittle: "It Happened One Night",
        director: "Frank Capra",
        releaseDate: "2/23/1934",
        rating: "Not Rated",
        runTime: "105 mins",
        genres: "Screwball comedy"
      },
      {
        tittle: "It'S A Wonderful Life",
        director: "Frank Capra",
        releaseDate: "1/7/1947",
        rating: "PG",
        runTime: "132 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Jaws",
        director: "Steven Spielberg",
        releaseDate: "6/20/1975",
        rating: "PG",
        runTime: "124 mins",
        genres: "Drama"
      },
      {
        tittle: "King Kong",
        director: "Merian C. Cooper",
        releaseDate: "Ernest B. Schoedsack",
        rating: "4/7/1933",
        runTime: "Passed",
        genres: "110 mins"
      },
      {
        tittle: "Lawrence Of Arabia",
        director: "David Lean",
        releaseDate: "12/16/1962",
        rating: "Approved",
        runTime: "180 mins",
        genres: "Adventure"
      },
      {
        tittle: "M*A*S*H",
        director: "Robert Altman",
        releaseDate: "3/1/1970",
        rating: "R",
        runTime: "116 mins",
        genres: "Comedy"
      },
      {
        tittle: "Midnight Cowboy",
        director: "John Schlesinger",
        releaseDate: "5/25/1969",
        rating: "R",
        runTime: "113 mins",
        genres: "Drama"
      },
      {
        tittle: "Modern Times",
        director: "Charles Chaplin",
        releaseDate: "2/21/1936",
        rating: "G",
        runTime: "87 mins",
        genres: "Comedy"
      },
      {
        tittle: "Mr. Smith Goes to Washington",
        director: "Frank Capra",
        releaseDate: "10/19/1939",
        rating: "Not Rated",
        runTime: "130 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Nashville",
        director: "Robert Altman",
        releaseDate: "6/11/1975",
        rating: "R",
        runTime: "157 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Network",
        director: "Sidney Lumet",
        releaseDate: "11/14/1976",
        rating: "R",
        runTime: "121 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "North By Northwest",
        director: "Alfred Hitchcock",
        releaseDate: "9/26/1959",
        rating: "Not Rated",
        runTime: "136 mins",
        genres: "Drama"
      },
      {
        tittle: "On The Waterfront",
        director: "Elia Kazan",
        releaseDate: "6/22/1954",
        rating: "Not Rated",
        runTime: "107 mins",
        genres: "Drama"
      },
      {
        tittle: "One Flew Over The Cuckoo's Nest",
        director: "Milos Forman",
        releaseDate: "11/19/1975",
        rating: "R",
        runTime: "133 mins",
        genres: "Drama"
      },
      {
        tittle: "Platoon",
        director: "Oliver Stone",
        releaseDate: "12/19/1986",
        rating: "R",
        runTime: "120 mins",
        genres: "Drama"
      },
      {
        tittle: "Psycho",
        director: "Alfred Hitchcock",
        releaseDate: "9/8/1960",
        rating: "R",
        runTime: "108 mins",
        genres: "Horror"
      },
      {
        tittle: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseDate: "10/14/1994",
        rating: "R",
        runTime: "154 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Raging Bull",
        director: "Martin Scorsese",
        releaseDate: "12/19/1980",
        rating: "R",
        runTime: "129 mins",
        genres: "Biography"
      },
      {
        tittle: "Raiders Of The Lost Ark",
        director: "Steven Spielberg",
        releaseDate: "6/12/1981",
        rating: "PG",
        runTime: "115 mins",
        genres: "Adventure"
      },
      {
        tittle: "Rear Window",
        director: "Alfred Hitchcock",
        releaseDate: "9/1/1954",
        rating: "PG",
        runTime: "112 mins",
        genres: "Mystery"
      },
      {
        tittle: "Rocky",
        director: "John G. Avildsen",
        releaseDate: "12/3/1976",
        rating: "PG",
        runTime: "121 mins",
        genres: "Drama"
      },
      {
        tittle: "Saving Private Ryan",
        director: "Steven Spielberg",
        releaseDate: "7/24/1998",
        rating: "R",
        runTime: "170 mins",
        genres: "Drama"
      },
      {
        tittle: "Schindler's List",
        director: "Steven Spielberg",
        releaseDate: "12/15/1993",
        rating: "R",
        runTime: "185 mins",
        genres: "Drama"
      },
      {
        tittle: "Shane",
        director: "George Stevens",
        releaseDate: "8/1/1953",
        rating: "Not Rated",
        runTime: "118 mins",
        genres: "Western"
      },
      {
        tittle: "Singin' In The Rain",
        director: "Gene Kelly",
        releaseDate: "Stanley Donen",
        rating: "4/11/1952",
        runTime: "G",
        genres: "103 mins"
      },
      {
        tittle: "Snow White And The Seven Dwarfs",
        director: "William Cottrell",
        releaseDate: "David Hand",
        rating: "Wilfred Jackson",
        runTime: "Larry Morey",
        genres: "Perce Pearce"
      },
      {
        tittle: "Some Like It Hot",
        director: "Billy Wilder",
        releaseDate: "4/14/1959",
        rating: "Not Rated",
        runTime: "120 mins",
        genres: "Comedy"
      },
      {
        tittle: "Sophie'S Choice",
        director: "Alan J. Pakula",
        releaseDate: "12/10/1982",
        rating: "R",
        runTime: "157 mins",
        genres: "Drama"
      },
      {
        tittle: "Spartacus",
        director: "Stanley Kubrick",
        releaseDate: "Anthony Mann",
        rating: "11/17/1960",
        runTime: "PG-13",
        genres: "195 mins"
      },
      {
        tittle: "Star Wars",
        director: "George Lucas",
        releaseDate: "5/25/1977",
        rating: "PG",
        runTime: "123 mins",
        genres: "Adventure"
      },
      {
        tittle: "Sullivan's Travels",
        director: "Preston Sturges",
        releaseDate: "2/6/1942",
        rating: "Not Rated",
        runTime: "91 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Sunrise",
        director: "F.W. Murnau",
        releaseDate: "11/4/1927",
        rating: "Passed",
        runTime: "94 mins",
        genres: "Drama"
      },
      {
        tittle: "Sunset Blvd",
        director: "Billy Wilder",
        releaseDate: "9/29/1950",
        rating: "Not Rated",
        runTime: "115 mins",
        genres: "Drama"
      },
      {
        tittle: "Swing Time",
        director: "George Stevens",
        releaseDate: "9/4/1936",
        rating: "Not Rated",
        runTime: "103 mins",
        genres: "Musical"
      },
      {
        tittle: "Taxi Driver",
        director: "Martin Scorsese",
        releaseDate: "2/7/1976",
        rating: "R",
        runTime: "112 mins",
        genres: "Drama"
      },
      {
        tittle: "The African Queen",
        director: "John Huston",
        releaseDate: "3/21/1952",
        rating: "PG",
        runTime: "106 mins",
        genres: "Romance"
      },
      {
        tittle: "The Apartment",
        director: "Billy Wilder",
        releaseDate: "9/16/1960",
        rating: "Not Rated",
        runTime: "125 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "The Best Years Of Our Lives",
        director: "William Wyler",
        releaseDate: "5/29/1947",
        rating: "Approved",
        runTime: "172 mins",
        genres: "Drama"
      },
      {
        tittle: "The Bridge On The River Kwai",
        director: "David Lean",
        releaseDate: "12/14/1957",
        rating: "PG",
        runTime: "161 mins",
        genres: "Drama"
      },
      {
        tittle: "The Deer Hunter",
        director: "Michael Cimino",
        releaseDate: "12/8/1978",
        rating: "R",
        runTime: "183 mins",
        genres: "Drama"
      },
      {
        tittle: "The French Connection",
        director: "William Friedkin",
        releaseDate: "10/1/1971",
        rating: "R",
        runTime: "104 mins",
        genres: "Drama"
      },
      {
        tittle: "The General",
        director: "Buster Keaton",
        releaseDate: "Clyde Bruckman",
        rating: "2/5/1927",
        runTime: "Passed",
        genres: "77 mins"
      },
      {
        tittle: "The Godfather",
        director: "Francis Ford Coppola",
        releaseDate: "3/24/1972",
        rating: "R",
        runTime: "177 mins",
        genres: "Drama"
      },
      {
        tittle: "The Godfather Part Ii",
        director: "Francis Ford Coppola",
        releaseDate: "12/20/1974",
        rating: "R",
        runTime: "200 mins",
        genres: "Drama"
      },
      {
        tittle: "The Gold Rush",
        director: "Charles Chaplin",
        releaseDate: "8/16/1925",
        rating: "Not Rated",
        runTime: "74 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "The Graduate",
        director: "Mike Nichols",
        releaseDate: "12/21/1967",
        rating: "PG",
        runTime: "105 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "The Grapes Of Wrath",
        director: "John Ford",
        releaseDate: "3/15/1940",
        rating: "Passed",
        runTime: "129 mins",
        genres: "Drama"
      },
      {
        tittle: "The Last Picture Show",
        director: "Peter Bogdanovich",
        releaseDate: "10/1/1971",
        rating: "R",
        runTime: "118 mins",
        genres: "Drama"
      },
      {
        tittle: "The Lord Of The Rings: The Fellowship Of The Ring",
        director: "Peter Jackson",
        releaseDate: "12/19/2001",
        rating: "PG-13",
        runTime: "178 mins",
        genres: "Adventure"
      },
      {
        tittle: "The Maltese Falcon",
        director: "John Huston",
        releaseDate: "10/18/1941",
        rating: "Not Rated",
        runTime: "100 mins",
        genres: "Drama"
      },
      {
        tittle: "The Philadelphia Story",
        director: "George Cukor",
        releaseDate: "1/17/1941",
        rating: "Not Rated",
        runTime: "112 mins",
        genres: "Romantic comedy"
      },
      {
        tittle: "The Searchers",
        director: "John Ford",
        releaseDate: "5/26/1956",
        rating: "Passed",
        runTime: "119 mins",
        genres: "Western"
      },
      {
        tittle: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseDate: "10/14/1994",
        rating: "R",
        runTime: "142 mins",
        genres: "Drama"
      },
      {
        tittle: "The Silence Of The Lambs",
        director: "Jonathan Demme",
        releaseDate: "2/14/1991",
        rating: "R",
        runTime: "120 mins",
        genres: "Drama"
      },
      {
        tittle: "The Sixth Sense",
        director: "M. Night Shyamalan",
        releaseDate: "8/6/1999",
        rating: "PG-13",
        runTime: "107 mins",
        genres: "Drama"
      },
      {
        tittle: "The Sound Of Music",
        director: "Robert Wise",
        releaseDate: "4/1/1965",
        rating: "G",
        runTime: "175 mins",
        genres: "Musical"
      },
      {
        tittle: "The Treasure Of The Sierra Madre",
        director: "John Huston",
        releaseDate: "1/24/1948",
        rating: "Passed",
        runTime: "128 mins",
        genres: "Drama"
      },
      {
        tittle: "The Wild Bunch",
        director: "Sam Peckinpah",
        releaseDate: "6/18/1969",
        rating: "R",
        runTime: "135 mins",
        genres: "Western"
      },
      {
        tittle: "The Wizard Of Oz",
        director: "Victor Fleming",
        releaseDate: "King Vidor",
        rating: "8/25/1939",
        runTime: "PG",
        genres: "101 mins"
      },
      {
        tittle: "Titanic",
        director: "James Cameron",
        releaseDate: "12/19/1997",
        rating: "PG-13",
        runTime: "197 mins",
        genres: "Drama"
      },
      {
        tittle: "To Kill A Mockingbird",
        director: "Robert Mulligan",
        releaseDate: "12/25/1962",
        rating: "Not Rated",
        runTime: "129 mins",
        genres: "Drama"
      },
      {
        tittle: "Tootsie",
        director: "Sydney Pollack",
        releaseDate: "12/17/1982",
        rating: "PG",
        runTime: "116 mins",
        genres: "Comedy-drama"
      },
      {
        tittle: "Toy Story",
        director: "John Lasseter",
        releaseDate: "11/22/1995",
        rating: "G",
        runTime: "81 mins",
        genres: "Comedy"
      },
      {
        tittle: "Unforgiven",
        director: "Clint Eastwood",
        releaseDate: "8/7/1992",
        rating: "R",
        runTime: "130 mins",
        genres: "Western"
      },
      {
        tittle: "Vertigo",
        director: "Alfred Hitchcock",
        releaseDate: "5/28/1958",
        rating: "PG",
        runTime: "120 mins",
        genres: "Romance"
      },
      {
        tittle: "West Side Story",
        director: "Robert Wise",
        releaseDate: "Jerome Robbins",
        rating: "12/23/1961",
        runTime: "Not Rated",
        genres: "155 mins"
      },
      {
        tittle: "Who's Afraid Of Virginia Woolf?",
        director: "Mike Nichols",
        releaseDate: "6/22/1966",
        rating: "Not Rated",
        runTime: "131 mins",
        genres: "Drama"
      },
      {
        tittle: "Yankee Doodle Dandy",
        director: "Michael Curtiz",
        releaseDate: "1/2/1943",
        rating: "Passed",
        runTime: "126 mins",
        genres: "Biography"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};