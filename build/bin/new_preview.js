console.log();
process.on('exit', () => {
    console.log();
});

if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name');
    process.exit(1);
}

const path = require('path');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const groupName = process.argv[4] || 'Other'
const ComponentName = uppercamelcase(componentname);
const RootPath = path.resolve(__dirname, '../../');
const PackagePath = path.resolve(RootPath, 'packages', componentname);

const Files = [
    {
        filename: path.join(PackagePath, 'index.ts'),
        content: `import Al${ComponentName} from "~/${componentname}/src/${componentname}.vue";
export default Al${ComponentName};`
    },
    {
        filename: path.join(PackagePath, 'index.js'),
        content: `import Al${ComponentName} from "~/${componentname}/src/${componentname}.vue";

/* istanbul ignore next */
Al${ComponentName}.install = function(Vue) {
    Vue.component(Al${ComponentName}.name, ${ComponentName});
};
export default Al${ComponentName};`
    },
    {
        filename: path.join(PackagePath, `src/${componentname}.vue`),
        content: `<template>
  <div class="al-${componentname}"></div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator"
@Component
export default class Al${ComponentName} extends Vue{}
</script>`
    },
    {
        filename: path.join(RootPath, 'examples/docs/zh-CN', `${componentname}.md`),
        content: `## ${ComponentName} ${chineseName}`
    },
    {
        filename: path.join(RootPath, 'examples/docs/en-US', `${componentname}.md`),
        content: `## ${ComponentName}`
    },
    {
        filename: path.join(RootPath, 'tests/unit/specs', `${componentname}.spec.ts`),
        content: `import { shallowMount } from "@vue/test-utils"
import Al${ComponentName} from "~/${componentname}/src/${componentname}.vue";

describe('Al${ComponentName}', () => {
    it('mount', () => {
        
    });
});
`
    },
    {
        filename: path.join(RootPath, 'packages/theme-albatro/src', `${componentname}.scss`),
        content: `@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
    
}`
    },
    {
        filename: path.join(RootPath, 'examples/demo-styles', `${componentname}.scss`),
        content: `.demo-block.demo-${componentname} {

}
.demo-${componentname}{

}`
    },
    {
        filename: path.join(RootPath, 'types', `${componentname}.d.ts`),
        content: `import { AlbatroUIComponent } from "./component"

/** ${ComponentName} Component */
export declare class Al${ComponentName} extends AlbatroUIComponent {
}`
    }
];

// 添加到 components.json
const componentsFile = require(path.join(RootPath, 'components.json'));
if (componentsFile[componentname]) {
    console.error(`${componentname} 已存在.`);
    process.exit(1);
}

componentsFile[componentname] = `./packages/${componentname}/index.js`;
console.log("components.json: " + JSON.stringify(componentsFile, null, "  "));

// 创建 package
Files.forEach(file => {
    console.log("创建文件：" + file.filename + "，内容：");
    console.log("" + file.content);
});

// 添加到 nav.config.json
const navConfigFile = require(path.join(RootPath, 'examples/nav.config.json'));

Object.keys(navConfigFile).forEach(lang => {
    let groups = navConfigFile[lang][4].groups;
    groups.forEach((e, i) => {
        if (e.groupName === groupName) {
            e.list.push({
                path: `/${componentname}`,
                title: lang === 'zh-CN' && componentname !== chineseName
                    ? `${ComponentName} ${chineseName}`
                    : ComponentName
            });
        }
    });
});

console.log("nav.config.json: " + JSON.stringify(navConfigFile, null, '  '));
console.log('DONE!');