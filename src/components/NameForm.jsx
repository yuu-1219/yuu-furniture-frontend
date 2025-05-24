import TextField from "@mui/material/TextField"
import { useState } from "react";

export default function NameForm({ name, setName }) {
    // const [name, setName] = useState("");
    const UpdateName = (e) => {
        setName(e.target.value);
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // flexWrap: "wrap",  
                // gap: "30px",
                margin: "10px",
                // maxWidth: "600px",     
                width: "100%"
            }}
        >
            <label 
                for="name"
                style={{
                    fontWeight: "600",
                    width: "20%",
                    textAlign: "left",
                    minWidth: "80px"
                }}>
                名前
            </label>

            <input
                type="text"
                id="name"
                name="name" 
                placeholder="山田 太郎"
                value={name}
                onChange={UpdateName}
                style={{
                    height: "35px",
                    // width : "450px",
                    width: "80%",
                    fontSize: "15px",
                    flexGrow: 1,
                    flexBasis: 0,   
                    minWidth: "20px",
                }}
            />

            {/* <TextField
                 id="outlined-basic"
                 label="名前"
                 variant="outlined"
                 value={name}
                 onChange={UpdateName}
             /> */}
            
        </div>
    
    );
}