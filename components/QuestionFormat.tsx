import styles from '@/assets/Styles';
import { Question } from '@/constants/Question';
import { Card, Colors, Typography, View, Text, Badge, RadioGroup, RadioButton } from 'react-native-ui-lib';

const QuestionFormat: React.FC<{ question: Question }> = ({ question }) => {
    return (
        <View>
        <View style={styles.questionSection}>
        <Text style={styles.questionsText}>{question.content}</Text>
      </View>
      <View style={styles.answerChoicesSection}>
        <RadioGroup>
{/*TODO: set answer choice to have id<View key={choice.id}></View>*/}
        {question.answerChoices.map((choice) => (
            <RadioButton value={choice} size={15} label={choice} labelStyle={styles.answerChoiceText} onPress={() => handleOptionSelect(choice)}/>
        ))}
        </RadioGroup>
      </View>
      </View>
    );
  };
  
  export default QuestionFormat;