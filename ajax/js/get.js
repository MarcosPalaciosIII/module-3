$(document).ready(() => {
  $(".showPokemon").click(() => {
    // Weavile is 461
    // Sceptile is 254
    // Alakazam is 65
    // Roserade is 407
    // Politoed is 186

    // Gengar
    getPokemon(94);
  });

  $(".pokeSearch").submit(() => {
    // prevent submission from refreshing the page
    event.preventDefault();

    const number = $("#poke-number").val();

    getPokemon(number);
  });

}); // $(document).ready()

function getPokemon (pokemonNumber) {

  $(".pokemonInfo").html(`
    <h2> Loading... </h2>
    `);

  $.ajax({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`,
  })
  .then((apiResults) => {
    console.log("SUCCESS!!");
    console.log(apiResults);

    const pokeDom = $(`
      <h2> ${apiResults.name} </h2>
      <p> ID: ${apiResults.id} </p>
      <img src="${apiResults.sprites.front_default}" />
      `);

      $(".pokemonInfo").html(pokeDom);
  })
  .catch((err) => {
    console.log("ERROR!!");
    console.log(err);
  });
} // getPokemon
