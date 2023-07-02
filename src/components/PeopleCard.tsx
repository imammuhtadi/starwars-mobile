import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../configs/styles';
import { People } from '../core';
import { useNavigation } from '@react-navigation/native';
import { DetailPageRoute } from '../presentation/Detail';

type PeopleCardProps = {
  people: People;
};

const PeopleCard: React.FC<PeopleCardProps> = props => {
  const { people } = props;

  const navigation = useNavigation<any>();

  const onMovieClick = () => {
    navigation.navigate(DetailPageRoute, { people: people });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onMovieClick}>
      <View style={styles.peopleDetail}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {people.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  peopleDetail: {
    flex: 1,
    maxWidth: '50%',
    padding: 16,
  },
  title: {
    color: Colors.primaryText,
    width: '100%',
    marginTop: 8,
    fontSize: 20,
  },
});
export default PeopleCard;