import React from 'react';

import { Text, ScrollView, StyleSheet } from "react-native";
import { RouteProp, useRoute } from '@react-navigation/native';
import { ParamsTypes } from '../routes';
import { Colors } from 'src/configs/styles';

export const DetailPageRoute = 'detail';

const DetailPage: React.FC = () => {
  const route = useRoute<RouteProp<ParamsTypes, 'detail'>>();

  const { people } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Name: {people.name}</Text>
      <Text style={styles.text}>Height: {people.height}</Text>
      <Text style={styles.text}>Mass: {people.mass}</Text>
      <Text style={styles.text}>Hair Color: {people.hair_color}</Text>
      <Text style={styles.text}>Skin Color: {people.skin_color}</Text>
      <Text style={styles.text}>Eye Color: {people.eye_color}</Text>
      <Text style={styles.text}>Birth Year: {people.birth_year}</Text>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.background,
    padding: 16,
  },
  titleText: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
  },
});

export default DetailPage;