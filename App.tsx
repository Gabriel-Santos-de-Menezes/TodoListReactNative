import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';

import { format } from 'date-fns'

//import Input from './src/components/Input';

import IconAdd from './src/assets/add.png';
import Todoist_logo from './src/assets/todoist_logo.png';

interface ListTarefa{
  texto: string;
  data: Date;
}

const App = () => {

  const [value, setValue] = useState('');
  const [tarefa, setTarefa] = useState<ListTarefa[]>([]);

  const addTodoList = (value: string) => {
    /* Fecha o teclado */
    Keyboard.dismiss();
    if(value != ''){
      setTarefa([{
        texto: value,
        data: new Date()
      }, ...tarefa])
    }
    setValue('');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image style={{ width: '70%', height: 58, resizeMode: 'contain', margin: 16 }} source={Todoist_logo} />
      <View style={{ flex: 1, marginHorizontal: 16, marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            value={value}
            onChangeText={(value) => setValue(value)}
            placeholder="Adicionar tarefa"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
              flex: 1,
              marginRight: 12
            }}
          />

          <TouchableOpacity onPress={() => addTodoList(value)}>
            <Image style={{ width: 38, height: 38 }} source={IconAdd}
            />
          </TouchableOpacity>
        </View>
        <ScrollView scrollEnabled style={{ marginTop: 18, marginBottom: 20, shadowOffset: 10, shadowColor: '#000', shadowOpacity: 0.5 }}>

          {tarefa.map((tar, index) => (


            <View key={index} style={{
              padding: 20,
              backgroundColor: '#F5F8F9',
              borderLeftWidth: 5,
              borderLeftColor: '#1ABC9C',
              marginTop: 8,
            }}>


              <Text style={{ fontSize: 10, textAlign: 'right' }}>{format(tar.data, 'dd/MM/yyyy HH:mm')}</Text>
              <Text style={{ textAlign: 'left' }}>{tar.texto}</Text>
            </View>



          ))}
        </ScrollView>
      </View>
    </>
  );
};

const Drop = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => addTodoList(value)}>
        <Image style={{ width: 38, height: 38 }}
          source={IconAdd}
        />
      </TouchableOpacity>
    </View>
  )
}

export default App;
