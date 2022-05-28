import client from "./client";


export const getFeaturedPosts = async () => {
    try{
        const {data} = await client(`/blogpost/featured-posts`);
        // console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}

export const getTotalPosts = async () => {
    try{
        const {data} = await client(`/blogpost/posts`);
        // console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}

export const getPosts = async (pageNo, limit) => {
    try{
        console.log("jara hai " +pageNo);
        
        const {data} = await client(`/blogpost/posts?pageNo=${pageNo}&limit=${limit}`);
        console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}
//will fetch blog posts
export const getTotalBlogPosts = async () => {
    try{
        const {data} = await client(`/blogpost/posts`);
        // console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}

export const getBlogPosts = async (pageNo, limit) => {
    try{
        console.log("jara hai " +pageNo);
        
        const {data} = await client(`/blogpost/posts?pageNo=${pageNo}&limit=${limit}`);
        console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}
//will fetch Opportunity posts
export const getTotalOpportunityPosts = async () => {
    try{
        const {data} = await client(`/blogpost/posts`);
        // console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}

export const getBlogOpportunityPosts = async (pageNo, limit) => {
    try{
        console.log("jara hai " +pageNo);
        
        const {data} = await client(`/blogpost/posts?pageNo=${pageNo}&limit=${limit}`);
        console.log(data);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data){
            return response.data;
        }
        return {error: error.message || error};  
    }
}

export const searchPost = async (query) => {
    try{
        const {data} = await client(`/post/search?title=${query}`);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const uploadImage = async (formData) => {
    try{
        const {data} = await client.post(`post/upload-image`, formData);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const createPost = async (formData) => {
    try{
        const {data} = await client.post(`post/create`, formData);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const getPost = async (slug) => {
    try{
        const {data} = await client(`post/single/${slug}`);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}

export const updatePost = async (postId, formData) => {
    try{
        const {data} = await client.put(`post/${postId}`, formData);
        return data;
    }catch(error){
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return {error: error.message || error};  
    }
}