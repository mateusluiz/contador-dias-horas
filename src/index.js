
// Pega dados passados via parametros na url
  // Separamos todos os dados e juntamos no formato correto
let userUrl = location.search.slice(1).split('=')[1]
let userData = userUrl.split('T')[0]
let __userHora = userUrl.split('T')[1]
let _userHora = __userHora.split('%3A')
let userHora = `${_userHora[0]}:${_userHora[1]}:00`

// valores para horas
let _segundo = 1000 
let _minuto = _segundo * 60 // 60000 
let _hora = _minuto * 60 // 3600000 
let _dia = _hora * 24 // 86400000

setInterval(() => {
  let horarioAtual = new Date()
  let horarioFim = new Date(userData + ' ' + userHora)

  let diferenca = horarioFim - horarioAtual

  // Calculo para verificar horas restantes
  let dias = Math.floor(diferenca / _dia)
  let horas = Math.floor((diferenca % _dia) / _hora)
  let minutos = Math.floor((diferenca % _hora) / _minuto)
  let segundos = Math.floor((diferenca % _minuto) / _segundo)

  // Se números menores que 10 acrescenta 0 a esquerda
  dias = dias < 10 ? `${0}${dias}` : dias
  horas = horas < 10 ? `${0}${horas}` : horas
  minutos = minutos < 10 ? `${0}${minutos}` : minutos
  segundos = segundos < 10 ? `${0}${segundos}` : segundos

  // Quando cronometro chegar a 0 parar
  if(diferenca <= 1000) {
    document.querySelector('.dias h1').innerHTML = 0
    document.querySelector('.horas h1').innerHTML = 0
    document.querySelector('.minutos h1').innerHTML = 0
    document.querySelector('.segundos h1').innerHTML = 0
  } else {
    document.querySelector('.dias h1').innerHTML = dias
    document.querySelector('.horas h1').innerHTML = horas
    document.querySelector('.minutos h1').innerHTML = minutos
    document.querySelector('.segundos h1').innerHTML = segundos
  }

}, 1000)

let botaoReiniciar = document.querySelector('.menu button')

botaoReiniciar.addEventListener('click', () => {
  window.location.href = '/public/index.html'
})