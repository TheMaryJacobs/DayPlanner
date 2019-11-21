$(document).ready(function() {

    
        // display the date in the jumbotron
    const now = moment().format('DD MMM YYYY');
    $('#currentDay').text(now);

    //get the hour of day to set colors for hour element.
    let hourEl = moment().get('hour');
    const description = [];


