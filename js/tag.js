function tagline() {
    let x = new Date();
    let day = x.getDay();
    let quote;
    switch (day) {
        case 0:
            quote = "Smooth out your day, every day.";
            document.getElementById("tagline").innerHTML = quote;
            break;
        case 1:
            quote = "Survive Monday, get coffee.";
            document.getElementById("tagline").innerHTML = quote;
            break;
        case 2:
            quote = "We make the mornings better. We make the nights longer";
            document.getElementById("tagline").innerHTML = quote;
            break;
        case 3:
            quote = "Behind every successful person is a substantial amount of coffee.";
            document.getElementById("tagline").innerHTML = quote;
            break;
        case 4:
            quote = "Every day is a coffee day.";
            document.getElementById("tagline").innerHTML = quote;
            break;
        case 5:
            quote = "Live, Love, Coffee.";
            document.getElementById("tagline").innerHTML = quote;
            break;
        case 6:
            quote = "For a more seductive coffee break.";
            document.getElementById("tagline").innerHTML = quote;
            break;
    }  
}

tagline();