import { StyleSheet } from 'react-native';
import { elevationShadowStyle } from '../../utils';

const styles = StyleSheet.create({
  portfolioContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  headerHeadingContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    marginRight: 13,
    marginLeft: 13,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#434446',
  },
  tabBarLabel: {
    borderColor: '#88abeb',
    borderRadius: 10,
    width: 18,
    height: 18,
    borderWidth: 2,
    backgroundColor: '#88abeb',
    marginLeft: 3,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#ebecee',
    ...elevationShadowStyle(0, 'transparent'),
  },
  tabLabel: {
    textTransform: 'none',
    fontSize: 16,
  },
  tabIndicator: {
    width: '25%',
    left: '13%',
    backgroundColor: '#0075d2',
  },
});

export default styles;
