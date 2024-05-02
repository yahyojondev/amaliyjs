// function plasticCard(str){
//    let [firstSection , , , lastSection] = str.split(" ")
//    return `${firstSection } **** **** ${lastSection}`   
// }

// console.log(plasticCard("9600 1234 4564 8546"));
// console.log(plasticCard("8600 3256 4895 1100"));

// function tgName(str){
//     let [firstName, lastName] = str.split(" ")
//     return firstName[0] + lastName[0]
// }

// console.log(tgName("Yahyo Nabijonv"));

// function add(a,b){
//    return `${a} + ${b} = ${a + b}`
// }
// console.log(add(5,9) );
// console.log(add(7,1) );

// function foo(a,b){
// //     let num = "";

// //    for(i = 1; i <= b; i++){
// //     console.log(a);
// //     num += a;
// // }
// //    return num

// return +a.toString().repeat(b)
// }
// console.log( foo(5,3));
// console.log( foo(7,2));

// function isMarried({name,married}){
//    return `${name} ${married ? "oilali" : "yolgiz"}`
// }

// console.log(isMarried({name : "John", married : true}));
// console.log(isMarried({name : "Laylo", married : false}));


// const mainTime = document.querySelector(".main__time")
// const main__day = document.querySelector(".main__day")
// const main__date = document.querySelector(".main__date")
// function time(){
//   let date = new Date()
//   let Hours = (date.getHours());
//   let Minutes = (date.getMinutes().toString().padStart(2,0));
//   let seconds = (date.getSeconds().toString().padStart(2,0));
//   mainTime.innerHTML = `${Hours}:${Minutes}:${seconds}`
// }
// time()
// function day(){
//         let date = new Date()
//   let day = (date.getDay());
//   let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
//   main__day.innerHTML = days[day]
  
//   console.log(day);
// }
// day()
// function month(){
//     let date = new Date()
//     let day = (date.getDay())
//     let month = (date.getMonth())
//     let year = (date.getFullYear())
//     let months = ["Yanvar","fevral","mart","aprel","may"]
//     main__date.innerHTML = months[month]

// }
// setInterval(() => {
//     time()
//     day()
//     month()
    
// }, 1000);

const API_URL = "https://jsonplaceholder.typicode.com/comments"
const postWrapper = document.querySelector(".post__wrapper")
async function fetchDate(api){
    let data = await fetch(api)
    data 
    .json()
    .then(res=>creatCard(res))
    .catch(err=> console.log(err))
}

fetchDate(API_URL)

function createCard(data){
    data.forEach((post)=>{
        let card = document.createElement("div")
        card.className = "col-3"
        card.innerHTML = `
         <div class="card p-3">
                <h2>${post.name}</h2>
                <p>${post.email}</p>
                <p>${post.body}</p>
            </div>
        `
        postWrapper.appendChild(card)
    })
}

