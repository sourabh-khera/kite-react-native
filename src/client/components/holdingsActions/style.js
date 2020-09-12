import { StyleSheet } from 'react-native';

const commonProperties = {
  alignItems: 'center',
  width: 100,
  height: 40,
  flexDirection: 'row',
};

const styles = StyleSheet.create({
  searchContainer: {
    marginLeft: 13,
    ...commonProperties,
  },
  filterContainer: {
    marginRight: 13,
    justifyContent: 'flex-end',
    ...commonProperties,
  },
  actionIcon: {
    paddingRight: 5,
  },
  actionText: {
    color: '#0075d2',
    fontSize: 12,
  },
});

export default styles;
