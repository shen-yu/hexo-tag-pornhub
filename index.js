const BASE_URL = 'https://www.pornhub.com/embed';

hexo.extend.tag.register('pornhub', (args) => {
  const video_id = args[0];
  const width = args[1] || 800;
  const height = args[2] || 520;
  const tag = `<div><iframe src=${BASE_URL}/${video_id} frameborder=0 width=${width} height=${height} scrolling=no allowfullscreen></iframe></div>`;
  return tag;
}, { async: true });