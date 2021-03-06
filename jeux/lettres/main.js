var rg;
var bg;
var ltr;
var timer;
var maxTime;
var hasStarted;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  bg = new Colors(2, 220, 500);
  ltr = new Letters(window.innerWidth/4, 150, 55);

  maxTime = 10;
  timer = maxTime;

}

function draw() {
  if (hasStarted) {
    bg.update();
    bg.timer();
  }
}

function keyPressed(){
  bg.randomize();
  ltr.type();
  timer = maxTime;
  hasStarted = true;
}

class Colors {

  constructor(alpha, gray, diameter){
    this.a = alpha;
    this.d = diameter;
    this.gray = gray;

    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  update(){
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipse(random(0,window.innerWidth), random(0,window.innerHeight),this.d);
  }

  randomize(){
    this.r = int(random(0,255));
    this.g = int(random(0,255));
    this.b = int(random(0,255));
  }

  timer(){
    if (timer <= 0) {
      bg.monochrome();
    } else if(frameCount % 60 == 0 && timer > 0){
      timer --;
    }
  }

  monochrome(){
    this.r = this.gray;
    this.g = this.gray;
    this.b = this.gray;
  }

}

class Letters {

  constructor(inlineX, inlineY, textBounds){
    this.i = 0;
    this.j = 0;
    this.x = 10;
    this.y = 10;

    this.inlineX = inlineX;
    this.inlineY = inlineY;
    this.textBounds = textBounds;
    this.charCount = 0;
    this.message = "";
    this.lines = [];

    rg = new RiGrammar();

    rg.addRule('<start>','<1> | <2> | <3> | <4> | <5> | <6> | <7> | <8> | <9>');

    rg.addRule('<1>','<v_impe> ce que ça fait quand ça arrive ici. <v_impe> à cette sensation des <n_fp> qui ramollissent en toi, profite de cette émotion délicieuse, <v_impe>. <v_impe>. Ce n’est pas fini. ça va <v_infi> encore.');
    rg.addRule('<2>','laisse ton ventre <v_infi> à ce <n_ms> <adj_ms> qui, depuis si longtemps, ne te tombait plus dessus, <v_impe> de ces <n_mp> de <n_fs> que tu n’<v2s_impa> plus et qui te donnent la chair de poule et qui ouvrent sans effort ton <n_ms> à cette <n_fs> qui est <adj_ms> et que tu ne <v2s_impa> plus, il n’est même plus question de <n_ms>, nous sommes de l’autre côté maintenant, tout ça ne fait que <v_infi> mais tu es déjà <v_pc> pour toujours, <v_impe>.');
    rg.addRule('<3>','n’essaie pas encore d’affirmer <n_ms>, <v_impe> plus loin encore, <v_impe>, voilà, tu es <adj_ms>, <v_impe>, <v_impe>, tu es <adj_ms>.');
    rg.addRule('<4>','maintenant surtout ne te retiens pas, laisse-toi <v_infi> par ce <n_ms> exquis qui valse de <n_mp> aussi colorés que les <n_mp> de la jungle, <v_impe> pendant des jours, <v_impe> en plein soleil, et quand tu en auras assez tu te <v2s_fut> encore et tu <v2s_fut> encore et tu <v2s_fut> encore. je n’en ai pas <v_pc> avec toi. tu vois ? Il y a plein de <n_fp> intéressantes sur le chemin.');
    rg.addRule('<5>','ne va pas te dépêcher à <v_infi>. une seule règle : ne pas <v_infi> par la <n_fs>. on regarde cet homme qu’on aime et il ne nous appartient pas et il ne nous appartiendra jamais et il s’appartient et il est <adj_ms> et <adj_ms>, il est <adj_ms>, maintenant, il est <adj_ms> et peut-être pas plus tard et c’est maintenant et pas demain qu’il nous faut <v_infi> de lui.');
    rg.addRule('<6>','il n’est pas un <n_ms> dans le salon de notre vie <adj_fs>, il n’est pas un <n_ms> dans notre parti, il n’est pas quelque chose qu’il faille <v_infi> et <v_infi> quelque part comme un <n_ms> empaillé. à quoi bon <v_infi> du futur en s’entourant de toutes sortes de <n_fp> si nous sommes incapables de <v_infi> de la présence de l’autre aujourd’hui.');
    rg.addRule('<7>','pourquoi vouloir être le <n_ms> ? Pourquoi t’en assurer jusqu’à <v_infi> secrètement dans mes <n_mp> comme si tu étais la NSA ? si je suis <adj_ms> et que je suis mes <n_mp>, tu me trouveras plus <adj_fs>, plus <adj_fs>, plus <adj_fs>. plus <adj_fs>. tu m’aimeras et me <v2s_fut> encore davantage. pourquoi me demander de rendre les armes et d’abandonner la <n_fs> que j’ai de te <v_infi>?');
    rg.addRule('<8>','les <n_fp> amoureuses dans lesquelles je <v2s_impa> répondaient toutes à ma quête d’un partage entre deux <n_mp> qui serait absolument <adj_ms> et <adj_ms>. au début, j’<v2s_impa> que cela était compatible avec le <n_ms>. mais puisque j’enchainais les <n_fp> de trois ans en trois ans, j’ai baissé mes <n_fp>, dans l’espoir que mes <n_fp> tiennent. et mon <n_ms> s’est tordu.');
