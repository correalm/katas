function rot13(message = ''){
  //your code here

  console.log(message.replace(char => {
    if (char.match(/[a-z]/i)) {
      console.log(char.charCodeAt(0))
    }
  }));
}

rot13('abc')