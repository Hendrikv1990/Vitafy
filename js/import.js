$.ajax({
    type: "GET",
    url: "/products.json",
    dataType: "JSON",
    success: function(data) {
		//alert(productJson.items.item[1].productid);
console.dir(data);
		$(function(){
   $.each(data, function(i, item) {
Parse.initialize("rRsReLytGzf4vtaDwY4tgiJN9UXtMP9ohCCPcUUS", "Mz2ZRQoz74IwfbZlOSq9wUuACP3TVvYSENFbdzPA");
var Product = Parse.Object.extend("Products");
var Productquery = new Parse.Query(Product);
// Here I get all the products and check whether the id in the xml file matches with the id in the database. 
Productquery.equalTo("productId", item.productid);

Productquery.find({
//This will then return all the products that are not in the database
  success: function(results) {
	  console.dir(results);
    // Do something with the returned Parse.Object values
	if (results.length == 0) {
var Product = Parse.Object.extend("Products");
var Product = new Product();
Product.set("productId", item.productid);
Product.set("productName", item.title);
Product.set("productDescription", item.content);
Product.set("productUrl", item.link);
Product.save(null, {
  success: function(Product) {
    // Execute any logic that should take place after the object is saved.
	console.dir(Product);
    alert('New object created with objectId: ' + Product.id);
  }//success
});//save
	} //if
	else (results.length >= 1); {
		var Product = Parse.Object.extend("Products");
		var Productquery = new Parse.Query(Product);
		// Here I get all the productdata and check whether the content was changed - i.e. let's say the content is different in the xml
		// compared to the description in the database. 
		Productquery.equalTo("productDescription", item.content);
		Productquery.find({
		success: function(results) {
			console.dir(results);
			// if results.length = 0, that means that it didn't find a match for this product id between the xml content and the
			// productDescription. So if there is no match, we need to update the product with the new content.
			if (results.length == 0) {
				var Product = Parse.Object.extend("Products");
				var query = new Parse.Query(Product);
				query.get(item.productid, {	
					success: function(Product) {
   				Product.set("productDescription", item.content);
				Product.save();
				console.dir(Product);
				alert('Product updated:' + Product.id);
				console.log("Product Updated");
  }
				
					});
				
				
				
			}
			// if results.length = 1, that means that we've found a match (the content and the description is the same for this id).
			// and we will do nothing
			else (results.length >= 1); {
				console.log("this product exists already");
				window.alert("No new products added");
			}
		}
		});
	};
  }//results
  });//find
   });//.each
//function $
});
  		
    }
	});