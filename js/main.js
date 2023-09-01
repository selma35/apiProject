var row = document.getElementById("row")
fetch('https://dummyjson.com/users')
.then(r => r.json())
.then((r)=>{
    var users = r.users;
    users.forEach((user)=>{
        row.innerHTML += 
        `
        <div class="card" style="width: 18rem;">
  <img src="${user.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.firstName } ${user.lastName} </h5>
    <p class="card-text">${user.age}</p>
    <a href="phoneto:${user.phone}" class="btn btn-Primary" pt-1>sent phone</a>
    <a href="mail to:${user.email}" class="btn btn-Primary">sent email</a>
    </div>
   </div>
   
        `
    });
});
