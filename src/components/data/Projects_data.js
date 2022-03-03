
import NEWS from '../../assets/projects_images/news.png';
import  Algo from '../../assets/projects_images/Algo.png'
import tweetme from  '../../assets/projects_images/twitter.png'
 import youtube from  '../../assets/projects_images/youtubeClone.png'
const data_projects = [
    {
        name: 'Ai news App',
        image: NEWS,
        deployed_url: 'https://dassnews-app.netlify.app/',
        github_url: '',
        category: ['react.js']
    },
    {
        name: 'Algorithm Visualizer',
        image: Algo,
        deployed_url: 'https://visual-algorithm.web.app/',
        github_url: '',
        category: ['react.js','express.js']
    },

    
    {
        name: 'Tweepy',
        image: tweetme,
        deployed_url: 'https://twittter.vercel.app/',
        github_url: ' ',
        category: ['node.js', 'react.js','mongodb']
    },
    {
        name: 'not-Youtube',
        image: youtube,
        deployed_url: 'https://not-utube.web.app/auth',
        github_url: ' ',
        category: ['node.js', 'react.js','mongoDB']
    },
    
]

export default data_projects;