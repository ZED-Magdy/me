__NUXT_JSONP__("/articles/design-patterns-php-abstract-factory", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_){return {data:[{doc:{slug:"design-patterns-php-abstract-factory",description:"Learn Abstract factory pattern in php",title:"Creational Design patterns [Abstract Factory]",img:"img\u002Fdesignpatterns.png",category:E,toc:[{id:ay,depth:ac,text:az},{id:aA,depth:ac,text:aB},{id:A,depth:ac,text:aC},{id:aD,depth:ac,text:aE}],body:{type:"root",children:[{type:b,tag:ad,props:{id:ay},children:[{type:b,tag:ae,props:{ariaHidden:af,href:"#purpose",tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:az}]},{type:a,value:h},{type:b,tag:aF,props:{},children:[{type:a,value:"To create series of related or dependent objects without specifying their concrete classes. Usually the created classes all implement the same interface. The client of the abstract factory does not care about how these objects are created, it just knows how they go together."}]},{type:a,value:h},{type:b,tag:ad,props:{id:aA},children:[{type:b,tag:ae,props:{ariaHidden:af,href:"#uml-diagram",tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:aB}]},{type:a,value:h},{type:b,tag:aF,props:{},children:[{type:b,tag:"img",props:{alt:"UML",src:"https:\u002F\u002Fdesignpatternsphp.readthedocs.io\u002Fen\u002Flatest\u002F_images\u002Fuml12.png"},children:[]}]},{type:a,value:h},{type:b,tag:ad,props:{id:A},children:[{type:b,tag:ae,props:{ariaHidden:af,href:"#code",tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:aC}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FWriterFactory.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m,C]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m,C]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FCsvWriter.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,C]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FJsonWriter.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,C]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FUnixCsvWriter.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,C]},children:[{type:a,value:O}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,O,aI]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:aK}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,O,aL]},children:[{type:a,value:"\"\\n\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FUnixJsonWriter.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:aM}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,C]},children:[{type:a,value:O}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aN]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FUnixWriterFactory.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m,C]},children:[{type:a,value:U}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m,C]},children:[{type:a,value:V}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FWinCsvWriter.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:aS}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:U}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,C]},children:[{type:a,value:O}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,O,aI]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:aK}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,O,aL]},children:[{type:a,value:"\"\\r\\n\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FWinJsonWriter.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:aT}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,Q]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g,C]},children:[{type:a,value:O}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n\n\n        "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"\u002F\u002FWinWriterFactory.php\n\n"},{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:av}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m,C]},children:[{type:a,value:U}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m,C]},children:[{type:a,value:V}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]},{type:a,value:h},{type:b,tag:ad,props:{id:aD},children:[{type:b,tag:ae,props:{ariaHidden:af,href:"#test",tabIndex:ag},children:[{type:b,tag:c,props:{className:[ah,ai]},children:[]}]},{type:a,value:aE}]},{type:a,value:h},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[s,I]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,E,s]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"declare"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"strict_types"},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,aN]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"Tests"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"PHPUnit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"Framework"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,N,m]},children:[{type:a,value:"AbstractFactoryTest"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"extends"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aU}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:"provideFactory"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aw}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,"doc-comment","comment"]},children:[{type:a,value:"\u002F**\n     * "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"@dataProvider"}]},{type:a,value:" provideFactory\n     *\n     * "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"@param"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:am}]},{type:a,value:"\n     *\u002F"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z,j]},children:[{type:a,value:"testCanCreateCsvWriterOnUnix"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,m,"type-declaration"]},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,aV]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aY]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aZ}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,aV]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aY]},children:[{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aZ}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h}]}]}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fdesign-patterns-php-abstract-factory",extension:".md",createdAt:a_,updatedAt:a_},prev:null,next:{slug:"design-patterns-php-builder",title:"Creational Design patterns [Builder]",path:"\u002Farticles\u002Fdesign-patterns-php-builder"}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","keyword","\n","\\","function",";","\n    ","class-name","(",")","\n\n","{","}","language-php","variable","package","DesignPatterns","Creational","AbstractFactory","public","function-definition","code",":","return-type","\n        ","php","div","nuxt-content-highlight","pre","line-numbers","delimiter","important","\u003C?php","namespace","class-name-definition","string",",","type-hint","class","return","operator","CsvWriter","JsonWriter","WriterFactory","write","array","implements","new","use","$line","$data",2,"h2","a","true",-1,"icon","icon-link","createCsvWriter","createJsonWriter","$formatted","$writerFactory","-\u003E","interface","bool","$options","=","\n            ","UnixWriterFactory","\n\n    ","WinWriterFactory","[","]","purpose","Purpose","uml-diagram","UML Diagram","Code","test","Test","p","UnixCsvWriter","join","single-quoted-string","','",".","double-quoted-string","UnixJsonWriter","number","\n\n        ","constant","JSON_PRETTY_PRINT","json_encode","WinCsvWriter","WinJsonWriter","TestCase","this","$this","assertInstanceOf","scope","::","2021-10-22T21:30:53.308Z")));