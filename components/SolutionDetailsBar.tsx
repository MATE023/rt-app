import styles from '@/assets/Styles';
import { Solution } from '@/constants/Solution';
import axios from 'axios';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native-ui-lib';

const SolutionDetailsBar: React.FC<{ solutionId: string }> = ({ solutionId }) => {
    const [loaded, error] = useFonts({
        'Proxima-Nova-Light': require('../assets/fonts/Proxima-Nova/ProximaNova-Light.ttf'),
        'Proxima-Nova-Regular': require('../assets/fonts/Proxima-Nova/ProximaNova-Regular.ttf'),
        'Proxima-Nova-Semibold': require('../assets/fonts/Proxima-Nova/ProximaNova-Semibold.ttf'),
      });
    const [timeComplexity, setTimeComplexity] = useState("");
    const [spaceComplexity, setSpaceComplexity] = useState("");

    useEffect(() => {
      axios.get<Solution>(`https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/solutions/${solutionId}`)
      .then(response => {
          const s = response.data;
          setTimeComplexity(s.timeComplexity);
          setSpaceComplexity(s.spaceComplexity);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
      var temp = [];
    }, [])


    return (
      <View style={styles.solutionDetailsBar}>
        <Text style={styles.solutionDetailsBarText}>
            Time Complexity: {timeComplexity} | Space Complexity: {spaceComplexity}
        </Text>
        <Text style={styles.solutionDetailsBarText}>
            Topics: 
        </Text>
      </View>
    );
  };
  
  export default SolutionDetailsBar;