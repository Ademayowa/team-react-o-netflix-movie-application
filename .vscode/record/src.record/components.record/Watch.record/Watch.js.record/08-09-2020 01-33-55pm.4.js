import React from 'react'
import Grid from '@material-ui/core/Grid';

import './Watch.css'

const Watch = () => {
    return (
      <div className="bg-black">
        <div className="container watch-content">
          <Grid container spacing={2}>
            <Grid item md={6} lg={6} xs={12}>
              <div className = "content-pad" > 
                <h1 className="main-title">Watch Everywhere</h1>
                <h3 className="subtitle"> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more. </h3>
              </div>
            </Grid>
            <Grid item md={6} lg={6} xs={12}>
              <div>
                <img src={require("../../images/watch.png")} className="watch-img"/>
              </div>
            </Grid>
            
          </Grid>
        </div>
      </div>
    )
  }
export default Watch