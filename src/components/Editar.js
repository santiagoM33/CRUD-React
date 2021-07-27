import React from 'react';

class Editar extends React.Component {
    tituloRef = React.createRef();
    entradaRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            id: this.props.post.id
        }
        //console.log(post)

        this.props.actualizarPost(post)
    }

    cargarFormulario = () => {
        if(!this.props.post) return null;
        const {title,body} = this.props.post;

        return ( 
            <form className='col-12 col-md-8 mt-3' onClick={this.editarPost}>
                <legend className='text-center'>Editar Post</legend>
                <div className='form-group'>
                    <label>Editar Post</label>
                    <input type='text' className='form-control' ref={this.tituloRef} defaultValue={title}/>
                </div>
                <div className='form-group'>
                    <label>Contenido</label>
                    <textarea className='form-control' ref={this.entradaRef} defaultValue={body}></textarea>
                </div>
                <button type='submit' className='btn btn-primary btn-block'>ACTUALIZAR</button>
            </form>
         );
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
         );
    }
}
 
export default Editar;