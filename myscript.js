 /*var menu_top = new Array(
         "<a href='index.html'>Main</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='dietetics.html'>Dietetics</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='funny.html'>Funny</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "a href='git.html'>Git</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='gregoriana.html'>Gregoriana</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='itstuff.html'>IT stuff</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='itterms.html'>IT terms</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='java.html'>Java</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='javascript.html'>JS</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='music.html'>Music</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='nodejs.html'>Node.js</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='p&w.html'>P&W</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='preach_teach.html'>Preach & Teach</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='seneca.html'>Seneca</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='selfdefence.html'>Self-defense</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='tolkiniana.html'>Tolkiniana</a>&nbsp;&nbsp;&nbsp;&nbsp;",
         "<a href='video.html'>Video</a>&nbsp;&nbsp;&nbsp;&nbsp;"
         );

     document.write("Hi");

     function printArray()
     {
         var menu="";
         for (var i = menu_top.length; i < 0; i++) {
             menu += menu_top[i];
                  document.write("Hi");

         }
        
    }

printArray();
    document.write(menu);
    //printArray(menu_top);
    */

    var pinks = [
    'a', "b", "c"

    ]

    var links = [ 
    "<a href='index.html'>Main</a>"
    ,"<a href='dietetics.html'>Dietetics</a>"
    ,"<a href='funny.html'>Funny</a>"
    ,"<a href='git.html'>Git</a>"
    ,"<a href='gregoriana.html'>Gregoriana</a>"
    ,"<a href='html5.html'>HTML5</a>"
    ,"<a href='itstuff.html'>IT stuff</a>"
    ,"<a href='itterms.html'>IT terms</a>"
    ,"<a href='java.html'>Java</a>"
    ,"<a href='javascript.html'>JS</a>"
    ,"<a href='l10n.html'>L10N</a>"
    ,"<a href='music.html'>Music</a>"
    ,"<a href='nodejs.html'>Node.js</a>"
    ,"<a href='p&w.html'>P&W</a>"
    ,"<a href='preach_teach.html'>Preach & Teach</a>"
    ,"<a href='seneca.html'>Seneca</a>"
    ,"<a href='selfdefense.html'>Self-defense</a>"
    ,"<a href='tolkiniana.html'>Tolkiniana</a>"
    ,"<a href='video.html'>Video</a>"
    ];

    var arr = links;

if (arr == links){

    for (var i in arr) {
        document.write(arr[i] + "<br>"); 
    };
} else{
    document.write("blah");
}


