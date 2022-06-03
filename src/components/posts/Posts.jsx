import Post from "../post/Post";
import "./posts.css";
import { getBlogPosts } from "../../api/posts";
import { getTotalBlogPosts } from "../../api/posts";

import React, { useEffect, useState } from "react";

let pageNo = 0;
const POST_LIMIT = 9;

const getPaginationCount = (length) => {
  const division = length / POST_LIMIT;

  // if (division % 1 !== 0) {
  //   return Math.floor(division) + 1;
  // }

  return division + (length % POST_LIMIT) ? 1 : 0;
};

export default function Posts() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const content =
    "Lorem, changed dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde! ";

  // const { searchResult } = useSearch();
  const [posts, setPosts] = useState([]);
  const [totalPostCount, setTotalPostCount] = useState(0);
  const paginationCount = getPaginationCount(totalPostCount);
  // const paginationArr = new Array(paginationCount).fill(" ");
  const [paginationArr, setPaginationArr] = useState([]);

  const fetchPosts = async () => {
    const totalPosts = await getTotalBlogPosts();
    console.log("pageNo -> " + pageNo);
    const { error, posts } = await getBlogPosts(pageNo, POST_LIMIT);
    if (error) {
      return console.log(error);
    }
    setPosts(posts);
    console.log({ posts });
    setTotalPostCount(totalPosts.posts.length);
    setPaginationArr(new Array(totalPosts.posts.length));
  };

  useEffect(() => {
    fetchPosts();
    console.log("Mai chal rha hu");
  }, []);

  const fetchMorePosts = (index) => {
    pageNo = index;
    fetchPosts();
  };

  return (
    <div>
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.slug}
            id={post.id}
            title={post.title}
            img={post.thumbnail}
            content={content}
          />
        ))}
      </div>

      {paginationArr.length > 0 ? (
        <div className="py-5 flex justify-center items-center space-x-3">
          {paginationArr.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => fetchMorePosts(index)}
                className={
                  index === pageNo
                    ? " text-blue-500 border-b-2 border-b-blue-500"
                    : " text-gray-500"
                }
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      ) : (
        <div>NO PAGE</div>
      )}
    </div>
  );
}
