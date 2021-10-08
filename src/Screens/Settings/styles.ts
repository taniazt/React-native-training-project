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
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 30,
    marginBottom: 355,
    backgroundColor: '#D6DCEA',
    height: 50,
  },
  buttonText: {
    color: '#536183',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default styles;
