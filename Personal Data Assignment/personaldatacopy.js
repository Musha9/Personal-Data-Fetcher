function showDetails() {
    let name = document.getElementById("name").value
    let birth = document.getElementById("dob").value
    let favfood = document.getElementById("food").value
    let favmovie = document.getElementById("movie").value
    let favcolor = document.getElementById("color").value
    document.getElementById("result").innerHTML = 
    `${name}, you're a cool person. You were born on ${birth}.  Your favorite food is ${favfood}, 
    your favorite movie is ${favmovie}, and your favorite color is ${favcolor}.`
} 

function zodiacSign () {
    let birth = document.getElementById("dob").value;
    const birthdate = new Date(birth);
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate(); 

    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = "Capricorn"; 
    }
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiac = "Aquarius"; 
    }
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiac = "Pisces";
    } 
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = "Aries";
    } 
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = "Taurus";
    } 
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = "Gemini";
    } 
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = "Cancer";
    } 
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = "Leo";
    } 
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = "Virgo";
    } 
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = "Libra";
    } 
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = "Scorpio";
    } 
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = "Sagittarius";
} 
    document.getElementById("sign").innerHTML = `Your Zodiac Sign is ${zodiac}.`; 
}

function resetForm() {
    document.getElementById("personalDataChecker").reset() 
    document.getElementById("result").reset()
    document.getElementById("sign").reset()
}