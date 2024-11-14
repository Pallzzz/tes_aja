function validation(event){
  event.preventDefault()
  let nama =  $('#nama').val()
  let nim = $('#nim').val()
  let email = $('#email').val()
  let jurusan = $('#jurusan').val()
  let regional = $('#regional').val()
  let subdivisi = $('#subdivisi').val()
  let alasanjoin = $('#alasanjoin').val()

  console.log(nama)
  console.log(nim)
  console.log(email)
  console.log(jurusan)
  console.log(regional)
  console.log(subdivisi)
  console.log(alasanjoin)

  if(email.endsWith('@binus.ac.id')){}
  else{
    alert('Email harus berakhiran @binus.ac.id')}

 if(alasanjoin.length >= 512){
    alert('maksimal 512 kata')
 }

 $("#signup").click(function() {
   alert('Halo! ' + nama + ' terima kasih telah mendaftar menjadi Nindya sebagai ' + subdivisi + ' di ' + regional + '. Pendaftaran anda telah tersimpan. Mohon tunggu email kami di ' + email + ' dalam 10 hari kedepan.');
});



}
