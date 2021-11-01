import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  episodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 12,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D6DCEA',
    alignItems: 'flex-end',
  },
  episodeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3548',
  },
  episodeDate: {
    fontSize: 14,
    color: '#7584A8',
  },
  episodeText: {
    fontSize: 14,
    color: '#4B4659',
  },
  episodeDot: {
    height: 11,
    width: 11,
    backgroundColor: '#96A4CA',
    borderRadius: 11,
    marginRight: 7,
    marginTop: 5,
  },
  episodeBlock: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  episodeArrow: {
    marginBottom: 10,
    marginLeft: 30,
  },
});

export default styles;
