/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';

class Main extends React.Component {
  constructor(props,context){
      super(props,context);
  }
  
  
    render() {

      
        return (

            <div style ={{height:'100%',position:"relative"}}>
                Hello,world
            </div>
        )
    }
}

ReactDom.render(
    <Main />
,
    document.getElementById('root')
);
