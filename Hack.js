for(var s=document.getElementsByTagName("span"),w=[],a=document.getElementsByClassName("txtInput")[0],t="",j=0,i=0;i<s.length;i++)s[i].hasAttribute("unselectable")&&w.push(s[i]);
for(var i=0;i<w.length;i++)t+=w[i].innerHTML;a.addEventListener("keypress",function(e){e.preventDefault(),a.value+=t[j],j++});
