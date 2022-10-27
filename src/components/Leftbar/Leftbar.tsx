import "./leftbar.scss"

import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

export function Leftbar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://thispersondoesnotexist.com/image" alt="avatar" />
          </div>
          <span>Username</span>
        
          <div className="item">
            <GroupAddOutlinedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsOutlinedIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <LocalGroceryStoreOutlinedIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <PlayCircleOutlineOutlinedIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerOutlinedIcon />
            <span>Memories</span>
          </div>
        </div>
      </div>
    </div>
  )
}
