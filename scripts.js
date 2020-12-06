import { addWalk, createWalksTable } from "./lib.js";

const walksTable = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  walksTable.push(addWalk(event.target.elements));
  createWalksTable(walksTable);
});
