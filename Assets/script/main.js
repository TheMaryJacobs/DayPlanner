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
    const description = [];

    // change color of each time span element based on time of day
    $(".hour").each(function() {
        const timeIndex = parseInt($(this).attr('value'));

        //adds classes to change color from CSS based on the current time
        if (timeIndex < hourEl){
            $(this).addClass( "past" );
        }

        if (timeIndex === hourEl) {
            $(this).addClass( "present" );
        }
    
        if (timeIndex > hourEl) {
            $(this).addClass( "future" );
        }
    });

    // //Event listener for all buttons

    $('.saveBtn').click(function(event) {
        const valueAttr = $("data-hour").val();
        const description = JSON.parse(localStorage.setItem("#description", valueAttr));
        console.log('clicked', $(this.text()));

        alert("Saved!");
    });


    function copyText() {
        const copied = $("#description");

        copied.select();
        document.execCommand("copy");

        return copied;
    }

    $(".saveBtn").on("click", function() {

        $('textarea[name*=' + id +'').select();
        document.execCommand("copy");
        $("textarea").select();

        document.execCommand('copy');

        localStorage.setItem("description", contents);
        console.log(contents);
        });
});