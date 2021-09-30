/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
      {text: 'Podcast Title', image: require('../images/podcast-image-1.png')},
      {
        text: 'Overcome issues to meet key milestones',
        image: require('../images/podcast-image-2.png'),
      },
      {
        text: 'Focus on the bandwidth',
        image: require('../images/podcast-image-3.png'),
      },
      {
        text: 'Sell like it’s going out of fashion',
        image: require('../images/podcast-image-4.png'),
      },
    ],
  },
];

const SettingsItem = ({item}: {item: any}) => {
  const [isChecked, setIsChecked] = useState(true);
  const toggle = () => setIsChecked(!isChecked);

  return (
    <TouchableOpacity onPress={toggle} style={styles.item}>
      {item.image && <Image style={styles.itemImage} source={item.image} />}
      <View style={{flex: 1, flexDirection: 'row', alignContent: 'flex-start'}}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
      <View style={{height: '100%', justifyContent: 'center'}}>
        {isChecked && <FeatherIcon name="check" size={18} color="#7584A8" />}
      </View>
    </TouchableOpacity>
  );
};

const Settings = () => (
  <SectionList
    sections={DATA}
    keyExtractor={(item, index) => item.text + index}
    renderItem={({item}) => <SettingsItem item={item} />}
    renderSectionHeader={({section: {title}}) => (
      <Text style={styles.itemTitle}>{title}</Text>
    )}
    ListFooterComponent={
      <>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginHorizontal: 30,
            marginBottom: 355,
            backgroundColor: '#D6DCEA',
            height: 50,
          }}>
          <Text style={{color: '#536183', fontWeight: '700', fontSize: 20}}>
            SAVE
          </Text>
        </TouchableOpacity>
      </>
    }
  />
);

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
});

export default Settings;
