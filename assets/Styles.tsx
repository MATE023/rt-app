import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  problemBadge: {
    width: 25,
    marginTop: 10,
    marginLeft: 10,
  },
  badgeLabel: {
    color: '#000000',
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#8367C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSection: {
    margin: 10,
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingBottom: 10,
  },
  solutionButtonText: {
    marginTop: 100,
    color: '#786666',
  },
  selectedSolutionButtonText: {
    marginTop: 100,
  },
  solutionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  solutionDetailsBar: {
    marginBottom: 10,

  },
  solutionDetailsBarText: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  questionsBox: {
    borderColor: '#FAF9F6',
    borderWidth: 2,
    padding: 14,
    marginLeft: 6, 
    marginRight: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionsText: {
    color: '#41AA68',
    //fontFamily: 'Proxima-Nova-Light',
  },
  questionSection: {
    padding: 5,
  },
  answerChoicesSection: {
    padding: 5,
  },
  answerChoiceText: {
    color: '#B577EC',
  }
})

export default styles;