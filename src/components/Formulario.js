import React from 'react';

class Formulario extends React.Component {

    tituloRef = React.createRef();
    entradaRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1
        }

       this.props.crearPosts(post)
    }

    render() { 
        return ( 
            <form className='col-12 col-md-8 mt-3' onClick={this.crearPost}>
                <legend className='text-center'>Crear nuevo Post</legend>
                <div className='form-group'>
                    <label>Titulo del Post</label>
                    <input type='text' className='form-control' ref={this.tituloRef}/>
                </div>
                <div className='form-group'>
                    <label>Contenido</label>
                    <textarea className='form-control' placeholder='Contenido...'  ref={this.entradaRef}></textarea>
                </div>
                <button type='submit' className='btn btn-primary btn-block'>CREAR</button>
            </form>
         );
    }
}
 
export default Formulario;
<div>Formulario</div>