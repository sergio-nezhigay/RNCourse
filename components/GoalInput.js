import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler, onCancelHandler, visible }) {
  const [enteredGoalText, setEnterGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.row}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={() => addGoalHandler(enteredGoalText)}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Cancel"
              onPress={onCancelHandler}
              color="#f312a2"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",

    padding: 8,
    borderWidth: 3,
    borderColor: "green",
  },
  row: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
