var parseAPPID = "MK3frhekdyz2yrbFf0XKItSEwT8KqhxwdVR7oSzl";var parseJSID = "FVmg0jtvEXlx2tWTQf4J28erS2V90JZPli8Aqgl5";Parse.initialize(parseAPPID,parseJSID);function productUser(){var Clicks=Parse.Object.extend("Clickthroughs");var data={};data.attributeGeslechtNeu=$('input[name=AttributeGeslechtNeu]:checked').val();data.Ziel=$('input[name=Ziel]:checked').val();data.Form=$('input[name=sportAktuell]:checked').val();data.ProductUrl=$('#producturl').attr('href');var clicks=new Clicks();clicks.save(data,{success:function(){console.log("Success")},error:function(){console.dir()}})}