

const addProduct = () => { 
  const ul = document.querySelector("#my-ul");
  const li = document.createElement("li")
 

  const checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  
  ul.appendChild( checkbox)
  ul.appendChild( li )
  
  ul.style.display = "flex"
  li.style.listStyleType = "none";

  const input = document.querySelector("#my-value")
  const value = input.value;
  if(value != ""){
    console.log(checkbox)
    li.innerText = value
    
  }
  
  // ...
};
