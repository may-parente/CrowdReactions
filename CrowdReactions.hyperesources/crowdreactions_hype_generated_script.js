//	HYPE.documents["CrowdReactions"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="CrowdReactions.hyperesources",f="CrowdReactions",g="crowdreactions_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/crowdreactions_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_736F||null!=window.HYPE_dtl_736F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-736.full.min.js":"HYPE-736.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_736"+c,"HYPE_dtl_736"+c,a,d),false==!0&&(a=a||k("HYPE_w_736","HYPE_wdtl_736","HYPE-736.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_736","HYPE-736.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\nvar iframeElement = hypeDocument.getElementById(\"ApplauseWidget1\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\n\t\n\tvar iframeElement = hypeDocument.getElementById(\"ApplauseWidget2\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\n\n}",identifier:"1308"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\nvar iframeElement = hypeDocument.getElementById(\"LaughterWidget1\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\n\t\n\tvar iframeElement = hypeDocument.getElementById(\"LaughterWidget2\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\t\n\t\n}",identifier:"1309"},{name:"untitledFunction3",source:"function(hypeDocument, element, event) {\nvar iframeElement = hypeDocument.getElementById(\"WowWidget1\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\n\t\n\tvar iframeElement = hypeDocument.getElementById(\"WowWidget2\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\t\t\n\t\n}",identifier:"1310"},{name:"untitledFunction4",source:"function(hypeDocument, element, event) {\t\nvar iframeElement = hypeDocument.getElementById(\"LoveWidget1\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\n\t\n\tvar iframeElement = hypeDocument.getElementById(\"LoveWidget2\").getElementsByTagName(\"iframe\")[0];\n\tiframeElement.src = iframeElement.src;\t\n\t\t\n}",identifier:"1311"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_736"+c](f,g,{"3":{p:1,n:"Collaboration%20widget_2x.png",g:"493",t:"@2x"},"12":{p:1,n:"Right%20Navigation_2x.png",g:"504",t:"@2x"},"21":{p:1,n:"logo-reinvent_2x.png",g:"784",o:true,t:"@2x"},"4":{p:1,n:"Controls%20left_2x.png",g:"494",t:"@2x"},"30":{p:1,n:"love_ic.png",g:"1012",o:true,t:"@1x"},"13":{p:1,n:"Wow-1.svg",g:"505",t:"image/svg+xml"},"5":{p:1,n:"Controls%20right_2x.png",g:"495",t:"@2x"},"22":{p:1,n:"ic_menu.png",g:"786",t:"@1x"},"6":{p:1,n:"Laugh-1.svg",g:"498",t:"image/svg+xml"},"31":{p:1,n:"love_ic_2x.png",g:"1012",o:true,t:"@2x"},"14":{p:1,n:"Entry%20details_2x.png",g:"527",t:"@2x"},"7":{p:1,n:"Left%20Navigation_2x.png",g:"499",t:"@2x"},"23":{n:"AWS%20reInvent%202019%20-%20Keynote%20with%20Andy%20Jassy%20-%20Reactions.mp4",g:"825",t:"video/mp4"},"32":{p:1,n:"curious.png",g:"1154",o:true,t:"@1x"},"15":{p:1,n:"Laugh-1-1.svg",g:"687",t:"image/svg+xml"},"8":{p:1,n:"love-1.svg",g:"500",t:"image/svg+xml"},"24":{p:1,n:"applause_ic.png",g:"1006",o:true,t:"@1x"},"9":{p:1,n:"Notification_2x.png",g:"501",t:"@2x"},"33":{p:1,n:"curious_2x.png",g:"1154",o:true,t:"@2x"},"16":{p:1,n:"keynote_content.png",g:"780",o:true,t:"@1x"},"25":{p:1,n:"applause_ic_2x.png",g:"1006",o:true,t:"@2x"},"34":{p:1,n:"aws_ic.png",g:"1164",o:true,t:"@1x"},"17":{p:1,n:"keynote_content_2x.png",g:"780",o:true,t:"@2x"},"26":{p:1,n:"laugh.png",g:"1008",o:true,t:"@1x"},"35":{p:1,n:"aws_ic_2x.png",g:"1164",o:true,t:"@2x"},"18":{p:1,n:"right_menu.png",g:"782",o:true,t:"@1x"},"27":{p:1,n:"laugh_2x.png",g:"1008",o:true,t:"@2x"},"36":{p:1,n:"Widgets_2x.png",g:"1172",t:"@2x"},"19":{p:1,n:"right_menu_2x.png",g:"782",o:true,t:"@2x"},"28":{p:1,n:"wow_ic.png",g:"1010",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"29":{p:1,n:"wow_ic_2x.png",g:"1010",o:true,t:"@2x"},"-2":{n:"blank.gif"},"10":{p:1,n:"Notifications%20widget_2x.png",g:"502",t:"@2x"},"0":{p:1,n:"Applause-1.svg",g:"490",t:"image/svg+xml"},"1":{p:1,n:"blank.gif",g:"491",t:"@1x"},"11":{p:1,n:"Protection_2x.png",g:"503",t:"@2x"},"2":{p:1,n:"Collaboration%20button_2x.png",g:"492",t:"@2x"},"20":{p:1,n:"logo-reinvent.png",g:"784",o:true,t:"@1x"}},l,[],e,[{n:"Untitled Scene Copy",o:"1232",X:[0]}],
[{o:"1272",p:"600px",cA:false,a:100,Z:900,Y:1440,c:"#000",L:[],bY:1,d:1440,U:{"1400":{V:{"Main Timeline":"1437"},W:"1437",n:"Audience Applause"},"1314":{V:{"Main Timeline":"1415"},W:"1415",n:"croudApplause"},"1371":{V:{"Main Timeline":"1429"},W:"1429",n:"Laugh"},"1360":{V:{"Main Timeline":"1426"},W:"1426",n:"Love"},"1403":{V:{"Main Timeline":"1438"},W:"1438",n:"Audience Wow"},"1365":{V:{"Main Timeline":"1427"},W:"1427",n:"Applause"},"1391":{V:{"Main Timeline":"1434"},W:"1434",n:"Audience Wow"},"1380":{V:{"Main Timeline":"1431"},W:"1431",n:"croudLove"},"1317":{V:{"Hover Wow":"1419","Main Timeline":"1416","Hover Love":"1417","Hover Curious":"1418","Launch Applause":"1421","Hover Laugh":"1420","Hover Aws":"1422"},W:"1416",n:"Reaction Bar"},"1385":{V:{"Main Timeline":"1432"},W:"1432",n:"Audience Wow"},"1374":{V:{"Main Timeline":"1430"},W:"1430",n:"AWS"},"1412":{V:{"Main Timeline":"1441"},W:"1441",n:"Audience Love"},"1406":{V:{"Main Timeline":"1439"},W:"1439",n:"Audience Wow"},"1368":{V:{"Main Timeline":"1428"},W:"1428",n:"Wow"},"1394":{V:{"Main Timeline":"1435"},W:"1435",n:"Audience Love"},"1357":{V:{"Main Timeline":"1425"},W:"1425",n:"Curious"},"1388":{V:{"Main Timeline":"1433"},W:"1433",n:"Audience Applause"},"1409":{V:{"Main Timeline":"1440"},W:"1440",n:"Audience Wow"},"1397":{V:{"Main Timeline":"1436"},W:"1436",n:"Audience Applause"},"1353":{V:{"Main Timeline":"1424"},W:"1424",n:"coudWow"},"1342":{V:{"Main Timeline":"1423"},W:"1423",n:"crowd laughter"}},T:{"1431":{c:"1380",q:false,z:0,i:"1431",a:[],n:"Main Timeline",f:30,b:[]},"1271":{q:false,z:1,i:"1271",n:"Laughter",a:[{f:"c",y:0,z:1,i:"cY",e:"0",r:true,s:"1",o:"1342"},{y:1,i:"cY",s:"0",z:0,o:"1342",f:"c"}],f:30,b:[]},"1295":{q:false,z:1,i:"1295",n:"Love",a:[{f:"c",y:0,z:1,i:"cY",e:"0",s:"1",o:"1380"},{y:1,i:"cY",s:"0",z:0,o:"1380",f:"c"}],f:30,b:[]},"1299_hover":{q:false,z:1,i:"1299_hover",n:"1299_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#DDD",s:"#F0F0F0",o:"1313"},{y:1,i:"g",s:"#DDD",z:0,o:"1313",f:"c"}],f:30,b:[]},"1416":{c:"1317",q:false,z:0.14,i:"1416",a:[{f:"x",y:0,z:0.09,i:"b",e:-24,s:92,o:"1321"},{f:"x",y:0.01,z:0.09,i:"b",e:-26,s:90,o:"1324"},{f:"x",y:0.02,z:0.09,i:"b",e:-23,s:93,o:"1333"},{f:"e",y:0.03,z:0.11,i:"b",e:-24,s:92,o:"1330"},{f:"x",y:0.04,z:0.09,i:"b",e:-24,s:92,o:"1318"},{f:"x",y:0.05,z:0.09,i:"b",e:-23,s:92,o:"1327"},{y:0.09,i:"b",s:-24,z:0,o:"1321",f:"c"},{y:0.1,i:"b",s:-26,z:0,o:"1324",f:"c"},{y:0.11,i:"b",s:-23,z:0,o:"1333",f:"c"},{y:0.13,i:"b",s:-24,z:0,o:"1318",f:"c"},{y:0.14,i:"b",s:-24,z:0,o:"1330",f:"c"},{y:0.14,i:"b",s:-23,z:0,o:"1327",f:"c"}],n:"Main Timeline",f:30,b:[]},"1428":{j:{"6":[[1112,789,1112,789,1119,501,1119,501]],"7":[[1119,501,1119,501,1119,-157,1119,-157]]},c:"1368",q:false,z:4,i:"1428",a:[{f:"x",y:0,z:0.21,i:"cR",e:1,s:0,o:"1369"},{f:"x",y:0,z:0.21,i:"cQ",e:1,s:0,o:"1369"},{o:"1369",y:0,z:0.21,i:"b",e:435,a:"6",f:"x",s:723},{o:"1369",y:0,z:0.21,i:"a",e:1053.5,a:"6",f:"x",s:1046.5},{o:"1369",y:0.21,z:3.09,i:"b",e:-223,a:"7",f:"j",s:435},{o:"1369",y:0.21,z:3.09,i:"a",e:1053.5,a:"7",f:"j",s:1053.5},{y:0.21,i:"cR",s:1,z:0,o:"1369",f:"c"},{y:0.21,i:"cQ",s:1,z:0,o:"1369",f:"c"},{y:4,i:"b",s:-223,z:0,o:"1369",f:"c"},{y:4,i:"a",s:1053.5,z:0,o:"1369",f:"c"}],n:"Main Timeline",f:30,b:[]},"1424":{c:"1353",q:false,z:0,i:"1424",a:[],n:"Main Timeline",f:30,b:[]},"1436":{c:"1397",q:false,z:2,i:"1436",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1398"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1398"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1398"},{f:"c",y:0.09,z:0.21,i:"e",e:1,s:1,o:"1398"},{y:0.09,i:"cR",s:1,z:0,o:"1398",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1398",f:"c"},{f:"c",y:1,z:1,i:"e",e:0,s:1,o:"1398"},{y:2,i:"e",s:0,z:0,o:"1398",f:"c"}],n:"Main Timeline",f:30,b:[]},"1420":{c:"1317",q:false,z:0.09,i:"1420",a:[{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"1331"},{f:"c",y:0,z:0.09,i:"cQ",e:1.3,s:1,o:"1330"},{f:"c",y:0,z:0.09,i:"cR",e:1.3,s:1,o:"1330"},{f:"w",y:0,z:0.09,i:"b",e:-34,s:-23,o:"1330"},{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"1332"},{y:0.02,i:"e",s:0,z:0,o:"1331",f:"c"},{y:0.03,i:"e",s:1,z:0,o:"1332",f:"c"},{y:0.09,i:"cQ",s:1.3,z:0,o:"1330",f:"c"},{y:0.09,i:"b",s:-34,z:0,o:"1330",f:"c"},{y:0.09,i:"cR",s:1.3,z:0,o:"1330",f:"c"}],n:"Hover Laugh",f:30,b:[]},"1432":{c:"1385",q:false,z:2.15,i:"1432",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1386"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1386"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1386"},{f:"c",y:0.09,z:2.06,i:"b",e:-58,s:0,o:"1386"},{y:0.09,i:"cR",s:1,z:0,o:"1386",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1386",f:"c"},{f:"c",y:0.09,z:1.27,i:"e",e:1,s:1,o:"1386"},{f:"c",y:2.06,z:0.09,i:"e",e:0,s:1,o:"1386"},{y:2.15,i:"b",s:-58,z:0,o:"1386",f:"c"},{y:2.15,i:"e",s:0,z:0,o:"1386",f:"c"}],n:"Main Timeline",f:30,b:[]},"1440":{c:"1409",q:false,z:2.15,i:"1440",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1410"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1410"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1410"},{f:"c",y:0.09,z:2.06,i:"b",e:-58,s:0,o:"1410"},{y:0.09,i:"cR",s:1,z:0,o:"1410",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1410",f:"c"},{f:"c",y:0.09,z:1.27,i:"e",e:1,s:1,o:"1410"},{f:"c",y:2.06,z:0.09,i:"e",e:0,s:1,o:"1410"},{y:2.15,i:"b",s:-58,z:0,o:"1410",f:"c"},{y:2.15,i:"e",s:0,z:0,o:"1410",f:"c"}],n:"Main Timeline",f:30,b:[]},"1292":{q:false,z:1,i:"1292",n:"Applause",a:[{f:"c",y:0,z:1,i:"cY",e:"0",s:"1",o:"1314"},{y:1,i:"cY",s:"0",z:0,o:"1314",f:"c"}],f:30,b:[]},"1417":{c:"1317",q:false,z:0.09,i:"1417",a:[{f:"w",y:0,z:0.09,i:"b",e:-37,s:-24,o:"1321"},{f:"c",y:0,z:0.09,i:"cR",e:1.3,s:1,o:"1321"},{f:"c",y:0,z:0.09,i:"cQ",e:1.3,s:1,o:"1321"},{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"1322"},{y:0.02,i:"e",s:0,z:0,o:"1322",f:"c"},{y:0.09,i:"b",s:-37,z:0,o:"1321",f:"c"},{y:0.09,i:"cR",s:1.3,z:0,o:"1321",f:"c"},{y:0.09,i:"cQ",s:1.3,z:0,o:"1321",f:"c"}],n:"Hover Love",f:30,b:[]},"1429":{c:"1371",q:false,z:1.15,i:"1429",a:[{f:"c",y:0,z:0.25,i:"f",e:-56,s:360,o:"1372"},{f:"c",y:0,z:0.25,i:"a",e:1079,s:1495,o:"1372"},{f:"c",y:0.25,z:0.1,i:"f",e:0,s:-56,o:"1372"},{f:"c",y:0.25,z:0.1,i:"a",e:1111,s:1079,o:"1372"},{y:1.05,i:"a",s:1111,z:0,o:"1372",f:"c"},{y:1.05,i:"f",s:0,z:0,o:"1372",f:"c"},{f:"c",p:2,y:1.15,z:0,i:"ActionHandler",s:{a:[{b:"1429",p:8,z:true,symbolOid:"813",J:false}]},o:"1429"}],n:"Main Timeline",f:30,b:[]},"1425":{j:{"0":[[1112,789,1112,789,1119,501,1119,501]],"1":[[1119,501,1119,501,1119,-157,1119,-157]]},c:"1357",q:false,z:4,i:"1425",a:[{f:"x",y:0,z:0.21,i:"cQ",e:1,s:0,o:"1358"},{f:"x",y:0,z:0.21,i:"cR",e:1,s:0,o:"1358"},{o:"1358",y:0,z:0.21,i:"b",e:434,a:"0",f:"x",s:722},{o:"1358",y:0,z:0.21,i:"a",e:1051.5,a:"0",f:"x",s:1044.5},{y:0.21,i:"cQ",s:1,z:0,o:"1358",f:"c"},{y:0.21,i:"cR",s:1,z:0,o:"1358",f:"c"},{o:"1358",y:0.21,z:3.09,i:"a",e:1051.5,a:"1",f:"j",s:1051.5},{o:"1358",y:0.21,z:3.09,i:"b",e:-224,a:"1",f:"j",s:434},{y:4,i:"a",s:1051.5,z:0,o:"1358",f:"c"},{y:4,i:"b",s:-224,z:0,o:"1358",f:"c"}],n:"Main Timeline",f:30,b:[]},"1293_hover":{q:false,z:1,i:"1293_hover",n:"1293_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#DDD",s:"#F0F0F0",o:"1377"},{y:1,i:"g",s:"#DDD",z:0,o:"1377",f:"c"}],f:30,b:[]},"1437":{c:"1400",q:false,z:2,i:"1437",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1401"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1401"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1401"},{f:"c",y:0.09,z:0.21,i:"e",e:1,s:1,o:"1401"},{y:0.09,i:"cR",s:1,z:0,o:"1401",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1401",f:"c"},{f:"c",y:1,z:1,i:"e",e:0,s:1,o:"1401"},{y:2,i:"e",s:0,z:0,o:"1401",f:"c"}],n:"Main Timeline",f:30,b:[]},"1421":{c:"1317",q:false,z:0.09,i:"1421",a:[{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"1319"},{f:"c",y:0,z:0.09,i:"cQ",e:1.3,s:1,o:"1318"},{f:"c",y:0,z:0.09,i:"cR",e:1.3,s:1,o:"1318"},{f:"w",y:0,z:0.09,i:"b",e:-34,s:-24,o:"1318"},{y:0.02,i:"e",s:0,z:0,o:"1319",f:"c"},{y:0.09,i:"cQ",s:1.3,z:0,o:"1318",f:"c"},{y:0.09,i:"b",s:-34,z:0,o:"1318",f:"c"},{y:0.09,i:"cR",s:1.3,z:0,o:"1318",f:"c"}],n:"Launch Applause",f:30,b:[]},"1433":{c:"1388",q:false,z:2,i:"1433",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1389"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1389"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1389"},{f:"c",y:0.09,z:0.21,i:"e",e:1,s:1,o:"1389"},{y:0.09,i:"cR",s:1,z:0,o:"1389",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1389",f:"c"},{f:"c",y:1,z:1,i:"e",e:0,s:1,o:"1389"},{y:2,i:"e",s:0,z:0,o:"1389",f:"c"}],n:"Main Timeline",f:30,b:[]},"1294_hover":{q:false,z:1,i:"1294_hover",n:"1294_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#DDD",s:"#F0F0F0",o:"1383"},{y:1,i:"g",s:"#DDD",z:0,o:"1383",f:"c"}],f:30,b:[]},"1441":{c:"1412",q:false,z:2,i:"1441",a:[{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1413"},{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1413"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1413"},{y:0.09,i:"cR",s:1,z:0,o:"1413",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1413",f:"c"},{f:"c",y:0.09,z:0.21,i:"e",e:1,s:1,o:"1413"},{f:"c",y:1,z:1,i:"e",e:0,s:1,o:"1413"},{y:2,i:"e",s:0,z:0,o:"1413",f:"c"}],n:"Main Timeline",f:30,b:[]},"1300":{q:false,z:1,i:"1300",n:"Wow",a:[{f:"c",y:0,z:1,i:"cY",e:"0",s:"1",o:"1353"},{y:1,i:"cY",s:"0",z:0,o:"1353",f:"c"}],f:30,b:[]},"1418":{c:"1317",q:false,z:0.09,i:"1418",a:[{f:"c",y:0,z:0.09,i:"cQ",e:1.3,s:1,o:"1324"},{f:"w",y:0,z:0.09,i:"b",e:-34,s:-26,o:"1324"},{f:"c",y:0,z:0.09,i:"cR",e:1.3,s:1,o:"1324"},{f:"c",y:0,z:0.03,i:"e",e:0,s:1,o:"1326"},{f:"c",y:0,z:0.03,i:"e",e:1,s:0,o:"1325"},{y:0.03,i:"e",s:0,z:0,o:"1326",f:"c"},{y:0.03,i:"e",s:1,z:0,o:"1325",f:"c"},{y:0.09,i:"cR",s:1.3,z:0,o:"1324",f:"c"},{y:0.09,i:"cQ",s:1.3,z:0,o:"1324",f:"c"},{y:0.09,i:"b",s:-34,z:0,o:"1324",f:"c"}],n:"Hover Curious",f:30,b:[]},"1426":{j:{"2":[[1112,789,1112,789,1119,501,1119,501]],"3":[[1119,501,1119,501,1119,-157,1119,-157]]},c:"1360",q:false,z:4,i:"1426",a:[{o:"1361",y:0,z:0.21,i:"a",e:1049,a:"2",f:"x",s:1042},{f:"x",y:0,z:0.21,i:"cR",e:1,s:0,o:"1361"},{f:"x",y:0,z:0.21,i:"cQ",e:1,s:0,o:"1361"},{o:"1361",y:0,z:0.21,i:"b",e:431,a:"2",f:"x",s:719},{f:"c",y:0.21,z:0.04,i:"e",e:0,s:1,o:"1364"},{f:"1055",y:0.21,z:0.12,i:"cR",e:1,s:0,o:"1362"},{f:"1055",y:0.21,z:0.12,i:"cQ",e:1,s:0,o:"1362"},{o:"1361",y:0.21,z:3.09,i:"a",e:1049,a:"3",f:"j",s:1049},{o:"1361",y:0.21,z:3.09,i:"b",e:-227,a:"3",f:"j",s:431},{y:0.21,i:"cQ",s:1,z:0,o:"1361",f:"c"},{y:0.21,i:"cR",s:1,z:0,o:"1361",f:"c"},{y:0.25,i:"e",s:0,z:0,o:"1364",f:"c"},{y:1.03,i:"cQ",s:1,z:0,o:"1362",f:"c"},{y:1.03,i:"cR",s:1,z:0,o:"1362",f:"c"},{y:4,i:"a",s:1049,z:0,o:"1361",f:"c"},{y:4,i:"b",s:-227,z:0,o:"1361",f:"c"}],n:"Main Timeline",f:30,b:[]},"1438":{c:"1403",q:false,z:2.15,i:"1438",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1404"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1404"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1404"},{f:"c",y:0.09,z:2.06,i:"b",e:-58,s:0,o:"1404"},{y:0.09,i:"cR",s:1,z:0,o:"1404",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1404",f:"c"},{f:"c",y:0.09,z:1.27,i:"e",e:1,s:1,o:"1404"},{f:"c",y:2.06,z:0.09,i:"e",e:0,s:1,o:"1404"},{y:2.15,i:"b",s:-58,z:0,o:"1404",f:"c"},{y:2.15,i:"e",s:0,z:0,o:"1404",f:"c"}],n:"Main Timeline",f:30,b:[]},"1422":{c:"1317",q:false,z:0.09,i:"1422",a:[{f:"c",y:0,z:0.09,i:"cQ",e:1.3,s:1,o:"1327"},{f:"w",y:0,z:0.09,i:"b",e:-33,s:-24,o:"1327"},{f:"c",y:0,z:0.09,i:"cR",e:1.3,s:1,o:"1327"},{f:"c",y:0,z:0.03,i:"e",e:0,s:1,o:"1329"},{f:"c",y:0,z:0.01,i:"e",e:1,s:0,o:"1328"},{y:0.01,i:"e",s:1,z:0,o:"1328",f:"c"},{y:0.03,i:"e",s:0,z:0,o:"1329",f:"c"},{y:0.09,i:"cQ",s:1.3,z:0,o:"1327",f:"c"},{y:0.09,i:"cR",s:1.3,z:0,o:"1327",f:"c"},{y:0.09,i:"b",s:-33,z:0,o:"1327",f:"c"}],n:"Hover Aws",f:30,b:[]},"1434":{c:"1391",q:false,z:2.15,i:"1434",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1392"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1392"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1392"},{f:"c",y:0.09,z:2.06,i:"b",e:-58,s:0,o:"1392"},{y:0.09,i:"cR",s:1,z:0,o:"1392",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1392",f:"c"},{f:"c",y:0.09,z:1.27,i:"e",e:1,s:1,o:"1392"},{f:"c",y:2.06,z:0.09,i:"e",e:0,s:1,o:"1392"},{y:2.15,i:"b",s:-58,z:0,o:"1392",f:"c"},{y:2.15,i:"e",s:0,z:0,o:"1392",f:"c"}],n:"Main Timeline",f:30,b:[]},"1430":{j:{"8":[[1112,789,1112,789,1119,501,1119,501]],"9":[[1119,501,1119,501,1119,-157,1119,-157]]},c:"1374",q:false,z:4,i:"1430",a:[{f:"x",y:0,z:0.21,i:"cQ",e:1,s:0,o:"1375"},{f:"x",y:0,z:0.21,i:"cR",e:1,s:0,o:"1375"},{o:"1375",y:0,z:0.21,i:"b",e:434,a:"8",f:"x",s:722},{o:"1375",y:0,z:0.21,i:"a",e:1051.5,a:"8",f:"x",s:1044.5},{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"1376"},{y:0.01,i:"cY",s:"0",z:0,o:"1376",f:"c"},{y:0.21,i:"cQ",s:1,z:0,o:"1375",f:"c"},{y:0.21,i:"cR",s:1,z:0,o:"1375",f:"c"},{o:"1375",y:0.21,z:3.09,i:"a",e:1051.5,a:"9",f:"j",s:1051.5},{o:"1375",y:0.21,z:3.09,i:"b",e:-224,a:"9",f:"j",s:434},{y:4,i:"a",s:1051.5,z:0,o:"1375",f:"c"},{y:4,i:"b",s:-224,z:0,o:"1375",f:"c"}],n:"Main Timeline",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:25.04,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,p:1,i:"Video Track",z:25.04,o:"1352",f:"c"}],f:30,b:[{D:2,H:true,E:true,z:false,F:0,G:0,C:0,b:"1433"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"1415"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"1431"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"1424"},{D:2,H:true,E:true,z:false,F:0,G:0,C:0,b:"1435"},{D:0.14,H:true,E:true,z:false,F:0,G:0,C:2,b:"1416"},{D:2.15,H:true,E:true,z:false,F:0,G:0,C:3.16,b:"1439"},{D:2,H:true,E:true,z:false,F:0,G:0,C:4,b:"1441"},{D:2.15,H:true,E:true,z:false,F:0,G:0,C:7,b:"1440"},{D:2.15,H:true,E:true,z:false,F:0,G:0,C:8.25,b:"1438"},{D:2.15,H:true,E:true,z:false,F:0,G:0,C:12,b:"1432"},{D:2,H:true,E:true,z:false,F:0,G:0,C:13.07,b:"1436"},{D:2,H:true,E:true,z:false,F:0,G:0,C:16.11,b:"1437"},{D:2.15,H:true,E:true,z:false,F:0,G:0,C:17.15,b:"1434"}]},"1419":{c:"1317",q:false,z:0.09,i:"1419",a:[{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"1334"},{f:"c",y:0,z:0.09,i:"cQ",e:1.3,s:1,o:"1333"},{f:"c",y:0,z:0.09,i:"cR",e:1.3,s:1,o:"1333"},{f:"w",y:0,z:0.09,i:"b",e:-33,s:-23,o:"1333"},{y:0.02,i:"e",s:0,z:0,o:"1334",f:"c"},{y:0.09,i:"cQ",s:1.3,z:0,o:"1333",f:"c"},{y:0.09,i:"b",s:-33,z:0,o:"1333",f:"c"},{y:0.09,i:"cR",s:1.3,z:0,o:"1333",f:"c"}],n:"Hover Wow",f:30,b:[]},"1415":{c:"1314",q:false,z:0,i:"1415",a:[],n:"Main Timeline",f:30,b:[]},"1427":{j:{"4":[[1112,789,1112,789,1119,501,1119,501]],"5":[[1119,501,1119,501,1119,-157,1119,-157]]},c:"1365",q:false,z:4,i:"1427",a:[{f:"x",y:0,z:0.21,i:"cQ",e:1,s:0,o:"1366"},{f:"x",y:0,z:0.21,i:"cR",e:1,s:0,o:"1366"},{o:"1366",y:0,z:0.21,i:"b",e:434,a:"4",f:"x",s:722},{o:"1366",y:0,z:0.21,i:"a",e:1051.5,a:"4",f:"x",s:1044.5},{y:0.21,i:"cQ",s:1,z:0,o:"1366",f:"c"},{y:0.21,i:"cR",s:1,z:0,o:"1366",f:"c"},{o:"1366",y:0.21,z:3.09,i:"a",e:1051.5,a:"5",f:"j",s:1051.5},{o:"1366",y:0.21,z:3.09,i:"b",e:-224,a:"5",f:"j",s:434},{y:4,i:"a",s:1051.5,z:0,o:"1366",f:"c"},{y:4,i:"b",s:-224,z:0,o:"1366",f:"c"}],n:"Main Timeline",f:30,b:[]},"1287_hover":{q:false,z:1,i:"1287_hover",n:"1287_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#DDD",s:"#F0F0F0",o:"1312"},{y:1,i:"g",s:"#DDD",z:0,o:"1312",f:"c"}],f:30,b:[]},"1439":{c:"1406",q:false,z:2.15,i:"1439",a:[{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1407"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1407"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1407"},{f:"c",y:0.09,z:2.06,i:"b",e:-58,s:0,o:"1407"},{y:0.09,i:"cR",s:1,z:0,o:"1407",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1407",f:"c"},{f:"c",y:0.09,z:1.27,i:"e",e:1,s:1,o:"1407"},{f:"c",y:2.06,z:0.09,i:"e",e:0,s:1,o:"1407"},{y:2.15,i:"b",s:-58,z:0,o:"1407",f:"c"},{y:2.15,i:"e",s:0,z:0,o:"1407",f:"c"}],n:"Main Timeline",f:30,b:[]},"1423":{c:"1342",q:false,z:0,i:"1423",a:[],n:"Main Timeline",f:30,b:[]},"1435":{c:"1394",q:false,z:2,i:"1435",a:[{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"1395"},{f:"x",y:0,z:0.09,i:"cR",e:1,s:0.6,o:"1395"},{f:"x",y:0,z:0.09,i:"cQ",e:1,s:0.6,o:"1395"},{y:0.09,i:"cR",s:1,z:0,o:"1395",f:"c"},{y:0.09,i:"cQ",s:1,z:0,o:"1395",f:"c"},{f:"c",y:0.09,z:0.21,i:"e",e:1,s:1,o:"1395"},{f:"c",y:1,z:1,i:"e",e:0,s:1,o:"1395"},{y:2,i:"e",s:0,z:0,o:"1395",f:"c"}],n:"Main Timeline",f:30,b:[]}},bZ:180,O:["1374","1357","1365","1368","1360","1371","1356","1340","1336","1338","1339","1353","1380","1314","1342","1354","1382","1343","1337","1315","1355","1381","1316","1344","1346","1345","1352","1384","1414","1413","1412","1393","1392","1391","1390","1389","1388","1396","1395","1394","1411","1410","1409","1387","1386","1385","1402","1401","1400","1376","1399","1398","1397","1408","1407","1406","1405","1404","1403","1373","1372","1351","1347","1350","1348","1312","1377","1383","1313","1349","1379","1363","1341","1375","1359","1358","1367","1366","1361","1370","1369","1362","1364","1317","1378","1320","1323","1327","1318","1330","1333","1325","1324","1321","1328","1332","1335","1329","1319","1331","1334","1326","1322"],n:"Untitled Layout","_":0,v:{"1413":{x:"visible",a:0,b:0,j:"absolute",bF:"1412",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1344":{I:"None",x:"visible",J:"None",a:1116,K:"None",j:"absolute",cY:"0",bF:"1342",L:"None",b:0,d:809,U:"iframe-htmlwidget-9.html",z:19,i:"LaughterWidget1",V:"0",k:"div",c:769,W:""},"1367":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1366",L:"None",j:"absolute",z:1,d:200,U:"iframe-htmlwidget-14.html",k:"div",c:300,V:"0",W:""},"1390":{I:"None",x:"visible",J:"None",a:0,K:"None",j:"absolute",bF:"1389",r:"inline",L:"None",b:0,d:320,U:"iframe-htmlwidget-21.html",z:1,k:"div",V:"0",c:367,W:""},"1402":{I:"None",x:"visible",J:"None",a:0,K:"None",j:"absolute",bF:"1401",r:"inline",L:"None",b:0,d:320,U:"iframe-htmlwidget-21.html",z:1,k:"div",V:"0",c:367,W:""},"1333":{aD:{a:[{b:"1419",p:3,z:false,symbolOid:"805"}]},x:"visible",a:151,b:93,j:"absolute",bF:"1317",z:4,k:"div",c:40,d:86,cQ:1,aC:{a:[{b:"1419",p:8,z:true,symbolOid:"805",J:false}]},cR:1},"1356":{x:"visible",k:"div",c:1440,d:901,z:12,r:"inline",a:0,bS:33,j:"absolute",b:0},"1379":{h:"1172",p:"no-repeat",x:"visible",a:-277,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"1378",b:-253,d:592,k:"div",c:640},"1322":{h:"1012",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:24,j:"absolute",r:"inline",z:3,bF:"1321",dB:"img",d:37.3333,aA:{a:[{p:14,B:"Launch Heart"}]},k:"div",e:1,c:40,aP:"pointer"},"1414":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1413",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-22.html",k:"div",c:367,V:"0",W:""},"1345":{x:"visible",k:"div",c:1440,d:540,z:0,a:0,bS:39,j:"absolute",b:56},"1368":{x:"visible",a:0,bS:33,b:0,j:"absolute",bF:"1356",c:1440,k:"div",bY:1,d:900,z:5,cA:false,bX:false,bZ:180,cV:[{a:[{b:"1428",p:3,z:false,symbolOid:"873"}],B:"Launch Wow"}]},"1391":{x:"visible",cA:false,a:200.5,b:74,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:10,bX:false,bZ:180,cV:[]},"1403":{x:"visible",cA:false,a:267,b:365,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:7,bX:false,bZ:180,cV:[]},"1334":{h:"1010",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:23,j:"absolute",r:"inline",z:2,bF:"1333",dB:"img",d:40,aA:{a:[{p:14,B:"Launch Wow"}]},k:"div",e:1,c:40,aP:"pointer"},"1357":{x:"visible",a:0,bS:33,b:0,j:"absolute",bF:"1356",c:1440,k:"div",bY:1,d:900,z:7,cA:false,bX:false,bZ:180,cV:[{a:[{b:"1425",p:3,z:false,symbolOid:"906"}],B:"Launch Curious"}]},"1380":{x:"visible",a:0,bS:37,b:24,j:"absolute",cY:"1",c:1440,k:"div",bY:1,d:493,z:15,cA:false,bX:false,bZ:180,cV:[]},"1323":{cN:"none",I:"None",x:"visible",J:"None",a:-27,b:-4,K:"None",bF:"1321",L:"None",j:"absolute",z:2,d:200,U:"iframe-htmlwidget-3.html",dB:"button",k:"div",V:"0",c:300,aP:"auto",W:""},"1346":{c:1440,bS:39,d:540,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,bF:"1345",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:0,b:0},"1369":{x:"visible",tY:0.5,a:1046.5,b:723,j:"absolute",bF:"1368",z:16,k:"div",c:131,d:132,cQ:0,cR:0,tX:0.5},"1312":{b:560,z:38,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"1287_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{b:"1271",p:3,z:false,symbolOid:"1233"},{i:0,b:"1292",p:9,symbolOid:"1233"},{i:0,b:"1295",p:9,symbolOid:"1233"},{i:0,b:"1300",p:9,symbolOid:"1233"},{p:4,h:"1309"}]},G:"#000",aP:"pointer",w:"Laughter<br>",x:"visible",I:"Solid",a:136,y:"preserve",J:"Solid"},"1392":{x:"visible",a:0,b:0,j:"absolute",bF:"1391",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1404":{x:"visible",a:0,b:0,j:"absolute",bF:"1403",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1335":{cN:"none",I:"None",x:"visible",J:"None",a:-13,b:9,K:"None",bF:"1333",L:"None",j:"absolute",z:1,d:200,U:"iframe-htmlwidget-7.html",k:"div",c:300,V:"0",aP:"auto",W:""},"1358":{x:"visible",tY:0.5,a:1044.5,b:722,j:"absolute",bF:"1357",z:14,k:"div",c:135,d:134,cQ:0,e:1,cR:0,tX:0.5},"1381":{I:"None",x:"visible",J:"None",a:1116,K:"None",j:"absolute",cY:"0",bF:"1380",L:"None",b:0,d:810,U:"iframe-htmlwidget-18.html",z:19,i:"LoveWidget1",V:"0",k:"div",c:665,W:""},"1324":{aD:{a:[{b:"1418",p:3,z:false,symbolOid:"805"}]},x:"visible",a:201,dB:"button",b:90,j:"absolute",bF:"1317",z:5,k:"div",c:40,d:86,cQ:1,aP:"pointer",aC:{a:[{b:"1418",p:8,z:true,symbolOid:"805",J:false}]},cR:1},"1347":{x:"visible",bF:"1345",k:"div",c:1440,d:60,z:6,a:0,bS:15,j:"absolute",b:480},"1370":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1369",L:"None",j:"absolute",z:1,d:354,U:"iframe-htmlwidget-15.html",k:"div",c:443,V:"0",W:""},"1393":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1392",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-20.html",k:"div",c:367,V:"0",W:""},"1313":{b:560,z:41,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"1299_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{b:"1300",p:3,z:false,symbolOid:"1233"},{i:0,b:"1271",p:9,symbolOid:"1233"},{i:0,b:"1292",p:9,symbolOid:"1233"},{i:0,b:"1295",p:9,symbolOid:"1233"},{p:4,h:"1310"}]},G:"#000",aP:"pointer",w:"Wow<br>",x:"visible",I:"Solid",a:496,y:"preserve",J:"Solid"},"1405":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1404",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-20.html",k:"div",c:367,V:"0",W:""},"1336":{x:"visible",k:"div",c:1440,d:56,z:10,a:0,bS:39,j:"absolute",b:0},"1359":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1358",L:"None",j:"absolute",z:1,d:200,U:"iframe-htmlwidget-12.html",k:"div",c:300,V:"0",W:""},"1382":{I:"None",x:"visible",J:"None",a:23,K:"None",j:"absolute",cY:"0",bF:"1380",L:"None",b:-8,d:792,U:"iframe-htmlwidget-19.html",z:20,i:"LoveWidget2",V:"0",k:"div",c:635,W:""},"1325":{U:"iframe-htmlwidget-4.html",c:300,V:"0",d:200,I:"None",W:"",e:0,J:"None",K:"None",L:"None",aP:"auto",bF:"1324",j:"absolute",x:"visible",k:"div",dB:"button",z:2,cN:"none",a:-13,b:9},"1371":{x:"visible",a:0,bS:33,b:0,j:"absolute",bF:"1356",c:1440,k:"div",bY:1,d:893,z:2,cA:false,bX:false,bZ:180,cV:[{a:[{b:"1429",p:8,z:false,symbolOid:"813",J:true}],B:"Launch Laugh"}]},"1348":{h:"494",p:"no-repeat",x:"visible",a:16,q:"100% 100%",b:24,j:"absolute",r:"inline",z:9,bS:12,bF:"1347",d:32,dB:"img",k:"div",c:86},"1394":{x:"visible",a:297,cA:false,b:185,j:"absolute",r:"inline",c:96,k:"div",bY:1,d:96,z:13,bF:"1384",bX:false,bZ:180,cV:[]},"1314":{x:"visible",a:0,bS:37,b:24,j:"absolute",cY:"1",c:1440,k:"div",bY:1,d:493,z:14,cA:false,e:1,bZ:180,bX:false,cV:[]},"1406":{x:"visible",cA:false,a:-0.5,b:329,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:6,bX:false,bZ:180,cV:[]},"1337":{h:"786",p:"no-repeat",x:"visible",a:24,q:"100% 100%",b:18,j:"absolute",r:"inline",z:9,bF:"1336",dB:"img",d:20,k:"div",cQ:1,c:22,cR:1},"1360":{x:"visible",a:0,bS:33,b:0,j:"absolute",bF:"1356",c:1440,k:"div",bY:1,d:893,z:4,cA:false,bX:false,bZ:180,cV:[{a:[{b:"1426",p:3,z:false,symbolOid:"847"}],B:"Launch Heart"}]},"1383":{b:560,z:40,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"1294_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{b:"1295",p:3,z:false,symbolOid:"1233"},{i:0,b:"1271",p:9,symbolOid:"1233"},{i:0,b:"1292",p:9,symbolOid:"1233"},{i:0,b:"1300",p:9,symbolOid:"1233"},{p:4,h:"1311"}]},G:"#000",aP:"pointer",w:"Love<br>",x:"visible",I:"Solid",a:376,y:"preserve",J:"Solid"},"1326":{h:"1154",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:24,j:"absolute",r:"inline",z:4,bF:"1324",dB:"img",d:46,aA:{a:[{p:14,B:"Launch Curious"}]},k:"div",e:1,c:40,aP:"pointer"},"1372":{x:"visible",bF:"1371",k:"div",c:140,f:360,d:139,z:1,a:1495,bS:36,j:"absolute",b:417},"1349":{h:"495",p:"no-repeat",x:"visible",a:1256,q:"100% 100%",b:20,j:"absolute",r:"inline",z:7,bS:9,bF:"1347",d:36,dB:"img",k:"div",c:168},"1395":{x:"visible",a:0,b:0,j:"absolute",bF:"1394",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1315":{I:"None",x:"visible",J:"None",a:27,K:"None",j:"absolute",cY:"0",bF:"1314",L:"None",b:-8,d:820,U:"iframe-htmlwidget.html",z:20,i:"ApplauseWidget2",V:"0",k:"div",c:861,W:""},"1407":{x:"visible",a:0,b:0,j:"absolute",bF:"1406",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1338":{h:"782",p:"no-repeat",x:"visible",a:1196,q:"100% 100%",b:0,j:"absolute",r:"inline",bS:33,bF:"1336",z:4,d:56,dB:"img",cQ:1,k:"div",c:228,cR:1},"1361":{x:"visible",tY:0.5,a:1042,b:719,j:"absolute",bF:"1360",z:16,k:"div",c:140,d:140,cQ:0,cR:0,tX:0.5},"1384":{x:"visible",k:"div",c:409,d:461,z:11,r:"none",a:1031,bS:33,j:"absolute",b:56},"1350":{c:1408,bS:15,d:4,I:"Solid",J:"Solid",K:"Solid",g:"#DA1F26",L:"Solid",M:0,bF:"1347",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:10,aJ:10,D:"#D8DDE4",aK:10,k:"div",aI:10,a:16,aL:10,b:12},"1327":{aD:{a:[{b:"1422",p:3,z:false,symbolOid:"805"}]},x:"visible",a:1,dB:"button",b:92,j:"absolute",bF:"1317",z:1,k:"div",c:40,d:86,cQ:1,aP:"pointer",aC:{a:[{b:"1422",p:8,z:true,symbolOid:"805",J:false}]},cR:1},"1373":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1372",L:"None",j:"absolute",z:1,d:319,U:"iframe-htmlwidget-16.html",k:"div",c:428,V:"0",W:""},"1396":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1395",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-22.html",k:"div",c:367,V:"0",W:""},"1316":{I:"None",x:"visible",J:"None",a:1116,K:"None",j:"absolute",cY:"0",bF:"1314",L:"None",b:0,d:876,U:"iframe-htmlwidget-1.html",z:19,i:"ApplauseWidget1",V:"0",k:"div",c:680,W:""},"1408":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1407",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-20.html",k:"div",c:367,V:"0",W:""},"1339":{h:"784",p:"no-repeat",x:"visible",a:65,q:"100% 100%",b:12,j:"absolute",r:"inline",z:8,bF:"1336",dB:"img",d:31,k:"div",cQ:1,c:132,cR:1},"1362":{x:"visible",cQ:0,k:"div",cR:0,c:127,d:113,z:4,a:6,bF:"1361",j:"absolute",b:13},"1385":{x:"visible",cA:false,a:153.5,b:233,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:11,bX:false,bZ:180,cV:[]},"1351":{h:"503",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:3,bS:39,bF:"1347",d:60,dB:"img",k:"div",c:1440},"1328":{cN:"none",I:"None",x:"visible",J:"None",a:-13,K:"None",j:"absolute",bF:"1327",L:"None",b:9,z:1,d:200,U:"iframe-htmlwidget-5.html",k:"div",e:0,V:"0",c:300,aP:"auto",W:""},"1374":{x:"visible",a:0,bS:33,b:0,j:"absolute",bF:"1356",c:1440,k:"div",bY:1,d:900,z:8,cA:false,bX:false,bZ:180,cV:[{a:[{b:"1430",p:3,z:false,symbolOid:"906"}],B:"Launch AWS"}]},"1397":{x:"visible",cA:false,a:123,b:324,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:12,bX:false,bZ:180,cV:[]},"1317":{x:"visible",i:"reaction",a:982,bS:9,j:"absolute",b:835,c:290,k:"div",bY:1,d:40,z:17,cA:false,bX:false,bZ:180,cV:[]},"1340":{c:1440,bS:39,d:56,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,bF:"1336",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:0,b:0},"1409":{x:"visible",cA:false,a:27,b:233,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:16,bX:false,bZ:180,cV:[]},"1363":{I:"None",x:"visible",J:"None",a:0.5,K:"None",j:"absolute",bF:"1362",L:"None",b:-123.125,z:1,d:359,U:"iframe-htmlwidget-13.html",k:"div",e:1,V:"0",c:446,W:""},"1386":{x:"visible",a:0,b:0,j:"absolute",bF:"1385",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1329":{p:"no-repeat",c:36,q:"100% 100%",d:36,r:"inline",cQ:0.94,e:1,cR:0.94,aP:"pointer",h:"1164",w:"",bF:"1327",j:"absolute",x:"visible",aA:{a:[{p:14,B:"Launch AWS"}]},k:"div",dB:"img",z:6,a:2,b:25},"1352":{aR:"1",x:"visible",bE:"825",a:240,bS:37,j:"absolute",bF:"1345",b:0,aO:"0",z:4,d:540,k:"video",cQ:1,c:960,cR:1,aQ:"1",aH:"1"},"1375":{x:"visible",tY:0.5,a:1044.5,b:722,j:"absolute",bF:"1374",z:14,k:"div",c:135,d:134,cQ:0,e:1,cR:0,tX:0.5},"1398":{x:"visible",a:0,b:0,j:"absolute",bF:"1397",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1318":{aD:{a:[{b:"1421",p:3,z:false,symbolOid:"805"}]},x:"visible",a:51,dB:"button",b:92,j:"absolute",bF:"1317",z:2,k:"div",c:40,d:86,cQ:1,aP:"pointer",aC:{a:[{b:"1421",p:8,z:true,symbolOid:"805",J:false}]},cR:1},"1341":{h:"780",p:"no-repeat",x:"visible",a:120,q:"100% 100%",bS:37,j:"absolute",r:"inline",z:1,b:631,dB:"img",d:296,k:"div",cQ:1,c:1200,cR:1},"1410":{x:"visible",a:0,b:0,j:"absolute",bF:"1409",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1364":{c:12,d:12,I:"Solid",e:1,J:"Solid",K:"Solid",g:"#F06C6E",L:"Solid",M:0,bF:"1361",N:0,A:"#FFD62F",x:"visible",j:"absolute",B:"#FFD62F",P:0,O:0,C:"#FFD62F",z:2,aJ:"50%",D:"#FFD62F",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:64},"1387":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1386",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-20.html",k:"div",c:367,V:"0",W:""},"1330":{aD:{a:[{b:"1420",p:3,z:false,symbolOid:"805"}]},x:"visible",a:101,b:92,j:"absolute",bF:"1317",z:3,k:"div",c:40,d:86,aY:0,cQ:1,f:0,aC:{a:[{b:"1420",p:8,z:true,symbolOid:"805",J:false}]},cR:1},"1353":{x:"visible",a:0,bS:37,b:24,j:"absolute",cY:"1",c:1440,k:"div",bY:1,d:493,z:16,cA:false,bX:false,bZ:180,cV:[]},"1376":{I:"None",x:"visible",J:"None",a:-336,K:"None",j:"absolute",cY:"1",bF:"1375",L:"None",b:-341,d:816,U:"iframe-htmlwidget-17.html",z:1,k:"div",V:"0",c:808,W:""},"1399":{I:"None",x:"visible",J:"None",a:0,K:"None",j:"absolute",bF:"1398",r:"inline",L:"None",b:0,d:320,U:"iframe-htmlwidget-21.html",z:1,k:"div",V:"0",c:367,W:""},"1319":{h:"1006",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:24,j:"absolute",r:"inline",bF:"1318",z:5,dB:"img",d:40,aA:{a:[{p:14,B:"Launch Applause"}]},cQ:1,e:1,k:"div",c:40,aP:"pointer",cR:1},"1342":{x:"visible",a:0,bS:37,b:24,j:"absolute",r:"inline",c:1440,k:"div",bY:1,d:493,z:13,cY:"1",cA:false,bZ:180,bX:false,cV:[]},"1411":{I:"None",x:"visible",J:"None",a:0,b:0,K:"None",bF:"1410",L:"None",j:"absolute",z:1,d:320,U:"iframe-htmlwidget-20.html",k:"div",c:367,V:"0",W:""},"1365":{x:"visible",a:0,bS:33,b:0,j:"absolute",bF:"1356",c:1440,k:"div",bY:1,d:900,z:6,cA:false,bX:false,bZ:180,cV:[{a:[{b:"1427",p:3,z:false,symbolOid:"906"}],B:"Launch Applause"}]},"1388":{x:"visible",cA:false,a:42,b:148,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:8,bX:false,bZ:180,cV:[]},"1331":{h:"1008",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:23,j:"absolute",r:"inline",z:2,bF:"1330",dB:"img",d:40,aA:{a:[{p:14,B:"Launch Laugh"}]},k:"div",e:1,c:40,aP:"pointer"},"1400":{x:"visible",cA:false,a:246,b:233,j:"absolute",bF:"1384",c:96,k:"div",bY:1,d:96,z:9,bX:false,bZ:180,cV:[]},"1354":{I:"None",x:"visible",J:"None",a:23,K:"None",j:"absolute",cY:"0",bF:"1353",L:"None",b:-8,d:858,U:"iframe-htmlwidget-10.html",z:20,i:"WowWidget2",V:"0",k:"div",c:667,W:""},"1377":{b:560,z:39,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"1293_hover",r:"inline",C:"#A0A0A0",Z:"break-word",D:"#A0A0A0",t:13,F:"center",aA:{a:[{b:"1292",p:3,z:false,symbolOid:"1233"},{i:0,b:"1271",p:9,symbolOid:"1233"},{i:0,b:"1295",p:9,symbolOid:"1233"},{i:0,b:"1300",p:9,symbolOid:"1233"},{p:4,h:"1308"}]},G:"#000",aP:"pointer",w:"Applause<br>",x:"visible",I:"Solid",a:256,y:"preserve",J:"Solid"},"1320":{cN:"none",I:"None",x:"visible",J:"None",a:-28,b:-5,K:"None",bF:"1318",L:"None",j:"absolute",z:1,d:200,U:"iframe-htmlwidget-2.html",k:"div",c:300,V:"0",aP:"auto",W:""},"1412":{x:"visible",a:48,cA:false,b:36,j:"absolute",r:"inline",c:96,k:"div",bY:1,d:96,z:17,bF:"1384",bX:false,bZ:180,cV:[]},"1343":{I:"None",x:"visible",J:"None",a:24,K:"None",j:"absolute",cY:"0",bF:"1342",L:"None",b:-8,d:704,U:"iframe-htmlwidget-8.html",z:20,i:"LaughterWidget2",V:"0",k:"div",c:794,W:""},"1366":{x:"visible",tY:0.5,a:1044.5,b:722,j:"absolute",bF:"1365",z:14,k:"div",c:135,d:134,cQ:0,e:1,cR:0,tX:0.5},"1389":{x:"visible",a:0,b:0,j:"absolute",bF:"1388",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1332":{U:"iframe-htmlwidget-6.html",c:300,V:"0",d:200,I:"None",r:"inline",e:0,J:"None",W:"",K:"None",L:"None",aP:"auto",bF:"1330",j:"absolute",x:"visible",k:"div",z:1,cN:"none",a:-13,b:9},"1401":{x:"visible",a:0,b:0,j:"absolute",bF:"1400",c:96,k:"div",z:8,d:96,cQ:0.6,e:0,cR:0.6},"1355":{I:"None",x:"visible",J:"None",a:1116,K:"None",j:"absolute",cY:"0",bF:"1353",L:"None",b:0,d:850,U:"iframe-htmlwidget-11.html",z:19,i:"WowWidget1",V:"0",k:"div",c:658,W:""},"1378":{x:"visible",k:"div",c:135,d:40,z:7,i:"widgets",a:1280,bS:9,j:"absolute",b:835},"1321":{aD:{a:[{b:"1417",p:3,z:false,symbolOid:"805"}]},x:"visible",a:251,dB:"button",b:92,j:"absolute",bF:"1317",z:6,k:"div",c:40,d:86,cQ:1,aP:"pointer",aC:{a:[{b:"1417",p:8,z:true,symbolOid:"805",J:false}]},cR:1}}}],{},h,{w:{p:0,q:[[0,0,0.77,0,0.175,1,1,1]]},"1055":{p:0,q:[[0,0,0.86,0,0.104,1.286,1,1]]},j:{p:0,q:[[0,0,0.55,0.085,0.68,0.53,1,1]]},x:{p:0,q:[[0,0,0.86,0,0.07,1,1,1]]}},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
