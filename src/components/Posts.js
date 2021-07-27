import React from 'react';
import Listado from './Listado';

class Posts extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='col-12 col-md-8 mt-3'>
                <h2 className='text-center h3'>Posts</h2>
                <Listado 
                    posts={this.props.posts}
                    borrarPost={this.props.borrarPost}
                />
            </div>
         );
    }
}
 
export default Posts;