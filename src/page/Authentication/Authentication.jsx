import { Card, Grid } from '@mui/material';
import React from 'react';
import Login from './Login';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';

const Authentication = () => {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item xs={7}>
                <img className='h-full w-full' 
                src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2022_9_22_637994658947968839_instagram-1.jpg" alt="Lan" />
            </Grid>
            <Grid item xs={5} justifyContent="center" alignItems="center">
                <div className='px-20 flex flex-col justify-center h-full'>

                    <Card className='card p-8'>
                        <div className='flex flex-col items-center mb-5 space-y-1'>
                            <h1 className="logo text-center">Facebook</h1>
                            <p className='text-center text-sm w-[70&]'>Hello world</p>
                        </div>

                        <Routes>
                        <Route path='/' element={<Login />}></Route>
                            <Route path='/login' element={<Login />}></Route>
                            <Route path='/register' element={<Register />}></Route>
                        </Routes>
                    </Card>
                </div>
            </Grid>

        </Grid>
    </div>
  )
}

export default Authentication