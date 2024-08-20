import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-ui-lib';
import ProblemCard from '@/components/ProblemCard';
import { Problem } from '@/constants/Problem';

export default function ProblemsScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Problem[]>([]);
  /*
    const getProblems = async () => {
      try {
        const response = await fetch('https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/problems');
        const json = await response.json();
        console.log(json[0].title);
        setData(json.problems);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
        getProblems();
      }, []);
*/
    useEffect(() => {
        axios.get<Problem[]>('https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/problems')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <View style={{flex: 1, padding: 24}}>
            {data.map((item) => (
                <View key={item.id}>
                    <ProblemCard title={item.title} difficulty={item.difficulty}/>
                </View>
            ))}
    </View>
  );
}
