import styles from '@/assets/Styles';
import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';

const SolutionButton: React.FC<{ solutionId: string }> = ({ solutionId }) => {

    return (
        <View key={solutionId}>
            {/*<TouchableOpacity style={styles.circle} onPress={() => handleSolutions(solutionId)}>*/}
            <TouchableOpacity>
            <Text style={styles.solutionButtonText}>Solution {solutionId}</Text>
            </TouchableOpacity>
        </View>
    );
  };
  
  export default SolutionButton;