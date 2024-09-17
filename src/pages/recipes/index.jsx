import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

function RecipeList() {

    const location = useLocation();

    const {data, loading, error} = useFetch('https://dummyjson.com/recipes');
    
    if (loading) <h1>Fetchin Recipes! Please Wait</h1>;
    const windowSize = useWindowResize();

    return(
        <div>
            <h1 style={{color : windowSize.width <760 ? 'red' : 'black'}}>Recipe List Page</h1>
            <h3>Current window width is {windowSize.width} and Current height is {windowSize.height}</h3>
            <ul>
                {
                    data?.recipes?.length > 0 ?
                    data?.recipes.map(recipeItem=> <div>
                        <img src={recipeItem?.image}/>
                        <label>{recipeItem?.name}</label>
                    </div>)
                    :null
                }
            </ul>
        </div>
    );
}
export default RecipeList;