chat = {
  log: message => {
    var chatDiv = document.getElementById('message_div')

    var msg = document.createElement('pre')
    msg.className = 'chtmsg'
    msg.style.fontFamily = 'Consolas'
    msg.style.fontSize = '1em'
    message = JSON.stringify(message, null, 2)
    msg.innerHTML = `<span class="nickspan">log: </span><span class="normalchat">${message}</span>`
    chatDiv.appendChild(msg)

    chatDiv.scrollTop = chatDiv.scrollHeight
  }
}
