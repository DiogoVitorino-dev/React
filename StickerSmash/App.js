import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import domtoimage from 'dom-to-image';
import { captureRef } from 'react-native-view-shot';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRef, useState } from 'react';

import IconButton from './components/IconButton';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const placeholderImage = require('./assets/images/background-image.png')

export default function App() {
  const [selectedImage, setSelectedImage] = useState('');
  const [showAppOptions,setShowAppOptions] = useState(false)
  const [isModalVisible,setIsModalVisible] = useState(false)
  const [pickedEmoji,setPickedEmoji] = useState(null)
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const imageRef = useRef()

  if (status == null) requestPermission()

  const pickImagemAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      quality:1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)          
    } else
      alert('vc não selecionou uma imagem')
    
  }

  const onReset = () => {setShowAppOptions(false)}

  const onAddSticker = () => {setIsModalVisible(true)}

  const onSaveImageAsync = async () => {
    if(Platform.OS !== 'web'){
      try {
        const localUri = await captureRef(imageRef, {
          height:440,
          quality:1
        })

        await MediaLibrary.saveToLibraryAsync(localUri);      
        if(localUri) alert("Salvo na galeria")

      } catch (error) {
        console.log(error);      
      }
    } else {
      try {
        const dataUrl =  await domtoimage.toJpeg(imageRef.current, {
          height:440,
          width:320,
          quality:0.95
        })

        const linkElement = document.createElement('a')
        linkElement.download = 'sticker-mash.jpeg'
        linkElement.href = dataUrl
        linkElement.click()
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }

  const onModalClose = () => {setIsModalVisible(false)}


  return (
    <GestureHandlerRootView style = {{flex:1}}>   
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer 
              placeholderImageSource={placeholderImage}
              selectedImage = {selectedImage}
            />          
            {pickedEmoji !== null 
            ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
            : null}
          </View>
        </View>
        

        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon='refresh' label='Reset' onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon='save-alt' label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>        
        ) : (        
          <View style={styles.footerComponent}>
            <Button label="Choose a photo" theme="primary" onPress={pickImagemAsync} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onclose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <StatusBar style="light" />
      </View>
    </GestureHandlerRootView>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },

  imageContainer:{
    flex:1,
    paddingTop:58,
  },

  footerComponent:{
    flex: 1/3,
    alignItems: 'center'
  },

  optionsContainer:{
    position:'absolute',
    bottom:50,
  },

  optionsRow: {
    alignItems:'center',
    flexDirection: 'row'
  },

});
