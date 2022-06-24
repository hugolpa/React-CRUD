import React from "react";
import FormDialog from "../dialog/dialogForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css";
import { CardText } from 'reactstrap';
export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        category={props.category}
        resumo={props.resumo}
        cost={props.cost}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className=" card-container   col-md-4 mt-2" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <CardText className="">{props.category}</CardText>
        <CardText className="">{props.resumo}</CardText>
        <CardText className="">R${props.cost}</CardText>
      </div>
    </>
  );
}
