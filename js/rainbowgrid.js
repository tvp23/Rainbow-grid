fetch("getdbcolors.php")
.then(convertToJason) 
.then(processData) 
.then(creategrid)
.catch(function(err) {console.log('Fetch Error :-S', err)});


//colorgen
color_r = Array()
color_g = Array()
color_b = Array()

for(i=0; i<950; i++){
    color_r.push(Math.floor(Math.random() * 255) + 1);
    color_g.push(Math.floor(Math.random() * 255) + 1);
    color_b.push(Math.floor(Math.random() * 255) + 1);
}

//grid create
function creategrid(){
    for(i=0; i<950; i++){
        var div = document.createElement('div');
        div.textContent = "";
        div.setAttribute('id', i);
        div.setAttribute('class', 'griditem');
        document.getElementById('gridcon').appendChild(div);
        document.getElementById(i).style.backgroundColor  = 'rgb('+colors[0][i]+', '+colors[1][i]+', '+colors[2][i]+')';
        document.getElementById(i).addEventListener("mouseover",  function(){
            changecolor(this.id);
        },)
    }
}

//function changecolor
function changecolor(div){

    //changing color in array
    color_r[div] = Math.floor(Math.random() * 255) + 1;
    color_g[div] = Math.floor(Math.random() * 255) + 1;
    color_b[div] = Math.floor(Math.random() * 255) + 1;

    //changing color on web
    document.getElementById(div).style.backgroundColor  = 'rgb('+color_r[div]+', '+color_g[div]+', '+color_b[div]+')';
}


function convertToJason(response){
    return response.json(); 
}

function processData(data){
    colors = data;
}