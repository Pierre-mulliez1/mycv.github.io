function details() {
    if (document.getElementById("bton3").innerHTML == "Hello and welcome on my CV, about me;  click to see more !"){
         document.getElementById("bton3").innerHTML = "Hello and welcome on my CV, about me; I have lived in France (studied in a bilingual school), England, Canada, Mexico and now spain. I am a native French speaker, I speak bilingual English and conversational Spanish. I am proactive, think critically, perseverent and always looking for new challenges.";
        }
    else {
        document.getElementById("bton3").innerHTML = "Hello and welcome on my CV, about me;  click to see more !"
         }
}

document.write(`

<div class= "heada">
<div class = "headerleft" style = "padding-right:3%;" >
<p>Pierre Mulliez <br> pierremulliez1@gmail.com<br> driving license </p>
</div>
<div class = "headerright">
<p>My Online Curiculum Vitae</p>
</div>

<div class= "extrahead">
    <div class= "buttonhead">
<a  href= "CV1_html_french.html">French version</a>
        </div>
</div>
<div class= "heada" style="text-align: center">
        <div >
            <button onclick="details()" class = "buttonabout" id = "bton3">Hello and welcome on my CV, about me;  click to see more !</button>
            
        </div>
    </div>
    <div class = "menutop">
<a href = "index.html"> Home </a>
<a href = "education_html.html"> Education </a>
<a href = "experiences_CV1_html.html"> Experiences </a>
<a href = "extracuri_CV1_HTML.html"> Leadership - extra curricular  </a>    
<a href="https://lumen5.com/user/pierremulliez1/meet-pierre-mulliez-yp3dg/" target="_blank">Introduction in 40 seconds</a>
</div>

`);