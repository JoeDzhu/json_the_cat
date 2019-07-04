const request = require('request');

const breedNameInput = process.argv[0];

const url = `https://api.thecatapi.com/v1/breeds/?q=${breedNameInput}`;

request(url, (error, response, body) => {
  const breed = JSON.parse(body); 
  //Always JSON parse the received information first then do the following processes.
  // console.log(breed);

  //anything JSON first or communicated through internet is already stringify, meaning all
  //keys have been added with "", so when received JSON files, the keys will be "";
  //then after parse it, make it more orgnized and also removed the "";

  if(error) {
    console.log('request error', error);
    throw error;
  }

  if(breed) {
    console.log(breed[0].hairless);
    console.log(breed.description);
  }


  else {
    console.log(`the bread of ${breedNameInput} is not found.`)
  }

});

//this first obj in the responded array is 

/* {"weight":{"imperial":"7  -  10","metric":"3 - 5"},
"id":"abys","name":"Abyssinian",
"cfa_url":"http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
"vetstreet_url":"http://www.vetstreet.com/cats/abyssinian",
"vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
"temperament":"Active, Energetic, Independent, Intelligent, Gentle","origin":
"Egypt","country_codes":"EG","country_code":"EG","description":
"The Abyssinian is easy to care for, and a joy to have in your home. 
They’re affectionate cats and love both people and other animals.",
"life_span":"14 - 15","indoor":0,"lap":1,"alt_names":"",
"adaptability":5,"affection_level":5,"child_friendly":3,"dog_friendly":4,
"energy_level":5,"grooming":1,"health_issues":2,"intelligence":5,
"shedding_level":2,"social_needs":5,"stranger_friendly":5,"vocalisation":1,
"experimental":0,"hairless":0,"natural":1,"rare":0,"rex":0,
"suppressed_tail":0,"short_legs":0,
"wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)","hypoallergenic":0}*/