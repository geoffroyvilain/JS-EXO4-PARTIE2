//FONCTION POUR EFFACER LES VALEURS DES CHAMPS
function efface() {
// value='' --> met '' dans la donnée des champs
  document.getElementById('lastname').value = '';
  document.getElementById('firstname').value = '';
  document.getElementById('city').value = '';
}
/*
//si on veut remettre les valeurs par defaut :
//en html, remplacer la fonction efface par resetValues
function resetValues(){
  document.getElementById('informations').reset()
}
*/
