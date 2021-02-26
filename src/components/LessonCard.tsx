import React from 'react';
import { Badge, Card } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';
import lingumi from '../../assets/lingumi.png';

interface Props {
  lesson: {
    videoTitle: string;
    teacherName: string;
    averageUserRating: number;
    tags: Array<string>;
  };
}

const LessonCard = ({ lesson }: Props) => {
  const renderTags = lesson.tags.map((tag: string, i: number) => {
    return (
      <Badge style={styles.badges} key={i}>
        <Text style={styles.tagText}>{tag}</Text>
      </Badge>
    );
  });

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Card style={styles.card}>
        <View style={styles.stationContainer}>
          <Text style={styles.videoTitle}>{lesson.videoTitle}</Text>
          <Text>Teacher: {lesson.teacherName}</Text>
          <Text>Rating: {(lesson.averageUserRating * 10).toFixed(1)}</Text>
          <View style={styles.tagWrap}>{renderTags}</View>
        </View>
        <View>
          <Image source={lingumi} style={styles.lingumi} />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default LessonCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    marginHorizontal: 15,
  },
  stationContainer: {
    width: 240,
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    height: 160,
    width: '99%',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lingumi: {
    height: 85,
    width: 85,
  },
  badges: {
    marginRight: 5,
    marginBottom: 5,
    padding: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  tagText: {
    textTransform: 'capitalize',
    padding: 1,
    fontSize: 11,
  },
  tagWrap: {
    marginTop: 3,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
