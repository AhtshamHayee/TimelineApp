import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useLikeTweet from '../hooks/useLikeTweet';
import useUnlikeTweet from '../hooks/useUnlikeTweet';

const ListItem = ({
  id,
  avatar,
  username,
  name,
  content,
  timestamp,
  likesCount,
  repliesCount,
  onLike,
  toggle,
  onToggle,
}) => {
  const [likeTweet] = useLikeTweet();
  const [unlikeTweet] = useUnlikeTweet();
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: avatar,
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name} </Text>
          <Text style={styles.username}>{`@${username}`} </Text>
          <Text style={styles.username}>· {moment(timestamp).fromNow()} </Text>
        </View>
        <View style={styles.content}>
          {content ? <Text style={styles.text}>{content}</Text> : null}
        </View>

        <View style={styles.social}>
          <View style={styles.countContainer}>
            <AntDesign
              name="message1"
              size={16}
              color="darkgrey"
              onPress={() => console.log('hello')}
            />
            <Text style={styles.countText}>{repliesCount}</Text>
          </View>
          <AntDesign
            name="retweet"
            size={16}
            color="darkgrey"
            onPress={() => console.log('hello')}
          />
          <TouchableOpacity
            style={styles.countContainer}
            onPress={() => {
              onLike(id);
              if (!toggle) {
                likeTweet(id);
                setLiked(true);
              } else {
                setLiked(false);
                unlikeTweet(id);
              }

              onToggle(!toggle);
            }}>
            {liked ? (
              <AntDesign name={'heart'} size={16} color={'rgb(224, 36, 94)'} />
            ) : (
              <AntDesign name={'hearto'} size={16} color="darkgrey" />
            )}
            {liked ? (
              <Text style={styles.countText}>{likesCount + 1}</Text>
            ) : (
              <Text style={styles.countText}>{likesCount}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="stats-chart" type="stats-chart" color="darkgrey" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="sharealt" size={16} color="darkgrey" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  avatar: {
    margin: 10,
  },
  rightContainer: {
    flex: 1,
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  content: {
    marginBottom: 10,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  username: {
    color: 'darkgrey',
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 70,
    marginBottom: 10,
  },
  text: {marginBottom: 10},
  countText: {left: 5, fontSize: 12},
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    borderRadius: 10,
  },
});
export default ListItem;
