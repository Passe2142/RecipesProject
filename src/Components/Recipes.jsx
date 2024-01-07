import { useState, useEffect } from "react";
import {getRecipes} from "../Services/recipesServices";
import Recipe from "./Recipe";
function Recipes () {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect (
    () => {
        const request = async () => {
            try {
                const data = await getRecipes(search);
                console.log("🚀 ~ file: Recipes.jsx:15 ~ request ~ data:", data);
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.log("Error", error)
            }
        }
        request();
        }
    ),
    [search]
}

export default Recipes