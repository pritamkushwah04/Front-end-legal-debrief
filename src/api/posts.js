import client from "./client";

// featured posts
export const getFeaturedPosts = async () => {
  try {
    const { data } = await client(`/blogpost/featured-posts`);
    // console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

// home page news posts
export const getTotalNewsPosts = async () => {
  try {
    const { data } = await client(`/newsPost/posts`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getNewsPosts = async (pageNo, limit) => {
  try {
    console.log("jara hai " + pageNo);

    const { data } = await client(
      `/newsPost/posts?pageNo=${pageNo}&limit=${limit}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
//will fetch blog posts
export const getTotalBlogPosts = async () => {
  try {
    const { data } = await client(`/blogpost/posts`);
    // console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getBlogPosts = async (pageNo, limit) => {
  try {
    console.log("jara hai " + pageNo);

    const { data } = await client(
      `/blogpost/posts?pageNo=${pageNo}&limit=${limit}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
//will fetch Opportunity posts
export const getTotalOpportunityPosts = async () => {
  try {
    const { data } = await client(`/opportunityPost/posts`);
    // console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
export const getOpportunityPosts = async (pageNo, limit) => {
  try {
    console.log("jara hai " + pageNo);

    const { data } = await client(
      `/opportunityPost/posts?pageNo=${pageNo}&limit=${limit}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//will fetch RELATED with tags Opportunity posts
export const getTotalRelatedOpportunityPosts = async (tag) => {
  try {
    console.log("tag");
    console.log(tag);
    // http://localhost:4848/api/opportunityPost/related-posts/moots
    const { data } = await client(`/opportunityPost/related-posts/${tag}`);
    console.log("data");
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
export const getRelatedOpportunityPosts = async (pageNo, limit, tag) => {
  try {
    const { data } = await client(
      `/opportunityPost/related-posts/${tag}?pageNo=${pageNo}&limit=${limit}`
    );
    console.log(data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//single post
//   const data=[1,2,3]
//   const data2=[4,5,6]
//   const c=[...data, ...data2];

export const getTotalPosts = async () => {
  try {
    const { data } = await client(`/newsPost/posts`);
    // console.log("news post data");
    // console.log(data);

    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const searchPost = async (query) => {
  try {
    const { data } = await client(`/post/search?title=${query}`);
    return data;
  } catch (error) {
    const { response } = error;

    if (response?.data) {
      return response.data;
    }

    return { error: error.message || error };
  }
};

export const uploadImage = async (formData) => {
  try {
    const { data } = await client.post(`post/upload-image`, formData);
    return data;
  } catch (error) {
    const { response } = error;

    if (response?.data) {
      return response.data;
    }

    return { error: error.message || error };
  }
};

export const createPost = async (formData) => {
  try {
    const { data } = await client.post(`post/create`, formData);
    return data;
  } catch (error) {
    const { response } = error;

    if (response?.data) {
      return response.data;
    }

    return { error: error.message || error };
  }
};

export const getPost = async (slug) => {
  try {
    const { data } = await client(`post/single/${slug}`);
    return data;
  } catch (error) {
    const { response } = error;

    if (response?.data) {
      return response.data;
    }

    return { error: error.message || error };
  }
};

export const updatePost = async (postId, formData) => {
  try {
    const { data } = await client.put(`post/${postId}`, formData);
    return data;
  } catch (error) {
    const { response } = error;

    if (response?.data) {
      return response.data;
    }

    return { error: error.message || error };
  }
};
