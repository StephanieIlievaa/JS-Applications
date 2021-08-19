import page from './node_modules/page/page.mjs'
import home from './src/views/homeView.js'
import pricing from './src/views/pricingView.js'
import articles from './src/views/articlesView.js'
import articleView from  './src/views/articleView.js'

page('/home', home);
page('/pricing', pricing);
page('/articles', articles);
page('/articles/:id', articleView)
page.start();