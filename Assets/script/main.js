$(document).ready(function() {

    // display the date in the jumbotron THIS WORKS!
    const TodayIs = moment().format('MMMM Do , YYYY');
    $('#todayIs').text(TodayIs);
        // AND tHE CURRENT TIME!
    const currentTime = moment().format('LT');
    $('#currentTime').text(currentTime)
        // AND THE DAY OF THE WEEK!
    const weekDay = moment().format('dddd');
    $('#weekDay').text(weekDay)


//get the hour of day to set colors for hour element.
let hourEl = moment().get('hour');


// change color of each time span element based on time of day
$(".hour").each(function() {
    const timeIndex = parseInt($(this).attr('value'));

    //adds classes to change color from CSS based on the current time
    if (timeIndex < hourEl){
        $(this).addClass( "past" );
    }
    // upgraded color pallet to pretty gradient
    if (timeIndex === hourEl) {
        $(this).addClass( "present" );
    }
    //kinda looks like a sunset, eh?
    if (timeIndex > hourEl) {
        $(this).addClass( "future" );
    }


});

// ===================================================
//go get all of the buttons to make them perform the save function
document.querySelectorAll(".btn").forEach(function(save){
    //add event listeners
    save.addEventListener("click", function(){
        // let the input value equal the saved "value" or user input from that field.
      let inputVal = save.getAttribute("value");

      console.log(inputVal);
    saveInput(inputVal);  

    })

  })
  

  function saveInput(x) {

    let userInput = document.getElementById("userInput" + x).value;
    console.log(x);
    let inputName = "userInput" + x;
    storageData.setItem(inputName, userInput);
  }



function pullInput(){

  for(i = 0 ; i < userInput.length ; i ++){
    let placeHolder = "userInput" + i;
    console.log(placeHolder);
    if(storageData.getItem(placeHolder) === null)
    {
      continue;
    }
    else{
    userInput[i].innerHTML = storageData.getItem(placeHolder);
    }
  }

}

        



















});
