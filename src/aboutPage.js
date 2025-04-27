//Function that renders the about page
export function aboutPage() {

    //Catch main container and create contact info container
    const mainContainer = document.querySelector("#content");
    mainContainer.innerHTML = "";

    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-info";

    // Location section
    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";

    const addressLine1 = document.createElement("p");
    addressLine1.textContent = "142 Riverside Terrace";

    const addressLine2 = document.createElement("p");
    addressLine2.textContent = "Oakwood Heights, Pine Valley, CA 94123";

    // Phone section
    const phoneTitle = document.createElement("h3");
    phoneTitle.textContent = "Phone Number";

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "(555) 987-6543";

    // Hours section
    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Hours Open";

    const hoursMon = document.createElement("p");
    hoursMon.textContent = "Monday - Thursday: 11:00 AM - 9:00 PM";

    const hoursFri = document.createElement("p");
    hoursFri.textContent = "Friday - Saturday: 11:00 AM - 11:00 PM";

    const hoursSun = document.createElement("p");
    hoursSun.textContent = "Sunday: 12:00 PM - 8:00 PM";

    // Email section
    const emailTitle = document.createElement("h3");
    emailTitle.textContent = "Email";

    const emailAddress = document.createElement("p");
    emailAddress.textContent = "info@pizzerianapoletana.com";

    // Append all elements to the contact container
    contactContainer.appendChild(locationTitle);
    contactContainer.appendChild(addressLine1);
    contactContainer.appendChild(addressLine2);

    contactContainer.appendChild(phoneTitle);
    contactContainer.appendChild(phoneNumber);

    contactContainer.appendChild(hoursTitle);
    contactContainer.appendChild(hoursMon);
    contactContainer.appendChild(hoursFri);
    contactContainer.appendChild(hoursSun);

    contactContainer.appendChild(emailTitle);
    contactContainer.appendChild(emailAddress);

    mainContainer.appendChild(contactContainer);
}