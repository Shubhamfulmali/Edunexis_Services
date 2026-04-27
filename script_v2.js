// NAV SCROLL
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('solid',window.scrollY>40));

// HAMBURGER
const hbg=document.getElementById('hbg'),mob=document.getElementById('mob');
if(hbg)hbg.addEventListener('click',()=>mob.classList.toggle('open'));

// COUNTER
function runCounters(){
  document.querySelectorAll('.s-num[data-target]').forEach(el=>{
    const t=+el.dataset.target,dur=1800;let s=null;
    const step=ts=>{if(!s)s=ts;const p=Math.min((ts-s)/dur,1),e=1-Math.pow(1-p,3);
      el.textContent=Math.floor(e*t).toLocaleString();if(p<1)requestAnimationFrame(step);else el.textContent=t.toLocaleString()};
    requestAnimationFrame(step);
  });
}
const sr=document.querySelector('.stats-row');
if(sr)new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){runCounters();o.disconnect()}},{threshold:.4}).observe(sr);

// SCROLL REVEAL
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}})},{threshold:.08});
document.querySelectorAll('.reveal,.stagger').forEach(el=>ro.observe(el));

// FAQ
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!open)item.classList.add('open');
  });
});

// FORM
document.querySelectorAll('form').forEach(f=>{
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const btn=f.querySelector('button[type="submit"],.btn-arrow[type="submit"],.form-full');
    if(btn){const orig=btn.innerHTML;btn.innerHTML='✓ Sent!';btn.style.background='#22C55E';btn.style.color='#fff';
      setTimeout(()=>{btn.innerHTML=orig;btn.style.background='';btn.style.color='';f.reset()},3000)}
  });
});
