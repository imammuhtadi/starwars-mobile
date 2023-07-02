import React, { useEffect, useState } from 'react';

import { FlatList } from "react-native";
import PeopleCard from 'src/components/PeopleCard';
import { Colors } from 'src/configs/styles';
import { People } from 'src/core/entities';
import { PeopleService } from 'src/core/services/apiService';
import { PeopleInteractor } from 'src/core/useCases/peopleInteractor';

export const HomePageRoute = 'home';

const HomePage: React.FC = () => {

  const [data, setData] = useState<People[]>([]);

  useEffect(() => {
    const service = new PeopleService();
    const interactor = new PeopleInteractor(service);
    interactor.getPeople().then((people) => {
      setData(people);
    });
  }, []);

  const renderPeople = ({ item }: { item: People }) => {
    return <PeopleCard
      people={item}
    />
  };

  return (
    <FlatList
      style={{ backgroundColor: Colors.background }}
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(people: People) => people.name}
      renderItem={renderPeople}
    />
  )
};

export default HomePage;