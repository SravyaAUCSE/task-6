import Gallery from './components/gallery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Gallery />
    	</div>)
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
