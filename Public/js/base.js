
// -----------------------------------------------------------top---------------------------------------------
$(function(){
    $(".top-right li").hover(function(){
        $(this).find('.one-level').addClass('active');
        $(this).find('.one-level').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).find('.two-level').show();
    },function(){
        $(this).find('.one-level').removeClass('active');
        $(this).find('.one-level').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        $(this).find('.two-level').hide();      
    });
})