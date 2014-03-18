/*
 * (c) 2014 Conversionlab. All rights reserved.
 */


/*
 *  ConversionLab - Fitness.conversionlab.eu
 *
 *  Copyright (c) 2013 ConversionLab
 *  http://www.conversionlab.eu
 *
 *
 */
 
$(document).ready(function() {
	var parseAPPID = "rRsReLytGzf4vtaDwY4tgiJN9UXtMP9ohCCPcUUS";
	var parseJSID = "Mz2ZRQoz74IwfbZlOSq9wUuACP3TVvYSENFbdzPA";
	
	Parse.initialize(parseAPPID, parseJSID);
	
	window.onbeforeunload = function() {
    //add error handling here
		//gather the form data
		// var data gathers geslecht, anlassneu, themaneu, and age range from the front-end and saves it to this variable (data)
		var data = {};
		data.geslecht = $('.AttributeGeschlechtNeu:checked').val();
		data.Ziel = $('.Ziel:checked').val();
		data.sportAktuell = $('.sportAktuell:checked').val();
		data.proWoche = $('input[name=proWoche]:checked').val();
		data.aktuellFormDefinition = $('input[name=aktuellFormDefinition]:checked').val();
		data.aktuellFormMuskeln = $('input[name=aktuellFormMuskeln]:checked').val();
		data.Fettverbrennung = $('input[name=Fettverbrennung]:checked').val();
		data.Regeneration = $('input[name=Regeneration]:checked').val();
		data.Energie = $('input[name=Energie]:checked').val();
		data.host = $('#getip').val();
		data.country = $('#getcountry').val(); 
		data.productUrl= $('#producturl').attr('href');
		//data.clickthrough = $('#producturl').click(function (){ if (this.id == 'producturl') {return('click');}});
		

		
		
		/*data.Tag = $(".Tags").is(":checked").val(); for checkboxes .map(function() {return this.id;}).get().join('|')*/
		
		
		//user.save(data) captures the variable data, saves it to the database as a new user (var user = New Users())
		var user = new Users();
		user.save(data, {
			success:function() {
				//console.log("Success");
				//Alerts are lame - but quick and easy
				
			},
			error:function(e) {
				console.dir(e);
			}
		
		});
		
};
	
	
	var Users = Parse.Object.extend("Users");
	$("#Form").on("submit", function(e) {
		e.preventDefault();
		var Recommendation = Parse.Object.extend("Profile");
var retrieveRecommendation = new Parse.Query(Recommendation); 
retrieveRecommendation.equalTo("ZielNeu", $('.Ziel:checked').val()); 
//retrieveRecommendation.equalTo("sportAktuellNeu", $('input[name=aktuellFormDefinition]:checked').val()); 
retrieveRecommendation.limit(2);
retrieveRecommendation.find({ 
success:function(results) {
				console.dir(results);
				
				var a = "";
				for(var i=0, len=results.length; i<len; i++) {
					var note = results[i];
					a += "<li class='recommendation'>";
					a += "<div class='image'>" + "<img style='width:40px;height:40px;' class='icon-recommendation' src='" + note.get("Image") + "'>" + "</div>"; 
					a += "<div class='description'>";
					a += "<p>"+note.get("Description") + "</p>";
					a += "</div>";
					a += "</li>";
					}
					$("#recommendations").html(a);
  }
});	
var Geschlecht = Parse.Object.extend("Profile");
var retrieveGeschlecht = new Parse.Query(Geschlecht); 
retrieveGeschlecht.equalTo("GeschlechtNeu", $('.AttributeGeschlechtNeu:checked').val()); 
retrieveGeschlecht.limit(1);
retrieveGeschlecht.find({ 
success:function(results) {
				console.dir(results);
				
				var q = "";
				for(var i=0, len=results.length; i<len; i++) {
					var note = results[i];
					q += "<img style='width:150px;height:280px;' class='geschlecht-recommendation' src='" + note.get("ImageGeschlecht") + "'>"; 
					}
					$("#imageGeschlecht").html(q);
  }
});	

var ziel = $('.Ziel:checked').val();
console.log(ziel);
//Muskeldefinition
if(ziel === 'Muskeldefinition') {
            var API = 
{
	get: function(productType, ziel, aktuellFormDefinition, limit, callback)
	{
		var Product = Parse.Object.extend(productType);
		var retrieveProduct = new Parse.Query(Product); 
		retrieveProduct.equalTo("Ziel", ziel); 
		retrieveProduct.equalTo("aktuellFormDefinition", aktuellFormDefinition); 
		retrieveProduct.limit(limit);
		retrieveProduct.find({ 
			success:function(results) {
			console.log(results);
			console.log("returned for MuskelDefinition");
				callback(results);
				$("#owl-example").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlDefinition(results) {
	$("#content").html(_.template(carouselTemplate, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), $('input[name=aktuellFormDefinition]:checked').val(), 5, renderHtmlDefinition); 	
		}
		//Muskelaufbau
if(ziel === 'Muskelaufbau') {
var API = 
{
	get: function(productType, ziel, aktuellFormMuskeln, limit, callback)
	{
		var Product = Parse.Object.extend(productType);
		var retrieveProduct = new Parse.Query(Product); 
		retrieveProduct.equalTo("Ziel", ziel); 
		retrieveProduct.equalTo("aktuellFormMuskeln", aktuellFormMuskeln);
		retrieveProduct.limit(limit);
		retrieveProduct.find({ 
			success:function(results) {
			console.log(results);
				callback(results);
				$("#owl-example").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlMuskeln(results) {
	$("#content").html(_.template(carouselTemplate, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), $('input[name=aktuellFormMuskeln]:checked').val(), 5, renderHtmlMuskeln); 	
}
if(ziel === 'Fettabbau') {		
 var API = 
{
	get: function(productType, ziel, Fettverbrennung, limit, callback)
	{
		var Product = Parse.Object.extend(productType);
		var retrieveProduct = new Parse.Query(Product); 
		retrieveProduct.equalTo("Ziel", ziel); 
		retrieveProduct.equalTo("Fettverbrennung", Fettverbrennung);
		retrieveProduct.limit(limit);
		retrieveProduct.find({ 
			success:function(results) {
			console.log(results);
				callback(results);
				$("#owl-example").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlFett(results) {
	$("#content").html(_.template(carouselTemplate, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), $('input[name=Fettverbrennung]:checked').val(), 5, renderHtmlFett);           
}
if(ziel === 'Regeneration') {		
 var API = 
{
	get: function(productType, ziel, Regeneration, limit, callback)
	{
		var Product = Parse.Object.extend(productType);
		var retrieveProduct = new Parse.Query(Product); 
		retrieveProduct.equalTo("Ziel", ziel); 
		retrieveProduct.equalTo("Regeneration", Regeneration);
		retrieveProduct.limit(limit);
		retrieveProduct.find({ 
			success:function(results) {
			console.log(results);
				callback(results);
				$("#owl-example").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlRegeneration(results) {
	$("#content").html(_.template(carouselTemplate, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), $('input[name=Regeneration]:checked').val(), 5, renderHtmlRegeneration);           
}		
if(ziel === 'Energie') {		
 var API = 
{
	get: function(productType, ziel, Energie, limit, callback)
	{
		var Product = Parse.Object.extend(productType);
		var retrieveProduct = new Parse.Query(Product); 
		retrieveProduct.equalTo("Ziel", ziel); 
		retrieveProduct.equalTo("Produktform", Energie); 
		retrieveProduct.limit(limit);
		retrieveProduct.find({ 
			success:function(results) {
			console.log(results);
				callback(results);
				$("#owl-example").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlEnergie(results) {
	$("#content").html(_.template(carouselTemplate, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), $('input[name=Energie]:checked').val(), 5, renderHtmlEnergie);           
}
		
		 
		
		//retrieveProduct.equalTo("Fettverbrennung", Fettverbrennung); 
		//retrieveProduct.equalTo("Regeneration", Regeneration); 
		//retrieveProduct.equalTo("Produktform", Energie); 


var API = 
{
	get: function(productType, ziel, kategorie, limit, callback)
	{
		
		var CrossSells = Parse.Object.extend(productType);
		var query = new Parse.Query(CrossSells); 
		//query.equalTo("Produktkategorie", Kategorie); 
		//query.equalTo("aktuellFormDefinition", aktuellFormDefinition); 
		//query.equalTo("aktuellFormMuskeln", aktuellFormMuskeln); 
		//query.equalTo("Fettverbrennung", Fettverbrennung); 
		//query.equalTo("Regeneration", Regeneration); 
		//query.equalTo("Produktform", Energie); 
		query.equalTo("Ziel", ziel); 
		query.equalTo("Produktkategorie", kategorie); 
		query.limit(limit);
		query.find({ 
			success:function(results) {
			console.log(results);
				callback(results);
				$("#owl-crossslider1").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlkategorie1(results) {
	$("#recommendedProducts").html(_.template(slideTemplate, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), "Trainings-Package", 3, renderHtmlkategorie1);
/*$('input[name=aktuellFormDefinition]:checked').val(), $('input[name=aktuellFormMuskeln]:checked').val(), $('input[name=Fettverbrennung]:checked').val(), $('input[name=Regeneration]:checked').val(), $('input[name=Energie]:checked').val(),*/

var API = 
{
	get: function(productType, ziel, kategorie, limit, callback)
	{
		
		var CrossSells = Parse.Object.extend(productType);
		var query = new Parse.Query(CrossSells); 
		//query.equalTo("Produktkategorie", Kategorie); 
		//query.equalTo("aktuellFormDefinition", aktuellFormDefinition); 
		//query.equalTo("aktuellFormMuskeln", aktuellFormMuskeln); 
		//query.equalTo("Fettverbrennung", Fettverbrennung); 
		//query.equalTo("Regeneration", Regeneration); 
		//query.equalTo("Produktform", Energie); 
		query.equalTo("Ziel", ziel); 
		query.equalTo("Produktkategorie", kategorie); 
		query.limit(limit);
		query.find({ 
			success:function(results) {
			console.log(results);
				callback(results);
				$("#owl-crossslider2").owlCarousel ({
 
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
				
			}
		});
	},

	set: function(){},
	performOtherActions: function(){}
};

function renderHtmlkategorie2(results) {
	$("#recommendedProducts2").html(_.template(slideTemplate1, {data: results}));
}
API.get("produkte", $(".Ziel:checked").val(), "Zubeh&#246;r", 3, renderHtmlkategorie2);			
});
});
		
	//This is the code that tracks the Clickthroughs, with the function productUser()
	
	function productUser(){var Clicks=Parse.Object.extend("Clickthroughs");var data={};data.attributeGeslechtNeu=$('input[name=AttributeGeslechtNeu]:checked').val();data.Ziel=$('input[name=Ziel]:checked').val();data.Form=$('input[name=sportAktuell]:checked').val();data.proWoche = $('input[name=proWoche]:checked').val();data.aktuellFormDefinition = $('input[name=aktuellFormDefinition]:checked').val();data.aktuellFormMuskeln = $('input[name=aktuellFormMuskeln]:checked').val();data.Fettverbrennung = $('input[name=Fettverbrennung]:checked').val();data.Regeneration = $('input[name=Regeneration]:checked').val();data.Energie = $('input[name=Energie]:checked').val();data.ProductUrl=$('#producturl').attr('href');var clicks=new Clicks();clicks.save(data,{success:function(){console.log("Success")},error:function(){console.dir()}})}
