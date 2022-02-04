const makeBigger = () => {
   document.getElementById("demo").style.fontSize = "larger";
   document.getElementById("header").style.fontSize = "larger";
   // alert('make bigger!');
};

const makeSmaller = () => {
   document.getElementById("demo").style.fontSize = "smaller";
   document.getElementById("header").style.fontSize = "smaller";
   //alert('make smaller!');
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

