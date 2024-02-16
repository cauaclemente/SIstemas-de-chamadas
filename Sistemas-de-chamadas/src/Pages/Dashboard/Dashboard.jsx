
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import Header from "../../Components/Header/Header";
import { Title } from "../../Components/Title/Title";
import "./Dashboard.css"


const Dashboard = () => {

  return (
    <>
    <Header />
    <div className="content">
      <Title name="Tickets">
        <FiMessageSquare size={25} />
      </Title>
      <Link to="/new" className="new">
        <FiPlus color="#fff" size={25} />
        Novo chamado
      </Link>
      <table>
        <thead>
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Assunto</th>
            <th scope="col">Status</th>
            <th scope="col">Cadastrado em</th>
            <th scope="col">#</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td data-label="Cliente">Mercado esquina</td>
              <td data-label="Assunto">Suporte</td>
              <td data-label="Status">
                <span className="badge" style={{backgroundColor: "#999"}}>
                  Em aberto
                </span>
              </td>
              <td data-label="Cadastro">12/05/2023</td>
              <td data-label="#">
                  <button className="actions" style={{backgroundColor: "#3583f6"}}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="actions" style={{backgroundColor: "#f6a935"}}>
                    <FiEdit2 color="#fff" size={17} />
                  </button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>

    </>
  )
}

export default Dashboard