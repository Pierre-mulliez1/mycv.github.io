function details() {
    if (document.getElementById("bton2").innerHTML == "Bonjour bienvenue sur mon CV en ligne, cliquez pour en savoir plus!"){
         document.getElementById("bton2").innerHTML = "Bonjour bienvenue sur mon CV en ligne; J'ai vécu en France (étude dans une école billingue), Angleterre, Canada, Méxique et maintenant en Espagne. Le français est ma langue maternelle, je parle également anglais courament et Espagnole avancé. Je me considère comme proactif, persévérant, ésprit critique et toujours à la recherche de nouveaux défis.";
        }
    else {
        document.getElementById("bton2").innerHTML = "Bonjour bienvenue sur mon CV en ligne, cliquez pour en savoir plus!"
         }
}

document.write(`

<div class= "heada">
<div class = "headerleft" style = "padding-right:3%;"  >
<p>Pierre Mulliez <br> 18-09-1998 <br> pierremulliez1@gmail.com <br> permit de conduire </p>
</div>

<div class = "headerright">
<p>e-Curiculum Vitae</p>
</div>

<div class= "extrahead">
    <div class= "buttonhead">
<a  href= "index.html">English version <p style='font-size: 12px'>Last updated: December 2022</p></a>
        </div>
</div>
</div>
    <div class= "heada" style="text-align: center">
        <div >
            <button onclick="details()" class = "buttonabout" id = "bton2">Bonjour bienvenue sur mon CV en ligne, cliquez pour en savoir plus!</button>
        </div>
    </div>





<div class = "menutop">
<a href = "CV1_html_french.html"> Accueil </a>
<a href = "education_html_french.html"> Education </a>
<a href = "experiences_CV1_html_french.html"> Expériences professionelles</a>
<a href = "extracuri_CV1_HTML_french.html"> Leadership - Centres d’intérêt    </a> 
<a href="https://lumen5.com/user/pierremulliez1/meet-pierre-mulliez-yp3dg/" target="_blank">Présentation en 40 secondes</a>   
</div>

`);