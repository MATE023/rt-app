import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text, Checkbox, RadioButton, Button, RadioGroup, Badge } from 'react-native-ui-lib';
import { Problem } from '@/constants/Problem';
import { Solution } from '@/constants/Solution';
import { Question } from '@/constants/Question';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

export default function ProblemScreen() {
    const [isLoading, setLoading] = useState(true);
    const [loaded, error] = useFonts({
      'Proxima-Nova-Light': require('../../assets/fonts/Proxima-Nova/ProximaNova-Light.ttf'),
    });
    const [data, setData] = useState<Problem>(
        {
            id: "",
            title: "",
            description: "",
            difficulty: "",
            url: "",
            solutionIds: []
        }
    );
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
  
    const currentQuestion = questions[currentQuestionIndex];
  
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
    };
  
    const handleSubmit = () => {
      setShowResult(true);
    };
  
    const handleNextQuestion = () => {
      setShowResult(false);
      setSelectedOption(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        axios.get<Problem>('https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/problems/1')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        axios.get<Solution[]>('https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/problems/1/solutions')
        .then(response => {
            setSolutions(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        axios.get<Question[]>('https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/solutions/1/questions')
        .then(response => {
            setQuestions(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <ScrollView>
        <View>
            <Text>{data.title}</Text>
            <Text marginL-30 marginR-30 style={{ fontFamily: 'Proxima-Nova-Light' }}>{data.description}</Text>
            <Badge label={data.difficulty} size={16} backgroundColor='rgb(242, 242, 242)' labelStyle={{ color: '#000' }} borderColor="black"/>
            {/*solutions.map((item) => (
                <View key={item.id}>
                    <Text>{item.spaceComplexity} | {item.timeComplexity}</Text>
                    {questions.map((q) => (
                        <View key={q.id}>
                            <Text>{q.content}</Text>
                            <RadioGroup>
                            {q.answerChoices.map((choice) => (
                                <RadioButton selected={selectedOption === choice} value={choice} label={choice} 
                                onPress={() => handleOptionSelect(choice)}/>
                            ))}
                            </RadioGroup>
                        </View>
                    ))}
                </View>
            ))*/}
    {/*<Button onPress={handleSubmit}>
        Submit
      </Button>*/}
      {/*showResult && (
        <View>
          <Text>
            {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}
          </Text>
          {currentQuestionIndex < questions.length - 1 && (
            <Button onPress={handleNextQuestion}>
              Next Question
            </Button>
          )}
        </View>
      )*/}
    </View>
    </ScrollView>
  );
}
