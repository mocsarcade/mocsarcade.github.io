$(document).ready(function()
{
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
            $("#read").find("#members").find("ul").append($member);
        }
    })
    .fail(function(response)
    {
        var $error = $("<li>");
            $error.attr("class", "error");
            $error.html("Whoops! We can't reach GitHub.</li>");
        $("#read").find("#members").find("ul").append($error);
    });
    
    //jQuery.get("https://api.github.com/orgs/mocsarcade/repos", function(response)
    //{
        //for(var index in response)
        //{
        //    var name = response[index].name;
        //    if(name != "mocsarcade.github.io")
        //    {
                //var rawgit = "https://rawgit.com/mocsarcade/" + "nothingness" + "/master/arcade.json";
                //console.log(rawgit);
                //jQuery.get(rawgit, function(response)
                //{
                    //console.log(response);
                //})
            //}
        //}
    //})
    //.fail(function(response)
    //{
    //    console.log("uh oh")
    //});
});
