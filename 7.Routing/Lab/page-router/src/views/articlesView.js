import articlesData from '../articlesData.js'

const articlesTemplate = (data) =>  `
<article>
    <h3> ${data.title}</h3>
  <a href="/articles/${data.id}">Read more<a/>
</article>
`;

export default function(context) {
let rootElement = document.querySelector('.root') 
let articlesHtml = articlesData.map(x => articlesTemplate(x)).join('<hr>')
    console.log('Articles loaded');
       console.log(context);   

       rootElement.innerHTML = articlesHtml
   }