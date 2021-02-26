import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>HI there</Text>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
