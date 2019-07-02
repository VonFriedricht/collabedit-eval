dice=function(a,b=false){
  if(b===false)return Math.floor((Math.random()*a)+1)
  return Number(a)+Number(Math.floor(Math.random()*(b-a+1)))
}
