import React from 'react';
import { Card } from 'antd';
import { formatDistanceToNow } from 'date-fns';

export const Post = ({ post }) => {


    console.log(" in post " + post);

    const timeAgo = formatDistanceToNow(new Date(post.createdDate), { addSuffix: true });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <Card className='shadow' title={post.userName} size="small" style={{ width: '50%', textAlign: 'left' }}>
                <p>{post.text}</p>
                <div style={{ marginTop: '10px', color: '#888' }}>
                    {timeAgo}
                </div>
            </Card>
        </div>
    );
};

export default Post;
