import React, {Component} from 'react';
import ComponentCard from './components/card';
import AppBar from './components/appBar';


class App extends Component {

  cardClickHandler = (section) => {

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
              onCardClicked={this.cardClickHandler('about')}/>
          <ComponentCard
            eyebrow="Wanna update your Blogs List?"
            title="Blog"
            subtitle="Writing your thoughts out is the best way to express yourself"
            description="Whatever you update here will be reflected in the blog section."
            onCardClicked={this.cardClickHandler('blog')}/>
          <ComponentCard
            eyebrow="Wanna update Images?"
            title="Images"
            subtitle="Rich graphical content is always eye catchy"
            description="Update the images and banners on your website."
            onCardClicked={this.cardClickHandler('images')}/>
          </div>
        </div>
    )
  }

}

export default App;
