import React from 'react';

const MusicDetail = (props) =>{
  console.log(props);
  if(!props.music) return null;
  return(
    <div>
    <h3>
      {props.music["im:contentType"].attributes.label}
    </h3>
    <h3>Title: {props.music['im:name'].label}</h3>
    <img src = {props.music["im:image"][2]["label"]}/>
    </div>
  );
}





export default MusicDetail;
