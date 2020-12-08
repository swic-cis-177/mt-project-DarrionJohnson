const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

const setAMorPM = (time) => {
  const hrs = time.slice(0, 2);
  const min = time.slice(3);

  const am = (hrs) => {
    return hrs > 10
      ? hrs + ":" + min + " AM"
      : hrs > 0
      ? hrs.slice(1) + ":" + min + " AM"
      : "12" + ":" + min + " AM";
  };

  const pm = (hrs) => {
    hrs -= 12;
    return hrs + ":" + min + " PM";
  };

  return hrs > 12 ? pm(hrs, min) : am(hrs, min);
};

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
