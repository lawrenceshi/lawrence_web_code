 
console.log("lang.js loaded");
// 获取用户浏览器的首选语言
const userLanguage = navigator.language;
console.log(userLanguage);

// 默认语言
const defaultLanguage = 'zh-CN';

// 语言列表
const content = {
  'zh-CN': {
    h1_title: '一块石头的私人网站',
    icpjs: "苏ICP备2023007722号-1",
    intro_href: "介绍",
    blog_href: "博客",
    about_href : "关于",
    contact_href :"联系我",
    'slogan-1' : "--成功没有捷径--",
    title : "乐乐网站 - 成功没有捷径",
    "intro-1" : "欢迎来到我的网站 <br> 这个网站是基于"
  },
  'en': {
    h1_title: "Lawrence's Personal Web",
    icpjs: "JS ICP备2023007722号-1",
    intro_href: "Intro",
    blog_href: "My Blog",
    about_href : "About",
    contact_href :"Contact",
    'slogan-1' : "--There is no shortcut to success--",
    title : "Lawrence's Web - There is no shortcut to success"
  },
  'en-US': {
    h1_title: "Lawrence's Personal Web",
    icpjs: "JS ICP备2023007722号-1",
    intro_href: "Intro",
    blog_href: "My Blog",
    about_href : "About",
    contact_href :"Contact",
    'slogan-1' : "--There is no shortcut to success--",
    title : "Lawrence's Web - There is no shortcut to success"
  },
  'zh-TW': {},
  'zh-HK': {}
};

// 根据用户语言设置内容
function getDisplayContent(language) {
  return content[language] || content[defaultLanguage];
}

const initialDisplayContent = getDisplayContent(userLanguage);

// 获取select元素
var lang_select = document.getElementById("language-select");
console.log(lang_select);


if (userLanguage === "zh-CN") {
  lang_select.options[0].selected = true;
} else if (userLanguage === "en" || userLanguage === "en-US") { 
  lang_select.options[1].selected = true;
} else if (userLanguage === "zh-TW" || userLanguage === "zh-HK") { 
  lang_select.options[2].selected = true;
} else{
  lang_select.options[0].selected = true; // 默认选择中文
}

document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  const updatedDisplayContent = getDisplayContent(selectedLanguage);


  updatePage(updatedDisplayContent);
});

function updatePage(displayContent) {
  // 更新页面内容
  document.getElementById('h1_title').innerText = displayContent.h1_title;
  document.getElementById('icpjs').innerText = displayContent.icpjs;
  document.getElementById('intro_href').innerText = displayContent.intro_href;
  document.getElementById('blog_href').innerText = displayContent.blog_href;
  document.getElementById('about_href').innerText = displayContent.about_href;
  document.getElementById('contact_href').innerText = displayContent.contact_href;
  document.getElementById('title').innerText = displayContent.title;
  document.getElementById('slogan-1').innerText = displayContent['slogan-1'];
  document.getElementById('intro-1').innerHTML = displayContent['intro-1'];
  // document.getElementById('description').innerText = displayContent.description;
}

// 初始加载时更新页面内容
updatePage(initialDisplayContent);