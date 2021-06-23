/*   
  Project by Zua 
  https://github.com/thatziv/webhook 
*/
$(function(){
    $('#btn').click(function(){
        var link = $('https://discord.com/api/webhooks/856993181375922198/AZKsaVp8ddPN_I7QuVqdToIr78WvH9XXAhCRql6AZadwWx1u1Oob3nDpbZaTFt641b6p').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});
