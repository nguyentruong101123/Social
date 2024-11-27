import { Avatar, Card, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";

const story = [11, 1, 1, 1, 1, 1];
const post = [1, 1, 1, 1, 1];
const MiddlePart = () => {
  const [openCreatePostModal, setOpenCreatePostModal] =useState(false);
  const handleCloseCreatePostModal = () => setOpenCreatePostModal(false);

  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModal(true);
    console.log("open post model");
  };
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            // src='https://images.fbox.fpt.vn/wordpress-blog/2023/08/tat-ca-thong-tin-ve-luffy.jpg'
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
          onClick={handleOpenCreatePostModel}
            readOnly
            className="outline-none w-[90%] bg-slate-100
            rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>

            <span>Ảnh</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>

            <span>video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>

            <span>Bài viết</span>
          </div>
        </div>
      </Card> 
      <div className="mt-5 space-y-5">
        {post.map((item)=> <PostCard /> )}

      </div>
      <div>
        <CreatePostModal open={openCreatePostModal} handleClose={handleCloseCreatePostModal}/>
      </div>
    </div>
  );
};

export default MiddlePart;
