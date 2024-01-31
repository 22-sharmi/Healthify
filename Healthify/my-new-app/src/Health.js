import React from 'react';
import camera from "./img/camera.png"
import dinner from "./img/dinne.png"
import plus from "./img/plus.png"
import plus1 from "./img/purple plus.png"
import weight from "./img/weight.png"
import water from "./img/water track.png"
import track from "./img/step track.png"

export default function Health(){
    return(
        <div className="container">
            <br/>
            <div>
                <h3 className="">Nutrition</h3>
                <br/>
                <div className="card mb-3" style={{maxWidth:"540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={dinner} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <center>
                                <div className="card-body">
                                    <div className="d-flex justify-content-around" style={{position:"relative",top:"30px"}}>
                                        <h5 className="card-title fs-4">Eat up to 1,700 Cal</h5>
                                        <div>
                                            <img src={camera} width={'35px'} height={'35px'} alt=""/>
                                            <img src={plus} width={'35px'} height={'35px'} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div className="card-footer card-text">
                            <small className="text-muted">101,032 users tracked food in the last 24 hrs</small>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <h3>Weight</h3>
                <br/>
                <div className="card mb-3 m-2" style={{maxWidth:"530px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={weight} width={'80px'} height={'80px'} className="img-fluid rounded-start" style={{position:"relative",left:"30px"}} alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="d-flex justify-content-around" style={{position:"relative",top:"5px"}}>
                                    <div>
                                        <h5 className="card-title fs-4">72 kg</h5>
                                        <div className="card-text"><small className="text-muted">lose 10 kg</small></div>
                                    </div>
                                    <img src={plus1} width={'30px'} height={'30px'} alt=""/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div>
                <h3>Other Trackers</h3>
                <br/>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <center>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQJLikkR2YW_UILELcvxUlpmHG595VsOgLQ&usqp=CAU" className="img-fluid" width={'100px'} height={'100px'} alt=""/>
                            </center>
                            <div className="card-body text-center">
                                <h5 className="card-title">Burn at least</h5>
                                <div className="card-text"><small className="text-muted">337 Cal</small></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <center>
                                <img src={track} width={'100px'} height={'100px'} className="img-fluid" alt=""/>
                            </center>
                            <div className="card-body text-center">
                                <h5 className="card-title">Track your steps</h5>
                                <div className="card-text"><small className="text-muted">Connect now</small></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <center>
                                <img src={water} className="img-fluid" width={'100px'} height={'100px'} alt=""/>
                            </center>
                            <div className="card-body text-center">
                                <h5 className="card-title">Drink 9 Glasses</h5>
                                <div className="card-text"><small className="text-muted">of water</small></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body m-5">
                                <h5 className="card-title text-center fs-5"><small className="text-muted">View all <br/> trackers</small></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
