import { hack } from "../../declarations/hack";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  
  button.setAttribute("disabled", true);
  
  // Interact with foo actor, calling the greet method
  const newCount = await hack.count();
  
  button.removeAttribute("disabled");
  
  document.getElementById("count").innerText = newCount.toString();
  
  return false;
});

hack.getCount().then((v) => {
  document.getElementById("count").innerText = v.toString();
});
