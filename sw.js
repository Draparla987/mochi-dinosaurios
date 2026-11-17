// Guarda la app en el dispositivo para que funcione sin conexión.
// Varias apps Mochi comparten dirección (draparla987.github.io): cada una solo toca sus cachés (mochidino-…).
const CACHE='mochidino-3e60d6e3dc', FONTS='mochidino-fonts';
const CORE=["./", "index.html", "manifest.webmanifest", "fonts/LICENCIAS.txt", "fonts/andika-latin-704929.woff2", "fonts/andika-latin-c30478.woff2", "fonts/andika-latin-ext-752b9e.woff2", "fonts/andika-latin-ext-edfd9d.woff2", "fonts/baloo2-latin-983902.woff2", "fonts/baloo2-latin-ext-b5a7e4.woff2", "img/av-abeja.png", "img/av-anquilosaurio.png", "img/av-ballena.png", "img/av-braquiosaurio.png", "img/av-buho.png", "img/av-caballo.png", "img/av-carnotauro.png", "img/av-cebra.png", "img/av-cocodrilo.png", "img/av-concavenator.png", "img/av-conejo.png", "img/av-delfin.png", "img/av-dilofosaurio.png", "img/av-dinosaurio.png", "img/av-diplodoco.png", "img/av-elefante.png", "img/av-erizo.png", "img/av-espinosaurio.png", "img/av-estegosaurio.png", "img/av-gallimimo.png", "img/av-gato.png", "img/av-gorila.png", "img/av-iguanodonte.png", "img/av-jirafa.png", "img/av-koala.png", "img/av-leon.png", "img/av-lince.png", "img/av-loro.png", "img/av-mariposa.png", "img/av-mariquita.png", "img/av-mono.png", "img/av-oso.png", "img/av-oviraptor.png", "img/av-panda.png", "img/av-paquicefalosaurio.png", "img/av-parasaurolofo.png", "img/av-perro.png", "img/av-pinguino.png", "img/av-protoceratops.png", "img/av-pulpo.png", "img/av-rana.png", "img/av-terizinosaurio.png", "img/av-tiburon.png", "img/av-tigre.png", "img/av-tiranosaurio.png", "img/av-tortuga.png", "img/av-triceratops.png", "img/av-unicornio.png", "img/av-velocirraptor.png", "img/av-zorro.png", "img/d-alosaurio.webp", "img/d-amargasaurio.webp", "img/d-anquilosaurio.webp", "img/d-argentinosaurio.webp", "img/d-arqueopterix.webp", "img/d-australovenator.webp", "img/d-barionix.webp", "img/d-braquiosaurio.webp", "img/d-brontosaurio.webp", "img/d-carnotauro.webp", "img/d-celofisis.webp", "img/d-compsognato.webp", "img/d-concavenator.webp", "img/d-criolofosaurio.webp", "img/d-demandasaurio.webp", "img/d-dientes-de-sable.webp", "img/d-dilofosaurio.webp", "img/d-dimetrodon.webp", "img/d-diplodoco.webp", "img/d-eoraptor.webp", "img/d-espinosaurio.webp", "img/d-estegosaurio.webp", "img/d-europelta.webp", "img/d-gallimimo.webp", "img/d-gallina.webp", "img/d-giganotosaurio.webp", "img/d-herrerasaurio.webp", "img/d-ictiosaurio.webp", "img/d-iguanodonte.webp", "img/d-maiasaura.webp", "img/d-mamenquisaurio.webp", "img/d-mamut.webp", "img/d-microraptor.webp", "img/d-morelladon.webp", "img/d-mosasaurio.webp", "img/d-oviraptor.webp", "img/d-paquicefalosaurio.webp", "img/d-parasaurolofo.webp", "img/d-pelecanimimo.webp", "img/d-plateosaurio.webp", "img/d-plesiosaurio.webp", "img/d-protoceratops.webp", "img/d-pterodactilo.webp", "img/d-quetzalcoatlus.webp", "img/d-terizinosaurio.webp", "img/d-trex.webp", "img/d-triceratops.webp", "img/d-turiasaurio.webp", "img/d-velocirraptor.webp", "img/e-anquilosaurio.webp", "img/e-braquiosaurio.webp", "img/e-espinosaurio.webp", "img/e-estegosaurio.webp", "img/e-paquicefalosaurio.webp", "img/e-parasaurolofo.webp", "img/e-trex.webp", "img/e-triceratops.webp", "img/e-velocirraptor.webp", "img/epoca-cretacico.webp", "img/epoca-jurasico.webp", "img/epoca-triasico.webp", "img/f-ambar.webp", "img/f-amonites.webp", "img/f-helecho.webp", "img/f-pez.webp", "img/f-tiburon.webp", "img/f-trilobites.webp", "img/huevo-azul.webp", "img/huevo-morado.webp", "img/huevo-naranja.webp", "img/mochi-happy.png", "img/mochi-read.png", "img/mochi-think.png", "img/mochi-wave.png", "img/p-coprolito.webp", "img/p-craneo.webp", "img/p-diente-carne.webp", "img/p-diente-planta.webp", "img/p-garra.webp", "img/p-huella-dos.webp", "img/p-huella-redonda.webp", "img/p-huella-sauropodo.webp", "img/p-huella-tres.webp", "img/p-hueso.webp", "img/p-huevo.webp", "img/p-pico.webp", "img/portada-valle.webp", "img/sec-como.png", "img/sec-conoce.png", "img/sec-cuando.png", "img/sec-paleo.png", "img/t-araucaria.webp", "img/t-asteroide.webp", "img/t-cactus.webp", "img/t-cicada.webp", "img/t-flor.webp", "img/t-helecho.webp", "img/t-mamifero.webp", "img/t-nido.webp", "img/t-personas.webp", "img/v-braquiosaurio.webp", "img/v-estegosaurio.webp", "img/v-pterodactilo.webp", "img/v-trex.webp", "img/v-triceratops.webp", "snd/n-do.mp4", "snd/n-la.mp4", "snd/n-mi.mp4", "snd/n-re.mp4", "snd/n-sol.mp4", "snd/sfx-ko.mp4", "snd/sfx-ok.mp4", "snd/sfx-pop.mp4", "snd/sfx-star.mp4", "snd/sfx-tap.mp4", "snd/sfx-win.mp4", "voz/comun.mp4", "voz/dino-cuando-extra.mp4", "voz/dino-cuando-ui.mp4", "voz/dino-cuando.mp4", "voz/dino-juegos.mp4", "voz/dino-jugador.mp4", "voz/dino-l1.mp4", "voz/dino-l2.mp4", "voz/dino-l3.mp4", "voz/dino-nivel.mp4", "voz/dino-paleo-ui.mp4", "voz/dino-paleo.mp4", "voz/dino-portada.mp4", "voz/dino-ptera.mp4", "voz/dino-ui.mp4", "voz/dino-vf.mp4", "img/icon-180.png", "img/icon-192.png", "img/icon-512.png", "img/icon-maskable-512.png", "vid/premio-cohete.jpg", "vid/premio-como.jpg", "vid/premio-conoce.jpg", "vid/premio-cuando.jpg", "vid/premio-fuego.jpg", "vid/premio-paleo.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('mochidino-')&&k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Safari pide los audios por trozos (Range): se sirven desde la caché con respuesta 206.
// Los últimos archivos leídos se guardan en memoria para que cada trozo salga al momento.
const MEM=new Map();
const bytes=(req,r)=>{
  const k=new URL(req.url).pathname;
  if(!MEM.has(k)){MEM.set(k,r.arrayBuffer().catch(e=>{MEM.delete(k);throw e;}));if(MEM.size>16) MEM.delete(MEM.keys().next().value);}
  return MEM.get(k);
};
const ranged=(req,r)=>{
  const m=/bytes=(\d*)-(\d*)/.exec(req.headers.get('range')||'');
  if(!m||r.status!==200) return r;
  return bytes(req,r).then(b=>{
    const n=b.byteLength, s=m[1]===''?Math.max(0,n-(+m[2]||0)):+m[1], e=(m[1]===''||m[2]==='')?n-1:Math.min(+m[2],n-1);
    if(s>=n) return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+n}});
    return new Response(b.slice(s,e+1),{status:206,headers:{'Content-Type':r.headers.get('Content-Type')||'audio/mp4','Content-Range':'bytes '+s+'-'+e+'/'+n,'Content-Length':String(e-s+1),'Accept-Ranges':'bytes'}});
  });
};
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    if(url.pathname.endsWith('.mp4')&&url.pathname.includes('/vid/')) return;
    if(req.mode==='navigate'){
      // primero la red (para tener la última versión), pero si la wifi va mal se abre la guardada a los 3,5 s
      const net=fetch(req).then(r=>{if(r.ok&&r.type==='basic'){const cp=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));}return r;});
      const cached=()=>caches.match('index.html',{ignoreSearch:true});
      e.respondWith(Promise.race([net.catch(()=>null),new Promise(r=>setTimeout(r,3500,null))]).then(r=>r&&r.ok?r:cached().then(c=>c||r||net)));
      return;
    }
    e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r?ranged(req,r):fetch(req).then(res=>{if(res.status===200){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;})));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open(FONTS).then(c=>c.match(req).then(r=>{const f=fetch(req).then(res=>{c.put(req,res.clone());return res;}).catch(()=>r);return r||f;})));
  }
});
