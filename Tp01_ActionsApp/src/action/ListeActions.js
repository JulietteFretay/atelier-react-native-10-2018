import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, terminerAction, supprimerAction, filtreActives, filtreTerminees}) => {

    return (
        <View>
            <FlatList
                      data={filtreActives==true ? actions.filter((action) => action.bool==false) : filtreTerminees==true?actions.filter((action) => action.bool==true):actions}
                      renderItem={({item,index}) => <UneAction titre={item.texte} bool={item.bool} terminerAction={() => terminerAction(index)} supprimerAction={() => supprimerAction(index)}/>}
                      keyExtractor={(item, index) => index.toString()}
                    />
        </View>
    )
}

export default ListeActions