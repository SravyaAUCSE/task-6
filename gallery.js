class Gallery extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      photos: undefined,
      query: ''
    };
  }
  
  handleInputChange(e){
    this.setState({
      query: e.target.value
    });
  }
  
  handleSubmit(e){
    
    e.preventDefault();

    fetch(https://api.unsplash.com/search/photos?query=${this.state.query}&page=1&per_page=12, {
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID 0EWMNG4iGn5X0wjg_kNLH9Mha3hDSW2gNjuCPWEuiFA',
        'Accept-Version': 'v1'
      }
    })
    .then((result) => {
      
      return result.json();
    }).then((jsonResult) => {
      
      this.setState({
        photos: jsonResult.results
      });
    })
  }
  
  renderPhotos(){
    
    // To Improve: let it handle arbitrary number of images. Use the images' original height and balance the columns
    // I have made all images the same size. This has a side effect of chopping out a part of image if the original height
    // is large. To restore to flex height, simply delete the .img-fluid css section and images will be shown in original height,
    // still forming 3 columns.
    
    if( this.state.photos ){
      
      const photos = this.state.photos;

      const photoGallery = 
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <a href={photos[0].urls.full}>
                  <img className="img-fluid" src={photos[0].urls.regular}></img>
                </a>
                <a href={photos[3].urls.full}>
                  <img className="img-fluid" src={photos[3].urls.regular}></img>
                </a>
                <a href={photos[6].urls.full}>
                  <img className="img-fluid" src={photos[6].urls.regular}></img>
                </a>
                <a href={photos[9].urls.full}>
                  <img className="img-fluid" src={photos[9].urls.regular}></img>
                </a>
              </div>
              <div className="d-flex flex-column">
                <a href={photos[1].urls.full}>
                  <img className="img-fluid" src={photos[1].urls.regular}></img>
                </a>
                <a href={photos[4].urls.full}>
                  <img className="img-fluid" src={photos[4].urls.regular}></img>
                </a>
                <a href={photos[7].urls.full}>
                  <img className="img-fluid" src={photos[7].urls.regular}></img>
                </a>
                <a href={photos[10].urls.full}>
                  <img className="img-fluid" src={photos[10].urls.regular}></img>
                </a>
              </div>
              <div className="d-flex flex-column">
                <a href={photos[2].urls.full}>
                  <img className="img-fluid" src={photos[2].urls.regular}></img>
                </a>
                <a href={photos[5].urls.full}>
                  <img className="img-fluid" src={photos[5].urls.regular}></img>
                </a>
                <a href={photos[8].urls.full}>
                  <img className="img-fluid" src={photos[8].urls.regular}></img>
                </a>
                <a href={photos[11].urls.full}>
                  <img className="img-fluid" src={photos[11].urls.regular}></img>
                </a>
              </div>
            </div>

      return (
        <div>
          {photoGallery}
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand">Photo Search</div>
            <form className="form-inline">
              <input className="form-control mr-sm-2" name="query" value={this.state.query} placeholder="Search" onChange={ e => this.handleInputChange(e) }></input>
              <button type="submit" className="my-sm-0 btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Search</button>
            </form>
          </div>
        </div>
        
        <div className="container image-container">
          <div className="gallery-wrapper">
            {this.renderPhotos()}
          </div>
        </div>
      </div>
    )
  }
};

export default Gallery;
