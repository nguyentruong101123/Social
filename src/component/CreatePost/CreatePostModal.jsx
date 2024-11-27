import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import uploadToCloudinary from "../../utils/uploadToCloudniry";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../Redux/Post/post.action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};
const CreatePostModal = ({ handleClose, open }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dipatch = useDispatch();

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };
  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("formik values ", values);
      dipatch(createPostAction(values));
    },
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex space-x-4 items-center">
                <Avatar />
                <div>
                  <p className="font-bold text-lg">Trưởng</p>
                  <p className="text-sm">@truongprotv</p>
                </div>
              </div>
              <textarea
                className="outline-none w-full mt-5 p-2 
              bg-transparent border border-[#3b4054] rounded-sm"
                placeholder="viết bài..."
                name="caption"
                id=""
                onChange={formik.handleChange}
                value={formik.values.caption}
                row="4"
              ></textarea>

              <div className="flex space-x-5 items-center mt-5">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSelectImage}
                    style={{ display: "none" }}
                    id="image-input"
                  />
                  <label htmlFor="image-input">
                    <IconButton color="primary" component="span">
                      <ImageIcon />
                    </IconButton>
                  </label>
                  <span>Ảnh</span>
                </div>
                <div>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleSelectVideo}
                    style={{ display: "none" }}
                    id="image-input"
                  />
                  <label htmlFor="video-input">
                    <IconButton color="primary">
                      <VideoCallIcon />
                    </IconButton>
                  </label>
                  <span>Video</span>
                </div>
              </div>

              {selectedImage && (
                <div>
                  <img className="h-[10rem]" src={selectedImage} alt="" />
                </div>
              )}
              {selectedVideo && (
                <div>
                  <video className="h-[10rem]" controls>
                    <source src={selectedVideo} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="flex w-full justify-end">
                <Button
                  variant="container"
                  type="submit"
                  sx={{ borderRadius: "1.5rem" }}
                >
                  Đăng
                </Button>
              </div>
            </div>
          </form>
          <Backdrop
            sx={(theme) => ({
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            })}
            open={isLoading}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
