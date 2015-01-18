$(document).ready(function()
{
    /*$("form").on("submit", function(event)
    {
        event.preventDefault();
        
        var repo = $(this).find("input").val();
        repo = repo.replace("github.com", "cdn.rawgit.com") + "/master/package.json"
        
        jQuery.get(repo, function(data)
        {
            console.log(repo, data);
        })
    });*/
    
    jQuery.get("https://api.github.com/orgs/mocsarcade/members", function(members)
    {
        for(var index in members)
        {
            var $member = $("<li>");
            var $member_link = $("<a>");
                $member_link.attr("class", "member");
                $member_link.attr("target", "_blank");
                $member_link.attr("href", members[index].html_url);
            var $member_image = $("<img>");
                $member_image.attr("src", members[index].avatar_url);
                $member_link.append($member_image);
                $member.append($member_link);
            $("#members").find("ul").append($member);
        }
    })
});
