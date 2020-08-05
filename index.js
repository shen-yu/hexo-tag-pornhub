const BASE_URL = 'https://www.pornhub.com/embed';

hexo.config.pornhub = Object.assign({
  width: hexo.config.pornhub.width || 560,
  height: hexo.config.pornhub.height || 315
}, hexo.config.pornhub);

hexo.extend.tag.register('pornhub', (args) => {
  const video_id = args[0];
  const width = args[1] || hexo.config.pornhub.width;
  const height = args[2] || hexo.config.pornhub.height;
  const tag = `<iframe src=${BASE_URL}/${video_id} frameborder=0 width=${width} height=${height} scrolling=no allowfullscreen></iframe>`;
  return tag;
}, { async: true });