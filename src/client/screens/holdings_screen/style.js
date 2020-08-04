import {StyleSheet} from 'react-native';
import {elevationShadowStyle} from '../../utils';

const styles = StyleSheet.create({
  holdingsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  extendedHeader: {
    height: 72,
    backgroundColor: '#ebecee',
  },
  contentContainer: {
    flex: 1,
  },
  overlapContainer: {
    height: 120,
    borderRadius: 5,
    position: 'absolute',
    top: 14,
    left: 13,
    right: 13,
    backgroundColor: '#fff',
    ...elevationShadowStyle(3),
  },
  plContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 13,
    marginRight: 13,
  },
  plContainerLeftPart: {
    justifyContent: 'center',
    flex: 1,
  },
  plContainerRightPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plContainerLeftPartText: {
    color: '#c5c5c9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  plContainerRightPartText: {
    color: '#c8939b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  plContainerRightPartTextSmall: {
    color: '#c8939b',
    fontSize: 13,
    fontWeight: 'bold',
  },
  investmentContainer: {
    flex: 1.5,
    flexDirection: 'row',
    marginRight: 13,
    marginLeft: 13,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 3,
  },
  actionContainer: {
    flexDirection: 'row',
    height: 105,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default styles;
