const Fs = require('fs')
const Path = require('path')

const folder = Path.resolve(__dirname, 'src', 'icons')

Fs.readdirSync(
    folder
).forEach(icon => {
    const content = Fs.readFileSync(Path.resolve(folder, icon)).toString()

    Fs.writeFileSync(Path.resolve(folder, icon), content.replace(/fill="#2346F8"/g, 'fill="currentColor"'))
})
