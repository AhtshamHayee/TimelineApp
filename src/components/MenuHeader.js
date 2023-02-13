import React, {useContext} from 'react';

import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Card, Button, Avatar, Header} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const MenuHeader = ({user, navigation, title}) => {
  const {profile} = user;
  return (
    <View>
      <Header
        barStyle="light-content"
        leftComponent={
          <TouchableOpacity onPress={() => {}}>
            <Avatar
              rounded
              size="small"
              source={{
                uri: profile ? profile.avatar.filename : null,
              }}
            />
          </TouchableOpacity>
        }
        centerComponent={
          title ? (
            <Text style={styles.text}>{title}</Text>
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome5 name="paw" size={20} color="#1DA1F2" />
            </TouchableOpacity>
          )
        }
        rightComponent={<Feather name="star" size={20} color="#1DA1F2" />}
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          height: 50,
          paddingTop: 0,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
});
export default MenuHeader;
