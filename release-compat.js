/* Current TQ37/M3 exports may retain v:2 from the old demo builder.
   Preserve their modern keep state instead of applying the pre-TQ05 conversion.
   Genuine older exports still follow the original migration. */
var releaseBaseMigrate=migrate;
migrate=function(st){var keep=[];if(st&&/^(TQ37(?:\.|$)|M3(?:-Review)?\.)/.test(String(st.ver||''))&&Array.isArray(st.slots)&&st.slots.length===5)Object.keys(st.habits||{}).forEach(function(id){if(st.habits[id].status==='keep')keep.push(id);});var out=releaseBaseMigrate(st);keep.forEach(function(id){if(out.habits[id])out.habits[id].status='keep';});return out;};
var releaseBaseDemo=buildDemo;
buildDemo=function(){var state=releaseBaseDemo();state.v=5;return state;};
