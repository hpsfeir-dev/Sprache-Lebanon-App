const defaults=[
  {ar:'مرحبا',latin:'Marhaba',de:'Hallo'},
  {ar:'كيفك؟',latin:'Kifak? / Kifik?',de:'Wie geht es dir?'},
  {ar:'شكراً',latin:'Schukran',de:'Danke'}
];
let words=JSON.parse(localStorage.getItem('yalla-words')||'null')||defaults;
let completed=Number(localStorage.getItem('yalla-completed')||0);
let cardIndex=0;

const $=selector=>document.querySelector(selector);
const $$=selector=>document.querySelectorAll(selector);

function applyTheme(theme){
  document.documentElement.dataset.theme=theme;
  const dark=theme==='dark';
  $('#themeToggle').setAttribute('aria-pressed',String(dark));
  $('#themeToggle').setAttribute('aria-label',dark?'Hellmodus einschalten':'Dunkelmodus einschalten');
  $('.theme-icon').textContent=dark?'☀':'☾';
  $('#themeColor').content=dark?'#0d1d19':'#123b32';
}
const savedTheme=localStorage.getItem('yalla-theme');
const systemDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme||(systemDark?'dark':'light'));

function save(){localStorage.setItem('yalla-words',JSON.stringify(words));}
function updateProgress(){
  completed=Math.min(3,completed);
  $('#progressText').textContent=`${completed} / 3 Übungen`;
  $('#progressBar').style.width=`${completed/3*100}%`;
  localStorage.setItem('yalla-completed',completed);
}
function showView(id){
  $$('.view').forEach(v=>v.classList.toggle('active-view',v.id===id));
  $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderWords(){
  $('#wordList').innerHTML=words.map((w,i)=>`<article class="word-row"><div><p class="arabic" lang="ar" dir="rtl">${escapeHtml(w.ar)}</p><strong>${escapeHtml(w.latin)}</strong><p>${escapeHtml(w.de)}</p></div><button data-delete="${i}" aria-label="Wort löschen">×</button></article>`).join('');
  $('#dueText').textContent=`${words.length} Wörter warten auf dich.`;
}
function escapeHtml(value){const div=document.createElement('div');div.textContent=value;return div.innerHTML;}
function showCard(){
  if(!words.length)return;
  const w=words[cardIndex%words.length];
  $('#cardArabic').textContent=w.ar;$('#cardLatin').textContent=w.latin;$('#cardGerman').textContent=w.de;
  $('#cardGerman').hidden=true;$('#rating').hidden=true;$('#reveal').hidden=false;
}

$$('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$$('[data-open]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.open)));
$('#themeToggle').addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  localStorage.setItem('yalla-theme',next);
  applyTheme(next);
});
$('#addWord').addEventListener('click',()=>$('#wordDialog').showModal());
$('#wordForm').addEventListener('submit',event=>{
  event.preventDefault();
  words.unshift({ar:$('#arabicInput').value.trim(),latin:$('#latinInput').value.trim(),de:$('#germanInput').value.trim()});
  save();renderWords();event.target.reset();$('#wordDialog').close();
});
$('#wordList').addEventListener('click',event=>{
  const button=event.target.closest('[data-delete]');if(!button)return;
  words.splice(Number(button.dataset.delete),1);save();renderWords();
});
$('#startCards').addEventListener('click',()=>{
  if(!words.length)return;
  $('#wordList').hidden=true;$('#startCards').hidden=true;$('#trainer').hidden=false;showCard();
});
$('#reveal').addEventListener('click',()=>{$('#cardGerman').hidden=false;$('#rating').hidden=false;$('#reveal').hidden=true;});
$('#rating').addEventListener('click',event=>{
  if(!event.target.dataset.rate)return;
  if(event.target.dataset.rate==='known'&&completed<3){completed++;updateProgress();}
  cardIndex++;showCard();
});
$('.complete-task').addEventListener('click',event=>{
  if(!event.currentTarget.classList.contains('done')){completed++;updateProgress();event.currentTarget.classList.add('done');event.currentTarget.textContent='✓';}
});
$('#micButton').addEventListener('click',()=>{
  const utterance=new SpeechSynthesisUtterance('بدي قهوة، لو سمحت');utterance.lang='ar-LB';utterance.rate=.75;speechSynthesis.speak(utterance);
  $('#micButton').classList.add('listening');$('#micStatus').textContent='Hör zu – und sprich den Satz danach laut nach.';
  utterance.onend=()=>$('#micButton').classList.remove('listening');
});

if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');
renderWords();updateProgress();
