import Colors from '@/constants/Colors';
import { Text, TextProps } from './Themed';

const fontWeights: { [key: number]: string } = {
  1: 'PoppinsThin',
  2: 'PoppinsLight',
  3: 'PoppinsRegular',
  4: 'PoppinsMedium',
  5: 'PoppinsSemiBold',
  6: 'PoppinsBold',
  7: 'PoppinsExtraBold',
};

export function StyledText(props: TextProps) {
  const validatedWeight = (props.weight && props.weight >= 1 && props.weight <= 7) ? props.weight : 3;
  return <Text {...props} style={[props.style, { textAlign: 'center', fontFamily: fontWeights[validatedWeight], color: props.color?? Colors.white, fontSize: props.size?? 20}]} />;
}
