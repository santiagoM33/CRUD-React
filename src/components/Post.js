import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

const Post = (props) => {
    const {id,title} = props.info;

    const confirmarEliminacion = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            props.borrarPost(id)
          }) 
    }

    return ( 
        <tr className='text-primary'>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <Link to={`/post/${id}`} className='btn btn-secondary bg-light text-dark'><i className="fas fa-eye"></i></Link>
                <Link to={`/editar/${id}`} className='btn btn-warning'><i className="fas fa-edit"></i></Link>
                <button onClick={confirmarEliminacion} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>
     );
}
 
export default Post;