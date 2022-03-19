function navbar(){
    return `<div id="navbar">
    <input type="text" id="Recipename" placeholder="Enter Recipe">
    <button>Search</button>
    <div class="options">
        <ul>
        <a href="foodapp.html"><li>Home</li></a>
        <a href="RecipeDay.html"><li>Recipe of the Day</li></a>
        <a href="latestRecipe.html"><li>Latest Recipes</li></a>
        </ul>
    </div>
</div>`
}

export default navbar