import Carousel from 'react-elastic-carousel';
import "./featuredPosts.css";
import FeaturedPost from "../featuredPost/featuredPost";
import { getFeaturedPosts } from "../../api/posts";
import React, {useEffect,useState} from 'react';
import FeaturedPostSkeleton from "../FeaturedPostSkeleton";

export default function FeaturedPosts(){
    
    const breakPoints=[
        { width: 1, itemsToShow: 1},
        { width: 768, itemsToShow: 2},
    ]; 

    const [featuredposts, setFeaturedPosts] = useState([]);
    const fetchPosts = async () => {
        const fPosts= await getFeaturedPosts();
        setFeaturedPosts(fPosts.posts);
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    
    if(!featuredposts.length){
        return(
            <div className='flex justify-center bg-[#dedede]'>
               <FeaturedPostSkeleton/>
               <FeaturedPostSkeleton/>
            </div>
        )
    }
      
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