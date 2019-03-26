import React, { Component } from 'react'
import { 
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd'
import './list.scss'

const { Meta } = Card;
export class List extends Component {
    state = {
        loading: false,
    }

  render() {
    const { loading } = this.state;

    return (
      <div className="page-list">
        <div className="list-container">
          {
            new Array(100).fill(0).map((e,i)=>
              <div className="card-outter">
                <Card
                  className="gutter-row"
                  key={e+':'+i}
                  style={{ width: 300, marginTop: 16 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                  <Skeleton loading={loading} avatar active>
                    <Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton>
                </Card>  
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default List
