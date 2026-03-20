let toggle = document.getElementById("toggle"); 

function getTheme(){
  try {
    return localStorage.getItem("Theme") || "light";
  } catch{
    return "light";
  }
}
function getSystemTheme(){
  return window.matchMedia("(prefers-color)-scheme: dark").matches ? "dark" : "light";
}
function applyTheme(theme){
  const realTheme = theme === "auto" ? getSystemTheme() : theme;
  document.documentElement.setAttribute("data-theme", realTheme);
  toggle.textContent = `${theme  ===  "auto" ? "🖥️" :  realTheme === "dark" ? "🌞" : "🌙"}`;
}
function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("Theme", theme);
    // toggle.textContent = `${theme ===  "dark" ? "🌞" : "🌙" }`;
    toggle.style.backgroundColor = `${theme === "dark" ? "white" : "black"}`;
  } catch {}
  applyTheme(theme);
}
toggle.addEventListener("click", () => {
  const curent = getTheme();
  let newTheme;
  if(curent === "light") newTheme = "dark";
  else if(curent === "dark") newTheme = "auto";
  else newTheme = "light";
  setTheme(newTheme);
});

window.matchMedia("(prefers-color)-scheme: dark").addEventListener("change", () => {
  if(getTheme() === "auto"){
    applyTheme("auto");
  }
});
applyTheme(getTheme());