import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

    state = {
            placeName: "",
            places: []
        };

    placeNameChangedHandler = val => {

        this.setState({
             placeName: val
         });
    };

    placeSubmitHandler =  () => {
        if (this.state.placeName.trim() === ""){
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            };
        });
    };

  render() {
      const placesOutput = this.state.places.map((place, i) =>
          <Text key={i}>{place}</Text>
      );
    return (
      <View style={styles.container}>
          <View style={styles.inputViewContainer}>
              <TextInput style={styles.addPlaceInput}
                         placeholder='Add A Awesome Place Buddy'
                         value={this.state.placeName}
                         onChangeText={this.placeNameChangedHandler} />
              <Button
                  onPress={this.placeSubmitHandler}
                  style={styles.button}
                  title="Add"  />
          </View>
          <View>
              {placesOutput}
          </View>
      </View>
    );
  }
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
      padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
    inputViewContainer: {
     //  flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addPlaceInput: {
        width: "80%"
    },
    button:{
        width: "20%"
    }
});
