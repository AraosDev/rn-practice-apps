import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';

function MealItem({ imageUrl, title, duration, complexity, affordability}) {
    const navigation = useNavigation();
    const onPressMeal = () => {
        navigation.navigate('MealsDetails', {
            title
        });
    };

    return(
        <View style={styles.mealItemOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? { opacity: 0.5 } : null} onPress={onPressMeal}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl}} />
                    </View>
                    <Text style={styles.titleText}>{title}</Text>
                    <View style={styles.mealDetails}>
                        <Text style={styles.mealDetailItem}>{duration}m</Text>
                        <Text style={styles.mealDetailItem}>{complexity}</Text>
                        <Text style={styles.mealDetailItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

function MealsOverview({ route, navigation }) {
    const categoryTitle = CATEGORIES.find(({ id }) => id === route.params.catId)?.title;
    const mealItems = MEALS.filter(({categoryIds}) => categoryIds.includes(route.params.catId));

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryTitle, navigation]);

  return (
    <View style={styles.rootScreen}>
        <FlatList 
            data={mealItems}
            keyExtractor={(meal) => meal.id}
            renderItem={(mealData) => <MealItem {...mealData.item} />}
        />
    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    mealItemOuterContainer: {
        flex: 1,
        margin: 10,
        padding: 16,
        backgroundColor: '#ae5454',
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 8,
        fontWeight: 'bold',
    },
    innerContainer: {
        flex: 1,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    mealDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mealDetailItem: {
        margin: 4,
    },
})