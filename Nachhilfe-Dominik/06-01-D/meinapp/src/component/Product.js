import React ,{useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "./Button/Button";
import { BsHeart } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import VideoIframe from "./Video/VideoIframe";

const Product = ({id,  title, url, imag ,category }) => {

    return (
        
                <Card>
        {/* <Link className="link" to={"/product/" + id}> 
        </Link> */}
            {
    category==="foto" ?(<Card.Img style={{ height: "250px" }} variant="top" src={imag} /> ):( 
                <VideoIframe title={title} url ={url}/>
                
            )
            }
          
       

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <div className="icon">
                    <Button label="in den Warenkorb"></Button>
                    <BsHeart />
                    <BiLike />
                </div>
            </Card.Body>
        </Card>
        
    );
};

export default Product;
