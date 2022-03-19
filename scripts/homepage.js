async function getDatahome(url){
  
    try {
        let res=await fetch(url);
    let RecipeData=await res.json();
     //console.log(RecipeData)
    let data=RecipeData.meals;
    return data;
    console.log(data);
    } catch (error) {
        console.log("not found")
    }
}

function RecipeAppend(data,location){
    location.innerHTML=null;
    data.forEach((el)=>{
      let div1=document.createElement("div");
      let div2=document.createElement("div");
      div2.setAttribute("class","content")
      let img=document.createElement("img");
      img.src=el.strMealThumb;
        let title=document.createElement("h3");
        title.textContent=el.strMeal;
        let strArea=document.createElement("p");
        strArea.textContent="Area: "+el.strArea;
        let strCategory=document.createElement("p");
        strCategory.textContent="Category: "+el.strCategory;
        let ingridents=document.createElement("h3");
        ingridents.textContent=" ingridents: ";
        let strIngredient1=document.createElement("p");
        strIngredient1.textContent=el.strIngredient1;
        let strIngredient2=document.createElement("p");
        strIngredient2.textContent=el.strIngredient2;
        let strIngredient3=document.createElement("p");
        strIngredient3.textContent=el.strIngredient3;
        let strIngredient4=document.createElement("p");
        strIngredient4.textContent=el.strIngredient4;
        let strIngredient5=document.createElement("p");
        strIngredient5.textContent=el.strIngredient5;
       
        let strInstructions=document.createElement("h3");
        strInstructions.textContent="Instructions: "
        let Instructions=document.createElement("p");
        Instructions.textContent=el.strInstructions;
        div1.append(img);
        div2.append(title,strArea,strCategory,ingridents,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strInstructions,Instructions);
        location.append(div1,div2);

})
 }

 //let items;
 function latestAppend(data,location){
    location.innerHTML=null;
    data.forEach(({strMeal,strMealThumb,strArea,strCategory,ingridents,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strInstructions})=>{
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.src=strMealThumb;
        let mealname=document.createElement("p");
        mealname.textContent=strMeal;
        div1.append(img,mealname);
      
        
         let items={
            strMeal,
            strMealThumb,
            strArea,
            strCategory,
            ingridents,
            strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strInstructions
           }
          div1.onclick=()=>{
             Showimage(items);
          }
        location.append(div1);

    })
}
     function Showimage(data){
         let arr=[];
         arr.push(data)
    localStorage.setItem("singleview",JSON.stringify(arr));
     window.location.href="display.html";

}


export  {getDatahome,RecipeAppend,latestAppend}
