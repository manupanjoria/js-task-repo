const users = [
    {
        firstName: "Oliver",
        lastName: "Jake",
        isActive: true,
        role: "student",
        registeredAt: 1
    },
    {
        firstName: "Connor",
        lastName: "Liam",
        isActive: true,
        role: "student",
        registeredAt: 2
    },
    {
        firstName: "Charlie",
        lastName: "",
        isActive: true,
        role: "admin",
        registeredAt: 3
    },
    {
        firstName: "Thomas",
        lastName: "",
        isActive: true,
        role: "student",
        registeredAt: 4
    },
    {
        firstName: "George",
        lastName: "Reece",
        isActive: true,
        role: "superAdmin",
        registeredAt: 5
    },
    {
        firstName: "Oscar",
        lastName: "Rhys",
        isActive: false,
        role: "superAdmin",
        registeredAt: 7
    },
    {
        firstName: "William",
        lastName: "Damian",
        isActive: false,
        role: "student",
        registeredAt: 6
    }
];

// 1)__________________________________________

function filterDeactivatedUsers(){
let result = users.filter((user)=>{
    if(!user.isActive){
        return user;
    }

})
console.log(result);
}

// filterDeactivatedUsers();

// 2)__________________________________________

let firstandlastname =()=>{
    let result = users.map((user)=>{
        if(user.lastName ===""){
            return user.firstName;
        }
        else{
            return user.firstName + " " + user.lastName;
        }
    })
    console.log(result);

}
// firstandlastname();


// 4)______________________________________________

let array = [];
for(let key in users){
    array.push(users[key])
    // console.log(arr);
}


function sortingByDate(sortOrder){
    if(sortOrder == 'asc'){
        array.sort((a,b)=>{
            return a.registeredAt - b.registeredAt;
        })
        console.log(array);
    }
    else if(sortOrder == 'desc'){
        array.sort((a,b)=>{
            return b.registeredAt - a.registeredAt;
        })
        console.log(array);
    }
    else {
        console.log("not a proper input");
    }
}

// sortingByDate('asc');


// 3) ---------------------------------------------------------

function getCountOfUsersAfterGivenDate(myrole,registerDate){ 
    let cnt = 0;
    let myfilter = users.filter((e)=>{
        if(e.role === myrole && (e.registeredAt > registerDate)){
            cnt++;
        }
    })
    console.log(cnt);  
}

getCountOfUsersAfterGivenDate("student",3);

//__________________________________________

// function getUsers(){
//   return new Promise((resolve)=>{
//     let data = JSON.stringify(require("./task.json"))
//     let myData = JSON.parse(data)
//     resolve(myData);
//   })
// }

// getUsers().then((user)=>[
//     console.log(user)
// ]).catch((error)=>{
//     console.log("can not fetch", error);
// })

//______________________________________________________

//  function getUsers(){
//     return new Promise((resolve, reject)=>{
//         resolve(filterDeactivatedUsers());
//         reject(error);

//     })
//  }

// getUsers().then((myUser)=>{
//     console.log(myUser);
// }).catch((error)=>{
//     console.log("can not fetch",error);
// })


//_____________________________________________________________

// function getUsers(){
//     return new Promise((resolve, reject)=>{
//         resolve(firstandlastname());
//         reject(error);

//     })
//  }

//  getUsers().then((myUser)=>{
//     console.log(myUser);
// }).catch((error)=>{
//     console.log("can not fetch",error);
// })

//_________________________________________________

function getUsers(){
    return new Promise((resolve, reject)=>{
        resolve(getCountOfUsersAfterGivenDate());
        reject(error);
    })
}
getUsers().then((myUser)=>{
    console.log(myUser);
}).catch((error)=>{
    console.log("can not fetch",error);
})
