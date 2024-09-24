import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;  // to accept children components
  direction?: 'row' | 'col';  // Custom prop instead of `flexDirection`
  justify?: ViewStyle['justifyContent'];   // Custom prop instead of `justifyContent`
  align?: ViewStyle['alignItems'];         // Custom prop instead of `alignItems`
  bgColor?: ViewStyle['backgroundColor']; // Custom prop instead of `backgroundColor`
  style?: ViewStyle;  // Optional additional style to extend default styles
};

const Container = ({
  children,
  direction,
  justify = 'center',
  align = 'center',
  bgColor = 'transparent',
  style,
}: ContainerProps) => {
  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection: direction == 'row'? 'row' : 'column',  // Map custom `direction` prop to `flexDirection`
          justifyContent: justify,   // Map custom `justify` prop to `justifyContent`
          alignItems: align,         // Map custom `align` prop to `alignItems`
          backgroundColor: bgColor,  // Map custom `background` prop to `backgroundColor`
        },
        style, // Apply any additional styles passed
      ]}
    >
      {children}
    </View>
  );
};

export default Container;