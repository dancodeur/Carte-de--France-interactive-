const path=document.querySelectorAll("path");
const dataSvg=[];
const displayData=document.querySelector("[data-res]");



path.forEach((e)=>{
    
    // console.log(e.dataset);
    e.addEventListener("click",(y)=>{
        y.target.classList.add("change");
        console.log(e.dataset.info);

        dataSvg.push(e.dataset.info);
        const res=dataSvg.join(" - ");
        console.log(dataSvg);
        
        displayData.textContent=res;
    })
})

