import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import PodcastPlayer from '../../components/PlayerSmall';
import SettingsItem from './SettingsItem';
import styles from './styles';

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  handleAvailablePodcastsToggle,
  handleIsCompactToggle,
  handleSortByToggle,
} from '../../store/toggleSlice';

const DATA = [
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
        image: require('../../images/podcast-image-1.png'),
      },
      {
        text: 'Overcome issues to meet key milestones',
        image: require('../../images/podcast-image-2.png'),
      },
      {
        text: 'Focus on the bandwidth',
        image: require('../../images/podcast-image-3.png'),
      },
      {
        text: 'Sell like it’s going out of fashion',
        image: require('../../images/podcast-image-4.png'),
      },
    ],
  },
];

const Settings = () => {
  const dispatch = useDispatch();

  const selectedView = useSelector((state: any) => state.state.isCompact);
  const sortBy = useSelector((state: any) => state.state.sortBy);
  const availablePodcasts = useSelector(
    (state: any) => state.state.availablePodcasts,
  );

  const checkedItems = [selectedView, sortBy, ...availablePodcasts];

  const handleIsChecked = (checkedItem: string, title: string) => {
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
