const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

function setAMorPM(time) {
  return time.slice(0, 2) > 12 ? "PM" : "AM";
}

export const addWalk = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (formInfo, { id, value }) => ({
        ...formInfo,
        [id]: value,
      }),
      {}
    );

export const createWalksTable = (walksData) => {
  tbody.innerHTML = null;

  walksData.forEach(({ date, stepCounter, startTime, endTime }) => {
    const newWalksRow = template.content.cloneNode(true);
    const newWalksTDs = newWalksRow.querySelectorAll("td");

    newWalksTDs[0].textContent = date;
    newWalksTDs[1].textContent = stepCounter;
    newWalksTDs[2].textContent = setAMorPM(startTime);
    newWalksTDs[3].textContent = setAMorPM(endTime);
    tbody.appendChild(newWalksRow);
  });
};
