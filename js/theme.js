(function(){
  const btn=document.getElementById("themeToggle");
  const root=document.documentElement;
  const KEY="pref-theme";
  const saved=localStorage.getItem(KEY);
  if(saved==="light")root.classList.add("light");
  btn&&btn.addEventListener("click",()=>{
    const isLight=root.classList.toggle("light");
    localStorage.setItem(KEY,isLight?"light":"dark");
    btn.textContent=isLight?"☀️":"🌙";
  });
})();
