import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'



const PopularUserCard = () => {
  return (
    <div>
         <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size='small'>
            Theo dõi
          </Button>
        }
        title="Trưởng"
        subheader="@truongprotv"
      />
    </div>
  )
}

export default PopularUserCard