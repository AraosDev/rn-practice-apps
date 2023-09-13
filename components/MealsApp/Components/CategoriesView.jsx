import { View, FlatList, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data';

function CategoryItem({ id, title, color, onPress }) {
    return (
        <View style={[styles.categoryItem, { backgroundColor: color }]}>
            <Pressable onPress={() => onPress(id)} android_ripple={{ color: '#cccc' }} style={{flex: 1}}>
                <View style={styles.innerContainer}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

function CategoriesView({ navigation }) {
    const onPressCategory = (id) => {
        navigation.navigate('MealsOverview', { catId: id });
    };

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => <CategoryItem {...itemData.item} onPress={onPressCategory} />}
                numColumns={2}
            />
        </View>
    );
}

export default CategoriesView;

const styles = StyleSheet.create({
    categoryItem: {
        width: '45%',
        margin: 10,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        height: 200,
        elevation: 8,
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})