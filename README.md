# TypeRacer Hack
## Step 1
Click [here](https://play.typeracer.com) to go to TypeRacer. This will open in the same tab so make sure you open two same tabs!
## Step 2
Enter a race and copy and paste the following code.
```javascript
for(var s=document.getElementsByTagName("span"),w=[],a=document.getElementsByClassName("txtInput")[0],t="",j=0,i=0;i<s.length;i++)s[i].hasAttribute("unselectable")&&w.push(s[i]);
for(var i=0;i<w.length;i++)t+=w[i].innerHTML;a.addEventListener("keypress",function(e){e.preventDefault(),a.value+=t[j],j++});
```
Can not see the code? Go to Hack.js!
## Step 3
When the race start all you have to do is to keep pressing space!
