const apiUrl = "https://api.adviceslip.com/advice";

function fetchData(e) {
  e.preventDefault();

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("an error occurred");
      }
      return response.json();
    })
    .then((data) => {
      const slip = data.slip;
      const id = slip.id;
      const advice = slip.advice;

      console.log(`id = ${id} and advice is: "${advice}"`);
    })
    .catch((error) => {
      console.error("there was an error here:", error);
    });
}

document.addEventListener("click", fetchData);
