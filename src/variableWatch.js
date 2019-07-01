watch = content => {
  let watch = document.getElementById('watch')
  if (!watch) {
    watch = document.createElement('pre')
    watch.id = 'watch'
    watch.style.border = '1px dotted gray'
    watch.style.position = 'absolute'
    watch.style.right = '5.5em'
    watch.style.bottom = '9em'
    document.getElementById('main').prepend(watch)
  }
  watch.innerHTML = JSON.stringify(content, null, 2)
}
