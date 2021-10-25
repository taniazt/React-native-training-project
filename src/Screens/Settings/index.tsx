import React from 'react';
import {
  Image,
  ImageSourcePropType,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import PodcastPlayer from '../../components/PlayerSmall';
import {
  PodcastImage1,
  PodcastImage2,
  PodcastImage3,
  PodcastImage4,
} from '../../images';
import {
  selectAvailablePodcasts,
  selectIsCompact,
  selectSortBy,
} from '../../store/selectors';
import {
  handleAvailablePodcastsToggle,
  handleIsCompactToggle,
  handleSortByToggle,
} from '../../store/toggleSlice';

import SettingsItem from './SettingsItem';
import styles from './styles';

type DataItem = {
  title: titleTypes;
  data: DataSubitem[];
};
type DataSubitem = {
  text: string;
  image?: ImageSourcePropType;
};

const DATA: DataItem[] = [
  {
    title: 'LIST VIEW',
    data: [{text: 'Compact'}, {text: 'Cards'}],
  },
  {
    title: 'SORT BY',
    data: [
      {text: 'Unplayed on top'},
      {text: 'Newest on top'},
      {text: 'Alphabetically'},
    ],
  },
  {
    title: 'AVAILABLE PODCASTS',
    data: [
      {
        text: 'Podcast Title',
        image: PodcastImage1,
      },
      {
        text: 'Overcome issues to meet key milestones',
        image: PodcastImage2,
      },
      {
        text: 'Focus on the bandwidth',
        image: PodcastImage3,
      },
      {
        text: 'Sell like it’s going out of fashion',
        image: PodcastImage4,
      },
    ],
  },
];
type titleTypes = 'LIST VIEW' | 'SORT BY' | 'AVAILABLE PODCASTS';
const Settings = () => {
  const dispatch = useDispatch();

  const selectedView = useSelector(selectIsCompact);
  const sortBy = useSelector(selectSortBy);
  const availablePodcasts = useSelector(selectAvailablePodcasts);

  const checkedItems = [selectedView, sortBy, ...availablePodcasts];

  const handleIsChecked = (checkedItem: string, title: titleTypes) => {
    switch (title) {
      case 'LIST VIEW':
        dispatch(handleIsCompactToggle({isCompact: checkedItem}));
        break;
      case 'SORT BY':
        dispatch(handleSortByToggle({sortBy: checkedItem}));
        break;
      case 'AVAILABLE PODCASTS':
        dispatch(handleAvailablePodcastsToggle({podcastName: checkedItem}));
        break;
      default:
        'LIST VIEW';
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.text + index}
          renderItem={({item, section}) => (
            <SettingsItem
              item={item}
              isChecked={checkedItems.includes(item.text)}
              onPress={() => handleIsChecked(item.text, section.title)}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.itemTitle}>{title}</Text>
          )}
          ListFooterComponent={
            <>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </>
          }
        />
      </View>
      <View>
        <PodcastPlayer />
      </View>
    </View>
  );
};

export default Settings;
