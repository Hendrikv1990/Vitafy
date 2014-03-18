$("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  $(document).ready(function() {
    $("input[name$='Ziel']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#block" + test).show();
    });
});
  jQuery(function($){

    $('#Ausdauer').change(function(){ // when checkbox check status changed

        if($(this).prop("checked",true))                // if it is checked
            $('.AusdauerproWoche').removeAttr('disabled'); // remove the disabled attribute from submit button
        else                                     // otherwise
            $('.AusdauerproWoche').attr('disabled', 'disabled'); // makesure a disabled attribute is there
    });
});
/*
jQuery(function($){

    $('#Kraft').change(function(){ // when checkbox check status changed

        if($(this).prop("checked",true))                // if it is checked
            $('.KraftproWoche').removeAttr('disabled'); // remove the disabled attribute from submit button
        else                                      // otherwise
            $('.KraftproWoche').attr('disabled', 'disabled'); // makesure a disabled attribute is there
    });
});

jQuery(function($){

    $('#Fitness').change(function(){ // when checkbox check status changed

        if($(this).prop("checked",true))                  // if it is checked
            $('.FitnessproWoche').removeAttr('disabled'); // remove the disabled attribute from submit button
        else                                      // otherwise
            $('.FitnessproWoche').attr('disabled', 'disabled'); // makesure a disabled attribute is there
    });
});*/