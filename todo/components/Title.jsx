import { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';


export default function Title() {

    const [editTitle, setEditTitle] = useState(false);
    const [title, setTitle] = useState('My Todo List');

    return (
        <TouchableOpacity onPress={() => setEditTitle(editing => !editing)}>
            {editTitle ? (
                <TextInput
                    style={styles.title}
                    value={title}
                    onChangeText={setTitle}
                    onSubmitEditing={() => setEditTitle(false)}
                    autoFocus
                />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#ecf0f1',
        textAlign: 'start',
    },
})