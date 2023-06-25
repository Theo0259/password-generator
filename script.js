function generatePassword() {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>,?;.:/!§*µù%$£¤¨+=})]à@ç^_`è|-[({'#é~&0";

  let length = document.getElementById("length").value;

  if (!length || length < 5 || length > 20) {
    alert(
      "La longueur du mot de passe doit être comprise entre 5 et 20 caractères."
    );
    return;
  }
  let password = "";

  for (let i = 0; i < length; i++) {
    const indexCharset = Math.floor(Math.random() * charset.length);
    password += charset[indexCharset]; //     password += charset.charAt(indexCharset);
  }

  console.log(password);
  document.getElementById("password").value = password;
}
