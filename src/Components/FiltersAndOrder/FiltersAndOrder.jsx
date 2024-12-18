import { Button, Checkbox, FormGroup, FormControlLabel, ToggleButton } from "@mui/material";
import { Check, CheckBox, CheckBoxOutlineBlank, ToggleOn, ToggleOff } from "@mui/icons-material";
import { getAllProducts } from "../../Redux/actions";
import { useState } from "react"

export default function FiltersAndOrder(){

    const [selected, setSelected] = useState(false);


    return(
        <div>
            <div>
                <Button variant="contained" color="primary" onClick={() => console.log("MENOR PRECIO")}>MENOR PRECIO</Button>
                <Button variant="contained" color="primary" onClick={() => console.log("MAYOR PRECIO")}>MAYOR PRECIO</Button>
            </div>

            <div>
                <label htmlFor="categories">CATEGORIAS</label>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Categoria 1"/>
                    <FormControlLabel control={<Checkbox/>} label="Categoria 2"/>
                    <FormControlLabel control={<Checkbox/>} label="Categoria 3"/>
                </FormGroup>
            </div>

            <div>
                <ToggleButton value={"check"} selected={selected} onChange={() => setSelected((prevselected) => !prevselected)}>
                    
                </ToggleButton>
            </div>
        </div>
    )
}