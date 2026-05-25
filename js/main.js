AOS.init({ duration: 800, once: true });
const darkToggle=document.getElementById('darkModeToggle'),darkCSS=document.getElementById('dark-mode-css'),body=document.body;
function setDark(e){if(e){body.classList.add('dark');darkCSS.disabled=false;darkToggle.innerHTML='<i class="fas fa-sun"></i>';}else{body.classList.remove('dark');darkCSS.disabled=true;darkToggle.innerHTML='<i class="fas fa-moon"></i>';}localStorage.setItem('darkMode',e?'enabled':'disabled');}
darkToggle.addEventListener('click',()=>setDark(!body.classList.contains('dark')));
if(localStorage.getItem('darkMode')==='enabled')setDark(true);

const header=document.getElementById('header'),bottomNav=document.getElementById('bottomNav');let ls=0;
window.addEventListener('scroll',()=>{let s=window.pageYOffset||document.documentElement.scrollTop;if(s>ls&&s>80){header.classList.add('header-hidden');if(bottomNav)bottomNav.classList.add('bottom-nav-hidden');}else{header.classList.remove('header-hidden');if(bottomNav)bottomNav.classList.remove('bottom-nav-hidden');}ls=s;updateActiveNav();animateDonuts();});

function updateActiveNav(){const sec=['home','education','experience','certificates','skills','contact'];let c='home';sec.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=150)c=id;});document.querySelectorAll('.nav-list a, .bottom-nav-item').forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+c)l.classList.add('active');});}

const counters=document.querySelectorAll('.counter');let animated=false;
function animateCounters(){counters.forEach(c=>{const t=+c.getAttribute('data-target'),inc=t/40;const u=()=>{const cur=+c.innerText;if(cur<t){c.innerText=Math.ceil(cur+inc);setTimeout(u,30);}else c.innerText=t;};u();});}
window.addEventListener('scroll',()=>{const stats=document.querySelector('.hero-stats');if(stats&&!animated&&stats.getBoundingClientRect().top<window.innerHeight-100){animateCounters();animated=true;}});

// Animate Donut Charts
function animateDonuts(){document.querySelectorAll('.fg-circle').forEach(circle=>{const rect=circle.getBoundingClientRect();if(rect.top<window.innerHeight&&!circle.dataset.animated){const percent=circle.getAttribute('data-percent');const circumference=2*Math.PI*45;circle.style.strokeDasharray=circumference;circle.style.strokeDashoffset=circumference*(1-percent/100);circle.dataset.animated='true';}});}

// Particle Canvas
const canvas=document.getElementById('particleCanvas');if(canvas){const ctx=canvas.getContext('2d');let w,h,particles=[];function resize(){w=canvas.width=window.innerWidth;h=canvas.height=canvas.parentElement.offsetHeight;}resize();window.addEventListener('resize',resize);class Particle{constructor(){this.x=Math.random()*w;this.y=Math.random()*h;this.vx=(Math.random()-0.5)*0.4;this.vy=(Math.random()-0.5)*0.4;this.r=Math.random()*2+1;}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>w)this.vx*=-1;if(this.y<0||this.y>h)this.vy*=-1;}draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle='rgba(245,158,11,0.12)';ctx.fill();}}for(let i=0;i<40;i++)particles.push(new Particle());function animateParticles(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.update();p.draw();});for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(245,158,11,${0.06*(1-dist/120)})`;ctx.stroke();}}}requestAnimationFrame(animateParticles);}animateParticles();}

// Flip Card - Hover on Desktop, Click on Mobile
const flipCard = document.querySelector('.flip-card');
const flipHint = document.getElementById('flipHint');
let isMobile = window.innerWidth <= 768;

function updateFlipHint() {
    isMobile = window.innerWidth <= 768;
    const currentLang = document.documentElement.lang || 'ar';
    
    if (isMobile) {
        flipHint.textContent = currentLang === 'ar' ? 'انقر للخلف' : 'Tap to flip';
    } else {
        flipHint.textContent = currentLang === 'ar' ? 'مرر الماوس للخلف' : 'Hover to flip';
    }
}

// تحديث عند تحميل الصفحة
updateFlipHint();

// تحديث عند تغيير حجم النافذة
window.addEventListener('resize', updateFlipHint);

// تحديث عند تغيير اللغة
window.addEventListener('languageChanged', updateFlipHint);

// النقر على البطاقة في الموبايل
if (flipCard) {
    flipCard.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            this.classList.toggle('flipped');
        }
    });
}

// Contact Form
function submitContact(){const name=document.getElementById('name')?.value?.trim()||'',email=document.getElementById('email')?.value?.trim()||'',msg=document.getElementById('message')?.value?.trim()||'لا يوجد',fb=document.getElementById('formFeedback');if(!name){fb.textContent='الاسم مطلوب';fb.style.color='red';return;}if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fb.textContent='بريد إلكتروني غير صحيح';fb.style.color='red';return;}fb.style.color='';const m=`*رسالة جديدة من CV*\n\nالاسم: ${name}\nالبريد: ${email}\nالرسالة: ${msg}`;window.open(`https://wa.me/966507652943?text=${encodeURIComponent(m)}`,'_blank');fb.textContent='✅ تم إرسال رسالتك بنجاح!';fb.style.color='green';document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value='';setTimeout(()=>{fb.textContent='';},5000);}