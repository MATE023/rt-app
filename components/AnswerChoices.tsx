import styles from '@/assets/Styles';
import { Answer } from '@/constants/Answer';
import { Question } from '@/constants/Question';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Colors, Typography, View, Text, Badge, RadioGroup, RadioButton } from 'react-native-ui-lib';

const AnswerChoices: React.FC<{ current: boolean, answerChoice: string, cAnswer: string, index: number, onAnswerClick: (option: string, correctAnswer: string, qIndex: number) => void}> = ({ current, answerChoice, cAnswer, index, onAnswerClick }) => {
    const [answerText, setAnswerText] = useState("");
    
    useEffect(() => {
        axios.get<Answer>(`https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/answers/${answerChoice}`)
        .then(response => {
            const a = response.data;
            setAnswerText(a.content);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
      }, [])
    
    
    return (
    <View>
        {(current) ? (
            <View >
                <RadioButton value={answerChoice} size={15} label={answerText} labelStyle={styles.answerChoiceText} onPress={() => onAnswerClick(answerChoice, cAnswer, index)}/>
            </View>  

            ) : (                                    
            <View>
                <RadioButton value={answerChoice} size={15} label={answerText} labelStyle={styles.answerChoiceText} onPress={() => onAnswerClick(answerChoice, cAnswer, index)}/>
            </View>  
            )}
    </View>
    );
  };
  
  export default AnswerChoices;