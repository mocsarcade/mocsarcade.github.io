var firebase = new Firebase("https://mocsarcade.firebaseio.com/games");

$(document).ready(function()
{
    $("form").on("submit", function(event)
    {
        event.preventDefault();
        
        var repo = $(this).find("input").val();
        repo = repo.replace("github.com", "cdn.rawgit.com") + "/master/package.json"
        
        console.log(repo);
        jQuery.get(repo, function(data)
        {
            console.log(data);
        })
    });
    
    $.localScroll();
});
