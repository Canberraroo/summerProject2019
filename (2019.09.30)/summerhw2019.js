$(document).ready(function(){
$("#y1").click( () => {
  $("#sent").html("Perfect! So this is manny the monster. He is one of the billions of amazing creatures here on Ooberslobble. To show you a little more about Ooberslobble we will show you a day in Mannys life. Let's get started!");
  $("#sent").append("<img src='https://media1.giphy.com/media/cmyqqu3VloluMjTx6A/source.gif' alt='chainsaw' height='300' width='500'>");
})


$("#n1").click( () => {
  var TheSentance= "Fine then, I could wait here all day.<br>";
  setTimeout(function(){ alert("Are you going to press the YAAAAAASSSS!!!! button now?"); }, 3000);
$("#sent").html(TheSentance);

})
});
