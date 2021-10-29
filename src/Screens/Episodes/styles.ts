import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  podcastContainer: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  podcastTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495574',
    marginBottom: 28,
  },
  podcastText: {
    fontSize: 16,
    color: '#39435B',
  },
  toggleContainer: {
    padding: 5,
    height: 55,
    backgroundColor: '#AEB9D6',
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: '#2D3548',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  selectedButtonText: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: 14,
  },
  nonSelectedButton: {
    backgroundColor: '#AEB9D6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSelectedButtonText: {
    fontWeight: '500',
    color: '#2D3548',
    fontSize: 14,
  },
});

export default styles;
