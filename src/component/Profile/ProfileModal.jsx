import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from '../../Redux/Auth/auth.action';
import { Avatar, Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    outline: "none",
    overFlow: "scroll-y",
    borderRadius: 3
  };
const ProfileModal = ({open, handleClose}) => {
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store);


  const handleSubmit=(values)=>{
    console.log("values" , values);
};
  const formik = useFormik({
    initialValues:{
      firstName: auth.user.firstName,
      lastName:auth.user.lastName
    },
    onSubmit:(values,) => {
      console.log("values" , values);
      dispatch(updateProfileAction(values));
      handleClose(); 
    }
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <p>Sửa cá nhân</p>
              </div>
              <Button type="submit">Lưu</Button>
            </div>
         <div>
          <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/04/Anime_OnePiece_MonkeyDLuffy_Wallpaper.jpg" 
            alt=""
            />
          </div>
          <div className="pl-5">
            <Avatar
            className="transform -translate-y-24"
            sx={{width:"10rem", height:"10rem"}}
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/04/Anime_OnePiece_MonkeyDLuffy_Wallpaper.jpg" />
          </div>
         </div>
         <div className="space-y-3">
            <TextField 
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange} />

        <TextField 
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange} />

         </div>
          </form>
        </Box>
      </Modal>
    </div>
  )

}
export default ProfileModal;