import { Paper, TextField, Typography ,Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { FcGoogle } from "react-icons/fc";

export default function SignUp(){
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <Paper elevation={12} className="LoginPage">
            <p style={{color:"#b5b0b0"}}>Hi there welcome too <span style={{color:"blue"}}>Shedula</span></p>
            <h3>Login</h3>
            <TextField label="Enter Mobile Number" size="small"/>
            <TextField label="Enter Password" size="small"/>
            <div className="loginsetup">
                <div style={{display:"flex",alignItems:"center"}}>
                <Checkbox {...label} size="small"/> <span style={{color:"#b5b0b0"}}>Remember Me</span>
                </div>
                 <span style={{color:"red"}}>Forgot Password</span>
            </div>
            <Button variant="contained" style={{textTransform:'capitalize'}}>Login</Button>
            <div className="line-text">
                Or login with
            </div>
            <Button variant="outlined" style={{color:"black",border:"1px solid #b5b0b0",textTransform:"capitalize",gap:"7px"}}>
                <FcGoogle style={{fontSize:"20px"}}/>Continue With Google</Button>
            <div className="noaccount">
                <p style={{color:"#b5b0b0"}}>Don't have an account?</p><p style={{color:"blue",fontSize:"14px"}}>Sign Up</p>
            </div>
        </Paper>
    )
}