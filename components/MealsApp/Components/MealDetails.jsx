import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { /* useContext, */ useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Chip from '../../Globals/components/Chip';
import IconButton from '../../Globals/components/IconButton';
// import { FavoritesCtx } from '../store/context/favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetails({ navigation, route }) {
    // const favMealsCtx = useContext(FavoritesCtx);
    const dispatch = useDispatch();
    const { favIds } = useSelector((state) => state.favorites);
    const mealTitle = route.params.title;
    const { 
        imageUrl,
        duration,
        affordability,
        complexity,
        isVegetarian,
        isLactoseFree,
        isGlutenFree,
        ingredients,
        steps,
        id
    } = MEALS.find(({title}) => title === mealTitle) || {};
    const isFavorite = favIds.includes(id); // favMealsCtx.isFavorite(id);

    const handleFavStateToggle = () => {
        if (isFavorite) dispatch(removeFavorite({ id })); // favMealsCtx.removeFavorite(id);
        else dispatch(addFavorite({ id })); // favMealsCtx.addFavorite(id);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealTitle,
            headerRight: () => {
                return (
                    <IconButton 
                        onPress={handleFavStateToggle}
                        icon={isFavorite ? 'star' : 'star-outline'}
                        color='white'
                    />
                )
            }
        });
    }, [mealTitle, navigation, isFavorite]);

    return (
        <ScrollView style={styles.rootScreen}>
            <View>
                <Image style={styles.mealImage} source={{ uri: imageUrl }}  />
            </View>
            <Text style={styles.mealTitle}>{mealTitle}</Text>
            <View style={styles.mealGeneralDetials}>
                <Text style={styles.generalDetailText}>{duration}m</Text>
                <Text style={styles.generalDetailText}>{affordability}</Text>
                <Text style={styles.generalDetailText}>{complexity}</Text>
            </View>
            <View style={styles.mealGeneralDetials}>
                <MaterialCommunityIcons name='square-circle' size={24} color={isVegetarian ? 'green' : 'red'} />
                <Text style={styles.generalDetailText}>{isLactoseFree ? 'Lactose Free,' : 'Lactose Present,'}</Text>
                <Text style={styles.generalDetailText}>{isGlutenFree ? 'Gluten Free' : 'Gluten Present'}</Text>
            </View>
            <Text style={styles.detailSubTitle}>Ingredients</Text>
            {ingredients.map((ingredient) => (
                <Chip key={ingredient}>
                    <Text>{ingredient}</Text>
                </Chip>
            ))}
            <Text style={styles.detailSubTitle}>Preparation Steps</Text>
            {steps.map((step, index) => (
                <Chip key={step}>
                    <Text>{index + 1}) {step}</Text>
                </Chip>
            ))}
        </ScrollView>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        padding: 16,
        marginBottom: 24,
    },
    mealImage: {
        width: '100%',
        height: 200,
    },
    mealTitle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    mealGeneralDetials: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    generalDetailText: {
        fontSize: 16,
        marginHorizontal: 4,
    },
    detailSubTitle: {
        fontSize: 18,
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        marginHorizontal: 10,
        textAlign: 'center',
        marginVertical: 8,
        paddingBottom: 8
    }
})