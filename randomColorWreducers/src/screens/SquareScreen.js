import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

  const reducer = (state) =>{
  }

  //instead of defining func instead of sqScr, convention is to define it outside of sqscr. 
  //Reason: arg to the reducer is our current "state" obj(its our obj thta has all the states inside of it). if we define reducer func inside of square screen, we refer to the first arg "const reducer = (state)" as "state" which is our state obj
  // So react will be confused with the state declaration ovre here "const [state, dispatch]"
  //This won't result in error, but it'll just be very confusing as there will be two different variables named state which will be floating around inside of ONE component
  
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
  //console.log(state);
  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
