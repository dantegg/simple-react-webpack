/**
 * Created by dantegg on 2017/3/2.
 */
import React,{Component} from 'react'


export default class Test extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div style={{height:'100%'}}>
                <div style={{height:'10%',background:'#000'}}>
                    <div>sss</div>
                </div>
                <div style={{height:'90%',background:"red"}}>
                    <div>fff</div>
                </div>
            </div>
        )
    }
}
