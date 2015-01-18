$(document).ready(function()
{
    $("#submission").find("form").on("submit", function(event)
    {
        event.preventDefault();
    });
    
    jQuery.get("https://api.github.com/orgs/mocsarcade/members", function(response)
    {
        for(var index in response)
        {
            var $member = $("<li>");
            var $member_link = $("<a>");
                $member_link.attr("class", "member");
                $member_link.attr("target", "_blank");
                $member_link.attr("href", response[index].html_url);
            var $member_image = $("<img>");
                $member_image.attr("src", response[index].avatar_url);
                $member_link.append($member_image);
                $member.append($member_link);
            $("#information").find("#members").find("ul").append($member);
        }
    })
    .fail(function(response)
    {
        var $error = $("<li>");
            $error.attr("class", "error");
            $error.html("Whoops! We can't reach GitHub.</li>");
        $("#information").find("#members").find("ul").append($error);
    });
    
    jQuery.get("https://api.github.com/orgs/mocsarcade/repos", function(response)
    {
        for(var index in response)
        {
            var name = response[index].name;
            if(name != "mocsarcade.github.io")
            {
                jQuery.get("https://cdn.rawgit.com/mocsarcade/" + name + "/master/arcade.json", function(response)
                {
                    console.log(response);
                })
                .fail(function(response)
                {
                    //?!
                });
            }
        }
    })
    .fail(function(response)
    {
        //?!
    });
});
