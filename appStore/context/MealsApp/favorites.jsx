import { createContext, useState } from "react";

export const FavoritesCtx = createContext({
    favIds: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
    isFavorite: (id) => {},
});

function FavoritesProvider({ children }) {
    const [favIds, setFavIds] = useState([]);

    const addFavorite = (id) => {
        setFavIds((currentFavIds) => [...currentFavIds, id]);
    };

    const removeFavorite = (id) => {
        setFavIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    };

    const isFavorite = (id) => favIds.includes(id);

    const contextValue = { favIds, addFavorite, removeFavorite, isFavorite };

    return (
        <FavoritesCtx.Provider value={contextValue}>
            {children}
        </FavoritesCtx.Provider>
    );
};

export default FavoritesProvider;