//if users add a note,add it to the local storage .
let addbtn=document.getElementById("addbtn");
// const notesObj=[];
showNotes();
addbtn.addEventListener('click',(e)=>{
  let addtxt=document.getElementById("addtxt");
 notesObj.push(addtxt.value);
let notes=localStorage.getItem("notes");


  if(notes==null){
     notesObj=[];
   }
   else{
      notesObj=JSON.parse(notes);
   }
 notesObj.push(addtxt.value);
localStorage.setItem("notes",JSON.stringify(notesObj));
 addtxt.value="";
showNotes();
})
//function to show elements from localstorage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
      }
      else{
         notesObj=JSON.parse(notes);
      }
    let html="";
    notesObj.forEach(function(element,index){
        html+= 
        `<div class="card my-2 mx-2" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
    `;
    })
    let notesElm=document.getElementById("notes");
    if(notesObj.length!=0)
    notesElm.innerHTML=html;  
    else
    notesElm.innerHTML="nothing to show! use above 'Add a Note' section to add a note";                     
}

//function to remove elements from localstorage

function deleteNote(index){
    console.log("delete this note" ,index);
    let notes=localStorage.getItem("notes");
    if(notes==null)
    notesObj=[];
    else
    notesObj=JSON.parse(notes);
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

//search a note

let search=document.getElementById("searchtxt");
search.addEventListener('input',()=>{
    let inputVal=search.value;
    console.log("input event fired",inputVal);
})
