var resu=1;//utilizada en ejercicio3

//1

function ejercicio1(){

}

//2

function ejercicio2(arrayFechas,fechaInicio,fechaFin){
    let arrayFechaInicio=fechaInicio.split('/');
    let arrayFechaFin=fechaFin.split('/');

    let arrayFinal=[];

    arrayFechas.forEach(element => {
        let nuevoArray=element.split('/');
       
        if(nuevoArray[2] > arrayFechaInicio[2] && nuevoArray[2] < arrayFechaFin[2]){
            arrayFinal.push(element);
            
        }else if(nuevoArray[2]==arrayFechaInicio[2] || nuevoArray[2]==arrayFechaFin[2]){
            if(nuevoArray[1] > arrayFechaInicio[1] && nuevoArray[1] < arrayFechaFin[1]){
                arrayFinal.push(element);

            }else if(nuevoArray[1]==arrayFechaInicio[1] || nuevoArray[1]==arrayFechaFin[1]){
                if(nuevoArray[0] > arrayFechaInicio[0] && nuevoArray[0] < arrayFechaFin[0]){
                    arrayFinal.push(element);
                }
            }
        }         
    });
    arrayFinal.unshift(fechaInicio);
    return arrayFinal;
}

console.log(ejercicio2(["01/03/2016","02/05/2019","10/12/2008","10/01/2018"], "01/01/2018", "01/01/2020"));

//3
    
function ejercicio3(array){

    for(let i=0; i<array.length; i++){
        resu*=array[i];//declarada fuera del main
    }
    return resu;
}

console.log(ejercicio3([1,2,3,4,5]));

/*Intento de recursividad
function ejercicio3(array){
    let nuevoLength=array.length-1;
    if(cont<array.length){
        //cont++;
        for(let i=array.nuevoLength; i>=0; i--){
            //let nuevoLength=array.length-1;
            let nuevoAray= array.splice(array.nuevoLength-1,1);
            resu*=ejercicio3(nuevoAray);   //resu declarada fuera del main
            
        }
    }
    return resu;
}
console.log(ejercicio3([1,2,3,4,5]));
*/

//4

function ejercicio4(nFilas,nColumnas,color,tag){//llamada dentro del main
    let tabla=document.createElement("table");
    for(let i=1; i<=nFilas; i++){
        let tr=document.createElement("tr");
        
        if(i%2!=0)
            tr.style.backgroundColor=color;
        
        for(let j=1; j<=nColumnas; j++){
            let td=document.createElement("td");
            //td.appendChild(document.createTextNode("Examen"));    //esta línea sería sin mejorar con el apartado de AJAX
            loadDoc(td);//llamada a la funcion de AJAX
            tr.appendChild(td);
            td.addEventListener("click",()=>{
                td.innerHTML="";
            })
            localStorage.setItem('miTabla',tabla);
        }
        tabla.appendChild(tr);
    }
    tag.appendChild(tabla);

    localStorage.setItem('miTabla',tabla);
/////////////////////////////////////////////////////   
    function loadDoc(td){//AJAX, abrir con web server
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){ 
                let contenido=this.responseText;
                td.appendChild(document.createTextNode(contenido));
            }
        };
        xhttp.open("GET", "textoEjercicio4", true);
        xhttp.send();
    }
}

//5

function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['2017', 14252, 'color:green;opacity:0.5'],            
        ['2018', 23360, 'color:green;opacity:0.8'],            
        ['2019', 40421, 'color:green;opacity:0.6'],
        ['2020', 43500, 'color:green;opacity:0.4']
    ]);
    var options = {
        title: 'Evolución de la población de Navalcarnero',
        width:700,
        backgroundColor:'lightblue',
        legend:{
            position:'none'
        },
        animation:{
            duration:5000,
            startup:true
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('charts'));
    chart.draw(data, options);

}

window.onload=()=>{

    ejercicio4(3,4,"blue",document.getElementById("div"));

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    
}



