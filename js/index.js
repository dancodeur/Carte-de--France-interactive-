const path=document.querySelectorAll("path");
const dataSvg=[{nom:"",population:"",lien:""}];
const displayData=document.querySelector("[data-res]");

/***modification view port svg */




path.forEach((e)=>{
    
    // console.log(e.dataset);
    e.addEventListener("click",(y)=>{
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
              <li><span style="color:black; font-weight:bold;">Source insee:</span> <a href="${data.lien}" target="_blank" style="color:rgb(108, 208, 116)">en savoir plus.</a></li>
            `;
        });
    });
});

