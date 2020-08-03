import {StyleSheet} from 'react-native';
import {elevationShadowStyle} from '../../utils';
const styles = StyleSheet.create({
  portfolioContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.8,
    backgroundColor: '#ebecee',
  },
  headerHeadingContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    marginRight: 13,
    marginLeft: 13,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#434446',
  },
  contentContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
  overlapContainer: {
    height: 120,
    borderRadius: 5,
    position: 'absolute',
    top: 150,
    left: 13,
    right: 13,
    backgroundColor: '#fff',
    ...elevationShadowStyle(4),
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  plContainerRightPartText: {
    color: '#c8939b',
    fontSize: 18,
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
    borderBottomWidth: 2,
  },
  investmentContainerLeftPart: {
    flex: 1,
    justifyContent: 'center',
  },
  investmentContainerRightPart: {
    flex: 1,
    justifyContent: 'center',
  },
  investmentContainerText: {
    color: '#c5c5c9',
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  investmentContainerNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#434446',
  },
});

export default styles;
