// api endpoint

const url = "http://localhost:8080/users";

//Extracting data from Api
const getDetails = async ()=>{
    const response = await fetch(url);
    const posts=await response.json();
    return posts;
};
//Working with data
async function showDetails(){
    const posts= await getDetails();
    //console.log(posts)
    if(posts){
        //posts.forEach(element => {
            console.log(posts[0].id);
            //const html=`${element.id}<br/>`;
            //document.querySelector('#details');//insertAdjacentHTML("beforeend",html)
            const table=
            `<table class="table">
            <thead>
            <tr>
              <td class="name">Name</td>
              <td>Blood Group</td>
              <td class="contact">Contact</td>
              <td>More Details</td>
            </tr>
            <thead>
            <tbody>
            ${posts.map(
                (posts)=>
                `<tr>
                    <td class="name-output">${posts.name}</td>
                    <td>${posts.blood} ${posts.rh}</td>
                    <td>${posts.email}</td>
                    <td ><a href = "./ProfilePage/index.html">More Details here</a></td>
                </tr>`
                ).join("\n")}
                </tbody>
                </table>`
                document.querySelector('#table').innerHTML=table;
            }
            
}


showDetails();

