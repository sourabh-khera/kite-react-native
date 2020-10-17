import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentListContainer: {
    height: 90,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  contentLeftPart: {
    flex: 1,
    marginLeft: 13,
    justifyContent: 'space-evenly',
  },
  contentRightPart: {
    flex: 1,
    marginRight: 13,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  quantityAvgContainer: {
    flexDirection: 'row',
  },
  ltpContainer: {
    flexDirection: 'row',
  },
  bullet: {
    borderColor: '#000',
    borderRadius: 10,
    width: 4,
    height: 4,
    borderWidth: 2,
    marginTop: 6,
    marginRight: 5,
    marginLeft: 5,
  },
  contentLeftPartLeftText: {
    color: '#c5c5c9',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  contentLeftPartRightText: {
    color: '#434446',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentLeftPartMiddleText: {
    color: '#434446',
    fontSize: 13,
    fontWeight: 'bold',
  },
  contentRightPartTextCommon: {
    color: '#c8939b',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentRightPartMiddleText: {
    color: '#c8939b',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default styles;
