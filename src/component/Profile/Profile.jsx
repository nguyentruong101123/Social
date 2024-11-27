import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useId } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../Post/PostCard";
import UserReelCard from "../Reels/UserReelCard";
import ProfileModal from "./ProfileModal";
import { useSelector } from "react-redux";

const tabs = [
  { value: "post", name: "Bài viết" },
  { value: "reels", name: "Tin" },
  { value: "saved", name: "Đã lưu" },
  { value: "repost", name: "repost" },
];
const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1];
const Profile = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);





  const [value, setValue] = React.useState("post");
  const {auth} = useSelector(store=>store);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://assets-prd.ignimgs.com/2023/07/03/netflix-one-piece-1654901410673-1688416848504.jpg"
            alt=""
          />
        </div>
        <div
          className="px-5 flex justify-between items-start
      mt-5 h-[5rem]"
        >
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/04/Anime_OnePiece_MonkeyDLuffy_Wallpaper.jpg"
          />
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined" onClick={handleOpenProfileModal}>
              Sửa cá nhân
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">{auth.user?.firstName +" "+auth.user?.lastName}</h1>
            <p>@{auth.user?.firstName.toLowerCase() +"_"+auth.user?.lastName.toLowerCase()}</p>
          </div>

          <div className="flex gap-2 items-center py-3">
            <span>{auth.user?.post ? auth.user.post : '0 bài đăng'}</span>
            <span>{auth.user?.followers ? auth.user.followers : '0 theo dõi'}</span>
            <span>{auth.user?.followings ? auth.user.followings : '0 người đang theo dõi'}</span>
          </div>

          <div>
            <p>Vui là được</p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} 
                wrapped/>
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div
                className="space-y-5 w-[70%]
      my-10"
              >
                {posts.map((item) => (
                  <div
                    className="border border-slate-100
         rounded-md"
                  >
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex flex-wrap justify-center gap-2 my-4">
                {reels.map((item) => (
                  <UserReelCard />
                ))}
              </div>
            ) : value === "saved" ? (
              <div
                className="space-y-5 w-[70%]
    my-10"
              >
                {savedPost.map((item) => (
                  <div
                    className="border border-slate-100
       rounded-md"
                  >
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              "repost"
            )}
          </div>
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>
    </Card>
  );
};

export default Profile;
