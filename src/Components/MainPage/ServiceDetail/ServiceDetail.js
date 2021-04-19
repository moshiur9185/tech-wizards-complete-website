import React, { useContext } from "react";
import {useSpring, animated} from 'react-spring'
import './ServiceDetails.css';
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import { auth } from "../../Login/Login/LoginManager";


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetail = (props) => {
  const [animation, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  const {_id, name, price, description, img} = props.service
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const  handleExplore=( (_id, name, price) =>{
    if(loggedInUser){
      history.push("/book");
      const { displayName, email } = loggedInUser;
           const cardBook = {
             name: displayName,
             email,
             serviceName: name,
             price: price,
             serviceId: _id
         }
         fetch('https://infinite-island-97956.herokuapp.com/addBook', {
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(cardBook)
         })
             .then(res => res.json())
             .then(data => console.log(data))
             .catch(err => {
                 console.log(err);
             })
    }
    else{
      history.push('/login')
    }
  })
  return (
    <section class="col-md-4 mb-4">
      <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: animation.xys.interpolate(trans) }} className="card card-service ">
        <div class="card-body py-3 px-4">
        {
            props.service.image ? <img style={{height: '100px', width: '100px', borderRadius: "50%"}} src={`data:image/png;base64,${props.service.image.img}`} alt=""/>
            :
            <img style={{height: '100px'}} className="img-fluid mb-3" src={`https://infinite-island-97956.herokuapp.com/${img}`} alt=""/>
        }
          <h4 style={{ color: "rgb(212, 12, 79)" }}>{name}</h4>
          <p class="card-text">{description}</p>
          <h5 style={{ color: "rgb(212, 12, 79)" }}>$ {price}</h5>
          <button onClick={() => auth.currentUser?.email ? handleExplore(_id, name, price) : history.push('/login')} className="btn btn-secondary">Explore Now</button>
        </div>
      </animated.div>
    </section>
  );
};

export default ServiceDetail;
