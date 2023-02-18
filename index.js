// card bg color rendomly
function setBg (){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    
  }

  document.getElementById('triangle-card').addEventListener('mouseenter', function(){
    
    setBg ();
    
  });
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


//   calculation triangle
let no=0;

document.getElementById('triangle-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('card-title').innerText;
    const triangleBase = document.getElementById('triangle-base').value;
    const triangleHight = document.getElementById('triangle-hight').value;  
    const area = 0.5 * parseFloat(triangleBase)* parseFloat(triangleHight);
   
    const totalArea = area.toFixed(2);
   
    

    if ( isNaN(totalArea) ) {
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    
});

//   calculation rectangle

document.getElementById('rectangle-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('rectangle-title').innerText;
    const rectangleWidth = document.getElementById('rectangle-width').value;  
    const rectangleLength = document.getElementById('rectangle-length').value;  
    const area = parseFloat(rectangleWidth) * parseFloat(rectangleLength);
    const totalArea = area.toFixed(2);
   
    

    if ( isNaN(totalArea) ) {
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    
});
// calculation Parallelogram

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('parallelogram-title').innerText;
    const parallelogramBase = document.getElementById('parallelogram-base').value;
    const parallelogramHight = document.getElementById('parallelogram-hight').value;  
    const area = parseFloat(parallelogramBase)* parseFloat(parallelogramHight);
   
    const totalArea = area.toFixed(2);
   
    

    if ( isNaN(totalArea) ) {
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    
});

// calculation Rhombus

document.getElementById('rhombus-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('rhombus-title').innerText;
    const rhombusKornoOne = document.getElementById('rhombus-kornoOne').value;
    const rhombusKornoTwo = document.getElementById('rhombus-kornoTwo').value;  
    const area = 0.5 * parseFloat(rhombusKornoOne)* parseFloat(rhombusKornoTwo);
   
    const totalArea = area.toFixed(2);
   
    

    if ( isNaN(totalArea) ) {
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    
});

// calculation Pentagon

document.getElementById('pentagon-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('pentagon-title').innerText;
    const pentagonBase = document.getElementById('pentagon-base').value;
    const pentagonHight = document.getElementById('pentagon-hight').value;  
    const area = 0.5 * parseFloat(pentagonBase)* parseFloat(pentagonHight);
   
    const totalArea = area.toFixed(2);
   
    

    if ( isNaN(totalArea) ) {
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    
});

// calculation Ellipse

document.getElementById('ellipse-btn').addEventListener('click', function(){
    no +=1;
    const cardTitle= document.getElementById('ellipse-title').innerText;
    const ellipseBase = document.getElementById('ellipse-base').value;
    const ellipseHight = document.getElementById('ellipse-hight').value;  
    const area = 3.14 * parseFloat(ellipseBase)* parseFloat(ellipseHight);
   
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