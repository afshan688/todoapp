var textBox =document.getElementById('text-input');
var addbtn =document.getElementById('add-btn');
var textlist = document.getElementById('text-list');
addbtn.addEventListener('click', function(){
    var textV = textBox .value .trim();
    if(textV){
        var item =document.createElement('div');
        item.className ='item';
        var text =document.createElement('span');
        text.textContent = textV;
        item.appendChild(text);
        var delBtn = document.createElement('span');
        delBtn .className ="delete-btn";
        delBtn.textContent = "X";
        delBtn.addEventListener('click',function(){
            item.remove();
        });
        item.appendChild(delBtn);
        textlist.appendChild(item);
        textBox .value ="";

    }else{
        alert('enter some text');
    }
});










