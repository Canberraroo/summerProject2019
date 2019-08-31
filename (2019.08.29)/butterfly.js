//click start. goes through code once. click start again. goes through code twice. click start again. goes through code three times.
$(document).ready(function () {
  //function start() {

  var pic = Math.floor(Math.random() * 5)
  console.log(pic)

  var lives = 3;
  const TheSentance= lives;
  $("#life").html(TheSentance);
  console.log("life")

if (pic == 0) {
  $("#sun").click( () => {
    console.log("sun")
    alert("You Found The Butterfly!")
  });

  $("#cloud").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("cloud")
    alert("The Butterfly Isn't There.")
  });

  $("#tree").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("tree")
    alert("The Butterfly Isn't There.")
  });

  $("#grass").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("grass")
    alert("The Butterfly Isn't There.")
  });
  $("#monster").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("monster")
    alert("The Butterfly Isn't There.")
  });
}



if (pic == 1) {
  $("#cloud").click( () => {
    console.log("cloud")
    alert("You Found The Butterfly!")
  });

  $("#sun").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("sun")
    alert("The Butterfly Isn't There.")
  });

  $("#tree").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("tree")
    alert("The Butterfly Isn't There.")
  });

  $("#grass").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("grass")
    alert("The Butterfly Isn't There.")
  });
  $("#monster").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("monster")
    alert("The Butterfly Isn't There.")
  });
  const TheSentance= lives;
  $("#life").html(TheSentance);
}



if (pic == 2) {
  $("#tree").click( () => {
    console.log("tree")
    alert("You Found The Butterfly!")
  });
  $("#sun").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("sun")
    alert("The Butterfly Isn't There.")
  });

  $("#cloud").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("cloud")
    alert("The Butterfly Isn't There.")
  });

  $("#grass").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("grass")
    alert("The Butterfly Isn't There.")
  });
  $("#monster").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("monster")
    alert("The Butterfly Isn't There.")
  });
  const TheSentance= lives;
  $("#life").html(TheSentance);
};



if (pic == 4) {
  $("#monster").click( () => {
    console.log("monster")
    alert("You Found The Butterfly!")
  });

  $("#sun").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("sun")
    alert("The Butterfly Isn't There.")
  });

  $("#tree").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("tree")
    alert("The Butterfly Isn't There.")
  });

  $("#cloud").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("cloud")
    alert("The Butterfly Isn't There.")
  });
  $("#grass").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("grass")
    alert("The Butterfly Isn't There.")
  })
  const TheSentance= lives;
  $("#life").html(TheSentance);
};


if (pic == 5) {
  $("#grass").click( () => {
    console.log("grass")
    alert("You Found The Butterfly!")
  });

  $("#sun").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("sun")
    alert("The Butterfly Isn't There.")
  });

  $("#tree").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("tree")
    alert("The Butterfly Isn't There.")
  });

  $("#cloud").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("cloud")
    alert("The Butterfly Isn't There.")
  });
  $("#monster").click( () => {
    lives= lives-1;
    const TheSentance= lives;
    $("#life").html(TheSentance);
    console.log("life")
    console.log(lives)
    console.log("monster")
    alert("The Butterfly Isn't There.")
  });
  const TheSentance= lives;
  $("#life").html(TheSentance);
}
});
//});
