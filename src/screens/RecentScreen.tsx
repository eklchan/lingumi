import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RecentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>HI there</Text>
    </View>
  );
};

export default RecentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
