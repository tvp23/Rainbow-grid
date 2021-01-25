
//colorgen
color_r = Array()
color_g = Array()
color_b = Array()

gridsize = 0.0001*(window.innerWidth*window.innerHeight)+3;

console.log(gridsize);

for(i=0; i<gridsize; i++){
    color_r.push(Math.floor(Math.random() * 255) + 1);
    color_g.push(Math.floor(Math.random() * 255) + 1);
    color_b.push(Math.floor(Math.random() * 255) + 1);
}


//grid create
for(i=0; i<gridsize; i++){
    var div = document.createElement('div');
    div.textContent = "";
    div.setAttribute('id', i);
    div.setAttribute('class', 'griditem');
    document.getElementById('gridcon').appendChild(div);
    document.getElementById(i).style.backgroundColor  = 'rgb('+color_r[i]+', '+color_g[i]+', '+color_b[i]+')';
    document.getElementById(i).addEventListener("mouseover",  function(){
        changecolor(this.id);
    },)


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