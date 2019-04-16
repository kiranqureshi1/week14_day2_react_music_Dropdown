import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      musicList: [],
      currentMusic: null
    };
    this.handleMusicSelected = this.handleMusicSelected.bind(this);

  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({musicList: data.feed.entry})
    });

    request.send();
  }

  handleMusicSelected(index){
    const selectedMusic = this.state.musicList[index];
    this.setState({currentMusic: selectedMusic})
  }


  render(){
      return (
        <div>
          <h2>Music List</h2>
          <MusicSelector musicList={this.state.musicList} onMusicSelected={this.handleMusicSelected}/>
          <MusicDetail music = {this.state.currentMusic}/>

        </div>
      );
    }
}

export default MusicContainer;
