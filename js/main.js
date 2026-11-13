const menuButton=document.querySelector('[data-menu-button]');
const mobileMenu=document.querySelector('[data-mobile-menu]');
const navLinks=document.querySelectorAll('.nav-link');
if(menuButton&&mobileMenu){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));mobileMenu.classList.toggle('hidden');});mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileMenu.classList.add('hidden');menuButton.setAttribute('aria-expanded','false');}));}
const setActive=id=>navLinks.forEach(link=>{const active=link.getAttribute('href')===`#${id}`;link.classList.toggle('active',active);link.textContent=active?`/${link.dataset.label}/`:link.dataset.label;});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting&&[...navLinks].some(link=>link.getAttribute('href')===`#${entry.target.id}`))setActive(entry.target.id);}),{rootMargin:'-35% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
