import { View, Text, StyleSheet, Image, Pressable, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import Navbar from './Navbar'
import { router } from 'expo-router'
import ModalSelector from 'react-native-modal-selector';



const FalYukleme = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [jobStatus, setJobStatus] = useState('Çalışıyor');
  const [gender, setGender] = useState('Kadın');
  const [relationshipStatus, setRelationshipStatus] = useState("Bekar");


  const relationshipStatusItems = [
    { key: 1, label: 'Bekar' },
    { key: 2, label: 'İlişkide' },
    { key: 3, label: 'Evlilikte' },
    { key: 4, label: 'Boşanmış' },
  ];

  const dataGender = [
    { key: 1, label: 'Kadın' },
    { key: 2, label: 'Erkek' },
    { key: 3, label: 'Diğer' },
  ];

  const jobStatusItems = [
    { key: 1, label: 'Çalışıyor' },
    { key: 2, label: 'İşsiz' },
    { key: 3, label: 'Öğrenci' },
  ];

  const [selectedImages, setSelectedImages] = useState<string[]>(Array(3).fill(null)); // Üç resim için durum

  const pickImage = async (index: number) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("İzin verilmedi, resim yükleyemezsiniz.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newImages = [...selectedImages];
      newImages[index] = result.assets[0].uri; // Seçilen resmi güncelle
      setSelectedImages(newImages);
    }
  };
  const screenWidth = Dimensions.get('window').width;

  return (
    <LinearGradient
      colors={['#1B1455', '#0E0A2C']}
      style={{ flex: 1 }}>
      <Navbar />
      <ScrollView>

        <View style={style.container}>
          <Text className='text-5xl text-[#D9D9D9] text-left mt-5' style={{ fontFamily: 'IslandMoments'}}>Kahve Falınız</Text>
          <View className='justify-center items-center mt-5'>
            <View className='flex-row justify-between mt-5 w-full mb-11'>
              {selectedImages.map((image, index) => (
                <Pressable key={index} className='w-[30%] aspect-square justify-center items-center' onPress={() => pickImage(index)}>
                  {image ? (
                    <Image source={{ uri: image }} className='w-full h-full rounded-lg' />
                  ) : (
                    <Image source={require('../../assets/images/fincan.png')} className='w-full h-full rounded-lg' /> // Varsayılan resim
                  )}
                </Pressable>
              ))}
            </View>
            <View className=' mt-11'>
              <Text className='text-[#D9D9D9] text-3xl mb-2' style={style.textForm}>Adınız:</Text>
              <TextInput
                className='border border-gray-900 rounded-lg p-3 mb-4 bg-[#1D1B20] text-[#D9D9D9]'
                value={firstName}
                onChangeText={setFirstName}
                style={{ width: screenWidth * 0.6 }}
              />

              <Text className='text-[#D9D9D9] text-3xl mb-2' style={style.textForm}>Soyadınız:</Text>
              <TextInput
                className='border border-gray-900 rounded-lg p-3 mb-4 bg-[#1D1B20] text-[#D9D9D9]'
                value={lastName}
                onChangeText={setLastName}
                style={{ width: screenWidth * 0.6 }}
              />

              <Text className='text-[#D9D9D9] text-3xl mb-2' style={style.textForm}>Doğum Tarihiniz:</Text>
              <TextInput
                className='border border-gray-900 rounded-lg p-3 mb-4 bg-[#1D1B20] text-[#D9D9D9]'
                value={birthDate}
                onChangeText={setBirthDate}
                placeholder="GG/AA/YYYY"
                style={{ width: screenWidth * 0.6 }}
              />

              <Text className='text-[#D9D9D9] text-3xl mb-2' style={style.textForm}>Cinsiyet:</Text>
              <ModalSelector
                data={dataGender}
                initValue={gender}
                onChange={(option) => {
                  setGender(option.label);
                }}
                className='mb-4 p-2'
                style={style.modalSelector} // ModalSelector stil ayarları
                selectTextStyle={style.selectedText}
              >
                <Text style={style.selectedText}>{gender}</Text>
              </ModalSelector>

              <Text className='text-white text-3xl mb-2' style={style.textForm}>İş Durumu:</Text>
              <ModalSelector
                data={jobStatusItems}
                initValue={jobStatus}
                onChange={(option) => {
                  setJobStatus(option.label);
                }}
                style={style.modalSelector} // ModalSelector stil ayarları
                selectTextStyle={style.selectedText} // Seçili metin stili

              >
                <Text style={style.selectedText}>{jobStatus}</Text>
              </ModalSelector>

              <Text className='text-white text-3xl mb-2' style={style.textForm}>İlişki Durumu:</Text>
              <ModalSelector
                data={relationshipStatusItems}
                initValue={relationshipStatus}
                onChange={(option) => {
                  setRelationshipStatus(option.label);
                }}
                style={style.modalSelector} // ModalSelector stil ayarları
                selectTextStyle={style.selectedText}
              >
                <Text style={style.selectedText}>{relationshipStatus}</Text>
              </ModalSelector>
            </View>
            <TouchableOpacity onPress={() => router.push('/FalKonusu')} className='p-3 rounded-lg mb-7 mt-5 bg-[#ff8c00] flex items-center justify-center'
              style={{ width: screenWidth * 0.6 }}>
              <Text style={{
                fontFamily: 'IslandMoments', textShadowColor: "#000",
                textShadowOffset: { width: 3, height: 3 },
                textShadowRadius: 4,
              }} className="text-[#D9D9D9] text-3xl items-center justify-center">
                Devam Et !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },


  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  textForm: {
    fontFamily: "IslandMoments",
  },
  modalSelector: {
    borderWidth: 1,
    borderColor: '#1D1B20',
    borderRadius: 8,
    backgroundColor: '#1D1B20',
    padding: 10,
    marginBottom: 16,
  },
  selectedText: {
    color: '#FFFFFF', // Seçili metin rengi
    textAlign: 'center', // Metin hizalaması
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

export default FalYukleme