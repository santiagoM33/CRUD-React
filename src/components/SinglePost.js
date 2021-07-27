import React from 'react';

const SinglePost = (props) => {
    
    const mostrarPost = (props) => {
        if(!props.post) return null;
        const {title, body, userId} = props.post;
        return (
            <React.Fragment>
                <h3>{title}</h3>
                <p>Autor: {userId}</p>
                {body}
            </React.Fragment>
        )
    }

    return ( 
        <div className='col-12 col-d-8 mt-3 text-center'>{mostrarPost(props)}</div>
     );
}
 
export default SinglePost;