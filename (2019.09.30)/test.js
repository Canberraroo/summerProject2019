after(4, "seconds", () => {
  var mario = new Sound({
  url: "./docs/sounds/mario-jump.wav",
  loop: false,
  speed: "normal",
  volume: "normal"
})

mario.startPlaying()

})
