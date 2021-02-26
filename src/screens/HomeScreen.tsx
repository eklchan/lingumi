import React, { useEffect, useState } from 'react';
import LessonCard from '../components/LessonCard';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [videoArray, setVideoArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    let responseData = await fetch(
      'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials',
    )
      .then((data) => data.json())
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
    setVideoArray(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.headerText}>Latest Videos</Text>
        }
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={10}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        data={videoArray}
        refreshing={isLoading}
        onRefresh={fetchData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <LessonCard lesson={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 21,
    paddingTop: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
});
