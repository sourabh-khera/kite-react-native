import { StyleSheet } from 'react-native';
import {
  elevationShadowStyle,
  getImageWidthAndHeight,
  getPixelRatio,
} from '../../utils';

const loaderAttributes = getImageWidthAndHeight(48, 48);
const ratio = getPixelRatio();

const styles = StyleSheet.create({
  boxDefaultStyles: {
    height: 294,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 294,
    backgroundColor: '#FBFBFB',
    ...elevationShadowStyle(8),
  },
  boxTitleDefaultStyles: {
    color: '#050401',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    marginTop: 10,
  },
  boxTextDefaultStyles: {
    color: '#C4C4C4',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  loaderIcon: {
    width: loaderAttributes.width / ratio,
    height: loaderAttributes.height / ratio,
  },
  anchorContainer: {
    flexDirection: 'row',
  },
});

export default styles;
