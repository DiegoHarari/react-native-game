import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

interface Props {
  courseGoals?: Array<string>;
  onRemoveGoal: (text: string) => void;
}

const GoalItem: React.FC<Props> = ({courseGoals, onRemoveGoal}) => {
  return (
    <View>
      <FlatList
        data={courseGoals}
        keyExtractor={() => Math.random().toString()}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => onRemoveGoal(itemData.item)}>
              <Text>{itemData.item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 15,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
