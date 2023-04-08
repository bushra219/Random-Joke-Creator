const jokes=document.getElementById("joke");
const btn=document.getElementById("submit");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getRandomJoke(){
    const resp=await fetch(url);
    const respData=await resp.json();
    console.log(resp);
    console.log(respData);
    jokes.textContent=respData.joke;


}
btn.addEventListener("click",getRandomJoke);