import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({actionActives,actionTerminees,actionToutes}) => (
    <View style={styles.menu}>
        <OptionMenu titre={"Toutes"} actionMenu={() => actionToutes()}/>
        <OptionMenu titre={"Actives"} actionMenu={() => actionActives()}/>
        <OptionMenu titre={"Terminees"} actionMenu={() => actionTerminees()}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu