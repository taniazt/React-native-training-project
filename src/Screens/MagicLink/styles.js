import {StyleSheet} from 'react-native';

const verificationStyles = StyleSheet.create({
  verificationContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  verificationTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  verificationText: {
    color: '#39435B',
    fontSize: 16,
    lineHeight: 22,
    alignSelf: 'center',
    paddingHorizontal: 45,
  },
  verificationButton: {
    backgroundColor: '#39435B',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default verificationStyles;
