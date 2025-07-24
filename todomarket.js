let items = [];
let qts = [];
let obss = [];



add.addEventListener("click", function() {
    
    let item = document.querySelector("#item");
    let qt = document.querySelector("#qt");
    let obs = document.querySelector("#obs");
    

    if (item.value) {

        if (qt.value) {
         
            items.push(item.value);
            qts.push(qt.value);
            obss.push(obs.value);
                      
            item.value = "";
            qt.value = "";
            obs.value = "";
          
            updateList();

        } else {
        alert("You must put a Quantity!");
         } 
    } else {
        alert("You must put an Item!");
    }

});


function updateList() {
      
    const itemTableBody = document.querySelector('#list');
    itemTableBody.innerHTML = '';
 
    

        items.forEach((item, index) => {
                
            const row = document.createElement('tr');
           
           

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `checkbox${index}`;
                        
             remove.addEventListener("click", function() {
                
                const checkboxes = document.querySelectorAll('#list input[type="checkbox"]');
                checkboxes.forEach((checkbox, index) => {
                     if (checkbox.checked) {
                                
                    getOut(index);
                   
                }
                    });
            })

            done.addEventListener("click", function() {
                
                const checkboxes = document.querySelectorAll('#list input[type="checkbox"]');
                checkboxes.forEach((checkbox, index) => {
                     if (checkbox.checked) {
                                
                    getOut(index);
                   
                }
                    });
            })


            row.innerHTML = `
            <td>${checkbox.outerHTML}</td>
            <td id="box1">${item}</td> 
            <td id="box2">${qts[index]}</td>
            <td id="box3">${obss[index]}</td>           
             `;
        
            itemTableBody.appendChild(row);

        });



}
    
function getOut(index) {

    items.splice(index, 1);
    qts.splice(index, 1);
    obss.splice(index, 1);
    
    updateList();
};
