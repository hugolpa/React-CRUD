import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
// trabalhando com o git 2
export default function App() {



  // const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);
  const handleRegisterGame = () => {
    Axios.post("https://crudhugo.herokuapp.com/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
      resumo: values.resumo,
    }).then(() => {
      Axios.post("https://crudhugo.herokuapp.com/search", {
        name: values.name,
        cost: values.cost,
        category: values.category,
        resumo: values.resumo,
      }).then((response) => {
        setListCard([...listCard,
        {
          id: response.data[0].id,
          name: values.name,
          cost: values.cost,
          category: values.category,
          resumo: values.resumo,
        },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("https://crudhugo.herokuapp.com/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };
// validações
  const [values, setValues] = React.useState({
    name: '',
    cost: '',
    
  })

  const [validations, setValidations] = React.useState({
    name: '',
    cost: '',
    
  })

  const validateAll = () => {
    const { name,cost } = values
    const validations = { name: '', cost:''}
    let isValid = true

    if (!name) {
      validations.name = 'Nome é requerido'
      isValid = false
    }

    if (name && name.length < 3 || name.length > 50) {
      validations.name = 'Nome pode ter de 3 a 50 caracteres'
      isValid = false
    }
    if (!cost) {
      validations.cost = 'Preço é requerido'
      isValid = false
    }




    if (!isValid) {
      setValidations(validations)
    }

    return isValid
  }

  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''

    if (!value) {
      message = `${name} é requerido`
    }

    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Nome deve ter de 3 a 50 caracteres'
    }
    


    setValidations({ ...validations, [name]: message })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateAll()

    if (!isValid) {
      return false
    }
    // executa a handleRegisterGame
    handleRegisterGame();
    document.getElementById("botao").disabled = true;
    setTimeout(function(){
      window.location.reload();
    });
    
    // alert(JSON.stringify(values))
  }

  const { name, cost } = values

  const {
    name: nameVal,
    cost: costVal,
    
  } = validations


  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">

          <div class="alinhamento">
            <h1 className="card-title text-center">Hugo´s games recorder</h1>
            
              <Input type="text" name="name" value={name} onBlur={validateOne} placeholder="Nome" required="required" className=" w-25 mt-2 " onChange={handleaddValues} />
              <Input type="number" placeholder="Preço"  name="cost" value={cost} onBlur={validateOne} className=" w-25 mt-2" onChange={handleaddValues} />
              <Input type="text" placeholder="Categoria" name="category"  className="w-25 mt-2" onChange={handleaddValues} />
              <Input type="text" placeholder="Resumo" name="resumo" className="w-25 mt-2" onChange={handleaddValues} />
            
            

          </div>
          <div className="text-center mt-4">
            <Button id="botao" type="submit" onClick={handleSubmit} className="btn-success mt-4"> Cadastrar </Button>
          </div>


        </div>
        
      </div>
      <p>{nameVal} {costVal}</p>
      
      <div class="alinhamento">
        {listCard.map((val) => (

          <Card

            listCard={listCard}
            setListCard={setListCard}
            key={val.games} id={val.id}
            name={val.name}
            cost={val.cost}
            category={val.category}
            resumo={val.resumo}
          />

        ))}
      </div>
    </div >

  );
}
