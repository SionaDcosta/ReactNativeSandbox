import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//action= how to change state obj
const reducer = (state, action) =>{ 
  //state === { red: number, green: number, blue: number}
  //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  // When we want to change the property inside our state ob, we are going to rebuild that entire state obj from scratch and that new obj will have the changed value of r/g/b that we want

  switch(action.colorToChange){
    case 'red':
      return { ...state, red: state.red + action.amount };
      // made a copy of the state var i.e return {red:0, green:0, blue:0}, 
      //then took red and redefined it( added amt to it) in the RHS of the existing obj, red will now be verwritten with the new value . This way Org state var will not be changed
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {

  //instead of defining func instead of sqScr, convention is to define it outside of sqscr. 
  //Reason: arg to the reducer is our current "state" obj(its our obj thta has all the states inside of it). if we define reducer func inside of square screen, we refer to the first arg "const reducer = (state)" as "state" which is our state obj
  // So react will be confused with the state declaration ovre here "const [state, dispatch]"
  //This won't result in error, but it'll just be very confusing as there will be two different variables named state which will be floating around inside of ONE component
  
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0}) //All 3 state objs are combined into one i.e "state" var (beside dispatch)
  //1st arg i.e reducer is func here
  // dispatch :- runs my reducer . this should be called with an appropriate action obj
  //console.log(state);
  const {red, green, blue} = state;//you can also destructure state inside that array itself:- const [{ red, green, blue }, dispatch]
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange:'red', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ colorToChange:'red', amount: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange:'blue', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ colorToChange:'blue', amount: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange:'green', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ colorToChange:'green', amount: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          //R/G/B are no longer defined inside our component but they are nested inside the "state" obj
          // option1: backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
          //option2: to use destructuring:- const {red, green, blue} = state;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
