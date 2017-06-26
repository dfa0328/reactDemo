/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import './index.less';

class Main extends React.Component {
  constructor(props,context){
      super(props,context);
  }
  
  
    render() {

      
        return (

            <div className="g-main">
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
