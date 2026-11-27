import rss from '@astrojs/rss';
export function GET(context) {
 const posts = Object.values(import.meta.glob('./blog/*.md', { eager: true }));
 return rss({title:'XEMO Blog',description:'Ingeniería y tecnología',site:context.site,items:posts.sort((a,b)=>new Date(b.frontmatter.pubDate)-new Date(a.frontmatter.pubDate)).map(post=>({title:post.frontmatter.title,description:post.frontmatter.description,pubDate:new Date(post.frontmatter.pubDate),link:post.url}))});
}