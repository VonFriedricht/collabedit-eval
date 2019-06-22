chat = {
  log: message => {
    var div = document.createElement("div")
    div.className = "chtmsg"
    div.innerHTML = `<span class="nickspan">log: </span><span class="normalchat">${message}</span>`
    document.getElementById("message_div").appendChild(div)
  }
}
