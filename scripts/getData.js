
async function getData(foodname){
  
    try {
        let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`);
    let RecipeData=await res.json();
     // console.log(RecipeData);
    let data=RecipeData.meals;
    return data;
   // console.log(data);
    } catch (error) {
        console.log("not found")
    }
}


function append(data,location){
   location.innerHTML=null;
    data.forEach(({strMeal,strMealThumb})=>{
       let div1=document.createElement("div");
       let div2=document.createElement("div");
       let img=document.createElement("img");
       img.src=strMealThumb;
       let Recipename=document.createElement("p");
       Recipename.textContent=strMeal;
      div1.append(img);
      div2.append(Recipename);
        location.append(div1,div2);
       location.style.overflow="scroll";
      
    })

}

export {getData,append} 