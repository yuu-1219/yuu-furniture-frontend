import TextField from "@mui/material/TextField"
import { useState } from "react";

export default function PasswordForm() {
    const [password, setPassword] = useState("");
    const UpdatePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
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
                パスワード
            </label>
            <input
                type="password"
                id="password"
                name="password" 
                // placeholder=""
                value={password}
                onChange={UpdatePassword}
                style={{
                    height: "30px",
                    // width : "450px",
                    width: "100%",
                    fontSize: "18px",
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