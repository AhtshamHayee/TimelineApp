import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from '../components/ListItem';
import {Context as TimeLineContext} from '../context/timeLineContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const {
    state: timelineState,
    fetchTimeline,
    reset,
  } = useContext(TimeLineContext);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    fetchTimeline(page);
    return () => {};
  }, []);

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? <ActivityIndicator color="#1DA1F2" size={10} /> : null}
      </View>
    );
  };

  const onEndReached = async () => {
    setPage(page + 1);
    fetchTimeline(page + 1);
    if (
      timelineState.timeline.data.length === timelineState.timeline.totalPosts
    ) {
      setLoading(false);
    }
  };

  const onLike = id => {
    if (!toggle) {
      let items = likes.filter(x => x != id);
      setLikes(items);
    } else {
      let items = [...likes, id];
      setLikes(items);
    }
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={timelineState.timeline.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity key={index}>
              <ListItem
                key={index}
                avatar={item.user.profile_image_url}
                id={item.id}
                username={item.user.first_name}
                name={item.user.first_name}
                content={item.text}
                timestamp={item.created_at}
                likesCount={item.likes_count}
                repliesCount={item.replies_count}
                likes={likes}
                onLike={onLike}
                toggle={toggle}
                onToggle={setToggle}
              />
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={ItemSeparatorView}
        ListFooterComponent={renderFooter}
        onEndReached={() => onEndReached()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 0,
    margin: 0,
  },
  tweet: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
