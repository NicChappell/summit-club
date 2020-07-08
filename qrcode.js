var QRCode = require('qrcode');

// QRCode.toFile('./qrcodes/longs-peak.png', 'https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AColorado+Summit+Club', {
//     color: {
//         dark: '#000',  // Black dots
//         light: '#fff' // White background
//     }
// }, function (err) {
//     if (err) throw err
//     console.log('done')
// })

QRCode.toFile('./qrcodes/longs-peak.png', 'summitclub.co/r/longs-peak', {
    color: {
        dark: '#000',  // Black dots
        light: '#fff' // White background
    },
    scale: 10
}, function (err) {
    if (err) throw err
    console.log('done')
})
