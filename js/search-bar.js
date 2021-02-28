const bar = document.querySelector(".search-bar");
const btn = bar.querySelector("button");

function AddSearchBar(){
    bar.classList.remove("SHOWING_ON") ;
}

function RemoveSearchBar(){
    bar.classList.add("SHOWING_ON") ;
}

btn.addEventListener("click", RemoveSearchBar);