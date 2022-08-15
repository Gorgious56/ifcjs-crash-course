import { projects } from "./projects.js";

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get("id");
const currentProject = projects.find((project) => String(project.id) === String(currentProjectID));
const iframe = document.getElementById("model-viewer-iframe");
iframe.src = currentProject.link;

const title = document.getElementsByTagName("H1")[0];
title.textContent = currentProject.name;
