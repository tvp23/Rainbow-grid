
//colorgen
color_r = Array()
color_g = Array()
color_b = Array()

for(i=0; i<25; i++){
    color_r.push(Math.floor(Math.random() * 255) + 1);
    color_g.push(Math.floor(Math.random() * 255) + 1);
    color_b.push(Math.floor(Math.random() * 255) + 1);
}


//grid create
for(i=0; i<25; i++){
    var div = document.createElement('div');
    div.textContent = "";
    div.setAttribute('id', i);
    div.setAttribute('class', 'griditem');
    document.getElementById('gridcon').appendChild(div);
    document.getElementById(i).style.backgroundColor  = 'rgb('+color_r[i]+', '+color_g[i]+', '+color_b[i]+')';
    document.getElementById(i).addEventListener("click", changecolor);

    //changing color
    function changecolor(){
        color_r[0] = Math.floor(Math.random() * 255) + 1;
        color_g[0] = Math.floor(Math.random() * 255) + 1;
        color_b[0] = Math.floor(Math.random() * 255) + 1;
        console.log('hi'+i+'');
    }
}

