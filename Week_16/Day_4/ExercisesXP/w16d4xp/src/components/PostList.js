import data from '../json/exr3.json';
import SocialMedias from './Exercise3/SocialMedias.js'
import Skills from './Exercise3/Skills.js'
import Experience from './Exercise3/Experience.js';

const PostList = () => {return (
        <>
            <SocialMedias SocialMedias={data.SocialMedias}/>
            <hr/>
            <Skills Skills={data.Skills}/>
            <hr/>
            <Experience Experience={data.Experiences}/>
        </>
    )
}

export default PostList;