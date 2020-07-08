var QRCode = require('qrcode');

QRCode.toFile('./qrcodes/longs-peak.png', 'http://www.summitclub.co/r/longs-peak', {
    color: {
        dark: '#000',  // Black dots
        light: '#fff' // White background
    },
    scale: 10
}, function (err) {
    if (err) throw err
    console.log('done')
})
