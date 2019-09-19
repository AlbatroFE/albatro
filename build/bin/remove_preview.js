'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter the remove component name');
  process.exit(1);
}

if (!process.argv[3]) {
  console.error('[分组名]必填 - Please enter group name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const componentname = process.argv[2];
const groupName = process.argv[3];
const rootPath = path.resolve(__dirname, '../../');

const Files = [
  {
    filename: path.join(rootPath, 'packages', `${componentname}/index.ts`)
  },
  {
    filename: path.join(rootPath, 'packages', `${componentname}/index.js`)
  },
  {
    filename: path.join(rootPath, 'packages', `${componentname}/src/${componentname}.vue`)
  },
  {
    filename: path.join(rootPath, 'examples/docs/zh-CN', `${componentname}.md`)
  },
  {
    filename: path.join(rootPath, 'examples/docs/en-US', `${componentname}.md`)
  },
  {
    filename: path.join(rootPath, 'tests/unit/specs', `${componentname}.spec.ts`)
  },
  {
    filename: path.join(rootPath, 'packages/theme-albatro/src', `${componentname}.scss`)
  },
  {
    filename: path.join(rootPath, 'examples/demo-styles', `${componentname}.scss`)
  },
  {
    filename: path.join(rootPath, 'types', `${componentname}.d.ts`)
  }
];

console.error('Delete ' + `${componentname}` + ' ....');

// 删除 package
Files.forEach(file => {
  if (fs.existsSync(file.filename)) {
    console.log("删除文件：" + file.filename);
  } else {
    console.log("不存在文件：" + file.filename);
  }
});

console.log("删除目录：" + path.join(rootPath, 'packages', `${componentname}`));

// 更新 components.json
const componentsFile = require(path.join(rootPath, 'components.json'));
if (componentsFile[componentname]) {
  componentsFile[componentname] = '';
}

console.log("components.json: " + JSON.stringify(componentsFile, null, "  "));

// 更新 nav.config.json
const navConfigFile = require(path.join(rootPath, 'examples/nav.config.json'));

Object.keys(navConfigFile).forEach(lang => {
  let groups = navConfigFile[lang][4].groups;
  groups.forEach((e, i) => {
    if (e.groupName === groupName) {
      let temp = [];
      e.list.forEach((c, j) => {
        if (c.path !== `/${componentname}`) {
          temp.push(c);
        }
      });
      e.list = temp;
    }
  });
});

console.log("nav.config.json: " + JSON.stringify(navConfigFile, null, '  '));
console.log('DONE!');
