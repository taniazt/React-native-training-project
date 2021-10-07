import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
  },
  loginInput: {
    height: 50,
    backgroundColor: '#F5F6FA',
    borderWidth: 1,
    borderColor: '#D6DCEA',
    borderRadius: 3,
    marginBottom: 30,
    marginTop: 9,
    paddingHorizontal: 20,
  },
  loginButton: {
    backgroundColor: '#39435B',
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default loginStyles;
