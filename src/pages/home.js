import React from 'react';
import {
  View,
  VirtualizedList,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
} from 'react-native';
import AppbarComponent from 'components/appbar';
import {Card} from 'react-native-paper';
// import {StackNavigator} from 'react-navigation';

const DATA = [
  {
    image: require('./images/01.jpeg'),
    title: "Byzance et l'Europe carolingienne",
  },
  {
    image: require('./images/02.jpeg'),
    title: "La naissance et la diffusion de l'islam",
  },
  {
    image: require('./images/03.jpeg'),
    title: 'Seigneurs et paysans au Moyen Âge',
  },
  {
    image: require('./images/04.jpeg'),
    title: 'Les villes au Moyen Âge',
  },
  {
    image: require('./images/05.jpeg'),
    title: 'La féodalité et l’affirmation de l’État',
  },
  {
    image: require('./images/06.jpeg'),
    title: 'Le monde au XVIe siècle',
  },
  {
    image: require('./images/07.jpeg'),
    title: 'Humanisme, réformes et conflits religieux',
  },
  {
    image: require('./images/08.jpeg'),
    title: 'Du prince de la Renaissance au roi absolu',
  },
  {
    image: require('./images/09.jpeg'),
    title: 'La croissance démographique et ses effets',
  },
  {
    image: require('./images/10.jpeg'),
    title: 'Richesse et pauvreté dans le monde',
  },
];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  chapter: `Chapitre ${index + 1}`,
  title: `${data[index].title}`,
  image: `${data[index].image}`,
});

const getItemCount = data => DATA.length;

const Item = ({title, image, chapter}) => {
  console.log(title);
  return (
    <View style={styles.item}>
      <Card
        onPress={() => {
          this.props.navigation.navigate('Tow');
        }}>
        <ImageBackground source={image} style={styles.image}>
          <Text>{chapter}</Text>
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </Card>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <>
      <AppbarComponent />
      <View style={styles.container}>
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({item}) => (
            <Item
              title={item.title}
              image={item.image}
              chapter={item.chapter}
              key={item}
            />
          )}
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'black',
  },
  item: {
    height: 160,
    justifyContent: 'center',
    padding: 4,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
