var firebase = new Firebase("https://mocsarcade.firebaseio.com/games");

$(document).ready(function()
{
    $("form").on("submit", function(event)
    {
        event.preventDefault();
        
        var repo = $(this).find("input").val();
        
        firebase.push({
            repository: repo
        });
    });
});
