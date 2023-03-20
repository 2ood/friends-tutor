import React, {useState} from "react";
import { LikeOutlined, LikeFilled } from '@ant-design/icons';


function LikeEmoji(props){
    const [isLiked,setIsLiked] = useState(props.isLiked);

    return (
        isLiked?<LikeFilled className="like-yellow"/>:<LikeOutlined />
    );
}

export default LikeEmoji;