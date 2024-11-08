const carddetails = [
  { id: 1, title: "Frontend Developer", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "fd.jpg" },
  { id: 2, title: "Backend Developer", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "bd.jpg" },
  { id: 3, title: "Network Engineer", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "ne.jpg" },
  { id: 4, title: "DevOps Engineer", description: "Need for programming skills", backgroundColor: "#fffff", imageBackgroundColor: "#e1bee7", image: "devops.jpg" }
];

function displayoncard() {
  const container = document.getElementById("card-container");

  carddetails.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = data.backgroundColor;

  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.backgroundColor = data.imageBackgroundColor;

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = `${data.title} image`;
    imageContainer.appendChild(img);
    card.appendChild(imageContainer);

    const title = document.createElement("h3");
    title.textContent = data.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = data.description;
    card.appendChild(description);

    container.appendChild(card);
  });
}

displayoncard();