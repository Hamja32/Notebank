console.log("welcome");
showNotes();
//if user adds a note add into local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = " ";
   
showNotes();

});




//function to show element from localstorage
    function showNotes() {
        let notes = localStorage.getItem("notes");
        if (notes==null) {
            notesObj = [];
        }else{
            notesObj = JSON.parse(notes);
        }


        let html =  "";
        notesObj.forEach(function (element,index){
            html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Notes ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNotes(this.id)" class="delete btn">Delete</button>
            </div>
            </div>`;
        });
    let noteEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteEle.innerHTML = html;
    }else{
        noteEle.innerHTML = "Nothing to show! 'Use Add a Note' ";
    }

    }


    function deleteNotes(index) {
        console.log("I am deleting",index);

        let notes = localStorage.getItem("notes");
        if (notes==null) {
            notesObj = [];
        }else{
            notesObj = JSON.parse(notes);
        }
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));

showNotes();
    }

    let search = document.getElementById('searchTxt');
    search.addEventListener("input",function(){

        let inputVal = search.value
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(e){

            let cardTxt = e.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputVal)) {
                e.style.display = "block";
            }else{
                e.style.display = "none"
            }

        });
    });