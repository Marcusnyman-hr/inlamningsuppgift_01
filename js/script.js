const loadingUsers = document.getElementById("loading");
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
}

fetchUsers().then(fetchedUsers => {
  const users = fetchedUsers;
  const gridContainer = document.getElementById("user_grid_container");

  users.forEach((userObj, index) => {
    let gridItem = document.createElement("div");
    gridItem.classList.add("user_grid_item");

    let userName = document.createElement("h3");
    userName.innerText = userObj.name;

    let userAvatar = document.createElement("img");
    userAvatar.src = `https://robohash.org/${index}.png`
    userAvatar.alt = 'picture of a robot';

    let userInfoList = document.createElement("ul");
    let email = document.createElement("li");
    let website = document.createElement("li");
    let company = document.createElement("li");
    email.innerText = userObj.email;
    website.innerText = `www.${userObj.website}`;
    company.innerText = userObj.company.name;

    userInfoList.appendChild(email);
    userInfoList.appendChild(website);
    userInfoList.appendChild(company);

    gridItem.appendChild(userName);
    gridItem.appendChild(userAvatar);
    gridItem.appendChild(userInfoList)

    gridContainer.appendChild(gridItem);
  })
  loadingUsers.classList.add("hidden")
});