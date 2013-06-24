

//---------------------------------------------------------------
//$( document ).ready(function() {

// printing out buttons

// VERSION 1: printing out an array
/*
var buttons = [

'<button onclick="funny()">Funny</button>'
,'<button onclick="git()">git</button>'
, '<button onclick="gregoriana()">Gregoriana</button>'
, '<button onclick="health()">Health</button>'
, '<button onclick="html5()">HTML5</button>'
, '<button onclick="its()">IT stuff</button>'
, '<button onclick="itt()">IT terms</button>'
, '<button onclick="java()">Java</button>'
, '<button onclick="js()">JS</button>'
, '<button onclick="latina()">Latina</button>'
, '<button onclick="l10n()">L10N</button>'
, '<button onclick="mus()">Music</button>'
, '<button onclick="nodejs()">Node.js</button>'
, '<button onclick="php()">PHP</button>'
, '<button onclick="p_t()">Preach&Teach</button>'

, '<button onclick="p_w()">P&W</button>'
, '<button onclick="selfdefense()">Self-defense</button>'
, '<button onclick="seneca()">Seneca</button>'
, '<button onclick="tolkiniana()">Tolkieniana</button>'
, '<button onclick="unsorted()">Unsorted</button>'

, '<button onclick="video()">Video</button>'
];

for (var b in buttons){
  document.write(buttons[b] + '<br>');

};
*/

// end of VERSION 1 

//----------------------------------------------------------------------------


// VERSION 2: printing out an object

var buttons = {
  "Funny":"funny()"
  , "Git": "git()"
  , "Gregoriana":"gregoriana()"
  , "Health":"health()"
  , "HTML5":"html5()"
  , "IT stuff":"its()"
  , "IT terms":"itt()"
  , "Java":"java()"
  , "JavaScript":"js()"
  , "Latina":"latina()"
  , "Localization":"l10n()"
  , "Music":"mus()"
  , "Node.js":"nodejs()"
  , "PHP":"php()"
  , "Preach and Teach":"p_t()"
  , "Praise and Worship":"p_w()"
  , "Self-Defense":"selfdefense()"
  , "Seneca":"seneca()"
  , "Tolkieniana":"tolkiniana()"
  , "Unsorted":"unsorted()"
  , "Video":"video()"
};
var keys = [];
var key,f;

for (var key in buttons){
  if (buttons.hasOwnProperty(key)){
    keys.push(key);
  }
}
keys.sort();

for (f = 0; f < keys.length; f++){ 
  key = keys[f];
  document.write('<button onclick="' + buttons[key] + '">' + key + '</button><br>');
}


// end of VERSION 2

// end of Printing buttons out.
//--------------------------------------------------


//--------------------------------------------------
/*
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;
  */
//--------------------------------------------------


//---------------------------------
/*
function hi(){
  document.write("HI!!");
};
*/
//---------------------------------


//-------------------------------------------------
/*

function unsort(){
  document.getElementById("demo").innerHTML = unsort2();
};
var unsort2 = (){

  var unsorted = [
  '<a href="http://www.123greetings.com/" target="_blank">123Greetings</a> <br>'
  , '<a href="http://15kop.ru/" target="_blank">15kop</a> <br>'
  , '<a href="http://www.1812.gc.ca/eng/1305654894724/1305655293741" target="_blank">1812</a><br>'
  , '<a href="https://www.facebook.com/337Rangers" target="_blank">337 Queens York Rangers</a><i> Facebook</i><br>'
  , '<a href="http://337rangerscadets.ca/" target="_blank">337 Queens York Rangers</a><br>'


  , '<hr><b>- A -</b><br>'
  , '<!--A-->'

  , '<a href="https://aw.tdsb.on.ca/TdsbLogin.aspx" target="_blank">Academic Workspace</a><i> </i><br>'
  , '<a href="http://www.accuweather.com/en/ca/north-york/m2m/weather-forecast/49569" target="_blank">AccuWeather</a><i> North York</i><br>'
  , '<a href="http://acronymcreator.net/" target="_blank">Acronym Creator</a><br>'
  , '<a href="http://www.acronymfinder.com/" target="_blank">Acronym Finder </a> <br>'
  , '<a href="http://www.adlerkurortsochi.ru/" target="_blank">AdlerKurort</a><br>'
  , '<a href="https://www.google.ca/advanced_image_search?as_st=y&hl=en&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&biw=1366&bih=675&q=a&tbs=ic:trans,iar:s&tbm=isch" target="_blank"><abbr title="Advancd Image Search">AImS</abbr></a> <i></i><br>'
  , '<a href="http://we.easyelectronics.ru/my/antonluba/" target="_blank">Alexeiev, Anton</a> <i></i><br>'
  , '<a href="http://www.allwheelsdriver.ca/" target="_blank">All Wheels Driver</a> <i>school</i><br>'
  , '<a href="http://www.answersingenesis.org/" target="_blank">AnswersInGenesis</a> <br>'
  , '<a href="http://www.aslpro.com/" target="_blank">ASL Pro</a><br>'
  , '<a href="http://audacity.sourceforge.net/" target="_blank">Audacity Sound Editor</a><br>'
  , '<a href="http://www.audiotreasure.com/" target="_blank">AudioTreasure</a><br>'
  , '<a href="http://www.bbc.co.uk/news/magazine-17543356" target="_blank">Average World Wages </a><br>'
  , '<a href="https://login.live.com/login.srf?cbcxt=azu&vv=1100&lc=1033&wa=wsignin1.0&wtrealm=urn:federation:MicrosoftOnline&wctx=wa%3Dwsignin1.0%26rpsnv%3D2%26ct%3D1362585567%26rver%3D6.1.6206.0%26wp%3DSAPI_LONG%26wreply%3Dhttps:%252F%252Fmanage.windowsazure.com:443%252F%253Fhashseg%253DWorkspaces%252FWebsiteExtension%252FWebsite%252Figor01%252Fdashboard%26lc%3D1033%26id%3D500879%26cbcxt%3Dazu&wfresh=0" target="_blank">Azure Sign in</a><i> MS</i><br>'

  , '<!--B-->'
  , '<hr><b>- B -</b><br>'


  , '<a href="http://www.behindthename.com/" target="_blank">Behind The Name</a> <br>'
  , '<a href="http://www.bensonsound.com/catalog/atoz.cfm" target="_blank">Benson Sound</a> <br>'
  , '<a href="http://boglubittebja.ru/bible.php" target="_blank">Bible Audio</a><i> Rus</i> <br>'
  , '<a href="http://www.bibledice.com/scripture.php" target="_blank">bibledice</a> <br>' 
  , '<a href="http://transliterated.interlinearbible.org/proverbs/1.htm" target="_blank">Biblos: Hebrew translit</a> <br>'
  , '<a href="http://blagovestvui-narod.blogspot.ca/" target="_blank">Blagovestvuy Narod </a> <br>'
  , '<a href="http://www.blogger.com/home" target="_blank">Blogger</a> <i></i><br>'
  , '<a href="http://www.blueletterbible.org/index.cfm" target="_blank">Blue Letter Bible</a> <br>'
  , '<a href="http://www.bodybuilding.com/" target="_blank">Bodybuilding.com</a> <i></i><br>'




  , '<!--C-->'
  , '<hr><b>- C -</b><br>'
  , '<a href="http://www.calvarychapel.com/" target="_blank">Calvary Chapel</a> <i></i><br>'
  , '<a href="http://www.canadapost.ca/cpo/mc/default.jsf" target="_blank">Canada Post</a> <br>'
  , '<a href="http://www.canadiantire.ca/home.jsp?site=WebStore" target="_blank">Canadian Tire</a><i> store</i><br>'
  , '<a href="http://cantonese.ca/" target="_blank">Cantonese, Learn </a> <br>'
  , '<a href="http://www.cantonese.sheik.co.uk/" target="_blank">Cantonese, Learn </a> <i>Adam Sheik</i><br>'
  , '<a href="http://hktv.cc/hp/cantonesetojyutping/" target="_blank">Cantonese to Jyutping</a> <br>' 
  , '<a href="http://ahsc.arizona.edu/node/730" target="_blank">Cardiac Arrest Help</a><br>'
  , '<a href="http://www.cbc.ca/" target="_blank"><abbr title="Canadian Broadcasting Corporation">CBC</abbr> </a> <i> </i><br>'
  , '<a href="http://www.youtube.com/user/CBNnewsonline?feature=watch" target="_blank">CBN news</a><i> YouTube Playlist</i><br>' 
  , '<a href="http://zenit.senecac.on.ca/wiki/index.php/Main_Page" target="_blank">CDOT</a><br>'
  , '<a href="http://www.cbn.com/" target="_blank"><abbr title="The Christian Broadcasting Network">CBN.com</abbr></a> <br>'
  , '<a href="http://www.chucknorrisfacts.com/" target="_blank">Chuck Norris Facts</a> <br>' 
  , '<a href="http://www.cic.gc.ca/english/" target="_blank">CIC</a> <br>' 
  , '<a href="http://www.mozilla.org/en-US/collusion/" target="_blank">Collusion</a> <i>Mozilla</i><br>'
  , '<a href="http://conservapedia.com/Main_Page" target="_blank">Conservapedia</a> <br>'
  , '<a href="https://class.coursera.org/intrologic-003/class/index" target="_blank">Coursera</a> <i></i><br>'
  , '<a href="http://cpyu.org/Default.aspx" target="_blank">CPYU </a> <br>'
  , '<a href="http://creation.com/" target="_blank">Creation.com</a><br>'
  , '<a href="http://cronometer.com/" target="_blank">Cronometer.com</a> <i></i><br>'
  , '<a href="http://2cyr.com/decode/?lang=en" target="_blank">Cyrillic Decoder</a><br>'



  , '<!--D-->'
  , '<hr><b>- D -</b><br>'



  , '<a href="http://www.dafont.com/" target="_blank">Dafont</a><i> free fonts</i><br>'
  , '<a href="http://diministries.org/" target="_blank">David Ingles Min`s </a> <br>' 
  , '<a href="http://ecards.dayspring.com/ecards/" target="_blank">Day Spring </a><i> free E-cards</i><br>'
  , '<!--, <a href="dietetics.html" target="_blank"><u>Dietetics</u></a> >><br>-->'
  , '<a href="http://www.domain.com/" target="_blank">Domain.com </a><i></i><br>' 
  , '<a href="http://storytellinginnovationlab2013.github.io/donottrack/demo.html" target="_blank">Do Not Track Me!</a> <i>demo</i><br>'
  , '<a href="http://schools.tdsb.on.ca/donvalleyjhs/" target="_blank">Don Valley JHS </a><i></i><br>'    
  , '<a href="https://www.dvlottery.state.gov/" target="_blank">DV LOTTERY </a> '

  , '<!--E-->'
  , '<hr><b>- E -</b><br>'


  , '<a href="http://polusharie.com/" target="_blank">Eastern Hemisphere</a><br>'
  , '<a href="http://www.youtube.com/watch?v=PCvWiBZusFE" target="_blank">Emelyanenko highlights</a><i> </i><br>'
  , '<a href="https://pmw.empire.ca/pmwweb/login.jsp" target="_blank">Empire Life</a><i></i><br>'
  , '<a href="http://media.dbw.cn/ntv/more/xlym/,P=0,ID=630OS6Y2V911V2Y0.shtml" target="_blank">EEC</a><i> Wongkuan & Dongyeon</i><br>'
  , '<a href="http://ephemeris.alcuinus.net/" target="_blank">Ephemeris</a><i> News in Latin</i><br>'
  , '<a href="http://www.experience.com/entry-level-jobs/" target="_blank">Experience.com</a><br>'






  , '<!--F-->'
  , '<hr><b>- F -</b><br>'
  , '<a href="http://www.facebook.com/" target="_blank">Facebook</a> <br>'
  , '<a href="http://find-a-driving-school.ca/" target="_blank">Find a Driving School</a> <br>' 
  , '<a href="http://fonetiks.org/" target="_blank">Fonetiks.org</a> <i></i><br>'
  , '<a href="http://www.foxnews.com/" target="_blank">FoxNews</a><br>'
  , '<a href="http://www.thefreedictionary.com/" target="_blank">Free Dictionary</a><br>'
  , '<!--, <a href="funny.html" target="_blank"><u>Funny</u></a> >><br>-->'
  , '<a href="http://www.futureshop.ca/en-ca/home.aspx" target="_blank">Futureshop</a> [ '
  , '<a href="http://www.futureshop.ca/en-CA/category/haier/haier.aspx" target="_blank">Haier</a>]<i></i><br>'



  , '<!--G-->'
  , '<hr><b>- G -</b><br>'
  , '<a href="http://www.gifbin.com/" target="_blank">GIF bin</a><br>'
  , '<a href="http://mail.google.com/mail/u/0/?shva=1#inbox" target="_blank">Gmail </a> <br>' 
  , '<a href="https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=http://mail.google.com/mail/&scc=1&ltmpl=default&ltmplcache=2" target="_blank">Gmail Inbox </a> <br>' 
  , '<a href="https://docs.google.com/?tab=mo&authuser=0#home" target="_blank">Google Docs </a> <br>' 
  , '<a href="http://translate.google.com/" target="_blank">Google Translate</a> <br>'
  , '<a href="http://gorodok.tv/" target="_blank">Gorodok</a>  <br>'
  , '<a href="http://gotquestions.org/" target="_blank">Got Questions? </a>  <br>'
  , '<a href="http://www.vector-ski.ru/vecs/govorilka/" target="_blank">Govorilka</a><br>'
  , '<a href="http://gpacalculator.net/gpa-scale/3-1-gpa/" target="_blank">GPA calculator</a> <i></i><br>'
  , '<a href="http://en.gravatar.com/" target="_blank">Gravatar.com</a><br>'
  , '<!--, <a href="gregoriana.html" target="_blank"><u>Gregoriana</u></a> >><br>-->'





  , '<!--H-->'
  , '<hr><b>- H -</b><br>'
  , '<a href="http://habrahabr.ru/" target="_blank">Habrahabr</a> <i></i><br>'
  , '<a href="http://www.hebrew4christians.com/index.html" target="_blank">Hebrew For Christians </a> <br>'
  , '<a href="http://www.homedepot.ca/" target="_blank">Home Depot</a><i></i><br>'
  , '<a href="http://www.howjsay.com/" target="_blank">Howjsay.com</a> <br>'




  , '<!--I-->'
  , '<hr><b>- I -</b><br>'


  , '<a href="http://www.jimharper.org/icia.html" target="_blank">ICIA</a><i> Jim Harper Min.</i> <br>'
  , '<a href="http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm" target="_blank">IPA in Unicode</a><br>'
  , '<a href="http://www.yorku.ca/earmstro/ipa/index.html"target="_blank">IPA charts with audio</a><br>'
  , '<a href="http://project-modelino.com/english-phonetic-transcription-converter.php?" target="_blank">IPA transcriber</a> <i></i><br>'
  , '<a href="http://theaccentlab.com/tools/phonemic-converter/" target="_blank">IPA converter</a> <i>2</i><br>'
  , '<a href="http://www.photransedit.com/online/text2phonetics.aspx" target="_blank">IPA converter</a> <i>3</i><br>'
  , '<a href="http://www.ikea.com/ca/en/" target="_blank">Ikea</a><br>'
  , '<a href="http://www.imdb.com/" target="_blank"><abbr title="Internet Movie Database">IMDb</abbr> </a> <br>'
  , '<a href="http://www.chapters.indigo.ca/home/" target="_blank">Indigo Books & Music</a> <i></i><br>'
  , '<!--, <a href="itstuff.html" target="_blank"><u>IT stuff</u></a> >><i></i><br>-->'






  , '<!--J-->'
  , '<hr><b>- J -</b><br>'

  , '<a href="http://www.jesus-is-lord.com/" target="_blank">Jesus Is Lord </a><br>'
  , '<a href="https://www.youtube.com/watch?v=wllwJM6EyOI" target="_blank">Job Interview Tips </a><br>'
  , '<a href="http://www.anekdot.ru/" target="_blank">Jokes from Russia</a>'



  , '<!--K-->'
  , '<hr><b>- K -</b><br>'
  , '<a href="http://www.kinopoisk.ru/" target="_blank">Kinopoisk</a><br>'
  , '<a href="http://www.kpatricks.com/" target="_blank">Kirkpatrick`s</a> <i> leather shop</i> <br>'



  , '<!--L-->'
  , '<hr><b>- L -</b><br>'
  , '<a href="latina.html" target="_blank">Latina</a> <i></i><br>'
  , '<a href="http://dict.leo.org/ende/index_en.html" target="_blank">Leo</a><i> Germany</i><br>'
  , '<a href="http://www.linkedin.com/" target="_blank">Linked In</a><br>'
  , '<a href="http://listverse.com/" target="_blank"><abbr title="Ultimate Top Ten Lists">Listverse</abbr></a><br>'
  , '<a href="http://livingwellfc.org/" target="_blank">Living Well Family Church</a><br>'
  , '<a href="http://www.ldoceonline.com/" target="_blank"><abbr title="Longman Dictionary Of Contemporary English">LDOCE</abbr></a><i></i><br>'
  , '<a href="http://www.lostfilm.tv/" target="_blank">LostFilm</a><br>'
  , '<a href="https://www.lumosity.com/login" target="_blank">Lumosity</a>'


  , '<!--M-->'
  , '<hr><b>- M -</b><br>'
  , '<a href="http://www.maniacworld.com/" target="_blank">Maniac World</a> <br>'
  , '<a href="http://www.mathsisfun.com/index.htm" target="_blank">Math is fun</a> <br>'
  , '<a href="http://www.merriam-webster.com/" target="_blank">Merriam-Webster</a> <i></i><br>'
  , '<a href="http://www.learnersdictionary.com/" target="_blank">Merriam-Webster</a> <i>Learner`s</i><br>'
  , '<a href="http://movie25.com/" target="_blank">Movie25 </a> <br>'
  , '<a href="https://blog.mozilla.org/press/" target="_blank">Mozilla Press Center</a> <i></i><br>'
  , '<a href="http://www.multitran.ru/c/m.exe?a=1" target="_blank">Multitran</a><br>'
  , '<!--, <a href="music.html" target="_blank"><u>Music</u></a> >><br>-->'
  , '<a href="http://www.cra-arc.gc.ca/myaccount/" target="_blank">MyAccount</a> <i>CRA</i><br>'
  , '<a href="http://mx-mx.com/lab/cizzle/#/curiosity" target="_blank">mx-mx</a> <i></i><br>'

  , '<!--N-->'
  , '<hr><b>- N -</b><br>'

  , '<a href="http://movies.netflix.com/WiHome" target="_blank">netflix</a><br>'
  , '<a href="http://www.nextbus.com/predictor/stopSelector.jsp?a=ttc" target="_blank">Next Bus</a><i></i><br>'
  , '<a href="http://brimleydental.com/dr_n.html" target="_blank">Nurgitz, Richard</a> <i>Brimley Dental Center</i><br>'



  , '<!--O-->'
  , '<hr><b>- O -</b><br>'
  , '<a href="http://www.odnoklassniki.ru" target="_blank">Odnoklassninki</a><br>'
  , '<a href="http://www.omniglot.com/writing/index.htm" target="_blank">Omniglot</a><br>'
  , '<a href="http://www.ontario.ca/welcome-ontario" target="_blank">Ontario</a> <i></i><br>'
  , '<a href="http://www.opendns.com/" target="_blank">OpenDNS</a><i> for internet security</i><br>'
  , '<a href="http://www.oracle.com/index.html" target="_blank">Oracle.com</a><i></i><br>'
  , '<a href="http://oper.ru/" target="_blank">Oper.ru</a><br>'
  , '<a href="http://www.toronto.ca/parks/prd/facilities/complex/714/" target="_blank">Oriole CC</a> <i></i><br>'
  , '<a href="http://www.overstock.com/" target="_blank">Overstock</a><i> store</i><br>'


  , '<!--P-->'
  , '<hr><b>- P -</b><br>'
  , '<a href="http://www.papahuhu.com/" target="_blank">Papa Huhu</a><i> </i><br>'
  , '<a href="http://paulrobertson.ca/" target="_blank">Paul Robertson </a><br>'
  , '<a href="http://www.peanutplaza.ca/"target="_blank">Peanut Plaza</a> <br>'
  , '<a href="http://www.thepeopleschurch.ca/default.asp" target="_blank">People`s Church</a> <i></i><br>'
  , '<a href="https://picasaweb.google.com/home" target="_blank">Picasa </a> <br>'
  , '<a href="https://www.thepinkcross.org/" target="_blank">Pink Cross </a> <br>'
  , '<a href="https://popcorn.webmaker.org/" target="_blank">Popcorn Maker</a> <i>Mozilla</i><br>'
  , '<a href="http://winrus.com/klava.htm" target="_blank">porusski.net</a> <i></i><br>'
  , '<!--, <a href="p&w.html" target="_blank"><u>P&W</u></a> >><br>'
  , '<a href="preach_teach.html" target="_blank"><u>Preach & Teach</u></a> >> <br>-->'
  , '<a href="http://www.pcfinancial.ca/" target="_blank">President`s Choice Financial</a><br>'
  , '<a href="http://www.propublica.org/" target="_blank">Propublica</a> <i></i><br>'
  , '<a href="http://scriptsource.org/cms/scripts/page.php?item_id=entry_detail&uid=j5k8l4plf5" target="_blank"><abbr title="Phonetic Symbol Guide">PSG</abbr> Names</a><br>'



  , '<!--Q-->'
  , '<hr><b>- Q -</b><br>'


  , '<!--R-->'
  , '<hr><b>- R -</b><br>'

  , '<a href="http://frankietomatto.com/index.php" target="_blank">Frankie Tomatto`s</a><br>'
  , '<a href="http://www.mandarinrestaurant.com/" target="_blank">Mandarin</a><br>'
  , '<a href="http://www.swisschalet.com/" target="_blank">Swiss Chalet</a><br>'
  , '<a href="http://www.ratemyprofessors.com/" target="_blank">Rate My Professors </a> <br>'
  , '<a href="https://performancemanager4.successfactors.com/career?company=RBC" target="_blank">RBC jobs </a> <br>'
  , '<a href="http://en.reddit.com/" target="_blank">Reddit</a><br>'



  , '<!--S-->'
  , '<hr><b>- S -</b><br>'
  , '<a href="http://www.sears.ca/" target="_blank">Sears</a><i></i><br>'
  , '<a href="https://online.chasecanada.ca/ChaseCanada_Consumer/Login.do" target="_blank">Sears Financial</a><i></i><br>'
  , '<!--<a href="seneca.html"  target="_blank"><u>Seneca</u></a> >><br>'
  , '<a href="selfdefense.html" target="_blank"><u>Self-Defense</u></a> >><br> -->'
  , '<a href="http://en.sutr.ru/" target="_blank">SGU</a><br>'
  , '<a href="http://www.sheeplaughs.com/" target="_blank">Sheep Laughs, The</a> <br>'
  , '<a href="http://www.simplish.org/" target="_blank">Simplish</a> <i></i><br>'
  , '<a href="http://slashdot.org/" target="_blank">Slashdot</a> <i>news aggregator</i><br>'
  , '<a href="http://www.snopes.com/" target="_blank">Snopes</a><i> misinformation</i> <br>'
  , '<a href="http://www.snorgtees.com/" target="_blank">Snorgtees</a><br>'
  , '<a href="http://soulsurfer.com/index.html" target="_blank">Soul Surfer</a><i> Bethany Hamilton</i><br>'
  , '<a href="http://usadeepsouth.ms11.net/southmouth.html" target="_blank">SouthMouth </a><br>'
  , '<a href="http://www.speedtest.net/" target="_blank">Speed Test</a><br>'
  , '<a href="http://www.subzin.com/" target="_blank">Subzin </a><i> find quotes in movies and series</i><br>'
  , '<a href="https://www.sunnet.sunlife.com/signin/mysunlife/home.wca" target="_blank">Sun Life Financial</a><i> Assurance Co.</i><br>'
  , '<a href="http://www.supersaas.com/" target="_blank">Super<abbr title="appointment scheduling system">SaaS</abbr></a><br>'
  , '<a href="http://www.ravenblack.net/random/surreal.html" target="_blank">Surrealisms</a><i> Ravenblack</i> <br>'  

  , '<!--T-->'
  , '<hr><b>- T -</b><br>'
  , '<a href="http://www.target.ca/en/GO?ref=ca_tgt_adv_xs_GO_Mar2013" target="_blank">Target</a><i></i><br>'
  , '<a href="http://www.tdcanadatrust.com/products-services/banking/index-banking.jsp?cm_sp=cBRAND003-087" target="_blank">TB Bank</a><br>'
  , '<a href="http://www.tdsb.on.ca/_site/ViewChoices.asp?siteid=120&menuid=431&pageid=337" target="_blank">TDSB choices</a><br>'
  , '<a href="http://techtotalk.com/" target="_blank">TechToTalk</a> <i>Ali</i><br>'
  , '<a href="http://teksavvy.com/" target="_blank">TekSavvy </a> <br>'
  , '<a href="http://www.textfixer.com/html/convert-word-to-html.php/" target="_blank">TextFixer </a> <br>'
  , '<a href="http://tfile.me/" target="_blank">tfile.me</a> <br>'
  , '<a href="https://thimble.webmaker.org/en-US/" target="_blank">Thimble</a> <i></i><br>'
  , '<!--<a href="tolkiniana.html" target="_blank"><u>Tolkiniana</u></a> >><br>-->'
  , '<a href="http://www.timhortons.com/ca/en/index.html" target="_blank">Tim Hortons</a><i> Canada</i> <br>' 
  , '<a href="http://wx.toronto.ca/festevents.nsf/all?openform" target="_blank">Toronto Festivals and Events Calendar</a><br>'
  , '<a href="http://www.translate.ru/" target="_blank">Translate.ru</a> <br>' 
  , '<a href="http://www.translit.ru/" target="_blank">Translit.ru </a> <br>'
  , '<a href="http://www.ttc.ca/" target="_blank">TTC</a> <br>'
  , '<a href="https://www.tumblr.com/" target="_blank">Tumblr</a> <i></i><br>'
  , '<a href="http://lib.ru/ILFPETROV/ilf_petrov_12_chairs_engl.txt" target="_blank">Twelve Chairs, The</a><i> (en)</i><br>'
  , '<a href="http://www.lib.ru/ILFPETROV/dwenadcatx.txt" target="_blank">Twelve Chairs, The</a><i> (ru)</i><br>'
  , '<a href="https://twitter.com" target="_blank">Twitter </a> '

  , '<!--U-->'
  , '<hr><b>- U -</b><br>'
  , '<a href="http://upodn.com/" target="_blank">UPODN</a> <i>IPA converter</i><br>'
  , '<a href="http://www.urbandictionary.com/" target="_blank">Urban Dictionary </a> '

  , '<!--V-->'
  , '<hr><b>- V -</b><br>'
  , '<a href="http://vk.com/feed" target="_blank">V Kontakte</a><br>'
  , '<!-- <a href="video.html" target="_blank"><u>Video</u> </a>>><br>-->'
  , '<a href="https://v.mozilla.com/flex.html?csrf_tkn=E549181F441C34A40A78F3EF3AF006D8" target="_blank">Vidiyo</a> <i></i><br>'



  , '<!--W-->'
  , '<hr><b>- W -</b><br>'

  , '<a href="http://www.walmart.ca/en" target="_blank">Walmart</a><i></i><br>'
  , '<a href="http://www.waramps.ca/home.html" target="_blank">War Amps</a><br>'
  , '<a href="https://webmaker.org/en-US/" target="_blank">Webmaker</a> <i></i><br>'
  , '<a href="http://webmaker.mofostaging.net/" target="_blank">Webmaker.MoFoStaging</a> <i></i><br>'
  , '<a href="http://www.webster1828.com/" target="_blank">Webster 1828 </a> <br>'
  , '<a href="http://whatismyipaddress.com/" target="_blank">What`s my IP address </a> <br>'
  , '<a href="http://can.whatsnewonnetflix.com/" target="_blank">What`s New on Netflix</a> <br>'
  , '<a href="http://whatweekisit.com/" target="_blank">What week is it?</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Main_Page" target="_blank">Wikipedia</a> |  '
  , '<a href="http://la.wikipedia.org/wiki/Pagina_prima" target="_blank">La</a> |  '
  , '<a href="http://ru.wikipedia.org" target="_blank">Ru</a><br>'
  , '<a href="http://en.wiktionary.org/wiki/Wiktionary:Main_Page" target="_blank">Wiktionary</a><br>'
  , '<a href="https://shop.windmobile.ca/services/topup/topup.aspx" target="_blank">Wind</a><br>' 
  , '<a href="http://wordpress.com/" target="_blank">WordPress</a> <i></i><br>'
  , '<a href="https://www.canadaswonderland.com/" target="_blank">can wonderland</a><br>'


  , '<!--X-->'
  , '<hr><b>- X -</b><br>'
  , '<a href="http://www.xxxchurch.com/" target="_blank">xxxchurch.com </a><i> help porn-addicts</i><br>'  

  , '<!--Y-->'
  , '<hr><b>- Y -</b><br>'
  , '<a href="http://fotozhaba.yaplakal.com/" target="_blank">Ya Plakal</a><br>'
  , '<a href="http://www.youtube.com/" target="_blank">Youtube</a> <br>' 
  , '<a href="http://www.youtube.com/user/crypticafv?feature=results_main" target="_blank">Youtube/999CrypticAFV </a><br>'
  , '<a href="http://www.yummymarket.com/" target="_blank">Yummy Market </a><br>'


  , '<!--Z-->'
  , '<hr><b>- Z -</b><br>'  
  , '<a href="http://www1.zmovie.tv/" target="_blank">Z Movie TV </a><br>'
  , '<a href="http://www.zhongwen.com/" target="_blank">Zhong Wen</a><br>'

  , '<hr>Language<br>'
  , '<a href="http://www.jamaicanize.com/" target="_blank">Jamaikanize</a> <i></i><br>'

  , 'Health<br>'
  , '<a href="http://www.bodybuilding.com/exercises/finder/lookup/filter/muscle/id/6/muscle/neck" target="_blank">Exercise finder</a> <i></i><br>'

  ];

  var retval ="";
  retval += "<hr>";
  for (var i in unsorted){
    retval += unsorted[i];
  }

  retval += "<hr>";
  return retval;

};
*/
//-------------------------------------------------



//document.getElementById("demo").innerHTML=myFunction(word);

//----------------------------------------------------------------------------
// this function helps make sort() case-insensitive
function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();
  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);
}

//----------------------------------------------------------------------------
// function to print out a js object
function printObj(obj){

  var keys = [];  
  var key,f;

  for (var key in obj){
    if (obj.hasOwnProperty(key)){
      keys.push(key);
    }

} // end for()

keys.sort(insensitive);
var retval = "";
for (f = 0; f < keys.length; f++){ 
  key = keys[f];
  retval += '<a href="'+ obj[key] + '" target="_blank">'+ key + '</a><br>';
} // end for()
return retval; // if you use 'document.write()' the document will have only the contents of the object on white background
}; // end printObj()

//----------------------------------------------------------------------------

function funny(){
  document.getElementById("demo").innerHTML=funnyFunc();
}

var funnyFunc = function(){

  var funnyObj = {
    "Chariots of Fire":"https://www.youtube.com/watch?v=CwzjlmBLfrQ"
    , "A, Masliakov? ":"http://www.youtube.com/watch?v=PRm4N5CcZMY"
    , "Ain`t Nobody Got Time For That ":"http://www.youtube.com/watch?v=8cT_Ulmcrys"
    , "All is lost! ":"http://www.youtube.com/watch?v=EmJdZ7DcV7U"
    , "Atkinson & E.John ":"https://www.youtube.com/watch?v=Hm5EkJXlgM8"
    , "Baby Talk ":"http://www.youtube.com/watch?v=sDocL7AfIRo"
    , "Batman Chooses his voice ":"http://www.youtube.com/watch?v=WOg3ZE3hNQc"
    , "Bed Intruder ":"http://www.youtube.com/watch?v=VKsVSBhSwJg"
    , "Bilan Parody ":"https://www.youtube.com/watch?v=rfXdRoUVUYo"
    , "Bilan Parody ":"https://www.youtube.com/watch?v=xGIbMPSMFP8"
    , "Bolsheviks & Illiteracy":"http://www.youtube.com/watch?v=CX_S1DXHW4Y"
    , "Borsch ":"https://www.youtube.com/watch?v=cMIHLzuJ4Wg"
    , "Cause I`m drunk":"http://www.youtube.com/watch?v=Vw4_pwIUMPY"
    , "Celebration ":"https://www.youtube.com/watch?v=G7fo1hJIj5Y"
    , "Chinese Boso":"https://www.youtube.com/watch?v=hBxqptNa6-8"
    , "Chocolate waffles":"http://www.youtube.com/watch?v=eFcWvCEe0Ac"
    , "Coliseum":"https://www.youtube.com/watch?v=ftWL_ETjuo0"
    , "Couch":"http://www.youtube.com/watch?v=6Pm3KQvYk9Q"
    , "Crusty, Ted":"https://www.youtube.com/watch?v=BEKuKD4R0y4&list=UU2nPLKT5yMdVB5HoBpxRs8g"
    , "Cyborgs":"http://www.youtube.com/watch?v=1yjjNiu4i3k"
    , "Toilet Paper":"http://www.youtube.com/watch?v=uWdFHT4h29k"
    , "Be Quiet":"http://www.youtube.com/watch?v=xpovtaBBLCE"
    , "L`on`a Killer":"http://www.youtube.com/watch?v=3EM4IyBlOzg"
    , "Pechen`ka":"http://www.youtube.com/watch?v=PvGRjauxf4M"
    , "Pechen`ye lom":"http://www.youtube.com/watch?v=2u-NHOGiiUw"
    , "Dudu":"http://www.youtube.com/watch?v=OLDGnawrdPk"
    , "Shito & Kryto":"http://www.youtube.com/watch?v=INBDbmDqZAg"
    , "Whack against the wall":"http://www.youtube.com/watch?v=GZBbtk47vZw"
    , "Do you speak English":"http://www.youtube.com/watch?v=rxUm-2x-2dM"
    , "Dramatic Animals ":"http://www.youtube.com/watch?v=0vT0dgIZN1o"
    , "Dramatic Cat ":"http://www.youtube.com/watch?v=plWnm7UpsXk"
    , "Dramatic Cat ":"http://www.youtube.com/watch?v=EmeLlUmg7Xc"
    , "Dramatic Gopher ":"http://www.youtube.com/watch?v=8lXdyD2Yzls"
    , "Exam Answer Best ":"https://www.youtube.com/watch?v=cMsxnDMBifk"
    , "Gerald the Gorilla":"http://www.youtube.com/watch?v=beCYGm1vMJ0"
    , "German Coast Guard":"http://www.youtube.com/watch?v=yR0lWICH3rY"
    , "Give me the meat!":"https://www.youtube.com/watch?v=G1bziMXs_hs"
    , "Greatest Song in the World":"http://www.youtube.com/watch?v=_lK4cX5xGiQ"
    , "Guest on the treshhold":"http://www.youtube.com/watch?v=ViD4OBWt2EI"
    , "Gut":"http://www.youtube.com/watch?v=gUXSut1Y6VE"
    , "Harbin Invitation":"http://www.youtube.com/watch?v=gJg9AR8p_qY"
    , "Hercules":"http://www.youtube.com/watch?v=8jRuK5mx9nA"
    , "History Lesson":"http://www.youtube.com/watch?v=YnFU22znYaM"
    , "History of English":"http://www.youtube.com/watch?feature=player_embedded&v=H3r9bOkYW9s"
    , "History Lesson":"http://www.youtube.com/watch?v=YnFU22znYaM"
    , "I`m So Excited":"http://www.youtube.com/watch?v=-aS3yhRqllU"
    , "IK+":"https://www.youtube.com/watch?v=wDko0WVJUr0"
    , "Imbecil":"http://www.youtube.com/watch?v=pwtU8ycIV5Y"
    , "Instant Noodles":"http://www.youtube.com/watch?v=BIDGPWAuvb4"
    , "Internets":"http://www.youtube.com/watch?v=LKTH6f1JfX8"
    , "Iron Mask, the":"http://www.youtube.com/watch?v=J398esfj5q8"
    , "Is There God":"http://www.youtube.com/watch?feature=player_embedded&v=A0g3uO1O3Lg"
    , "JK Wedding Dance":"http://www.youtube.com/watch?v=4-94JhLEiN0"
    , "Kin-dza-dza Matrix":"http://www.youtube.com/watch?v=aTDliqQpdcU"
    , "Kin-dza-dza Terminator ":"http://www.youtube.com/watch?v=NZkPKKudfqI"
    , "KVN Best":"http://kvnbest.ru/"
    , "Lack of Evidence":"http://www.youtube.com/watch?v=lSqRGkDe6Dw"
    , "Latin":"https://www.youtube.com/watch?v=NI8UZubOJlo"
    , "Lada Priora":"http://www.youtube.com/watch?v=ybzymcQlozA&NR=1&feature=fvwp"
    , "Litvinkov":"https://www.youtube.com/watch?v=Yo4q89246dc"
    , "LOTR Remix 1":"https://www.youtube.com/watch?v=Q_Co7er4Vuk"
    , "LOTR Remix 2":"https://www.youtube.com/watch?v=rjx1-otbBLg"
    , "LOTR Remix 3":"https://www.youtube.com/watch?v=lTZw-WY4T10"
    , "Matrix Ukrainization":"http://www.youtube.com/watch?v=BZ70-zy9KZk"
    , "Murmurs of the Middle Earth":"https://www.youtube.com/watch?v=XJfGnqKoXYY"
    , "My Heart Will Go On":"http://www.youtube.com/watch?v=tlDSsII-yBo"
    , "9gag":"http://9gag.com/"
    , "Novosib ozvuchka ":"http://www.youtube.com/watch?v=6w-PpPizmPk"
    , "Nucular ":"http://www.youtube.com/watch?v=OoASZyihalc"
    , "Offensive Translator":"http://www.youtube.com/watch?v=XY66ZJ0TFUI"
    , "OM* Cat ":"http://www.youtube.com/watch?v=C_S5cXbXe-41"
    , "Orders from Mordor ":"http://www.youtube.com/watch?v=fsXmG66ungE"
    , "Pelmeni Boyarskie ":"https://www.youtube.com/watch?v=yb2dZ_7jsco"
    , "Physics exam ":"https://www.youtube.com/watch?v=rpuXiZxZcog"
    , "Pickpocket Master ":"http://www.youtube.com/watch?v=0TOFlb09Vuk"
    , "Pillow Talk ":"http://www.youtube.com/watch?v=SERiABqsmyA"
    , "Reaction gifs":"http://www.reactiongifs.com/"
    , "Revva the Only Member":"http://www.youtube.com/watch?v=ILTriIzFye0"
    , "Riders on White Horses":"http://www.youtube.com/watch?v=XVsIeZW3OFU"
    , "Rocky Lockridge":"http://www.youtube.com/watch?v=mpDoziF-kyI"
    , "RU Help US after collapse ":"http://www.youtube.com/watch?v=KPaVRCpFL7g"
    , "Scaredy Guy ":"http://www.youtube.com/watch?feature=player_embedded&v=Bwr4XEHmfBs"
    , "Scwarzenegger Quotes ":"http://www.youtube.com/watch?v=pDxn0Xfqkgw"
    , "Soul on fire":"http://www.youtube.com/watch?v=EZ5SwfAqkVg"
    , "Stalking Cat ":"http://www.youtube.com/watch?v=fzzjgBAaWZw"
    , "Strategic Seeds ":"https://www.youtube.com/watch?v=LmGo1w82IM8"
    , "Stuntman Ukrop 1":"http://www.youtube.com/watch?v=QwVVONOn8JA"
    , "Stuntman Ukrop 2":"http://www.youtube.com/watch?v=vCUxgxgDvOE"
    , "Terminator in verse":"http://www.youtube.com/watch?v=oETUre2ey3A"
    , "They`re taking the hobbits to Isengard ":"http://www.youtube.com/watch?v=uE-1RPDqJAY"
    , "Turkish Action Movie":"http://www.youtube.com/watch?annotation_id=annotation_491226&feature=iv&src_vid=eECkdle_dTo&v=sPNYYr4aLaM"
    , "When I was little I had a grandma, too ":"http://www.youtube.com/watch?v=gffZRbGVJG4"
    , "Who Could Be President ":"http://www.youtube.com/watch?v=0SHsg20-9LM"
    , "Who farted?":"https://www.youtube.com/watch?v=78WEaRm2W2k"
    , "Why is the rum gone? ":"http://www.youtube.com/watch?v=JImcvtJzIK8"
    , "Litvinkovich":"https://www.youtube.com/watch?v=-8VxxHAaBbw"
  };
  return printObj(funnyObj);;
};



//----------------------------------------------------------------------------


function git(){
  document.getElementById("demo").innerHTML= git2();
};

var git2 = function (){

  var gitObj = {


    "Abiu":"https://github.com/igoryen/abiu"
   , "Acerola":"https://github.com/igoryen/acerola"
   , "Ackee":"https://github.com/igoryen/ackee"
   , "Ambarella":"https://github.com/igoryen/ambarella"
   , "Amore":"https://github.com/humphd/amore.webmaker.org"
   , "Apple":"https://github.com/igoryen/apple"
   , "Apricot":"https://github.com/igoryen/apricot"
   , "Araza":"https://github.com/igoryen/araza"
   , "Atemoya":"https://github.com/igoryen/atemoya"
   , "Avocado":"https://github.com/igoryen/avocado"
   , "Banana":"https://github.com/igoryen/banana"
   , "Butter":"https://github.com/mozilla/butter"
   , "Create a repo":"https://help.github.com/articles/create-a-repo"
   , "Culinary fruit, list":"http://en.wikipedia.org/wiki/List_of_culinary_fruits"
   , "EJS":"https://github.com/visionmedia/ejs"
   , "Friendlycode":"https://github.com/mozilla/friendlycode"
   , "Transifex":"https://www.transifex.com/projects/p/friendlycode/"
   , "Friendlycode, trivial embedding":"http://localhost:8005/examples/bare.html"
   , "Friendlycode, alternate publishing":"http://localhost:8005/examples/alternate-publisher.html"
   , "Transifex":"http://localhost:8005/examples/transifex.html"
   , "Friendly code, l10ns":"http://localhost:8005/examples/transifex.html?local=1"
   , "git blame":"http://jeanbahnik.com/2012/05/using-git-blame/"
   , "git Book":"http://git-scm.com/book"
   , "git: install":"https://help.github.com/articles/set-up-git"
   , "git reference":"http://gitref.org/basic/"
   , "Gobbledygook":"https://github.com/lloyd/gobbledygook"
   , "Hello World!":"https://github.com/alicoding/Hello-World/"
   , "Interactive Rebase":"https://help.github.com/articles/interactive-rebase"
   , "Igoryen":"https://github.com/igoryen"
   , "login.webmaker.org":"https://github.com/humphd/login.webmaker.org"
   , "login.webmaker.org":"https://github.com/igoryen/login.webmaker.org"
   , "localhost:3000":"https://localhost:3000"
   , "login.webmaker.org":"https://github.com/mozilla/login.webmaker.org"
   , "MakeAPI":"https://github.com/igoryen/MakeAPI"
   , "MakeAPI":"https://github.com/mozilla/MakeAPI"
   , "Mango":"https://github.com/igoryen/mango"
   , "Markdown Syntax":"https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md"
   , "My links":"https://github.com/igoryen/mylinks"
   , "NVM":"https://github.com/creationix/nvm"
   , "node-webmaker-loginapi":"https://github.com/mozilla/node-webmaker-loginapi"
   , "Pay attention to Node.js":"http://readwrite.com/2010/10/20/why-developers-should-pay-atte"
   , "Popcorn_maker":"https://github.com/mozilla/popcorn_maker"
   , "popcorn.webmaker.org":"https://github.com/mozilla/popcorn.webmaker.org"
   , "Power your workflow":"https://www.youtube.com/watch?v=GYnOwPl8yCE"
   , "SSH keys: generating":"https://help.github.com/articles/generating-ssh-keys"
   , "SIL2013":"https://github.com/storytellinginnovationlab2013"
   , "10 things I hate about git":"http://steveko.wordpress.com/2012/02/24/10-things-i-hate-about-git/"
   , "Test":"https://github.com/igoryen/Test"
   , "thimble.webmaker.org":"https://github.com/mozilla/thimble.webmaker.org"
   , "Toolness":"https://github.com/toolness"
   , "Webmaker.org":"https://github.com/mozilla/webmaker.org"
   , "localhost:7777":"https://localhost:7777"
   , "bug870429":"https://bugzilla.mozilla.org/show_bug.cgi?id=870429"
   , "bug869643":"https://bugzilla.mozilla.org/show_bug.cgi?id=869643"
   , "bug873064":"https://bugzilla.mozilla.org/show_bug.cgi?id=873064"
   , "bug873098":"https://bugzilla.mozilla.org/show_bug.cgi?id=873098"
   , "bug877305":"https://bugzilla.mozilla.org/show_bug.cgi?id=877305"
   , "bug881734":"https://bugzilla.mozilla.org/show_bug.cgi?id=881734"
   , "bug870995":"https://bugzilla.mozilla.org/show_bug.cgi?id=870995"
   , "bug883426":"https://bugzilla.mozilla.org/show_bug.cgi?id=883426"
   , "bug885193":"https://bugzilla.mozilla.org/show_bug.cgi?id=885193"
 };

 return printObj(gitObj);

}; // end git2()

//----------------------------------------------------------------------------


function gregoriana(){
  document.getElementById("demo").innerHTML=gregorianaFunc();

};

var gregorianaFunc = function(){

  var gregorianaObj = {

    "Absolve, Domine":"http://www.youtube.com/watch?v=np_slIOn5Jk"
    , "Ad Te Levavi":"http://www.youtube.com/watch?v=VC4Bg3HlMys"
    , "Adorabo":"http://www.youtube.com/watch?v=LYJqCD2-S0A"
    , "Adorate Deum":"http://www.youtube.com/watch?v=Fe3QSdTQa7w"
    , "Adoro Te Devote 1":"http://www.youtube.com/watch?v=4Dpy0SUh0H4"
    , "Adoro Te Devote 2":"http://www.youtube.com/watch?v=VjNhyHsgU7Y"
    , "Advocatam":"http://www.youtube.com/watch?v=2HEKhr002Ts"
    , "Agnus Dei: a":"http://www.youtube.com/watch?v=dsFOxPa-r_4"
    , "Agnus Dei: 1 Lux et Origo":"http://www.youtube.com/watch?v=OcngUd1oMm0"
    , "Agnus Dei: 4 Cunctipotens Genitor Deus":"http://www.youtube.com/watch?v=NjzuOG7Fits"
    , "Agnus Dei: 9 Cum Jubilo":"http://www.youtube.com/watch?v=eX8rgnvV-xA"
    , "Agnus Dei: 8 De Angelis":"http://www.youtube.com/watch?v=RJ_ePf2Se_4"
    , "Agnus Dei: 10 Alme Pater":"http://www.youtube.com/watch?v=bPdP7BLWYos"
    , "Agnus Dei: 11 Orbis Factor":"http://www.youtube.com/watch?v=qTlM4v1uCAw"
    , "Agnus Dei: 14 Jesu Redemptor":"http://www.youtube.com/watch?v=HErBFVgnn9E"
    , "Agnus Dei: 17":"http://www.youtube.com/watch?v=prIuDOGiXLg"
    , "Agnus Dei: 18":"http://www.youtube.com/watch?v=1o4QJBCiXjs"
    , "Agnus Dei: b":"http://www.youtube.com/watch?v=2zGyeRczFOA"
    , "Agnus Dei + organ":"http://www.youtube.com/watch?v=mSgyYDZvSAg"
    , "Agnus Dei: solo":"http://www.youtube.com/watch?v=EGJhMGk6PZw"
    , "Agnus Dei: + organ":"http://www.youtube.com/watch?v=cuDejOng0gY"
    , "Alma Redemptoris Mater: Female voices":"http://www.youtube.com/watch?v=QpGbTlmDluE"
    , "Alma Redemptoris Mater: Mixed voices":"http://www.youtube.com/watch?v=PXCE7lMMr8k"
    , "Alma Redemptoris Mater: Simple tone":"http://www.youtube.com/watch?v=iq5CKlOyeMk"
    , "Alma Redemptoris Mater: Solemn tone":"http://www.youtube.com/watch?v=L2F-ut_MU6E"
    , "Amicus Meus":"http://www.youtube.com/watch?v=JwGJxPpqJXA"
    , "Angelus Ad Pastores Ait":"http://www.youtube.com/watch?v=Sdz7N6gLR_4"
    , "Angelus Domini":"http://www.youtube.com/watch?v=Xg_bYZxFIFc"
    , "Angelus Domini":"http://www.youtube.com/watch?v=pPiriJsAWTc"
    , "Aqua Sapientiae":"http://www.youtube.com/watch?v=DFhC-xf9mHY"
    , "Ascendit Deus":"http://www.youtube.com/watch?v=98WwB7PU_3w"
    , "Asperges Me, Domine":"http://www.youtube.com/watch?v=uhk-fEcqgcY"
    , "Assumpta Est":"http://www.youtube.com/watch?v=1UfOFd-XHhY"
    , "Attende, Domine":"http://www.youtube.com/watch?v=YkA9pJSvjm0"
    , "Attende, Domine":"http://www.youtube.com/watch?v=4IwbxYYq3bA"
    , "Audi Filia":"http://www.youtube.com/watch?v=VYVDBSlwG-c"
    , "Ave Maria 1":"http://www.youtube.com/watch?v=LSAPvTeyfZk"
    , "Ave Maria 2":"http://www.youtube.com/watch?v=A9b0Wmoi2Tk"
    , "Ave Maris Stella":"http://www.youtube.com/watch?v=PlFaO_PdYE8"
    , "Ave mundi spes Maria":"http://www.youtube.com/watch?v=_MbDqc3x97k"
    , "Ave Regina Caelorum":"http://www.youtube.com/watch?v=OAi6T7tQruE"
    , "Ave Regina Caelorum 2":"http://www.youtube.com/watch?v=iVI1RLeXnlY"
    , "Ave Verum Corpus Natum":"http://www.youtube.com/watch?v=sZrJJTZQKlA"
    , "Beata Es, Virgo Maria":"http://www.youtube.com/watch?v=hH-c_j8kafM"
    , "Beata Viscera":"http://www.youtube.com/watch?v=t6orwO3w8og"
    , "Beatam Me":"http://www.youtube.com/watch?v=gB_uF2qcoSA"
    , "Beati Mundo Corde":"http://www.youtube.com/watch?v=fD-v9W9CsPI"
    , "Beati Mundo Corde":"http://www.youtube.com/watch?v=v0VOjezHZho"
    , "Beatus Servus":"http://www.youtube.com/watch?v=oZDOJVz6YKE"
    , "Beatus Vir Qui Suffert":"http://www.youtube.com/watch?v=qqvVjGzWcYw"
    , "Benedicta Es Tu":"http://www.youtube.com/watch?v=FTCsNdq7nzs"
    , "Benedicta et Venerabilis Es":"http://www.youtube.com/watch?v=VT7HQXzkJAA"
    , "Benedictus Dominus":"http://www.youtube.com/watch?v=W81rW_URkjs"
    , "Benedictus Dominus":"http://www.youtube.com/watch?v=6TVHFPGtxdg"
    , "Benedictus Qui Venit":"http://www.youtube.com/watch?v=3V_gTUgeNZk"
    , "Bonum est confiteri Domino":"http://www.youtube.com/watch?v=BQZ3BXDlRVk"
    , "Cantate Domino":"http://www.youtube.com/watch?v=7bpCNwlqnu0"
    , "Christus Factus Est":"http://www.youtube.com/watch?v=ULEVFGx9eqE"
    , "Christus Factus Est":"http://www.youtube.com/watch?v=nljNSVtTWn0"
    , "Christus Resurgens":"http://www.youtube.com/watch?v=CE3vHZPutq0"
    , "Christus Unam":"http://www.youtube.com/watch?v=_TkJ5_Gi7Tc"
    , "Circuibo":"http://www.youtube.com/watch?v=jJSa1D-Inw0"
    , "Civabit Eos":"http://www.youtube.com/watch?v=2L8YJ55RpdA"
    , "Civabit Eos":"http://www.youtube.com/watch?v=Q5euBO3Hqrw"
    , "CÓDICE CALIXTINO":"http://www.youtube.com/watch?v=sQ-98Cv68bg"
    , "Cognovit Autem Pater":"http://www.youtube.com/watch?v=AVEDFQ_IuCY"
    , "Commovisti, Domine":"http://www.youtube.com/watch?v=109UGRvF4ow"
    , "Commovisti, Domine":"http://www.youtube.com/watch?v=i-TsaaCS1MQ"
    , "Confirma Hoc Deus":"http://www.youtube.com/watch?v=CAjWHMK8xMA"
    , "Confitemini Domino":"http://www.youtube.com/watch?v=q2JEjEo2NGI"
    , "Constitues Eos":"http://www.youtube.com/watch?v=CliryvBc8tQ"
    , "Corde Natus ex Parentis":"http://www.youtube.com/watch?v=dGzD8DDxx0A"
    , "Corde Natus ex Parentis":"http://www.youtube.com/watch?v=-wZ508dZ7Zk"
    , "Creator Alme Siderum":"http://www.youtube.com/watch?v=YKbSZ4fDZqs"
    , "Credo: A":"http://www.youtube.com/watch?v=ikHM5-UzqGU"
    , "Credo: B":"http://www.youtube.com/watch?v=O6ACMsf9PsI"
    , "Credo: C":"http://www.youtube.com/watch?v=Ax_f8QSEHTE"
    , "Credo: D":"http://www.youtube.com/watch?v=yDortyyp228"
    , "Credo: I":"http://www.youtube.com/watch?v=N4BZkv7Aa7o"
    , "Credo: II":"http://www.youtube.com/watch?v=TaRXKjmMRrs"
    , "Credo: III":"http://www.youtube.com/watch?v=Ac8dnH2UPdQ"
    , "Credo: IV":"http://www.youtube.com/watch?v=Bycb5Fk7SZY"
    , "Credo: V":"http://www.youtube.com/watch?v=22-Amg3XrAg"
    , "Credo: VI":"http://www.youtube.com/watch?v=F7-iivVVYno"
    , "Custodi Me":"http://www.youtube.com/watch?v=bTR3TGjldc8"
    , "Da Pacem, Domine":"http://www.youtube.com/watch?v=eZgxaas-cEo"
    , "Da Pacem, Domine":"http://www.youtube.com/watch?v=Mn82EU4eOOY"
    , "Data Est Mihi":"http://www.youtube.com/watch?v=LyzhFEfR04s"
    , "De Profundis":"http://www.youtube.com/watch?v=597wi_oOjmU"
    , "De Profundis":"http://www.youtube.com/watch?v=81mqje9youA"
    , "De Profundis":"http://www.youtube.com/watch?v=BchdBdVROJE"
    , "De Profundis":"http://www.youtube.com/watch?v=Shj3oEEuG48"
    , "Dedit Dominus Confessionem Sancto Suo ":"http://www.youtube.com/watch?v=QrrSnKweft4"
    , "Deus, Deus Meus":"http://www.youtube.com/watch?v=HxjYWvF5ttc"
    , "Deus, Deus Meus":"http://www.youtube.com/watch?v=Ztm_vLGh2zA"
    , "Deus judex justus":"http://www.youtube.com/watch?v=IhGdX5toI5g"
    , "Deum Verum":"http://www.youtube.com/watch?v=kK5AohCMX0U"
    , "Dextera Domini":"http://www.youtube.com/watch?v=XgvTGPfp8Uc"
    , "Dextera Domini":"http://www.youtube.com/watch?v=sKcAoJkliRc"
    , "Dicite In Gentibus":"http://www.youtube.com/watch?v=SDDmOqN9jIE"
    , "Dies Ira":"http://www.youtube.com/watch?v=fCz_kNFludA"
    , "Dies Irae":"http://www.youtube.com/watch?v=dsn9LWh230k"
    , "Dies Irae":"http://www.youtube.com/watch?v=60f2dtXrsT8"
    , "Dies Sanctificatus":"http://www.youtube.com/watch?v=pv8lFyLgjN4"
    , "Dignus Est Agnus":"http://www.youtube.com/watch?v=JdqVwLh3L50"
    , "Dirigatur":"http://www.youtube.com/watch?v=-UUVckY2W2A"
    , "Domine convertere":"http://www.youtube.com/watch?v=08qNG7kFKnI"
    , "Domine, Dominus Noster":"http://www.youtube.com/watch?v=3oFWYbg6Cwc"
    , "Domine Jesu Christe":"http://www.youtube.com/watch?v=8SjzLy26xPA"
    , "Dominus Dicit":"http://www.youtube.com/watch?v=-87FP7qShfw"
    , "Dominus Dixit Ad Me":"http://www.youtube.com/watch?v=eMy188bQ7K4"
    , "Dominus firmamentum meum":"http://www.youtube.com/watch?v=6wSCfFENWrw"
    , "Dominus illuminatio mea":"http://www.youtube.com/watch?v=sgMonZf4zLc"
    , "Dominus in Sina":"http://www.youtube.com/watch?v=lGkFZD4Lo8M"
    , "Dominus Jesus":"http://www.youtube.com/watch?v=TFyq7BGVBpo"
    , "Dum Complerentur":"http://www.youtube.com/watch?v=FcuiJtmjfEs"
    , "Ecce Advenit":"http://www.youtube.com/watch?v=DeOOaOvwEMc"
    , "Ecce Sacerdos Magnus":"http://www.youtube.com/watch?v=HA0hA-07UyM"
    , "Ecce Vidimus Eum":"http://www.youtube.com/watch?v=130PnkUXPY0"
    , "Ecce Virgo":"http://www.youtube.com/watch?v=0GCC4xHbjTI"
    , "Eduxit Dominus":"http://www.youtube.com/watch?v=QEAxgr6yqEQ"
    , "Eduxit Eos Domine":"http://www.youtube.com/watch?v=1_okVGmhhKY"
    , "Eloisa et Abelardo":"http://www.youtube.com/watch?v=aulY_6tn6Bo"
    , "Emitte Spiritum Tuum":"http://www.youtube.com/watch?v=pyDHPxjiuBY"
    , "Erit Vobis":"http://www.youtube.com/watch?v=DiWOfXrHqRA"
    , "Esto Mihi":"http://www.youtube.com/watch?v=CFQ2HA1STzA"
    , "Exsurge":"http://www.youtube.com/watch?v=b6gn-Gmj9tk"
    , "Excita, Domine":"http://www.youtube.com/watch?v=vjZ54RVMZ10"
    , "Facta Est":"http://www.youtube.com/watch?v=XcLN7kEYcD0"
    , "Factus Est":"http://www.youtube.com/watch?v=le8rkxSICsg"
    , "Felix Es Sacra":"http://www.youtube.com/watch?v=V0GalIqRP7M"
    , "Flores Apparuerunt":"http://www.youtube.com/watch?v=kvRcGRTi_wE"
    , "Gaudeamus Omnes":"http://www.youtube.com/watch?v=3To5kWHSm5g"
    , "Gaudeamus omnes in Domino":"http://www.youtube.com/watch?v=r7nFmuNeA1Y"
    , "Gaudens Gaudebo":"http://www.youtube.com/watch?v=9wM4Rd88sNA"
    , "Gaudete Christus est natus":"http://www.youtube.com/watch?v=LDv_CoLjodo"
    , "Genuit Puerpera Regem":"http://www.youtube.com/watch?v=Gcolr6lmlIo"
    , "Gloria: I":"http://www.youtube.com/watch?v=gVLlP0uoSFg"
    , "Gloria: II":"http://www.youtube.com/watch?v=MTWuY_PUAsA"
    , "Gloria: III":"http://www.youtube.com/watch?v=FFHQcvHNobE"
    , "Gloria: IV":"http://www.youtube.com/watch?v=PyHDnhE5AL4"
    , "Gloria: V":"http://www.youtube.com/watch?v=SJlvwql_iDI"
    , "Gloria: VIII":"http://www.youtube.com/watch?v=Ny5s89sqf5A"
    , "Gloria: IX":"http://www.youtube.com/watch?v=wvp3df9e5Qk"
    , "Gloria: X":"http://www.youtube.com/watch?v=2PDJXG3wurU"
    , "Gloria in excelsis Deo":"http://www.youtube.com/watch?v=JM6qmf_C7pU"
    , "Gloria Laus":"http://www.youtube.com/watch?v=mX47Wj_UTQg"
    , "Gloriosa":"http://www.youtube.com/watch?v=_lyOZNdMw8Q"
    , "Gustate et videte":"http://www.youtube.com/watch?v=oWFNUQWdfAE"
    , "Haec dies quam fecit Dominus":"http://www.youtube.com/watch?v=KAxC-rtTUag"
    , "Haec Dies Quam Fecit Dominus":"http://www.youtube.com/watch?v=xxox8JF1gyw"
    , "Haec Dies":"http://www.youtube.com/watch?v=nvbChUi9Nzo"
    , "Haec Dies":"http://www.youtube.com/watch?v=9BC19QSC_a0"
    , "Hoc Corpus":"http://www.youtube.com/watch?v=O9aDwiaEYEA"
    , "Hodie Christus Natus Est":"http://www.youtube.com/watch?v=vynCA91HDGM"
    , "Hodie Christus natus Est":"http://www.youtube.com/watch?v=Lkoav0thwkg"
    , "Homo Quidem Fecit":"http://www.youtube.com/watch?v=sUmxUInFFfg"
    , "Homo Quidam":"http://www.youtube.com/watch?v=UYxBLLfMa8k"
    , "Hosanna Filio David":"http://www.youtube.com/watch?v=QotYtpW8Qx4"
    , "In Die Solemnitatis Vestrae":"http://www.youtube.com/watch?v=vlJHAsNzSTc"
    , "In Diebus Illis":"http://www.youtube.com/watch?v=UixeywBSVNM"
    , "In Exitu Israel":"http://www.youtube.com/watch?v=8yVw8tzIfuE"
    , "In Medio Ecclesiae":"http://www.youtube.com/watch?v=FEJr-9_ml4k"
    , "In Paradisum":"http://www.youtube.com/watch?v=Hg43i3Nsl9g"
    , "In Paradisum":"http://www.youtube.com/watch?v=S7F-N-Yd8dE"
    , "In Te Speravi":"http://www.youtube.com/watch?v=ssOglVIdIs4"
    , "In Te Speravi":"http://www.youtube.com/watch?v=1_8Nrx-67EY"
    , "Intellige Clamorem Meum":"http://www.youtube.com/watch?v=pWASO-EXKjo"
    , "Intonuit De Caelo":"http://www.youtube.com/watch?v=SsRU9fTLE4s"
    , "Introduxit Vos":"http://www.youtube.com/watch?v=RgEgbYItALE"
    , "Inviolata":"http://www.youtube.com/watch?v=GD1AOTNjqjc"
    , "Iste Confessor Domini":"http://www.youtube.com/watch?v=ste06UzUd6w"
    , "Jacta Cogitatum Tuum":"http://www.youtube.com/watch?v=ykmtiSgDANw"
    , "Jacta Cogitatum Tuum":"http://www.youtube.com/watch?v=Qwm88BmNap0"
    , "Jesu Redemptor Omnium":"http://www.youtube.com/watch?v=myx92VKB8lc"
    , "Jesum Tradidit":"http://www.youtube.com/watch?v=9g8RLl7GX90"
    , "Jesus Autem":"http://www.youtube.com/watch?v=fDDsBXYYZdU"
    , "Jubilate Deo":"http://www.youtube.com/watch?v=r3N-BwmF1BE"
    , "Jubilate Deo":"http://www.youtube.com/watch?v=BdCLmAKjjYE"
    , "Jubilate Deo":"http://www.youtube.com/watch?v=lU17YmUTKHc"
    , "Juravit":"http://www.youtube.com/watch?v=ifI825uTmDI"
    , "Justitiae Domini":"http://www.youtube.com/watch?v=bjVsqIKMqAA"
    , "Justorum Animae":"http://www.youtube.com/watch?v=nNS6auBRlF0"
    , "Justus Germinabit":"http://www.youtube.com/watch?v=7MN6TTp24io"
    , "Justus ut Palma Florebit":"http://www.youtube.com/watch?v=S-PRXkKUIg0"
    , "Kyrie: a":"http://www.youtube.com/watch?v=GDL-AzHq7vY"
    , "Kyrie: b":"http://www.youtube.com/watch?v=44GXf67CA54"
    , "Kyrie: Fons Bonitatis":"http://www.youtube.com/watch?v=dGKqS0nubh0"
    , "Kyrie: I":"http://www.youtube.com/watch?v=KnBzUj_K3Ic"
    , "Kyrie: IV":"http://www.youtube.com/watch?v=EMv4du5CQzk"
    , "Kyrie: VIII":"http://www.youtube.com/watch?v=O4T4BkXvSPw"
    , "Kyrie: IX ":"http://www.youtube.com/watch?v=5dDrx7Mmm4s"
    , "Kyrie: X":"http://www.youtube.com/watch?v=DpyKPYrTCcA"
    , "Kyrie: XI":"http://www.youtube.com/watch?v=SHx8PIjP34U"
    , "Kyrie: XIV":"http://www.youtube.com/watch?v=pqDIEjQfdNk"
    , "Kyrie: XVII":"http://www.youtube.com/watch?v=22W_JsYiwCc"
    , "Kyrie: XVIII":"http://www.youtube.com/watch?v=KcZfFfOjl8U"
    , "Kyrie: + organ":"http://www.youtube.com/watch?v=dG-gOLUnAN0"
    , "Laetatus Sum":"http://www.youtube.com/watch?v=_CTirEb68B0"
    , "Laetatus Sum":"http://www.youtube.com/watch?v=JImOPIV0Q0U"
    , "Laetetur cor":"http://www.youtube.com/watch?v=Rd-IqnC5VEw"
    , "Lauda Sion Salvatorem":"http://www.youtube.com/watch?v=74rxEWEektY"
    , "Lauda Sion Salvatorem":"http://www.youtube.com/watch?v=z3b8AYnx6Qc"
    , "Laudate Deum":"http://www.youtube.com/watch?v=j58FD0tq7Zw"
    , "Laudate Pueri Dominum":"http://www.youtube.com/watch?v=o-UKW4N0Egs"
    , "Libera Me":"http://www.youtube.com/watch?v=YnXpsJMqewo"
    , "Lux fulgebit":"http://www.youtube.com/watch?v=lrIgvzkPFzE"
    , "Lauda Sion Salvatorem":"http://www.youtube.com/watch?v=qjyFJBABHFw"
    , "Libera me, Domine":"http://www.youtube.com/watch?v=e28H76aT0DY"
    , "Lumen ad revelationem gentium":"http://www.youtube.com/watch?v=01_vzG8myig"
    , "Lux Aeterna":"http://www.youtube.com/watch?v=X6V8GxBZjxg"
    , "Magnificat anima mea Dominum":"http://www.youtube.com/watch?v=fEzkj8v0fhQ"
    , "Magnificat":"http://www.youtube.com/watch?v=EXub6v3e8-Y"
    , "Midnight Mass":"http://www.youtube.com/watch?v=Ye-HAS7NUrE"
    , "Montes Gilboe":"http://www.youtube.com/watch?v=pAdu_q3EVRQ"
    , "Multifarie Olim":"http://www.youtube.com/watch?v=e7yN9HQNFuc"
    , "Nos autem":"http://www.youtube.com/watch?v=-LULYhsQH4E"
    , "Nos autem":"http://www.youtube.com/watch?v=fMcwzU7oTTE"
    , "Nunc Scio Vere":"http://www.youtube.com/watch?v=LvT2siwqZCI"
    , "O Adonai":"http://www.youtube.com/watch?v=dn1cloz0ssQ"
    , "O Clavis David":"http://www.youtube.com/watch?v=fDg29sswhgQ"
    , "O Emmanuel":"http://www.youtube.com/watch?v=wdu0HjiLEn4"
    , "O Oriens":"http://www.youtube.com/watch?v=1BsZH7e27Dg"
    , "O Radix Jesse":"http://www.youtube.com/watch?v=VFE7B-DZ8_w"
    , "O Rex Gentium":"http://www.youtube.com/watch?v=5GvDvgfLoUo"
    , "O Sapientia":"http://www.youtube.com/watch?v=8ngcQDQfhlA"
    , "O Sapientia":"http://www.youtube.com/watch?v=S6zaiZxJIpU"
    , "Odoriferum lilium":"http://www.youtube.com/watch?v=GkdtYIPN9ic"
    , "Oliva fructifera":"http://www.youtube.com/watch?v=bSth8RbeZyc"
    , "Omnes de Saba":"http://www.youtube.com/watch?v=7o8K7neGyt4"
    , "Oportebat Pati Christum":"http://www.youtube.com/watch?v=H7vVeoylbDw"
    , "Ostende Nobis":"http://www.youtube.com/watch?v=d_E8FqDhNLw"
    , "Os Justi Meditabitur":"http://www.youtube.com/watch?v=QQ-dbbilo1Y"
    , "Pange Lingua":"http://www.youtube.com/watch?v=j3TmQr0h7ew"
    , "Pange Lingua (Corpus Christi)":"http://www.youtube.com/watch?v=U-AsvDn87fo"
    , "Panis":"http://www.youtube.com/watch?v=hs5yOzAoFX4"
    , "Pater Noster":"http://www.youtube.com/watch?v=krrvQuesZRI"
    , "Paucitas diérum me":"http://www.youtube.com/watch?v=iNKN8UQbeFQ"
    , "Populus Acquisitionis":"http://www.youtube.com/watch?v=e_ZB7wKU5V8"
    , "Populus Sion":"http://www.youtube.com/watch?v=_PqIlx5w_24"
    , "Portae Caeli":"http://www.youtube.com/watch?v=bpDLvW5MPbM"
    , "Post Partum":"http://www.youtube.com/watch?v=ODqQFYfTloo"
    , "Potum Meum":"http://www.youtube.com/watch?v=6e9tmQju4fo"
    , "Prope Est Dominus":"http://www.youtube.com/watch?v=c89q42GMQtc"
    , "Psallite Domino":"http://www.youtube.com/watch?v=fM0RtUFVPtY"
    , "Psallite Domino":"http://www.youtube.com/watch?v=fM0RtUFVPtY"
    , "Puer natus est":"http://www.youtube.com/watch?v=sp-fWQxbtq0"
    , "Puer natus est":"http://www.youtube.com/watch?v=ASpva3d1VEw"
    , "Puer natus est":"http://www.youtube.com/watch?v=lfwuZaf6WXw"
    , "Pueri Hebraeorum":"http://www.youtube.com/watch?v=9w-z5U1EHZU"
    , "Qui manducat":"http://www.youtube.com/watch?v=uuHGimoNH-k"
    , "Qui Posuit":"http://www.youtube.com/watch?v=WQFZJLkJ3Tg"
    , "Qui sedes Domine":"http://www.youtube.com/watch?v=LjV7r32izjw"
    , "Qui Sedes Domine":"http://www.youtube.com/watch?v=LjV7r32izjw"
    , "Quomodo Sedet Solo":"http://www.youtube.com/watch?v=bZUa7tqhELU"
    , "Quotiescumque":"http://www.youtube.com/watch?v=v1spC16XqCQ"
    , "Recordare, Virgo Mater":"http://www.youtube.com/watch?v=Bg5MGsV0mTA"
    , "Reges Tharsis":"http://www.youtube.com/watch?v=aCJU7dtkho4"
    , "Regina Caeli":"http://www.youtube.com/watch?v=rXJbSJmb1vg"
    , "Regina Caeli":"http://www.youtube.com/watch?v=6-EJiI_yAas"
    , "Repleatur":"http://www.youtube.com/watch?v=5QUxD3IlzfA"
    , "Requiem Aeternam":"http://www.youtube.com/watch?v=-zpHs8bf4k4"
    , "Requiem Aeternam":"http://www.youtube.com/watch?v=TjrsqJaLDOg"
    , "Respira":"http://www.youtube.com/watch?v=Aoj2kGBddRA"
    , "Responsorium: Ecce quomodo":"http://www.youtube.com/watch?v=sKm54iQ1i-M"
    , "Resurrexi":"http://www.youtube.com/watch?v=LNstcQnf6vs"
    , "Resurrexi":"http://www.youtube.com/watch?v=rKcRi6hLaE8"
    , "Rorate Caeli 1":"http://www.youtube.com/watch?v=lKWZaopi_sY"
    , "Rorate Caeli 2":"http://www.youtube.com/watch?v=f06qdhO_sEY&NR=1&feature=endscreen"
    , "Rorate Caeli 3":"http://www.youtube.com/watch?v=S0Rv5F88WYA"
    , "Salve Festa Dies":"http://www.youtube.com/watch?v=XL6iIj3ZA6U"
    , "Salve Regina (Simple Tone)":"http://www.youtube.com/watch?v=CAmydVsNMqM"
    , "Salve Regina (Solemn Tone)":"http://www.youtube.com/watch?v=0OIDAc-zFkY"
    , "Salve Sancta Parens":"http://www.youtube.com/watch?v=o_up2KooWcE"
    , "Sanctum Domini lambertum":"http://www.youtube.com/watch?v=D5yG3DmuUDs"
    , "Sanctus: A":"http://www.youtube.com/watch?v=W7aAav4f4o0"
    , "Sanctus: B":"http://www.youtube.com/watch?v=hAiECJf5Ouo"
    , "Sanctus: C":"http://www.youtube.com/watch?v=y6wwEZ41Z4c"
    , "Sanctus: C":"http://www.youtube.com/watch?v=rvAd0tp0Urs"
    , "Sanctus: I":"http://www.youtube.com/watch?v=1JXcSmSLfbI"
    , "Sanctus: III":"http://www.youtube.com/watch?v=M-jwPnDwLoM"
    , "Sanctus: IV":"http://www.youtube.com/watch?v=BYqqKOQGPcA"
    , "Sanctus: VIII":"http://www.youtube.com/watch?v=zjmrltyMJtM"
    , "Sanctus: IX":"http://www.youtube.com/watch?v=xgL_IBUh3ps"
    , "Sanctus: X":"http://www.youtube.com/watch?v=_b6IjvHPxjY"
    , "Sanctus: XI":"http://www.youtube.com/watch?v=Guq_Y0vKzqw"
    , "Sanctus: XIV":"http://www.youtube.com/watch?v=sw1qfp00Pgk"
    , "Sanctus: XVII":"http://www.youtube.com/watch?v=lTFHtWV6K_w"
    , "Sanctus: XVIII":"http://www.youtube.com/watch?v=BxZobRDmVDc"
    , "Sedebit Dominus":"http://www.youtube.com/watch?v=150opgLv9Fw"
    , "Si Consurrexistis":"http://www.youtube.com/watch?v=3VTWWlsL4WY"
    , "Sicut Cervus":"http://www.youtube.com/watch?v=Cr9cjzv3qCI"
    , "Signum Magnum":"http://www.youtube.com/watch?v=L08CHi5hgaI"
    , "Signum Magnum":"http://www.youtube.com/watch?v=RCRkXomjyEY"
    , "Solis, O Virgo":"http://www.youtube.com/watch?v=Hj3MXFe_pKM"
    , "Solemnitas":"http://www.youtube.com/watch?v=TBiLFgpIMWk"
    , "Spiritus Domini":"http://www.youtube.com/watch?v=Yo4KTWIt2oQ"
    , "Spiritus Domini":"http://www.youtube.com/watch?v=nzNz09-qBUY"
    , "Surrexit Christus Qui":"http://www.youtube.com/watch?v=IIt9zuH88mk"
    , "Surrexit Dominus":"http://www.youtube.com/watch?v=7hNqWGNZLuc"
    , "Spiritus Domini":"http://www.youtube.com/watch?v=FYQ8aWriyys"
    , "Stabat Mater Dolorosa":"http://www.youtube.com/watch?v=HJ_nGZU439g"
    , "Sub Tuum Praesidium":"http://www.youtube.com/watch?v=gSmykQ9DLOg"
    , "Tantum Ergo":"http://www.youtube.com/watch?v=VHtlAqkwhH0"
    , "Tantum Ergo":"http://www.youtube.com/watch?v=wIhIDHwccdY"
    , "Tantum Ergo":"http://www.youtube.com/watch?v=GeMCuTaf04Q"
    , "Tantum Ergo":"http://www.youtube.com/watch?v=izewFtLgq2I"
    , "Te Deum laudamus":"http://www.youtube.com/watch?v=sqwV9l-U8ds"
    , "Te Deum laudamus":"http://www.youtube.com/watch?v=sLwBlTaOGIQ"
    , "Te Lucis Ante Terminum: A":"http://www.youtube.com/watch?v=bw_Oaa1m-do"
    , "Te Lucis Ante Terminum: B":"http://www.youtube.com/watch?v=-nEUHkEfuH4"
    , "Te Lucis Ante Terminum: C":"http://www.youtube.com/watch?v=2W1ZlJg7P04"
    , "Te Lucis Ante Terminum: D":"http://www.youtube.com/watch?v=kS3lKtpN-RU"
    , "Te Lucis Ante Terminum: E":"http://www.youtube.com/watch?v=CagC4beh_Pg"
    , "Te Lucis Ante Terminum: F":"http://www.youtube.com/watch?v=jg89ynz75ZA"
    , "Te Lucis Ante Terminum: G":"http://www.youtube.com/watch?v=kw_EYeKwCQM"
    , "Te Lucis Ante Terminum: H":"http://www.youtube.com/watch?v=YhQraTirLQI"
    , "Te Lucis Ante Terminum: I":"http://www.youtube.com/watch?v=lrHWr_CcvKU"
    , "Te Saeculorum Principem":"http://www.youtube.com/watch?v=kWQr2aZXIIY"
    , "Tecum Principium":"http://www.youtube.com/watch?v=Y8doUj6O198"
    , "Tenebrae Factae Sunt":"http://www.youtube.com/watch?v=vE6O-a5pc50"
    , "Terra Tremuit":"http://www.youtube.com/watch?v=Nd27Ewu_Lr8"
    , "Testamentum Aeternum":"http://www.youtube.com/watch?v=74d3gWJOV-4"
    , "The Seven Sorrows of Mary":"http://www.youtube.com/watch?v=8KPgTUDhSkc"
    , "Tota Pulchra Es, Maria":"http://www.youtube.com/watch?v=AckG5Q2R5nw"
    , "Trisagion":"http://www.youtube.com/watch?v=uW32lLNDa4k"
    , "Tu Es Petrus":"http://www.youtube.com/watch?v=6wi-sqg93LA"
    , "Ubi Caritas":"http://www.youtube.com/watch?v=b_QEP-RHYLY"
    , "Ubi Caritas":"http://www.youtube.com/watch?v=znJDWsv-Osw"
    , "Ubi Caritas":"http://www.youtube.com/watch?v=8Ep3o7g0Yrw"
    , "Universi":"http://www.youtube.com/watch?v=lC0CyAe-llA"
    , "Veni Creator Spiritus":"http://www.youtube.com/watch?v=Kphky63gK5I"
    , "Veni Creator Spiritus":"http://www.youtube.com/watch?v=Kphky63gK5I"
    , "Veni Creator Spiritus":"http://www.youtube.com/watch?v=VnUJWDEQDW4"
    , "Veni Domine":"http://www.youtube.com/watch?v=nNHczkxCGrI"
    , "Veni veni Emmanuel":"http://www.youtube.com/watch?v=IjUHjJ_frtg"
    , "Veni veni Emmanuel":"http://www.youtube.com/watch?v=J1QG554QQiU"
    , "Veni Sancte Spiritus":"http://www.youtube.com/watch?v=Z6hqAfsHURo"
    , "Veni Sancte Spiritus":"http://www.youtube.com/watch?v=qRkJhfbNWrQ"
    , "Venite Benedicti":"http://www.youtube.com/watch?v=5KQafTckDf8"
    , "Vere Tu Es":"http://www.youtube.com/watch?v=axfV31IRmXk"
    , "Victimae Paschali":"http://www.youtube.com/watch?v=sAo30la5fUE"
    , "Victricem Manum Tuam":"http://www.youtube.com/watch?v=ULrcvfVnqKA"
    , "Video Caelos Apertos":"http://www.youtube.com/watch?v=IgE5apvJvtM"
    , "Viderunt Omnes":"http://www.youtube.com/watch?v=EN73kO2_PZA"
    , "Vidi Aquam":"http://www.youtube.com/watch?v=zTBi126OWkQ"
    , "Vidimus Stellam":"http://www.youtube.com/watch?v=eRzuz5QFH8w"
    , "Virga Jesse Floruit":"http://www.youtube.com/watch?v=0oCjm3PBTAg"
    , "Virgo Prudentissima":"http://www.youtube.com/watch?v=Q-jGa7hIk6Y"
    , "Viri Galilaei":"http://www.youtube.com/watch?v=0G2j5qktpE4"
    , "Vocem Jucunditatis":"http://www.youtube.com/watch?v=hP7ii4451Oo"
    , "Vultum Tuum":"http://www.youtube.com/watch?v=ohB3hdVLE-0"
  };




  return printObj(gregorianaObj);
  }; // end of gregoriana
  
    ////////////////////////////////////
    /*

    var html5 = [
    '<hr><b>A</b><br>'
    , '<!--A-->'
    , '<a href="http://www.w3schools.com/tags/canvas_addcolorstop.asp" target="_blank">addColorStop()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_arc.asp" target="_blank">arc()</a><br>'
    



    , '<!--B-->'
    , '<hr><b>B</b><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_beginpath.asp" target="_blank">beginPath()</a><br>'
    



    , '<!--C-->'
    , '<hr><b>C</b><br>'
    , '<a href="http://www.w3schools.com/html/html5_canvas.asp" target="_blank">canvas</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_createlineargradient.asp" target="_blank">createLinearGradient()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_createradialgradient.asp" target="_blank">createRadialGradient()</a><br>'

    


    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'
    

    
    
    
    



    , '<!--E-->'
    , '<hr><b>E</b><br>'
    
    , '<!--F-->'
    , '<hr><b>F</b><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_fillrect.asp" target="_blank">fillRect()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_fillstyle.asp" target="_blank">fillStyle</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_filltext.asp" target="_blank">fillText()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_font.asp" target="_blank">font=</a><br>'
    


    , '<!--G-->'
    , '<hr><b>G</b><br>'
    , '<a href="http://www.w3schools.com/jsref/met_doc_getelementbyid.asp" target="_blank">getElementById()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_drawimage.asp" target="_blank">drawImage()</a><br>'
    , '<!--H-->'
    , '<hr><b>H</b><br>'
    


    
    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'
    
    

    


    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_lineto.asp" target="_blank">lineTo()</a><br>'
    

    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_moveto.asp" target="_blank">moveTo()</a><br>'

    
    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    

    , '<!--P-->'
    , '<hr><b>P</b><br>'
    


    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    
    
    
    


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_stroke.asp" target="_blank">stroke()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_stroketext.asp" target="_blank">strokeText()</a><br>'



    , '<!--T-->'
    , '<hr><b>T</b><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    
    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  
    





    ];


    ///////////////
    
    

    var _java = [
    '<hr><b>A</b><br>'
    , '<!--A-->'
    , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)" target="_blank">append()</a><i> StringBuffer</i><br>' 
    



    , '<!--B-->'
    , '<hr><b>B</b><br>'
    



    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'
    

    
    
    
    



    , '<!--E-->'
    , '<hr><b>E</b><br>'
    
    , '<!--F-->'
    , '<hr><b>F</b><br>'
    


    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    



    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'
    
    

    


    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()" target="_blank">length()</a><i> String</i><br>'
    , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()" target="_blank">length()</a><i> StringBuffer</i><br>'
    

    , '<!--M-->'
    , '<hr><b>M</b><br>'

    
    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    

    , '<!--P-->'
    , '<hr><b>P</b><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    
    
    
    


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html" target="_blank">StringBuffer</a><br>'
    , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)" target="_blank">substring()</a><i> StringBuffer</i><br>'
    



    , '<!--T-->'
    , '<hr><b>T</b><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    
    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  




    ];


    ////////////////
    var javascript = [



    '<hr><b>A</b><br>'
    , '<!--A-->'




    , '<!--B-->'
    , '<hr><b>B</b><br>'




    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="http://www.w3schools.com/js/js_obj_date.asp" target="_blank">Date</a><i> object</i><br>'
    , '<a href="http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock" target="_blank">display a clock</a><br>'









    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="http://www.lynda.com/JavaScript-tutorials/Essential-Training-2011/81266-2.html" target="_blank">Essential trainiung</a> <i></i><br>'

    , '<!--F-->'
    , '<hr><b>F</b><br>'



    , '<!--G-->'
    , '<hr><b>G</b><br>'
    , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday" target="_blank">getDay()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear" target="_blank">getFullYear()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime" target="_blank">getTime()</a><br>'



    , '<!--H-->'
    , '<hr><b>H</b><br>'




    , '<!--I-->'
    , '<hr><b>I</b><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_html_innerhtml.asp" target="_blank">innerHTML=</a><i> property</i><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'
    , '<a href="http://www.w3schools.com/js/default.asp" target="_blank">JavaScript</a> <i>w3schools</i><br>'
    , '<a href="http://jsfiddle.net/" target="_blank">JS Fiddle</a> <i></i><br>'
    , '<a href="http://doc.jsfiddle.net/tutorial.html" target="_blank">JS Fiddle Tutorial</a> <i></i><br>'
    , '<a href="http://www.jshint.com/" target="_blank">JS hint</a> <i>error detection</i><br>'
    , '<a href="http://eleventyone.done.hu/OReilly.JavaScript.The.Good.Parts.May.2008.pdf" target="_blank">JS the Good Parts</a> <i></i><br>'








    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'


    , '<!--M-->'
    , '<hr><b>M</b><br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<a href="http://www.w3schools.com/jsref/event_onclick.asp" target="_blank">onclick=</a><i> event</i><br>'


    , '<!--P-->'
    , '<hr><b>P</b><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'






    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_setfullyear2" target="_blank">setFullYear()</a><br>'
    , '<a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">setInterval()</a> <i></i><br>'
    , '<a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">setTimeOut()</a> <i></i><br>'




    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_toutcstring" target="_blank">toUTCString()</a><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>' 


    , '<hr>'
    , 'JS Fiddle examples:<br>'
    , '-------------------<br>'
    , '<a href="http://jsfiddle.net/igoryen/3pEyA/" target="_blank">Hello World!</a> <i></i><br>'
    , '<a href="http://jsfiddle.net/igoryen/3pEyA/1/" target="_blank">Hello World!</a> <i></i><br>'
    , '<a href="http://jsfiddle.net/igoryen/3pEyA/2/" target="_blank">Hello World!</a> <i></i><br>'
    , '<a href="http://jsfiddle.net/praveen_prasad/XNJxT/14/" target="_blank">Hello World!</a> <i></i><br>'
    , '<a href="http://jsfiddle.net/rniemeyer/bxfXd/" target="_blank">List</a> <i></i><br>'
    , '<a href="http://jsfiddle.net/rwaldron/xhXE6/" target="_blank">Popcorn</a> <i></i><br>'
    , '-------------------<br>'



    ];


    var l10n = [

    '<hr><b>A</b><br>'
    , '<!--A-->'




    , '<!--B-->'
    , '<hr><b>B</b><br>'




    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'










    , '<!--E-->'
    , '<hr><b>E</b><br>'


    , '<!--F-->'
    , '<hr><b>F</b><br>'



    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    , '<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html" target="_blank">Header field definitions</a> <i></i><br>'




    , '<!--I-->'
    , '<hr><b>I</b><br>'
    , '<a href="http://en.wikipedia.org/wiki/IETF_language_tag" target="_blank"><abbr title="Internet engineering task force">IETF</abbr> language tag</a> <i></i><br>'
    , '<a href="http://www.i18nguy.com/" target="_blank">i18n guy</a> <i></i><br>'
    , '<a href="http://ejohn.org/blog/a-strategy-for-i18n-and-node/" target="_blank">i18n in Node</a> <i></i><br>'
    , '<a href="http://iloveyou-localized.herokuapp.com/" target="_blank">I love you</a> <i>localized</i><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'






    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="https://github.com/mozilla/i18n-abide" target="_blank">l10n-abide</a> <i></i><br>'
    , '<a href="https://hacks.mozilla.org/2013/04/localization-community-tools-process-part-2-of-3-a-node-js-holiday-season-part-10/" target="_blank">l10n community</a> <i></i><br>'
    , '<a href="http://www.i18nguy.com/unicode/language-identifiers.html" target="_blank">Language identifiers</a> <i></i><br>'



    , '<!--M-->'
    , '<hr><b>M</b><br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'


    , '<!--P-->'
    , '<hr><b>P</b><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'






    , '<!--S-->'
    , '<hr><b>S</b><br>'




    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="https://www.transifex.com/" target="_blank">Transifex</a> <i></i><br>'
    , '<a href="http://help.transifex.com/contents.html" target="_blank">Transifex</a> <i>documentation</i><br>'




    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  








    ];



    var latina = [
    'Latina<br>'
    , '<hr>'


    , '<hr><b>A</b><br>'
    , '<!--A-->'




    , '<!--B-->'
    , '<hr><b>B</b><br>'




    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









    , '<!--E-->'
    , '<hr><b>E</b><br>'

    , '<!--F-->'
    , '<hr><b>F</b><br>'



    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'




    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'






    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://www.frcoulter.com/latin/links.html" target="_blank">Latin Links</a> >><br>'
    , '<a href="https://sites.google.com/site/janualinguae/latin" target="_blank">Latinum</a> <i></i><br>'

    , '<!--M-->'
    , '<hr><b>M</b><br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'
    , '<a href="http://yle.fi/radio1/tiede/nuntii_latini/" target="_blank">Nuntii Latini</a> <i></i><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<a href="http://www.orbilat.com/" target="_blank">Orbilat</a><br>'


    , '<!--P-->'
    , '<hr><b>P</b><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    , '<a href="file:///D:/Language/Latina/html/latinitas_recens_latine.html" target="_blank">Recens Latinitas </a> <i> c. 2350 words</i><br>'
    , '<a href="http://www.antimoon.com/forum/t2129-0.htm" target="_blank">Romanian closest to Classical Latin</a> <i></i><br>'






    , '<!--S-->'
    , '<hr><b>S</b><br>'




    , '<!--T-->'
    , '<hr><b>T</b><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  





    ];


    

    var p_w = [

    '<!--A-->'
    , '<hr><b>A</b><br>'
    



    , '<!--B-->'
    , '<hr><b>B</b><br>'
    



    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'


    
    
    
    



    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="http://www.youtube.com/watch?v=WUJSElja3d4" target="_blank">Eighth Wonder</a> <i>WhiteHeart</i><br>'
    
    , '<!--F-->'
    , '<hr><b>F</b><br>'



    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'




    , '<!--I-->'
    , '<hr><b>I</b><br>'
    , '<a href="https://www.youtube.com/watch?v=aLcpLD5DHDU" target="_blank">I will enter His Gates</a> <i>Maranatha</i><br>'
    , '<a href="https://www.youtube.com/watch?v=nr_YiSZ8KBc" target="_blank">I will enter His Gates</a> <i></i><br>'


    , '<!--J-->'
    , '<hr><b>J</b><br>'



    


    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    

    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="https://www.youtube.com/watch?v=F3X0KhvJwsQ" target="_blank">Maranatha Double Praise 1</a> <i></i><br>'
    , '<a href="https://www.youtube.com/watch?v=jfAbAOI-aj0" target="_blank">Maranatha Double Praise 2</a> <i></i><br>'
    , '<a href="https://www.youtube.com/watch?v=Z_Sg93io5c4" target="_blank">Maranatha Double Praise 3</a> <i></i><br>'
    , '<a href="https://www.youtube.com/watch?v=dd0O7GPR6QE" target="_blank">Maranatha Double Praise 4</a><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 5</a> <i></i><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 6</a> <i></i><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 7</a> <i></i><br>'
    , '<a href="https://www.youtube.com/watch?v=Bl0R9AT0lPk" target="_blank">Maranatha Double Praise 8</a> <i></i><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 9</a> <i></i><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 10</a> <i></i><br>'
    , '<a href="https://www.youtube.com/watch?NR=1&feature=endscreen&v=uyrxmG1Ctio" target="_blank">Maranatha Double Praise 11</a> <i></i><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 12</a> <i></i><br>'
    , '<a href="" target="_blank">Maranatha Double Praise 13</a> <i></i><br>'
    , '<a href="https://www.youtube.com/watch?v=Pce_M-XT8Jc" target="_blank">Maranathe Double Praise 14</a> <i></i><br>'
    
    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    

    , '<!--P-->'
    , '<hr><b>P</b><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'


    
    


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    



    , '<!--T-->'
    , '<hr><b>T</b><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    
    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  


    ];



    var phpcodes = [
    '<!--A-->'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121025_arrays.php" target="_blank">Arrays</a><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/assign1/add.php" target="_blank">Asgmt 1 </a> <br>'
    , '<a href="https://zenit.senecac.on.ca/~int322_123a07/assign2/login.php" target="_blank">Asgmt 2 </a> <br>'

    , '<!--B-->'
    , '<hr><b>B</b><br>'

    , '<!--C-->'
    , '<hr><b>C</b><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/caseless.php" target="_blank">Caseless</a><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_01.php" target="_blank">Classes 01</a><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_02.php" target="_blank">Classes 02</a><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab5/cookies.php" target="_blank">Lab 5-1</a><i> cookies.php</i><br>'

    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_class_db_01.php" target="_blank">DB thru classes</a><br>'

    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121120_encrypting.php" target="_blank">Encrypting</a><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121024_advanced_escaping_001.php" target="_blank">Escaping (advanced)</a><br>'
    , '<!--F-->'
    , '<hr><b>F</b><br>'

    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'

    , '<!--I-->'
    , '<hr><b>I</b><br>'

    , '<!--J-->'
    , '<hr><b>J</b><br>'

    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab1/lab1.php" target="_blank">Lab 1 </a> <br>'  
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab2/forms-part3.php" target="_blank">Lab 2 </a> <br>'   
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab3/mysqlform.php" target="_blank">Lab 3 </a> <br>'  
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv.php" target="_blank">Lab 4-1 </a> <br>' 
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv2.php" target="_blank">Lab 4-2 </a> <br>' 
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv3.php" target="_blank">Lab 4-3 </a> <br>' 
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_4.php" target="_blank">Lab 4-4 </a> <br>' 
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_5.php" target="_blank">Lab 4-5 </a> <br>' 
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_6.php" target="_blank">Lab 4-6 </a> <br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php" target="_blank">Lab 5-2a</a><i> login.php</i><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php" target="_blank">Lab 5-2b</a><i> loginStatus.php</i><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/myClasses.php" target="_blank">Lab 6</a><i> myClasses.php</i><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php" target="_blank">Lab6</a> testmenu.php<br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/oo-login.php" target="_blank">oo-login.php</a> Lab 6<br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php" target="_blank">testMenu.php</a> Lab 6<br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/login_prx.php" target="_blank">login prx</a><br>'

    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_destructor_01.php" target="_blank">My_class</a><br>'

    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<!--P-->'
    , '<hr><b>P</b><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121028_regex.php" target="_blank">Reg Ex</a><br>'

    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'

    , '<!--S-->'
    , '<hr><b>S</b><br>'

    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_specialMethodsPHP5_test.php" target="_blank">Salve!</a><br>'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121028_strings.php" target="_blank">Strings</a><br>'

    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , ' Templating: '
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/templating/a.php" target="_blank">a.php</a> | '
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/templating/cc.html" target="_blank">cc.html</a> | '
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/templating/dd.php" target="_blank">dd.php</a> | '
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/ff.php" target="_blank">ff.php</a> | '
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/gg.php" target="_blank">gg.php</a> |'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/hh.php" target="_blank">hh.php</a> |'
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/test1.php" target="_blank">test1.php</a> | '
    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    , '<!--X-->'
    , '<hr><b>X</b><br>'
    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  




    ];



    var preach_teach =  [
    '<hr><b>A</b><br>'
    , '<!--A-->'
    



    , '<!--B-->'
    , '<hr><b>B</b><br>'
    



    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="http://www.youtube.com/watch?v=D_TXYEmqn6U" target="_blank">Devil`s under my feet</a><i> Hagin</i><br>'
    , '<a href="http://www.youtube.com/watch?v=NomZHolreBk" target="_blank">Doubt, Fear, and Unbelief</a><i> Hagin 1982</i><br>'

    
    
    
    



    , '<!--E-->'
    , '<hr><b>E</b><br>'
    
    , '<!--F-->'
    , '<hr><b>F</b><br>'
    


    , '<!--G-->'
    , '<hr><b>G</b><br>'
    , '<a href="http://www.youtube.com/watch?v=d2Wp5_bL338" target="_blank">God`s Medicine</a> <i>KH</i><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    , '<a href="http://www.youtube.com/playlist?list=PL4C095CACCE805213" target="_blank">Hagin</a><i></i><br>'



    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'
    , '<a href="https://www.youtube.com/watch?v=ljRKhZ81aqY" target="_blank">Horus</a><i></i><br>'
    

    


    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    

    , '<!--M-->'
    , '<hr><b>M</b><br>'

    
    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    

    , '<!--P-->'
    , '<hr><b>P</b><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    , '<a href="http://www.youtube.com/watch?v=-j8ZMMuu7MU" target="_blank">Rejection?</a><i></i><br>'
    
    
    


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    



    , '<!--T-->'
    , '<hr><b>T</b><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    
    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  




    ];


    var selfdefense = [

    '<hr><b>A</b><br>'
    , '<!--A-->'
    , '<a href="http://www.youtube.com/watch?v=K6r8MkqeSMM&feature=relmfu" target="_blank">Americana Move mounting</a><br>'

    , '<!--B-->'
    , '<hr><b>B</b><br>'

    , '<!--C-->'
    , '<hr><b>C</b><br>'
    , '<a href="http://www.youtube.com/watch?v=sS3iZ9rNaG8&feature=relmfu"target="_blank">Choke from above -> Arm Bar</a><br>'
    , '<a href="http://www.youtube.com/watch?v=fro50KwBDjg" target="_blank">Choke from under -> Arm Bar</a><br>'
    , '<a href="http://www.youtube.com/watch?v=XfSBGZz_6Mc&feature=relmfu" target="_blank">Clothes Grab -> Leg Sweep</a>'



    , '<!--D-->'
    , '<hr><b>D</b><br>'
    , '<a href="http://www.youtube.com/watch?v=erQ7AVtcwec" target="_blank">Demo (Jiujitsu)</a><br>'
    , '<a href="http://www.youtube.com/watch?v=g6sZSC66ul4&feature=relmfu" target="_blank">Demo (part 1)</a><br>'
    , '<a href="http://www.youtube.com/watch?v=Y600l5UbR10&feature=relmfu" target="_blank">Demo (part 2)</a><br>'
    , '<a href="http://www.youtube.com/watch?v=EzSdD22BqXM&feature=relmfu" target="_blank">Demo (part 3)</a><br>'

    , '<!--E-->'
    , '<hr><b>E</b><br>'

    , '<!--F-->'
    , '<hr><b>F</b><br>'

    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'

    , '<!--I-->'
    , '<hr><b>I</b><br>'

    , '<!--J-->'
    , '<hr><b>J</b><br>'

    , '<!--K-->'
    , '<hr><b>K</b><br>'
    , '<a href="http://www.youtube.com/watch?v=HA-2NRuTLkw" target="_blank">Kimura</a><br>'
    , '<a href="http://www.youtube.com/watch?v=san7xnrCAQc" target="_blank">Knock out</a><br>'
    


    , '<!--L-->'
    , '<hr><b>L</b><br>'

    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://www.youtube.com/watch?v=9nrYaxOqmaQ&feature=relmfu" target="_blank">Mounting -> Closed Guard</a><br>'
    , '<a href="http://www.youtube.com/watch?v=Ed_BQaWtyck&feature=relmfu" target="_blank">Mounted -> Kimura</a><br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<!--P-->'
    , '<hr><b>P</b><br>'

    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'


    , '<!--S-->'
    , '<hr><b>S</b><br>'

    , '<a href="http://www.youtube.com/watch?feature=fvwp&v=CW5VpKC9ocU&NR=1" target="_blank">Shoulder grab -> Hiji Gaeshi</a> '

    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://www.youtube.com/watch?v=mtAtWH8dh7o&feature=relmfu" target="_blank">Top Cross Choke mounting</a><br>'
    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    , '<!--X-->'
    , '<hr><b>X</b><br>'
    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  



    ];



    var seneca = [
    '<!--A-->'
    , '<a href="https://acs.senecac.on.ca/pages/index.php" target="_blank"><abbr title="Academic Computing Systems">ACS</abbr> site </a> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1738900" target="_blank">Alam, Tanvir rating</a><br>'

    , '<!--B-->'
    , '<hr><b>B</b><br>'




    , '<a href="https://www2.senecacollege.ca/buyback/index.jsp" target="_blank">Book Buyback</a><i> Seneca</i><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13003" target="_blank">Boyczuk, Bob rating</a><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1613500" target="_blank">Buchner, Mark rating</a><br>'


    , '<!--C-->'
    , '<hr><b>C</b><br>'

    , '<a href="https://inside.senecac.on.ca/clientservices" target="_blank">Client Services</a><i></i> <br>'
    , '<a href="https://scs.senecac.on.ca/~nebojsa.conkic/dbs301_work.html" target="_blank">Conkic, Nebojsa</a><i> DBS301</i> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13042" target="_blank">Conkic, Nebojsa rating</a><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=17894" target="_blank">Czegel, Barb rating</a><br>'



    , '<!--D-->'
    , '<hr><b>D</b><br>'
    , '<a href="https://scs.senecac.on.ca/~nebojsa.conkic/dbs301_work.html" target="_blank">DBS301</a><i> Conkic, Nebojsa</i> <br>' 
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=50506" target="_blank">Douglas, Brian rating</a><br>'


    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="https://my.senecacollege.ca/webapps/portal/frameset.jsp" target="_blank">EAC397: Blackboard </a><br>'
    , '<a href="https://senepr.senecacollege.ca/Empath65/HrLogin.aspx" target="_blank">Empath</a> <i></i><br>'


    , '<!--F-->'
    , '<hr><b>F</b><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=11374" target="_blank">Frey, Don rated</a><br>'

    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=33852" target="_blank">Heidenreich, Michal rating </a><br>'

    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<a href="https://zenit.senecac.on.ca/~int222_122b36/index.html" target="_blank">INT222: Zenit</a> <br>' 
    , '<a href="http://zenit.senecac.on.ca/~int322_123a07/" target="_blank">INT322: zenit </a><br>'

    , '<a href="http://igor01.azurewebsites.net/" target="_blank">igor01 </a><i> Azure</i><br>'




    , '<!--J-->'
    , '<hr><b>J</b><br>'


    , '<!--K-->'
    , '<hr><b>K</b><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13040" target="_blank">Kaduri, Harvey`s rating</a><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=526261" target="_blank">Kawenka, John rating</a><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1607604" target="_blank">Korsantia, Olga rating</a><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://zenit.senecac.on.ca/wiki/index.php/BAC344_03_2012" target="_blank">Laurin, Cindy`s BAC344</a> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=12975" target="_blank">Laurin, Cindy`s rating</a><br>'





    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1523999" target="_blank">Messinger, Gal rating</a><br>'
    , '<a href="https://open.senecac.on.ca/cms/" target="_blank" ><b>Moodle</b></a> <br>'
    , '<a href="https://my.senecacollege.ca/webapps/portal/frameset.jsp" target="_blank"><img alt="My Seneca" height="20" src="img/myseneca.gif"></a> <br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<a href="https://scs.senecac.on.ca/~emile.ohan/int222/index.html" target="_blank">Ohan, Emile`s INT222</a> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13920" target="_blank">Ohan, Emile rated</a><br>'


    , '<a href="https://cs.senecac.on.ca/~oop244/pages/practice/oldTests.html" target="_blank">OOP244: Old Tests</a> <br>'
    , '<a href="https://scs.senecac.on.ca/~oop244/" target="_blank">OOP244: Site </a> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1144727" target="_blank">Oslopov, Petr rating</a><br>'

    , '<!--P-->'
    , '<hr><b>P</b><br>'
    , '<a href="https://scs.senecacollege.ca/~brian.perry/" target="_blank">Perry, Brian</a><i> at Seneca</i><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=32480" target="_blank">Perry, Brian`s rating</a><br>'


    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=165590" target="_blank">Richards, Peter rating</a><br>'


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://www.senecacollege.ca/index.html" target="_blank"><img alt="Seneca College" height="15" src="img/seneca.png"></a><br>'

    , '<a href="https://scs.senecac.on.ca/ " target="_blank">Seneca , <abbr title="School of Computer Studies">SCS</abbr></a> <br>'
    , '<a href="https://inside.senecac.on.ca/clientservices " target="_blank">Seneca Client Services </a> <br>'





    , '<a href="https://inside.senecac.on.ca/transportation/campusbuses.html" target="_blank">Seneca Campus Bus Schedule </a> <br>'
    , '<a href="https://portal.microsoftonline.com/IWDefault.aspx" target="_blank">Seneca Email</a> <br>'
    , '<a href="http://seneca.experience.com/experience/login" target="_blank">Seneca Experience</a> <br>'

    , '<a href="https://scs.senecac.on.ca/staff-list" target="_blank">Seneca Staff List</a> <br>'
    , '<a href="https://net1.senecac.on.ca/login.pl?action=paint;source=10.255.137.89;destination=http%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dsenenet;r=s0QwcIi7276" target="_blank"> SeneNET </a> <br>'
    , '<a href="https://siris.senecac.on.ca/" target="_blank"><span class="blink"><mark><b>SIRIS</b></mark></span></a> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=52138" target="_blank">Surendra, Sam rating</a><br>'


    , '<a href="https://open.senecac.on.ca/cms/" target="_blank" >SYS366: Moodle </a> <br>'
    , '<a href="http://zenit.senecac.on.ca/~sys366_122b02/" target="_blank" >SYS366: Zenit</a> <br>' 


    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://rome.proximity.on.ca/ts/index.php" target="_blank">Time-sheet</a> <i></i><br>'
    , '<a href="http://warp.senecac.on.ca/ian.tipson/default.aspx" target="_blank">Tipson, Ian</a><i> at Seneca</i><br>'
    , '<a href="http://iantipson.com/" target="_blank">Tipson, Ian`s site</a> <br>'
    , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=12967" target="_blank">Tipson, Ian rating</a><i></i><br>'


    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    , '<a href="https://www2.senecacollege.ca/wabs/" target="_blank"> <b>WABS</b></span></a><i> Seneca</i><br>'
    , '<a href="https://cs.senecac.on.ca/~fac/win210/" target="_blank">WIN210 site </a> <br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'
    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>' 



    ];



    var tolkiniana = [

    '<hr><b>A</b><br>'
    , '<!--A-->'
    , '<a href="http://www.youtube.com/watch?v=Q6hJqI5BEW8" target="_blank">Aniron</a> <i> Enya</i><br>'
    , '<a href="http://www.glyphweb.com/arda/default.asp"  target="_blank">Arda </a> <br>'

    , '<!--B-->'
    , '<hr><b>B</b><br>'
    , '<a href="https://www.youtube.com/watch?v=suNT5m4_rYI" target="_blank">Battle for Middle Earth</a><i></i><br>'


    , '<a href="http://www.youtube.com/watch?v=qINwCRM8acM" target="_blank">Born Of Hope</a> <br>' 

    , '<!--C-->'
    , '<hr><b>C</b><br>'
    , '<a href="https://www.youtube.com/watch?v=HtoQWb0jMco" target="_blank">Children of Hurin</a><i> audio-book</i><br>' 




    , '<!--D-->'
    , '<hr><b>D</b><br>'


    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="http://www.starchamber.com/paracelsus/elvish/elvish-in-ten-minutes.html" target="_blank">Elvish ABC </a><i></i><br>'

    

    , '<!--F-->'
    , '<hr><b>F</b><br>'
    , '<a href="https://www.youtube.com/watch?v=krqmf5oBDXk" target="_blank">Facts behind Fiction</a><i> docum.</i><br>'

    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    , '<a href="http://www.jrrvf.com/hisweloke/sindar/online/sindarin.html" target="_blank">Hisweloke </a><i>Sindarin dictionary</i><br>'
    , '<a href="https://www.youtube.com/watch?v=A7jYQFTV7EM" target="_blank">Hobbit, The</a><i> audio-book</i><br>'
    , '<a href="http://www.youtube.com/watch?annotation_id=annotation_486943&feature=iv&src_vid=9H09xnhlCQU&v=VaakJk9vR7U" target="_blank">Hunt For Gollum, The</a><br>'

    , '<!--I-->'
    , '<hr><b>I</b><br>'

    , '<!--J-->'
    , '<hr><b>J</b><br>'

    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'

    , '<a href="https://www.youtube.com/watch?v=iNhCMReS_M4" target="_blank">Lewis & Tolkien</a><br>'
    , '<a href="https://www.youtube.com/watch?v=mfFQuhWaA_k" target="_blank">LOTR, The</a><i> simphony</i><br>'



    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="https://www.youtube.com/watch?v=orhnSy4wkqE&list=PL5760D4D3699A3871" target="_blank">Master of the M. Earth</a><i> Doc`ry</i> <br>'
    , '<a href="https://www.youtube.com/watch?v=Ew4bsGF0G8U" target="_blank">Middle Earth</a><i> Legacy</i> <br>'
    , '<a href="https://www.youtube.com/watch?v=UlT1mRYlXZg" target="_blank">Middle Earth</a><i> Origins</i> <br>'
    , '<a href="https://www.youtube.com/watch?v=27_OmRGPfZw" target="_blank">Monaghan Wood Interview</a><br>'
    , '<a href="https://www.youtube.com/watch?v=NzBT39gx-TE" target="_blank">Myths</a><i> Lewis & Tolkien</i> <br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<!--P-->'
    , '<hr><b>P</b><br>'


    , '<!--Q-->'
    , '<hr><b>Q</b><br>'

    , '<a href="https://www.youtube.com/watch?v=G3gR0m2mCGs" target="_blank">Queen Gandalf </a> <br>'

    , '<!--R-->'
    , '<hr><b>R</b><br>'
    , '<a href="http://www.youtube.com/watch?v=zf3Kit2V0CI" target="_blank">Ranger </a> <br>'

    , '<!--S-->'
    , '<hr><b>S</b><br>'

    , '<a href="jezreel_porthope@yahoo.ca" target="_blank">Safety Sam</a><br>'
    , '<a href="https://www.youtube.com/watch?v=0J1JSLzja7E" target="_blank">Silmarillion</a> <i>C.Tolkien</i><br>'
    , '<a href="https://www.youtube.com/watch?v=HJLwB3zNY3Q" target="_blank">Silmarillion</a> <i>audio-book</i><br>'


    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://tolkiengateway.net/wiki/Main_Page" target="_blank">Tolkien Gateway</a><br>'


    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    , '<a href="https://www.youtube.com/watch?v=HYpjI8ht-K4" target="_blank">Wood Laughs</a><br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'
    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'

    , '<a href="file:///D:/Personal/My Journal X/html/mj_index.html" target="_blank">777</a><br>'







    ];



    var transifex  = [
    '<hr><b>A</b><br>'
    , '<!--A-->'
    



    , '<!--B-->'
    , '<hr><b>B</b><br>'
    



    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="http://requirejs.org/docs/api.html#i18n" target="_blank">Define an i18n bundle</a> <i></i><br>'    

    
    
    
    



    , '<!--E-->'
    , '<hr><b>E</b><br>'
    
    , '<!--F-->'
    , '<hr><b>F</b><br>'
    


    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    



    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'
    
    

    


    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    

    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://help.transifex.com/intro/projects.html#managing-your-project" target="_blank">Managing your project</a> <i></i><br>'

    
    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    

    , '<!--P-->'
    , '<hr><b>P</b><br>'
    , '<a href="http://help.transifex.com/intro/projects.html#projects" target="_blank">Projects</a> <i></i><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    
    
    
    


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://en.wikipedia.org/wiki/Single_sign-on" target="_blank">SSO</a> <i></i><br>'
    



    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://help.transifex.com/features/api/api-v2.html#translations" target="_blank">Translations</a> <i></i><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    
    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  




    ];



    var video =[


    '<hr><b>A</b><br>'
    , '<!--A-->'
    , '<a href="https://www.youtube.com/watch?v=vZ3gxKCgtEU">Aloisius, <a/><br>'




    , '<!--B-->'
    , '<hr><b>B</b><br>'
    , '<a href="https://www.youtube.com/watch?v=LC1d_2lschs" target="_blank">Bubentsov before firing squad </a> <br>'
    , '<a href="https://www.youtube.com/watch?v=XVsIeZW3OFU" target="_blank">Bubentsov`s story </a> <br>'





    , '<!--C-->'
    , '<hr><b>C</b><br>'
    , '<a href="https://www.youtube.com/watch?v=WSpiVm6BkeA" target="_blank">Castle & Beckett</a><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="http://www.youtube.com/watch?v=3eiIMZQWkdQ" target="_blank">Eltsin & Clinton</a><i> 1995-10-23 (cons. trns)</i><br>'

    , '<!--F-->'
    , '<hr><b>F</b><br>'
    , '<a href="http://vimeo.com/58385453" target="_blank">Moon-rise</a> <i></i><br>'



    , '<!--G-->'
    , '<hr><b>G</b><br>'
    , '<a href="http://www.youtube.com/watch?v=pnIbwWEH4UA" target="_blank">Gun Control</a><i> Puchkov</i><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'




    , '<!--I-->'
    , '<hr><b>I</b><br>'
    , '<a href="https://www.youtube.com/watch?v=-o9-r26b--E" target="_blank">In the blue sea...</a><i> 1984</i> <br>'
    , '<a href="http://www.youtube.com/watch?v=au9Aqd_-2hc" target="_blank">Inside Saudi Kingdom</a><i> BBC film</i> <br>'
    , '<a href="http://www.youtube.com/watch?v=ua0anM-afY0" target="_blank">Is this your church</a><i> </i> <br>'
    , '<a href="https://www.youtube.com/watch?v=r8jP8UJFWso" target="_blank">It`s Possible!</a><i> Inspirational</i> <br>'






    , '<!--J-->'
    , '<hr><b>J</b><br>'






    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://www.youtube.com/watch?v=PwxwqVDnUmc" target="_blank">Last Year`s Snow was falling</a><i> 1983</i><br>'


    , '<!--M-->'
    , '<hr><b>M</b><br>'

    , '<a href="https://www.youtube.com/watch?v=Wgprb0KcYmw" target="_blank">猛龍過江</a><i> Maang Lung Gwo Gong </i> <br>'
    , '<a href="https://www.youtube.com/watch?v=Hyw8973Ql30" target="_blank">Magneto`s Revenge </a><i>X-Men First Class</i> <br>'

    , '<a href="https://www.youtube.com/watch?v=x3giQCbs7SA" target="_blank">Minkova Milena Latine </a><i></i> <br>'
    , '<a href="https://www.youtube.com/watch?v=eOfI88NKRzY&feature=endscreen&NR=1" target="_blank">Monty Python </a><i></i> <br>'




    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<a href="http://www.youtube.com/watch?v=7Wl-OZ3breE" target="_blank">Our Father</a><i> Anglo-Saxon</i><br>'


    , '<!--P-->'
    , '<hr><b>P</b><br>'
    , '<a href="http://www.youtube.com/watch?v=GpEx7pdp2-Q" target="_blank">Prometheus Explained</a> <i></i><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    , '<a href="https://www.youtube.com/watch?v=yM_XkP6HMU4&list=PL1CE2A366DFCCCFB5" target="_blank">Russian guy speaking Latin<a/><br>'






    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://www.youtube.com/watch?v=1r8zgU7wE8w" target="_blank">Saving Pr. Ryan</a> <i>Ending scene</i><br>'  

    , '<a href="https://www.youtube.com/watch?v=5-ZpP4j09s0" target="_blank">Seven Seconds to Sell Yourself</a><br>'  



    , '<!--T-->'
    , '<hr><b>T</b><br>'

    , '<a href="https://www.youtube.com/watch?v=mi_6LIPEP7M" target="_blank">Terentius et Milena </a> <br>'
    , '<a href="https://www.youtube.com/watch?v=jdDlmb-lgXk" target="_blank">Three Killer Questions at Interview </a> <br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  





    ];



    var webdev = [

    '<hr><b>A</b><br>'
    , '<!--A-->'
    , '<a href="http://www.w3schools.com/tags/att_form_action.asp" target="_blank">action=</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_addcolorstop.asp" target="_blank">addColorStop()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_win_alert.asp" target="_blank">alert()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_arc.asp" target="_blank">arc()</a><br>'




    , '<!--B-->'
    , '<hr><b>B</b><br>'
    , '<a href="http://www.w3schools.com/jsref/met_his_back.asp" target="_blank">back()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_beginpath.asp" target="_blank">beginPath()</a><br>'
    , '<a href="http://www.w3schools.com/tags/att_body_bgcolor.asp" target="_blank">bgColor=</a><br>'




    , '<!--C-->'
    , '<hr><b>C</b><br>'
    , '<a href="http://www.w3schools.com/html/html5_canvas.asp" target="_blank">canvas</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_ceil.asp" target="_blank">ceil()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_anchor_charset.asp" target="_blank">charset=</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_win_confirm.asp" target="_blank">confirm()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_createlineargradient.asp" target="_blank">createLinearGradient()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_createradialgradient.asp" target="_blank">createRadialGradient()</a><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'
    , '<a href="http://www.w3schools.com/js/js_obj_date.asp" target="_blank">Date</a><i> object</i><br>'
    , '<a href="http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock" target="_blank">display a clock</a><i></i><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_drawimage.asp" target="_blank">drawImage()</a><br>'









    , '<!--E-->'
    , '<hr><b>E</b><br>'
    , '<a href="http://www.w3schools.com/jsref/coll_form_elements.asp" target="_blank">elements</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_eval.asp" target="_blank">eval()</a><br>'

    , '<!--F-->'
    , '<hr><b>F</b><br>'
    , '<a href="http://www.w3schools.com/tags/tag_fieldset.asp" target="_blank">fieldset</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_fillrect.asp" target="_blank">fillRect()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_fillstyle.asp" target="_blank">fillStyle</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_filltext.asp" target="_blank">fillText()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_floor.asp" target="_blank">floor()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_font.asp" target="_blank">font=</a><br>'
    , '<a href="http://www.w3schools.com/jsref/coll_doc_forms.asp" target="_blank">forms</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_his_forward.asp" target="_blank">forward()</a><br>'
    , '<a href="http://www.w3schools.com/js/js_functions.asp" target="_blank">function</a><br>'




    , '<!--G-->'
    , '<hr><b>G</b><br>'
    , '<a href="http://www.w3schools.com/jsref/met_doc_getelementbyid.asp" target="_blank">getElementById()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_getday.asp" target="_blank">getDay()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_getfullyear.asp" target="_blank">getFullYear()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_gettime.asp" target="_blank">getTime()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_his_go.asp" target="_blank">go()</a><br>'


    , '<!--H-->'
    , '<hr><b>H</b><br>'
    , '<a href="http://www.w3schools.com/jsref/obj_history.asp" target="_blank">history</a><i> object</i><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_loc_host.asp" target="_blank">host</a><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_loc_hostname.asp" target="_blank">hostname</a><br>'




    , '<!--I-->'
    , '<hr><b>I</b><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_html_innerhtml.asp" target="_blank">innerHTML=</a><i> property</i><br>'


    , '<!--J-->'
    , '<hr><b>J</b><br>'






    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_doc_lastmodified.asp" target="_blank">lastModified</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_length_string.asp" target="_blank">length</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_lineto.asp" target="_blank">lineTo()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/coll_doc_links.asp" target="_blank">links</a><br>'
    , '<a href="http://www.w3schools.com/jsref/obj_location.asp" target="_blank">location</a><i> object</i><br>'


    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_max.asp" target="_blank">max()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_min.asp" target="_blank">min()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_moveto.asp" target="_blank">moveTo()</a><br>'
    , '<a href="http://www.w3schools.com/tags/tag_meta.asp" target="_blank">meta</a><br>'


    , '<!--N-->'
    , '<hr><b>N</b><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_meta_name.asp" target="_blank">name</a><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    , '<a href="http://www.w3schools.com/jsref/event_onclick.asp" target="_blank">onclick=</a><i> event</i><br>'
    , '<a href="http://www.w3schools.com/tags/ev_onsubmit.asp" target="_blank">onsubmit=</a><br>'


    , '<!--P-->'
    , '<hr><b>P</b><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_loc_port.asp" target="_blank">port</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_pow.asp" target="_blank">pow()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_win_prompt.asp" target="_blank">prompt()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_loc_protocol.asp" target="_blank">protocol</a><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_random.asp" target="_blank">random()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_replace.asp" target="_blank">replace()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_round.asp" target="_blank">round()</a><br>'





    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_setfullyear.asp" target="_blank">setFullYear()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_split.asp" target="_blank">split()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_sqrt.asp" target="_blank">sqrt()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/prop_frame_src.asp" target="_blank">src</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_stroke.asp" target="_blank">stroke()</a><br>'
    , '<a href="http://www.w3schools.com/tags/canvas_stroketext.asp" target="_blank">strokeText()</a><br>'
    , '<a href="http://www.w3schools.com/js/js_switch.asp" target="_blank">switch()</a><br>'



    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_tolocalestring.asp" target="_blank">toLocaleString()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/jsref_toutcstring.asp" target="_blank">toUTCString()</a><br>'


    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    , '<a href="http://www.w3schools.com/js/js_loop_while.asp" target="_blank">while loop</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_doc_write.asp" target="_blank">write()</a><br>'
    , '<a href="http://www.w3schools.com/jsref/met_doc_writeln.asp" target="_blank">writeln()</a><br>'

    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  


    ];


    */
  //});


//----------------------------------------------------------------------------


function health(){
  document.getElementById("demo").innerHTML=healthFun();
}

var healthFun = function(){

  var health_ = [
  '<mark>Health</mark><br>'

  , '<hr><b>A</b><br>'
  , '<!--A-->'
  , '<a href="http://www.absdiet.com/uof/absdiet/abospl/index.html" target="_blank">Abs Diet</a> <i></i><br>'
  , '<a href="http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1809/2" target="_blank">Apple</a> <i>raw</i><br>'




  , '<!--B-->'
  , '<hr><b>B</b><br>'
  , '<a href="http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1846/2" target="_blank">Banana</a> <i>raw</i><br>'
  , '<Beef<br>'
  , '<a href="http://nutritiondata.self.com/facts/beef-products/3482/2" target="_blank">tongue</a> <i>cooked</i><br>'
  , '<a href="http://nutritiondata.self.com/facts/baked-products/4846/2" target="_blank">Bread, Multy-grain</a> <i></i><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , 'Chicken<br>'
  , '<a href="http://nutritiondata.self.com/facts/poultry-products/703/2" target="_blank">breast</a> <i>roasted</i><br>'
  , '<a href="http://nutritiondata.self.com/facts/poultry-products/721/2" target="_blank">leg</a> <i>roasted</i><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://nutritiondata.self.com/facts/dairy-and-egg-products/117/2" target="_blank">Egg</a> <i>boiled</i><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://nutritiondata.self.com/facts/fruits-and-fruit-juices/1920/2" target="_blank">Grapes</a> <i>raw</i><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="http://lowcarbdiets.about.com/od/whattoeat/a/highproteinfood.htm" target="_blank">High-Protein Foods</a> <i></i><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://www.lifefitness.com/index.html" target="_blank">Life Fitness</a> <i></i><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'
  , '<a href="http://nutritiondata.self.com/" target="_blank">Nutrition Data</a> <i></i><br>'
  , '<a href="http://www.fda.gov/food/resourcesforyou/consumers/nflpm/ucm274593.htm" target="_blank">Nutrition Facts Label</a> <i></i><br>'
  , '<a href="http://www.nutritionvalue.org/" target="_blank">Nutrition Value</a> <i></i><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'
  , '<a href="http://nutritiondata.self.com/facts/vegetables-and-vegetable-products/2908/2" target="_blank">Potato</a> <i>boiled</i><br>'
  , '<a href="http://www.healthaliciousness.com/articles/foods-highest-in-protein.php" target="_blank">Protein-full Foods</a> <i></i><br>'
  , '<a href="http://www.fitday.com/fitness-articles/fitness/body-building/the-best-protein-foods-for-building-muscle.html" target="_blank">Protein Foods</a> <i></i><br>'




  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="http://nutritiondata.self.com/facts/fruits-and-fruit-juices/2053/2" target="_blank">Raspberry</a> <i>raw</i><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://nutritiondata.self.com/facts/fruits-and-fruit-juices/2064/2" target="_blank">Strawberry</a> <i>raw</i><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  


  ];

  var arr = health_;

  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;
};

//----------------------------------------------------------------------------

function html5(){
  document.getElementById("demo").innerHTML=html5Fun();
}
var html5Fun = function(){

  var html5Arr = [
  '<mark>HTML5</mark><br>'

  , '<b>A</b><br>'
  , '<!--A-->'
  , '<a href="http://www.w3schools.com/tags/canvas_addcolorstop.asp" target="_blank">addColorStop()</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_arc.asp" target="_blank">arc()</a><br>'




  , '<!--B-->'
  , '<hr><b>B</b><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_beginpath.asp" target="_blank">beginPath()</a><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="http://www.w3schools.com/html/html5_canvas.asp" target="_blank">canvas</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_createlineargradient.asp" target="_blank">createLinearGradient()</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_createradialgradient.asp" target="_blank">createRadialGradient()</a><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









  , '<!--E-->'
  , '<hr><b>E</b><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_fillrect.asp" target="_blank">fillRect()</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_fillstyle.asp" target="_blank">fillStyle</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_filltext.asp" target="_blank">fillText()</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_font.asp" target="_blank">font=</a><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://www.w3schools.com/jsref/met_doc_getelementbyid.asp" target="_blank">getElementById()</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_drawimage.asp" target="_blank">drawImage()</a><br>'
  , '<!--H-->'
  , '<hr><b>H</b><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_lineto.asp" target="_blank">lineTo()</a><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_moveto.asp" target="_blank">moveTo()</a><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_stroke.asp" target="_blank">stroke()</a><br>'
  , '<a href="http://www.w3schools.com/tags/canvas_stroketext.asp" target="_blank">strokeText()</a><br>'



  , '<!--T-->'
  , '<hr><b>T</b><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'
  

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  

  ];

  var arr = html5Arr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};

//----------------------------------------------------------------------------


function its(){
  document.getElementById("demo").innerHTML= its2();
};

var its2 = function (){

  var itstuff = [
  '<mark>IT stuff</mark><br>'

  , '<a href="http://www.12factor.net/" target="_blank">12-factor app</a> <i></i><br>'


  , '<hr><b>A</b><br>'
  , '<!--A-->'
  , '<a href="https://wiki.mozilla.org/Allhands2013" target="_blank">Allhands 2013</a> <i>MozillaWiki</i><br>'  
  , '<a href="https://etherpad.mozilla.org/allhandsmay2013agenda" target="_blank">Allhands 2013 agenda</a> <i>Etherpad</i><br>'
  , '<a href="http://www.arm.com/" target="_blank">ARM</a> <i></i><br>'
  , '<a href="http://www.asp.net/" target="_blank">ASP.NET</a><br>'





  , '<!--B-->'
  , '<hr><b>B</b><br>'
  , '<a href="http://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html" target="_blank">Bin/Deci/Hex Convertor </a> <br>'
  , '<a href="http://nvie.com/posts/a-successful-git-branching-model/" target="_blank">Branching model, a</a> <i></i><br>'
  , '<a href="https://bugzilla.mozilla.org/" target="_blank">Bugzilla</a> <i></i><br>' 
  , '<a href="http://sedgestuff.wordpress.com/2013/05/09/howto-working-with-open-bugs-on-bugzilla/" target="_blank">Bugzilla: work with bugs</a> <i>sedge</i><br>'



  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Cloud_Foundry" target="_blank">Cloud Foundry</a> <i></i><br>'
  , '<a href="http://www.12factor.net/config" target="_blank">Config</a> <i></i><br>'
  , '<a href="http://jigsaw.w3.org/css-validator/" target="_blank">CSS Validator</a> <br>'
  , '<a href="http://curl.haxx.se/" target="_blank">cURL</a> <i></i><br>'
  , '<a href="http://programmers.stackexchange.com/questions/2715/should-curly-braces-appear-on-their-own-line" target="_blank">Curly braces position</a> <i></i><br>'
  , '<a href="http://currant.herokuapp.com/" target="_blank">Currant</a> <i>I love you @ Heroku</i><br>'





  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="https://wiki.mozilla.org/Webmaker/Communications/Dashboard" target="_blank">Dashboard</a> <i>Mozilla</i><br>'
  , '<a href="http://debuggable.com/" target="_blank">Debuggable</a> <i></i><br>'









  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://www.thecssdiv.co.uk/2013/04/easy-open-source-workflow/" target="_blank">Easy open source workflow</a> <i>Ross</i><br>'
  , '<a href="http://eloquentjavascript.net/contents.html" target="_blank">Eloquent JavaScript</a> <i></i><br>'
  , '<a href="https://etherpad.mozilla.org/cdotsupplies" target="_blank">Etherpad</a> <i>supplies</i><br>'
  , '<a href="https://etherpad.mozilla.org/0GXDuRZRWL" target="_blank">Etherpad</a> <i>mine</i><br>'
  , '<a href="http://expressjs.com/" target="_blank">Express.js</a> | '
  , '<a href="http://expressjs.com/guide.html" target="_blank">guide</a> | '
  , '<a href="http://expressjs.com/api.html" target="_blank">API</a> <i></i><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'
  , '<a href="http://fedoraproject.org/wiki/Fedora_Project_Wiki" target="_blank">Fedora</a> <i>wiki</i><br>'
  , '<a href="http://git-scm.com/about#Frictionless_Context_Switching" target="_blank">Frictionless Context switching</a> <i></i><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://getfirebug.com/" target="_blank">GetFireBug</a> <i></i><br>'
  , '<a href="http://www.gnu.org/software/gettext/" target="_blank">gettext</a> <i></i><br>'
  , '<a href="http://glassfish.java.net/" target="_blank">Glassfish</a><br>'

  , '<a href="https://ca.godaddy.com/" target="_blank">GoDaddy</a> <i></i><br>'
  , '<a href="http://gruntjs.com/" target="_blank">Grunt js</a> <i></i><br>'


  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="https://hacks.mozilla.org/" target="_blank">Hacks</a> <i>Mozilla</i><br>'
  , '<a href="https://www.heroku.com/" target="_blank">Heroku</a> <i></i><br>'
  , '<a href="http://www.w3schools.com/html/html5_intro.asp" target="_blank">HTML5 on w3schools</a><br>'
  , '<a href="http://www.w3schools.com/html/html_colorvalues.asp" target="_blank">HTML color names </a> <br>'
  , '<a href="http://www.ficml.org/jemimap/style/color/wheel.html" target="_blank">HTML color wheel </a> <br>'
  , '<a href="http://validator.w3.org/" target="_blank">HTML Validator</a> <br>'
  , '<a href="http://net.tutsplus.com/tutorials/other/http-headers-for-dummies/" target="_blank">HTTP headers</a> <i>tuts+</i><br>'
  , '<a href="http://mxcl.github.io/homebrew/" target="_blank">HomeBrew</a> <i></i><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'
  , '<a href="http://www.lingotek.com/images/pdf/Lingotek_Internationalization_101_Webinar_07_31_12.pdf" target="_blank"><abbr title="Internationalization">i18n</abbr></a> <i></i><br>'
  , '<a href="irc.freenode.net" target="_blank">IRC free node</a> <i></i><br>'
  , '<a href="http://www.ircbeginner.com/ircinfo/ircc-commands.html" target="_blank">IRC ref</a> <i></i><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'
  , '<a href="http://json.org/" target="_blank">JASON</a> <i></i><br>'
  , '<a href="http://jsonlint.com/" target="_blank">JASOLint</a> <i></i><br>'
  , '<a href="java.html" target="_blank">Java</a><i> >>></i><br>'
  , '<a href="http://docs.oracle.com/javase/6/docs/api/" target="_blank">Java , <abbr title="Application Programming Interface">API</abbr></a><br>'
  , '<a href="http://www.java-samples.com/java/" target="_blank">Java Samples</a><br>'
  , '<a href="javascript.html" target="_blank">JavaScript</a> >>><i></i><br>'
  , '<a href="http://www.javaworld.com/?attr=ifw_jwlogo" target="_blank">Java World </a><i> Info World</i><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'
  , '<a href="http://sedgestuff.wordpress.com/" target="_blank">Kieran`s Blog</a> <i></i><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://www.lynda.com/" target="_blank">Lynda.com</a> <i>paid website</i><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="https://etherpad.mozilla.org/macessentials" target="_blank">Mac Essentials</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Memory_footprint" target="_blank">Memory footprint</a> <i></i><br>'
  , '<a href="http://www.mongodb.org/" target="_blank">Mongo DB</a> <i></i><br>'
  , '<a href="https://developer.mozilla.org/en-US/" target="_blank">Mozilla Developer Network</a> <i></i><br>'
  , '<a href="http://www.mozilla.org/foundation/" target="_blank">Mozilla Foundation</a> <i>MoFo</i><br>'
  , '<a href="https://wiki.mozilla.org/Main_Page" target="_blank">Mozilla Wiki</a> <i></i><br>'
  , '<a href="https://github.com/mozilla/login.webmaker.org" target="_blank">Mozilla/login.webmaker.org</a> <i></i><br>'
  , '<a href="https://github.com/mozilla/login.webmaker.org" target="_blank">mine</a> <i></i><br>'
  , '<a href="http://msdn.microsoft.com/library/default.aspx" target="_blank">MSDN Library </a><i> for MS developer</i> <br>'



  , '<!--N-->'
  , '<hr><b>N</b><br>'
  , '<a href="http://netbeans.org/index.html" target="_blank">NetBeans.org</a> <br>'
  , '<a href="http://howtonode.org/introduction-to-npm" target="_blank">npm: intro</a> <i></i><br>'
  , '<a href="http://nunjucks.jlongster.com/" target="_blank">Nunjucks</a> <i></i><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<a href="http://zenit.senecac.on.ca/wiki/index.php/Main_Page" target="_blank">Open Source @ Seneca</a> <i></i><br>'
  , '<a href="https://sedgestuff.wordpress.com/2013/04/23/welcome-to-open-source-development-a-students-perspective/comment-page-1/#comment-14" target="_blank">Open source development</a> <i>Kieran</i><br>'
  , '<a href="http://www.thecssdiv.co.uk/2013/04/easy-open-source-workflow/" target="_blank">Open Source Workflow</a> <i></i><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'
  , '<a href="http://pastebin.mozilla.org/" target="_blank">PasteBin.Mozilla.org</a> <i></i><br>'
  , '<a href="https://login.persona.org/" target="_blank">Persona</a> <i>Mozilla</i><br>'
  , '<a href="phpcodes.html" target="_blank">PHP Codes</a> >><br>'
  , '<a href="http://php.net/quickref.php" target="_blank">PHP functions </a> <br>'
  , '<a href="http://php.net/manual/en/index.php" target="_blank">PHP manual </a> <br>'
  , '<a href="http://www.gnu.org/software/gettext/manual/html_node/PO-Files.html" target="_blank">PO files format</a> <i></i><br>'
  , '<a href="http://popcornjs.org/" target="_blank">popcorn</a><br>'
  , '<a href="https://popcorn.webmaker.org/" target="_blank">popcorn maker</a><br>'
  , '<a href="http://processingjs.org/" target="_blank">Processing.js </a><br>'
  , '<a href="http://kb.mozillazine.org/Profile_backup" target="_blank">Profile backup</a> <i>Mozilla</i><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="http://redis.io/" target="_blank">Redis</a> <i></i><br>'
  , '<a href="http://www.homemarketeer.com/sbs/regular_expression.html" target="_blank">RegEx calculator </a> <br>'
  , '<a href="http://regexpal.com/" target="_blank">RegEx pal</a> <i></i><br>'
  , '<a href="http://requirejs.org/" target="_blank">Require.js</a> <i></i><br>'
  , '<a href="http://requirejs.org/docs/api.html#i18n" target="_blank">Require.js I18N bundle</a> <i></i><br>'







  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://ethanschoonover.com/solarized" target="_blank">Solarized</a> <i></i><br>'
  , '<a href="http://stackoverflow.com/" target="_blank">Stack Overflow </a><i> used by profies</i><br>'
  , '<a href="http://www.sublimetext.com/" target="_blank">Sublime Text</a> <i></i><br>'
  , '<a href="https://tutsplus.com/course/improve-workflow-in-sublime-text-2/" target="_blank">Sublime Text Tut</a> <i>tutsplus</i><br>'
  , '<a href="https://gist.github.com/dantoncancella/4977978" target="_blank">Sublime Text on Fedora</a> <i></i><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://www.techonthenet.com/index.php" target="_blank">Tech On The Net </a> <br>'            
  , '<a href="http://zenit.senecac.on.ca/wiki/index.php/Webmaker_Summer_2013_TODO" target="_blank">ToDo list</a> <i></i><br>'
  , '<a href="https://etherpad.mozilla.org/trackingForCDOT" target="_blank">Tracking for CDOT</a> <i>MoPad</i><br>'
  , '<a href="http://shaunchapman.me/post/329270449/how-to-install-the-tree-command-on-mac-os-x" target="_blank">tree on Mac</a> <i></i><br>'
  , '<a href="http://www.tutorialspoint.com/java/index.htm" target="_blank">Tutorial`s Point</a><i> Java</i><br>'




  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'
  , '<a href="http://www.vlsm-calc.net/" target="_blank">VLSM subnet calculator</a>'
  , '<a href="http://senecacd.wordpress.com/2012/11/07/creating-a-virtual-machine-on-linux-with-kvm-qemu-and-virt/" target="_blank">VM on Linux</a> <i></i><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'
  , '<a href="http://www.w3schools.com/" target="_blank">w3schools</a> <br>'
  , '<a href="webdev.html" target="_blank">WebDev</a><br>'
  , '<a href="https://webmaker.org/en-US/" target="_blank">WebMaker</a> | '
  , '<a href="https://wiki.mozilla.org/Webmaker" target="_blank">Wiki</a><br>'
  , '<a href="http://www.windowsazure.com/en-us/develop/net/tutorials/web-site-with-sql-database/" target="_blank">Website with SQL db </a> <i>Azure Tutorial</i><br>'


  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'


  , '<hr>'
  , 'My blogs on WordPress:<br>'
  , '<a href="http://igoryen.wordpress.com/2013/05/10/my-first-blog-about-my-first-week-at-seneca-cdot/" target="_blank">1</a> | '
  , '<a href="http://igoryen.wordpress.com/2013/05/17/cdot-week-2/" target="_blank">2</a> | '
  , '<a href="http://igoryen.wordpress.com/2013/05/26/cdot-week-3-and-mozilla-allhands/" target="_blank">3</a> | '
  , '<a href="http://igoryen.wordpress.com/2013/05/31/week-22-week-4-at-cdot/" target="_blank">4</a> | '
  , '<a href="http://igoryen.wordpress.com/2013/06/09/cdot-week-5/" target="_blank">5 </a> <br>'
  , 



  ];

  var arr = itstuff;

  var retval ="";
  retval += "<hr>";
  for (var i in arr){
    retval += arr[i];
  }
  retval += "<hr>";
  return retval;
};

//----------------------------------------------------------------------------

function itt(){
  document.getElementById("demo").innerHTML= itt2();
};

var itt2 = function (){

  var itterms = [
  '<mark>IT terms</mark><br><hr>'

  , '<a href="http://en.wikipedia.org/wiki/Library_%28computing%29" target="_blank">Library</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Include_directive" target="_blank">Include_directive</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/500_Internal_Server_Error#5xx_Server_Error" target="_blank">500</a> <i>error</i><br>'
  , '<!--A-->'
  , '<hr><b>A</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_Form" target="_blank"><abbr title="Augmented Backus–Naur Form">ABNF</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Abstraction_%28computer_science%29" target="_blank">Abstraction</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Abstraction_layer" target="_blank">Abstraction layer</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Android_%28operating_system%29" target="_blank">Android</a> <i>OS</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/ApacheBench" target="_blank">Apache bench</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Apache_HTTP_Server" target="_blank">Apache HTTP server</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Application_programming_interface" target="_blank">API</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Application_layer" target="_blank">Application layer</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Distributed_application#Applications" target="_blank">Applications</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Application_programming_interface" target="_blank"><abbr title="Application programming interface">API</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_application" target="_blank">Application software</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/ARM_architecture" target="_blank">ARM architecture</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Asynchronous_I/O" target="_blank">Asynchronous I/O</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Audio_Video_Interleave" target="_blank"><abbr title="Audio video interleave">AVI</abbr></a> <i></i><br>'




  , '<!--B-->'
  , '<hr><b>B</b><br>'
  , '<a href="https://en.wikipedia.org/wiki/Base64" target="_blank">Base64</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Booting" target="_blank">Booting (up)</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Bootstrapping_%28compilers%29" target="_blank">Bootstrapping</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Branching_(revision_control)" target="_blank">Branching</a> <i>(revision control)</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Bug_tracking_system" target="_blank">Bug tracking system</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Bundle_%28software_distribution%29" target="_blank">Bundled software</a> aka <i>bundle</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Computer_bus" target="_blank">Bus</a> <i></i><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Callback_%28computer_programming%29" target="_blank">Callback</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Call_stack" target="_blank">Call stack</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Content_delivery_network" target="_blank"><abbr title="Content delivery network">CDN</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Changeset" target="_blank">Changeset</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Checksum" target="_blank">Checksum</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Command-line_interface" target="_blank"><abbr title="Command-line interface">CLI</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Client_%28computing%29" target="_blank">Client</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Client-server_model" target="_blank">Client-server model</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Client-side" target="_blank">Client-side</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Clock_cycle" target="_blank">Clock signal</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Closure_%28computer_science%29" target="_blank">Closure</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Cloud_computing" target="_blank">Cloud computing</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Content_management_system" target="_blank"><abbr title="Content Mnagement System">CMS</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Computing_platform" target="_blank">Computing platform </a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Concatenation" target="_blank">Concatenation</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Concern_%28computer_science%29" target="_blank">Concern</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Configuration_file" target="_blank">Configuration file</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Program_flow" target="_blank">Control flow</a> aka <i>program flow</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Dependency_%28computer_science%29" target="_blank">Coupling</a> <i>aka Dependency</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Central_processing_unit" target="_blank">CPU</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/CPU_design" target="_blank">CPU design</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Crowdsourcing" target="_blank">Crowdsourcing</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/CSS_stylesheet" target="_blank"><abbr title="Cascading Style Sheets">CSS</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/CURL" target="_blank">CURL</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Concurrent_Versions_System" target="_blank"><abbr title="Concurrent Versions System">CVS</abbr></a> <i></i><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Database_management_system" target="_blank">Database</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Database_schema" target="_blank">Database schema</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Data_differencing" target="_blank">Delta differencing</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Delta_encoding" target="_blank">Delta encoding</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Design_engineer" target="_blank">Design Engineer</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Device_driver" target="_blank">Device driver</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Directory_structure" target="_blank">Directory structure</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Document_Object_Model" target="_blank">< abbr title="Document Object Model">DOM</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Digital_rights_management" target="_blank"><abbr title="Digital rights management">DRM</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Document_Type_Definition" target="_blank"><abbr title="Document Type Definition">DTD</abbr></a> <i></i><br>'










  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Event-driven_architecture" target="_blank"><abbr title="Event-driven architecture">EDA</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Event-driven_programming" target="_blank"><abbr title="Event-driven programming">EDP</abbr></a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/EJS" target="_blank">EJS</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/ElasticSearch" target="_blank">Elasticsearch</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Environment_variable" target="_blank">Environment variable</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Etherpad" target="_blank">Etherpad</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Event_%28computing%29" target="_blank">Event</a> et <i>event handler</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Main_loop" target="_blank">Event loop</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Executable" target="_blank">Executable</a> <i></i><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Full-duplex#Full-duplex" target="_blank"><abbr title="Full-duplex">FDX</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Feature_phone" target="_blank">Feature phone</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/File_archiver" target="_blank">File archiver</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/File_descriptor" target="_blank">File descriptor</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Filename" target="_blank">File name</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Firmware" target="_blank">Firmware</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Flag_%28computing%29" target="_blank">Flag</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Flame_war#Flame_wars" target="_blank">Flame war</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Flash_of_unstyled_content" target="_blank"><abbr title="Flash of unstyled content">FOUC</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Front_and_back_ends" target="_blank">Front and back ends</a> <i></i><br>'




  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Gettext" target="_blank">gettext</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Git_%28software%29" target="_blank">Git</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Globalization_Management_System" target="_blank"><abbr title="Globalization management system">GMS</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Gpl" target="_blank"><abbr title="GNU General Public License">GPL</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Graphical_user_interface" target="_blank"><abbr title="Graphical user interface">GUI</abbr></a> <i></i><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Human-computer_interaction" target="_blank"><abbr title="Human-computer interaction">HCI</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Hdmi" target="_blank">HDMI</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Header_%28computing%29" target="_blank">Header</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Heroku" target="_blank">Heroku</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/HTTP_header" target="_blank">HTTP header</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/HTTP_pipelining" target="_blank">HTTP pipelining</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank">HTTP status code</a> <i></i><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Integrated_Development_Environment" target="_blank"><abbr title="Integrated development environment">IDE</abbr></a> <i>Apple</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Information_processing_system" target="_blank">Information processor</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Information_system" target="_blank">Information system</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Input/output" target="_blank">Input/output</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Installer_%28OS_X%29" target="_blank">Installer</a> <i>OS X</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Integrated_circuits" target="_blank">Integrated circuit</a> <i>(micro)chip</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Intel" target="_blank">Intel</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Interface_%28computing%29" target="_blank">Interface</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Internationalization_and_localization" target="_blank">Internationalization and Localization</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Internet_hosting_service" target="_blank">Internet hosting service</a> e.g. <i>web hosting</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Interpreter_%28computing%29" target="_blank">Interpreter</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Inter-process_communication" target="_blank">Inter-process communication</a> <i>aka IPC</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Interrupt" target="_blank">Interrupt</a> <i></i><br>'
  , '<a href="en.wikipedia.org/wiki/IETF_language_tag" target="_blank"><abbr title="Internet Engineering Task Force">IETF</abbr> language tag</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/IPsec" target="_blank"><abbr title="Internet security">IP</abbr>sec</a> <i></i><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Jquery" target="_blank">jQuery</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> <i></i><br>'







  , '<!--K-->'
  , '<hr><b>K</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/User_space" target="_blank">Kernel</a> <i></i><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Light-weight_process" target="_blank">Light-weight process</a> <i>LWP</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Lint_%28software%29" target="_blank">Lint</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Linux_distribution" target="_blank">Linux distribution</a> <i>AKA distro</i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Locale" target="_blank">Locale</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Localization" target="_blank">Localization</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Look_and_feel" target="_blank">Look and feel</a> <i></i><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/MAMP" target="_blank">MAMP</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Markup_language" target="_blank">Markup language</a> e.g. <i>HTML</i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Merge_(revision_control)" target="_blank">Merge</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Microcontrollers" target="_blank">Microcontroller</a> <i>MC</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Microprocessor" target="_blank">Microprocessor</a> <i>(micro)chip</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Middleware" target="_blank">Middleware</a> <i>"software glue"</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Mobile_phone" target="_blank">Mobile phone</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Module_%28programming%29" target="_blank">Modular programming</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/MongoDB" target="_blank">Mongo DB</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Mootools" target="_blank">MooTools</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Mozilla" target="_blank">Mozilla</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Mozilla_Persona" target="_blank">Mozilla Persona</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Mv" target="_blank">mv</a> <i></i><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Netcat" target="_blank">Netcat</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Network_interface" target="_blank">Network interface</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Network_service" target="_blank">Network service</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Internet_socket" target="_blank">Network socket</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/News_aggregator" target="_blank">News aggregator</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Nginx" target="_blank">nginx</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Node_js" target="_blank">Node.js</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Npm_%28software%29" target="_blank">npm</a> <i></i><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Operating_environment" target="_blank">Operating environment</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Operating_system" target="_blank">Operating system</a> <i>aka OS</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Overhead_%28computing%29" target="_blank">Overhead</a> <i></i><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Package_%28package_management_system%29" target="_blank">Package</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Package_management_system" target="_blank">Package management system</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Parse" target="_blank">Parsing</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Patch_%28computing%29" target="_blank">Patch</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Process_identifier" target="_blank">PID</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Platform_as_a_service" target="_blank">Platform as a service</a> <i>PaaS</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Plug-in_%28computing%29" target="_blank">Plug-in</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Portable_object_%28computing%29" target="_blank">Portable object</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/POSIX" target="_blank"><abbr title="Portable Operating System Interface">POSIX</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Presentation_semantics" target="_blank">Presentation semantics</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Processor_core" target="_blank">Processor core</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Programming_paradigm" target="_blank">Programming paradigm</a> e.g. <i>OOP</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Property_list" target="_blank">Property list</a> aka <i>plist</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Proxy_server" target="_blank">Proxy server</a> <i></i><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Database_language" target="_blank">Query language</a> aka <i>database language</i><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Reactor_pattern" target="_blank">Reactor pattern</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Rebasing" target="_blank">Rebasing</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Redis" target="_blank">Redis</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Rendering_engine" target="_blank">Rendering engine</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Request-response" target="_blank">Request-response</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank"><abbr title="Representational state transfer">REST</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Reduced_instruction_set_computing" target="_blank">RISC</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Rm_%28Unix%29" target="_blank">rm</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/RPM_Package_Manager" target="_blank">RPM package manager</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/RSA_%28algorithm%29" target="_blank">RSA: what is it?</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/RSS" target="_blank"><abbr title="Rich Site Summary">RSS</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Ruby_%28programming_language%29" target="_blank">Ruby</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Ruby_on_Rails" target="_blank">Ruby on Rails</a> aka <i>Rails</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Run-time_system" target="_blank">Run-time (system)</a> <i></i><br>'





  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_as_a_service" target="_blank"><abbr title="Software as a service">SaaS</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Screencast" target="_blank">Screen cast</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Self-hosting" target="_blank">Self-hosting</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Separation_of_concerns" target="_blank">Separation of concerns</a> <i>SoC</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Search_engine_results_pages" target="_blank"><abbr title="Search engine results page">SERP</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Server_%28computing%29" target="_blank">Server</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Server-side" target="_blank">Server-side</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Server_Side_Includes" target="_blank"><abbr title="Server Side Includes">SSI</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Cloud_computing#Service_models" target="_blank">Service Models</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/SGML" target="_blank"><abbr title="Standard Generalized Markup Language">SGML</abbr></a> e.g. <i>HTML, XML</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/SHA-1" target="_blank">SHA-1</a> <i>secure hash algorithm</i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Shared_library#Shared_libraries" target="_blank">Shared library</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/System_shell" target="_blank">Shell</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Shell_%28computing%29" target="_blank">Shell</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Slug_%28web_publishing%29#Slug" target="_blank">Slug</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Smartphone" target="_blank">Smartphone</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Socket.io" target="_blank">Socket.IO</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Computer_software" target="_blank">Software</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_as_a_service" target="_blank">Software as a service</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_agent" target="_blank">Software agent</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_architecture" target="_blank">Software architecture</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_component#Software_component" target="_blank">Software component</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_engine" target="_blank">Software engine</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_framework" target="_blank">Software Framework</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_package_%28installation%29" target="_blank">Software package</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_suite" target="_blank">Software suite</a> aka <i>Office suite</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Software_system" target="_blank">Software system</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Solution_stack" target="_blank">Solution stack</a> aka <i>Web stack</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Source_code" target="_blank">Source code</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Single_sign-on" target="_blank">SSO</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Standard_streams" target="_blank">Standard streams</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/State_%28computer_science%29" target="_blank">State</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Subdomain" target="_blank"></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Style_sheet_language" target="_blank">Style sheet language</a> e.g. <i>CSS</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Stylus_%28stylesheet_language%29" target="_blank">Stylus</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Su_%28Unix%29" target="_blank">su</a> <i>Unix</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/System_software" target="_blank">System(s) software</a> <i></i><br>'



  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Tar_%28file_format%29" target="_blank">tar</a> <i>e.g. tarball</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank">TCP</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Technical_documentation" target="_blank">Technical documentation</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Telnet" target="_blank">Telnet</a> <i></i><br>'
  , '<a href="https://en.wikipedia.org/wiki/Template_engine_%28web%29" target="_blank">Template Engine</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Text_terminal#Text_terminals" target="_blank">Text terminals</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Thread_%28computer_science%29" target="_blank">Thread (of execution)</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Thread_pool" target="_blank">Thread pool</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read" target="_blank">tl;dr</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Toolchain" target="_blank">Toolchain</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Touchpad" target="_blank">Touchpad</a> aka <i>trackpad</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Transifex" target="_blank">Transifex</a> <i></i><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/User_interface" target="_blank"><abbr title="User interface">UI</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Uname" target="_blank">Uname</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Uniform_resource_identifier" target="_blank">URI</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/User_agent" target="_blank">User agent</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/User_space" target="_blank">User space</a> <i></i><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/V8_%28JavaScript_engine%29" target="_blank">V8</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Vga" target="_blank">VGA</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Virtual_machine" target="_blank"><abbr title="Virtual machine">VM</abbr></a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Virtual_private_server" target="_blank"><abbr title="Virtual private server">VPS</abbr></a> <i></i><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_application" target="_blank">Web application</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_application_framework" target="_blank">Web application framework</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_browser" target="_blank">Web browser</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_browser_engine" target="_blank">Web browser engine</a> aka <i>layout engine, rendering engine</i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_feed" target="_blank">Web feed</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Webhook" target="_blank">Web hook</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Search_engine" target="_blank">Web search engine</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_server" target="_blank">Web server</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_service" target="_blank">Web service</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/WebSocket" target="_blank">WebSocket</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Web_syndication" target="_blank">Web syndication</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Wrapper_library" target="_blank">Wrapper library</a> <i></i><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/Xcode" target="_blank">Xcode</a> <i></i><br>'
  , '<a href="http://en.wikipedia.org/wiki/Xml" target="_blank">XML</a> <i></i><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>' 
  ];

  var arr = itterms;


  var retval ="";
  retval += "<hr>";
  for (var i in arr){retval += arr[i];}
    retval += "<hr>";
  return retval;
};

//----------------------------------------------------------------------------

function java(){
  document.getElementById("demo").innerHTML=javaFunc();
}; // end java

var javaFunc = function(){

  // VERSION 1: array of links
  
  // js object
  var javaObj = {
   "append()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)"
   , "zzz":"aaa"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()"
   , "stringBuffer":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html"
   , "substring()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)"
  }; // end js object


  //var obj = javaObj;

  var retval = printObj(javaObj);
  return retval;


}; // end javaFunc

// end of VERSION 1
//----------------------------------------------------------------------------

// VERSION 2: object of links
/*
var javaArr = {
"append()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)" 
,"length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()" 
  , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()" target="_blank">length()</a><i> StringBuffer</i><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html" target="_blank">StringBuffer</a><br>'
  , '<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)" target="_blank">substring()</a><i> StringBuffer</i><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'
s
  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  




  };
  var arr = javaArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};
*/
// end of VERSION 2

//----------------------------------------------------------------------------

function js(){
  document.getElementById("demo").innerHTML=jsFunc();
};

var jsFunc = function(){
  var jsArr = [

  '<mark>JavaScript</mark><br>'


  , '<hr><b>A</b><br>'
  , '<!--A-->'




  , '<!--B-->'
  , '<hr><b>B</b><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="http://www.w3schools.com/js/js_obj_date.asp" target="_blank">Date</a><i> object</i><br>'
  , '<a href="http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock" target="_blank">display a clock</a><br>'









  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://www.lynda.com/JavaScript-tutorials/Essential-Training-2011/81266-2.html" target="_blank">Essential trainiung</a> <i></i><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_weekday" target="_blank">getDay()</a><br>'
  , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear" target="_blank">getFullYear()</a><br>'
  , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime" target="_blank">getTime()</a><br>'



  , '<!--H-->'
  , '<hr><b>H</b><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'
  , '<a href="http://www.w3schools.com/jsref/prop_html_innerhtml.asp" target="_blank">innerHTML=</a><i> property</i><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'
  , '<a href="http://learn.jquery.com/" target="_blank">jQuery</a> <i></i><br>'
  , '<a href="http://www.w3schools.com/js/default.asp" target="_blank">JavaScript</a> <i>w3schools</i><br>'
  , '<a href="http://jsfiddle.net/" target="_blank">JS Fiddle</a> <i></i><br>'
  , '<a href="http://doc.jsfiddle.net/tutorial.html" target="_blank">JS Fiddle Tutorial</a> <i></i><br>'
  , '<a href="http://www.jshint.com/" target="_blank">JS hint</a> <i>error detection</i><br>'
  , '<a href="http://eleventyone.done.hu/OReilly.JavaScript.The.Good.Parts.May.2008.pdf" target="_blank">JS the Good Parts</a> <i></i><br>'








  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<a href="http://www.w3schools.com/jsref/event_onclick.asp" target="_blank">onclick=</a><i> event</i><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_setfullyear2" target="_blank">setFullYear()</a><br>'
  , '<a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">setInterval()</a> <i></i><br>'
  , '<a href="http://www.w3schools.com/js/js_timing.asp" target="_blank">setTimeOut()</a> <i></i><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_toutcstring" target="_blank">toUTCString()</a><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>' 


  , '<hr>'
  , 'JS Fiddle examples:<br>'
  , '-------------------<br>'
  , '<a href="http://jsfiddle.net/igoryen/3pEyA/" target="_blank">Hello World!</a> <i></i><br>'
  , '<a href="http://jsfiddle.net/igoryen/3pEyA/1/" target="_blank">Hello World!</a> <i></i><br>'
  , '<a href="http://jsfiddle.net/igoryen/3pEyA/2/" target="_blank">Hello World!</a> <i></i><br>'
  , '<a href="http://jsfiddle.net/praveen_prasad/XNJxT/14/" target="_blank">Hello World!</a> <i></i><br>'
  , '<a href="http://jsfiddle.net/rniemeyer/bxfXd/" target="_blank">List</a> <i></i><br>'
  , '<a href="http://jsfiddle.net/rwaldron/xhXE6/" target="_blank">Popcorn</a> <i></i><br>'
  , '-------------------<br>'



  ];
  var arr = jsArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr){retval += arr[i];}
    retval += "<hr>";
  return retval;

};

/////////////////////////////////////////////////////////////////////////
function latina(){
  document.getElementById("demo").innerHTML=latinaFunc();
};
var latinaFunc = function(){
  var latinaArr = [
  '<mark>Latina</mark><br>'



  , '<hr><b>A</b><br>'
  , '<!--A-->'




  , '<!--B-->'
  , '<hr><b>B</b><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









  , '<!--E-->'
  , '<hr><b>E</b><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://www.frcoulter.com/latin/links.html" target="_blank">Latin Links</a> >><br>'
  , '<a href="https://sites.google.com/site/janualinguae/latin" target="_blank">Latinum</a> <i></i><br>'

  , '<!--M-->'
  , '<hr><b>M</b><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'
  , '<a href="http://yle.fi/radio1/tiede/nuntii_latini/" target="_blank">Nuntii Latini</a> <i></i><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<a href="http://www.orbilat.com/" target="_blank">Orbilat</a><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="file:///D:/Language/Latina/html/latinitas_recens_latine.html" target="_blank">Recens Latinitas </a> <i> c. 2350 words</i><br>'
  , '<a href="http://www.antimoon.com/forum/t2129-0.htm" target="_blank">Romanian closest to Classical Latin</a> <i></i><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  





  ];
  var arr = latinaArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};
//////////////////////////
function l10n(){
  document.getElementById("demo").innerHTML = l10nFunc();

};
var l10nFunc = function(){
  var l10nArr = [
  '<mark>Localization</mark><br>'


  , '<hr><b>A</b><br>'
  , '<!--A-->'




  , '<!--B-->'
  , '<hr><b>B</b><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'










  , '<!--E-->'
  , '<hr><b>E</b><br>'


  , '<!--F-->'
  , '<hr><b>F</b><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html" target="_blank">Header field definitions</a> <i></i><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'
  , '<a href="http://en.wikipedia.org/wiki/IETF_language_tag" target="_blank"> <abbr title="Internet engineering task force">IETF</abbr> language tag</a> <i></i><br>'
  , '<a href="http://www.i18nguy.com/" target="_blank">i18n guy</a> <i></i><br>'
  , '<a href="http://ejohn.org/blog/a-strategy-for-i18n-and-node/" target="_blank">i18n in Node</a> <i></i><br>'
  , '<a href="http://iloveyou-localized.herokuapp.com/" target="_blank">I love you</a> <i>localized</i><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="https://github.com/mozilla/i18n-abide" target="_blank">l10n-abide</a> <i></i><br>'
  , '<a href="https://hacks.mozilla.org/2013/04/localization-community-tools-process-part-2-of-3-a-node-js-holiday-season-part-10/" target="_blank">l10n community</a> <i></i><br>'
  , '<a href="http://www.i18nguy.com/unicode/language-identifiers.html" target="_blank">Language identifiers</a> <i></i><br>'



  , '<!--M-->'
  , '<hr><b>M</b><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="https://www.transifex.com/" target="_blank">Transifex</a> <i></i><br>'
  , '<a href="http://help.transifex.com/contents.html" target="_blank">Transifex</a> <i>documentation</i><br>'




  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  








  ];
  var arr = l10nArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};
//-------------------------------------------------------

function mus(){
  document.getElementById("demo").innerHTML= mus2();
};

var mus2 = function (){

  var musicObj ={

   "A Beautiful Exchange":"https://www.youtube.com/watch?v=r-bUZj1bkoE"
   , "A Day without Rain":"https://www.youtube.com/watch?v=JgErQp7b8KI"
   , "A Wealthy Place":"http://www.youtube.com/watch?v=2O_eF1eZk0g"
   , "Avenit, Iarna":"https://www.youtube.com/watch?v=ikzQuJW2x5Q&list=RD02m7r-210gW-A"
   , "Aliens":"http://www.youtube.com/watch?v=OQXWJCQVGBc"
   , "All that she wants":"http://www.youtube.com/watch?v=8OB28fTKSds"
   , "Always":"https://www.youtube.com/watch?v=9BMwcO6_hyA"
   , "Amarantine":"https://www.youtube.com/watch?v=dsFpNs-ch9Y"
   , "Afro Celt":"http://www.youtube.com/watch?v=ClAkyn8EAS4&list=PLSC1WNAGYIGWHDMRBNMDBNETHY6ABYO7L"
   , "Afro Celt Playlist":"http://www.youtube.com/watch?v=XZfMix6olic&playnext=1&list=PLB2AB51B20782729C&feature=results_main"
   , "Alice Theme (Movie)":"https://www.youtube.com/watch?v=LW7cikQuc1s"
   , "And Winter Came":"https://www.youtube.com/watch?v=oF5dVw2sAMY"
   , "Another Night":"http://www.youtube.com/watch?v=QNbRMG-4wAI"
   , "Anthill, The":"http://www.youtube.com/watch?v=MtalpBUyl5I"
   , "Astazi Sa Nascut Hristos":"https://www.youtube.com/watch?v=Q93f6BLUx-0"
   , "Bad":"http://www.youtube.com/watch?v=dsUXAEzaC3Q"
   , "Be Thou My Vision":"http://www.youtube.com/watch?v=Wk2LWZ9PHPY&NR=1&feature=fvwp"
   , "Beautiful Light Music": "http://www.youtube.com/watch?v=FOIjvHjK0Rw"
   , "Better is One Day":"https://www.youtube.com/watch?v=rnWLMsPhOdQ"
   , "Bitter Sweet Symphony":"https://www.youtube.com/watch?v=1lyu1KKwC74"
   , "Bless the Lord":"https://www.youtube.com/watch?NR=1&v=RWJLy3-iRQo&feature=endscreen"
   , "live":"http://www.youtube.com/watch?v=DXDGE_lRI0E"
   , "Blood Group":"http://www.youtube.com/watch?v=6i7zxpbOcaI"
   , "Break Every Chain":"https://www.youtube.com/watch?v=kNAV98bAqng"
   , "Breath":"http://www.youtube.com/watch?v=sBCC1kDVVWk"
   , "Brook in the Woods":"http://www.youtube.com/watch?v=b2njHW9ydWs"
   , "Brown noise":"https://www.youtube.com/watch?v=iMrjYpU3YD4"
   , "Bullets are flying":"http://www.youtube.com/watch?v=ttZKDtTW1aI"
   , "Careless Whisper":"https://www.youtube.com/watch?v=_bQTmS_kzIo"
   , "Castle of Rain, A":"http://www.youtube.com/watch?v=tn_ZB7Zt8Zg"
   , "Change":"http://www.youtube.com/watch?v=eg7BFXss1hE"
   , "Charles & Raven":"http://www.youtube.com/watch?v=07r60T0drUk"
   , "Christian classical music":"http://www.youtube.com/watch?v=qAJNg5iuEGU"
   , "Crickets chirping at night":"http://www.youtube.com/watch?v=jzN3yJXlWrg"
   , "Cricket Symphony":"http://www.youtube.com/watch?v=aoiV7c46C1A"
   , "Crockett`s Theme":"https://www.youtube.com/watch?v=_UmOY6ek_Y4"
   , "Crying in the Rain":"https://www.youtube.com/watch?v=h-WPexVEujg"
   , "Derezzed":"http://www.youtube.com/watch?v=M4dUiBfMQVU"
   , "Domn, Domn, Sa-naltam":"https://www.youtube.com/watch?v=g82MacFQ4D8"
   , "Don`t dream it`s over":"http://www.youtube.com/watch?v=3bdOefF_tyU"
   , "Down to Earth":"http://www.youtube.com/watch?v=PuR8uq9J7gw"
   , "Dragula":"http://www.youtube.com/watch?v=fwgNscjpHn4"
   , "Drifting in a calm bay":"http://www.youtube.com/watch?v=hIzLW8FXrGA"
   , "Earth":"https://www.youtube.com/watch?v=x83SXBc1sV0"
   , "Earth Angel (Back to the Future)": "https://www.youtube.com/watch?v=PjjIuwfpQhk"
   , "Earth Song":"https://www.youtube.com/watch?v=XAi3VTSdTxU"
   , "Englishman in NY":"https://www.youtube.com/watch?v=d27gTrPPAyk"
   , "Enya, Singles Collection":"https://www.youtube.com/watch?v=pKd5H99bNOQ"
   , "Enya, the Best of":"https://www.youtube.com/watch?v=wOtQ2vMxOl0"
   , "Enya, the Very Best of":"https://www.youtube.com/watch?v=img8hbAiRIk"
   , "Er. Lounge":"http://www.youtube.com/watch?v=SP0nLHHzDPY"
   , "Eternal Flame":"http://www.youtube.com/watch?v=DPxVIx06_CQ"
   , "Everything`s gonna be all right in Christ":"https://www.youtube.com/watch?v=uYXyo4kCffg"
   , "Extreme Ways":"https://www.youtube.com/watch?v=Au-v2RS0mJQ"
   , "Faith":"http://www.youtube.com/watch?v=phi9ZRjrTto"
   , "Fall On Me":"https://www.youtube.com/watch?v=xzq2AMQxxbk"
   , "Fat":"http://www.youtube.com/watch?v=t2mU6USTBRE"
   , "Fields of Gold":"https://www.youtube.com/watch?v=KLVq0IAzh1A"
   , "Forest Video":"https://www.youtube.com/watch?v=GHNDr69tNCE"
   , "Forever":"http://www.youtube.com/watch?v=5sMKX22BHeE"
   , "Forever Young 1":"http://www.youtube.com/watch?v=t1TcDHrkQYg"
   , "Forever Young 2":"http://www.youtube.com/watch?v=cLYm43lIKPk"
   , "Get Lucky":"http://www.youtube.com/watch?v=5NV6Rdv1a3I"
   , "Ghita":"https://www.youtube.com/watch?v=OY1vv7hQQCg"
   , "Ghita, ru":"https://www.youtube.com/watch?v=ah91dyjIgEA"
   , "Girl of 16":"https://www.youtube.com/watch?v=s9lQodyP_Bo"
   , "Go West":"http://www.youtube.com/watch?v=LNBjMRvOB5M"
   , "God will Come":"https://www.youtube.com/watch?v=qYS4BP-l37k"
   , "Good Night":"http://www.youtube.com/watch?v=hce8z2h0CoI"
   , "He picked me up":"http://www.youtube.com/watch?v=_oitOA-boqU#t=01m10s"
   , "Hector`s Death":"https://www.youtube.com/watch?v=S-l2JlM9WPU"
   , "Hillsong":"https://www.youtube.com/watch?v=eOY0mjjmx8Y&list=AL94UKMTqg-9Dk4C-hxfBZvi0qby76rv8P"
   , "Home is behind the world ahead":"http://www.youtube.com/watch?v=WskRAEggqkQ"
   , "Human":"http://www.youtube.com/watch?v=RIZdjT1472Y"
   , "I am Free":"https://www.youtube.com/watch?v=_MbcYyOsF5"
   , "I certainly believe you":"http://www.youtube.com/watch?v=eBzeG93LudE"
   , "I do it for you":"https://www.youtube.com/watch?v=ZGoWtY_h4xo"
   , "I drove all night":"http://www.youtube.com/watch?v=kvz_gW5C2cY"
   , "I know Love":"https://www.youtube.com/watch?v=OtkWEv533yU"
   , "I Surrender":"https://www.youtube.com/watch?v=HcnfT4arZtI"
   , "I will stay":"https://www.youtube.com/watch?v=sUSY1xJ3nzU"
   , "I Wish My Baby Was Born ":"http://www.youtube.com/watch?v=BYZ8tCKErso"
   , "I`m feeling fine":"http://www.youtube.com/watch?v=gETOClSe9DQ"
   , "I`m not moved by what I see":"http://www.youtube.com/watch?v=NomZHolreBk#t=1h00m35s"
   , "Ingeri de lumina":"https://www.youtube.com/watch?v=a7Q2Ec0bebA"
   , "Ingerii Şoptesc":"https://www.youtube.com/watch?v=1jPAZuaUMEw&list=RD02m7r-210gW-A"
   , "Insomnia cure":"http://www.youtube.com/watch?v=y0Zftj8IzCw"
   , "Is This Love":"https://www.youtube.com/watch?v=ujnH4yNqL8E"
   , "MyNeighbor Totoro":"https://www.youtube.com/watch?v=n611emATxSU&list=PLD97BD8BE7A5504C5"
   , "Jesus is ALWAYS with you":"http://www.godtube.com/watch/?v=0FBFCFNU&utm_source=GodTube%20Must-See%20-%20Mobile&utm_medium=email&utm_campaign=03/02/2013"
   , "Joey the Swampthing":"http://www.youtube.com/watch?v=S4aqM_wu6Ns"
   , "Joy of the Lord":"https://www.youtube.com/watch?v=Da5EdAsyEXM"
   , "Kiss me":"http://www.youtube.com/watch?v=8N-qO3sPMjc"
   , "Komarovo":"https://www.youtube.com/watch?v=k9-avqS0U4A"
   , "La Isla Bonita":"https://www.youtube.com/watch?v=7YzW1nMB9fk"
   , "Last Hero, the ":"https://www.youtube.com/watch?v=BnDY4jC7JZM"
   , "Learning to Fly":"https://www.youtube.com/watch?v=DrGuVa-4BVE"
   , "Legend, The":"http://www.youtube.com/watch?v=mN5d5KWJp0Y&feature=endscreen&NR=1"
   , "Life":"https://www.youtube.com/watch?v=rzI3AdpA9e4"
   , "Live to tell":"https://www.youtube.com/watch?v=IzAO9A9GjgI"
   , "Look after yourself ":"http://www.youtube.com/watch?v=8ki69Vcb_-E"
   , "Love songs, non stop":"http://www.youtube.com/watch?v=5eT0ZbunLGY"
   , "Lullaby":"http://www.youtube.com/watch?v=0_W7fMSBeJg"
   , "Magneto Theme":"https://www.youtube.com/watch?v=frqYK1EZ3O0"
   , "Manic Monday":"http://www.youtube.com/watch?v=lAZgLcK5LzI"
   , "Maria si Iosif Colinda":"https://www.youtube.com/watch?v=Pnpl8EkPG6Y"
   , "Massive Attack":"https://www.youtube.com/watch?v=hbe3CQamF8k"
   , "May It Be":"https://www.youtube.com/watch?v=_upDME6MwPY"
   , "Meat Beat Manifesto":"https://www.youtube.com/watch?v=frqYK1EZ3O0"
   , "Mein Herz brennt (instr.)":"https://www.youtube.com/watch?v=mKQ0tncZxuw"
   , "Memory of the Trees, The":"https://www.youtube.com/watch?v=UEBIc7NHyQk"
   , "Mindfields":"http://www.youtube.com/watch?v=jv7-EmmDWds"
   , "Minstrel Boy":"https://www.youtube.com/watch?v=ZrY6Uf4Hyxg"
   , "Mio Min Mio":"https://www.youtube.com/watch?v=5pgVkE_kCZ8"
   , "Mom we are all severely ill":"http://www.youtube.com/watch?v=pLE2ngmVqZY"
   , "Mom bought me a horsey":"http://www.youtube.com/watch?v=ds635sBc59I"
   , "Money Shmoney":"http://www.youtube.com/watch?v=NWTEhkG73yU"
   , "Music 4vi":"http://www.youtube.com/watch?v=MhWv1bn6SM4&playnext=1&list=PLC4BE809C8B229989&feature=results_main"
   , "My Crush is On the 5th Floor":"http://www.youtube.com/watch?v=1q95rkKtq6I"
   , "My Jesus I love Thee":"http://www.youtube.com/watch?v=EYfBZnMve_E"
   , "Nastenka`s song":"http://www.youtube.com/watch?v=gcsBzZ3hWUM"
   , "Nature Sounds 1":"http://www.youtube.com/watch?v=T-ExXFoGeOQ"
   , "Nature Sounds 3 Rain Forest":"http://www.youtube.com/watch?v=1XEsIFObhrY"
   , "Nature Sounds 4":"http://www.youtube.com/watch?v=-K6thJUU7hc"
   , "Nature Sounds 12":"http://www.youtube.com/watch?v=eTglERP772s"
   , "Nature Sounds 13":"http://www.youtube.com/watch?v=CtjWbDjmpag"
   , "Nature Sounds 15":"http://www.youtube.com/watch?v=pzJsGK7kig4"
   , "Nature Sounds 16":"http://www.youtube.com/watch?v=b2njHW9ydWs"
   , "Nature Sounds Jungle":"http://www.youtube.com/watch?v=MOBzSxFK8E0"
   , "Nature Sounds Stream":"http://www.youtube.com/watch?v=0GR0FO5qdeM"
   , "Nature Sound":"http://www.youtube.com/watch?v=1ASJxKpztWg&playnext=1&list=PLB5B1BE68A533E287&feature=results_main"
   , "Nature Sounds Stream Sound":"http://www.youtube.com/watch?v=vb1lWFonCeU&playnext=1&list=PLDED02197B8A7F8B3&feature=results_main"
   , "Never Once":"http://www.youtube.com/watch?v=n1bXG4WIesA"
   , "New Song":"http://www.youtube.com/watch?v=iWNvM2Ebcjc"
   , "Night Crickets":"http://www.youtube.com/watch?v=TLYmOwPxHTA"
   , "Night Sounds":"http://www.youtube.com/watch?v=glMgc8S-fVI"
   , "Paint the Sky with Stars":"https://www.youtube.com/watch?v=bvHyT8kmirg"
   , "Prometheus OST":"http://www.youtube.com/watch?v=LhlHqANcKjU&list=PLC07602E283C29704"
   , "Rain Piano Nigh time":"http://www.youtube.com/watch?v=hBcwaWFlGkI"
   , "Rammstein":"http://www.youtube.com/watch?v=lw7USlGwn2w&list=PLRW6BNC-pDizxCk0OeSgZHYOIOfp-68NC&index=1&feature=plpp_video"
   , "Red and Yellow Days":"http://www.youtube.com/watch?v=N_KQ9oDp0-c"
   , "Reggae Praise":"https://www.youtube.com/watch?v=v5tWLQfFhmA&list=PL99DC3501551CA6FC"
   , "Remember Me":"https://www.youtube.com/watch?v=3yy6SIzq8Mc"
   , "Right Here Waiting":"https://www.youtube.com/watch?v=S_E2EHVxNAE"
   , "Room for a step forward":"http://www.youtube.com/watch?NR=1&v=6JJw-ntEG_0&feature=endscreen"
   , "Runaway Train":"http://www.youtube.com/watch?v=NRtvqT_wMeY"
   , "Sea Shore Sounds ":"http://www.youtube.com/watch?v=1ASJxKpztWg"
   , "Seara de Craciun Frumos":"https://www.youtube.com/watch?v=SUO3go2NMOU"
   , "Secrets":"http://www.youtube.com/watch?v=rHsx3tFZDOk"
   , "Seven Seconds ":"https://www.youtube.com/watch?v=nJFjjgpXkN0"
   , "Shape of my heart ":"http://www.youtube.com/watch?v=KX4jAplZb0Y"
   , "Shape of my heart ":"http://www.youtube.com/watch?v=locIxsfpgp4"
   , "Shepherd Moons":"https://www.youtube.com/watch?v=PRPOv3RXse8"
   , "Sleep Music ":"http://www.youtube.com/watch?v=FecEPrIOPJM"
   , "Something More":"https://www.youtube.com/watch?v=GrV_ZvwZRvw"
   , "Song of the Lonely Mount`n ":"http://www.youtube.com/watch?v=iIy5zvSpF1E"
   , "Sorrow ":"http://www.youtube.com/watch?v=UKQW3SSqAxw"
   , "Spybreak! ":"http://www.youtube.com/watch?v=iCBL33NKvPA"
   , "Stand, The ":"http://www.youtube.com/watch?v=kV5iZBTNYrk"
   , "Star, The ":"http://www.youtube.com/watch?v=kIvISJIgTms"
   , "Star named Sun, The ":"https://www.youtube.com/watch?v=BuQkQEcsm5Y"
   , "Stars will grow dim ":"http://www.youtube.com/watch?v=yeRRpr2JA60"
   , "Stars will grow dim ":"http://www.youtube.com/watch?v=4Ip_XXAgv18"
   , "Summer will be over ":"http://www.youtube.com/watch?v=Xk7v8Kp_6n0"
   , "Take On Me":"https://www.youtube.com/watch?v=djV11Xbc914"
   , "Tell Him":"http://www.youtube.com/watch?v=wB_vjpRhLxM"
   , "The One Who Saves":"https://www.youtube.com/watch?v=we4p6GzcWIM"
   , "The Power of Goodbye":"https://www.youtube.com/watch?v=Eq01a0KEJ9U"
   , "They don`t really care about us":"https://www.youtube.com/watch?v=QNJL6nfu__Q"
   , "They don`t really care about us, prison v.":"https://www.youtube.com/watch?v=ixBryyQSrD8"
   , "Thinking about you":"https://www.youtube.com/watch?v=ixBryyQSrD8"
   , "This is my desire":"https://www.youtube.com/watch?v=-XKxqqhOgVM"
   , "Time after Time":"https://www.youtube.com/watch?v=VdQY7BusJNU"
   , "Tom`s Diner":"https://www.youtube.com/watch?v=FLP6QluMlrg"
   , "Tron":"http://www.youtube.com/watch?v=2OmDnzlXeqw&playnext=1&list=PL2DE765CC5D6EBBD8&feature=results_main"
   , "TV Guide":"http://www.youtube.com/watch?v=w0ibz9KkHAI"
   , "Visitor from the Future":"http://www.youtube.com/watch?v=sAdug2Kqfdg"
   , "Voyage voyage ":"http://www.youtube.com/watch?v=6PDmZnG8KsM"
   , "War ":"http://www.youtube.com/watch?v=CUPH5il-Cf0"
   , "Watermark":"https://www.youtube.com/watch?v=LQ00OPea4GI"
   , "We`ll be together":"http://www.youtube.com/watch?v=bCCzPC_TTvI"
   , "What a wonderful world (IZ)": "http://www.youtube.com/watch?v=ggU2il6EaEU"
   , "What is love ":"https://www.youtube.com/watch?v=VVmbhYKDKfU"
   , "White Heart, playlist":"https://www.youtube.com/watch?v=O7OGieXHM5g&list=AL94UKMTqg-9AYWb49qcFdqYVR-wmfaov7"
   , "White Lounge ":"http://www.youtube.com/watch?v=OTU1n0lsRgE"
   , "Who wants to live forever":"https://www.youtube.com/watch?v=BYOE_b4aYD0"
   , "You and I":"http://www.youtube.com/watch?v=sc47le0Byq0"
   , "You`re Beautiful":"http://www.youtube.com/watch?v=D-26kipcM5g"
   , "You`re My Angel":"https://www.youtube.com/watch?v=kUfVE8WZQNk"
   , "You raise me up 1":"http://www.youtube.com/watch?v=7jfMoa912fY"
   , "You raise me up 2":"https://www.youtube.com/watch?v=aJxrX42WcjQ"
 };


 return printObj(musicObj);
};

//----------------------------------------------------------------------------


function nodejs(){
  document.getElementById("demo").innerHTML= node();
};

var node = function (){

  var _node = [
  '<mark>Node.js</mark><br>'

  , '<hr><b>A</b><br>'
  , '<!--A-->'
  , '<a href="http://nodejs.org/api/all.html" target="_blank">API</a> <i></i><br>'
  , '<a href="http://localhost:8005/index.html" target="_blank">Avocado</a> <i>s. 2013-05-27</i><br>'




  , '<!--B-->'
  , '<hr><b>B</b><br>'
  , '<a href="http://www.nodebeginner.org/" target="_blank">Beginner Book</a> <i></i><br>'
  , '<a href="http://project70.com/nodejs/beginners-tutorial-node-js/" target="_blank">Beginner`s Tutorial</a> <i>Project 70</i><br>'
  , '<a href="https://github.com/coolaj86/browser-buffer" target="_blank">Buffer</a> <i></i><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="https://npmjs.org/package/commander" target="_blank">commander</a> <i></i><br>'
  , '<a href="https://npmjs.org/doc/config.html" target="_blank">config</a> <i></i><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="http://readwrite.com/2011/01/25/wait-whats-nodejs-good-for-aga" target="_blank">What is it good for?</a> <i></i><br>'    








  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/" target="_blank">Event-driven programming</a> <i></i><br>'
  , '<a href="http://mashable.com/2011/03/10/node-js/" target="_blank">Everyone`s talking about it</a> <i></i><br>'
  , '<a href="https://github.com/vesln/exports" target="_blank">exports</a> <i></i><br>'
  , '<a href="https://npmjs.org/package/express" target="_blank">express</a> <i></i><br>'
  , '<a href="http://expressjs.com/guide.html" target="_blank">Express Guide</a> <i></i><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'
  , '<a href="http://www.lynda.com/Nodejs-tutorials/Nodejs-First-Look/101554-2.html" target="_blank">First Look</a> <i>Joseph leBlanc</i><br>'
  , '<a href="http://nodejs.org/api/fs.html#fs_file_system" target="_blank">fs</a> <i>file system</i><br>'
  , '<a href="http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/" target="_blank">for beginners</a> <i></i><br>'
  , '<a href="http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback" target="_blank">fs.writeFile()</a> <i></i><br>'


  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js" target="_blank">Get started</a> <i></i><br>'
  , '<a href="https://npmjs.org/package/gobbledygook" target="_blank">gobbledygook</a> <i></i><br>'


  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="alicoding.com/node-js-write-a-hello-world-from-easy-to-localized-method/?utm_source=rss&utm_medium=rss&utm_campaign=node-js-write-a-hello-world-from-easy-to-localized-method" target="_blank">Hello World!</a> <i>Ali</i><br>'
  , '<a href="http://howtonode.org/streams-explained" target="_blank">How to Node</a> <i>Tim Caswell</i><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'
  , '<a href="http://www.youtube.com/watch?v=jo_B4LTHi3I" target="_blank">Intro by Ryan Dahl</a> <i>YT</i><br>'




  , '<!--J-->'
  , '<hr><b>J</b><br>'
  , '<a href="https://github.com/joyent/node/wiki/modules" target="_blank">joyent/node</a> <i></i><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="https://groups.google.com/forum/?fromgroups#!forum/nodejs" target="_blank">Mailing list</a> <i></i><br>'
  , '<a href="http://book.mixu.net/ch1.html" target="_blank">Mixu`s Node book</a> <i></i><br>'
  , '<a href="https://npmjs.org/package/mkpath" target="_blank">mkpath</a> <i></i><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'
  , '<a href="http://blog.osbutler.com/categories/node-by-example/?page=3" target="_blank">Node by Example</a> <i></i><br>'
  , '<a href="http://nodecasts.net/" target="_blank">Nodecasts</a> <i>free screencasts</i><br>'
  , '<a href="https://github.com/joyent/node/wiki/node-core-vs-userland" target="_blank">Nodecore vs Userland</a> <i></i><br>'
  , '<a href="http://nodeguide.com/" target="_blank">Nodeguide</a> <i></i><br>'
  , '<a href="http://fedoraproject.org/wiki/Features/NodeJS" target="_blank">NodeJS on Fedora</a> <i></i><br>'
  , '<a href="http://nodetuts.com/" target="_blank">Node Tuts</a> <i></i><br>'
  , '<a href="https://github.com/joyent/node/wiki" target="_blank">Node wiki</a> <i></i><br>'
  , '<a href="http://blog.nodejitsu.com/npm-cheatsheet" target="_blank">npm cheatsheet</a> <i>nodejitsu</i><br>'
  , '<a href="https://npmjs.org/" target="_blank">NPMjs</a> <i></i><br>'




  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'
  , '<a href="https://npmjs.org/doc/json.html" target="_blank">package.json</a> <i></i><br>'
  , '<a href="http://package.json.nodejitsu.com/" target="_blank"></a> <i>cheatsheet</i><br>'
  , '<a href="http://nodejs.org/docs/v0.4.9/api/path.html" target="_blank">path</a> <i></i><br>'
  , '<a href="http://nodejs.org/api/path.html#path_path_join_path1_path2" target="_blank">path.join()</a> <i></i><br>'
  , '<a href="http://readwrite.com/2010/10/20/why-developers-should-pay-atte" target="_blank">Pay attention to Node.js</a> <i></i><br>'
  , '<a href="http://www.infoq.com/presentations/nodejs" target="_blank">Presented by Ryan Dahl</a> <i>InfoQ</i><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="https://github.com/mikeal/request" target="_blank">request</a> <i>github</i><br>'
  , '<a href="https://npmjs.org/package/require" target="_blank">require()</a> <i></i><br>'
  , '<a href="https://npmjs.org/package/request" target="_blank"></a> <i>npm.js</i><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://nodeguide.com/style.html" target="_blank">Style guide</a> <i>Felix Geisendörfer</i><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://nodejs.org/jsconf-eu-2010.pdf" target="_blank">20 challenges in Node.js</a> <i></i><br>'
  , '<a href="https://npmjs.org/package/typeof" target="_blank">typeof</a> <i></i><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'
  , '<a href="http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb" target="_blank">understanding ~</a> <i></i><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  






  ];


  var arr = _node;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;
};

//----------------------------------------------------------------------------

function php(){
  document.getElementById("demo").innerHTML = phpFunc();

};

var phpFunc = function(){
  var phpArr = [
  '<mark>PHP</mark><br><hr>'

  , '<!--A-->'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121025_arrays.php" target="_blank">Arrays</a><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/assign1/add.php" target="_blank">Asgmt 1 </a> <br>'
  , '<a href="https://zenit.senecac.on.ca/~int322_123a07/assign2/login.php" target="_blank">Asgmt 2 </a> <br>'

  , '<!--B-->'
  , '<hr><b>B</b><br>'

  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/caseless.php" target="_blank">Caseless</a><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_01.php" target="_blank">Classes 01</a><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_02.php" target="_blank">Classes 02</a><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab5/cookies.php" target="_blank">Lab 5-1</a><i> cookies.php</i><br>'

  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_class_db_01.php" target="_blank">DB thru classes</a><br>'

  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121120_encrypting.php" target="_blank">Encrypting</a><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121024_advanced_escaping_001.php" target="_blank">Escaping (advanced)</a><br>'
  , '<!--F-->'
  , '<hr><b>F</b><br>'

  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'

  , '<!--I-->'
  , '<hr><b>I</b><br>'

  , '<!--J-->'
  , '<hr><b>J</b><br>'

  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab1/lab1.php" target="_blank">Lab 1 </a> <br>'  
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab2/forms-part3.php" target="_blank">Lab 2 </a> <br>'   
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab3/mysqlform.php" target="_blank">Lab 3 </a> <br>'  
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv.php" target="_blank">Lab 4-1 </a> <br>' 
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv2.php" target="_blank">Lab 4-2 </a> <br>' 
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv3.php" target="_blank">Lab 4-3 </a> <br>' 
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_4.php" target="_blank">Lab 4-4 </a> <br>' 
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_5.php" target="_blank">Lab 4-5 </a> <br>' 
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_6.php" target="_blank">Lab 4-6 </a> <br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php" target="_blank">Lab 5-2a</a><i> login.php</i><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php" target="_blank">Lab 5-2b</a><i> loginStatus.php</i><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/myClasses.php" target="_blank">Lab 6</a><i> myClasses.php</i><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php" target="_blank">Lab6</a> testmenu.php<br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/oo-login.php" target="_blank">oo-login.php</a> Lab 6<br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php" target="_blank">testMenu.php</a> Lab 6<br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/login_prx.php" target="_blank">login prx</a><br>'

  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_destructor_01.php" target="_blank">My_class</a><br>'

  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<!--P-->'
  , '<hr><b>P</b><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121028_regex.php" target="_blank">Reg Ex</a><br>'

  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'

  , '<!--S-->'
  , '<hr><b>S</b><br>'

  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121110_specialMethodsPHP5_test.php" target="_blank">Salve!</a><br>'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/121028_strings.php" target="_blank">Strings</a><br>'

  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , ' Templating: '
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/templating/a.php" target="_blank">a.php</a> | '
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/templating/cc.html" target="_blank">cc.html</a> | '
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/templating/dd.php" target="_blank">dd.php</a> | '
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/ff.php" target="_blank">ff.php</a> | '
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/gg.php" target="_blank">gg.php</a> |'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/hh.php" target="_blank">hh.php</a> |'
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/practice/test1.php" target="_blank">test1.php</a> | '
  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'
  , '<!--X-->'
  , '<hr><b>X</b><br>'
  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  




  ];
  var arr = phpArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;



};
//----------------------------------------------------------------------------


function p_w(){
  document.getElementById("demo").innerHTML= p_wFunc();

};

var p_wFunc = function(){
  var p_wArr = [
  '<mark>Praise and Worship</mark><br>'


  , '<!--A-->'
  , '<hr><b>A</b><br>'




  , '<!--B-->'
  , '<hr><b>B</b><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://www.youtube.com/watch?v=WUJSElja3d4" target="_blank">Eighth Wonder</a> <i>WhiteHeart</i><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'




  , '<!--I-->'
  , '<hr><b>I</b><br>'
  , '<a href="https://www.youtube.com/watch?v=aLcpLD5DHDU" target="_blank">I will enter His Gates</a> <i>Maranatha</i><br>'
  , '<a href="https://www.youtube.com/watch?v=nr_YiSZ8KBc" target="_blank">I will enter His Gates</a> <i></i><br>'


  , '<!--J-->'
  , '<hr><b>J</b><br>'






  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="https://www.youtube.com/watch?v=F3X0KhvJwsQ" target="_blank">Maranatha Double Praise 1</a> <i></i><br>'
  , '<a href="https://www.youtube.com/watch?v=jfAbAOI-aj0" target="_blank">Maranatha Double Praise 2</a> <i></i><br>'
  , '<a href="https://www.youtube.com/watch?v=Z_Sg93io5c4" target="_blank">Maranatha Double Praise 3</a> <i></i><br>'
  , '<a href="https://www.youtube.com/watch?v=dd0O7GPR6QE" target="_blank">Maranatha Double Praise 4</a><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 5</a> <i></i><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 6</a> <i></i><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 7</a> <i></i><br>'
  , '<a href="https://www.youtube.com/watch?v=Bl0R9AT0lPk" target="_blank">Maranatha Double Praise 8</a> <i></i><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 9</a> <i></i><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 10</a> <i></i><br>'
  , '<a href="https://www.youtube.com/watch?NR=1&feature=endscreen&v=uyrxmG1Ctio" target="_blank">Maranatha Double Praise 11</a> <i></i><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 12</a> <i></i><br>'
  , '<a href="" target="_blank">Maranatha Double Praise 13</a> <i></i><br>'
  , '<a href="https://www.youtube.com/watch?v=Pce_M-XT8Jc" target="_blank">Maranathe Double Praise 14</a> <i></i><br>'

  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'






  , '<!--S-->'
  , '<hr><b>S</b><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  


  ];
  var arr = p_wArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;


}; 
//----------------------------------------------------------------------------

function p_t(){
  document.getElementById("demo").innerHTML = p_tFunc();
};
var p_tFunc = function(){
  var p_tArr =  [
  '<mark>Preach and Teach</mark><br>'

  , '<hr><b>A</b><br>'
  , '<!--A-->'




  , '<!--B-->'
  , '<hr><b>B</b><br>'




  , '<!--C-->'
  , '<hr><b>C</b><br>'




  , '<!--D-->'
  , '<hr><b>D</b><br>'

  , '<a href="http://www.youtube.com/watch?v=D_TXYEmqn6U" target="_blank">Devil`s under my feet</a><i> Hagin</i><br>'
  , '<a href="http://www.youtube.com/watch?v=NomZHolreBk" target="_blank">Doubt, Fear, and Unbelief</a><i> Hagin 1982</i><br>'








  , '<!--E-->'
  , '<hr><b>E</b><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'



  , '<!--G-->'
  , '<hr><b>G</b><br>'
  , '<a href="http://www.youtube.com/watch?v=d2Wp5_bL338" target="_blank">God`s Medicine</a> <i>KH</i><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="http://www.youtube.com/playlist?list=PL4C095CACCE805213" target="_blank">Hagin</a><i></i><br>'



  , '<!--I-->'
  , '<hr><b>I</b><br>'



  , '<!--J-->'
  , '<hr><b>J</b><br>'
  , '<a href="https://www.youtube.com/watch?v=ljRKhZ81aqY" target="_blank">Horus</a><i></i><br>'





  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'


  , '<!--M-->'
  , '<hr><b>M</b><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'


  , '<!--P-->'
  , '<hr><b>P</b><br>'



  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="http://www.youtube.com/watch?v=-j8ZMMuu7MU" target="_blank">Rejection?</a><i></i><br>'





  , '<!--S-->'
  , '<hr><b>S</b><br>'




  , '<!--T-->'
  , '<hr><b>T</b><br>'



  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'

  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  




  ];


  var arr = p_tArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;
};

//----------------------------------------------------------------------------

function selfdefense(){
  document.getElementById("demo").innerHTML = selfdefenseFunc();
};

var selfdefenseFunc = function(){

  var selfdefenseArr = [
  '<mark>Self-Defense</mark><br>'


  , '<hr><b>A</b><br>'
  , '<!--A-->'
  , '<a href="http://www.youtube.com/watch?v=K6r8MkqeSMM&feature=relmfu" target="_blank">Americana Move mounting</a><br>'

  , '<!--B-->'
  , '<hr><b>B</b><br>'

  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="http://www.youtube.com/watch?v=sS3iZ9rNaG8&feature=relmfu"target="_blank">Choke from above -> Arm Bar</a><br>'
  , '<a href="http://www.youtube.com/watch?v=fro50KwBDjg" target="_blank">Choke from under -> Arm Bar</a><br>'
  , '<a href="http://www.youtube.com/watch?v=XfSBGZz_6Mc&feature=relmfu" target="_blank">Clothes Grab -> Leg Sweep</a>'



  , '<!--D-->'
  , '<hr><b>D</b><br>'
  , '<a href="http://www.youtube.com/watch?v=erQ7AVtcwec" target="_blank">Demo (Jiujitsu)</a><br>'
  , '<a href="http://www.youtube.com/watch?v=g6sZSC66ul4&feature=relmfu" target="_blank">Demo (part 1)</a><br>'
  , '<a href="http://www.youtube.com/watch?v=Y600l5UbR10&feature=relmfu" target="_blank">Demo (part 2)</a><br>'
  , '<a href="http://www.youtube.com/watch?v=EzSdD22BqXM&feature=relmfu" target="_blank">Demo (part 3)</a><br>'

  , '<!--E-->'
  , '<hr><b>E</b><br>'

  , '<!--F-->'
  , '<hr><b>F</b><br>'

  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'

  , '<!--I-->'
  , '<hr><b>I</b><br>'

  , '<!--J-->'
  , '<hr><b>J</b><br>'

  , '<!--K-->'
  , '<hr><b>K</b><br>'
  , '<a href="http://www.youtube.com/watch?v=HA-2NRuTLkw" target="_blank">Kimura</a><br>'
  , '<a href="http://www.youtube.com/watch?v=san7xnrCAQc" target="_blank">Knock out</a><br>'



  , '<!--L-->'
  , '<hr><b>L</b><br>'

  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="http://www.youtube.com/watch?v=9nrYaxOqmaQ&feature=relmfu" target="_blank">Mounting -> Closed Guard</a><br>'
  , '<a href="http://www.youtube.com/watch?v=Ed_BQaWtyck&feature=relmfu" target="_blank">Mounted -> Kimura</a><br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<!--P-->'
  , '<hr><b>P</b><br>'

  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'


  , '<!--S-->'
  , '<hr><b>S</b><br>'

  , '<a href="http://www.youtube.com/watch?feature=fvwp&v=CW5VpKC9ocU&NR=1" target="_blank">Shoulder grab -> Hiji Gaeshi</a> '

  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://www.youtube.com/watch?v=mtAtWH8dh7o&feature=relmfu" target="_blank">Top Cross Choke mounting</a><br>'
  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'
  , '<!--X-->'
  , '<hr><b>X</b><br>'
  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'  



  ];


  var arr = selfdefenseArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};
//----------------------------------------------------------------------------

function seneca(){
  document.getElementById("demo").innerHTML = senecaFunc();
};

var senecaFunc = function(){

  var senecaArr = [
  '<mark>Seneca</mark><br><hr>'

  , '<!--A-->'
  , '<a href="https://acs.senecac.on.ca/pages/index.php" target="_blank"><abbr title="Academic Computing Systems">ACS</abbr> site </a> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1738900" target="_blank">Alam, Tanvir rating</a><br>'

  , '<!--B-->'
  , '<hr><b>B</b><br>'




  , '<a href="https://www2.senecacollege.ca/buyback/index.jsp" target="_blank">Book Buyback</a><i> Seneca</i><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13003" target="_blank">Boyczuk, Bob rating</a><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1613500" target="_blank">Buchner, Mark rating</a><br>'


  , '<!--C-->'
  , '<hr><b>C</b><br>'

  , '<a href="https://inside.senecac.on.ca/clientservices" target="_blank">Client Services</a><i></i> <br>'
  , '<a href="https://scs.senecac.on.ca/~nebojsa.conkic/dbs301_work.html" target="_blank">Conkic, Nebojsa</a><i> DBS301</i> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13042" target="_blank">Conkic, Nebojsa rating</a><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=17894" target="_blank">Czegel, Barb rating</a><br>'



  , '<!--D-->'
  , '<hr><b>D</b><br>'
  , '<a href="https://scs.senecac.on.ca/~nebojsa.conkic/dbs301_work.html" target="_blank">DBS301</a><i> Conkic, Nebojsa</i> <br>' 
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=50506" target="_blank">Douglas, Brian rating</a><br>'


  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="https://my.senecacollege.ca/webapps/portal/frameset.jsp" target="_blank">EAC397: Blackboard </a><br>'
  , '<a href="https://senepr.senecacollege.ca/Empath65/HrLogin.aspx" target="_blank">Empath</a> <i></i><br>'


  , '<!--F-->'
  , '<hr><b>F</b><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=11374" target="_blank">Frey, Don rated</a><br>'

  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=33852" target="_blank">Heidenreich, Michal rating </a><br>'

  , '<!--I-->'
  , '<hr><b>I</b><br>'



  , '<a href="https://zenit.senecac.on.ca/~int222_122b36/index.html" target="_blank">INT222: Zenit</a> <br>' 
  , '<a href="http://zenit.senecac.on.ca/~int322_123a07/" target="_blank">INT322: zenit </a><br>'

  , '<a href="http://igor01.azurewebsites.net/" target="_blank">igor01 </a><i> Azure</i><br>'




  , '<!--J-->'
  , '<hr><b>J</b><br>'


  , '<!--K-->'
  , '<hr><b>K</b><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13040" target="_blank">Kaduri, Harvey`s rating</a><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=526261" target="_blank">Kawenka, John rating</a><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1607604" target="_blank">Korsantia, Olga rating</a><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'
  , '<a href="http://zenit.senecac.on.ca/wiki/index.php/BAC344_03_2012" target="_blank">Laurin, Cindy`s BAC344</a> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=12975" target="_blank">Laurin, Cindy`s rating</a><br>'





  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1523999" target="_blank">Messinger, Gal rating</a><br>'
  , '<a href="https://open.senecac.on.ca/cms/" target="_blank" ><b>Moodle</b></a> <br>'
  , '<a href="https://my.senecacollege.ca/webapps/portal/frameset.jsp" target="_blank"><img alt="My Seneca" height="20" src="img/myseneca.gif"></a> <br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<a href="https://scs.senecac.on.ca/~emile.ohan/int222/index.html" target="_blank">Ohan, Emile`s INT222</a> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=13920" target="_blank">Ohan, Emile rated</a><br>'


  , '<a href="https://cs.senecac.on.ca/~oop244/pages/practice/oldTests.html" target="_blank">OOP244: Old Tests</a> <br>'
  , '<a href="https://scs.senecac.on.ca/~oop244/" target="_blank">OOP244: Site </a> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=1144727" target="_blank">Oslopov, Petr rating</a><br>'

  , '<!--P-->'
  , '<hr><b>P</b><br>'
  , '<a href="https://scs.senecacollege.ca/~brian.perry/" target="_blank">Perry, Brian</a><i> at Seneca</i><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=32480" target="_blank">Perry, Brian`s rating</a><br>'


  , '<!--Q-->'
  , '<hr><b>Q</b><br>'


  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=165590" target="_blank">Richards, Peter rating</a><br>'


  , '<!--S-->'
  , '<hr><b>S</b><br>'
  , '<a href="http://www.senecacollege.ca/index.html" target="_blank"><img alt="Seneca College" height="15" src="img/seneca.png"></a><br>'

  , '<a href="https://scs.senecac.on.ca/ " target="_blank">Seneca , <abbr title="School of Computer Studies">SCS</abbr></a> <br>'
  , '<a href="https://inside.senecac.on.ca/clientservices " target="_blank">Seneca Client Services </a> <br>'





  , '<a href="https://inside.senecac.on.ca/transportation/campusbuses.html" target="_blank">Seneca Campus Bus Schedule </a> <br>'
  , '<a href="https://portal.microsoftonline.com/IWDefault.aspx" target="_blank">Seneca Email</a> <br>'
  , '<a href="http://seneca.experience.com/experience/login" target="_blank">Seneca Experience</a> <br>'

  , '<a href="https://scs.senecac.on.ca/staff-list" target="_blank">Seneca Staff List</a> <br>'
  , '<a href="https://net1.senecac.on.ca/login.pl?action=paint;source=10.255.137.89;destination=http%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dsenenet;r=s0QwcIi7276" target="_blank"> SeneNET </a> <br>'
  , '<a href="https://siris.senecac.on.ca/" target="_blank"><span class="blink"><mark><b>SIRIS</b></mark></span></a> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=52138" target="_blank">Surendra, Sam rating</a><br>'


  , '<a href="https://open.senecac.on.ca/cms/" target="_blank" >SYS366: Moodle </a> <br>'
  , '<a href="http://zenit.senecac.on.ca/~sys366_122b02/" target="_blank" >SYS366: Zenit</a> <br>' 


  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://rome.proximity.on.ca/ts/index.php" target="_blank">Time-sheet</a> <i></i><br>'
  , '<a href="http://warp.senecac.on.ca/ian.tipson/default.aspx" target="_blank">Tipson, Ian</a><i> at Seneca</i><br>'
  , '<a href="http://iantipson.com/" target="_blank">Tipson, Ian`s site</a> <br>'
  , '<a href="http://www.ratemyprofessors.com/ShowRatings.jsp?tid=12967" target="_blank">Tipson, Ian rating</a><i></i><br>'


  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'
  , '<a href="https://www2.senecacollege.ca/wabs/" target="_blank"> <b>WABS</b></span></a><i> Seneca</i><br>'
  , '<a href="https://cs.senecac.on.ca/~fac/win210/" target="_blank">WIN210 site </a> <br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'
  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>' 



  ];

  var arr = senecaArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};
//----------------------------------------------------------------------------

function tolkiniana(){
  document.getElementById("demo").innerHTML = tolkinianaFunc();

};
var tolkinianaFunc = function(){

  var tolkinianaArr = [
  '<mark>Tolkieniana</mark><br>'

  , '<hr><b>A</b><br>'
  , '<!--A-->'
  , '<a href="http://www.youtube.com/watch?v=Q6hJqI5BEW8" target="_blank">Aniron</a> <i> Enya</i><br>'
  , '<a href="http://www.glyphweb.com/arda/default.asp"  target="_blank">Arda </a> <br>'

  , '<!--B-->'
  , '<hr><b>B</b><br>'
  , '<a href="https://www.youtube.com/watch?v=suNT5m4_rYI" target="_blank">Battle for Middle Earth</a><i></i><br>'


  , '<a href="http://www.youtube.com/watch?v=qINwCRM8acM" target="_blank">Born Of Hope</a> <br>' 

  , '<!--C-->'
  , '<hr><b>C</b><br>'
  , '<a href="https://www.youtube.com/watch?v=HtoQWb0jMco" target="_blank">Children of Hurin</a><i> audio-book</i><br>' 




  , '<!--D-->'
  , '<hr><b>D</b><br>'


  , '<!--E-->'
  , '<hr><b>E</b><br>'
  , '<a href="http://www.starchamber.com/paracelsus/elvish/elvish-in-ten-minutes.html" target="_blank">Elvish ABC </a><i></i><br>'



  , '<!--F-->'
  , '<hr><b>F</b><br>'
  , '<a href="https://www.youtube.com/watch?v=krqmf5oBDXk" target="_blank">Facts behind Fiction</a><i> docum.</i><br>'

  , '<!--G-->'
  , '<hr><b>G</b><br>'

  , '<!--H-->'
  , '<hr><b>H</b><br>'
  , '<a href="http://www.jrrvf.com/hisweloke/sindar/online/sindarin.html" target="_blank">Hisweloke </a><i>Sindarin dictionary</i><br>'
  , '<a href="https://www.youtube.com/watch?v=A7jYQFTV7EM" target="_blank">Hobbit, The</a><i> audio-book</i><br>'
  , '<a href="http://www.youtube.com/watch?annotation_id=annotation_486943&feature=iv&src_vid=9H09xnhlCQU&v=VaakJk9vR7U" target="_blank">Hunt For Gollum, The</a><br>'

  , '<!--I-->'
  , '<hr><b>I</b><br>'

  , '<!--J-->'
  , '<hr><b>J</b><br>'

  , '<!--K-->'
  , '<hr><b>K</b><br>'

  , '<!--L-->'
  , '<hr><b>L</b><br>'

  , '<a href="https://www.youtube.com/watch?v=iNhCMReS_M4" target="_blank">Lewis & Tolkien</a><br>'
  , '<a href="https://www.youtube.com/watch?v=mfFQuhWaA_k" target="_blank">LOTR, The</a><i> simphony</i><br>'



  , '<!--M-->'
  , '<hr><b>M</b><br>'
  , '<a href="https://www.youtube.com/watch?v=orhnSy4wkqE&list=PL5760D4D3699A3871" target="_blank">Master of the M. Earth</a><i> Doc`ry</i> <br>'
  , '<a href="https://www.youtube.com/watch?v=Ew4bsGF0G8U" target="_blank">Middle Earth</a><i> Legacy</i> <br>'
  , '<a href="https://www.youtube.com/watch?v=UlT1mRYlXZg" target="_blank">Middle Earth</a><i> Origins</i> <br>'
  , '<a href="https://www.youtube.com/watch?v=27_OmRGPfZw" target="_blank">Monaghan Wood Interview</a><br>'
  , '<a href="https://www.youtube.com/watch?v=NzBT39gx-TE" target="_blank">Myths</a><i> Lewis & Tolkien</i> <br>'


  , '<!--N-->'
  , '<hr><b>N</b><br>'

  , '<!--O-->'
  , '<hr><b>O</b><br>'
  , '<!--P-->'
  , '<hr><b>P</b><br>'


  , '<!--Q-->'
  , '<hr><b>Q</b><br>'

  , '<a href="https://www.youtube.com/watch?v=G3gR0m2mCGs" target="_blank">Queen Gandalf </a> <br>'

  , '<!--R-->'
  , '<hr><b>R</b><br>'
  , '<a href="http://www.youtube.com/watch?v=zf3Kit2V0CI" target="_blank">Ranger </a> <br>'

  , '<!--S-->'
  , '<hr><b>S</b><br>'

  , '<a href="jezreel_porthope@yahoo.ca" target="_blank">Safety Sam</a><br>'
  , '<a href="https://www.youtube.com/watch?v=0J1JSLzja7E" target="_blank">Silmarillion</a> <i>C.Tolkien</i><br>'
  , '<a href="https://www.youtube.com/watch?v=HJLwB3zNY3Q" target="_blank">Silmarillion</a> <i>audio-book</i><br>'


  , '<!--T-->'
  , '<hr><b>T</b><br>'
  , '<a href="http://tolkiengateway.net/wiki/Main_Page" target="_blank">Tolkien Gateway</a><br>'


  , '<!--U-->'
  , '<hr><b>U</b><br>'

  , '<!--V-->'
  , '<hr><b>V</b><br>'

  , '<!--W-->'
  , '<hr><b>W</b><br>'
  , '<a href="https://www.youtube.com/watch?v=HYpjI8ht-K4" target="_blank">Wood Laughs</a><br>'

  , '<!--X-->'
  , '<hr><b>X</b><br>'
  , '<!--Y-->'
  , '<hr><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr><b>Z</b><br>'

  , '<a href="file:///D:/Personal/My Journal X/html/mj_index.html" target="_blank">777</a><br>'
  ];
  var arr = tolkinianaArr;
  var retval ="";
  retval += "<hr>";
  for (var i in arr)  {retval += arr[i];}
    retval += "<hr>";
  return retval;

};
//----------------------------------------------------------------------------



function unsorted(){
  document.getElementById("demo").innerHTML = unsortedFunc();

};
var unsortedFunc = function(){
  var unsortedObj = {

    "123Greetings":"http://www.123greetings.com/"
    , "15kop":"http://15kop.ru/"
    , "1812":"http://www.1812.gc.ca/eng/1305654894724/1305655293741"
    , "337 Queens York Rangers 1":"https://www.facebook.com/337Rangers"
    , "337 Queens York Rangers 2":"http://337rangerscadets.ca/"
    , "Academic Workspace":"https://aw.tdsb.on.ca/TdsbLogin.aspx"
    , "AccuWeather":"http://www.accuweather.com/en/ca/north-york/m2m/weather-forecast/49569"
    , "Acronym Creator":"http://acronymcreator.net/"
    , "Acronym Finder ":"http://www.acronymfinder.com/"
    , "AdlerKurort":"http://www.adlerkurortsochi.ru/"
    , "AImS":"https://www.google.ca/advanced_image_search?as_st=y&hl=en&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&biw=1366&bih=675&q=a&tbs=ic:trans,iar:s&tbm=isch"
    , "Alexeiev, Anton":"http://we.easyelectronics.ru/my/antonluba/"
    , "All Wheels Driver":"http://www.allwheelsdriver.ca/"
    , "AnswersInGenesis":"http://www.answersingenesis.org/"
    , "ASL Pro":"http://www.aslpro.com/"
    , "Audacity Sound Editor":"http://audacity.sourceforge.net/"
    , "AudioTreasure":"http://www.audiotreasure.com/"
    , "Average World Wages ":"http://www.bbc.co.uk/news/magazine-17543356"
    , "Azure Sign in":"https://login.live.com/login.srf?cbcxt=azu&vv=1100&lc=1033&wa=wsignin1.0&wtrealm=urn:federation:MicrosoftOnline&wctx=wa%3Dwsignin1.0%26rpsnv%3D2%26ct%3D1362585567%26rver%3D6.1.6206.0%26wp%3DSAPI_LONG%26wreply%3Dhttps:%252F%252Fmanage.windowsazure.com:443%252F%253Fhashseg%253DWorkspaces%252FWebsiteExtension%252FWebsite%252Figor01%252Fdashboard%26lc%3D1033%26id%3D500879%26cbcxt%3Dazu&wfresh=0"
    , "Behind The Name":"http://www.behindthename.com/"
    , "Benson Sound":"http://www.bensonsound.com/catalog/atoz.cfm"
    , "Bible Audio":"http://boglubittebja.ru/bible.php"
    , "bibledice":"http://www.bibledice.com/scripture.php"
    , "Biblos: Hebrew translit":"http://transliterated.interlinearbible.org/proverbs/1.htm"
    , "Blagovestvuy Narod ":"http://blagovestvui-narod.blogspot.ca/"
    , "Blogger":"http://www.blogger.com/home"
    , "Blue Letter Bible":"http://www.blueletterbible.org/index.cfm"
    , "Bodybuilding.com":"http://www.bodybuilding.com/"
    , "Calvary Chapel":"http://www.calvarychapel.com/"
    , "Canada Post":"http://www.canadapost.ca/cpo/mc/default.jsf"
    , "Canadian Tire":"http://www.canadiantire.ca/home.jsp?site=WebStore"
    , "Cantonese, Learn 1":"http://cantonese.ca/"
    , "Cantonese, Learn 2":"http://www.cantonese.sheik.co.uk/"
    , "Cantonese to Jyutping":"http://hktv.cc/hp/cantonesetojyutping/"
    , "Cardiac Arrest Help":"http://ahsc.arizona.edu/node/730"
    , "CBC ":"http://www.cbc.ca/"
    , "CBN news":"http://www.youtube.com/user/CBNnewsonline?feature=watch"
    , "CDOT":"http://zenit.senecac.on.ca/wiki/index.php/Main_Page"
    , "CBN.com":"http://www.cbn.com/"
    , "Chuck Norris Facts":"http://www.chucknorrisfacts.com/"
    , "CIC":"http://www.cic.gc.ca/english/"
    , "Collusion":"http://www.mozilla.org/en-US/collusion/"
    , "Conservapedia":"http://conservapedia.com/Main_Page"
    , "Coursera":"https://class.coursera.org/intrologic-003/class/index"
    , "CPYU ":"http://cpyu.org/Default.aspx"
    , "Creation.com":"http://creation.com/"
    , "Cronometer.com":"http://cronometer.com/"
    , "Cyrillic Decoder":"http://2cyr.com/decode/?lang=en"
    , "Dafont":"http://www.dafont.com/"
    , "David Ingles Min`s ":"http://diministries.org/"
    , "Day Spring ":"http://ecards.dayspring.com/ecards/"
    , "Domain.com ":"http://www.domain.com/"
    , "Do Not Track Me!":"http://storytellinginnovationlab2013.github.io/donottrack/demo.html"
    , "Don Valley JHS ":"http://schools.tdsb.on.ca/donvalleyjhs/"
    , "DV LOTTERY ":"https://www.dvlottery.state.gov/"
    , "Eastern Hemisphere":"http://polusharie.com/"
    , "Emelyanenko highlights":"http://www.youtube.com/watch?v=PCvWiBZusFE"
    , "Empire Life":"https://pmw.empire.ca/pmwweb/login.jsp"
    , "EEC":"http://media.dbw.cn/ntv/more/xlym/,P=0,ID=630OS6Y2V911V2Y0.shtml"
    , "Ephemeris":"http://ephemeris.alcuinus.net/"
    , "Experience.com":"http://www.experience.com/entry-level-jobs/"
    , "Facebook":"http://www.facebook.com/"
    , "Find a Driving School":"http://find-a-driving-school.ca/"
    , "Fonetiks.org":"http://fonetiks.org/"
    , "FoxNews":"http://www.foxnews.com/"
    , "Free Dictionary":"http://www.thefreedictionary.com/"
    , "Futureshop":"http://www.futureshop.ca/en-ca/home.aspx"
    , "Haier":"http://www.futureshop.ca/en-CA/category/haier/haier.aspx"
    , "GIF bin":"http://www.gifbin.com/"
    , "Gmail ":"http://mail.google.com/mail/u/0/?shva=1#inbox"
    , "Gmail Inbox ":"https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=http://mail.google.com/mail/&scc=1<mpl=default<mplcache=2"
    , "Google Docs ":"https://docs.google.com/?tab=mo&authuser=0#home"
    , "Google Translate":"http://translate.google.com/"
    , "Gorodok":"http://gorodok.tv/"
    , "Got Questions? ":"http://gotquestions.org/"
    , "Govorilka":"http://www.vector-ski.ru/vecs/govorilka/"
    , "GPA calculator":"http://gpacalculator.net/gpa-scale/3-1-gpa/"
    , "Gravatar.com":"http://en.gravatar.com/"
    , "Guitar Tuner" : "http://www.gieson.com/Library/projects/utilities/tuner/"
    , "Habrahabr":"http://habrahabr.ru/"
    , "Hebrew For Christians ":"http://www.hebrew4christians.com/index.html"
    , "Home Depot":"http://www.homedepot.ca/"
    , "Howjsay.com":"http://www.howjsay.com/"
    , "ICIA":"http://www.jimharper.org/icia.html"
    , "IPA in Unicode":"http://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm"
    , "IPAcharts with audio":"http://www.yorku.ca/earmstro/ipa/index.html"
    , "IPA transcriber":"http://project-modelino.com/english-phonetic-transcription-converter.php?"
    , "IPA converter 1":"http://theaccentlab.com/tools/phonemic-converter/"
    , "IPA converter 2":"http://www.photransedit.com/online/text2phonetics.aspx"
    , "Ikea":"http://www.ikea.com/ca/en/"
    , "IMDb ":"http://www.imdb.com/"
    , "Indigo Books & Music":"http://www.chapters.indigo.ca/home/"
    , "Jesus Is Lord ":"http://www.jesus-is-lord.com/"
    , "Job Interview Tips ":"https://www.youtube.com/watch?v=wllwJM6EyOI"
    , "Jokes from Russia":"http://www.anekdot.ru/"
    , "Kinopoisk":"http://www.kinopoisk.ru/"
    , "Kirkpatrick`s":"http://www.kpatricks.com/"
    , "Leo":"http://dict.leo.org/ende/index_en.html"
    , "Linked In":"http://www.linkedin.com/"
    , "Listverse":"http://listverse.com/"
    , "Living Well Family Church":"http://livingwellfc.org/"
    , "LDOCE":"http://www.ldoceonline.com/"
    , "LostFilm":"http://www.lostfilm.tv/"
    , "Lumosity":"https://www.lumosity.com/login"
    , "Maniac World":"http://www.maniacworld.com/"
    , "Math is fun":"http://www.mathsisfun.com/index.htm"
    , "Merriam-Webster 1":"http://www.merriam-webster.com/"
    , "Merriam-Webster 2":"http://www.learnersdictionary.com/"
    , "Movie25 ":"http://movie25.com/"
    , "Mozilla Press Center":"https://blog.mozilla.org/press/"
    , "Multitran":"http://www.multitran.ru/c/m.exe?a=1"
    , "MyAccount":"http://www.cra-arc.gc.ca/myaccount/"
    , "mx-mx":"http://mx-mx.com/lab/cizzle/#/curiosity"
    , "netflix":"http://movies.netflix.com/WiHome"
    , "Next Bus":"http://www.nextbus.com/predictor/stopSelector.jsp?a=ttc"
    , "Nurgitz, Richard":"http://brimleydental.com/dr_n.html"
    , "Odnoklassninki":"http://www.odnoklassniki.ru"
    , "Omniglot":"http://www.omniglot.com/writing/index.htm"
    , "Ontario":"http://www.ontario.ca/welcome-ontario"
    , "OpenDNS":"http://www.opendns.com/"
    , "Oracle.com":"http://www.oracle.com/index.html"
    , "Oper.ru":"http://oper.ru/"
    , "Oriole CC":"http://www.toronto.ca/parks/prd/facilities/complex/714/"
    , "Overstock":"http://www.overstock.com/"
    , "Papa Huhu":"http://www.papahuhu.com/"
    , "Paul Robertson ":"http://paulrobertson.ca/"
    , "PeanutPlaza":"http://www.peanutplaza.ca/"
    , "People`s Church":"http://www.thepeopleschurch.ca/default.asp"
    , "Picasa ":"https://picasaweb.google.com/home"
    , "Pink Cross ":"https://www.thepinkcross.org/"
    , "Popcorn Maker":"https://popcorn.webmaker.org/"
    , "porusski.net":"http://winrus.com/klava.htm"
    , "President`s Choice Financial":"http://www.pcfinancial.ca/"
    , "Propublica":"http://www.propublica.org/"
    , "PSG Names":"http://scriptsource.org/cms/scripts/page.php?item_id=entry_detail&uid=j5k8l4plf5"
    , "Frankie Tomatto`s":"http://frankietomatto.com/index.php"
    , "Mandarin":"http://www.mandarinrestaurant.com/"
    , "Swiss Chalet":"http://www.swisschalet.com/"
    , "Rate My Professors ":"http://www.ratemyprofessors.com/"
    , "RBC jobs ":"https://performancemanager4.successfactors.com/career?company=RBC"
    , "Reddit":"http://en.reddit.com/"
    , "Sears":"http://www.sears.ca/"
    , "Sears Financial":"https://online.chasecanada.ca/ChaseCanada_Consumer/Login.do"
    , "SGU":"http://en.sutr.ru/"
    , "Sheep Laughs, The":"http://www.sheeplaughs.com/"
    , "Simplish":"http://www.simplish.org/"
    , "Slashdot":"http://slashdot.org/"
    , "Snopes":"http://www.snopes.com/"
    , "Snorgtees":"http://www.snorgtees.com/"
    , "Soul Surfer":"http://soulsurfer.com/index.html"
    , "SouthMouth ":"http://usadeepsouth.ms11.net/southmouth.html"
    , "Speed Test":"http://www.speedtest.net/"
    , "Subzin ":"http://www.subzin.com/"
    , "Sun Life Financial":"https://www.sunnet.sunlife.com/signin/mysunlife/home.wca"
    , "SaaS":"http://www.supersaas.com/"
    , "Surrealisms":"http://www.ravenblack.net/random/surreal.html"
    , "Target":"http://www.target.ca/en/GO?ref=ca_tgt_adv_xs_GO_Mar2013"
    , "TB Bank":"http://www.tdcanadatrust.com/products-services/banking/index-banking.jsp?cm_sp=cBRAND003-087"
    , "TDSB choices":"http://www.tdsb.on.ca/_site/ViewChoices.asp?siteid=120&menuid=431&pageid=337"
    , "TechToTalk":"http://techtotalk.com/"
    , "TekSavvy ":"http://teksavvy.com/"
    , "TextFixer ":"http://www.textfixer.com/html/convert-word-to-html.php/"
    , "tfile.me":"http://tfile.me/"
    , "Thimble":"https://thimble.webmaker.org/en-US/"
    , "Tim Hortons":"http://www.timhortons.com/ca/en/index.html"
    , "Toronto Festivals and Events Calendar":"http://wx.toronto.ca/festevents.nsf/all?openform"
    , "Translate.ru":"http://www.translate.ru/"
    , "Translit.ru ":"http://www.translit.ru/"
    , "TTC":"http://www.ttc.ca/"
    , "Tumblr":"https://www.tumblr.com/"
    , "Twelve Chairs, The 1":"http://lib.ru/ILFPETROV/ilf_petrov_12_chairs_engl.txt"
    , "Twelve Chairs, The 2":"http://www.lib.ru/ILFPETROV/dwenadcatx.txt"
    , "Twitter ":"https://twitter.com"
    , "UPODN":"http://upodn.com/"
    , "Urban Dictionary ":"http://www.urbandictionary.com/"
    , "V Kontakte":"http://vk.com/feed"
    , "Vidiyo":"https://v.mozilla.com/flex.html?csrf_tkn=E549181F441C34A40A78F3EF3AF006D8"
    , "Walmart":"http://www.walmart.ca/en"
    , "War Amps":"http://www.waramps.ca/home.html"
    , "Webmaker":"https://webmaker.org/en-US/"
    , "Webmaker.MoFoStaging":"http://webmaker.mofostaging.net/"
    , "Webster 1828 ":"http://www.webster1828.com/"
    , "What`s my IP address ":"http://whatismyipaddress.com/"
    , "What`s New on Netflix":"http://can.whatsnewonnetflix.com/"
    , "What week is it?":"http://whatweekisit.com/"
    , "Wikipedia":"http://en.wikipedia.org/wiki/Main_Page"
    , "Wikipedia, La":"http://la.wikipedia.org/wiki/Pagina_prima"
    , "Wikipedia, Ru":"http://ru.wikipedia.org"
    , "Wiktionary":"http://en.wiktionary.org/wiki/Wiktionary:Main_Page"
    , "Wind":"https://shop.windmobile.ca/services/topup/topup.aspx"
    , "WordPress":"http://wordpress.com/"
    , "can wonderland":"https://www.canadaswonderland.com/"
    , "xxxchurch.com ":"http://www.xxxchurch.com/"
    , "Ya Plakal":"http://fotozhaba.yaplakal.com/"
    , "Youtube":"http://www.youtube.com/"
    , "Youtube/999CrypticAFV ":"http://www.youtube.com/user/crypticafv?feature=results_main"
    , "Yummy Market ":"http://www.yummymarket.com/"
    , "Z Movie TV ":"http://www1.zmovie.tv/"
    , "Zhong Wen":"http://www.zhongwen.com/"
    , "Jamaikanize":"http://www.jamaicanize.com/"
    , "Exercise finder":"http://www.bodybuilding.com/exercises/finder/lookup/filter/muscle/id/6/muscle/neck"
  };


  return printObj(unsortedObj);
};

//----------------------------------------------------------------------------

function video(){
  document.getElementById("demo").innerHTML = videoFunc();
};

var videoFunc = function(){

  var videoArr = [

  '<mark>Video</mark><br>'

  , '<hr ><b>A</b><br>'
  , '<!--A-->'
  , '<a href="https://www.youtube.com/watch?v=vZ3gxKCgtEU">Aloisius<a/><br>'




  , '<!--B-->'
  , '<hr ><b>B</b><br>'
  , '<a href="https://www.youtube.com/watch?v=LC1d_2lschs" target="_blank">Bubentsov before firing squad </a> <br>'
  , '<a href="https://www.youtube.com/watch?v=XVsIeZW3OFU" target="_blank">Bubentsov`s story </a> <br>'





  , '<!--C-->'
  , '<hr ><b>C</b><br>'
  , '<a href="https://www.youtube.com/watch?v=WSpiVm6BkeA" target="_blank">Castle & Beckett</a><br>'




  , '<!--D-->'
  , '<hr ><b>D</b><br>'

  , '<a href="xxx" target="_blank">xxx</a><i> xxx</i><br>'









  , '<!--E-->'
  , '<hr ><b>E</b><br>'
  , '<a href="http://www.youtube.com/watch?v=3eiIMZQWkdQ" target="_blank">Eltsin & Clinton</a><i> 1995-10-23 (cons. trns)</i><br>'

  , '<!--F-->'
  , '<hr ><b>F</b><br>'
  , '<a href="http://vimeo.com/58385453" target="_blank">Moon-rise</a> <i></i><br>'



  , '<!--G-->'
  , '<hr ><b>G</b><br>'
  , '<a href="http://www.youtube.com/watch?v=pnIbwWEH4UA" target="_blank">Gun Control</a><i> Puchkov</i><br>'

  , '<!--H-->'
  , '<hr ><b>H</b><br>'




  , '<!--I-->'
  , '<hr ><b>I</b><br>'
  , '<a href="https://www.youtube.com/watch?v=-o9-r26b--E" target="_blank">In the blue sea...</a><i> 1984</i> <br>'
  , '<a href="http://www.youtube.com/watch?v=au9Aqd_-2hc" target="_blank">Inside Saudi Kingdom</a><i> BBC film</i> <br>'
  , '<a href="http://www.youtube.com/watch?v=ua0anM-afY0" target="_blank">Is this your church</a><i> </i> <br>'
  , '<a href="https://www.youtube.com/watch?v=r8jP8UJFWso" target="_blank">It`s Possible!</a><i> Inspirational</i> <br>'






  , '<!--J-->'
  , '<hr ><b>J</b><br>'






  , '<!--K-->'
  , '<hr ><b>K</b><br>'

  , '<!--L-->'
  , '<hr ><b>L</b><br>'
  , '<a href="http://www.youtube.com/watch?v=PwxwqVDnUmc" target="_blank">Last Year`s Snow was falling</a><i> 1983</i><br>'


  , '<!--M-->'
  , '<hr ><b>M</b><br>'

  , '<a href="https://www.youtube.com/watch?v=Wgprb0KcYmw" target="_blank">猛龍過江</a><i> Maang Lung Gwo Gong </i> <br>'
  , '<a href="https://www.youtube.com/watch?v=Hyw8973Ql30" target="_blank">Magneto`s Revenge </a><i>X-Men First Class</i> <br>'

  , '<a href="https://www.youtube.com/watch?v=x3giQCbs7SA" target="_blank">Minkova Milena Latine </a><i></i> <br>'
  , '<a href="https://www.youtube.com/watch?v=eOfI88NKRzY&feature=endscreen&NR=1" target="_blank">Monty Python </a><i></i> <br>'




  , '<!--N-->'
  , '<hr ><b>N</b><br>'

  , '<!--O-->'
  , '<hr ><b>O</b><br>'
  , '<a href="http://www.youtube.com/watch?v=7Wl-OZ3breE" target="_blank">Our Father</a><i> Anglo-Saxon</i><br>'


  , '<!--P-->'
  , '<hr ><b>P</b><br>'
  , '<a href="http://www.youtube.com/watch?v=GpEx7pdp2-Q" target="_blank">Prometheus Explained</a> <i></i><br>'



  , '<!--Q-->'
  , '<hr ><b>Q</b><br>'


  , '<!--R-->'
  , '<hr ><b>R</b><br>'
  , '<a href="https://www.youtube.com/watch?v=yM_XkP6HMU4&list=PL1CE2A366DFCCCFB5" target="_blank">Russian guy speaking Latin<a/><br>'






  , '<!--S-->'
  , '<hr ><b>S</b><br>'
  , '<a href="http://www.youtube.com/watch?v=1r8zgU7wE8w" target="_blank">Saving Pr. Ryan</a> <i>Ending scene</i><br>'  

  , '<a href="https://www.youtube.com/watch?v=5-ZpP4j09s0" target="_blank">Seven Seconds to Sell Yourself</a><br>'  



  , '<!--T-->'
  , '<hr ><b>T</b><br>'

  , '<a href="https://www.youtube.com/watch?v=mi_6LIPEP7M" target="_blank">Terentius et Milena </a> <br>'
  , '<a href="https://www.youtube.com/watch?v=jdDlmb-lgXk" target="_blank">Three Killer Questions at Interview </a> <br>'



  , '<!--U-->'
  , '<hr ><b>U</b><br>'

  , '<!--V-->'
  , '<hr ><b>V</b><br>'

  , '<!--W-->'
  , '<hr ><b>W</b><br>'

  , '<!--X-->'
  , '<hr ><b>X</b><br>'

  , '<!--Y-->'
  , '<hr ><b>Y</b><br>'

  , '<!--Z-->'
  , '<hr ><b>Z</b><br>'  
  ];

  var arr = videoArr;
  var retval ="";
  retval += "<hr>";

  for (var i in arr)  {
    retval += arr[i];
  }
  retval += "<hr>";

  return retval;

}; // end of videoFunc()
//----------------------------------------------------------------------------
/*
var webdev = [
'<a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console" target="_blank">Web_Console</a> <i></i><br>'

];
*/







