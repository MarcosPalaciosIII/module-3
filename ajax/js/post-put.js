$("document").ready(() => {
  $(".postWalle").click(() => {
    postCharacter("WALL-E", "Head Laser", "Waste Allocation Robot");
  });
  $(".postCharacter").submit(() => {
    // prevent submission from refreshing the page
    event.preventDefault();

    const userName = $("#char-name").val();
    const userWeapon = $("#char-weapon").val();
    const userJob = $("#char-job").val();

    postCharacter(userName, userWeapon, userJob);

    //clear the input again
    $(".postCharacter").trigger("reset");

  });

  $(".patchCharacter").submit(() => {
    event.preventDefault();

    const charId = $("#update-id").val();
    const charName = $("#update-name").val();
    const charWeapon = $("#update-weapon").val();
    const charJob = $("#update-job").val();

    patchCharacter(charId, charName, charWeapon, charJob);

    $(".patchCharacter").trigger("reset");
  });

}); // $(document).ready()



function postCharacter (charName, charWeapon, charJob) {
  $.ajax({
    method: "POST",
    url: "https://ih-crud-api.herokuapp.com/characters",
    // data to send through in the FORM BODY
    data: {
      name: charName,
      occupation: charJob,
      weapon: charWeapon,
    }
  })
  .then((apiResults) => {
    console.log("POST SUCCESS!");
    console.log(apiResults);

    const newCharHtml = $(`
      <li> Added <b>${apiResults.name}</b>
          (id ${apiResults.id})
       </li>
      `);

      $(".feedback").append(newCharHtml);
  })
  .catch((err) => {
    console.log("ERROR!!");
    console.log(err);
  });
} // postCharacter


function patchCharacter (myId, myName, myWeapon, myOccupation) {
  $.ajax({
    method: "PATCH",
    url: `https://ih-crud-api.herokuapp.com/characters/${myId}`,
    data: {
      name: myName,
      weapon: myWeapon,
      occupation: myOccupation
    }
  })
  .then((apiResults) => {
    console.log("POST SUCCESS!!");
    console.log(apiResults);

    const updatedHtml = $(`
      <li>
      UPDATED <b>${apiResults.name}</b>
      (id ${apiResults.id})
      </li>
      `);

      $(".feedback").append(updatedHtml);
  })
  .catch((err) => {
    console.log("ERROR!!");
    console.log(err);
  });
} // patchCharacter
