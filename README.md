# utilities.js
Convenience Functions!

#Usage:
```javascript
//Initialize the utilities variable
var u = new Utilities();

//Simple get request
u.get('/my/url' function(request) {
  
  //Success!
  var request=request;
  
}, function(error) {
  
  //Error
  console.log(error);
});

//Simple post request
u.post('/my/url/', {"post": "me"})

//Merge objects
var newObj = u.extend({"stuff": null, "moreStuff": 42}, {"stuff": true}); //Returns {"stuff": true, "moreStuff": 42}

//Loop through a querySelector object
var dn = document.querySelectorAll('.deeznuts')

u.each(dn, function(item, element) {
  console.log(item) //returns <div class="deeznuts">Lorem Ipsum</div>
});
