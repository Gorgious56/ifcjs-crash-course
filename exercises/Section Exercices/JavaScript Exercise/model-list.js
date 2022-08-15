import { projects } from "./projects.js";

function createCard(project) {
    const card = document.createElement("a");
    card.href = `./model-viewer.html?id=${project.id}`;
    card.classList.add("model-list-item");

    const text = document.createElement("div");
    text.textContent = project.name;
    card.appendChild(text);

    const img = document.createElement("img");
    const path = project.snapshot;
    img.src = path;
    img.alt = `Model ${project.id} Snapshot`;
    img.classList.add("model-list-item-snapshot");
    card.appendChild(img);

    return card;
}

const container = document.querySelector(".model-list");
for (let project of projects) {
    const newcard = createCard(project);
    container.appendChild(newcard);
}
