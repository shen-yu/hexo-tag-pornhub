# hexo-tag-pornhub

![npm](https://img.shields.io/npm/v/hexo-tag-pornhub)
![NPM](https://img.shields.io/npm/l/hexo-tag-pornhub)

Insert [pornhub](https://www.pornhub.com/) videos in Hexo site by using tags.

## Install 

```bash
$ npm install hexo-tag-pornhub --save
```

## Usage

```
{% pornhub [videoId] [width] [height] %}
```

## Example

```
{% pornhub ph5f0fbf1d548ea 800 520 %}
```

You can configure the size of the video player in your main _config.yml:

Example configuration:

```
pornhub:
  width: 560 (default)
  height: 315 (default)
```
