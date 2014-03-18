// ***************
// carousel-template.js
// ***************

// simple owlcarousel template http://owlgraphic.com/owlcarousel/
// oh and there's should be
var carouselTemplate = '<div id="owl-example" class="owl-carousel"><% _.each(data, function(item){ %><div class="product"><img class="product-img" src="<%= item.attributes.small_image %>"><h2 class="pname"><%= item.attributes.Produktname %></h2><div class="pexcerpt"><%= item.attributes.short_description %></div><div class="product-bottom"><span class="product-price">&euro; <%= item.attributes.Price %></span><a class="submit-view" id="url" onclick="productUser()" target="_blank" href="http://<%= item.attributes.url %>">Jetzt Kaufen</a></div></div><% }); %></div>';

var slideTemplate = '<div id="owl-crossslider1" class="owl-carousel owl-theme"><% _.each(data, function(item){ %><div class="col-md-2 column productbox"><img src="<%= item.attributes.small_image %>" class="img-responsive"><div class="producttitle"><%= item.attributes.Produktname %></div><div class="product-description"><%= item.attributes.short_description %></div><div class="Price"><div class="pull-right"><a href="http://<%= item.attributes.url %>" class="btn btn-danger" role="button">Zum Produkt</a></div><div class="pricetext">&euro; <%= item.attributes.Price %></div></div></div><% }); %></div>';

var slideTemplate1 = '<div id="owl-crossslider2" class="owl-carousel owl-theme"><% _.each(data, function(item){ %><div class="col-md-2 column productbox"><img src="<%= item.attributes.small_image %>" class="img-responsive"><div class="producttitle"><%= item.attributes.Produktname %></div><div class="product-description"><%= item.attributes.short_description %></div><div class="Price"><div class="pull-right"><a href="http://<%= item.attributes.url %>" class="btn btn-danger" role="button">Zum Produkt</a></div><div class="pricetext">&euro; <%= item.attributes.Price %></div></div></div><% }); %></div>';


