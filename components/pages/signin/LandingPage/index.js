// api endpoint

const url = "https://jsonplaceholder.typicode.com/posts";

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
              <td>Name</td>
              <td>Blood Group</td>
              <td>Contact</td>
              <td>More Details</td>
            </tr>
            <thead>
            <tbody>
            ${posts.map(
                (posts)=>
                `<tr>
                    <td>${posts.id}</td>
                    <td>${posts.id}</td>
                    <td>${posts.id}</td>
                    <td ><a href = "./ProfilePage/index.html">More Details here</a></td>
                </tr>`
                ).join("\n")}
                </tbody>
                </table>`
                document.querySelector('#table').innerHTML=table;
            }
            
}


showDetails();

