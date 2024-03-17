let btn= document.querySelector(".submit");
let input= document.querySelector(".inputbox");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(){
  let item =document.createElement("li");
  item.innerText= input.value;
  console.log(input.value);
  let del = document.createElement("img");
  del.src = "assests/Trash.png";
  del.classList.add("delete");
  item.appendChild(del);
  ul.appendChild(item);
  input.value = "";
});
ul.addEventListener("click",function(event){
  if(event.target.nodeName.toLowerCase() === "img"){
      let listItem = event.target.parentElement;
      listItem.remove();  
  }
});
// let btn=document.querySelector("submit");
// let input= document.querySelector("inputbox");
// let ul= document.querySelectorAll("ul")
// btn.addEventListener(
//     "click",function(){
//       let item= document.createElement("li");
//       item.innerText= input.Value;
//       console.log(input.Value)}
//     // 👨🏼‍🦳👩🏼‍🦳 acha nhi hai complete kro 
