var search_box = document.getElementById("input_box");
var search_button = document.getElementById("search_button");
var bold_text = document.getElementById("sample_h2");
var adj = document.getElementById("adj_h4");
var sentence_one = document.getElementById("para_one");
var sentence_two = document.getElementById("para_two");
var error = document.querySelector(".error-time");
var container = document.querySelector(".meaning-body");

async function findDict(inp){
    var url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`;
    var help = await fetch(`${url}`);
    var data = await help.json();
    if(help.status == 404){
        console.log("error condition worked");
        error.style.display="flex";
        container.style.display="none";
    }
    console.log(data);

    bold_text.innerHTML = inp;
    adj.innerHTML = `${data[0].meanings[0].partOfSpeech}`;
    sentence_one.innerHTML = `${data[0].meanings[0].definitions[0].definition}`;
    sentence_two.innerHTML = `${data[0].meanings[0].definitions[1].example}`;

    
}

search_button.addEventListener('click',()=>{
    findDict(search_box.value);
})