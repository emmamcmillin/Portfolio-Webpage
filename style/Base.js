let myButton = document.querySelector("button");
document.querySelector("button").addEventListener("click", () => {
    alert("OW!");
  });

  document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'CLICK';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'BUTTON';
};
  
let count = 0;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     if(count % 2 == 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
     document.getElementById('txt-counter').innerHTML = 'Number:'+ count
}

document.getElementById('year').innerHTML = (new Date().getFullYear())

for (let i = 0; i <= 100; i = i + 1) {
    
    var x = document.createElement("LI");
    let listItem = x;
    listItem.textContent = i;
    document.getElementById("numbers").appendChild(listItem);
   
    if(i % 2 ==0) {
        
        listItem.style.color = 'green';

    } else {
        
        listItem.style.color = 'red';
    }
  }

   
  

