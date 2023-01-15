
let myInterval = setInterval(()=>{
  counter();
},1000);

function counter(){

let timeToGo = new Date("Feb28, 2023 15:30:25").getTime();

  let now = new Date().getTime();

  let distance = timeToGo - now;

  let days = Math.floor(distance/(24 * 60 * 60 * 1000));

  let hours = Math.floor((distance % (24 * 60 * 1000)) /(60 * 60 * 1000));

  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));

  let second = Math.floor((distance % (60 * 1000)) / 1000);

  // to put all of above variables in an array to work with map function to get 2 digit format

let number = [days, hours, minute, second];

let newArray = number.map((n)=>{

  n = n + "";
  if(n.length < 2){
    n = "0" + n;
  }
  return n;
});


  $(".d").html(newArray[0]);
  $(".h").html(newArray[1]);
  $(".m").html(newArray[2]);
  $(".s").html(newArray[3]);




distance < 0 ? clearInterval(myInterval) : null;

}
