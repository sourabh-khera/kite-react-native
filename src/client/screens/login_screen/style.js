import { StyleSheet } from 'react-native';
import {
  elevationShadowStyle,
  getImageWidthAndHeight,
  getPixelRatio,
} from '../../utils';

const kiteLogoAttributes = getImageWidthAndHeight(60, 60);
const ratio = getPixelRatio();

const styles = StyleSheet.create({
  loginSplashContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 33,
    marginRight: 33,
    flex: 1,
  },
  kiteLogo: {
    width: kiteLogoAttributes.width / ratio,
    height: kiteLogoAttributes.height / ratio,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 82,
  },
  orTextContainer: {
    flexDirection: 'row',
    marginTop: 11,
  },
  leftLine: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    flex: 1,
    alignSelf: 'center',
  },
  rightLine: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    flex: 1,
    alignSelf: 'center',
  },
  orText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '500',
    marginRight: 2,
    marginLeft: 3,
    color: '#C4C4C4',
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  signUpText: {
    color: '#C4C4C4',
  },
  loginButton: {
    ...elevationShadowStyle(9, '#0061E7'),
  },
});

export default styles;
