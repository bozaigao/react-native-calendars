import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.dot';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dot: {
      width: 6,
      height: 6,
      marginTop: 1,
      marginHorizontal: 1,
      borderRadius: 3,
      opacity: 0,
      ...appStyle.dotStyle,
      position:'absolute',
      top:3,
      right:3
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
