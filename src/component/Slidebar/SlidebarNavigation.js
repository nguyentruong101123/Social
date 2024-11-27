import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const navigationMenu = [
    {
        title: "Trang chủ",
        icon:<HomeIcon/>,
        path: "/"
    },
    {
        title: "Tin",
        icon:<ExploreIcon/>,
        path: "/reels"
    },
    {
        title: "Tạo tin",
        icon:<ControlPointIcon/>,
        path: "/create-reels"
    },
    {  
        title: "Thông báo",
        icon:<NotificationsIcon/>,
        path: "/"
    },
    {  
        title: "Tin nhắn",
        icon:<MessageIcon/>,
        path: "/message"
    },
    {  
        title: "Danh sách",
        icon:<ListAltIcon/>,
        path: "/"
    },
    {  
        title: "Cộng đồng",
        icon:<GroupIcon/>,
        path: "/"
    },
    {  
        title: "Profile",
        icon:<AccountCircleIcon/>,
        path: "/profile"
    },
] 