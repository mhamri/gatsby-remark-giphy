import e from"unist-util-visit";import r from"giphy-api";function t(e){return"giphy-result:"+e}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));export default function(i,o){var n=i.cache,a=i.markdownAST;try{var l=[],u=r({apiKey:o.giphyApiKey,https:!0}),m=o.embedWidth||"100%";return e(a,"image",function(e){var r=e.url;r.startsWith("giphy:")&&l.push(function(){try{var i=r.replace(/^giphy:/,"");return Promise.resolve(n.get(t(i))).then(function(r){var a=function(){if(!r)return function(a,l){try{var s=Promise.resolve(u.search(i)).then(function(a){var l=a.data;r=o.useIframe?function(e,r,t){var i=Math.round(Number(r.images.original.height)/Number(r.images.original.width)*Number(t.replace("%","")));return e.type="html",e.children=void 0,e.value='<div style="width:'+t+";height:0;padding-bottom:"+i+'%;position:relative;margin: 0 auto"><iframe src="'+r.embed_url+'" width="100%" height="100%" style="position:absolute" frameborder="0" class="giphy-embed" allowfullscreen></iframe></div>',e}(e,l[0],m):o.useVideo?function(e,r,t){var i="<source src="+l[0].images.looping.mp4+' type="video/mp4" />';return e.type="html",e.children=void 0,e.value='<video style="margin: auto auto; display: block; max-width: '+t+'" autoplay loop muted playsinline>\n            '+i+"\n        </video>",e}(e,0,m):function(e,r){var t=e.url.replace(/^giphy:/,"");return e.alt=t,e.url=r.images.downsized_large.url,e.title=e.title||t,e}(e,l[0]),n.set(t(i),r)})}catch(e){return l(e)}return s&&s.then?s.then(void 0,l):s}(0,function(e){throw e.message="The following error appeared while transforming Giphy for "+i+":\n\n"+e.message,e})}();return a&&a.then?a.then(function(e){return r}):r})}catch(e){return Promise.reject(e)}})}),Promise.resolve(Promise.all(l.map(function(e){return e()}))).then(function(){return a})}catch(e){return Promise.reject(e)}}
//# sourceMappingURL=index.mjs.map
