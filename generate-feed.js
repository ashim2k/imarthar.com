const fs=require('fs');
const {createClient}=require('@supabase/supabase-js');
const supabase=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY);
(async()=>{
const {data,error}=await supabase.from('blog_submissions').select('id,title,body,tag,published_at').eq('status','published').order('published_at',{ascending:false}).limit(50);
if(error) throw error;
let xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Imar Thar Blog</title><link>https://imarthar.com</link><description>Bishnupriya Manipuri Language Blog</description>`;
for(const p of data){
xml+=`<item><title><![CDATA[${p.title}]]></title><link>https://imarthar.com/post.html?id=${p.id}</link><guid>https://imarthar.com/post.html?id=${p.id}</guid><pubDate>${new Date(p.published_at).toUTCString()}</pubDate><description><![CDATA[${(p.body||'').substring(0,300)}]]></description><category>${p.tag||''}</category></item>`;
}
xml+='</channel></rss>';
fs.writeFileSync('feed.xml',xml);
})();