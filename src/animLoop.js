anim = () => {}
animLoop = () => {
  anim()
  if (randomUpdateNumber != lastRandomUpdateNumber) {
    window.requestAnimationFrame(animLoop)
  }
}
