function run()
{
    let ile = parseInt(document.getElementById("ile").value);
    let container = document.getElementById("container");
    let tworzenieStart;
    let tworzenieEnd;
    let kasowanieStart, kasowanieEnd;
    container.style="display:none;";
    while (container.hasChildNodes()) 
    {
        container.removeChild(container.lastChild);
    }
    tworzenieStart = performance.now();
    for (let i=0;i<ile;i++)
    {
        container.appendChild(document.createTextNode("nf" + (i+1)));
        let input = document.createElement("input");
        input.type = "text";
        input.name = "nf" + i;
        input.id = "nf" + i;     
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
    tworzenieEnd = performance.now();
    let odczytywanieStart, odczytywanieEnd;
    odczytywanieStart = performance.now();
    let arr = [];
    for(let i=0;i<ile;i++)
    {
        arr[i] = document.getElementById("nf" + i)
    }
    odczytywanieEnd = performance.now();
    let zapisStart, zapisEnd;
    zapisStart = performance.now();
    for(let i=0;i<ile;i++)
    {
        arr[i].value = i;
    }
    zapisEnd = performance.now();
    kasowanieStart = performance.now();
    while (container.hasChildNodes()) 
    {
        container.removeChild(container.lastChild);
    }
    kasowanieEnd = performance.now()
    document.getElementById("tworzenieMs").innerHTML = (tworzenieEnd - tworzenieStart).toFixed(2) + " ms";
    document.getElementById("tworzenieSek").innerHTML = Math.round((1000*ile)/(tworzenieEnd - tworzenieStart));
    document.getElementById("odczytywanieMs").innerHTML = (odczytywanieEnd - odczytywanieStart).toFixed(2) + " ms";
    document.getElementById("odczytywanieSek").innerHTML = Math.round((1000*ile)/(odczytywanieEnd - odczytywanieStart));
    document.getElementById("zapisMs").innerHTML = (zapisEnd - zapisStart).toFixed(2) + " ms";
    document.getElementById("zapisSek").innerHTML = Math.round((1000*ile)/(zapisEnd - zapisStart));
    document.getElementById("kasowanieMs").innerHTML = (kasowanieEnd - kasowanieStart).toFixed(2) + " ms";
    document.getElementById("kasowanieSek").innerHTML = Math.round((1000*ile)/(kasowanieEnd - kasowanieStart));
}

