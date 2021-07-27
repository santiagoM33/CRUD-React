import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Formulario from './Formulario';
import Swal from 'sweetalert2'
import Editar from './Editar';

class Router extends React.Component {
    state = { 
        posts: []
    }

    componentDidMount(){
        this.obtenerPost();
    }

    crearPost = (post) => {
        const BASEURL = 'https://jsonplaceholder.typicode.com/posts';
        axios.post(BASEURL, {post})
            .then(res=>{
                if(res.status === 201){
                    let postId = {id: res.data.id}
                    const nuevoPost= Object.assign({}, res.data.post, postId)
                    //console.log(nuevoPost)
                    this.setState(prevState => ({
                        post: [...prevState.posts, nuevoPost] 
                    }))
                    Swal.fire(
                        'Good job!',
                        'Post Created Successfully',
                        'success'
                        );
                }
            }
        )
    }

    obtenerPost = () => {
        const BASEURL = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(BASEURL)
            .then(res=>this.setState({posts: res.data}))
    }

    actualizarPost = postActualizado => {
        const {id} = postActualizado;
        const BASEURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios.put(BASEURL, {postActualizado})
            .then(res=>{
                if(res.status === 200){
                    //this.obtenerPost()
                    let postId = res.data.id;
                    const posts = [...this.state.posts];
                    const postEditar = posts.findIndex(post => post.id === postId);
                    //console.log(posts[postEditar])
                    posts[postEditar] = postActualizado;

                    this.setState({posts})
                }
            }
        )
    }

    borrarPost = id => {
        const BASEURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios.delete(BASEURL)
            .then(res=>{
                if(res.status === 200) {
                    const posts = [...this.state.posts]
                    let resultado = posts.filter(post => (post.id !== id))
                    this.setState({posts: resultado})
                    Swal.fire(
                        'Good job!',
                        'Post Updated Successfully',
                        'success'
                        );
                }
            })
    }

    render() { 
        const posts = this.state.posts;
        if(!posts) return null
        //console.log(this.state.posts)
        return ( 
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header title='CRUD React'/>
                        <Navegacion />
                        <Switch>
                            <Route exact path="/" render={()=>{
                                return (
                                    <Posts posts={posts} borrarPost={this.borrarPost}/>
                                )
                            }} />
                            <Route exact path='/post/:postId' render={props=> {
                                let idPost = props.location.pathname.replace('/post/', '');
                                if(posts.length === 0) return null
                                let filtro;
                                filtro = posts.filter(post=>(post.id === Number(idPost)))

                                return(
                                    <SinglePost post={filtro[0]}/>
                                )
                            }}
                            />
                            <Route exact path='/crear' render={()=>{
                                return (
                                    <Formulario crearPosts={this.crearPost} />
                                )
                            }} />
                            <Route exact path='/editar/:postId' render={props=> {
                                let idPost = props.location.pathname.replace('/editar/', '');
                                if(posts.length === 0) return null
                                let filtro;
                                filtro = posts.filter(post=>(post.id === Number(idPost)))

                                return(
                                    <Editar post={filtro[0]} actualizarPost={this.actualizarPost}/>
                                )
                            }}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;

