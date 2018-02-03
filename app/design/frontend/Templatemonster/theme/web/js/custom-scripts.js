
define([
    'jquery',
    'mage/mage',
    'mage/ie-class-fixer'
], function ($) {

//===================================================================

    $(document).ready(function(){
        $(".account-links-menu_btn").click(function(){
            $(".account-links-menu_wrapper").addClass('active');
            $(".account-links-menu").addClass('active');
        });
    });
    $(document).on("click", function(event){
        var $trigger = $(".account-links-menu_btn");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".account-links-menu_wrapper").removeClass('active');
            $(".account-links-menu").removeClass('active');
        }
    });


    /* Footer accordion */

    var flag = true;
    function footer_accordion(){
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        elementTitle = '.footer-col-wrapper .footer-col h4';
        elementHide =  '.footer-col-wrapper .footer-col .footer-col-content';
        elementAdd = 'opened';

        if (width > 767) {
            if (!flag) {
                flag = true;
                $(elementTitle).unbind("click");
                $(elementHide).removeAttr('style');
            }
        } else {
            if (flag) {
                flag = false;
                $(elementTitle).on("click", function(){
                    if ($(this).attr('class') == 'opened') {
                        $(this).removeClass('opened');
                        $(this).next(elementHide).slideToggle();
                    }
                    else {
                        $(this).addClass('opened');
                        $(this).next(elementHide).slideToggle();
                    }
                    return false;
                });
            }
        }
    }

    $(window).on("load resize", function () {
        clearTimeout(this.id);
        this.id = setTimeout(footer_accordion, 500);
    });


    /* Footer accordion END */


//===================================================================
    if($("#product_addtocart_form input[type='checkbox']").length > 0){

        $("#product_addtocart_form input[type='checkbox']").on("click", function(event){
            
            
            
            if($(this).is(":checked"))
                $(this).parents('.field').nextAll('.field').show();
            else 
                $(this).parents('.field').nextAll('.field').hide();

        });

        var checkboxField = $("#product_addtocart_form input[type='checkbox']");
        //$("#product_addtocart_form input[type='checkbox']").trigger("click");

        checkboxField.css({"visibility":'hidden',"position":"absolute"});       
        checkboxField.parents('.field').find(".label").hide();
        checkboxField.next('.admin__field-label').addClass('action primary').show();
        checkboxField.parents('.field').show();
        
        $("#product_addtocart_form input[type='checkbox']").parents('.field').prevAll('.field').show();

    }else{
        $('#product-options-wrapper .field').show();
    }

});


