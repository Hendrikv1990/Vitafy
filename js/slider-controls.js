$(document).ready(function() {
                $('#slider').rhinoslider({
                    controlsPlayPause: false,
                    showControls: 'always',
                    showBullets: 'always',
                    controlsMousewheel: false,
                    prevText: 'Zurück',
                    nextText:'Weiter',
		    slidePrevDirection: 'toRight',
		slideNextDirection: 'toLeft'
                });

<!-- this shows what will happen after you've clicked prev, next -->
                $(".rhino-prev").hide();
                $('.rhino-next').after('<a class="form-submit" href="javascript:void(0);">Weiter</a>');
                $(".rhino-next").hide();




               





            });
<!-- this is what should happen if you haven't filled in the form. It gives an error after each step, it's not working now, but it starts at var step1 validation, and #fname is the ID of a question. So it just says, oh you havent filled in question 1 with ID lname, then give an error -->
            $('.form-submit').live("click",function(){

                $('.form-error').html("");

                var current_tab = $('#slider').find('.rhino-active').attr("id");

                switch(current_tab){
                    case 'rhino-item0':
                        step1_validation();
                        break;
                    case 'rhino-item1':
                        step2_validation();
                        break;
					case 'rhino-item2':
                        step3_validation();
                        break;
                    case 'rhino-item3':
                        step4_validation();
                        break;
					case 'rhino-item4':
                        step5_validation();
                        break;
                }
            });

            var step1_validation = function(){

                var err = 0;

                if($('#fname').val() == ''){
                    $('#fname').parent().parent().find('.form-error').html("First Name is Required");
                    err++;
                }
                if($('#lname').val() == ''){
                    $('#lname').parent().parent().find('.form-error').html("Last Name is Required");
                    err++;
                }
                if($('#gender').val() == '0'){
                    $('#gender').parent().parent().find('.form-error').html("Please Select Gender");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }


            };

            var step2_validation = function(){
                var err = 0;

                if($('#username').val() == ''){
                    $('#username').parent().parent().find('.form-error').html("Username is Required");
                    err++;
                }
                if($('#pass').val() == ''){
                    $('#pass').parent().parent().find('.form-error').html("Password is Required");
                    err++;
                }
                if($('#cpass').val() == ''){
                    $('#cpass').parent().parent().find('.form-error').html("confirm Password is Required");
                    err++;
                }
                
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			 var step3_validation = function(){
                var err = 0;

                if($('#username').val() == ''){
                    $('#username').parent().parent().find('.form-error').html("Username is Required");
                    err++;
                }
                if($('#pass').val() == ''){
                    $('#pass').parent().parent().find('.form-error').html("Password is Required");
                    err++;
                }
                if($('#cpass').val() == ''){
                    $('#cpass').parent().parent().find('.form-error').html("confirm Password is Required");
                    err++;
                }
                
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			var step4_validation = function(){
                var err = 0;

                if($('#username').val() == ''){
                    $('#username').parent().parent().find('.form-error').html("Username is Required");
                    err++;
                }
                if($('#pass').val() == ''){
                    $('#pass').parent().parent().find('.form-error').html("Password is Required");
                    err++;
                }
                if($('#cpass').val() == ''){
                    $('#cpass').parent().parent().find('.form-error').html("confirm Password is Required");
                    err++;
                }
                
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };

            var step5_validation = function(){
                var err = 0;

                if($('#email').val() == ''){
                    $('#email').parent().parent().find('.form-error').html("Email is Required");
                    err++;
                }
				//quite important .submit -> it is the selector which gets the Parse Script going
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
					$('#Form').submit();
                    
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };