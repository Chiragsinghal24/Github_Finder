const modeValue = document.getElementById('value');
const modeImage = document.getElementById('mode');
const repoCount = document.getElementById('repos_count');
const followerCount = document.getElementById('followers_count');
const followingCount = document.getElementById('following_count');
const descriptionValue = document.getElementById('description');
const locationValue = document.getElementById('location_img');
const link = document.getElementById('link_img');
const twitter = document.getElementById('twitter_img');
const company = document.getElementById('company_img');
const usernameValue = document.getElementById('username');
const octanetImage = document.getElementById('octanet');
const usernameid = document.getElementById('usernameid');
const inputtext = document.getElementById('search_text');
const searchbar = document.querySelector('.search_bar');
const container = document.querySelector('.container');
const heading = document.getElementById('heading');

const Blue = " hsl(212, 100%, 50%)";
const Lightblue = "hsl(217, 20%, 51%)";
const Darkblue = "hsl(217, 35%, 45%)";
const Darkbluedarker = "hsl(222, 41%,20%)";
const Verydarkblue =  "hsl(217, 21%, 21%)";
const Verydarkbluedarker =  "hsl(220, 40%, 13%)";
const Verylightblue =  "hsl(227, 100%,98%)";
const White = "hsl(0, 0%, 100%)";



let toggleValue = false;

modeImage.addEventListener('click', function () {
  if (toggleValue === false) {
    modeValue.textContent = "DARK";
    modeImage.src = 'assets/icon-moon.svg'
    document.body.style.background = Verylightblue
    searchbar.style.background = White
    container.style.background = White
    modeValue.style.color = Darkblue
    heading.style.color = Darkblue
    usernameValue.style.color = Verydarkbluedarker
    inputtext.style.background = White
    toggleValue = true;
  } else {
    modeValue.textContent = "LIGHT";
    modeImage.src = 'assets/icon-sun.svg'
    document.body.style.background = Verydarkbluedarker
    toggleValue = false;
    searchbar.style.background = Darkbluedarker
    container.style.background = Darkbluedarker
    modeValue.style.color = White
    heading.style.color = White
    usernameValue.style.color = White
    inputtext.style.background = Darkbluedarker
  }
});

const searchButton = document.querySelector('.search_button');

function fetchData(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((userData) => {
      console.log(userData);
      repoCount.innerHTML = userData.public_repos;
      followerCount.innerHTML = userData.followers;
      followingCount.innerHTML = userData.following;
      descriptionValue.innerHTML = userData.bio;

      locationValue.innerHTML = userData.location;
      company.innerHTML = userData.company;
      link.innerHTML = userData.blog;
      twitter.innerHTML = userData.twitter_username;
      octanetImage.src = userData.avatar_url;

      usernameValue.innerHTML = userData.name;
      usernameid.innerHTML = `@${userData.login}`;

      const name = userData.name;
      if (name) {
        console.log(`User's Name: ${name}`);
      } else {
        console.log(`User's name is not available.`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("User not found");
    });
}

searchButton.addEventListener('click', function () {
  const inputValue = inputtext.value;
  fetchData(inputValue);
});