const lblOnline = document.querySelector('#lbl-online')
const lblOffline = document.querySelector('#lbl-offline')
const txtMessage = document.querySelector('#txtMessage')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io();

socket.on('connect', () => {
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMessage.value;
    const payload = {
        mensaje,
        id: '123Ab',
        fecha: new Date().getDate()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log(id)
    });
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})

console.log('Test')