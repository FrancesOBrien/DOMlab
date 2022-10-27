var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

  
menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.position = "absolute";
subMenuEl.top = "0";
//5.1
let topMenuLinks = document.getElementById("A");

let showingSubMenu = false;
// //5.2
topMenuEl.addEventListener("click", function(e) {
    e.preventDefault()
  if(e.target.tagName !== 'A'){
    return;
  }
  console.log(e.target.innerHTML);
 
});
// //5.3
if(e.target.class = "active"){
  target.class.remove("active")
}

if(e.target.className == 'active'){
    e.target.classList.remove('active')
    showingSubMenu = false;
    subMenuEl.style.top='0')
//   e.target.classList.remove('active');
//   showingSubMenu = false;
//   subMenuEl.style.top = '0';
//   return;
// }
// //5.4
// for(let x = 0; x < topMenuLinks.length; x++){
//   topMenuLinks[x].classList.remove('active')
// }
// //5.5
// e.target.classList.add('active')

// //5.6 
// if(e.target.subLinks != undefined){
//   showingSubMenu = true
// } else {
//   showingSubMenu = false
// }
// //5.7
// if(showingSubMenu === true){
//   buildSubMenu(e.target.subLinks)
// }