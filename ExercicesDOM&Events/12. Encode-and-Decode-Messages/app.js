function encodeAndDecodeMessages() {
    let encodetTextArea = document.getElementsByTagName('textarea')[0];
    let encodeBtn = document.getElementsByTagName('button')[0];

    let decodetTextArea = document.getElementsByTagName('textarea')[1];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click',decodeMessage)

    function encodeMessage() {
        let message = encodetTextArea.value;
        let newMessage = '';
      for (let index = 0; index < message.length; index++) {
      let newText =  String.fromCodePoint(message[index].charCodeAt(0)+1);
        newMessage += newText;
      }
     decodetTextArea.value = newMessage;
     encodetTextArea.value = '';
     document.getElementsByTagName('button')[1].disabled = false;
    }

    function decodeMessage() {
        let message = decodetTextArea.value;
        let newMessage = '';
      for (let index = 0; index < message.length; index++) {
      let newText =  String.fromCodePoint(message[index].charCodeAt(0)-1);
        newMessage += newText;
      }
     encodetTextArea.value = newMessage;
     decodetTextArea.value = '';
     document.getElementsByTagName('button')[1].disabled = true;
    }
}