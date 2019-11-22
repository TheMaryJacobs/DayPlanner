

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
    storageData = window.localStorage;

    const userInput1 = document.getElementById("userInput9");
    const userInput2 = document.getElementById("userInput10");
    const userInput3 = document.getElementById("userInput11");
    const userInput4 = document.getElementById("userInput12");
    const userInput5 = document.getElementById("userInput13");
    const userInput6 = document.getElementById("userInput14");
    const userInput7 = document.getElementById("userInput15");
    const userInput8 = document.getElementById("userInput16");
    const userInput9 = document.getElementById("userInput17");
    const inputs = [userInput1,userInput2,userInput3,userInput4,userInput5,userInput6,userInput7,userInput8,userInput9
    ];

    // pullInput();

    //go get all of the buttons to make them perform the save function
    document.querySelectorAll(".saveBtn").forEach(function(save){
        //add event listeners
        save.addEventListener("click", function(){
            // let the input value equal the saved "value" or user input from that field.
        let inputVal = save.getAttribute("value");
            
        // console.log(inputVal);
        saveInput(inputVal);  
        })

    })

    function saveInput(x) {

        let userInput = document.getElementById("userInput" + x).value;
        // console.log(x);
        let inputName = "userInput";
        storageData.setItem(userInput, inputName);
        
        console.log(inputName, userInput);
    }

// I FEEL LIKE I AM VERY CLOSE BUT I AM VERY STUCK. 
// Can not get userInput to repopulate after a refresh. 

function pullInput(){
    
    for(i = 0 ; i < 9 ; i ++){
        let placeHolder = "userInput" + i;
        // console.log(placeHolder);
        if(storageData.getItem(placeHolder) === null)
        {
        continue;
        }
        else{
        inputs[i].innerHTML = storageData.getItem(placeHolder);
        }
    }

    }
    pullInput();

        



















});
