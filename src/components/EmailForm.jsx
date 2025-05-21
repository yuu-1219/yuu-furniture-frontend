import TextField from "@mui/material/TextField"
import { useState } from "react";

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const UpdateEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                 // flexWrap: "wrap",  
                // gap: "30px",
                margin: "10px",
                maxWidth: "600px",     
                width: "100%"
            }}
        >
            <label 
                for="email"
                style={{
                    fontWeight: "600",
                    width: "150px",
                    textAlign: "left",
                    minWidth: "80px"
                }}>
                メールアドレス
            </label>
            <input
                type="email"
                id="email"
                name="email" 
                placeholder="yuu@gmail.com"
                value={email}
                onChange={UpdateEmail}
                style={{
                    height: "30px",
                    // width : "450px",
                    width: "100%",
                    fontSize: "15px",
                    flexGrow: 1,
                    flexBasis: 0,   
                    minWidth: "20px",
                }}
            />

              {/* <TextField
                id="outlined-basic"
                label="メールアドレス"
                placeholder="yuu@gmail.com"
                variant="outlined"
                value={email}
                onChange={UpdateEmail}
            /> */}


        </div>
    );
}