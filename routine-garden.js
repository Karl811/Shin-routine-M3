/* M3.3.5: local-time scenery, independent of learner data and achievement. */
var GARDEN_RENDER=false,GARDEN_SCENE=null,GARDEN_SEQ=0,GARDEN_TIMER=null;
function gardenSceneAt(date){
  var h=date.getHours(),time=h>=5&&h<8?'dawn':h>=8&&h<16?'day':h>=16&&h<18?'dusk':'night';
  var day=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000),slot=day*6+Math.floor(h/4),cycle=['clear','cloudy','clear','rain','cloudy','clear','rain','clear','cloudy','rain','storm','cloudy','clear','clear','rain','clear'];
  var weather=cycle[((slot%cycle.length)+cycle.length)%cycle.length];
  return {time:time,weather:weather,key:time+'-'+weather};
}
function gardenLabel(scene){return ({dawn:'Bình minh',day:'Ban ngày',dusk:'Hoàng hôn',night:'Ban đêm'})[scene.time]+' · '+({clear:'trời quang',cloudy:'mây nhẹ',rain:'mưa nhỏ',storm:'giông bão'})[scene.weather];}
function gardenCloud(x,y,s,opacity){return '<g transform="translate('+x+' '+y+') scale('+s+')"><g class="garden-cloud" opacity="'+opacity+'"><path d="M-30 12C-42 12-42-3-30-5C-31-23-8-27 1-14C9-25 29-17 26-3C44-4 43 14 30 14H-30Z"/></g></g>';}
function gardenGrass(){var out='<g class="garden-grass" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">';[[47,359],[85,365],[117,359],[300,362],[349,356],[378,366]].forEach(function(p){var x=p[0],y=p[1];out+='<path d="M'+x+' '+y+'q-2-8-5-10m5 10q0-13 4-15m-4 15q5-7 8-8"/>';});out+='</g>';[[72,362],[99,370],[331,361]].forEach(function(p){var x=p[0],y=p[1];out+='<g class="garden-flower"><path d="M'+x+' '+y+'v-8" stroke="var(--garden-grass)"/><g fill="var(--garden-flower)"><circle cx="'+(x-2)+'" cy="'+(y-10)+'" r="2.2"/><circle cx="'+(x+2)+'" cy="'+(y-10)+'" r="2.2"/><circle cx="'+x+'" cy="'+(y-13)+'" r="2.2"/><circle cx="'+x+'" cy="'+(y-8)+'" r="2.2"/></g><circle cx="'+x+'" cy="'+(y-10)+'" r="1.2" fill="#CEB988"/></g>';});return out;}
function gardenBack(scene,uid){
  var night=scene.time==='night',rain=scene.weather==='rain'||scene.weather==='storm',cloudy=scene.weather!=='clear';
  var out='<defs><linearGradient id="'+uid+'-sky" x2="0" y2="1"><stop class="garden-sky-top"/><stop offset="1" class="garden-sky-bottom"/></linearGradient><radialGradient id="'+uid+'-glow"><stop stop-color="#FFF0CA" stop-opacity=".45"/><stop offset="1" stop-color="#FFF0CA" stop-opacity="0"/></radialGradient><linearGradient id="'+uid+'-edge"><stop stop-color="#000"/><stop offset=".17" stop-color="#FFF"/><stop offset=".83" stop-color="#FFF"/><stop offset="1" stop-color="#000"/></linearGradient><linearGradient id="'+uid+'-floor" x2="0" y2="1"><stop offset=".91" stop-color="#FFF"/><stop offset="1" stop-color="#000"/></linearGradient><mask id="'+uid+'-edge-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="420" height="390"><rect width="420" height="390" fill="url(#'+uid+'-edge)"/></mask><mask id="'+uid+'-floor-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="420" height="390"><rect width="420" height="390" fill="url(#'+uid+'-floor)"/></mask></defs>';
  if(night){
    out+='<g class="garden-moon" opacity="'+(rain?.4:cloudy?.65:1)+'"><circle class="garden-celestial-glow" cx="349" cy="54" r="43" fill="url(#'+uid+'-glow)"/><circle class="garden-moon-halo" cx="349" cy="54" r="27" fill="#F6F2DF" opacity=".07"/><path d="M355 34A19 19 0 1 0 366 64A21 21 0 0 1 355 34Z" fill="#F8F2DB"/></g>';
    [[39,43],[89,80],[143,30],[186,63],[285,26],[391,109],[321,89],[51,159],[376,211],[110,119]].forEach(function(p,i){var x=p[0],y=p[1];out+='<g class="garden-star" style="--garden-delay:-'+(i*.47)+'s" opacity="'+(rain?.2:cloudy?.4:.7)+'"><circle cx="'+x+'" cy="'+y+'" r="'+(i%3===0?1.5:1)+'"/>'+(i%3===0?'<path d="M'+(x-3)+' '+y+'h6M'+x+' '+(y-3)+'v6" stroke="currentColor" stroke-width=".6"/>':'')+'</g>';});
  }else{
    var y=scene.time==='dusk'?275:scene.time==='dawn'?100:55;
    out+='<g class="garden-sun" opacity="'+(rain?.14:cloudy?.32:.8)+'"><circle class="garden-celestial-glow" cx="68" cy="'+y+'" r="65" fill="url(#'+uid+'-glow)"/><circle cx="68" cy="'+y+'" r="17" fill="var(--garden-sun)"/></g>';
    if(!rain)out+='<path class="garden-birds" d="M142 43q5-5 10 0q5-5 10 0m-17 9q3-3 6 0q3-3 6 0" fill="none" stroke="currentColor" stroke-width="1.2"/>';
  }
  out+='<g class="garden-clouds">'+(cloudy?gardenCloud(74,56,1.4,rain?.5:.32)+gardenCloud(208,39,1.7,rain?.34:.22)+gardenCloud(351,65,1.4,rain?.44:.28):gardenCloud(120,91,.9,night?.15:.58)+gardenCloud(344,65,.7,night?.12:.62))+'</g><g mask="url(#'+uid+'-edge-mask)"><g mask="url(#'+uid+'-floor-mask)"><path d="M0 346Q75 325 150 348T300 346T420 343V390H0Z" fill="var(--garden-ground)" opacity=".3"/><path d="M0 368Q100 348 215 363T420 358V390H0Z" fill="var(--garden-ground)" opacity=".4"/></g></g>';
  return out;
}
function gardenFront(scene){
  var out=gardenGrass();if(scene.weather==='storm')out+='<g class="garden-lightning"><ellipse cx="85" cy="78" rx="40" ry="43" fill="#F5F2D8" opacity=".04"/><path d="M89 50l-10 20 9-1-8 24 18-30-10 1 8-14" fill="#ECE9CF" opacity=".35"/></g>';
  if(scene.weather==='rain'||scene.weather==='storm'){
    out+='<g class="garden-rain" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1">';
    for(var i=0;i<(scene.weather==='storm'?44:28);i++){var x=18+(i*67)%392,y=90+(i*53)%236;out+='<path class="garden-rain-streak" style="--garden-delay:-'+(i*.17).toFixed(2)+'s" d="M'+x+' '+y+'l-2 9"/>';}
    [62,130,286,359].forEach(function(x,i){out+='<g class="garden-splash" style="--garden-delay:-'+(i*.68)+'s"><path d="M'+(x-5)+' 360q-5-7-6-5m13 6q5-7 6-5m-9 1q-1-7-2-7"/></g><ellipse class="garden-ripple" style="--garden-delay:-'+(i*.78)+'s" cx="'+x+'" cy="362" rx="9" ry="1.6"/>';});out+='</g>';
  }
  if(scene.time==='night')[[110,366,1],[313,363,-1],[369,374,1]].forEach(function(p,i){out+='<g class="garden-cricket" transform="translate('+p[0]+' '+p[1]+') scale('+p[2]+' 1)"><ellipse cx="0" cy="0" rx="3.8" ry="1.6"/><circle cx="3.5" cy="-1" r="1.5"/><path d="M-1 0l-3-5 6 6m-3 0-5 2m7-3 3 3m0-5 4-4m-3 4 5-1" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round"/></g>';});
  return out;
}
function gardenDecorate(svg,scene){var uid='garden-'+(++GARDEN_SEQ);return svg.replace(/(<svg\b[^>]*>)/,'$1<g class="garden-back" aria-hidden="true" pointer-events="none">'+gardenBack(scene,uid)+'</g>').replace(/<\/svg>$/,'<g class="garden-front" aria-hidden="true" pointer-events="none">'+gardenFront(scene)+'</g></svg>');}
var gardenTreeSVG=treeSVG;
treeSVG=function(fresh,interactive){var svg=gardenTreeSVG(fresh,interactive);return GARDEN_RENDER&&interactive?gardenDecorate(svg,GARDEN_SCENE):svg;};
var gardenTreePanel=treePanel;
treePanel=function(){GARDEN_SCENE=gardenSceneAt(new Date());GARDEN_RENDER=true;try{var h=gardenTreePanel();return h.replace('class="m3-tree-panel ','data-garden-time="'+GARDEN_SCENE.time+'" data-garden-weather="'+GARDEN_SCENE.weather+'" data-garden-key="'+GARDEN_SCENE.key+'" class="m3-tree-panel garden-panel ');}finally{GARDEN_RENDER=false;}};
/* Update only scenery at boundaries; do not rebuild the tree, tags, letters or focus. */
function gardenRefresh(){if(document.hidden||PG!==2)return;var panel=$('.garden-panel');if(!panel)return;var scene=gardenSceneAt(new Date());panel.classList.remove('garden-paused');if(panel.getAttribute('data-garden-key')===scene.key)return;var back=$('.garden-back',panel),front=$('.garden-front',panel);if(!back||!front)return;var uid='garden-'+(++GARDEN_SEQ);back.innerHTML=gardenBack(scene,uid);front.innerHTML=gardenFront(scene);panel.setAttribute('data-garden-time',scene.time);panel.setAttribute('data-garden-weather',scene.weather);panel.setAttribute('data-garden-key',scene.key);GARDEN_SCENE=scene;}
function gardenSchedule(){clearTimeout(GARDEN_TIMER);GARDEN_TIMER=null;var panel=$('.garden-panel');if(document.hidden||PG!==2){if(panel)panel.classList.add('garden-paused');return;}gardenRefresh();GARDEN_TIMER=setTimeout(gardenSchedule,60000);}
var gardenRenderPage=renderPage;
renderPage=function(){gardenRenderPage();gardenSchedule();gardenFitViewport();gardenStormSchedule();};
document.addEventListener('visibilitychange',gardenSchedule);
window.addEventListener('pageshow',gardenSchedule);

/* Fit the first phone view above its navigation; letters stay in normal page scroll. */
var GARDEN_SIZE_OBSERVER=null,GARDEN_SIZE_HEADER=null;
function gardenFitViewport(){var panel=$('.garden-panel');if(!panel||PG!==2)return;var nav=$('#abar'),header=$('#ahd'),vh=window.visualViewport?window.visualViewport.height:window.innerHeight,top=panel.getBoundingClientRect().top+(window.scrollY||0),clearance=96;if(nav){var r=nav.getBoundingClientRect();clearance=r.height+Math.max(0,window.innerHeight-r.bottom);}panel.style.setProperty('--garden-phone-height',Math.max(440,Math.floor(vh-top-clearance-16))+'px');var layout=panel.parentElement;if(layout)layout.style.setProperty('--garden-nav-space',(clearance+32)+'px');if(window.ResizeObserver&&header&&GARDEN_SIZE_HEADER!==header){if(GARDEN_SIZE_OBSERVER)GARDEN_SIZE_OBSERVER.disconnect();GARDEN_SIZE_HEADER=header;GARDEN_SIZE_OBSERVER=new ResizeObserver(gardenFitViewport);GARDEN_SIZE_OBSERVER.observe(header);if(nav)GARDEN_SIZE_OBSERVER.observe(nav);}}
window.addEventListener('resize',gardenFitViewport);
if(window.visualViewport)window.visualViewport.addEventListener('resize',gardenFitViewport);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(gardenFitViewport);

var GARDEN_STORM_TIMER=null,GARDEN_STORM_PANEL=null,GARDEN_RUMBLE=null;
function gardenStormActive(){var panel=$('.garden-panel');return !document.hidden&&PG===2&&!OV&&panel&&panel.getAttribute('data-garden-weather')==='storm'?panel:null;}
function gardenStopRumble(){if(GARDEN_RUMBLE){try{GARDEN_RUMBLE.stop();}catch(e){}GARDEN_RUMBLE=null;}}
function gardenThunder(){if(!gardenStormActive()||!S.sound||!AC||AC.state!=='running')return;try{gardenStopRumble();var duration=1.6,buffer=AC.createBuffer(1,Math.floor(AC.sampleRate*duration),AC.sampleRate),data=buffer.getChannelData(0);for(var i=0;i<data.length;i++)data[i]=(Math.random()*2-1);var source=AC.createBufferSource(),filter=AC.createBiquadFilter(),gain=AC.createGain(),t=AC.currentTime;source.buffer=buffer;filter.type='lowpass';filter.frequency.value=230;gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.04,t+.22);gain.gain.exponentialRampToValueAtTime(.001,t+duration);source.connect(filter);filter.connect(gain);gain.connect(AC.destination);source.start(t);source.stop(t+duration);source.onended=function(){source.disconnect();filter.disconnect();gain.disconnect();if(GARDEN_RUMBLE===source)GARDEN_RUMBLE=null;};GARDEN_RUMBLE=source;}catch(e){gardenStopRumble();}}
function gardenStormPulse(){var panel=gardenStormActive();if(!panel||reduceMotion())return;panel.classList.add('garden-flashing');setTimeout(function(){if(gardenStormActive()===panel)gardenThunder();},1100);setTimeout(function(){panel.classList.remove('garden-flashing');},1900);}
function gardenStormTick(){GARDEN_STORM_TIMER=null;var panel=gardenStormActive();if(!panel){gardenStormSchedule();return;}gardenStormPulse();GARDEN_STORM_TIMER=setTimeout(gardenStormTick,45000);}
function gardenStormSchedule(){var panel=$('.garden-panel'),active=!document.hidden&&PG===2&&panel&&panel.getAttribute('data-garden-weather')==='storm'&&!reduceMotion();if(!active){clearTimeout(GARDEN_STORM_TIMER);GARDEN_STORM_TIMER=null;GARDEN_STORM_PANEL=null;gardenStopRumble();return;}if(GARDEN_STORM_PANEL!==panel||GARDEN_STORM_TIMER===null){clearTimeout(GARDEN_STORM_TIMER);GARDEN_STORM_PANEL=panel;GARDEN_STORM_TIMER=setTimeout(gardenStormTick,10000);}}
var gardenRefreshBeforeStorm=gardenRefresh;
gardenRefresh=function(){gardenRefreshBeforeStorm();gardenStormSchedule();};
document.addEventListener('visibilitychange',gardenStormSchedule);
document.addEventListener('click',function(){if(!S||!S.sound){gardenStopRumble();return;}if(PG!==2)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume().catch(function(){});}catch(e){} });
