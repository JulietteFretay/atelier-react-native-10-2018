import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {


    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        filtreActives: false,
        filtreTerminees: false
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log('la saisie à changée', nouvelleSaisie)
        this.setState({texteSaisie:nouvelleSaisie})
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        const action = {
            texte:this.state.texteSaisie,
            bool:false
        }
        this.setState(prev => ({actions:[...prev.actions,action],texteSaisie:''}))
    }

    terminerAction = indexCourant  => {
        this.setState(prev => ({actions:prev.actions.map((action,index) => index == indexCourant ? {...action,bool:!action.bool} : action)}))
    }

    supprimerAction = indexCourant  => {
        this.setState(prev => ({actions:prev.actions.filter((action,index) => index !== indexCourant)}))
    }

    actionToutes = () => {
        this.setState({filtreActives:false,filtreTerminees:false});
    }

    actionActives= () => {
            this.setState({filtreActives:true,filtreTerminees:false});
        }

     actionTerminees= () => {
         this.setState({filtreActives:false,filtreTerminees:true});
     }

    render() {
        const {texteSaisie,actions,filtreTerminees,filtreActives} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions actions={actions} terminerAction={this.terminerAction} supprimerAction={this.supprimerAction} filtreTerminees={filtreTerminees} filtreActives={filtreActives}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu actionToutes={this.actionToutes} actionActives={this.actionActives} actionTerminees={this.actionTerminees}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})