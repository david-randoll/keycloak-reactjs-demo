import { useState } from "react";
import UserService from "../services/UserService";

const Welcome = () => {
  const [username, setUsername] = useState("")
  return(
    <div className="my-5 p-5 bg-body-secondary rounded-3">
      <h1 className="text-body-emphasis">Hello Anonymous!</h1>
      <p className="lead">Please authenticate yourself!</p>
      <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <p>
        <button className="btn btn-lg btn-success" onClick={() => UserService.doLogin({ loginHint: username })}>Continue with Email</button>
      </p>
      <p>
        <button className="btn btn-lg btn-success" onClick={() => UserService.doLogin({ idpHint: "microsoft" })}>Login with Microsoft</button>
      </p>
      <p>
        <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin({ acr: { values: ['gold'], essential: true } })}>
          Login (Gold)
        </button>
      </p>
    </div>
  )
}


export default Welcome
