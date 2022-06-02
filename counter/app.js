// sest init count
let count = 0;
// select values and buttons
const value = document.querySelector('#value'); //selecting single element which has id= "value"
const btns = document.querySelectorAll(".btn"); // selecting all the buttons which has class='btn increase' or class='btn decrease' or class='btn reset'

// console.log(btns);
btns.forEach(function (btn) { //reading all button values
    // console.log(item);
btn.addEventListener('click', function(e){ // listeing to event or 'click' on each button
    const styles = e.currentTarget.classList; //shows all values in the current button
    console.log(styles);// see the console for the values
    if (styles.contains('decrease')) {
        count--;
    }
   else if (styles.contains('increase'))
    {
        count++;
    }
    else if (styles.contains('reset')){
        count = 0;
    }
    value.textContent = count;
})
});