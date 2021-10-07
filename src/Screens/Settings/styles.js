import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingRight: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#D6DCEA',
  },
  itemTitle: {
    fontSize: 14,
    color: '#7584A8',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderBottomColor: '#D6DCEA',
  },
  itemText: {
    fontSize: 14,
    color: '#39435B',
    paddingLeft: 25,
  },
  itemImage: {
    height: 56,
    width: 56,
  },
});

export default styles;
