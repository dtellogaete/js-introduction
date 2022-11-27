const setData = () =>{
    /* Input Data*/ 
    const quantity = document.querySelector('#inputQuantity').value;
    const totalQuantity = quantity*400000;
    const color = document.querySelector('#inputColor').value;

    if(quantity != '' && color != ''){ 
        /*Set Data*/      
        document.querySelector('#total').innerHTML = totalQuantity;
        document.querySelector('#quantity').innerHTML = quantity;        
        document.querySelector('#color').style.backgroundColor = color;
    };    
};

document.querySelector('#btn-calculate').addEventListener('click', setData);
