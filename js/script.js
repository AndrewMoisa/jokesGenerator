const url = "https://api.noroff.dev/api/v1/jokes";
const container = document.querySelector(".jokesContainer");
const btn = document.querySelector(".generateBtn");

async function fetchJokes() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

async function displayRandomJoke() {
  const jokesArray = await fetchJokes();
  if (jokesArray.length > 0) {
    const randomNumber = Math.floor(Math.random() * jokesArray.length);
    const joke = jokesArray[randomNumber];

    container.innerHTML = `
      <h2>${joke.type.toUpperCase()}</h2>
      <p class="setup">${joke.setup}</p>
      <p class="punch">${joke.punchline}</p>
    `;
  } else {
    container.innerHTML = `<p class="error">No jokes available</p>`;
  }
}

displayRandomJoke();

btn.addEventListener("click", displayRandomJoke);
