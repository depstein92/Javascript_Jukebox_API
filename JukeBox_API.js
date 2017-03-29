var play = document.getElementById("play_button");
var pause = document.getElementById("pause_button");
var stop = document.getElementById("stop_button");
var name_display = document.getElementById("display_box");
var name_display2 = document.getElementById("display_box2")
var name_display3 = document.getElementById("display_box3")
var name_display4 = document.getElementById("display_box4")
var name_display5 = document.getElementById("display_box5")
var img_select = document.getElementById("imgIs");
/*========Soundcloud API JAvascript=============*/

SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

var sc = SC.stream("/tracks/99446610");

SC.get("/tracks/99446610").then(function(player) {
player.play();
player.on("finish", function(){
console.log(done);
})})

/*=============================================*/

function Songplay(){
  this.song =  SC.stream("/tracks/99446610");
}

var songsPlayin = new Songplay();

Songplay.prototype.play = function(){

  this.song.then(function(player) {
  player.play();
})}
  // document.getElementById("display_box").innerHTML =

Songplay.prototype.pause = function(){

  this.song.then(function(player) {
  player.pause();
})}

Songplay.prototype.name_display = function(){
 SC.get("/tracks/99446610").then(function(response1 ) {
name_display.innerHTML = response1.title;

})}
Songplay.prototype.name_display2 = function(){
 SC.get("/tracks/99446610").then(function(response2 ){
name_display2.innerHTML = response2.description;

})}
Songplay.prototype.name_display3 = function(){
 SC.get("/tracks/99446610").then(function(response3 ) {
name_display3.innerHTML = response3.genre;

})}
Songplay.prototype.name_display4 = function(){
 SC.get("/tracks/99446610").then(function(response3 ) {
name_display4.innerHTML = response3.permalink_url;

})}

Songplay.prototype.name_display5 = function(){
 SC.get("/tracks/99446610").then(function(response5 ) {
img_select.setAttribute("src", response5.artwork_url);

})}




songsPlayin.name_display();
songsPlayin.name_display2();
songsPlayin.name_display3();
songsPlayin.name_display5();
songsPlayin.name_display4();

play.addEventListener("click", function() {
    songsPlayin.play()
})
stop.addEventListener("click", function(){
songsPlayin.pause()
})
