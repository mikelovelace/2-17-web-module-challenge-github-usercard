import axios from "axios";

axios
.get("https://api.github.com/users/mikelovelace")
.then((res) => {
  const cardContainer = document.querySelector(".cards")
  cardContainer.appendChild(githubCard(res.data))
  getFollowers(res)
})
.catch((err) => {
  console.log(`!!!ERROR ERROR ERROR!!!`, err)
})

// const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"]

// followersArray.map((followers) => {
//   axios
//   .get(`https://api.github.com/users/${followers}`)
//   .then((res) => {
//     const followerContainer = document.querySelector(".cards")
//     followerContainer.appendChild(githubCard(res.data))
//     console.log(`DATA DATA DATA`, res.data)
//   })
//   .catch((err) => {
//     console.log(`!!!ERROR ERROR ERROR!!!`, err)
//   })
// })

function getFollowers(obj) {
  axios
  .get(obj.data.followers_url)
  .then((res) => {
    const followerContainer = document.querySelector(".cards")
    res.data.forEach((follower) => {
      axios
      .get(follower.url)
      .then((res) => {
        followerContainer.appendChild(githubCard(res.data))
      })
      .catch((err) => {
        console.log(`!!!ERROR ERROR ERROR!!!`, err)
      })
    })
    return res
  })
  .catch((err) => {
    console.log(`!!!ERROR ERROR ERROR!!!`, err)
  })
}



function githubCard(userObj) {
  const userCard = document.createElement("div")
  const userImg = document.createElement("img")
  const userCardInfo = document.createElement("div")
  const userRealName = document.createElement("h3")
  const userScreenName = document.createElement("p")
  const userLocation = document.createElement("p")
  const userProfile = document.createElement("p")
  const userLink = document.createElement("a")
  const userFollowers = document.createElement("p")
  const userFollowing = document.createElement("p")
  const userBio = document.createElement("p")

  userImg.src = userObj.avatar_url
  userImg.alt = "github user"
  userRealName.textContent = userObj.name
  userScreenName.textContent = userObj.login
  userLocation.textContent = `Location: ${userObj.location}`
  userProfile.textContent = "Profile: "
  userLink.textContent = "Link to profile"
  userLink.href = userObj.html_url
  userFollowers.textContent = `Followers: ${userObj.followers}`
  userFollowing.textContent = `Following: ${userObj.following}`
  userBio.textContent = `Bio: ${userObj.bio}`

  userCard.classList.add("card")
  userCardInfo.classList.add("card-info")
  userRealName.classList.add("name")
  userScreenName.classList.add("username")

  userCard.appendChild(userImg)
  userCard.appendChild(userCardInfo)
  userCardInfo.appendChild(userRealName)
  userCardInfo.appendChild(userScreenName)
  userCardInfo.appendChild(userLocation)
  userCardInfo.appendChild(userProfile)
  userProfile.appendChild(userLink)
  userCardInfo.appendChild(userFollowers)
  userCardInfo.appendChild(userFollowing)
  userCardInfo.appendChild(userBio)

  return userCard

}

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
