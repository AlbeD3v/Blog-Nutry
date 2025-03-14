import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import Header from "../../components/head/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import axios from 'axios';
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location)
  useEffect (()=>{
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5001/api/posts" + search);
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <SideBar />
      </div>
    </>
  );
}
