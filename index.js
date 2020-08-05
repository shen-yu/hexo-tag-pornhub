const BASE_URL = 'https://www.pornhub.com/embed';

hexo.config.pornhub = Object.assign({
  width: hexo.config.pornhub.width || 560,
  height: hexo.config.pornhub.height || 315
}, hexo.config.pornhub);

hexo.extend.tag.register('pornhub', (args) => {
  var video_id = args[0];
  var width = args[1] || hexo.config.pornhub.width;
  var height = args[2] || hexo.config.pornhub.height;
  var tag = `<iframe src=${BASE_URL}/${video_id} frameborder=0 width=${width} height=${height} scrolling=no allowfullscreen></iframe>`;
  return tag;
}, { async: true });