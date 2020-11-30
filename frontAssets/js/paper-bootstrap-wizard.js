/*! =========================================================
 *
 Paper Bootstrap Wizard - V1.0.1
*
 ========================================================= */

// Paper Bootstrap Wizard Functions

searchVisible = 0;
transparent = true;

$(document).ready(function () {
    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();
    $.validator.addMethod('regex', function (value, element, param) {
            return this.optional(element) ||
                value.match(typeof param == 'string' ? new RegExp(param) : param);
        },
        'Please enter a value in the correct format.');
    jQuery.validator.addMethod("checkUniquePhone", function (value, element) {
        var duplicate = false;
        
        $.ajax({
            type: "get",
            async: false,
            url: base_url + "/checkUniquePhone/" + $("#phone").val(),
            success: function (result) {
                //console.log(result);
                if (result) {
                    duplicate = false;
                } else {
                    duplicate = true;
                }
            }
        });
        return duplicate;
    }, "This phone number already has an account");
    jQuery.validator.addMethod("checkUniqueRegNo", function (value, element) {
        var duplicate = false;
        
        $.ajax({
            type: "get",
            async: false,
            url: base_url + "/checkUniqueRegNo/" + $("#regNo").val(),
            success: function (result) {
                //console.log(result);
                if (result) {
                    duplicate = false;
                } else {
                    duplicate = true;
                }
            }
        });
        return duplicate;
    }, "This registration no already has an account");



    // Code for the Validator
    var $validator = $('.wizard-card form').validate({

        rules: {
            firstName: {
                required: true,
                minlength: 3
            },
            lastName: {
                required: true,
                minlength: 3
            },
            propic: {
                required: true
            },
            phone: {
                required: true,
                digits: "Please enter only numbers",
                regex: "^(?:\\88|01)?\\d{11}\\r?$",
                checkUniquePhone: true
            },
            email: {
                required: true
            },
            password : {
                required: true,
                minlength : 5
            },
            confirm_password : {
                required: true,
                minlength : 5,
                equalTo : "#password"
            },
            session: {
                required: true
            },
            faculty: {
                required: true
            },
            grad_year: {
                required: true
            },
            hall: {
                required: true
            },
            regNo: {
                required: true,
                checkUniqueRegNo: true
            },
            profession:{
                required: true
            }
        },
        messages: {
            propic: {
                required: "This field is required."
            }
        }
    });

    //console.log($('.wizard-card form').valid());
    // Wizard Initialization
    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
            var $valid = $('.wizard-card form').valid();
            if (!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },

        onInit: function (tab, navigation, index) {

            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            $width = (100 / $total) - 1;

            navigation.find('li').css('width', $width + '%');

        },

        onTabClick: function (tab, navigation, index) {
            return false;
            /*var $valid = $('.wizard-card form').valid();
            console.log("triggered" + " Valid " + $valid)
            if (!$valid) {
                return false;
            }*/


        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            console.log("onTabShow");
            var $wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            //update progress
            var move_distance = 100 / $total;
            move_distance = move_distance * (index) + move_distance / 2;

            $wizard.find($('.progress-bar')).css({width: move_distance + '%'});
            //e.relatedTarget // previous tab

            $wizard.find($('.wizard-card .nav-pills li.active a .icon-circle')).addClass('checked');

        }
    });


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {
        readURL(this);
    });

});


//Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46172202-1', 'auto');
ga('send', 'pageview');
