import {StyleSheet} from 'react-native';
import {elevationShadowStyle} from '../../utils';

const styles = StyleSheet.create({
  portfolioContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
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
  badgeIcon: {
    color: '#fff',
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  tabBar: {
    backgroundColor: '#ebecee',
    ...elevationShadowStyle(0, 'transparent'),
  },
  tabLabel: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  tabIndicator: {
    width: 100,
    left: '13%',
    backgroundColor: '#88abeb',
  },
});

export default styles;
