import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    paddingLeft: 5,
    paddingRight: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D6DCEA',
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#495574',
    marginLeft: 10,
  },
});

export default styles;
