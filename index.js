// card bg color randomly function re use
function setBg (colorCardId){
    const bodyColor= document.getElementById(colorCardId);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    bodyColor.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    
  }

  document.getElementById('triangle').addEventListener('mouseenter', function(){
    setBg ('triangle');
    
  });
  document.getElementById('rectangle').addEventListener('mouseenter', function(){
    setBg('rectangle');
  });

  document.getElementById('parallelogram').addEventListener('mouseenter', function(){
    setBg('parallelogram');
  });

  document.getElementById('rhombus').addEventListener('mouseenter', function(){
    setBg('rhombus');
  });

  document.getElementById('pentagon').addEventListener('mouseenter', function(){
    setBg('pentagon');
  });

  document.getElementById('ellipse').addEventListener('mouseenter', function(){
    setBg('ellipse');
  });


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
    else if(triangleBase < 0 || triangleHight < 0 ){
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

    else if(rectangleWidth < 0 || rectangleLength < 0 ){
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
    else if(parallelogramBase < 0 || parallelogramHight < 0 ){
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

    else if(rhombusKornoOne < 0 || rhombusKornoTwo < 0 ){
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

    else if(pentagonBase < 0 || pentagonHight < 0 ){
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

    else if(ellipseBase < 0 || ellipseHight < 0 ){
        alert( 'Enter a valided number' );
    }
    else {
        setTableValue(no, cardTitle, totalArea);
    }
    
});



// Result show function re use
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