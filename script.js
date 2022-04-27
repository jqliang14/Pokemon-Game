$(".select").click(function() {
    
    // Declare a variable that will store the user's input
    let userInput = $('.input').val();

    // Use string concatenation to include the search term
    var url = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    

    // Use console.log to test your variables' contents
    console.log(userInput);
    
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(pokeData) {
            console.log(pokeData);

            // Ex: Display the Pokemon's name
            $(".name").html(pokeData.name);

            // Display the Pokemon's weight
            $(".weight").html(pokeData.weight);

            // Display the Pokemon's height
            $(".height").html(pokeData.height);

            // Display the Pokemon's type
            $(".type").html(pokeData.types[0].type.name);

            // Display the Pokemon's image
            $(".pic").html(`<img src="${pokeData.sprites.front_default}">`);

        });
});