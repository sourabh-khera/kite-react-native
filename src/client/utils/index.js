import {PixelRatio} from 'react-native';
import {object, string} from 'yup';

export const getImageWidthAndHeight = (w, h) => {
  const image = {
    width: PixelRatio.getPixelSizeForLayoutSize(w),
    height: PixelRatio.getPixelSizeForLayoutSize(h),
  };
  return image;
};

export const getPixelRatio = () => {
  let pixelRatio = PixelRatio.get();
  return pixelRatio;
};

export const elevationShadowStyle = (elevation, color = 'black') => {
  return {
    elevation,
    shadowColor: color,
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
};

export const loginValidationSchema = object().shape({
  userId: string().email('Invalid email').required('Required!'),
  password: string().lowercase().trim().required('Required!'),
});
