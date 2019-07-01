chat = {
  log: message => {
    var chatBox = document.getElementById('message_div')

    var messageElement = document.createElement('pre')
    messageElement.className = 'chtmsg'
    messageElement.style.fontFamily = 'Consolas'
    messageElement.style.fontSize = '0.8em'
    message = JSON.stringify(message, null, 2)
    messageElement.innerHTML = `<span class="nickspan">log: </span><span class="normalchat">${message}</span>`

    chatBox.appendChild(messageElement)
    chatBox.scrollTop = chatDiv.scrollHeight
  }
}
