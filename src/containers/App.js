import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout'
import RecipeBuilder from './RecipeBuilder/RecipeBuilder'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
        <RecipeBuilder />
        </Layout>
      </div>
    )

  }
}

export default App;
