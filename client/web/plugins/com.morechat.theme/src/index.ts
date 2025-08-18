import { regPluginColorScheme, sharedEvent } from '@capital/common';

regPluginColorScheme({
  label: 'MoreChatTheme',
  name: 'light+morechat',
});

function getRandomElement<T>(array: T[]): T | null {
  return array.length > 0
    ? array[Math.floor(Math.random() * array.length)]
    : null;
}

const setImage = (arr: Array<{ type: 'PC' | 'Mobile'; url: string }>) => {
  // 判断设备类型（宽度阈值 768px）
  const type = window.innerWidth > 768 ? 'PC' : 'Mobile';
  const filtered = arr.filter((img) => img.type === type);

  const image = getRandomElement(filtered);
  if (!image) return; // 无符合的图片时静默失败

  // 简化元素选择器逻辑
  ['#app', '#tailchat-app'].forEach((selector) => {
    const el = document.querySelector(selector) as HTMLElement;
    el?.style.setProperty('--tc-background-image', `url(${image.url})`);
  });
};

/**
 * 异步加载以防止入口文件过大阻塞主应用加载(因为有图片)
 */
sharedEvent.on('loadColorScheme', (colorSchemeName) => {
  if (colorSchemeName === 'light+morechat') {
    console.log('MoreChatTheme loading...');
    import('./theme.less').then(() =>
      setImage([
        {
          type: 'PC',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/77992108_p0.webp',
        },
        {
          type: 'PC',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/83808930_p0.webp',
        },
        {
          type: 'PC',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/91828089_p0.webp',
        },
        {
          type: 'Mobile',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/96217890_p0.webp',
        },
        {
          type: 'PC',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/107871192_p0.webp',
        },
        {
          type: 'Mobile',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/124719914_p0.webp',
        },
        {
          type: 'Mobile',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/132641568_p0.webp',
        },
        {
          type: 'Mobile',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/vrc_moblie.webp',
        },
        {
          type: 'PC',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/vrc_pc.webp',
        },
        {
          type: 'Mobile',
          url: 'https://chatfile.rdfstu.com/MoreChatTheme/yiln_moblie.webp',
        },
      ])
    );
  }
});
