import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    "Acredite em si mesmo, pois a confiança é o primeiro passo para o sucesso.",
    "Cada novo dia é uma nova oportunidade para alcançar seus objetivos.",
    "O sucesso nasce do esforço contínuo e da determinação inabalável.",
    "Não tema os desafios, veja-os como oportunidades de crescimento.",
    "Seja a mudança que você deseja ver no mundo e na sua vida.",
    "O caminho para o sucesso é pavimentado com trabalho árduo e perseverança.",
    "A motivação é a faísca que acende a chama do progresso.",
    "Transforme seus sonhos em metas e suas metas em realidade.",
    "A jornada pode ser difícil, mas a vitória é sempre gratificante.",
    "A única maneira de alcançar o impossível é acreditar que é possível.",
    "Não espere por oportunidades, crie-as com seu esforço e dedicação.",
    "Cada fracasso é uma lição valiosa no caminho para o sucesso.",
    "Mantenha o foco no seu objetivo e não se distraia com as distrações.",
    "O otimismo é a chave que abre as portas para um futuro promissor.",
    "A força não vem do corpo, mas da vontade de nunca desistir.",
    "A vida é 10% do que acontece conosco e 90% de como reagimos a isso.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Não deixe que o medo do fracasso impeça você de tentar algo novo.",
    "A persistência supera o talento quando o talento não persiste.",
    "Celebre as pequenas vitórias, pois elas são os degraus para conquistas maiores."
  ];


  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }


  function reiniciar() {

    setImg(require('./src/biscoito.png'));
    setTextoFrase('');

  }


  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textofrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto} >Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]} >Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;