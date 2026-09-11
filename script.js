const paths={arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',phone:'<path d="m6 3 4 4-2 3a16 16 0 0 0 6 6l3-2 4 4-2 3C10 23 1 14 3 5Z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',shield:'<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6Z"/><path d="m8 12 3 3 5-6"/>',wrench:'<path d="M14 6a5 5 0 0 0-6 6L3 17a2.8 2.8 0 0 0 4 4l5-5a5 5 0 0 0 6-6l-3 3-4-4Z"/>',settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="currentColor" stroke="none"/><circle cx="16" cy="17" r="3" fill="currentColor" stroke="none"/>',building:'<path d="M5 21V4h14v17M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1m-5 9v-5h4v5"/>',message:'<path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z"/><path d="M7 9h9M7 13h6"/>',check:'<path d="m5 12 4 4L19 6"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',whatsapp:'<path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>'};
document.querySelectorAll('[data-icon]').forEach(el=>{el.outerHTML=`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[el.dataset.icon]||paths.wrench}</svg>`});
const whatsapp='https://wa.me/5519988150066?text='+encodeURIComponent('Olá! Encontrei o site da WS Rocha Equipamentos e gostaria de solicitar um atendimento.');
document.querySelectorAll('.whatsapp').forEach(a=>{a.href=whatsapp;a.target='_blank';a.rel='noopener noreferrer'});
const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#menu');
function closeMenu(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu')}
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus()}});
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal();document.body.style.overflow='hidden'}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>document.body.style.overflow='');

const coverVideo=document.querySelector('.hero-background-video');
if(coverVideo){
 let inView=true;
 coverVideo.defaultMuted=true;
 coverVideo.muted=true;
 function updateVideo(){
  if(document.hidden||!inView){coverVideo.pause()}
  else{coverVideo.play().catch(()=>{})}
 }
 coverVideo.addEventListener('loadeddata',updateVideo);
 document.addEventListener('visibilitychange',updateVideo);
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;updateVideo()},{threshold:.05}).observe(coverVideo.closest('.hero'));
 updateVideo();
}
