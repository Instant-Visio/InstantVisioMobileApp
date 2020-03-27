import React from 'react';
import {ScrollView, Image, TouchableOpacity} from 'react-native';
import {Block, Input, Text, Button} from './../../../global/components/Socles';
import images from './../../../global/components/images';
import vars from './../../../global/vars';

const Dump = ({navigation}) => (
  <Block style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Block center flex={2} style={{marginVertical: vars.heightUnit * 3.5}}>
        <Image
          style={{width: 170, height: 160}}
          source={images.logo.visioLogo}
        />
      </Block>
      <Block
        center
        style={{
          justifyContent: 'flex-start',
          marginBottom: vars.heightUnit * 2.5,
          marginHorizontal: vars.widthUnit * 7,
        }}
        flex={0.5}>
        <Text center style={{color: '#9FA5AA', fontSize: 15}}>
          À la soumission du formulaire, vous serez redirigé-e vers la page
          d'appel en visiophone. En parallèle, un sms et / ou un e-mail sera
          envoyé à votre proche et l'invitera à vous rejoindre directement sur
          la page pour échanger avec vous.
        </Text>
      </Block>
      <Block style={{flex: 1, marginHorizontal: vars.widthUnit * 7}}>
        <Input
          color="#333333"
          style={{borderColor: '#333333'}}
          placeholderTextColor="#9FA5AA"
          placeholder="Votre nom"
        />

        <Input
          color="#333333"
          style={{borderColor: '#333333'}}
          placeholderTextColor="#9FA5AA"
          placeholder="Numéro de téléphone de votre proche"
          help="Optionnel si l'email est renseigné !"
          bottomHelp
        />

        <Input
          color="#333333"
          style={{borderColor: '#333333'}}
          placeholderTextColor="#9FA5AA"
          placeholder="E-mail de votre proche"
          help="Optionnel si le numero de telephone est renseigné !"
          bottomHelp
        />
        <Button
          opacity={0.5}
          color="#333333"
          style={{width: 307, marginVertical: vars.heightUnit * 1.5}}>
          Joindre mon proche
        </Button>
      </Block>
      <Block center flex={0.5} style={{marginVertical: vars.heightUnit}}>
        <TouchableOpacity>
          <Text style={[{color: '#333333', fontSize: 16}]}>En savoir plus</Text>
        </TouchableOpacity>
      </Block>
    </ScrollView>
  </Block>
);

export default Dump;
