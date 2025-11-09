import {Link} from "react-router-dom";

const HomePage =()=>{
return(
<div ClassName="min-h-screen bg-blue">
<nav ClassName="flex justify-between items-center bg-pink-200 p-4 text-red">
    <div ClassName="flex items-center">
<img src="KL.png" alt = "KL Logo" ClassName="w-20 mr-3"/>
<h1 ClassName="text-2x1 font-bold">Product Management System</h1>
    </div>
    <div ClassName="flex gap-4">
<Link to ="/Siginin" ClassName="hover:underline">SignIn</Link>
<Link to ="/signup">Sign Up</Link>
<Link to ="aboutus">About Us</Link>
    </div>
</nav>
<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat mollitia tempora molestiae fuga, sed eos dolorum impedit maiores aspernatur delectus dolorem laudantium quam. Quo, quas ea! Ea, culpa quos. Fugiat voluptatum iste nesciunt quos veritatis odio inventore nulla cum nisi nihil, eum distinctio vitae officia praesentium. Corrupti, modi laudantium?</p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        
</div>
</div>
)
}

export default HomePage;