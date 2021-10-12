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
  compactContainer: {
    flexDirection: 'row',
    height: 94,
    paddingRight: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D6DCEA',
    backgroundColor: 'white',
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
  },
  compactTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#39435B',
  },
  compactText: {
    fontSize: 14,
    color: '#39435B',
  },
  compactImage: {
    marginHorizontal: 20,
    height: 60,
    width: 60,
  },
  compactIcon: {
    height: 18,
    width: 16,
  },
});

export default styles;
