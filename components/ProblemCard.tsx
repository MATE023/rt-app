import { Card, Colors, Typography, View, Text, Badge } from 'react-native-ui-lib';

const ProblemCard: React.FC<{ title: string, difficulty: string }> = ({ title, difficulty }) => {
    return (
      <Card
        style={{ margin: 10, padding: 10 }}
        enableShadow
        borderRadius={10}
        backgroundColor={Colors.white}
        containerStyle={{ borderColor:"#B3E9C7", borderWidth: 2 }}
      >
        <View>
          <Text style={{ ...Typography.text60, color: Colors.dark10 }}>
            {title}
          </Text>
          <Badge label={difficulty} size={16} backgroundColor={Colors.dark} />
        </View>
      </Card>
    );
  };
  
  export default ProblemCard;