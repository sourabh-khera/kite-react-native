import {StyleSheet} from 'react-native';
import {
  elevationShadowStyle,
  getImageWidthAndHeight,
  getPixelRatio,
} from '../../utils';

const kiteLogoAttributes = getImageWidthAndHeight(35, 30);
const ratio = getPixelRatio();

const styles = StyleSheet.create({
  loginSplashContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 0.5,
    backgroundColor: '#edf1fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlapContainer: {
    backgroundColor: '#fff',
    ...elevationShadowStyle(4),
    height: '50%',
    position: 'absolute',
    bottom: 35,
    left: 16,
    right: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 50,
    flexDirection: 'row',
    ...elevationShadowStyle(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: 50,
  },
  kiteLogo: {
    width: kiteLogoAttributes.width / ratio,
    height: kiteLogoAttributes.height / ratio,
  },
  loginText: {
    marginLeft: 7,
    color: '#868786',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 30,
    height: 20,
    alignItems: 'center',
  },
  accountText: {
    color: '#868786',
    fontSize: 11,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#1b33e8',
    marginLeft: 5,
    fontSize: 11,
    fontWeight: 'bold',
  },
  loginTermsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  termsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
});

export default styles;
