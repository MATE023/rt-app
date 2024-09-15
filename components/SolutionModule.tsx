import styles from '@/assets/Styles';
import { Answer } from '@/constants/Answer';
import { Question } from '@/constants/Question';
import axios from 'axios';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import AnswerChoices from './AnswerChoices';
import { ReactTyped } from 'react-typed';

const SolutionModule: React.FC<{ sId: string }> = ({ sId }) => {
    const [loaded, error] = useFonts({
        'Proxima-Nova-Light': require('../assets/fonts/Proxima-Nova/ProximaNova-Light.ttf'),
        'Proxima-Nova-Regular': require('../assets/fonts/Proxima-Nova/ProximaNova-Regular.ttf'),
        'Proxima-Nova-Semibold': require('../assets/fonts/Proxima-Nova/ProximaNova-Semibold.ttf'),
    });
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [currAnswer, setCurrAnswer] = useState("");

    const handleOptionSelect = (option: string, correctAnswer: string, qIndex: number) => {
        if(qIndex == currentQuestionIndex){
          setSelectedOption(option);
          if(selectedOption == correctAnswer) {
            //handleSubmit();
            handleNextQuestion();
          }
        }
      };
    
      //const handleSubmit = () => {
      //  setShowResult(true);
      //};
    
      const handleNextQuestion = () => {
        //setShowResult(false);
        setSelectedOption(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      };

      function getAnswer(answerId: string) 
      {
        axios.get<Answer>(`https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/answers`)
        .then(response => {
             setCurrAnswer(response.data.content);
             return response.data.content;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return "";
        });
        return "";
      };

    useEffect(() => {
      axios.get<Question[]>(`https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/solutions/${sId}/questions`)
      .then(response => {
          setQuestions(response.data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
      var temp = [];
      /*
      questions.map((que) => (
        que.answerChoiceIds.map((id) => (
          axios.get<Answer[]>(`https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/answers/${id}`)
          .then(response => {
              temp
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
        ))
      ))*//*
      axios.get<Answer[]>(`https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/answers`)
      .then(response => {
          setAnswers(response.data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });*/
    }, [])

    return (
        <View padding-20 bg-grey70 br40 style={styles.questionsBox}>
        <View>
              {questions.map((q, questionIndex) => (
                            <View key={q.id}>
                              {(questionIndex <= currentQuestionIndex) ? (
                                        <View>
                                        <View style={styles.questionSection}>
                                        <Text style={styles.questionsText}> <ReactTyped strings={[q.content]} typeSpeed={40} showCursor={false}/></Text>
                                      </View>
                                      {/*disables questions if its already correct*/}
                                      {(questionIndex < currentQuestionIndex) ? (
                                      <View style={styles.answerChoicesSection}>
                                        <RadioGroup>
                          
                                        {q.answerChoiceIds.map((choice) => (
                                          <View key={choice}>
                                            <AnswerChoices current={(questionIndex <= currentQuestionIndex)} answerChoice={choice} cAnswer={q.correctAnswer} index={questionIndex} onAnswerClick={handleOptionSelect}/> 
                                          </View>
                                        ))}
                                        </RadioGroup>                                      
                                      </View>
                                      ) : (                                    
                                      <View style={styles.answerChoicesSection}>
                                        <RadioGroup>
                                          {q.answerChoiceIds.map((choice) => (
                                            <View key={choice}>
                                              <AnswerChoices current={(questionIndex <= currentQuestionIndex)} answerChoice={choice} cAnswer={q.correctAnswer} index={questionIndex} onAnswerClick={handleOptionSelect}/> 
                                            </View>
                                        ))}
                                        </RadioGroup>                                      
                                      </View>)}
                                      <Text style={styles.answerChoiceText}><ReactTyped strings={[q.correctAnswer]} typeSpeed={40} showCursor={false}/></Text>
                                      </View>
                                ) : (<></>)}
                            </View>
                ))}
        </View>
      </View>
    );
  };
  
  export default SolutionModule;