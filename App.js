import './style.css';
import image from './nature2.jfif';
import video from './video_court.mp4';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (    
             <div>
            <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
              <h1 className="title red">Your name here</h1>
              <br /><br/>
              <img src="/nature.jfif" />
              <br /><br/><br/>
              <img src={image}/>
            </div><br/><br/>
            <video width={320} height={240} controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
      
  );
}

export default App;