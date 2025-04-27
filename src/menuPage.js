//Function that renders menu page
export function menuPage() {

    //Create content container and catch main container
    const mainContainer = document.querySelector("#content");
    mainContainer.innerHTML = "";

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "cards-container";

    //Add title
    const title = document.createElement("h1");
    title.textContent = "Menu options";

    //Add pizza cards and its content
    const card1 = document.createElement("div");
    card1.className = "card";

    const card2 = document.createElement("div");
    card2.className = "card";

    const card3 = document.createElement("div");
    card3.className = "card";

    const card4 = document.createElement("div");
    card4.className = "card";

    const card5 = document.createElement("div");
    card5.className = "card";

    const card6 = document.createElement("div");
    card6.className = "card";

    const card7 = document.createElement("div");
    card7.className = "card";

    const card8 = document.createElement("div");
    card8.className = "card";

    //Add card content and button
    const card1Title = document.createElement("h6");
    const card1Description = document.createElement("p");
    const card1Button = document.createElement("button");

    const card2Title = document.createElement("h6");
    const card2Description = document.createElement("p");
    const card2Button = document.createElement("button");

    const card3Title = document.createElement("h6");
    const card3Description = document.createElement("p");
    const card3Button = document.createElement("button");

    const card4Title = document.createElement("h6");
    const card4Description = document.createElement("p");
    const card4Button = document.createElement("button");

    const card5Title = document.createElement("h6");
    const card5Description = document.createElement("p");
    const card5Button = document.createElement("button");

    const card6Title = document.createElement("h6");
    const card6Description = document.createElement("p");
    const card6Button = document.createElement("button");

    const card7Title = document.createElement("h6");
    const card7Description = document.createElement("p");
    const card7Button = document.createElement("button");

    const card8Title = document.createElement("h6");
    const card8Description = document.createElement("p");
    const card8Button = document.createElement("button");

    // Set content for pizza cards
    card1Title.textContent = "Classic Margherita";
    card1Description.textContent = "Simple perfection with our house-made tomato sauce, fresh mozzarella, and basil leaves drizzled with extra virgin olive oil and finished with a sprinkle of sea salt.";
    card1Button.textContent = "Order Now";

    card2Title.textContent = "Pepperoni Passion";
    card2Description.textContent = "A crowd-pleaser featuring premium pepperoni slices atop our signature cheese blend and zesty tomato sauce, baked until the edges are perfectly crisp.";
    card2Button.textContent = "Order Now";

    card3Title.textContent = "Vegetable Supreme";
    card3Description.textContent = "A colorful medley of bell peppers, red onions, mushrooms, black olives, and cherry tomatoes on our herb-infused sauce, topped with mozzarella and a touch of oregano.";
    card3Button.textContent = "Order Now";

    card4Title.textContent = "Meat Lovers' Feast";
    card4Description.textContent = "For the carnivore in all of us - loaded with pepperoni, Italian sausage, bacon, ham, and ground beef on our robust tomato sauce and signature cheese blend.";
    card4Button.textContent = "Order Now";

    card5Title.textContent = "Mediterranean Dream";
    card5Description.textContent = "Transport your taste buds with spinach, feta cheese, sun-dried tomatoes, Kalamata olives, and artichoke hearts, finished with a light drizzle of olive oil.";
    card5Button.textContent = "Order Now";

    card6Title.textContent = "BBQ Chicken Deluxe";
    card6Description.textContent = "Tender pieces of grilled chicken, red onions, and cilantro on a smoky BBQ sauce base, topped with our special cheese blend for a sweet and savory experience.";
    card6Button.textContent = "Order Now";

    card7Title.textContent = "Spicy Diavola";
    card7Description.textContent = "For heat seekers - spicy calabrese salami, fresh chili peppers, and jalapeños on our tomato sauce base, topped with mozzarella and a sprinkle of red pepper flakes.";
    card7Button.textContent = "Order Now";

    card8Title.textContent = "Quattro Formaggi";
    card8Description.textContent = "A cheese lover's dream featuring a decadent blend of mozzarella, gorgonzola, parmesan, and creamy ricotta, finished with a touch of garlic-infused olive oil.";
    card8Button.textContent = "Order Now";

    //Add drinks
    const card9 = document.createElement("div");
    card9.className = "card";

    const card10 = document.createElement("div");
    card10.className = "card";

    const card11 = document.createElement("div");
    card11.className = "card";

    const card12 = document.createElement("div");
    card12.className = "card";

    // Drink content
    const card9Title = document.createElement("h6");
    const card9Description = document.createElement("p");
    const card9Button = document.createElement("button");

    const card10Title = document.createElement("h6");
    const card10Description = document.createElement("p");
    const card10Button = document.createElement("button");

    const card11Title = document.createElement("h6");
    const card11Description = document.createElement("p");
    const card11Button = document.createElement("button");

    const card12Title = document.createElement("h6");
    const card12Description = document.createElement("p");
    const card12Button = document.createElement("button");

    // Set content for drink cards
    card9Title.textContent = "Italian Soda";
    card9Description.textContent = "Refreshing carbonated water mixed with your choice of fruit syrup and a splash of cream, served over ice.";
    card9Button.textContent = "Order Now";

    card10Title.textContent = "Craft Root Beer";
    card10Description.textContent = "Our house-made old-fashioned root beer with hints of vanilla and cinnamon for a perfectly balanced sweetness.";
    card10Button.textContent = "Order Now";

    card11Title.textContent = "Fresh Lemonade";
    card11Description.textContent = "Hand-squeezed lemonade made daily with fresh lemons, pure cane sugar, and filtered water.";
    card11Button.textContent = "Order Now";

    card12Title.textContent = "Tuscan Iced Tea";
    card12Description.textContent = "Premium black tea infused with Mediterranean herbs and a hint of orange, served chilled with a lemon wedge.";
    card12Button.textContent = "Order Now";

    //Append children for pizza cards
    card1.appendChild(card1Title);
    card1.appendChild(card1Description);
    card1.appendChild(card1Button);

    card2.appendChild(card2Title);
    card2.appendChild(card2Description);
    card2.appendChild(card2Button);

    card3.appendChild(card3Title);
    card3.appendChild(card3Description);
    card3.appendChild(card3Button);

    card4.appendChild(card4Title);
    card4.appendChild(card4Description);
    card4.appendChild(card4Button);

    card5.appendChild(card5Title);
    card5.appendChild(card5Description);
    card5.appendChild(card5Button);

    card6.appendChild(card6Title);
    card6.appendChild(card6Description);
    card6.appendChild(card6Button);

    card7.appendChild(card7Title);
    card7.appendChild(card7Description);
    card7.appendChild(card7Button);

    card8.appendChild(card8Title);
    card8.appendChild(card8Description);
    card8.appendChild(card8Button);

    //Append children for drink cards
    card9.appendChild(card9Title);
    card9.appendChild(card9Description);
    card9.appendChild(card9Button);

    card10.appendChild(card10Title);
    card10.appendChild(card10Description);
    card10.appendChild(card10Button);

    card11.appendChild(card11Title);
    card11.appendChild(card11Description);
    card11.appendChild(card11Button);

    card12.appendChild(card12Title);
    card12.appendChild(card12Description);
    card12.appendChild(card12Button);

    // Append all cards to cards container
    cardsContainer.appendChild(card1);
    cardsContainer.appendChild(card2);
    cardsContainer.appendChild(card3);
    cardsContainer.appendChild(card4);
    cardsContainer.appendChild(card5);
    cardsContainer.appendChild(card6);
    cardsContainer.appendChild(card7);
    cardsContainer.appendChild(card8);
    cardsContainer.appendChild(card9);
    cardsContainer.appendChild(card10);
    cardsContainer.appendChild(card11);
    cardsContainer.appendChild(card12);

    // Append title and cards container to main container
    mainContainer.appendChild(title);
    mainContainer.appendChild(cardsContainer);
}