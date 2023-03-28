import React, {useState} from "react";
import { LikeOutlined, LikeFilled } from '@ant-design/icons';


function LikeEmoji(props){
    const [isLiked,setIsLiked] = useState(props.isLiked);// eslint-disable-line no-unused-vars

    return (
        isLiked?<LikeFilled className="like-yellow"/>:<LikeOutlined />
    );
}

export default LikeEmoji;