import { StyleSheet } from 'react-native';
import { elevationShadowStyle } from '../../utils';

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
    marginLeft: 39,
    marginRight: 39,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plContainerLeftPart: {
    justifyContent: 'center',
  },
  plContainerRightPart: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '40%',
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
    marginRight: 39,
    marginLeft: 39,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
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
