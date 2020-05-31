import React, {Component} from 'react';
import ComponentCard from './components/card';
import AppBar from './components/appBar';
import Snackbar from './components/snackbar';

class App extends Component {
    state = {
        showSnackbar: false,
        text: 'This is snackbar',
        severity: 'success'
    };
  cardClickHandler = (section) => {
      this.setState({showSnackbar: true, text: `You clicked on ${section}`, severity: 'success'});
      setTimeout(() => this.setState({showSnackbar: false}), 3000);
};

  render () {
    return (
        <div>
          <AppBar/>
          <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ComponentCard
              eyebrow="Wanna update your About ?"
              title="About"
              subtitle="Make sure you write something awesome"
              description="Whatever you write here will be displayed in the About section of your website."
              onCardClicked={() => this.cardClickHandler('about')}/>
          <ComponentCard
            eyebrow="Wanna update your Blogs List?"
            title="Blog"
            subtitle="Writing your thoughts out is the best way to express yourself"
            description="Whatever you update here will be reflected in the blog section."
            onCardClicked={() => this.cardClickHandler('blog')}/>
          <ComponentCard
            eyebrow="Wanna update Images?"
            title="Images"
            subtitle="Rich graphical content is always eye catchy"
            description="Update the images and banners on your website."
            onCardClicked={() => this.cardClickHandler('images')}/>
          </div>

            <Snackbar show={this.state.showSnackbar} color={this.state.severity} text={this.state.text}/>
        </div>
    )
  }

}

export default App;
