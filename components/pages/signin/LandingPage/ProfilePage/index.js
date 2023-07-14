const token = JSON.parse(localStorage.getItem("token"));
const url = "http://localhost:8080/users";
const Localid = JSON.parse(localStorage.getItem("id"));

//Extracting data from Api
const getDetails = async () => {
  //console.log(id);
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);
  return posts;
};

//Working with data
async function showDetails() {
  const posts = await getDetails();
  console.log(posts);
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === Localid) {
      console.log(posts[i].id);
      const name = posts[i].name;
      const email = posts[i].email;
      const blood = posts[i].blood;
      const rh = posts[i].rh;
      const address = posts[i].address;
      const img = posts[i].image_url;
      const content = `
        <div>
            <div class="upper">
                <div class="profile-image">
                    <img src = ${img} alt="err"/>
                </div>
                <div class="display-name">
                    <span>${name}</span>
                    <div class="middle">
                    <div class="about">
                        <div class="email">
                        <span class="about-query">
                            Email - 
                        </span>
                        <span class="about-result">
                            ${email}
                        </span>
                    </div>

                    <div class="address">
                        <span class="about-query">Address - </span>
                        <span class="about-result">${address}</span>
                    </div>

                </div>
            </div>
                </div>
                <div class="display-blood">
                    <span class="blood-heading">Blood Group</span>    
                    <span class="blood-type">${blood.concat(
                      " ",
                      rh == "pos" ? "+" : "-"
                    )}
                    </span>
                </div>
                </div>
                
                
            

        <div>
      `;
      document.querySelector("#datadiv").innerHTML = content;
    }
  }
  if (posts) {
    //posts.forEach(element => {
    //console.log(posts[0].id);
    //const html=`${element.id}<br/>`;
    //document.querySelector('#details');//insertAdjacentHTML("beforeend",html)
  }
}

if (token) showDetails();
else {
  alert("Please Login first to Move on !");
  window.location.href = "../../index.html";
}
