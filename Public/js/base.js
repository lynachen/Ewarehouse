toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": false,
    "preventDuplicates": false,
    "positionClass": "toast-top-full-width",
    "onclick": null,
    "showDuration": "400",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
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