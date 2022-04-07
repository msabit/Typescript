import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
interface Props {
    text:string
    addItem: () => void
}
const AddButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.addItemButton} onPress={props.addItem}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:10,
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddButton;