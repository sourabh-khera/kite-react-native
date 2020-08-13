import {StyleSheet} from 'react-native';
import {
  elevationShadowStyle,
  getImageWidthAndHeight,
  getPixelRatio,
} from '../../utils';

const smallcaseLogoAttributes = getImageWidthAndHeight(30, 30);
const smallcaseLogoView = getImageWidthAndHeight(60, 60);
const kiteLogoAttributes = getImageWidthAndHeight(60, 60);
const ratio = getPixelRatio();

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  childContainerOne: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainerTwo: {
    flex: 1,
    alignItems: 'center',
  },
  smallcaseLogoContainer: {
    height: smallcaseLogoView.height / ratio,
    width: smallcaseLogoView.width / ratio,
    borderRadius: 35,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  smallcaseLogo: {
    width: smallcaseLogoAttributes.width / ratio,
    height: smallcaseLogoAttributes.height / ratio,
  },
  smallcaseText: {
    color: '#4a4a4a',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  loginFormContainer: {
    borderRadius: 5,
    width: '90%',
    ...elevationShadowStyle(2),
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  kiteLogo: {
    width: kiteLogoAttributes.width / ratio,
    height: kiteLogoAttributes.height / ratio,
    marginTop: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginTop: 18,
    alignSelf: 'flex-start',
    marginLeft: 22,
    height: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkBoxText: {
    color: '#a5a5a5',
    fontSize: 12,
  },
  sharedText: {
    color: '#a5a5a5',
    fontSize: 11,
    marginTop: 5,
    alignSelf: 'flex-start',
    marginLeft: 55,
  },
  forgotText: {
    color: '#a5a5a5',
    fontSize: 10,
  },
  forgetButton: {
    marginTop: 10,
    paddingBottom: 20,
  },
  bookingText: {
    color: '#a5a5a5',
    fontSize: 9,
  },
  commnProps: {
    color: '#a5a5a5',
    fontSize: 10,
    marginTop: 15,
  },
  bookingTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  userIdError: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'center',
    width: '83%',
  },
  passwordError: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'center',
    width: '83%',
  },
});

export default styles;
