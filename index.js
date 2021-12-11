function generate(){
    let hexvalues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

    let newcolor = "#";

    for(let i=0;i<6;i++){

        let x = Math.round((Math.random()*14));
        let y = hexvalues[x];
        newcolor += y;

    }

    document.getElementById("container").style.backgroundColor = newcolor;
    document.getElementById("output").innerHTML = newcolor;
}

// generate();