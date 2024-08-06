import React, { useState, useEffect } from 'react';
import {
	ScrollView,
	View,
	Text,
	Button,
	TouchableOpacity,
	StatusBar,
	TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './src/style';

export default function App() {

	const [estado, setarEstado] = useState('leitura');
	const [anotacao, setarAnotação] = useState('');

	useEffect(() => {
		// Quando inicializarmos o app, queremos que leia esse escript primeiro.
		(async () => {
			try {
				const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
				setarAnotação(anotacaoLeitura);
			} catch (erro) {
				alert('Falha ao renderizar os valores salvos!')
			}
		})()
	}, [])

	const setDate = async () => {
		try {
			await AsyncStorage.setItem('anotacao', anotacao)
			alert('Dados salvos com sucesso!')
		} catch (erro) {
			alert('Erro ao armazenar os dados!')
		}
	}

	function atualizarTexto() {
		setarEstado('leitura')
		setDate();
	}

	if (estado == 'leitura') {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar style="light" />
				<View style={styles.header}><Text style={{ textAlign: 'center', color: 'white', fontSize: 18, }}>Aplicativo Anotação</Text></View>
				{
					(anotacao) != "" ?
						<View><Text style={styles.anotacao}></Text></View>
						:
						<View><Text style={{ opacity: .3, margin: 20 }}>Nenhuma anotação encontrada</Text></View>
				}
				<View><Text style={styles.anotacao}>{anotacao}</Text></View>
				<TouchableOpacity onPress={() => { setarEstado('atualizado') }} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
			</View>
		)
	} else if (estado == 'atualizado') {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar style="light" />
				<View style={styles.header}><Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Aplicativo Anotação</Text></View>
				<TextInput
					autoFocus={true}
					style={styles.input}
					onChangeText={(text) => setarAnotação(text)}
					multiline={true}
					numberOfLines={5}
					value={anotacao}
					placeholder='Digite seua mensagem'
					placeholderTextColor="rgb(77, 77, 77)"
				></TextInput>
				{
					(anotacao == "") ?
						<TouchableOpacity onPress={() => { atualizarTexto() }} style={styles.btnSalvar}><Text style={{ color: 'white' }}>Novo</Text></TouchableOpacity>
						:
						<TouchableOpacity onPress={() => { atualizarTexto() }} style={styles.btnSalvar}><Text style={{ color: 'white' }}>Salvar</Text></TouchableOpacity>

				}
			</View>
		)
	}

}