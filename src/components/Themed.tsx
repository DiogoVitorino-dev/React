import { Text as DefaultText, View as DefaultView } from 'react-native';
import Colors from '../constants/Colors';

interface CustomViewProps {
	backgroundColor?:string
}

interface CustomTextProps {
	color?:string
  fontFamily?:string
}

export type TextProps = DefaultText['props'] & CustomTextProps;
export type ViewProps = DefaultView['props'] & CustomViewProps;

export function Text(props: TextProps) {
	const {style, color, fontFamily, ...otherProps} = props
  const colorText = color || Colors.text
  const fontFamilyText = fontFamily || "OpenSans"
  return <DefaultText style={[style,{color:colorText,fontFamily:fontFamilyText}]} {...otherProps} />;
}

export function View(props: ViewProps) {
	const {style, backgroundColor, ...otherProps} = props
  const bgColor = backgroundColor || Colors.background
  return <DefaultView style={[style,{backgroundColor: bgColor}]} {...otherProps} />;
}
