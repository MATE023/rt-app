import { Problem } from "@/constants/Problem";
import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextField, Button, } from "react-native-ui-lib";

export default function createProblem() {
    const [problemInputValue, setProblemInputValue] = useState<Problem>({
        id: "",
        title: "",
        description: "",
        difficulty: "",
        url: "",
        solutionIds: []
    });
  
    const handleInputChange = (name: keyof Problem, value: string) => {
        setProblemInputValue({
          ...problemInputValue,
          [name]: value
        });
      };
    
      const handleSubmit = () => {
        console.log('Form Data:', problemInputValue);
        axios.post("https://rtapi-git-main-mateos-projects-b74250f3.vercel.app/problems", problemInputValue).then((response) => {
            console.log(response.status, response.data.token);
          });
      };

    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        <TextField
          placeholder="Title"
          value={problemInputValue.title}
          onChangeText={(text: string) => handleInputChange("title", text)}
          style={{ marginBottom: 12 }}
        />
        <TextField
          placeholder="Description"
          value={problemInputValue.description}
          onChangeText={(text: string) => handleInputChange("description", text)}
          style={{ marginBottom: 12 }}
        />
        <TextField
          placeholder="Difficulty"
          value={problemInputValue.difficulty}
          onChangeText={(text: string) => handleInputChange("difficulty", text)}
          style={{ marginBottom: 12 }}
        />
        <TextField
          placeholder="URL"
          value={problemInputValue.url}
          onChangeText={(text: string) => handleInputChange("url", text)}
          style={{ marginBottom: 12 }}
        />
        <Button label="Submit" onPress={handleSubmit} />
      </View>
    );
  };
