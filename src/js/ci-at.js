<!-- Expand an image thumbnail onto a modal -->

$(window).load(function(){
    $('img').on('click',function()
    {
        var sr=$(this).attr('src');
        var t=$(this).attr('title');
        $('#mimg').attr('src',sr);
        $('#myModalLabel').text(t);
        $('#myModal').modal('show');
    });
});
