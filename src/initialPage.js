//Function that renders the page Home section
export function homePage() {

    //Create and catch content containers
    const mainContainer = document.querySelector("#content");
    mainContainer.innerHTML = "";

    const text = document.createElement("div");
    text.className = "text-container";
    const socialMedia = document.createElement("div");
    socialMedia.className = "social-media-container";

    //Add title
    const title = document.createElement("h1");
    title.textContent = "Pizzeria Napoletana";

    //Add restaurant description
    const description = document.createElement("p");
    description.textContent = "Welcome to Pizzeria Napoletana - where tradition and flavor meet in every slice. Our pizzas are crafted with artisanal dough slowly fermented for 48 hours, fresh ingredients selected daily, and baked in a wood-fired oven reaching 850°F. Each bite tells a story of Italian culinary passion passed down through generations. From the classic Margherita to our exclusive creation featuring local ingredients, we invite you to taste the difference that only time, dedication, and quality ingredients can deliver. Join our family for an authentic experience that goes far beyond just a meal.";

    //Add social profiles
    const instagram = document.createElement("div");
    instagram.textContent = "@pizzerianapoletana";

    const facebook = document.createElement("div");
    facebook.textContent = "www.facebook.com/pizzerianapoletana";

    const twitter = document.createElement("div");
    twitter.textContent = "@pizzerianapoletana";

    //Append children
    text.appendChild(title);
    text.appendChild(description);
    socialMedia.appendChild(instagram);
    socialMedia.appendChild(twitter);
    socialMedia.appendChild(facebook);
    mainContainer.appendChild(text);
    mainContainer.appendChild(socialMedia);
}