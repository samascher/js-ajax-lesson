  // Get all cats and spit out the JSON collection in the console
  $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
    });

  // Now, get a single cat and spit out the JSON in the console


  // Use the more generic $.ajax to do the same request
  

  // Modify that cat by changing its name
  // the property `type:` is an alias for method.
  // By default, your `type` is GET, but we need to use
  // a different one here...remember which one?


  // Add a new cat to the list with name and note
  var cat = {
    // name here

    //note here

  };

  // Now make the AJAX request. What verb adds new data
  // to our endpoint?

  // Remember JSON is serialized, so you will need to
  // "stringify" your cat object...Google to the rescue!

