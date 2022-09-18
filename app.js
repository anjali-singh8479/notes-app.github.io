// on reloading the page all notes diappeared so this to show all the notes present
console.log("anjali");
showNotes();
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("add-text");
 
  
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  
  console.log(notesObj);
  showNotes();
});
// let editTitle=document.getElementById("edit-btn");
// editTitle.addEventListener("click", function(e){
//   prompt("edit the title");
//   let addTitle = document.getElementById("add-title");
 

//   let notes = localStorage.getItem("notes");

//   if (notes == null) {
//     Obj = [];
//   } else {
//     Obj = JSON.parse(notes);
//   }
//   Obj.push(addText.value);
//   localStorage.setItem("notes", JSON.stringify(Obj));
//   addTitle.value = "";
//   console.log(Obj);
//   showNotes();
// });


function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class=" notes-card card my-2 mx-2" style="width: 18rem;">
       
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <br>
            <button id=${index} onCLick="deleteNote(this.id)"class="btn btn-primary">delete note</button>
            
          </div>
       </div>
        `;
  });

  let notesElm = document.getElementById("notes");
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "nothing to show";
  }
}
function deleteNote(index) {
  //    console.log("I am deleting, index");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

  
 

let searchText = document.getElementById("search-text");
searchText.addEventListener("input", function () {
  let inputVal = searchText.value;
  console.log("input event fired", inputVal);
  let noteCards = document.getElementsByClassName("notes-card");
  Array.from(noteCards).forEach(function (element) {
    let cardText = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardText);
    if (cardText.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
