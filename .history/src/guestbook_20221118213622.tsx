import React, { useState } from "react";
import { Avatar, Button, List } from "antd";
import axios from "axios";

type GuestbookItem = {
    key: number,
    title: string,
    content: string,
    username: string
  }
  
  const Guestbook = () => {
    const [loading,setLoading ] = useState<boolean>(false);
    const [data, setData] = useState<GuestbookItem[]>([]);


    const fecthGuestbookItems = async () => {
        const { data } = await axios.get('http://localhost:3001/guestbook/items');
        //위에거 url 변경
        // console.log('results', results);
        const items: GuestbookItem[] = [];
        const results = data;
        for (let i=0; i < results.length; i++) {
            items.push({
                key: results[i].id,
                title: results[i].title,
                content: results[i].content,
                username: results[i].name,
            })
        }
        setData(items)
    };
    return(
    <>
     <List
     loading={loading}


      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item style = {{background: '#fff'}}>
          <List.Item.Meta
            avatar={
            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: "center"}}>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            <>{item.username}</>
            </div>
          }
          title={item.title}
          description={item.content}
          />
        </List.Item>
      )}
    />
    <Button
     onClick={async() => {
        setLoading(true);
        await fecthGuestbookItems();
        setLoading(false);
     }}
     >수동 새로고침</Button>
    </>)
  }
  export default Guestbook;
