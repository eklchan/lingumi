import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Input, Item, Spinner, Badge, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LessonCard from '../components/LessonCard';
import { Ionicons } from '@expo/vector-icons';

interface Lesson {
  videoTitle: string;
  teacherName: string;
  averageUserRating: number;
  tags: Array<string>;
}

const SearchScreen = () => {
  const [videoArray, setVideoArray] = useState<Array<Lesson>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tagsArray, setTagsArray] = useState<Array<string>>([]);
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResultArray, setSearchResultArray] = useState<Array<Lesson>>([]);

  //Fetch Initial Data Array from API
  useEffect(() => {
    const fetchData = async () => {
      let responseData = await fetch(
        'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials',
      )
        .then((data) => data.json())
        .catch((error) => console.log(error));
      setVideoArray(responseData);
    };
    fetchData();
  }, []);

  // Render Tag Options once API fetch completed
  useEffect(() => {
    videoArray.forEach((video: Lesson) => {
      video.tags.forEach((tag: string) => {
        if (!tagsArray.includes(tag)) {
          setTagsArray([...tagsArray, tag]);
        }
      });
    });
    if (videoArray.length) {
      setIsLoading(false);
    }
  }, [tagsArray, videoArray]);

  //Render Tag Options
  const renderTagOptions = tagsArray.map((tag, i) => {
    const handleBadgePress = () => {
      console.log(tag);
      if (!selectedTags.includes(tag)) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        const deleteItemArray = selectedTags.filter((selectedTag) => {
          return tag !== selectedTag;
        });
        setSelectedTags(deleteItemArray);
      }
    };
    return (
      <TouchableOpacity key={i} onPress={handleBadgePress}>
        <Badge
          style={{
            backgroundColor: `${
              selectedTags.includes(tag) ? 'lightblue' : 'rgba(0,0,0,0.15)'
            }`,
            marginRight: 6,
            marginBottom: 5,
            padding: 1,
          }}
        >
          <Text style={styles.tagText}>{tag}</Text>
        </Badge>
      </TouchableOpacity>
    );
  });

  //Getting Search Results
  useEffect(() => {
    const getSearchResults = () => {
      let filteredArray: Array<Lesson> = [];
      if (selectedTags.length) {
        filteredArray = videoArray.filter((video) => {
          let includeTag = false;
          video.tags.forEach((tag) => {
            if (selectedTags.includes(tag)) {
              includeTag = true;
            }
          });
          if (includeTag) {
            return video;
          }
        });
      } else if (searchInput) {
        filteredArray = videoArray;
      }

      filteredArray = filteredArray.filter((video: Lesson) => {
        if (
          video.videoTitle.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          return video;
        }
      });

      const sortedArray = filteredArray.sort((a, b) => {
        return b.averageUserRating - a.averageUserRating;
      });

      setSearchResultArray(sortedArray.slice(0, 20));
    };

    getSearchResults();
  }, [selectedTags, videoArray, searchInput]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <View style={styles.container}>
        <Item>
          <Input
            onChangeText={(input) => {
              setSearchInput(input);
            }}
            placeholder="Enter Search Term"
            value={searchInput}
          />
          {!!searchInput && (
            <Button
              rounded
              transparent
              onPress={() => setSearchInput('')}
              style={styles.clearButton}
            >
              <Ionicons name="close" size={24} color="black" />
            </Button>
          )}
        </Item>
        <>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={styles.badgeContainer}>{renderTagOptions}</View>
                {!!searchResultArray.length && (
                  <Text style={styles.headerText}>Search Result:</Text>
                )}
              </>
            }
            maxToRenderPerBatch={5}
            initialNumToRender={5}
            windowSize={10}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            data={searchResultArray}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <LessonCard lesson={item} />
              </TouchableOpacity>
            )}
          />
        </>
      </View>
    );
  }
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: 14,
  },
  tagText: {
    textTransform: 'capitalize',
    padding: 3,
    fontSize: 13,
  },
  badgeContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerText: {
    fontSize: 18,
    paddingTop: 12,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  clearButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
