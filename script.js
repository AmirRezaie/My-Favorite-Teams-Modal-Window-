const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    console.log("button clicked!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
document.querySelector(".realmadrid").addEventListener("click", function () {
  body.style.backgroundImage = "url(images/santiagobernabeu.jpg)";
  document.querySelector("h1").textContent = "Real Madrid";
  document.querySelector("p").textContent =
    "Real Madrid Club de Fútbol, meaning Royal Madrid Football Club), commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid.";
});
document.querySelector(".arsenal").addEventListener("click", function () {
  body.style.backgroundImage = "url(images/emirates.jpg)";
  document.querySelector("h1").textContent = "Arsenal";
  document.querySelector("p").textContent =
    "Arsenal Football Club is a professional football club based in London, England. Arsenal plays in the Premier League, the top flight of English football. The club has won 13 league titles (including one unbeaten title), a record 14 FA Cups, two League Cups, 16 FA Community Shields, the League Centenary Trophy, one European Cup Winners' Cup, and one Inter-Cities Fairs Cup.";
});
document.querySelector(".newcastle").addEventListener("click", function () {
  body.style.backgroundImage = "url(images/saintjamespark.jpg)";
  document.querySelector("h1").textContent = "Newcastle United";
  document.querySelector("p").textContent =
    "Newcastle United Football Club is an English professional football club based in Newcastle upon Tyne, that plays in the Premier League – the top flight of English football. The club was founded in 1892 by the merger of Newcastle East End and Newcastle West End. The team plays its home matches at St James' Park in the centre of Newcastle. Following the Taylor Report's requirement that all Premier League clubs have all-seater stadiums, the ground was modified in the mid-1990s and currently has a capacity of 52,305.";
});
btn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
