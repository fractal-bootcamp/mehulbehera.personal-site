function RecipeGenCard() {
    return (
        <a href="https://forge-recipegenerator.onrender.com/" className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.freepik.com/free-vector/tiny-female-chef-cooking-vegan-meal-using-recipe-kitchen-cook-making-dish-from-restaurant-menu-flat-vector-illustration-healthy-food-diet-culinary-nutrition-concept-website-design_74855-22063.jpg"
                    alt="InfiniteCraft"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Recipe Generator</h2>
                <p>
                    A recipe generator built with React, Tailwind, S3, and Forge-ml. Upload a picture of your favorite meal and let me generate a recipe for you.
                </p>
            </div>
        </a>
    );
}

export default RecipeGenCard;