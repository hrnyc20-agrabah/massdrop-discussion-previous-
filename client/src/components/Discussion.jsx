import React, { Component } from 'react'
import axios from 'axios'


export class Discussion extends Component {
    constructor(props){
        super(props)
        this.state = {
            userNames : ''
        }
    }


    // getUserId(){
    //     axios.get('/api/user/:userName')
    //         .then(data =>  {
    //             this.setState({userNames : data.username})
    //         })
    //         .catch(err => console.log(err))
    // }


  render() {
    return (
      <div>
         <ul>
          {this.state.usernames.map((username, id) => {
            return ( 
                <li>

                </li>
            )
            })}

        </ul>
        


        <div>
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      )}
    </div>
      </div>
    )
  }
}

export default Discussion



