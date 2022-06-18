import Carousel from 'react-elastic-carousel';
import "./featuredPosts.css";
import FeaturedPost from "../featuredPost/featuredPost";
import { getFeaturedPosts } from "../../api/posts";
import React, {useEffect,useState} from 'react';

export default function FeaturedPosts(){
    
    const breakPoints=[
        { width: 1, itemsToShow: 1},
        { width: 768, itemsToShow: 2},
    ]; 

    const [featuredposts, setFeaturedPosts] = useState([]);
    const fetchPosts = async () => {
        const fPosts= await getFeaturedPosts();
        console.log("fPosts");
        setFeaturedPosts(fPosts.posts);
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    

      
    return(
      <div className='fp'>
          <Carousel breakPoints={breakPoints} pagination={false} showArrows={false} enableAutoPlay={true} autoPlaySpeed={2000} >
          {featuredposts.map(post => (
             <FeaturedPost key={post.slug} img={post.thumbnail} id={post.id}/>
          ))}        
           </Carousel>
      </div>
    );
}