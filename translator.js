
let corpus = [];
let dir = 'bm2bn';

async function translateExternal(text,targetLang){
  if(targetLang==='bn') return text;
  try{
    const r = await fetch('https://translate.argosopentech.com/translate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        q:text,
        source:'bn',
        target:targetLang,
        format:'text'
      })
    });
    const d = await r.json();
    return d.translatedText || text;
  }catch(e){
    return text;
  }
}

console.log("translator.js loaded. Replace inline script with this file gradually.");
