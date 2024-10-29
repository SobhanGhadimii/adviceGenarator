const apiUrl = "https://api.adviceslip.com/advice";

async function fetchData() {

try{
const response = await fetch(apiUrl);

if(!response.ok){
throw new Error("network is facing isues" + response.statusText)
}
const data = await response.json();
}

}