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
    
    jQuery.get("https://api.github.com/orgs/bellhops/members", function(members)
    {
        for(var index in members)
        {
            var $member = $("<a>");
                $member.attr("target", "_blank");
                $member.attr("href", members[index].html_url);
            var $member_image = $("<img>");
                $member_image.attr("src", members[index].avatar_url);
                $member.append($member_image)
                $member.attr("class", "member");
            $("#members").append($member);
        }
    })
});
