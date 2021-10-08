import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#495574',
    height: 55,
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 16,
  },
  headerIcon: {
    position: 'absolute',
    right: 18,
    top: 18,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingTop: 15,
  },
  scrollViewContainer: {
    paddingBottom: 102,
  },
  podcastContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 30,
    height: 315,
    justifyContent: 'flex-end',
  },
  podcastImage: {
    borderRadius: 12,
  },
  podcastTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#39435B',
    marginBottom: 8,
  },
  podcastIcon: {
    paddingLeft: 11,
  },
  podcastText: {
    fontSize: 18,
    color: '#39435B',
  },
});

export default styles;
