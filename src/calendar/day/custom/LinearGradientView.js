import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'Styles';

interface Props {
  style: any;
  children: any;
  startColor?: string;
  endColor?: string;
}
//渐进线组件
export default function LinearGradientView(props: Props) {
  const {
    children,
    startColor = '#ADE7A4',
    endColor = '#3CCC82',
    style,
  } = props;

  return (
    <LinearGradient
      style={style}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[startColor, endColor]}
    >
      {children}
    </LinearGradient>
  );
}
