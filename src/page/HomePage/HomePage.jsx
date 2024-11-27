import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import SideBar from "../../component/Slidebar/SideBar";
import {Route, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../../component/MiddlePart/MiddlePart";
import Reels  from "../../component/Reels/Reels"
import Profile from "../../component/Profile/Profile";
import CreateReelsForm  from "../../component/Reels/CreateReelsForm"
import HomeRight from "../../component/HomeRight/HomeRight"
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../Redux/Auth/auth.action";
// import { getProfileAction } from "../../Redux/Auth/auth.action";


export const HomePage = () => {
  const dispatch=useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);
  


  return (
    <div className="px-20">
      <Grid container spacing={10}>

        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <SideBar />
          </div>
        </Grid>

        <Grid
          lg={location.pathname === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center"
          xs={12}
        >
            <Routes>
                <Route path="/" element={<MiddlePart />} />
                <Route path="/reels" element={<Reels />} />              
                <Route path="/create-reels" element={<CreateReelsForm />} />            
                <Route path="/profile/:id" element={<Profile />} />              

            </Routes>
        </Grid>
      
      {location.pathname === "/" &&  <Grid item lg={3} className="relative">

            <div className="sticky top-0 w-full">

                <HomeRight/>

            </div>

        </Grid>  }
      </Grid>
    </div>
  );
};

export default HomePage;
