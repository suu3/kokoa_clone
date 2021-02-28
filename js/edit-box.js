const box = document.querySelector(".edit-box");
var count = 1;

function AddEditBox(){
    box.classList.remove("SHOWING_ON") ;
    count+=1;
}

function DeleteEditBox(){
    box.classList.add("SHOWING_ON") ;
    count-=1;
}

function EditBox() {
    if(count%2==1){
        AddEditBox();
    }
    else{
        DeleteEditBox();
    }
}