const coreWords=[
{id:'w1',ar:'مرحبا',latin:'Marhaba',de:'Hallo',cat:'Begrüßung',ex:'مرحبا، كيفك؟',exDe:'Hallo, wie geht es dir?'},
{id:'w2',ar:'أهلا وسهلا',latin:'Ahla w sahla',de:'Herzlich willkommen',cat:'Begrüßung',ex:'أهلا وسهلا فيك',exDe:'Herzlich willkommen!'},
{id:'w3',ar:'كيفك؟',latin:'Kifak? / Kifik?',de:'Wie geht es dir?',cat:'Begrüßung',ex:'كيفك اليوم؟',exDe:'Wie geht es dir heute?'},
{id:'w4',ar:'منيح',latin:'Mnīh',de:'Gut',cat:'Begrüßung',ex:'أنا منيح',exDe:'Mir geht es gut.'},
{id:'w5',ar:'شكراً',latin:'Schukran',de:'Danke',cat:'Begrüßung',ex:'شكراً كتير',exDe:'Vielen Dank.'},
{id:'w6',ar:'لو سمحت',latin:'Law samaht',de:'Bitte / Entschuldigung',cat:'Begrüßung',ex:'قهوة، لو سمحت',exDe:'Einen Kaffee, bitte.'},
{id:'w7',ar:'إيه',latin:'Ē',de:'Ja',cat:'Grundlagen',ex:'إيه، أكيد',exDe:'Ja, sicher.'},
{id:'w8',ar:'لأ',latin:'Laʾ',de:'Nein',cat:'Grundlagen',ex:'لأ، شكراً',exDe:'Nein, danke.'},
{id:'w9',ar:'شو؟',latin:'Schu?',de:'Was?',cat:'Grundlagen',ex:'شو هيدا؟',exDe:'Was ist das?'},
{id:'w10',ar:'وين؟',latin:'Wēn?',de:'Wo?',cat:'Grundlagen',ex:'وين الحمام؟',exDe:'Wo ist die Toilette?'},
{id:'w11',ar:'مين؟',latin:'Mīn?',de:'Wer?',cat:'Grundlagen',ex:'مين هيدا؟',exDe:'Wer ist das?'},
{id:'w12',ar:'ليش؟',latin:'Lēsch?',de:'Warum?',cat:'Grundlagen',ex:'ليش لأ؟',exDe:'Warum nicht?'},
{id:'w13',ar:'بدي',latin:'Baddé',de:'Ich möchte',cat:'Essen & Café',ex:'بدي قهوة',exDe:'Ich möchte einen Kaffee.'},
{id:'w14',ar:'قهوة',latin:'Ahwe',de:'Kaffee',cat:'Essen & Café',ex:'قهوة بلا سكر',exDe:'Kaffee ohne Zucker.'},
{id:'w15',ar:'مي',latin:'Mayy',de:'Wasser',cat:'Essen & Café',ex:'بدي مي',exDe:'Ich möchte Wasser.'},
{id:'w16',ar:'خبز',latin:'Khibiz',de:'Brot',cat:'Essen & Café',ex:'في خبز؟',exDe:'Gibt es Brot?'},
{id:'w17',ar:'طيّب',latin:'Tayyib',de:'Lecker / gut',cat:'Essen & Café',ex:'الأكل طيّب',exDe:'Das Essen ist lecker.'},
{id:'w18',ar:'الحساب',latin:'El-hsēb',de:'Die Rechnung',cat:'Essen & Café',ex:'الحساب لو سمحت',exDe:'Die Rechnung, bitte.'},
{id:'w19',ar:'أمي',latin:'Emmé',de:'Meine Mutter',cat:'Familie',ex:'هيدي أمي',exDe:'Das ist meine Mutter.'},
{id:'w20',ar:'بيّي',latin:'Bayyé',de:'Mein Vater',cat:'Familie',ex:'هيدا بيّي',exDe:'Das ist mein Vater.'},
{id:'w21',ar:'مرتي',latin:'Marté',de:'Meine Frau',cat:'Familie',ex:'هيدي مرتي',exDe:'Das ist meine Frau.'},
{id:'w22',ar:'جوزي',latin:'Jōzé',de:'Mein Mann',cat:'Familie',ex:'هيدا جوزي',exDe:'Das ist mein Mann.'},
{id:'w23',ar:'عيلة',latin:'ʿAyle',de:'Familie',cat:'Familie',ex:'عيلتي كبيرة',exDe:'Meine Familie ist groß.'},
{id:'w24',ar:'بيت',latin:'Bēt',de:'Haus / Zuhause',cat:'Zuhause',ex:'أنا بالبيت',exDe:'Ich bin zu Hause.'},
{id:'w25',ar:'غرفة',latin:'Ghurfe',de:'Zimmer',cat:'Zuhause',ex:'الغرفة كبيرة',exDe:'Das Zimmer ist groß.'},
{id:'w26',ar:'باب',latin:'Bēb',de:'Tür',cat:'Zuhause',ex:'سكّر الباب',exDe:'Mach die Tür zu.'},
{id:'w27',ar:'سيارة',latin:'Sayyāra',de:'Auto',cat:'Unterwegs',ex:'وين السيارة؟',exDe:'Wo ist das Auto?'},
{id:'w28',ar:'طريق',latin:'Tarīʾ',de:'Weg / Straße',cat:'Unterwegs',ex:'هيدا الطريق',exDe:'Das ist der Weg.'},
{id:'w29',ar:'يمين',latin:'Yamīn',de:'Rechts',cat:'Unterwegs',ex:'روح عاليمين',exDe:'Geh nach rechts.'},
{id:'w30',ar:'شمال',latin:'Schmēl',de:'Links',cat:'Unterwegs',ex:'لفّ عالشمال',exDe:'Bieg links ab.'},
{id:'w31',ar:'هلّق',latin:'Hallaʾ',de:'Jetzt',cat:'Zeit',ex:'بجي هلّق',exDe:'Ich komme jetzt.'},
{id:'w32',ar:'بكرا',latin:'Bukra',de:'Morgen',cat:'Zeit',ex:'منشوفك بكرا',exDe:'Wir sehen uns morgen.'},
{id:'w33',ar:'مبارح',latin:'Mbērih',de:'Gestern',cat:'Zeit',ex:'كنت هون مبارح',exDe:'Ich war gestern hier.'},
{id:'w34',ar:'مبسوط',latin:'Mabsūt',de:'Glücklich',cat:'Gefühle',ex:'أنا مبسوط',exDe:'Ich bin glücklich.'},
{id:'w35',ar:'تعبان',latin:'Taʿbān',de:'Müde',cat:'Gefühle',ex:'أنا تعبان شوي',exDe:'Ich bin etwas müde.'},
{id:'w36',ar:'مشتاقلك',latin:'Mischtāʾlak / -lik',de:'Ich vermisse dich',cat:'Gefühle',ex:'كتير مشتاقلك',exDe:'Ich vermisse dich sehr.'}
];

const lessons=[
{id:'l1',n:'01',title:'Marhaba, Lebanon',sub:'Begrüßen, danken und höflich sein',time:8,color:'coral',words:['w1','w2','w3','w4','w5','w6'],note:'Im Libanon gehört eine warme Begrüßung zum Gespräch. Ahla w sahla ist mehr als nur Hallo – es heißt sinngemäß: Du bist bei deiner Familie willkommen.'},
{id:'l2',n:'02',title:'Kaffee & Manoushe',sub:'Bestellen, nachfragen und bezahlen',time:10,color:'gold',words:['w13','w14','w15','w16','w17','w18'],note:'Baddé ist eines der nützlichsten Wörter im libanesischen Alltag. Es bedeutet „ich möchte“ und funktioniert direkt vor einem Nomen.'},
{id:'l3',n:'03',title:'Meine Menschen',sub:'Familie und Beziehungen vorstellen',time:11,color:'mint',words:['w19','w20','w21','w22','w23'],note:'Besitz wird im gesprochenen Arabisch oft direkt ans Wort gehängt: emm-é = meine Mutter, bayy-é = mein Vater.'},
{id:'l4',n:'04',title:'Durch Beirut',sub:'Nach dem Weg fragen und ankommen',time:12,color:'coral',words:['w10','w27','w28','w29','w30'],note:'Wēn? ist dein Rettungsanker unterwegs. Kombiniere es einfach mit einem Ort: Wēn el-matʿam? – Wo ist das Restaurant?'},
{id:'l5',n:'05',title:'Heute, morgen, gestern',sub:'Zeit und Verabredungen',time:9,color:'gold',words:['w31','w32','w33'],note:'Hallaʾ bedeutet „jetzt“, wird im Alltag aber flexibel gebraucht – manchmal auch im Sinn von „gleich“.'},
{id:'l6',n:'06',title:'Wie es dir wirklich geht',sub:'Gefühle ausdrücken und nachfragen',time:10,color:'mint',words:['w34','w35','w36'],note:'Die Endung passt sich häufig dem Geschlecht an. Die App zeigt deshalb bei wichtigen Wendungen beide gebräuchlichen Formen.'}
];

const letters=[
{char:'ا',name:'Alif',sound:'ā / a',forms:'ا · ـا',tip:'Verbindet sich nicht mit dem folgenden Buchstaben.'},
{char:'ب',name:'Bā',sound:'b',forms:'ب · بـ · ـبـ · ـب',tip:'Ein Punkt unter der Grundform.'},
{char:'ت',name:'Tā',sound:'t',forms:'ت · تـ · ـتـ · ـت',tip:'Zwei Punkte über der Grundform.'},
{char:'ث',name:'Thā',sound:'th',forms:'ث · ثـ · ـثـ · ـث',tip:'Drei Punkte über der Grundform.'},
{char:'ج',name:'Jīm',sound:'dsch',forms:'ج · جـ · ـجـ · ـج',tip:'Im Libanesischen meist wie deutsches „Dsch“.'},
{char:'ح',name:'Hā',sound:'ḥ',forms:'ح · حـ · ـحـ · ـح',tip:'Ein kräftiges, gehauchtes H aus dem Rachen.'},
{char:'خ',name:'Khā',sound:'kh',forms:'خ · خـ · ـخـ · ـخ',tip:'Wie „ch“ in Bach, etwas weiter hinten.'},
{char:'د',name:'Dāl',sound:'d',forms:'د · ـد',tip:'Verbindet sich nicht mit dem folgenden Buchstaben.'},
{char:'ر',name:'Rā',sound:'r',forms:'ر · ـر',tip:'Leicht gerolltes oder angeschlagenes R.'},
{char:'م',name:'Mīm',sound:'m',forms:'م · مـ · ـمـ · ـم',tip:'Eine häufige Form am Wortanfang.'}
];

const scenarios=[
{id:'cafe',label:'☕ Im Café',partner:'Rami',place:'Café in Beirut',opening:{ar:'أهلا! شو بتحب تشرب؟',latin:'Ahla! Schu btehebb tischrab?',de:'Hallo! Was möchtest du trinken?'},responses:[{ar:'بدي قهوة، لو سمحت',latin:'Baddé ahwe, law samaht',de:'Ich möchte einen Kaffee, bitte.'},{ar:'بدي مي، شكراً',latin:'Baddé mayy, schukran',de:'Ich möchte Wasser, danke.'},{ar:'شو بتنصحني؟',latin:'Schu btinsahné?',de:'Was empfiehlst du mir?'}]},
{id:'family',label:'🏠 Bei Familie',partner:'Maya',place:'Familienbesuch',opening:{ar:'أهلا وسهلا! كيف العيلة؟',latin:'Ahla w sahla! Kif el-ʿayle?',de:'Willkommen! Wie geht es der Familie?'},responses:[{ar:'كلّن منيح، الحمدلله',latin:'Killon mnāh, el-hamdella',de:'Allen geht es gut, Gott sei Dank.'},{ar:'مشتاقينلكن كتير',latin:'Mischtāʾīnlikon ktīr',de:'Wir vermissen euch sehr.'},{ar:'هيدي مرتي',latin:'Haydé marté',de:'Das ist meine Frau.'}]},
{id:'taxi',label:'🚕 Im Taxi',partner:'Nadim',place:'Unterwegs in Beirut',opening:{ar:'لوين رايح؟',latin:'La-wēn rāyeh?',de:'Wohin fährst du?'},responses:[{ar:'عالحمرا، لو سمحت',latin:'ʿal-Hamra, law samaht',de:'Nach Hamra, bitte.'},{ar:'قديش بدها وقت؟',latin:'Addē badda waʾt?',de:'Wie lange dauert es?'},{ar:'وقّف هون لو سمحت',latin:'Waʾʾif hōn, law samaht',de:'Halten Sie bitte hier.'}]},
{id:'market',label:'🧺 Auf dem Markt',partner:'Salma',place:'Souk',opening:{ar:'تفضّل! شو بدّك؟',latin:'Tfaddal! Schu baddak?',de:'Bitte sehr! Was möchtest du?'},responses:[{ar:'قديش حق هيدا؟',latin:'Addē haʾ hayda?',de:'Wie viel kostet das?'},{ar:'بدي كيلو، لو سمحت',latin:'Baddé kīlo, law samaht',de:'Ich möchte ein Kilo, bitte.'},{ar:'غالي شوي',latin:'Ghālé schway',de:'Etwas teuer.'}]}
];

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const safeParse=(value,fallback)=>{try{return JSON.parse(value)||fallback}catch{return fallback}};
const escapeHtml=value=>{const node=document.createElement('div');node.textContent=String(value);return node.innerHTML};
const state={
  custom:safeParse(localStorage.getItem('yalla-custom-words'),[]),
  known:new Set(safeParse(localStorage.getItem('yalla-known'),[])),
  lessons:new Set(safeParse(localStorage.getItem('yalla-lessons'),[])),
  minutes:Number(localStorage.getItem('yalla-minutes')||0),
  practice:Number(localStorage.getItem('yalla-practice')||0),
  category:'Alle',search:'',cardIndex:0,quiz:null,quizCorrect:0,quizTotal:0,scenario:'cafe',dialogueStep:0
};
const allWords=()=>[...state.custom,...coreWords];
const saveState=()=>{localStorage.setItem('yalla-custom-words',JSON.stringify(state.custom));localStorage.setItem('yalla-known',JSON.stringify([...state.known]));localStorage.setItem('yalla-lessons',JSON.stringify([...state.lessons]));localStorage.setItem('yalla-minutes',String(state.minutes));localStorage.setItem('yalla-practice',String(state.practice))};
const getWord=id=>allWords().find(word=>word.id===id);

function applyTheme(theme){document.documentElement.dataset.theme=theme;const dark=theme==='dark';$('#themeToggle').setAttribute('aria-pressed',String(dark));$('#themeToggle').setAttribute('aria-label',dark?'Hellmodus einschalten':'Dunkelmodus einschalten');$('#themeToggle span').textContent=dark?'☀':'☾';$('#themeColor').content=dark?'#091915':'#102f29'}
function showView(id){$$('.view').forEach(view=>view.classList.toggle('active-view',view.id===id));$$('[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view===id));history.replaceState(null,'','#'+id);window.scrollTo({top:0,behavior:'smooth'});if(id==='practice'&&!state.quiz)newQuiz();if(id==='speak')renderScenario()}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2200)}
let activeAudio=null;
function speak(text,rate=.78){
  const audioFile=window.YALLA_AUDIO&&window.YALLA_AUDIO[text];
  if(audioFile){
    if(activeAudio){activeAudio.pause();activeAudio.currentTime=0}
    activeAudio=new Audio(audioFile);
    activeAudio.playbackRate=Math.min(1.15,Math.max(.65,rate/.78));
    activeAudio.play().catch(()=>toast('Ton blockiert – tippe noch einmal auf ▶.'));
    return;
  }
  if('speechSynthesis'in window){
    speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(text);
    const voices=speechSynthesis.getVoices();
    utterance.voice=voices.find(voice=>voice.lang.toLowerCase()==='ar-lb')||voices.find(voice=>voice.lang.toLowerCase().startsWith('ar'))||null;
    utterance.lang=utterance.voice?utterance.voice.lang:'ar-LB';
    utterance.rate=rate;
    utterance.onerror=()=>toast('Diese Aussprache konnte nicht geladen werden.');
    speechSynthesis.speak(utterance);
    return;
  }
  toast('Für dieses eigene Wort ist noch keine Aufnahme vorhanden.');
}

function renderStats(){const total=coreWords.length+lessons.length;const done=state.known.size+state.lessons.size;const percent=Math.min(100,Math.round(done/total*100));$('#progressPercent').textContent=percent+'%';$('#progressRing').style.setProperty('--progress',(percent*3.6)+'deg');$('#knownStat').textContent=state.known.size;$('#lessonStat').textContent=state.lessons.size;$('#minuteStat').textContent=state.minutes;$('#pathProgress').textContent=state.lessons.size+' / '+lessons.length;$('#dailyCounter').textContent=Math.min(3,Math.ceil((state.practice+state.lessons.size)/2))+' / 3';$('#dueWords').textContent=Math.max(4,10-state.known.size)+' Wörter sind heute fällig';const days=['Mo','Di','Mi','Do','Fr','Sa','So'];const today=(new Date().getDay()+6)%7;$('#weekChart').innerHTML=days.map((day,i)=>'<div class="day-bar '+(i<today?'done ':'')+(i===today?'today':'')+'"><i style="height:'+(18+((i*13+state.practice*9)%70))+'px"></i><b>'+day+'</b></div>').join('')}
function renderModules(){$('#moduleGrid').innerHTML=lessons.map(lesson=>'<button class="module-card '+(state.lessons.has(lesson.id)?'completed':'')+'" data-lesson="'+lesson.id+'"><span class="module-index">'+lesson.n+'</span><h3>'+lesson.title+'</h3><p>'+lesson.sub+'</p><div class="module-meta"><span>'+lesson.words.length+' Wörter</span><span>'+lesson.time+' Min · Öffnen →</span></div></button>').join('');const phraseIds=['w3','w13','w18'];$('#dailyPhrases').innerHTML=phraseIds.map(id=>{const w=getWord(id);return '<button class="phrase-button" data-speak="'+escapeHtml(w.ar)+'"><strong lang="ar" dir="rtl">'+w.ar+'</strong><span>'+w.latin+'</span><small>'+w.de+'</small></button>'}).join('')}
function openLesson(id){const lesson=lessons.find(item=>item.id===id);if(!lesson)return;const words=lesson.words.map(getWord).filter(Boolean);$('#lessonContent').innerHTML='<div class="lesson-hero"><button class="icon-button" data-close="lessonDialog" aria-label="Schließen">×</button><span class="kicker">MODUL '+lesson.n+' · '+lesson.time+' MINUTEN</span><h2>'+lesson.title+'</h2><p>'+lesson.sub+'</p></div><div class="lesson-body"><p>'+lesson.note+'</p>'+words.map(word=>'<button class="lesson-phrase phrase-button" data-speak="'+escapeHtml(word.ar)+'"><strong lang="ar" dir="rtl">'+word.ar+'</strong><span>'+word.latin+'</span><small>'+word.de+' · '+word.exDe+'</small></button>').join('')+'<button class="button primary wide" data-complete-lesson="'+lesson.id+'">'+(state.lessons.has(lesson.id)?'✓ Abgeschlossen':'Lektion abschließen')+'</button></div>';$('#lessonDialog').showModal()}

function categories(){return ['Alle',...new Set(allWords().map(word=>word.cat))]}
function filteredWords(){const q=state.search.toLowerCase();return allWords().filter(word=>(state.category==='Alle'||word.cat===state.category)&&(!q||[word.ar,word.latin,word.de].some(value=>value.toLowerCase().includes(q))))}
function renderVocab(){const cats=categories();$('#categoryFilters').innerHTML=cats.map(cat=>'<button class="'+(cat===state.category?'active':'')+'" data-category="'+escapeHtml(cat)+'">'+escapeHtml(cat)+'</button>').join('');const words=filteredWords();$('#vocabCount').textContent=words.length+' von '+allWords().length+' Wörtern';$('#wordList').innerHTML=words.length?words.map(word=>'<article class="word-row"><div class="arabic" lang="ar" dir="rtl">'+escapeHtml(word.ar)+'</div><div class="latin">'+escapeHtml(word.latin)+'</div><div class="translation">'+escapeHtml(word.de)+'<small> · '+escapeHtml(word.cat)+'</small></div><div class="word-actions"><button data-speak="'+escapeHtml(word.ar)+'" aria-label="Anhören">▶</button><button data-known="'+word.id+'" aria-label="Als gelernt markieren">'+(state.known.has(word.id)?'✓':'○')+'</button>'+(word.custom?'<button data-delete="'+word.id+'" aria-label="Löschen">×</button>':'')+'</div></article>').join(''):'<div class="panel empty-state">Keine Wörter gefunden.</div>'}
function startCards(){state.cardIndex=0;$('#flashcardArea').hidden=false;$('#wordList').hidden=true;$('#startCards').textContent='Liste anzeigen';showCard();$('#flashcardArea').scrollIntoView({behavior:'smooth',block:'center'})}
function stopCards(){$('#flashcardArea').hidden=true;$('#wordList').hidden=false;$('#startCards').textContent='Lernkarten'}
function showCard(){const words=allWords();const word=words[state.cardIndex%words.length];$('#cardPosition').textContent=(state.cardIndex%words.length+1)+' / '+words.length;$('#cardArabic').textContent=word.ar;$('#cardLatin').textContent=word.latin;$('#cardGerman').textContent=word.de;$('#cardExample').textContent=word.exDe||'Dein eigenes Wort';$('#cardAnswer').hidden=true;$('#cardRatings').hidden=true;$('#revealCard').hidden=false;$('#speakCard').dataset.speak=word.ar;$('#flashcard').dataset.word=word.id}

function renderLetters(){$('#letterGrid').innerHTML=letters.map((letter,i)=>'<button class="letter-button '+(i===0?'active':'')+'" data-letter="'+i+'" lang="ar">'+letter.char+'</button>').join('');showLetter(0)}
function showLetter(index){const letter=letters[index];$$('[data-letter]').forEach((button,i)=>button.classList.toggle('active',i===index));$('#letterDetail').innerHTML='<div class="big-letter" lang="ar">'+letter.char+'</div><div><span class="kicker coral">'+letter.name.toUpperCase()+'</span><h3>'+letter.forms+' · '+letter.sound+'</h3><p>'+letter.tip+'</p><button class="button secondary" data-speak="'+letter.char+'">▶ Laut anhören</button></div>'}
function newQuiz(){const words=allWords();const answer=words[Math.floor(Math.random()*words.length)];const distractors=words.filter(word=>word.id!==answer.id).sort(()=>Math.random()-.5).slice(0,3);state.quiz={answer,options:[answer,...distractors].sort(()=>Math.random()-.5),answered:false};$('#quizArabic').textContent=answer.ar;$('#quizLatin').textContent=answer.latin;$('#quizOptions').innerHTML=state.quiz.options.map(word=>'<button data-answer="'+word.id+'">'+escapeHtml(word.de)+'</button>').join('');$('#quizFeedback').textContent='';$('#nextQuiz').hidden=true;$('#speakQuiz').dataset.speak=answer.ar;$('#quizScore').textContent=state.quizCorrect+' richtig';$('#sessionScore').textContent=state.quizCorrect+' / '+state.quizTotal}
function answerQuiz(id){if(!state.quiz||state.quiz.answered)return;state.quiz.answered=true;state.quizTotal++;state.practice++;const correct=id===state.quiz.answer.id;if(correct){state.quizCorrect++;state.known.add(state.quiz.answer.id);$('#quizFeedback').textContent='Richtig – '+state.quiz.answer.exDe;toast('Stark! Wort als gelernt markiert.')}else{$('#quizFeedback').textContent='Richtig wäre: '+state.quiz.answer.de}$$('[data-answer]').forEach(button=>{button.disabled=true;if(button.dataset.answer===state.quiz.answer.id)button.classList.add('correct');else if(button.dataset.answer===id)button.classList.add('wrong')});$('#nextQuiz').hidden=false;saveState();renderStats();$('#quizScore').textContent=state.quizCorrect+' richtig';$('#sessionScore').textContent=state.quizCorrect+' / '+state.quizTotal}

function renderScenario(){const scenario=scenarios.find(item=>item.id===state.scenario);$('#scenarioTabs').innerHTML=scenarios.map(item=>'<button class="'+(item.id===state.scenario?'active':'')+'" data-scenario="'+item.id+'">'+item.label+'</button>').join('');$('#scenarioPartner').textContent=scenario.partner;$('#scenarioPlace').textContent=scenario.place;$('#conversation').innerHTML='<div class="message"><button data-speak="'+escapeHtml(scenario.opening.ar)+'">▶ Anhören</button><p class="arabic" lang="ar" dir="rtl">'+scenario.opening.ar+'</p><p>'+scenario.opening.latin+'</p><small>'+scenario.opening.de+'</small></div>';$('#responseOptions').innerHTML=scenario.responses.map((response,i)=>'<button data-response="'+i+'"><b>'+response.latin+'</b><br><small>'+response.de+'</small></button>').join('');$('#targetPhrase').textContent='Wähle im Dialog eine Antwort aus.';$('#speechResult').textContent='Deine erkannte Antwort erscheint hier.'}
function chooseResponse(index){const scenario=scenarios.find(item=>item.id===state.scenario);const response=scenario.responses[index];$('#conversation').insertAdjacentHTML('beforeend','<div class="message me"><button data-speak="'+escapeHtml(response.ar)+'">▶ Anhören</button><p class="arabic" lang="ar" dir="rtl">'+response.ar+'</p><p>'+response.latin+'</p><small>'+response.de+'</small></div><div class="message"><p class="arabic" lang="ar" dir="rtl">ممتاز!</p><p>Mumtāz!</p><small>Ausgezeichnet!</small></div>');$('#responseOptions').innerHTML='<button data-reset-dialog>↺ Gespräch noch einmal</button>';$('#targetPhrase').textContent=response.ar+' · '+response.latin;$('#recordButton').dataset.target=response.ar;speak(response.ar);state.practice++;saveState();renderStats();setTimeout(()=>{$('#conversation').scrollTop=$('#conversation').scrollHeight},50)}
function playDialogue(){const scenario=scenarios.find(item=>item.id===state.scenario);const texts=[scenario.opening.ar,...scenario.responses.map(item=>item.ar)];let i=0;const next=()=>{if(i>=texts.length)return;const text=texts[i++];const file=window.YALLA_AUDIO&&window.YALLA_AUDIO[text];if(file){if(activeAudio)activeAudio.pause();activeAudio=new Audio(file);activeAudio.playbackRate=.96;activeAudio.onended=()=>setTimeout(next,250);activeAudio.play().catch(()=>toast('Ton blockiert – tippe noch einmal.'));return}if('speechSynthesis'in window){const u=new SpeechSynthesisUtterance(text);u.lang='ar-LB';u.rate=.75;u.onend=next;speechSynthesis.speak(u);return}toast('Aussprache ist für diesen Satz nicht verfügbar.')};if(activeAudio)activeAudio.pause();if('speechSynthesis'in window)speechSynthesis.cancel();next()}
function recordSpeech(){const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Recognition){$('#speechResult').textContent='Spracherkennung ist in diesem Browser nicht verfügbar. Nutze Chrome/Android oder sprich den Satz nach dem Anhören laut nach.';return}const recognition=new Recognition();recognition.lang='ar-LB';recognition.interimResults=false;recognition.maxAlternatives=1;$('#recordButton').classList.add('listening');$('#speechResult').textContent='Ich höre zu …';recognition.onresult=event=>{$('#speechResult').innerHTML='<strong>Erkannt:</strong><br>'+escapeHtml(event.results[0][0].transcript);state.practice++;saveState();renderStats()};recognition.onerror=()=>{$('#speechResult').textContent='Nicht klar erkannt. Hör den Satz noch einmal an und versuche es erneut.'};recognition.onend=()=>$('#recordButton').classList.remove('listening');recognition.start()}

document.addEventListener('click',event=>{
  const view=event.target.closest('[data-view]');if(view){event.preventDefault();showView(view.dataset.view);return}
  const close=event.target.closest('[data-close]');if(close){$('#'+close.dataset.close).close();return}
  const speakButton=event.target.closest('[data-speak]');if(speakButton){speak(speakButton.dataset.speak);return}
  const lesson=event.target.closest('[data-lesson]');if(lesson){openLesson(lesson.dataset.lesson);return}
  const complete=event.target.closest('[data-complete-lesson]');if(complete){state.lessons.add(complete.dataset.completeLesson);state.minutes+=10;saveState();renderAll();$('#lessonDialog').close();toast('Lektion abgeschlossen – stark!');return}
  const category=event.target.closest('[data-category]');if(category){state.category=category.dataset.category;renderVocab();return}
  const known=event.target.closest('[data-known]');if(known){state.known.has(known.dataset.known)?state.known.delete(known.dataset.known):state.known.add(known.dataset.known);saveState();renderVocab();renderStats();return}
  const remove=event.target.closest('[data-delete]');if(remove){state.custom=state.custom.filter(word=>word.id!==remove.dataset.delete);saveState();renderVocab();toast('Wort entfernt.');return}
  const rating=event.target.closest('[data-rating]');if(rating){const id=$('#flashcard').dataset.word;if(rating.dataset.rating==='known')state.known.add(id);state.practice++;state.cardIndex++;saveState();renderStats();showCard();return}
  const answer=event.target.closest('[data-answer]');if(answer){answerQuiz(answer.dataset.answer);return}
  const letter=event.target.closest('[data-letter]');if(letter){showLetter(Number(letter.dataset.letter));return}
  const practice=event.target.closest('[data-practice]');if(practice){$$('[data-practice]').forEach(button=>button.classList.toggle('active',button===practice));$('#quizPanel').classList.toggle('active-practice',practice.dataset.practice==='quiz');$('#scriptPanel').classList.toggle('active-practice',practice.dataset.practice==='script');return}
  const scenario=event.target.closest('[data-scenario]');if(scenario){state.scenario=scenario.dataset.scenario;renderScenario();return}
  const response=event.target.closest('[data-response]');if(response){chooseResponse(Number(response.dataset.response));return}
  if(event.target.closest('[data-reset-dialog]')){renderScenario()}
});

$('#themeToggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';localStorage.setItem('yalla-theme',next);applyTheme(next)});
$('#addWord').addEventListener('click',()=>$('#wordDialog').showModal());
$('#wordForm').addEventListener('submit',event=>{event.preventDefault();state.custom.unshift({id:'custom-'+Date.now(),ar:$('#arabicInput').value.trim(),latin:$('#latinInput').value.trim(),de:$('#germanInput').value.trim(),cat:$('#categoryInput').value,ex:'',exDe:'',custom:true});saveState();event.target.reset();$('#wordDialog').close();renderVocab();toast('Wort zu deiner Sammlung hinzugefügt.')});
$('#wordSearch').addEventListener('input',event=>{state.search=event.target.value;renderVocab()});
$('#startCards').addEventListener('click',()=>$('#flashcardArea').hidden?startCards():stopCards());
$('#revealCard').addEventListener('click',()=>{$('#cardAnswer').hidden=false;$('#cardRatings').hidden=false;$('#revealCard').hidden=true});
$('#nextQuiz').addEventListener('click',newQuiz);
$('#recordButton').addEventListener('click',recordSpeech);
$('#playDialogue').addEventListener('click',playDialogue);

function renderAll(){applyTheme(document.documentElement.dataset.theme||'light');renderStats();renderModules();renderVocab();renderLetters();renderScenario()}
renderAll();showView(location.hash.slice(1)||'dashboard');
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js?v=4');
