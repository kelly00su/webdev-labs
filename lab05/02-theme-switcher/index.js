/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultmode = () => {
   document.getElementsByTagName("body").style = "default";
   alert('default');
};

const ocean = () => {
   document.getElementsByTagName("body").className = "ocean";
   alert('ocean');
};

const desert = () => {
   document.getElementsByTagName("body").style = "desert";
   // alert('desert');
};

const highcontrast = () => {
   document.getElementsByTagName("body").style = "high-contrast";
   alert('highcontast');
};


document.querySelector("#default").addEventListener('click', defaultmode);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#high-contrast").addEventListener('click', highcontrast);