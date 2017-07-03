/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import './index.less';
import Test from './test.json';

class Main extends React.Component {
  constructor(props,context){
      super(props,context);
  }
  
  
    render() {

      
        return (

            <div className="g-main">
              <div className="u-person">
                {Test.items.map((item,index)=>{
                  return(
                      <div className="u-person-detail" key={index}>
                          <p>姓名：{item.name}</p>
                          <p>年龄：{item.age}</p>
                      </div>
                    )
                })}
              </div>
                <p style={{textIndent:40}}>列表图片：</p>
               <img src={require('./img.png')} alt=""/>
            </div>
        )
    }
}

ReactDom.render(
    <Main />
,
    document.getElementById('root')
);
