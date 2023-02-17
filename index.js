// card bg color rendomly
// const setBg = ()=>{
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }

//   document.getElementById('triangle-card').addEventListener('mouseenter', function(){
//     setBg();
//   });
//   document.getElementById('rectangle-card').addEventListener('mouseenter', function(){
//     setBg();
//   });
//   document.getElementById('parallelogram-card').addEventListener('mouseenter', function(){
//     setBg();
//   });
//   document.getElementById('rhombus-card').addEventListener('mouseenter', function(){
//     setBg();
//   });
//   document.getElementById('pentagon-card').addEventListener('mouseenter', function(){
//     setBg();
//   });
//   document.getElementById('ellipse-card').addEventListener('mouseenter', function(){
//     setBg();
//   });


//   calculation
let no=0;

document.getElementById('triangle-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('card-title').innerText;
    const triangleBase = document.getElementById('triangle-base').value;
   
    const triangleHight = document.getElementById('triangle-hight').value;  
    const area = 0.5 * parseFloat(triangleBase)* parseFloat(triangleHight);
    triangleBase.value='';
    const totalArea = area.toFixed(2);
   
    

    if ( isNaN(totalArea) ) {
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    

    

    

});




function setTableValue(sreal, title, area) {
    const table = document.getElementById( 'table-body' );
    const tr = document.createElement( 'tr' );
    tr.innerHTML = `
    <tr>
        <td>${sreal}. </td>
        <td>${title} </td>
        <td id="conversion-result">${area} cm<sup>2</sup></td>
        <td><button id="convert-meter" class="btn btn-info normal-case">Convert to m<sup>2</sup></a></button></td>
    </tr>
    `;
    table.appendChild(tr);
}