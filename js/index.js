const path=document.querySelectorAll("path");
const dataSvg=[{nom:"",population:"",lien:""}];
const displayData=document.querySelector("[data-res]");


const invitation=document.querySelector("[data-aide]");
const compris=document.querySelector("[data-compris]");

compris.style.display="none";

/***modification view port svg */




path.forEach((e)=>{
    
    // console.log(e.dataset);
    e.addEventListener("click",(y)=>{
        
        invitation.style.display="none";
        compris.style.display="block";

        setTimeout(()=>{
            compris.innerHTML=`<span data-compris> &#128519; si vous souhaitez consulter d'autres projets d'applications web, voici le lien de mon <a href="https://dancodeur.github.io/dan-portfolio/" target="_blank" style="color:rgb(108, 208, 116)">portfolio.</a></span>`;
        },10000);

        y.target.classList.add("change");
        console.log(e.dataset.info);
        console.log(e.dataset);

        let nameRegion=e.dataset.info;
        let Population=e.dataset.population;
        let link=e.dataset.lienInsee;

        dataSvg.push({nom:nameRegion,population:Population,lien:link});
        
        dataSvg.forEach((data)=>{
            displayData.innerHTML=`
              <li><span style="color:black; font-weight:bold;">Région sélectionnée:</span> ${data.nom}</li>
              <li><span style="color:black; font-weight:bold;">Population:</span> ${data.population} habitants</li>
              <li><span style="color:black; font-weight:bold;">Plus d'infos:</span> <a href="${data.lien}" target="_blank" style="color:rgb(108, 208, 116)">Insee.fr</a></li>
            `;
        });
    });
});

