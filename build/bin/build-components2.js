
const Components = require('../../components.json');

//vue-cli-service build --target wc --dest lib --name foo-hello packages/**/index.js

Object.keys(Components).forEach(key => {
    console.log(`[build] ${key}`);
    const name = `al-${key}`
    const path = `${Components[key].replace('js','ts')}`
    exec(`vue-cli-service build --target wc --dest lib/packages --no-clean --name ${name} ${path}`);
});

function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}