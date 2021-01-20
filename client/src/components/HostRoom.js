import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi"
import axios from 'axios'

//form validation
const schema = Joi.object({
  username: Joi.string().min(2).max(15).alphanum().required(),
  room: Joi.string().min(4).max(12).alphanum().required(),
  password: Joi.string().min(6).max(20).required()
});

function HostRoom({updateLocal}) {
  //hook form
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: joiResolver(schema),
  });

  //validates and submits data to mongo server
  const onSubmit = async (data) => {
    try {
      const fetch = await axios.put('rooms/hostRoom', {
        name: data.room,
        username: data.username,
        password: data.password
      })
      console.log(fetch);
      if(fetch.data === 'Room Created'){
        console.log("", data.room, " ", data.username)
    }
    } catch (error) {
      if(error.response){
        if(error.response.data === 'Room already exists'){
          setError("room", {
            type: "manual",
            message: 'Room already exists'
          });
        }
        else{
          console.log(error.response);
        }
      }
      else{
        console.log(error)
      }
    }
  }


  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

      <label>Room Name</label>
      <input name="room" ref={register} />
      {errors.room && <p>{errors.room.message}</p>}

      <label>Username</label>
      <input name="username" ref={register} />
      {errors.username && <p>{errors.username.message}</p>}

      <label>Room Password</label>
      <input name="password" ref={register} />
      {errors.password && <p>{errors.password.message}</p>}
      
      
      <input type="submit" />


      </form>
    </div>
  )
}

export default HostRoom
