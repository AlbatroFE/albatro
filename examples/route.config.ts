var navConfig = require("@/nav.config.json");
var langs = require("@/i18n/route");
const load = function (lang: string, path: string) {
    return (r: any) => require.ensure([], () => r(require(`./pages/${lang}/${path}.vue`)));
}

const loadDocs = function (lang: string, path: string) {
    return (r: any) => require.ensure([], () => r(require(`./docs/${lang}${path}.md`)));
}

function getRoute(page: any, lang: any, index: any) {
    const component = page.path === "/changelog" ? load(lang, "changelog") : loadDocs(lang, page.path);
    let child = {
        path: page.path.slice(1),
        meta: {
            title: page.title || page.name,
            description: page.description,
            lang
        },
        name: "component-" + lang + (page.title || page.name),
        component: component
    };

    return child;
}

const registerRoute = (navConfig: any) => {
    let route: any[] = [];
    Object.keys(navConfig).forEach((lang, index) => {
        let navs = navConfig[lang];
        route.push({
            path: `/${lang}/component`,
            redirect: `/${lang}/component/installation`,
            component: load(lang, "component"),
            children: []
        });
        navs.forEach((nav: any) => {
            if (nav.href) return;
            if (nav.groups) {
                nav.groups.forEach((group: any) => {
                    group.list.forEach((nav: any) => {
                        //addRoute(nav, lang, index);
                        route[index].children.push(getRoute(nav, lang, index));
                    });
                });
            } else if (nav.children) {
                nav.children.forEach((nav: any) => {
                    //addRoute(nav, lang, index);
                    route[index].children.push(getRoute(nav, lang, index));
                });
            } else {
                //addRoute(nav, lang, index);
                route[index].children.push(getRoute(nav, lang, index));
            }
        });
    });

    return route;
};

const generateMiscRoutes = function (lang: any) {
    let guideRoute = {
        path: `/${lang}/guide`, // 指南
        redirect: `/${lang}/guide/design`,
        component: load(lang, "guide"),
        children: [{
            path: "design", // 设计原则
            name: "guide-design" + lang,
            meta: { lang },
            component: load(lang, "design")
        }, {
            path: "nav", // 导航
            name: "guide-nav" + lang,
            meta: { lang },
            component: load(lang, "nav")
        }]
    };

    let themeRoute = {
        path: `/${lang}/theme`,
        component: load(lang, "theme-nav"),
        children: [
            {
                path: "/", // 主题管理
                name: "theme" + lang,
                meta: { lang },
                component: load(lang, "theme")
            },
            {
                path: "preview", // 主题预览编辑
                name: "theme-preview-" + lang,
                meta: { lang },
                component: load(lang, "theme-preview")
            }]
    };

    let resourceRoute = {
        path: `/${lang}/resource`, // 资源
        meta: { lang },
        name: "resource" + lang,
        component: load(lang, "resource")
    };

    let indexRoute = {
        path: `/${lang}`, // 首页
        meta: { lang },
        name: "home" + lang,
        component: load(lang, "index")
    };

    return [guideRoute, resourceRoute, themeRoute, indexRoute];
};

let route = registerRoute(navConfig);

langs.forEach((lang: any) => {
    route = route.concat(generateMiscRoutes(lang.lang));
});

let userLanguage = localStorage.getItem("ALBATRO_LANGUAGE") || window.navigator.language || langs[0].lang;
let defaultPath = "/" + userLanguage + "/component/installation";

route = route.concat([{
    path: "/",
    redirect: defaultPath
}, {
    path: "*",
    redirect: defaultPath
}]);

export default route;
