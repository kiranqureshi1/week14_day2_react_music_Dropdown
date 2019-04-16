import React from 'react';

const MusicSelector = (props) => {

  function handleChange(event){
    console.log(event.target.value);
    props.onMusicSelected(event.target.value)
  }


  console.log("props", props.musicList);
  const options = props.musicList.map((music, index) => {
    return <option value={index} key={index}>{music["im:name"].label}</option>
  })
  return (
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">choose a music...</option>
    {options}
    </select>
  )

}

export default MusicSelector;
