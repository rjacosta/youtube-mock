import React from "react"
import Header from "../components/header"

const Home = () => (
  <div>
    <Header />

    <div>
      <div className="row">
        <div>ICON TITLE SUBTITLE X(delete)</div>
      </div>
      <div className="homeRow">
        <div>
          <img src="https://picsum.photos/id/1/210/118" />
          <div>VIDEO TITLE</div>
          <div>AUTHOR</div>
          <div>VIEW . Post Time</div>
        </div>
        <div>
          <img src="https://picsum.photos/id/2/210/118" />
          <div>VIDEO TITLE</div>
          <div>AUTHOR</div>
          <div>VIEW . Post Time</div>
        </div>
        <div>
          <img src="https://picsum.photos/id/3/210/118" />
          <div>VIDEO TITLE</div>
          <div>AUTHOR</div>
          <div>VIEW . Post Time</div>
        </div>
      </div>
    </div>

    <div>
      <div className="row">
        <div>ICON TITLE SUBTITLE X(delete)</div>
      </div>
      <div className="homeRow">
        <div>
          <div>VIDEO PIC</div>
          <div>VIDEO TITLE</div>
          <div>AUTHOR</div>
          <div>VIEW . Post Time</div>
        </div>
        <div>
          <div>VIDEO PIC</div>
          <div>VIDEO TITLE</div>
          <div>AUTHOR</div>
          <div>VIEW . Post Time</div>
        </div>
        <div>
          <div>VIDEO PIC</div>
          <div>VIDEO TITLE</div>
          <div>AUTHOR</div>
          <div>VIEW . Post Time</div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
