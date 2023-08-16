import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

function Dropdown({ value, dropDownValues, onChangeValue }) {
    const dropdownRef = useRef();
    const [openDropdown, setOpenDropdown] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState(0);

    const toggleDropdown = () => {
        if (!openDropdown) {
            dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
                setDropdownPosition({top: pageY + 14, left: pageX});
            });
        }
        setOpenDropdown(!openDropdown);
    };

    const onPressItem = (item) => {
        onChangeValue(item);
        setOpenDropdown(false);
    }

    const renderDropdown = () => {
        if (openDropdown) {
            return (
                <Modal visible={openDropdown} transparent animationType='none'>
                    <Pressable style={styles.overlay} onPress={() => setOpenDropdown(false)}>
                        <View style={[styles.dropdown, dropdownPosition]}>
                            <FlatList
                                data={dropDownValues}
                                keyExtractor={(item) => item}
                                renderItem={(itemData) => (
                                    <Pressable style={styles.item} onPress={() => onPressItem(itemData.item)}>
                                        <Text>{itemData.item}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </Pressable>
                </Modal>
            );
        }
    };

    return (
        <Pressable ref={dropdownRef} style={styles.dropdownContainer} onPress={toggleDropdown}>
            {renderDropdown()}
            <Text>{value}</Text>
            <Ionicons name="chevron-down" size={24} color="white" />
        </Pressable>
    );
}

export default Dropdown;

const styles = StyleSheet.create({
    dropdownContainer: {
        backgroundColor: '#a581e3',
        borderColor: '#a581e3',
        borderWidth: 2,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 100,
        zIndex: 1,
    },
    modelStyle: {
        backgroundColor: '#a581e3',
        top: 50,
        minHeight: 50,
        maxHeight: 300,
    },
    overlay: {
        width: '100%',
        height: '100%',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#a581e3',
        borderRadius: 2,
        width: 100, 
        top: 50,
        minHeight: 50,
        maxHeight: 300,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
})