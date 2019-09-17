import React from "react"
import { 
  View, 
  Text, 
  TextInput, 
  FlatList,
  YellowBox,
  StyleSheet,
  Image,
  Alert,
  Platform,
  TouchableOpacity
} from 'react-native'
import axios from 'axios';

class TambahData extends React.Component {
  
  constructor(props){

    super(props)
    this.state = {
       TextInput_Nama_Lengkap: '',
       TextInput_NISN: '',
       TextInput_NIS: '',
       TextInput_Alamat_Siswa: '',
      }
  }

 tambahdata = () =>{
        axios.post('http://homekomputer.000webhostapp.com/apiv2/siswa/TambahSiswa.php', {
          nama_lengkap : this.state.TextInput_Nama_Lengkap,
          NISN : this.state.TextInput_NISN,
          NIS : this.state.TextInput_NIS,
          alamat_siswa: this.state.TextInput_Alamat_Siswa,
          tempat_lahir : this.state.TextInput_Nama_Lengkap,
          tanggal_lahir : this.state.TextInput_Nama_Lengkap,
          usia_siswa : this.state.TextInput_Nama_Lengkap,
          jenis_kelamin : this.state.TextInput_Nama_Lengkap,
          agama : this.state.TextInput_Nama_Lengkap,
          bank : this.state.TextInput_Nama_Lengkap,
          No_Rekning_Bank : this.state.TextInput_Nama_Lengkap,
          Rek_Atas_Nama : this.state.TextInput_Nama_Lengkap,
          Layak_PIP : this.state.TextInput_Nama_Lengkap,
          Alasan_Layak_PIP : this.state.TextInput_Nama_Lengkap,
        })
                .then(res => { console.log(res)})
                .catch(err => consule.log(err))  
 }


   render() {
    
    YellowBox.ignoreWarnings(['Encountered','ReferenceError']);

       return (
          <View style={styles.MainContainer}>
 
 
       <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Tambah Data </Text>
 
       <TextInput
         
         placeholder="Enter Student Name"
 
         onChangeText={ TextInputValue => this.setState({ TextInput_Nama_Lengkap : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 
      <TextInput
         
         placeholder="Enter Student Class"
 
         onChangeText={ TextInputValue => this.setState({ TextInput_NISN : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 
      <TextInput
         
         placeholder="Enter Student Phone Number"
 
         onChangeText={ TextInputValue => this.setState({ TextInput_NIS : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 
       <TextInput
 
         placeholder="Enter Student Email"
 
         onChangeText={ TextInputValue => this.setState({ TextInput_Alamat_Siswa : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.StylingTextInput}
       />
 
      <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.tambahdata} >
 
        <Text style={styles.StyleTambahData}> Tambahkan Data</Text>
 
      </TouchableOpacity>
 
</View>
           
   );
 }
}
  
  const styles = StyleSheet.create({
 
  MainContainer :{
 
    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'
 
  },
 
  StylingTextInput: {
 
  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#075e54',
  borderRadius: 5 ,
 
  },
 
  Btn_TambahData: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'
 
  },
 
  StyleTambahData:{
    color:'#fff',
    textAlign:'center',
  },
 
});

export default TambahData