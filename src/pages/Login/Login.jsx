import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {

  const [currState,setCurrState] = useState("Cadastre-se");

  return (
    <div className='login'>
        <img src={assets.logo_big} alt='' className='logo' />
        <form className='login-form'>
          <h2>{currState}</h2>
          {currState === "Cadastre-se"?<input type='text' placeholder='Nome Completo' className='form-input' required/>:null}
          <input type='email' placeholder='Email' className='form-input' required/>
          <input type='password' placeholder='Senha' className='form-input' required/>
          <button type='submit'>{currState === "Cadastre-se"?"Cadastrar":"Entrar"}</button>
          <div className='login-term'>
            <input type='checkbox'/>
            <p>Concorda com os Termos de Uso e a Política de Privacidade?</p>
          </div>
          <div className='login-forgot'>
            {
              currState === "Cadastre-se"
              ?<p className='login-toggle'>Já possui uma conta? <span onClick={()=>setCurrState("Login")}>Clique aqui</span></p>
              :<p className='login-toggle'>Cadastre-se <span onClick={()=>setCurrState("Cadastre-se")}>Clique aqui</span></p>
            }
          </div>
        </form>
    </div>
  )
}

export default Login