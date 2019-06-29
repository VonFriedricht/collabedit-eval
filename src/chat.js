chat = {
  log: message => {
    var chatDiv = document.getElementById('message_div')
    var msg = document.createElement('div')

    msg.className = 'chtmsg'
    if (typeof message != 'string') {
      msg.style.fontFamily = "Consolas"
      message = JSON.stringify(message, null, 2)
    }
    msg.innerHTML = `<span class="nickspan">log: </span><span class="normalchat">${message}</span>`

    chatDiv.appendChild(msg)
    chatDiv.scrollTop = chatDiv.scrollHeight
  }
}
