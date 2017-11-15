var e2k = (function() {
var en_h = "rRseEfaqQtTdwWczxvg";
var reg_h = "[" + en_h + "]";

var en_b = {k:0,o:1,i:2,O:3,j:4,p:5,u:6,P:7,h:8,hk:9,ho:10,hl:11,y:12,n:13,nj:14,np:15,nl:16,b:17,m:18,ml:19,l:20};
var reg_b = "hk|ho|hl|nj|np|nl|ml|k|o|i|O|j|p|u|P|h|y|n|b|m|l";

var en_f = {"":0,r:1,R:2,rt:3,s:4,sw:5,sg:6,e:7,f:8,fr:9,fa:10,fq:11,ft:12,fx:13,fv:14,fg:15,a:16,q:17,qt:18,t:19,T:20,d:21,w:22,c:23,z:24,x:25,v:26,g:27};
var reg_f = "rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt|r|R|s|e|f|a|q|t|T|d|w|c|z|x|v|g|";

var reg_exp = new RegExp("("+reg_h+")("+reg_b+")(("+reg_f+")(?=("+reg_h+")("+reg_b+"))|("+reg_f+"))","g");

var replace = function(str,h,b,f) {
return String.fromCharCode(en_h.indexOf(h) * 588 + en_b[b] * 28 + en_f[f] + 44032);
};

return (function(str) {
return str.replace(reg_exp,replace);
});
})();
