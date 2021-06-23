/*   
  Project by Zua 
  https://github.com/thatziv/webhook 
*/
$(function(){
    $('#btn').click(function(){
        var link = $("https://discordapp.com/api/webhooks/857003705373818881/pyghp_FbU-un5ifm3py9c9ime8ESy5DF00cRYptSaeqysmPksVakrPfQTAt8W2QNTTva").val();
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
